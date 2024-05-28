import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import planInfoClass from "./SummaryComponent.module.scss";

function PickAddOnsComponent(props: any) {
  const [planSelection, setPlanSelection] = useState(false);

  return (
    <>
      <div className={planInfoClass.containerTitleSkinSummary}>
        <h2>Finishing Up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <Row className={planInfoClass.rowSkinSummary}>{/* codeHere */}</Row>
    </>
  );
}

export default PickAddOnsComponent;
