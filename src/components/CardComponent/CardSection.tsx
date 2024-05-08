import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SideBarCardComponent from "../SideBarCardComponent/SideBarCardComponent";
import PersonalInfoComponent from "../PersonaInfoComponent/PersonalnfoComponent";
import PlanInfoComponent from "../PlanInfoComponent/PlanInfoComponent";
import SelectionCardComponent from "../SelectionCardComponent/SelectionCardComponent";

function CardSection() {
  const [step, setStep] = useState({
    style: "active",
    step: "personalInfo",
  });

  const subscribeHandeler = (number: number) => {
    switch (number) {
      case 1:
        setStep({ ...step, step: "personalInfo" });
        break;
      case 2:
        setStep({ ...step, step: "planInfo" });
        break;
      default:
        setStep({ ...step, step: "personalInfo" });
        break;
    }
  };

  const widgetHandler = () => {
    return (
      <>
        <SelectionCardComponent step={step} />
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
