import { cn } from "@/lib/utils";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  badgeBg,
  onClick,
  isSelected
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-md transition duration-200 p-5 bg-white border justify-between flex flex-col space-y-4 cursor-pointer relative overflow-hidden",
        isSelected
          ? "border-brand-400 bg-brand-50/40 ring-1 ring-brand-200"
          : "border-slate-200/80 hover:border-brand-200",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center justify-between mb-2">
          {icon}
          {badge && (
            <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", badgeBg)}>
              {badge}
            </span>
          )}
        </div>
        <div className="font-semibold text-slate-800 text-base mb-1">
          {title}
        </div>
        <div className="font-normal text-slate-600 text-xs leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
