import TypeWriter from '../TypeWriter/TypeWriter';
import JsxFactory from "../../core/JsxFactory/JsxFactory";
import './about.scss';

const typeWriterWords = ['Front-end', 'Back-end', 'Design-Systems', 'Micro-Frontends', 'Architecture'];

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
        <p className="about_passions_text">
          <TypeWriter words={typeWriterWords} delay={150}/> <span className="about_passions_cursor"></span>
        </p>
      </aside>
    </section>
  );
};

export default About;
