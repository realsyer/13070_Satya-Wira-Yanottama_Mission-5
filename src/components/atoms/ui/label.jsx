import { cn } from "@/lib/utils";

export default function Label({ className, children, props }) {
  return (
    <label className={cn("text-[10px] md:text-base",className)} {...props}>{children}</label>
  )
}