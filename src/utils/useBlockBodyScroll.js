import { useEffect, useState } from "react";
import { usePrevious } from "./usePrevious";

export const useBlockBodyScroll = (condition) => {
  const [body, setBody] = useState();
  const [offsetY, setOffsetY] = useState(0);

  const prevCondition = usePrevious(condition);

  useEffect(() => {
    let bodyElementByTag = document.getElementsByTagName("body");
    bodyElementByTag[0] && setBody(bodyElementByTag[0]);
  }, []);

  const handleSwitch = (value) => {
    if (body) {
      value ? setOffsetY(window.pageYOffset) : window.scrollTo(0, offsetY);
      body.style.overflow = value ? "hidden" : "visible";
    }
  };

  useEffect(() => {
    condition !== prevCondition && handleSwitch(condition);
  }, [condition]);
};
