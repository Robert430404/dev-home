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

enum EventListenerProps {
  OnClick = 'onClick'
}

class JsxFactory {
  public static parse(tag: any, props: Record<string, string | Function> | null, ...children: any) {
    // TODO: Cleanup use of element so a temporary header element doesn't need to be created
    // Acceptance Critera: document.createElement('header') is removed
    let element: HTMLElement = document.createElement('header');

    if (typeof tag === 'function') {
      element = tag(props);
    }

    if (typeof tag === 'string') {
      element = document.createElement(tag);
    }

    // TODO: Get away from using .append as its unsafe
    // Acceptance Criteria: appendChild is used instead
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
        // TODO: Properly breakout each version of AlteredPropValues
        // Acceptance Criteria: To add more AlteredPropValue cases, the logic doesn't go into this function
        // and further expand/increase complexity
        if (key === AlteredPropValues.ClassName) {
          if (typeof value !== 'string') {
            continue;
          }

          const classNames = value.split(' ');

          classNames.forEach(className => element.classList.add(className));

          continue;
        }

        // TODO: Properly breakout each version of EventListenerProps
        // Acceptance Criteria: To add more EventListenerProps cases, the logic doesn't go into this function
        // and further expand/increase complexity
        if (key === EventListenerProps.OnClick) {
          if (typeof value !== 'function') {
            continue;
          }

          element.addEventListener('click', () => value());

          continue;
        }

        element.setAttribute(key, value as string);
      }
    }

    return element;
  }
}

export default JsxFactory;