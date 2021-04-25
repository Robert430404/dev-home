declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: string]: any
    }
  }
}

enum PropValues {
  ClassNames = 'classNames'
}

class JsxFactory {
  public static parse(tag: any, props: Record<string, string>, ...children: any) {
    let element: HTMLElement = document.createElement('header');

    if (typeof tag === 'function') {
      element = tag(props);
    }

    if (typeof tag === 'string') {
      element = document.createElement(tag);
    }

    children.forEach((child: any) => {
      element.append(child);
    });

    if (props) {
      for (const [key, value] of Object.entries(props)) {
        if (key === PropValues.ClassNames) {
          const classNames = value.split(' ');

          classNames.forEach(className => element.classList.add(className));
        }
      }
    }

    return element;
  }
}

export default JsxFactory;