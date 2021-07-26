import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './timeline.scss';
import Section from "./_Section";

const sections = [
  {
    date: 'August 2021',
    company: 'Slickdeals',
    achievement: 'Promoted to Front-end Engineer II'
  },
  {
    date: 'September 2020',
    company: 'Slickdeals',
    achievement: 'Promoted to Front-end Engineer I'
  },
  {
    date: 'August 2019',
    company: 'Slickdeals',
    achievement: 'Hired on as Associate Front-end Engineer'
  }
];

const Timeline = () => {
  return (
    <div className="timeline">
      { ...sections.map(section => <Section section={section} />) }
    </div>
  );
}

export default Timeline;