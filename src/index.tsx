import JsxFactory from './core/JsxFactory';

import TestComponent from './testComponent';

const renderComponent = () => {
  return (
    <div><TestComponent /></div>
  );
}

document.body.append(renderComponent());

export default renderComponent;