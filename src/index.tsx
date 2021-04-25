import JsxFactory from './core/JsxFactory';
import Title from './components/Title/Title';
import './index.scss';

const Index = () => {
  return (
    <main>
      <Title />
    </main>
  );
}

document.body.append(Index());

export default Index;