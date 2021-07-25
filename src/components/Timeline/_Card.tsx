import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './_card.scss';

export type Props = {
  date: string,
  company: string,
  achievement: string
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <h4>{props.date}</h4>
      <h5>{props.company}</h5>
      {props.achievement}
    </div>
  );
}

export default Card;