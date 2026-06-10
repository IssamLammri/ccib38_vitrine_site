import { cn } from "../../lib/utils";

export function Button({ className, variant, size, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' | 'ghost', size?: 'default' | 'sm' | 'lg' }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        {
          "bg-emerald-700 text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-800 transition-colors": variant === 'default' || !variant,
          "border border-emerald-700 text-emerald-700 hover:bg-emerald-50": variant === 'outline',
          "hover:bg-emerald-50 text-emerald-700": variant === 'ghost',
          "h-10 px-4 py-2": size === 'default' || !size,
          "h-9 rounded-md px-3": size === 'sm',
          "h-12 rounded-md px-8 text-lg": size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}
