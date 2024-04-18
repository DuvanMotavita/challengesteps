import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SideBarCardComponent from "../SideBarCardComponent/SideBarCardComponent";
import StepOneComponent from "../StepOneComponent/StepOneComponent";
import StepTwoComponent from "../StepTwoComponent/StepTwoComponent";

function CardSection() {
  const [step, setStep] = useState({
    style: "active",
    step: "one",
  });

  const subscribeHandeler = (number: number) => {
    switch (number) {
      case 1:
        setStep({ ...step, step: "one" });
        break;
      case 2:
        setStep({ ...step, step: "two" });
        break;
      default:
        setStep({ ...step, step: "one" });
        break;
    }
  };

  const widgetHandler = () => {
    return (
      <>
        <StepOneComponent subscribeHandeler={subscribeHandeler} step={step} />
        <StepTwoComponent subscribeHandeler={subscribeHandeler} step={step} />
      </>
    );
  };

  return (
    <>
      <Card>
        <Row>
          <Col>
            <SideBarCardComponent
              subscribeHandeler={subscribeHandeler}
              step={step}
            ></SideBarCardComponent>
          </Col>
          <Col>
            {" "}
            <Card.Body>{widgetHandler()}</Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardSection;
