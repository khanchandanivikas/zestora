import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ButtonLink = ({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link href={href} className={`btn btn-primary ${className}`}>
      {children}
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  );
};
