import Card from "react-bootstrap/Card";
import StepTwoCard from "./StepTwoCards.module.scss";
import Image from "react-bootstrap/Image";
import ProIcon from "./CustomProIcon";
import ArcadeIcon from "./CustomArcadeIcon";
import AdvanceIcon from "./CustomAdvanceIcon";
import { useEffect, useState } from "react";

function TextExample(props: any) {
  const [cardData, setCardData] = useState({
    index: 1,
    title: "Arcade",
    amount: "$9/mo",
    promotion: "2 months free",
    isPromotion: false,
  });

  useEffect(() => {
    subscribeCard(props.index);
  }, []);
  const subscribeCard = (number: any) => {
    switch (number) {
      case 1:
        setCardData({
          ...cardData,
          index: number,
          title: "Arcade",
          amount: "$9/mo",
          promotion: "2 months free",
          isPromotion: false,
        });
        break;
      case 2:
        setCardData({
          ...cardData,
          index: number,
          title: "Advance",
          amount: "$12/mo",
          promotion: "2 months free",
          isPromotion: false,
        });
        break;
      default:
        setCardData({
          ...cardData,
          index: number,
          title: "Pro",
          amount: "$15/mo",
          promotion: "2 months free",
          isPromotion: false,
        });
        break;
    }
  };

  const selectIcon = (iconNumber: Number) => {
    switch (iconNumber) {
      case 1:
        return <ProIcon />;
        break;
      case 2:
        return <ArcadeIcon />;
        break;
      case 3:
        return <AdvanceIcon />;
        break;
      default:
        break;
    }
  };
  return (
    <Card className={StepTwoCard.cardSkinStepTwo}>
      {selectIcon(props.index)}
      <Card.Body>
        <Card.Title>{cardData.title}</Card.Title>
        <Card.Text>{cardData.amount}</Card.Text>
        <Card.Subtitle>{cardData.promotion}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
