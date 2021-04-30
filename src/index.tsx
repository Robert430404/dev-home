import JsxFactory from './core/JsxFactory/JsxFactory';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import './index.scss';

const Index = () => {
  return (
    <main>
      bmcarmody/dev-home
      <ThemeSwitcher />
    </main>
  );
}

document.body.append(Index());

export default Index;