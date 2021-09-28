import React, { MouseEventHandler, useEffect, useState } from "react";
import styled from "styled-components/macro";
import { animated, useSpring } from "react-spring";
import { Send } from "react-feather";

export interface BumpButtonProps {
  handleClick: () => void;
}

const timing = 150;

const ButtonBump = styled.button`
  padding: 12px;
  display: flex;
  align-items: center;
  background-color: #99e2b4;
  font-size: 1rem;
  border: 1px solid #88d4ab;
  border-radius: 5px;
  cursor: pointer;
  & :hover {
    background-color: #88d4ab;
  }
  ,
  & :active {
    background-color: #99e2b4;
  }
`;

export const BumpButton = (props: BumpButtonProps) => {
  const [isBumped, setIsBumped] = useState<boolean>(false);

  //Springy animation. Would have liked to add media query to not 
  //display if reduced motions prefered
  const animation = useSpring({
    display: "inline-block",
    transform: isBumped ? `rotate(40deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
    config: {
      tension: 300,
      friction: 14,
    },
  });

  useEffect(() => {
    //Bump only when still
    if (!isBumped) {
      return;
    }

    //Giving the transition some time
    const timeoutId: number = window.setTimeout(() => {
      setIsBumped(false);
    }, timing);
    //clearing if component unmount while booped to avoid memory leak
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBumped]);

  //Trigger effect on mouse enter
  const trigger: MouseEventHandler<HTMLButtonElement> = () => {
    setIsBumped(true);
  };

  return (
    <ButtonBump
      aria-label="Click me"
      onMouseEnter={trigger}
      onClick={props.handleClick}
    >
      Click me
      <animated.span style={animation}>
        <Send style={{ marginLeft: 6, height: 24, width: 24, strokeWidth: 2 }} />
      </animated.span>
    </ButtonBump>
  );
};
