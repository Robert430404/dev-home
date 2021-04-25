import JsxFactory from './core/JsxFactory';
import './index.scss';

import TestComponent from './testComponent';

const renderComponent = () => {
  return (
    <div classNames="hello hey whatsup"><TestComponent /></div>
  );
}

document.body.append(renderComponent());

export default renderComponent;