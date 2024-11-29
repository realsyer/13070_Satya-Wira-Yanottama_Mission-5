import { cn } from "@/lib/utils";

export default function PlayIcon({ className }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={cn("w-14 h-14", className)}>
      <path d="M23.0604 37.9552V17.3302L36.8104 27.6427M27.6437 4.72607C24.6343 4.72607 21.6543 5.31883 18.8739 6.4705C16.0935 7.62217 13.5672 9.3102 11.4392 11.4382C7.14148 15.7359 4.72705 21.5649 4.72705 27.6427C4.72705 33.7206 7.14148 39.5496 11.4392 43.8473C13.5672 45.9753 16.0935 47.6633 18.8739 48.815C21.6543 49.9667 24.6343 50.5594 27.6437 50.5594C33.7216 50.5594 39.5505 48.145 43.8482 43.8473C48.146 39.5496 50.5604 33.7206 50.5604 27.6427C50.5604 24.6333 49.9676 21.6533 48.816 18.8729C47.6643 16.0925 45.9763 13.5662 43.8482 11.4382C41.7202 9.3102 39.1939 7.62217 36.4135 6.4705C33.6332 5.31883 30.6532 4.72607 27.6437 4.72607Z" fill="white" />
    </svg>
  )
}