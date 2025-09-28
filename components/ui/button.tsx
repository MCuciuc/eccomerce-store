import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface ButtonProps
 extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

 const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
 }, ref ) => {
    return (
        <button
        className={cn(
        `
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-primary
        px-4
        py-2.5
        text-sm
        font-medium
        text-primary-foreground
        shadow-sm
        transition-all
        duration-200
        hover:bg-primary/90
        hover:shadow-md
        focus:outline-none
        focus:ring-2
        focus:ring-ring
        focus:ring-offset-2
        disabled:pointer-events-none
        disabled:opacity-50
        active:scale-95
        `,
        className
        )}
        ref={ref}
        {...props}
        >
       {children}
        </button>
    )
 });

 Button.displayName = "Button";

 export default Button;