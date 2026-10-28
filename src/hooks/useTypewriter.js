import { useEffect, useState } from "react";

// Efek mengetik & menghapus bergantian untuk daftar teks.
export default function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words?.length) return;
    const full = words[index % words.length];
    let delay = deleting ? erase : type;

    if (!deleting && text === full) delay = hold;

    const id = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(full.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, index, words, type, erase, hold]);

  return text;
}
