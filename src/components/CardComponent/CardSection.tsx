import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SideBarCardComponent from "../SideBarCardComponent/SideBarCardComponent";
import StepOneComponent from "../StepOneComponent/StepOneComponent";

function CardSection() {
  return (
    <>
      <Card>
        <Row>
          <Col>
            <SideBarCardComponent></SideBarCardComponent>
          </Col>
          <Col>
            {" "}
            <Card.Body>
              <StepOneComponent></StepOneComponent>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default CardSection;
