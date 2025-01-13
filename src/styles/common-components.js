import { styled } from "styled-components";
import { media } from "./media";
import { colorFetch } from "./functions";

export const GlobalWrapper = styled.div`
  width: 100%;
  max-width: 1420px;
  padding: 0 70px;
  ${media.tablet`
    padding: 0 30px;
  `}
  ${media.phone`
    padding: 0 16px;
  `}
`;

export const ButtonState = styled.button`
  width: max-content;
  cursor: pointer;
  outline: transparent;
  border: none;
  box-shadow: none;
  border-radius: 999px;
  font-family: "HelveticaNeueCyr", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 17px;
  color: ${colorFetch("primary")};
  background-color: ${colorFetch("secondary")};
  padding: 18px 30px;
  transition: all 0.3s ease-in-out;

  display: flex;
  justify-content: center;
  align-items: center;

  &.border {
    border: 1px solid ${colorFetch("primary")};
    background-color: transparent;
  }

  &.border.white {
    border: 1px solid ${colorFetch("secondary")};
    background-color: transparent;
    color: ${colorFetch("secondary")};
  }

  &.whiteBgc {
    background-color: ${colorFetch("secondary")};
    color: ${colorFetch("primary")};
  }
`;
