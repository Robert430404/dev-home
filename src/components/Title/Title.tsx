import JsxFactory from '../../core/JsxFactory';
import './title.scss';

const colors = [
  'test1',
  'test2',
  'test3',
  'test4',
  'test5'
];

const generateTags = () => {
  const name = 'Brandon Carmody';
  const splitName = name.split('');

  let counter = 0;
  const spanArray: HTMLSpanElement[] = splitName.map((character: string): HTMLSpanElement => {
    const spanElement = document.createElement('span');
    spanElement.appendChild(document.createTextNode(character));
    spanElement.classList.add(colors[counter]);

    if (counter === colors.length - 1) {
      counter = 0;
    } else {
      counter++;
    }

    return spanElement;
  });

  const divElement = document.createElement('div');
  spanArray.forEach(element => divElement.appendChild(element));

  return divElement;
}

const Title = () => {
  return (
    <div classNames="title">{generateTags()}</div>
  );
};

export default Title;