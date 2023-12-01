import { CSSProperties, ReactNode } from "react";

export interface UseStackProps {
  gap?: number | string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  flexWrap?: "wrap" | "nowrap" | "reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
  justifyItem?: "flex-start" | "flex-end" | "center" | "stretch";
  alignItem?: "flex-start" | "flex-end" | "center" | "stretch";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly"
    | "space-around";
}

export interface StackProps extends UseStackProps {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode | undefined;
}
