import React from "react";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import sideBarClass from "./SideBarCardComponent.module.scss";

function SideBarCardComponent() {
  return (
    <>
      <Card
        style={{ width: "20rem", height: "40rem" }}
        className={sideBarClass.sideBarCardComponentSkin}
      >
        <Card.Body>
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
                className={sideBarClass.sideBarCardButtonSkin}
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
                className={sideBarClass.sideBarCardButtonSkin}
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
