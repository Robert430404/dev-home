import JsxFactory from '../../core/JsxFactory/JsxFactory';

enum Themes {
  Light = 'lightTheme',
  Dark = 'darkTheme'
}

const initTheme = () => {
  const currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
    document.body.classList.add(Themes.Light);
    localStorage.setItem('theme', Themes.Light);

    return;
  }

  document.body.classList.add(currentTheme);
}

const switchTheme = () => {
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === Themes.Light) {
    document.body.classList.replace(Themes.Light, Themes.Dark);
    localStorage.setItem('theme', Themes.Dark);
  }

  if (currentTheme === Themes.Dark) {
    document.body.classList.replace(Themes.Dark, Themes.Light);
    localStorage.setItem('theme', Themes.Light);
  }
}

const ThemeSwitcher = () => {
  initTheme();

  return (
    <button onClick={switchTheme}>Switch Theme</button>
  );
}

export default ThemeSwitcher;