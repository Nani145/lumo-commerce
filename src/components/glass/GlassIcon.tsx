import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassIconProps {
  icon: LucideIcon;
  label?: string;
  tint?: string; // any css color
  className?: string;
  onClick?: () => void;
}

export function GlassIcon({ icon: Icon, label, tint, className, onClick }: GlassIconProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <span
        className="glass-icon relative grid h-16 w-16 place-items-center rounded-3xl"
        style={
          tint
            ? {
                backgroundImage: `linear-gradient(145deg, ${tint}, color-mix(in oklab, ${tint} 30%, transparent))`,
              }
            : undefined
        }
      >
        <span className="pointer-events-none absolute inset-x-2 top-1 h-3 rounded-full bg-white/40 blur-md" />
        <Icon className="relative h-7 w-7 text-white drop-shadow" strokeWidth={2.25} />
      </span>
      {label ? (
        <span className="text-xs font-medium text-white/85">{label}</span>
      ) : null}
    </button>
  );
}
