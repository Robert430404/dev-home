declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any
    }
  }
}

class JsxFactory {
  public static parse(tag: any, props: Record<string, string>, ...children: any) {
    let element: HTMLElement = document.createElement('header');

    if (typeof tag === 'function') {
      element = tag();
    }

    if (typeof tag === 'string') {
      element = document.createElement(tag);
    }

    children.forEach((child: any) => {
      element.append(child);
    });

    return element;
  }
}

export default JsxFactory;