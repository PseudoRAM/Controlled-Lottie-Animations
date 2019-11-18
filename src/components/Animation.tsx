import * as React from "react";
import { Container, LottieWrapper } from "./Animation.styled";
import * as loopAnimation from "../animations/loop.json";
import * as doneAnimation from "../animations/complete.json";

const animationLoopOptions = {
  loop: true,
  autoplay: true,
  animationData: loopAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationCompleteOptions = {
  loop: false,
  autoplay: true,
  animationData: doneAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const animationComplete = () => {
  console.log("the animation completed:");
};

const Animation = () => {
  const [animationOptions, setAnimationOptions] = React.useState(
    animationLoopOptions
  );

  return (
    <Container
      onClick={() => {
        setAnimationOptions(animationCompleteOptions);
      }}
    >
      <LottieWrapper
        isClickToPauseDisabled
        options={animationOptions}
        height={300}
        width={400}
        eventListeners={[
          {
            eventName: "loopComplete",
            callback: animationComplete
          }
        ]}
      />
    </Container>
  );
};

export default Animation;
