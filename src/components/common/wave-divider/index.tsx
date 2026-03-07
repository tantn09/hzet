type SectionDividerProps = {
  topColor: string;
  bottomColor: string;
  variant?: "wave" | "curve" | "tilt";
  flip?: boolean;
};

export function SectionDivider({
  topColor,
  bottomColor,
  variant = "curve",
  flip = false,
}: SectionDividerProps) {
  const paths = {
    wave: "M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,0 L0,0 Z",
    curve: "M0,0 L0,40 Q720,120 1440,40 L1440,0 Z",
    tilt: "M0,0 L0,80 L1440,0 Z",
  };

  return (
    <div
      className={`relative -my-px w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ background: bottomColor, lineHeight: 0, fontSize: 0 }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-10 w-full md:h-16"
        style={{ display: "block" }}
      >
        <rect width="1440" height="120" fill={bottomColor} />
        <path d={paths[variant]} fill={topColor} />
      </svg>
    </div>
  );
}
