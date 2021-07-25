import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <aside className="about_aside"></aside>
      <aside className="about_aside about_info">
        <p>
          Hey, I'm <span className="about_highlight">Brandon</span><br />
          a <span className="about_highlight">front-end</span> developer<br />
          with a focus on <br />
          <span className="about_highlight">JavaScript</span> technologies
        </p>
      </aside>
    </section>
  );
};

export default About;
