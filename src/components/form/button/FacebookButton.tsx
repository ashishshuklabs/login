import React from "react";
import { IconTextButton } from "./IconTextButton";
import facebook from "../../../assets/icons/icons8-facebook.svg";
export const FacebookButton = () => {
  return (
    <IconTextButton
      color="transparent"
      hoverColor="grey"
      title="FACEBOOK"
      iconPosition="left"
      icon={<img src={facebook} />}
      width="100%"
      buttonStyle={{ border: "1px solid black", fontSize: "1.125rem" }}
    />
  );
};
