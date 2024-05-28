import Card from "react-bootstrap/Card";
import planInfoCard from "./PlanInfoCards.module.scss";
import Image from "react-bootstrap/Image";
import ProIcon from "./CustomProIcon";
import ArcadeIcon from "./CustomArcadeIcon";
import AdvanceIcon from "./CustomAdvanceIcon";
import { useEffect, useMemo, useState } from "react";

function PlanInfoCards(props: any) {
  const [cardData, setCardData] = useState({
    index: 1,
    title: "Arcade",
    amount: "$9/mo",
    promotion: "2 months free",
    isPromotion: false,
  });

  useEffect(() => {
    subscribeCard(props.index);
  }, [props.planSelection]);

  const subscribeCard = (number: any) => {
    switch (number) {
      case 1:
        setCardData({
          ...cardData,
          index: number,
          title: "Arcade",
          amount: !props.planSelection ? "$9/mo" : "$90/yr",
          promotion: props.planSelection ? "2 months free" : "",
          isPromotion: props.planSelection ? true : false,
        });
        break;
      case 2:
        setCardData({
          ...cardData,
          index: number,
          title: "Advance",
          amount: !props.planSelection ? "$12/mo" : "$120/yr",
          promotion: props.planSelection ? "2 months free" : "",
          isPromotion: props.planSelection ? true : false,
        });
        break;
      default:
        setCardData({
          ...cardData,
          index: number,
          title: "Pro",
          amount: !props.planSelection ? "$15/mo" : "$150/yr",
          promotion: props.planSelection ? "2 months free" : "",
          isPromotion: props.planSelection ? true : false,
        });
        break;
    }
  };

  const selectIcon = (iconNumber: Number) => {
    switch (iconNumber) {
      case 1:
        return <ArcadeIcon />;
        break;
      case 2:
        return <AdvanceIcon />;
        break;
      case 3:
        return <ProIcon />;
        break;
      default:
        break;
    }
  };
  return (
    <Card
      onClick={(e) => {
        console.log("Hello");
      }}
      className={planInfoCard.cardSkinStepTwo}
    >
      <div className={planInfoCard.iconCardSkin}>{selectIcon(props.index)}</div>
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.amount}</Card.Text>
        <Card.Subtitle>{cardData.promotion}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default PlanInfoCards;
