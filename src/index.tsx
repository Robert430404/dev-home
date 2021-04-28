import JsxFactory from './core/JsxFactory/JsxFactory';
import Ground from './components/Ground/Ground';
import './index.scss';

const Index = () => {
  return (
    <main>
      Brandon Carmody
      <Ground />
    </main>
  );
}

document.body.append(Index());

export default Index;