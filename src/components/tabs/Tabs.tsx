import React, { MouseEvent } from "react";
import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { FacebookButton } from "../form/button/FacebookButton";
import { GoogleButton } from "../form/button/GoogleButton";
import { Form } from "../form/Form";

export const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleClick = (e: MouseEvent, activeTab: number) => {
    activeTab === 1 ? setActiveTab(1) : setActiveTab(0);
  };
  return (
    <Wrapper activeTab={activeTab}>
      <ul className="tab-links">
        <li
          className={`link-1 ${activeTab === 0 && "active"}`}
          onClick={(e: MouseEvent) => handleClick(e, 0)}
        >
          new to carly?
        </li>
        <li
          className={`link-2 ${activeTab === 1 && "active"}`}
          onClick={(e: MouseEvent) => handleClick(e, 1)}
        >
          log in
        </li>
      </ul>
      <div className="content-container">
        <h4 className="title">Continue with…</h4>
        <div className="social-links">
          <div className="facebook">
            <FacebookButton />
          </div>
          <div className="google">
            <GoogleButton />
          </div>
        </div>
        <div className="content-text">
          We will never share any of your data or post anything on your behalf.
        </div>
        <div className="line-break"></div>
        <div className="content-1">
          <Form />
        </div>
        <div className="content-2">
          <Form title="Sign in with your email" removeCheckbox />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ activeTab: number }>`
  background: white;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  max-width: 30rem;
  width: 100%;
  .tab-links {
    display: flex;
    align-items: center;
    text-transform: capitalize;
    width: 100%;
    margin: 2rem auto;
    max-height: 4rem;
    li {
      list-style: none;
      display: block;
      font-weight: 700;
      color: rgba(20, 54, 66, 0.5);
      border: 1px solid black;
      cursor: pointer;
      text-align: center;
      width: 50%;
      padding: 1.5rem 0;
      transition: all 0.5s ease-in-out;
      &.link-1 {
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        &.active {
          border-bottom: 1px solid transparent;
          border-top: 1px solid black;
          border-left: 1px solid black;
          border-right: 1px solid transparent;
          color: black;
        }
      }
      &.link-2 {
        border-top: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid black;

        &.active {
          border-bottom: 1px solid transparent;
          border-left: 1px solid transparent;
          border-top: 1px solid black;
          border-right: 1px solid black;
          color: black;
        }
      }
    }
  }

  .content-container {
    display: flex;
    flex-direction: column;
    h4.title {
      margin: .75rem 0;
    }
    .line-break {
      margin: 2rem auto;
      width: 1px;
      height: 1px;
      background: black;
      width: 100%;
    }
    .social-links {
      display: flex;
      justify-content: space-between;
      margin: 2rem auto;
      width: 100%;
      .facebook {
        width: 80%;
        margin-right: 1rem;
      }
      .google {
        width: 80%;
      }
    }
    transition: all 3s linear;
    .content-1 {
      ${(props) =>
        props.activeTab === 0 ? { display: "block" } : { display: "none" }}
    }
    .content-2 {
      ${(props) =>
        props.activeTab === 1 ? { display: "block" } : { display: "none" }}
    }
  }
`;
