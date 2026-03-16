import Image from "next/image";
import { getInitials, cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  src?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

const pixelSizes = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };

export function Avatar({ name, src, size = "md", className }: AvatarProps) {
  const px = pixelSizes[size];

  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-full",
          sizeClasses[size],
          className
        )}
      >
        <Image src={src} alt={name} width={px} height={px} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-primary-600 font-semibold text-white",
        sizeClasses[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
