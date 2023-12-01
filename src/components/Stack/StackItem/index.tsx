import clsx from "clsx";
import "./styles.css";
import { StackItemProps } from "./types";
import useStackItem from "./vm";

const Item = ({
  order,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  justifySelf,
  style,
  className,
  children,
}: StackItemProps) => {
  useStackItem({
    order,
    flex,
    flexGrow,
    flexShrink,
    flexBasis,
    alignSelf,
    justifySelf,
  });
  return (
    <div
      className={clsx("stack-item-container", { [`${className}`]: className })}
      style={style}
    >
      {children}
    </div>
  );
};
export default Item;
