// Latar berlapis: grid tipis, tiga blob cahaya, dan partikel emas yang naik pelan.
// Kaca (glass) di atasnya akan mem-blur lapisan ini.
const particles = [
  { left: "6%", size: 4, dur: 24, delay: 0 },
  { left: "16%", size: 3, dur: 30, delay: 6 },
  { left: "27%", size: 5, dur: 26, delay: 12 },
  { left: "38%", size: 3, dur: 32, delay: 3 },
  { left: "49%", size: 4, dur: 22, delay: 9 },
  { left: "58%", size: 3, dur: 28, delay: 15 },
  { left: "68%", size: 5, dur: 34, delay: 2 },
  { left: "77%", size: 3, dur: 25, delay: 11 },
  { left: "86%", size: 4, dur: 29, delay: 7 },
  { left: "94%", size: 3, dur: 31, delay: 17 },
];

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none">
      <div className="bg-grid fixed inset-0 -z-10" />

      <div
        className="bg-blob -left-40 -top-40 h-[36rem] w-[36rem]"
        style={{ background: "rgb(var(--navy) / 0.6)" }}
      />
      <div
        className="bg-blob -bottom-48 -right-32 h-[30rem] w-[30rem]"
        style={{ background: "rgb(var(--gold) / 0.17)", animationDirection: "alternate-reverse" }}
      />
      <div
        className="bg-blob left-[40%] top-[35%] h-[24rem] w-[24rem]"
        style={{ background: "rgb(39 80 143 / 0.22)", animationDuration: "28s" }}
      />

      {particles.map((p, i) => (
        <span
          key={i}
          className="particle fixed -bottom-4 -z-10 animate-rise rounded-full bg-gold"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `-${p.delay}s`,
            boxShadow: "0 0 12px rgb(var(--gold) / 0.8)",
          }}
        />
      ))}
    </div>
  );
}
