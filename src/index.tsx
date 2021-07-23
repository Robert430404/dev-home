import JsxFactory from './core/JsxFactory/JsxFactory';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Header from './components/Header/Header';
import './index.scss';

const Index = () => {
  return (

    <div>
      <Header />
      <main>
        <ThemeSwitcher />
      </main>
    </div>
  );
}

document.body.append(Index());

export default Index;