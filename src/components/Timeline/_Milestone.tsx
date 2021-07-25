import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './_milestone.scss';

const Milestone = () => {
  return (
    <div className="milestone">
      <div className="milestone_indicator">
        <div className="milestone_indicator_innerDot"></div>
      </div>
      <div className="milestone_connector"></div>
    </div>
  );
}

export default Milestone;