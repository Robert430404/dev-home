import JsxFactory from '../../core/JsxFactory';

describe('JsxFactory tests', () => {
  test('Parse function', () => {
    const componentDivText = 'I am a div';
    const componentSpanText = 'I am a span'
    /**
     * <div>
        {componentDivText}
        <span>{componentSpanText}</span>
      </div>
     */

    const testDivElement = document.createElement('div');
    testDivElement.appendChild(document.createTextNode(componentDivText));
    const testSpanElement = document.createElement('span');
    testSpanElement.appendChild(document.createTextNode(componentSpanText));
    testDivElement.appendChild(testSpanElement);

    const result = JsxFactory.parse("div", null,
      componentDivText,
      JsxFactory.parse("span", null, componentSpanText)
    );

    expect(result).toBeInstanceOf(HTMLElement);
    expect(result).toEqual(testDivElement);
  });
});