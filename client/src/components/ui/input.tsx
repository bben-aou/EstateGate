import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, onChange, onValueChange, value, ...props }, ref) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      onChange && onChange(e)
      onValueChange && onValueChange(newValue)
    }

    return (
      <input
        ref={ref}
        onChange={handleOnChange}
        type={type}
        value={value}
        className={cn(
          "flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"

export { Input }