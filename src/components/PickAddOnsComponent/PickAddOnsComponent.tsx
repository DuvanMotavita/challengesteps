import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import planInfoClass from "./PickAddOnsComponent.module.scss";
import PickAddOnsOptions from "../PickAddOnsOptions/PickAddOnsOptions";

function PickAddOnsComponent() {
  const returnCorrectCheck = (checkNumber: number) => {
    return (
      <>
        <PickAddOnsOptions checkNumber={checkNumber} />
      </>
    );
  };

  return (
    <>
      <div className={planInfoClass.containerTitleSkinAddOns}>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <Row className={planInfoClass.rowSkinAddOns}>
        {returnCorrectCheck(1)}
        {returnCorrectCheck(2)}
        {returnCorrectCheck(3)}
      </Row>
    </>
  );
}

export default PickAddOnsComponent;
