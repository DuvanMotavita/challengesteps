import Card from "react-bootstrap/Card";
import StepTwoCard from "./StepTwoCards.module.scss";
import Image from "react-bootstrap/Image";
import ProIcon from "./CustomProIcon";

function TextExample(props: any) {
  return (
    <Card className={StepTwoCard.cardSkinStepTwo}>
      <Card.Body>
        <ProIcon />
        <Card.Title>Arcade</Card.Title>
        <Card.Text>$9/mo</Card.Text>
        <Card.Subtitle>2 Monsths Free</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default TextExample;
