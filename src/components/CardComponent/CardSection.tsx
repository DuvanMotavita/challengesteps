import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import SideBarCardComponent from "../SideBarCardComponent/SideBarCardComponent";

function CardSection() {
  return (
    <>
      <Card style={{ width: "80rem", height: "40rem" }}>
        <SideBarCardComponent></SideBarCardComponent>
        <Card.Body></Card.Body>
      </Card>
    </>
  );
}

export default CardSection;
