import { Cherry, Droplet, Leaf, Citrus, Sprout } from "lucide-react";

const STRIP_ICONS = [Cherry, Citrus, Droplet, Sprout, Leaf];
const STRIP_ICON_COLORS = ["#eb6c3a", "#b1c649", "#49aa64"];

export const FreshStrip = () => {
  return (
    <div
      className="rounded-pill px-5 py-2.25 bg-white text-ink overflow-x-auto scrollbar-hide"
      aria-label="Fresh and cool drinks"
    >
      <div className="flex items-center justify-between gap-7 min-w-full w-max">
        {STRIP_ICONS.map((Icon, index) => (
          <span
            className="inline-flex items-center justify-between gap-7 whitespace-nowrap flex-[1_0_auto] font-display font-semibold text-[13px] leading-none"
            key={index}
            aria-hidden={index > 0 ? true : undefined}
          >
            Fresh and Cool Drink
            <Icon
              size={17}
              color={STRIP_ICON_COLORS[index % 3]}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </div>
  );
};
