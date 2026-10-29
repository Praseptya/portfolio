import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";
import { profile } from "../data/portfolioData";

// Desktop punya penampil PDF bawaan. Chrome di Android/iOS tidak (atau hanya
// menampilkan halaman pertama), jadi di HP kita gambar sendiri halamannya dengan pdf.js.
const isMobile =
  typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const useNative =
  typeof navigator !== "undefined" && navigator.pdfViewerEnabled === true && !isMobile;

/* ---------- Pratinjau untuk HP: semua halaman digambar ke canvas ---------- */
function PdfPages({ url }) {
  const wrapRef = useRef(null);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  useEffect(() => {
    let cancelled = false;
    let doc;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.min.mjs");
        const { default: workerSrc } = await import(
          "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url"
        );
        pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

        doc = await pdfjs.getDocument(url).promise;
        const wrap = wrapRef.current;
        if (cancelled || !wrap) return;
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
  }, [url]);

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

/* ---------- Pratinjau untuk desktop: iframe + blob (tahan IDM) ---------- */
function NativeViewer({ url }) {
  const [blobUrl, setBlobUrl] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let made;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("gagal");
        return r.blob();
      })
      .then((b) => {
        made = URL.createObjectURL(new Blob([b], { type: "application/pdf" }));
        setBlobUrl(made);
      })
      .catch(() => setFailed(true));
    return () => made && URL.revokeObjectURL(made);
  }, [url]);

  if (blobUrl)
    return <iframe src={blobUrl} title="Pratinjau CV" className="h-full w-full flex-1 bg-white" />;
  return (
    <div className="grid flex-1 place-items-center p-6 text-center text-muted">
      {failed ? "Pratinjau tidak bisa dimuat. Silakan gunakan tombol Unduh." : "Memuat CV..."}
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
                <a href={profile.cv} download className="btn btn-gold !px-4 !py-2">
                  <Download size={15} /> Unduh
                </a>
                <a
                  href={profile.cv}
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

            {useNative ? <NativeViewer url={profile.cv} /> : <PdfPages url={profile.cv} />}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}