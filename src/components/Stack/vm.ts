import { useEffect } from "react";
import { UseStackProps } from "./types";

const useStack = ({
  gap,
  direction,
  justifyContent,
  justifyItem,
  alignItem,
  alignContent,
  flexWrap,
}: UseStackProps) => {
  const rootVariable = document.documentElement.style;

  useEffect(() => {
    rootVariable.setProperty(
      "--gap",
      typeof gap === "number" ? `${gap}px` : `${gap}`
    );
  }, [gap, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--direction", `${direction}`);
  }, [direction, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--flex-wrap", `${flexWrap}`);
  }, [flexWrap, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--justify-content", `${justifyContent}`);
  }, [justifyContent, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--justify-item", `${justifyItem}`);
  }, [justifyItem, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--align-item", `${alignItem}`);
  }, [alignItem, rootVariable]);

  useEffect(() => {
    rootVariable.setProperty("--align-content", `${alignContent}`);
  }, [alignContent, rootVariable]);
};
export default useStack;
