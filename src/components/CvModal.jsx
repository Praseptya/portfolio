import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, X } from "lucide-react";
import { profile } from "../data/portfolioData";

export default function CvModal({ open, onClose }) {
    const [blobUrl, setBlobUrl] = useState(null);
    const [failed, setFailed] = useState(false);

    // Ambil PDF sekali saja saat pop-up pertama dibuka
    useEffect(() => {
    if (!open || blobUrl) return;
    fetch(profile.cv)
        .then((r) => {
        if (!r.ok) throw new Error("gagal");
        return r.blob();
        })
        .then((b) => setBlobUrl(URL.createObjectURL(new Blob([b], { type: "application/pdf" }))))
        .catch(() => setFailed(true));
    }, [open, blobUrl]);

    // Bersihkan alamat sementara saat komponen dilepas
    useEffect(() => {
    return () => {
        if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
    }, [blobUrl]);
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
          className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-line/15 bg-bg"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line/10 px-5 py-3">
              <h3 className="font-display text-lg font-semibold">Pratinjau CV</h3>
              <div className="flex items-center gap-2">
                <a
                  href={profile.cv}
                  download
                  className="btn btn-gold !px-4 !py-2"
                >
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

            {blobUrl ? (
                <iframe src={blobUrl} title="Pratinjau CV" className="h-full w-full flex-1 bg-white" />
                ) : (
                <div className="grid flex-1 place-items-center p-6 text-center text-muted">
                    {failed ? (
                    <p>
                        Pratinjau tidak bisa dimuat. Silakan gunakan tombol <b>Unduh</b> atau{" "}
                        <b>Tab baru</b> di atas.
                    </p>
                    ) : (
                    <p>Memuat CV...</p>
                    )}
                </div>
                )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}