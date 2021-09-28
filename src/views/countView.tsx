import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clickCounter, selectClickCounter } from "../reducers/clickCounter";
import { Wrapper } from "./clickView";

const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const InfoHeader = styled.h2`
  width: 100%;
  text-align: center;
`

const GoAgainButton = styled.button`
  padding: 10px 12px;
  background-color: #99e2b4;
  border: 1px solid #88d4ab;
   :hover {
    background-color: #88d4ab;
  },
   :active {
    background-color: #99e2b4;
  }
`;

export const CountView: React.FC = () => {
  const counter = useAppSelector(selectClickCounter); //for counter state data
  const count = useAppSelector(() => clickCounter) //for counter actions
  const dispatch = useAppDispatch()
  const history = useHistory();

  //Function to reset count and go back to clickbutton view.
  const handleAgainButton = () => {
    dispatch(count.actions.resetCount());
    history.push({
      pathname: "/",
    });
  };

  return (
    <Wrapper>
      <InfoWrapper>
        <InfoHeader>You clicked {counter} times!</InfoHeader>
        <GoAgainButton onClick={handleAgainButton}>Try again?</GoAgainButton>
      </InfoWrapper>
    </Wrapper>
  );
};
