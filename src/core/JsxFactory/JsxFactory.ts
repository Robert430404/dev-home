import { isHtmlElement } from "../../utilities/guards/guards";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any
    }
  }
}

enum AlteredPropValues {
  ClassName = 'className'
}

class JsxFactory {
  public static parse(tag: any, props: Record<string, string> | null, ...children: any) {
    let element: HTMLElement = document.createElement('header');

    if (typeof tag === 'function') {
      element = tag(props);
    }

    if (typeof tag === 'string') {
      element = document.createElement(tag);
    }

    children.forEach((child: any) => {
      if (isHtmlElement(child)) {
        element.append(child);
      }

      if (typeof child === 'number') {
        element.append(document.createTextNode(child.toString(10)));
      }

      if (typeof child === 'string') {
        element.append(document.createTextNode(child));
      }
    });

    if (props) {
      for (const [key, value] of Object.entries(props)) {
        if (key === AlteredPropValues.ClassName) {
          const classNames = value.split(' ');

          classNames.forEach(className => element.classList.add(className));

          continue;
        }

        element.setAttribute(key, value);
      }
    }

    return element;
  }
}

export default JsxFactory;