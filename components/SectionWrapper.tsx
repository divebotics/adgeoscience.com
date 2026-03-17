import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  neutral?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  dark = false,
  neutral = false,
}: SectionWrapperProps) {
  const bg = dark
    ? "bg-primary-dark text-white"
    : neutral
    ? "bg-template-neutral text-primary-dark"
    : "bg-white text-primary-dark";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
