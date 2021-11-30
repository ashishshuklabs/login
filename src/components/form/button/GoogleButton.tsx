import React from "react";
import { IconTextButton } from "./IconTextButton";
import google from "../../../assets/icons/icons8-google.svg";
export const GoogleButton = () => {
  return (
    <IconTextButton
      color="transparent"
      hoverColor="grey"
      title="GOOGLE"
      iconPosition="left"
      icon={<img src={google} />}
      width="100%"
      buttonStyle={{ border: "1px solid black", fontSize: "1.125rem" }}
    />
  );
};
