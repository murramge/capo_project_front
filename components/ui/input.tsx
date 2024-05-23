import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full border border-input bg-background px-3 py-2 text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}>
        {icon && (
          <div className="p-1">
            <img src={icon} width={14}></img>
          </div>
        )}
        <input
          type={type}
          ref={ref}
          {...props}
          className="w-full outline-none"
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
