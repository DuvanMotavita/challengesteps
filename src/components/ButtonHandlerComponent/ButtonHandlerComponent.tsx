import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import buttonInfoClass from "./ButtonHandlerComponent.module.scss";

function ButtonHandlerComponent(props: any) {
  return (
    <Row>
      <Col className={buttonInfoClass.containerBackButtonStepTwo}>
        {props.step != "personalInfo" && (
          <Button
            className={`${buttonInfoClass.backButtonStepTwo} `}
            type="button"
            onClick={(e) => {
              props.step == "planInfo"
                ? props.subscribeHandeler(1)
                : props.step == "pickAddOns"
                ? props.subscribeHandeler(2)
                : props.step == "summaryInfo"
                ? props.subscribeHandeler(3)
                : false;
            }}
          >
            Go Back
          </Button>
        )}
      </Col>
      <Col className={buttonInfoClass.containerSubmitButtonStepTwo}>
        {props.step == "personalInfo" && (
          <Button
            className={buttonInfoClass.submitButtonStepTwoStyle}
            type="submit"
            form="my-form"
          >
            Next Step
          </Button>
        )}

        {props.step != "personalInfo" && (
          <Button
            className={buttonInfoClass.submitButtonStepTwoStyle}
            onClick={(e) => {
              props.step == "planInfo"
                ? props.subscribeHandeler(3)
                : props.step == "pickAddOns"
                ? props.subscribeHandeler(4)
                : false;
            }}
          >
            Next Step
          </Button>
        )}
      </Col>
    </Row>
  );
}

export default ButtonHandlerComponent;
