import { motion } from "framer-motion";
import styled from "styled-components";

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />

   

    </>
  );
};

const Watermark = ({ reverse, text }) => (
  <WatermarkContainer>
    <TranslateWrapper reverse={reverse}>
      <WatermarkText>{text}</WatermarkText>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <WatermarkText ml="48">{text}</WatermarkText>
    </TranslateWrapper>
  </WatermarkContainer>
);

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <MotionDiv
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </MotionDiv>
  );
};

const WatermarkContainer = styled.div`
  display: flex;
  transform: translateY(-12px);
  overflow: hidden;
  font-family: "Lilita One", sans-serif;
  background-color:  #f8f9fa;
  position: relative;

  @media (max-width: 768px) {
   display: none;
  }
`;

const WatermarkText = styled.span`
  width: fit-content;
  white-space: nowrap;
  font-size: 20vmax;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 0.75;
  color:   #e9ecef;
  margin-left: ${props => props.ml ? props.ml : "0"};
`;

const MotionDiv = styled(motion.div)`
  display: flex;
`;

export default WatermarkWrapper;
