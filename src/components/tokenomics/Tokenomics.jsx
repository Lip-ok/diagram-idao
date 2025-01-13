import { styled } from "styled-components";
import { GlobalWrapper } from "../../styles/common-components";
import { colorFetch } from "../../styles/functions";
import { useState, useCallback } from "react";
import { expandedData, tokenomicData } from "./data/data";
import { media } from "../../styles/media";
import { useMediaType } from "../../styles/style.context";

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled(GlobalWrapper)`
  padding-top: 150px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop`
    padding-top: 50px;
    padding-bottom: 60px;
  `}
`;

const Title = styled.h2`
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 180px;

  ${media.desktop`
    align-self: flex-start;
    text-align: start;
    font-size: 26px;
    margin-bottom: 40px;
  `}
`;

const Circle = styled.div`
  position: relative;
  width: 530px;
  height: 530px;
  border-radius: 50%;
  background: linear-gradient(135deg, #30cfb0 20%, #40b0c9 50%, #5b82f0 80%);
  border: 1px solid white;

  ${media.desktop`
    width: 288px;
    height: 288px;
  `}
`;

const Line = styled.div`
  width: 2px;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 0%,
    transparent 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};

  &.red {
    background-image: linear-gradient(
      to top,
      transparent 0%,
      transparent 50%,
      #e11414 50%,
      #e11414 100%
    );
    bottom: -9px;
    height: calc(100% + 18px);
  }

  /* &.line0 {
    transform: rotate(78deg);
  }

  &.line1 {
    transform: rotate(56deg);
  }

  &.line2 {
    transform: rotate(230deg);
  }

  &.line3 {
    transform: rotate(39deg);
    background-image: linear-gradient(
      to top,
      transparent 0%,
      transparent 50%,
      transparent 50%,
      transparent 100%
    );
    height: calc(100% + 2px);
  } */
`;

const Percents = styled.div`
  position: absolute;
  z-index: 1;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background-color: #fff;
  width: 81px;
  height: 42px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 400;
  color: ${colorFetch("primary")};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  transform: translate(-50%, -50%);

  &.I {
    top: ${({ top }) => `calc(50% - ${top}px)`};
    left: ${({ left }) => `calc(50% + ${left}px)`};
  }

  &.II {
    top: ${({ top }) => `calc(50% + ${top}px)`};
    left: ${({ left }) => `calc(50% + ${left}px)`};
  }

  &.III {
    top: ${({ top }) => `calc(50% + ${top}px)`};
    left: ${({ left }) => `calc(50% - ${left}px)`};
  }

  &.IV {
    top: ${({ top }) => `calc(50% - ${top}px)`};
    left: ${({ left }) => `calc(50% - ${left}px)`};
  }

  ${media.desktop`
    font-size: 15px;
    line-height: 15px;
    width: initial;
    height: initial;
    padding: 6px 10px 3px;
  `}
`;

const LabelBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  &.I,
  &.II {
    top: 0;
    right: 0;
    transform: translateX(calc(100% + 10px));

    & span {
      text-align: start;
    }
  }

  &.III,
  &.IV {
    top: 0;
    left: 0;
    transform: translateX(calc(-100% - 10px));

    & span {
      text-align: end;
    }
  }

  &.correction0 {
    transform: translate(10%, calc(-100% - 10px));
  }

  &.correction1 {
    transform: translate(50%, calc(-100% - 10px));
  }

  &.correction3 {
    transform: translate(calc(-100% - 10px), -10%);
  }

  &.correction4 {
    transform: translate(-90%, calc(-100% - 10px));
  }

  &.correction5 {
    transform: translate(-70%, calc(-100% - 10px));
  }

  &.correction6 {
    transform: translate(-60%, calc(-100% - 10px));

    & span {
      white-space: nowrap;
    }
  }

  &.correction7 {
    transform: translate(-20px, calc(-100% - 10px));
  }

  ${media.desktop`
    display: none;
  `}
