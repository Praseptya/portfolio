import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";
// Alamat file CV untuk tombol Unduh / Tab baru (Vite menambahkan kode unik di nama file,
// jadi setelah CV diganti browser tidak menampilkan versi lama dari cache).
import cvUrl from "../assets/cv.pdf?url";

// Isi PDF dimasukkan ke dalam kode situs (bukan diunduh lewat jaringan), sehingga
// IDM atau download manager lain tidak bisa mencegatnya. Hanya dimuat saat pop-up dibuka.
async function loadCvBytes() {
  const { default: base64 } = await import("../assets/cv.pdf?base64");
  const bin = atob(base64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

// Semua halaman PDF digambar ke canvas dengan pdf.js (sama di desktop dan HP).
function PdfPages() {
  const wrapRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    let doc;

    (async () => {
      try {
        const [pdfjs, { default: workerSrc }, bytes] = await Promise.all([
          import("pdfjs-dist/legacy/build/pdf.min.mjs"),
          import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url"),
          loadCvBytes(),
        ]);
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

        doc = await pdfjs.getDocument({ data: bytes }).promise;
        const wrap = wrapRef.current;
        if (cancelled || !wrap) {
          doc.destroy();
          return;
        }
        wrap.innerHTML = "";

        const width = wrap.clientWidth;
        const dpr = Math.min(window.devicePixelRatio || 1, 2.5);

        for (let n = 1; n <= doc.numPages; n++) {
          const page = await doc.getPage(n);
          const base = page.getViewport({ scale: 1 });
          const viewport = page.getViewport({ scale: (width / base.width) * dpr });

          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          canvas.className = "mb-3 rounded-lg bg-white shadow-lg";
          wrap.appendChild(canvas);

          await page.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
          if (cancelled) return;
          if (n === 1) setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
      doc?.destroy();
    };
  }, []);

  return (
    <div className="relative flex-1 overflow-y-auto bg-black/20 p-3">
      <div ref={wrapRef} />
      {status === "loading" && (
        <p className="absolute inset-0 grid place-items-center text-muted">Memuat CV...</p>
      )}
      {status === "error" && (
        <p className="absolute inset-0 grid place-items-center p-6 text-center text-muted">
          Pratinjau tidak bisa dimuat. Silakan gunakan tombol Unduh di atas.
        </p>
      )}
    </div>
  );
}

export default function CvModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau CV"
          className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-3 backdrop-blur-sm sm:p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-line/15 bg-bg"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line/10 px-4 py-3 sm:px-5">
              <h3 className="font-display text-lg font-semibold">Pratinjau CV</h3>
              <div className="flex items-center gap-2">
                <a href={cvUrl} download="CV_MuhamadAryaPraseptya.pdf" className="btn btn-gold !px-4 !py-2">
                  <Download size={15} /> Unduh
                </a>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost !px-4 !py-2 max-sm:hidden"
                >
                  <ExternalLink size={15} /> Tab baru
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Tutup pratinjau"
                  className="grid h-10 w-10 place-items-center rounded-full border border-line/20 hover:border-gold"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <PdfPages />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
