import { StackProps } from "./types";
import "./styles.css";
import useStack from "./vm";
import Item from "./StackItem";
import clsx from "clsx";

export const Stack = ({
  gap,
  direction,
  flexWrap,
  justifyContent,
  justifyItem,
  alignContent,
  alignItem,
  style,
  className,
  children,
}: StackProps) => {
  useStack({
    alignContent,
    alignItem,
    direction,
    flexWrap,
    gap,
    justifyContent,
    justifyItem,
  });

  // const { children } = useMemo(() => {
  //   const childrenArray = Children.toArray(_children);
  //   const children = childrenArray.filter(
  //     (child) => isValidElement(child) && child.type === Item
  //   );
  //   return { children };
  // }, [_children]);

  return (
    <div
      className={clsx("stack-container", { [`${className}`]: className })}
      style={style}
    >
      {children}
    </div>
  );
};

Stack.Item = Item;

