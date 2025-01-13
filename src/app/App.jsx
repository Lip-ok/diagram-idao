import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styled from "styled-components";
import {
  Tokenomics,
} from "../components";

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const App = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <AppWrapper>
      <Tokenomics />
    </AppWrapper>
  );
};
