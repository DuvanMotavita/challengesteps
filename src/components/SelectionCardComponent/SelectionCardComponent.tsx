import React from "react";
import PersonalInfoComponent from "../PersonaInfoComponent/PersonalnfoComponent";
import PlanInfoComponent from "../PlanInfoComponent/PlanInfoComponent";

function SelectionCardComponent(props: any) {
  return (
    <>
      {props.step.step == "personalInfo" && <PersonalInfoComponent />}
      {props.step.step == "planInfo" && <PlanInfoComponent />}
    </>
  );
}

export default SelectionCardComponent;
