import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../hooks";
import { clickCounter } from "../reducers/clickCounter";
import { BumpButton, BumpButtonProps } from "../components/BumpButton";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  padding: 4px;
  background-color: #f8edeb;
  font-size: .75rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
   :hover {
    background-color: #fae1dd;
  }
  ,
   :active {
    background-color: #f8edeb;
  }
`;

export const ClickView: React.FC = () => {
    const counter = useAppSelector(() => clickCounter);
    const [isVisible, setIsVisible] = useState<boolean>(false); //state for showing button to next page
    const dispatch = useAppDispatch();
  const history = useHistory();

  //Function to go to next page on button click
  const handleNextPage = () => {
    history.push({
      pathname: "/count",
    });
  };

  //Function button click - displays button for next page, updating counter state with +1
  const handleBumpClick = () => {
    setIsVisible(true);
    dispatch(counter.actions.addToCount());
  };

  //Sending the click function as prop to button component
  const bumpButtonProps: BumpButtonProps = {
    handleClick: handleBumpClick,
  };
  return (
    <Wrapper>
      <BumpButton {...bumpButtonProps} />
      {isVisible ? (
        <NextButton aria-label="Click to next page" onClick={handleNextPage}>
          Up for something new?
        </NextButton>
      ) : null}
    </Wrapper>
  );
};
