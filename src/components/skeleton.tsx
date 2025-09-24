/* eslint-disable react-refresh/only-export-components */
import { cva, type VariantProps } from "class-variance-authority";

export const skeletonVariants = cva(
  "animate-pulse bg-gray-200 dark:bg-gray-700 rounded pointer-events-none",
  {
    variants: {
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      rounded: "lg",
    },
  }
);

interface SkeletonProps
  extends VariantProps<typeof skeletonVariants>,
    React.ComponentProps<"div"> {}

export default function Skeleton({
  className,
  rounded,
  ...props
}: SkeletonProps) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props} />
  );
}