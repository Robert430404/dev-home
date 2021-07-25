import JsxFactory from '../../core/JsxFactory/JsxFactory';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <span className="header_title">bmcarmody/dev-home</span>
      <div className="header_links">
        <a href="#experience" className="header_link">Experience</a>
        <span className="header_link">Test Section</span>
        <span className="header_link">Test Section</span>
      </div>
    </header>
  );
};

export default Header;