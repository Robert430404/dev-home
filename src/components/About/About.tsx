import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <aside className="about_aside about_info">
        <p>
          Hey, I'm <span className="about_highlight">Brandon</span><br />
          a <span className="about_highlight">front-end</span> developer<br />
          with a passion for the<br />
          <span className="about_highlight">entire</span> technology stack
        </p>
      </aside>
      <aside className="about_aside about_passions">
        <p className="test">
          Front-end <span className="cursor"></span>
        </p>
      </aside>
    </section>
  );
};

export default About;
