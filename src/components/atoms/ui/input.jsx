import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    const [currentType, setCurrentType] = React.useState(type);

    return (
      <div className="relative select-none">
        <input
          type={currentType}
          className={cn(
            "flex h-7 md:h-[50px] w-full rounded-full border border-other-outline-border px-3 md:px-5 py-2 md:py-3.5 outline-none text-[10px] file:border-0 bg-transparent file:text-sm file:font-medium file:text-light-secondary placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {
          type === 'password' && (
            <div onClick={() => setCurrentType(currentType === 'password' ? 'text' : 'password')} className="absolute right-4 cursor-pointer top-2 md:top-[15px]">
              { currentType === 'password' ? (
                <EyeOff className="w-3 md:w-5 h-3 md:h-5" />
              ): (
                <Eye className="w-3 md:w-5 h-3 md:h-5" />
              )}
            </div>
          )
        }
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
