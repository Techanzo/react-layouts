import { CSSProperties, ReactNode } from "react";

export interface UseItemProps {
  order?: number;
  flex?: number | string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;
  alignSelf?: "flex-start" | "center" | "flex-end";
  justifySelf?: "flex-start" | "center" | "flex-end";
}

export interface StackItemProps extends UseItemProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode | undefined;
}
