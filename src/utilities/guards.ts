export const isHtmlElement = (element: HTMLElement | any): element is HTMLElement => {
  return element instanceof HTMLElement;
}