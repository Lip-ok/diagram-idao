import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { comparatorFunction, getMediaType } from "./media";
import { theme } from "./theme";
import { usePrevious } from "../utils/usePrevious";

const defaultMediaType = getMediaType();

const DEFAULT_STYLE = {
  mediaType: defaultMediaType,
};

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export const useMediaType = () => {
  const [mediaType, setMediaType] = useState(defaultMediaType);
  const [width] = useWindowSize();
  const prevWidth = usePrevious(width);
  useEffect(() => {
    if (width !== prevWidth) {
      const currentMediaType = getMediaType();
      if (!comparatorFunction(currentMediaType, mediaType)) {
        setMediaType(currentMediaType);
      }
    }
  }, [width, prevWidth, setMediaType, mediaType]);
  return mediaType;
};

const StyleContext = createContext([DEFAULT_STYLE, null]);

const useStyleContextCreator = () => {
  const [style, setStyle] = useState(DEFAULT_STYLE);
  return [style, setStyle];
};

export const StyleContextProvider = ({ children }) => {
  const provider = useStyleContextCreator();
  const [width] = useWindowSize();
  const prevWidth = usePrevious(width);
  const [{ mediaType }, setStyle] = provider;

  useEffect(() => {
    if (width !== prevWidth) {
      const currentMediaType = getMediaType();
      if (!comparatorFunction(currentMediaType, mediaType)) {
        setStyle({ mediaType: currentMediaType });
      }
    }
  }, [width, prevWidth, setStyle, mediaType]);

  return (
    <StyleContext.Provider value={provider}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => {
  const service = useContext(StyleContext);

  if (!service) {
    throw new Error("Tooltip Context is unavailable");
  }

  return service;
};

export const withStyleContext = (Component) => {
  return function WithStyleContext(props) {
    const service = useStyleContext();

    return <Component {...props} styleContext={service} />;
  };
};
