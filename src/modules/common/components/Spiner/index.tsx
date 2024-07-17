import { cn } from "@/lib/utils";
import { FC } from "react";

interface SpinnerProps {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
  return (
    <span className={cn("loader scale-50 after:scale-50", className)}></span>
  );
};

export default Spinner;
