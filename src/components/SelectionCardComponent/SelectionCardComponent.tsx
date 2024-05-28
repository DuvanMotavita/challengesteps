import React from "react";
import PersonalInfoComponent from "../PersonaInfoComponent/PersonalnfoComponent";
import PlanInfoComponent from "../PlanInfoComponent/PlanInfoComponent";
import PickAddOnsComponent from "../PickAddOnsComponent/PickAddOnsComponent";
import SummaryComponent from "../SummaryComponent/SummaryComponent";

function SelectionCardComponent(props: any) {
  return (
    <>
      {props.step.step == "personalInfo" && (
        <PersonalInfoComponent subscribeHandeler={props.subscribeHandeler} />
      )}
      {props.step.step == "planInfo" && <PlanInfoComponent />}
      {props.step.step == "pickAddOns" && <PickAddOnsComponent />}
      {props.step.step == "summaryInfo" && <SummaryComponent />}
    </>
  );
}

export default SelectionCardComponent;
