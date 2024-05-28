import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import AddOnOptionStyle from "./PickAddOnsOptions.module.scss";

function PickAddOnsOptions(props: any) {
  interface addOn {
    title: string;
    description: string;
    amount: number;
  }
  const addOnObj: addOn = {
    title: "Online Service",
    description: "Access to multiplayer games",
    amount: 1,
  };
  const [addOnSelection, setAddOnSelection] = useState(addOnObj);
  useEffect(() => {
    checkData(props.checkNumber);
  }, [props.checkNumber]);

  const checkData = (selection: number) => {
    debugger;
    switch (selection) {
      case 1:
        addOnObj.title = "Online Service";
        addOnObj.description = "Access to multiplayer games";
        addOnObj.amount = 1;
        break;
      case 2:
        addOnObj.title = "Larger Storage";
        addOnObj.description = "Extra 1TB of cloud save";
        addOnObj.amount = 2;
        break;
      case 3:
        addOnObj.title = "Customizable Profile";
        addOnObj.description = "Custom theme on your profile";
        addOnObj.amount = 2;
        break;
      default:
        addOnObj.title = "Online Service";
        addOnObj.description = "Access to multiplayer games";
        addOnObj.amount = 1;
        break;
    }
    setAddOnSelection({ ...addOnObj });
  };

  return (
    <Card className={AddOnOptionStyle.addOnOptionSkin}>
      <Form>
        <div className="mb-3">
          <Form.Check type={"checkbox"} id={`check-api`}>
            <Row>
              <Col>
                <Form.Check.Input
                  type={"checkbox"}
                  isValid
                  className={AddOnOptionStyle.addOnOptionCheckboxSkin}
                />
                <Form.Check.Label>{addOnSelection.title}</Form.Check.Label>
                <Form.Check.Label>
                  {addOnSelection.description}
                </Form.Check.Label>
              </Col>
              <Col>
                {" "}
                <Form.Check.Label
                  className={AddOnOptionStyle.amountSkin}
                >{`+$${addOnSelection.amount}/mo`}</Form.Check.Label>
              </Col>
            </Row>
          </Form.Check>
        </div>
      </Form>
    </Card>
  );
}

export default PickAddOnsOptions;
