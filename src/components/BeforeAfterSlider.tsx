"use client";

import { useCallback, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImage?: string;
  afterImage?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);

  const handleChange = useCallback((next: number) => {
    setValue(next);
  }, []);

  return (
    <div>
      <div
        className="relative mx-auto aspect-video max-w-[880px] select-none overflow-hidden rounded-[20px] border border-line-2"
        style={{ touchAction: "none" }}
      >
        <div
          className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#143a25] to-[#0e2a1b] font-display text-[clamp(20px,3vw,30px)] font-bold text-green"
          style={
            afterImage
              ? {
                  backgroundImage: `url(${afterImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-[#2a2520] to-[#1a1714]"
          style={{
            clipPath: `inset(0 ${100 - value}% 0 0)`,
            ...(beforeImage
              ? {
                  backgroundImage: `url(${beforeImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {}),
          }}
        >
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-before-accent">
          Before
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-black/45 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.06em] text-green">
          After
        </span>

        <div
          className="absolute bottom-0 top-0 z-[3] w-0.5 -translate-x-px bg-text"
          style={{ left: `${value}%` }}
        />

        <div
          className="absolute z-[4] grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-text text-ink shadow-[0_4px_18px_rgba(0,0,0,0.4)]"
          style={{ left: `${value}%`, top: "50%" }}
        >
          <ChevronsLeftRight className="h-5 w-5" strokeWidth={1.8} />
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => handleChange(Number(e.target.value))}
          aria-label="Reveal before and after"
          className="absolute inset-0 z-[5] m-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
