import { Sprout } from "lucide-react";

export const SectionBadge = ({
  children = "Featured juices",
}: {
  children?: React.ReactNode;
}) => {
  return (
    <span className="inline-flex items-center gap-1.75 px-4.75 py-1.75 border border-border rounded-pill font-display uppercase text-[13px] font-semibold leading-none [&>svg]:text-[#759b39]">
      <Sprout size={14} aria-hidden="true" />
      {children}
    </span>
  );
};
