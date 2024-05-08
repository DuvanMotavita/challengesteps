import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import planInfoClass from "./PlanInfoComponent.module.scss";
import { Container } from "react-bootstrap";
import PlanInfoCards from "../PlanInfoCards/PlanInfoCards";

function PlanInfoComponent(props: any) {
  const returnCorrectCard = (cardNumber: any) => {
    return (
      <>
        <Col>
          <PlanInfoCards index={cardNumber}></PlanInfoCards>
        </Col>
      </>
    );
  };

  return (
    <>
      <div className={planInfoClass.containerTitleSkinStepTwo}>
        <h2>Select Your Plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </div>
      <Row className={planInfoClass.rowSkinStepTwo}>
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
        <Col className={planInfoClass.containerBackButtonStepTwo}>
          <Button
            className={`${planInfoClass.backButtonStepTwo} `}
            type="button"
            onClick={(e) => {
              // props.subscribeHandeler(1);
            }}
          >
            Go Back
          </Button>
        </Col>
        <Col className={planInfoClass.containerSubmitButtonStepTwo}>
          <Button
            className={planInfoClass.submitButtonStepTwoStyle}
            type="submit"
          >
            Next Step
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default PlanInfoComponent;
