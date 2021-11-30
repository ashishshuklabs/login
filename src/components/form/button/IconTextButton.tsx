import React from "react";
import styled from "styled-components";
import { designVariables } from "../../../styles/globalVariables";

interface ButtonProps {
  color: string;
  hoverColor: string;
  title: string;
  buttonStyle?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
  iconPosition: "left" | "right";
  width?: string;
}
export const IconTextButton = (props: ButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.onClick) {
      props.onClick(e);
    }
  };
  const RenderIconText = () => {
    return props.iconPosition === "left" ? (
      <div className="icon-text-container">
        <span className="icon">{props.icon}</span>
        <span className="title">{props.title}</span>{" "}
      </div>
    ) : (
      <div className="icon-text-container">
        <span className="title">{props.title}</span>
        <span className="icon">{props.icon}</span>{" "}
      </div>
    );
  };
  return (
    <StyledButton
      iconPosition={props.iconPosition}
      onClick={handleClick}
      buttonStyle={props.buttonStyle}
      color={props.color}
      hoverColor={props.hoverColor}
      width={props.width}
    >
      <RenderIconText />
    </StyledButton>
  );
};
type StyledButtonProps = Omit<ButtonProps, "title" | "onClick" | "icon">;
const StyledButton = styled.button<StyledButtonProps>`
  transition: ${designVariables.transition};
  cursor: pointer;
  padding: 0.5rem 0.65rem;
  text-transform: capitalize;
  font-weight: 700;
  background: ${(props) => (props.color ? props.color : "transparent")};
  border: none;
  height: 100%;
  width: ${(props) => props.width || "100%"};
  ${(props) => props.buttonStyle && { ...props.buttonStyle }}

  &:hover {
    background: ${(props) =>
      props.hoverColor ? props.hoverColor : "transparent"};
  }

  .icon-text-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      height: 0.95rem;
      ${(props) =>
        props.iconPosition === "left"
          ? { paddingRight: ".4rem" }
          : { paddingleft: ".75rem" }}
      img {
        height: 100%;
      }
    }
    .title {
      font-size: 0.875rem;
      color: ${designVariables.colorNavbarText};
    }
  }

  @media (max-width: 991px) {
    align-self: flex-start;
  }
`;
