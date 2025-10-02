import type React from "react";
import { cx } from "class-variance-authority";

interface MainContentProps extends React.ComponentProps<"main"> {
  children?: React.ReactNode;
}

export default function MainContent({ children, className }: MainContentProps) {
  return <main className={cx("my-4 md:my-8", className)}>{children}</main>;
}
