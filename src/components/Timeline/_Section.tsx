import JsxFactory from "../../core/JsxFactory/JsxFactory";
import Milestone, { Props as MilestoneProps } from './_Milestone';
import Card, { Props as CardProps } from "./_Card";
import './_section.scss';

export interface Props extends MilestoneProps, CardProps {
  section: Props
}

const Section = (props: Props) => {
  return (
    <div className="section">
      <Milestone isFirst={props.section.isFirst}/>
      <Card date={props.section.date} company={props.section.company} achievement={props.section.achievement}/>
    </div>
  );
}

export default Section;