import React, { useEffect, useState } from "react";
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
import ButtonHandlerComponent from "../ButtonHandlerComponent/ButtonHandlerComponent";

function PlanInfoComponent(props: any) {
  const [planSelection, setPlanSelection] = useState(false);

  const returnCorrectCard = (cardNumber: any) => {
    return (
      <>
        <Col>
          <PlanInfoCards
            index={cardNumber}
            planSelection={planSelection}
          ></PlanInfoCards>
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
      <Row className={planInfoClass.rowSwitchSkin}>
        <Col>
          <Form.Label htmlFor="custom-switch">Monthly</Form.Label>
        </Col>
        <Col>
          <Form.Switch // prettier-ignore
            type="switch"
            id="custom-switch"
            onClick={(e) => {
              setPlanSelection(e.target.checked);
            }}
          />
        </Col>
        <Col>
          <Form.Label htmlFor="custom-switch">Yearly</Form.Label>
        </Col>
      </Row>
    </>
  );
}

export default PlanInfoComponent;
