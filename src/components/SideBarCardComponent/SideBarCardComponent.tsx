import React, { useState } from "react";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import sideBarClass from "./SideBarCardComponent.module.scss";

function SideBarCardComponent(props: any) {
  return (
    <>
      <Card className={sideBarClass.sideBarCardComponentSkin}>
        <Card.Body className={sideBarClass.sidebarCardBodySkin}>
          <ListGroup
            as="ol"
            className={sideBarClass.sideBarCardComponentTextSkin}
          >
            <ListGroup.Item
              as="li"
              className={`${sideBarClass.sideBarCardListSkin} d-flex justify-content-between align-items-start`}
            >
              <Button
                variant="info"
                className={`${sideBarClass.sideBarCardButtonSkin}  ${
                  props.step.step == "personalInfo" ? props.step.style : ""
                }`}
                onClick={(e) => {
                  props.subscribeHandeler(1);
                }}
              >
                1
              </Button>
              <div className="ms-2 me-auto">
                <div className={`${sideBarClass.sidebarCardSubtextSkin} `}>
                  Step 1
                </div>
                YOUR INFO
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className={`${sideBarClass.sideBarCardListSkin} d-flex justify-content-between align-items-start`}
            >
              <Button
                variant="info"
                className={`${sideBarClass.sideBarCardButtonSkin} ${
                  props.step.step == "planInfo" ? props.step.style : ""
                }`}
                onClick={(e) => {
                  props.subscribeHandeler(2);
                }}
              >
                2
              </Button>
              <div className="ms-2 me-auto">
                <div className={`${sideBarClass.sidebarCardSubtextSkin} `}>
                  Step 2
                </div>
                SELECT PLAN
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className={`${sideBarClass.sideBarCardListSkin} d-flex justify-content-between align-items-start`}
            >
              <Button
                variant="info"
                className={sideBarClass.sideBarCardButtonSkin}
                onClick={(e) => {
                  props.subscribeHandeler(3);
                }}
              >
                3
              </Button>
              <div className="ms-2 me-auto">
                <div className={`${sideBarClass.sidebarCardSubtextSkin} `}>
                  Step 3
                </div>
                ADD-ONS
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className={`${sideBarClass.sideBarCardListSkin} d-flex justify-content-between align-items-start`}
            >
              <Button
                variant="info"
                className={sideBarClass.sideBarCardButtonSkin}
                onClick={(e) => {
                  props.subscribeHandeler(4);
                }}
              >
                4
              </Button>
              <div className="ms-2 me-auto">
                <div className={`${sideBarClass.sidebarCardSubtextSkin} `}>
                  Step 4
                </div>
                SUMMARY
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default SideBarCardComponent;
