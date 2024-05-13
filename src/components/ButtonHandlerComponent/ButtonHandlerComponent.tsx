import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import buttonInfoClass from "./ButtonHandlerComponent.module.scss";

function ButtonHandlerComponent(props: any) {
  return (
    <Row>
      <Col className={buttonInfoClass.containerBackButtonStepTwo}>
        {props.step == "planInfo" && (
          <Button
            className={`${buttonInfoClass.backButtonStepTwo} `}
            type="button"
            onClick={(e) => {
              props.step == "planInfo"
                ? document.getElementById("personalInfoButton")?.click()
                : false;
            }}
          >
            Go Back
          </Button>
        )}
      </Col>
      <Col className={buttonInfoClass.containerSubmitButtonStepTwo}>
        <Button
          className={buttonInfoClass.submitButtonStepTwoStyle}
          type="submit"
        >
          Next Step
        </Button>
      </Col>
    </Row>
  );
}

export default ButtonHandlerComponent;
