import { cn } from "@/lib/utils";

export default function Star({ className }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-4 h-4", className)}>
      <path d="M7.99967 11.5133L12.1197 13.9999L11.0263 9.31325L14.6663 6.15992L9.87301 5.74659L7.99967 1.33325L6.12634 5.74659L1.33301 6.15992L4.96634 9.31325L3.87967 13.9999L7.99967 11.5133Z" fill="white" />
    </svg>
  )
}