import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import stepTwoClass from "./StepTwoComponent.module.scss";
import { Container } from "react-bootstrap";
import StepTwoCards from "../StepTwoCards/StepTwoCards";

function StepTwoComponent(props: any) {
  const returnCorrectCard = (cardNumber: any) => {
    return (
      <>
        <Col>
          <StepTwoCards index={cardNumber}></StepTwoCards>
        </Col>
      </>
    );
  };

  return (
    <>
      {props.step.step == "two" && (
        <>
          <div className={stepTwoClass.containerTitleSkinStepTwo}>
            <h2>Select Your Plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <Row className={stepTwoClass.rowSkinStepTwo}>
            {returnCorrectCard(1)}
            {returnCorrectCard(2)}
            {returnCorrectCard(3)}
          </Row>
          <Row>
            <Col>
              <Form.Label htmlFor="custom-switch">Monthly</Form.Label>
            </Col>
            <Col>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
              />
            </Col>
            <Col>
              <Form.Label htmlFor="custom-switch">Yearly</Form.Label>
            </Col>
          </Row>
          <Row>
            <Col className={stepTwoClass.containerBackButtonStepTwo}>
              <Button
                className={`${stepTwoClass.backButtonStepTwo} `}
                type="button"
                onClick={(e) => {
                  props.subscribeHandeler(1);
                }}
              >
                Go Back
              </Button>
            </Col>
            <Col className={stepTwoClass.containerSubmitButtonStepTwo}>
              <Button
                className={stepTwoClass.submitButtonStepTwoStyle}
                type="submit"
              >
                Next Step
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
}

export default StepTwoComponent;
