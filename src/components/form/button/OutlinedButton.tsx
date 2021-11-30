import React from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";

type ColorType = "primary" | "secondary" | "tertiary" | "transparent";
interface ButtonProps {
  color: ColorType;
  hoverColor: string;
  title: string;
  buttonStyle?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  disabledColor?: string;
  disabled: boolean;
}
export const OutlinedButton = (props: ButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };
  return (
    <StyledButton
      onClick={handleClick}
      buttonStyle={props.buttonStyle}
      color={props.color}
      hoverColor={props.hoverColor}
      disabled={props.disabled}
      disabledColor={props.disabledColor}
    >
      {props.title}
    </StyledButton>
  );
};
type StyledButtonProps = Omit<ButtonProps, "title" | "onClick">;
const StyledButton = styled.button<StyledButtonProps>`
  transition: ${designVariables.transition};
  cursor: pointer;
  color: ${designVariables.colorTextPrimary};
  padding: 0.5rem 0.65rem;
  text-transform: uppercase;
  border-radius: 0.5rem;
  font-weight: 700;
  border: 1px solid ${designVariables.colorTextPrimary};
  ${(props) =>
    props.color === "primary"
      ? { background: designVariables.palette.dark900 }
      : props.color === "secondary"
      ? { background: designVariables.palette.lightGreen100 }
      : props.color === "tertiary"
      ? { background: designVariables.palette.red200 }
      : { background: "transparent" }}
  width: 100%;
  ${(props) => props.buttonStyle && { ...props.buttonStyle }}

  &:hover {
    ${(props) => props.hoverColor && { background: props.hoverColor }};
  }
  &:disabled {
    background: ${(props) => props.disabledColor || props.color};
  }
  @media (max-width: 991px) {
    align-self: flex-start;
  }
`;