`;

const Text = styled.span`
  color: ${colorFetch("gray5")};
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 400;

  ${media.desktop`
    font-size: 15px;
  `}
`;

const Count = styled.span`
  color: ${colorFetch("green")};
  font-family: HelveticaNeueCyr;
  font-size: 20px;
  font-weight: 500;

  ${media.desktop`
    font-size: 15px;
  `}
`;

const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 310px;
  width: 310px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    width: 168px;
    height: 168px;
  `}
`;

const CenterText = styled.span`
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  max-width: 165px;
  margin-bottom: 20px;

  ${media.desktop`
    font-size: 15px;
    font-weight: 500;
    line-height: 150%;
    max-width: 100px;
    margin-bottom: 2px;
  `}
`;

const CenterCount = styled.span`
  color: ${colorFetch("primary")};
  text-align: center;
  font-family: Inter;
  font-size: 30px;
  font-weight: 600;
  line-height: 32px;

  ${media.desktop`
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
  `}
`;

const MobileList = styled.div`
  margin-top: 60px;
  max-width: 288px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 34px;
`;

const Element = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 35px;
  gap: 10px;
`;

const PercentText = styled.span`
  color: ${colorFetch("gray5")};
  text-align: right;
  font-family: HelveticaNeueCyr;
  font-size: 15px;
  font-weight: 400;
`;

export const Tokenomics = () => {
  const { desktop } = useMediaType();

  const [node, setNode] = useState(null);

  const circleRef = useCallback((node) => {
    if (node !== null) {
      setNode(node.getBoundingClientRect());
    }
  }, []);

  const functions = (quarter) => {
    const data = {
      I: {
        top: (angle) =>
          Math.cos((Math.PI * angle) / 180) * ((node?.width + 18) / 2),
        left: (angle) =>
          Math.sin((Math.PI * angle) / 180) * ((node?.width + 18) / 2),
      },
      II: {
        top: (angle) =>
          Math.cos((Math.PI * (180 - angle)) / 180) * ((node?.width + 18) / 2),
        left: (angle) =>
          Math.sin((Math.PI * (180 - angle)) / 180) * ((node?.width + 18) / 2),
      },
      III: {
        top: (angle) =>
          Math.cos((Math.PI * (angle - 180)) / 180) * ((node?.width + 18) / 2),
        left: (angle) =>
          Math.sin((Math.PI * (angle - 180)) / 180) * ((node?.width + 18) / 2),
      },
      IV: {
        top: (angle) =>
          Math.cos((Math.PI * (360 - angle)) / 180) * ((node?.width + 18) / 2),
        left: (angle) =>
          Math.sin((Math.PI * (360 - angle)) / 180) * ((node?.width + 18) / 2),
      },
    };

    return data[quarter];
  };

  return (
    <Background>
      <ContentWrapper id='tokenomikcs'>
        <Title>Токеномика</Title>
        <Circle ref={circleRef}>
          {expandedData(tokenomicData).map((el, index) => (
            <>
              <Line rotate={el.rotate} />

              <Percents
                className={el.quarter}
                top={functions(el.quarter).top(el.midLineAngle)}
                left={functions(el.quarter).left(el.midLineAngle)}
              >
                {el.percent_part + "%"}

                <LabelBlock className={`${el.quarter} ${"correction" + index}`}>
                  <Text>{el.text}</Text>
                  <Count>{el.count}</Count>
                </LabelBlock>
              </Percents>
            </>
          ))}


          <CenterContent>
            <CenterText>Общее предложение</CenterText>
            <CenterCount>1,000,000</CenterCount>
          </CenterContent>
        </Circle>
        {desktop && (
          <MobileList>
            {tokenomicData.map((el) => (
              <Element>
                <Text>{el.text}</Text>
                <Count>{el.count}</Count>
                <PercentText>{el.percent_part + "%"}</PercentText>
              </Element>
            ))}
          </MobileList>
        )}
      </ContentWrapper>
    </Background>
  );
};
