import JsxFactory from '../../core/JsxFactory/JsxFactory';
import { wait } from '../../utilities/components/wait';

export type Props = {
  words: string[],
  delay: number
};

/**
 * Adds a type writer effect onto specified HTMLElement
 * 
 * @param words {string[]} Array of words to type-write
 * @param element {HTMLElement} HTMLElement to apply type-write words to
 */
const typeWrite = async (words: string[], delay: number): Promise<void> => {
  document.addEventListener('DOMContentLoaded', async () => {
    const element = document.querySelector('.typeWriter') as HTMLElement;
  
    while (true) {
      for (let i = 0; i < words.length; i++) {
        await typeWord(words[i], element, delay);
        await deleteWord(element, delay);
      }
    }
  });
}

const typeWord = async (word: string, element: HTMLElement, delay: number): Promise<void> => {
  const letters = word.split('');

  for (let i = 0; i < letters.length; i++) {
    await wait(delay);
    element.append(letters[i]);
  }
}

const deleteWord = async (element: HTMLElement, delay: number): Promise<void> => {
  const word = element.textContent;

  if (!word) {
    return;
  }

  const letters = word.split('');

  await wait(delay * 3);

  while(letters.length > 0) {
    await wait(delay);
    letters.pop();
    element.textContent = letters.join('');
  }
}

const TypeWriter = (props: Props) => {
  return (
    <span className="typeWriter">{typeWrite(props.words, props.delay)}</span>
  );
}

export default TypeWriter;