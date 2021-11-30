import React, { MouseEvent, useState } from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { OutlinedButton } from "./button/OutlinedButton";
import { submitData } from "../../services/service";
const baseUri = "https://subscribe-carly.drivemycar.me/api/Login";
export const Form = (props: { title?: string; removeCheckbox?: boolean }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = email && password && email.includes("@") ? true : false;
  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    //Fire up api
    if (isFormValid) {
      const response = await submitData(baseUri, { id: email, pw: password });
      console.log(response);
    }
  };
  return (
    <StyledForm
      removeCheckbox={props.removeCheckbox || false}
      isFormValid={isFormValid}
    >
      <h4 className="title">{props.title || "or Sign Up with your email"}</h4>
      <div className="input-container">
        <label htmlFor="emails" className="email-lable">
          email address
        </label>
        <input
          required
          type="email"
          name="email"
          id="emails"
          className="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="pass" className="password-label">
          {props.removeCheckbox ? "password" : "create password"}
        </label>
        <input
          required
          type="password"
          id="pass"
          className="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="checkbox-container">
        <label htmlFor="checkbox" className="checkbox-label">
          I agree to Carly's website <a href="">Terms & Conditions</a> and{" "}
          <br /> <a href="">Privacy Policy</a>.
        </label>
        <input type="checkbox" id="checkbox" className="checkbox" />
      </div>
      <div className="button-container">
        <OutlinedButton
          title={props.removeCheckbox ? "SIGN IN" : "SIGN UP"}
          buttonStyle={{
            width: "10rem",
            borderRadius: "0",
            background: "#4a26a7", //a491d3
          }}
          color="primary"
          hoverColor="#a491d3"
          disabled={!isFormValid}
          disabledColor="#a491d3"
          onClick={handleSubmit}
        />
        <div className="text-content">
          Already have an account?{" "}
          <a href="" className="login">
            Log in
          </a>
        </div>
      </div>
    </StyledForm>
  );
};
const StyledForm = styled.form<{
  removeCheckbox: boolean;
  isFormValid: boolean;
}>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  h4 {
    margin: 2rem 0;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    margin: 0.75rem 0;
    label {
      margin-bottom: 0.5rem;
    }
    .email {
      width: 100%;
      font-size: 1rem;
      line-height: 2.8;
      outline: 0;
      border: 1px solid grey;
      transition: ${designVariables.transition};
      &:focus {
        border: 1px solid blue;
      }
    }
    .password {
      width: 100%;
      line-height: 2.8;
      font-size: 1rem;
      outline: 0;
      border: 1px solid grey;
      transition: ${designVariables.transition};
      &:focus {
        border: 1px solid blue;
      }
    }
  }
  transition: all 3s linear;

  .checkbox-container {
    margin: 1rem 0;
    opacity: ${(props) => (props.removeCheckbox ? 0 : 1)};
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    .checkbox {
      order: 1;
      cursor: pointer;
    }
    .checkbox-label {
      order: 2;
      padding-left: 1rem;
      a {
        text-decoration: underline;
      }
    }
  }
  .button-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 1rem 0;
    button {
      margin-right: 1rem;
    }
    .text-content {
      display: ${(props) => (props.removeCheckbox ? "none" : "block")};
    }

    a {
      text-decoration: underline;
    }
  }
`;
