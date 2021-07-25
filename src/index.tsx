import About from './components/About/About'
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import JsxFactory from './core/JsxFactory/JsxFactory';
import './index.scss';

// TODO: Re-enable theme switcher
// import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

// TODO: Remove and use theme switcher
const forceDarkTheme = () => {
  document.body.classList.add('darkTheme');
}

const Index = () => {
  forceDarkTheme();

  return (

    <div>
      <Header />
      <main>
        <About />
        <Experience />
        {/* <Skills /> */}
      </main>
    </div>
  );
}

document.body.append(Index());

export default Index;