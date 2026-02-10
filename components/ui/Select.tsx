import { SelectHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-mercosur-blue/30 bg-bg-elevated px-4 py-3",
            "text-foreground",
            "transition-all focus:border-mercosur-blue focus:outline-none focus:ring-2 focus:ring-mercosur-blue/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "cursor-pointer",
            error && "border-paraguay-red focus:border-paraguay-red focus:ring-paraguay-red/20",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-paraguay-red">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
