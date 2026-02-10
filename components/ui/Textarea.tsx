import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-2 block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-mercosur-blue/30 bg-bg-elevated px-4 py-3",
            "text-foreground placeholder:text-gray-500",
            "transition-all focus:border-mercosur-blue focus:outline-none focus:ring-2 focus:ring-mercosur-blue/20",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "min-h-[120px] resize-y",
            error && "border-paraguay-red focus:border-paraguay-red focus:ring-paraguay-red/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-paraguay-red">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
