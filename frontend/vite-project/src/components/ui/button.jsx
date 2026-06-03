import { cn } from "../../lib/utils";

export function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-[18px] font-light cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-[#2f3796] text-white hover:text-cyan-300",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
