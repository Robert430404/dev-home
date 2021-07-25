import JsxFactory from "../../core/JsxFactory/JsxFactory";
import Milestone from './_Milestone';
import Card, { Props as CardProps } from "./_Card";
import './_section.scss';

export type Props = {
  cardProps: CardProps
}

const Section = (props: Props) => {
  return (
    <div className="section">
      <Milestone />
      <Card date={props.cardProps.date} company={props.cardProps.company} achievement={props.cardProps.achievement}/>
    </div>
  );
}

export default Section;