import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SideBarCardComponent from "../SideBarCardComponent/SideBarCardComponent";
import StepOneComponent from "../StepOneComponent/StepOneComponent";
import StepTwoComponent from "../StepTwoComponent/StepTwoComponent";

function CardSection() {
  const [showStepOne, setShowStepOne] = useState(true);
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [styleOne, setStyleOne] = useState("active");
  const [styleTwo, setStyleTwo] = useState("");
  const [styleThree, setStyleThree] = useState("");
  const [styleFour, setStyleFour] = useState("");
  const subscribeHandeler = (number: number) => {
    switch (number) {
      case 1:
        setShowStepOne(true);
        setShowStepTwo(false);
        setStyleOne("active");
        setStyleTwo("");
        break;
      case 2:
        setShowStepOne(false);
        setShowStepTwo(true);
        setStyleOne("");
        setStyleTwo("active");
        break;
      default:
        setShowStepOne(true);
        setShowStepTwo(false);
        setStyleOne("active");
        setStyleTwo("");
        break;
    }
  };
  return (
    <>
      <Card>
        <Row>
          <Col>
            <SideBarCardComponent
              subscribeHandeler={subscribeHandeler}
              styleOne={styleOne}
              styleTwo={styleTwo}
            ></SideBarCardComponent>
          </Col>
          {showStepOne && (
            <Col>
              {" "}
              <Card.Body>
                <StepOneComponent
                  subscribeHandeler={subscribeHandeler}
                ></StepOneComponent>
              </Card.Body>
            </Col>
          )}
          {showStepTwo && (
            <Col>
              {" "}
              <Card.Body>
                <StepTwoComponent
                  subscribeHandeler={subscribeHandeler}
                ></StepTwoComponent>
              </Card.Body>
            </Col>
          )}
        </Row>
      </Card>
    </>
  );
}

export default CardSection;
