import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './_milestone.scss';

export interface Props {
  isFirst?: boolean
}

const defaultProps: Props = {
  isFirst: false
};

const Milestone = (props: Props = defaultProps) => {
  return (
    <div className="milestone">
      <div className="milestone_indicator">
        <div className="milestone_indicator_innerDot"></div>
      </div>
      { !props.isFirst ? <div className="milestone_connector"></div> : '' }
    </div>
  );
}

export default Milestone;