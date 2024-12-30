import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledButton href="https://your-link-here.com">
      <span className="button_lg">
        <span className="button_sl" />
        <span className="button_text font-raleway font-[700]">Explore More</span>
      </span>
    </StyledButton>
  );
};

const StyledButton = styled.a`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background: none;
  color: #0f1923;
  cursor: pointer;
  position: relative;
  padding: 8px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none; /* Remove underline from the link */
  transition: all .15s ease;
  display: inline-block; /* Ensures the button behaves like a block-level element */

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
  }

  &::before {
    top: 0;
    border-bottom-width: 0;
  }

  &::after {
    bottom: 0;
    border-top-width: 0;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:active::before,
  &:active::after {
    right: 3px;
    left: 3px;
  }

  &:active::before {
    top: 3px;
  }

  &:active::after {
    bottom: 3px;
  }

  .button_lg {
    position: relative;
    display: block;
    padding: 6px 14px;
    color: #fff;
    background-color: #7C444F;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
    border-radius: 5px; /* Curved edges for the button background */

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 2px;
      background-color: #E16A54;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      bottom: 0;
      width: 4px;
      height: 4px;
      background-color: #E16A54;
      transition: all .2s ease;
    }
  }

  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #E16A54;
    transform: skew(-15deg);
    transition: all .2s ease;
  }

  .button_text {
    position: relative;
  }

  &:hover {
    color: #0f1923;
  }

  &:hover .button_sl {
    width: calc(100% + 15px);
  }

  &:hover .button_lg::after {
    background-color: #fff;
  }
`;

export default Button;
