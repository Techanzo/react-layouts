import { useEffect } from "react";
import { UseItemProps } from "./types";

const useStackItem = ({
  order,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  justifySelf,
}: UseItemProps) => {
  const rootVariable = document.documentElement.style;

  useEffect(() => {
    rootVariable.setProperty("--order", `${order}`);
  }, [order, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--flex", `${flex}`);
  }, [flex, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--flex-grow", `${flexGrow}`);
  }, [flexGrow, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--flex-shrink", `${flexShrink}`);
  }, [flexShrink, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty(
      "--flex-basis",
      typeof flexBasis === "number" ? `${flexBasis}px` : `${flexBasis}`
    );
  }, [flexBasis, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--align-self", `${alignSelf}`);
  }, [alignSelf, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--justify-self", `${justifySelf}`);
  }, [justifySelf, rootVariable]);
};
export default useStackItem;
