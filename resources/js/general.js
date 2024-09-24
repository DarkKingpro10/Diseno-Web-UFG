import { SCRIPTS, LINKS_EXTERNAL } from "../utils/globalVariables.js"


document.addEventListener('DOMContentLoaded', async function () {
  await loadLinks();
  await loadScripts();
  checkTheme();
});

function loadScripts() {
  return new Promise((resolve) => {
    //Cargando los scripts de JS
    let scriptsLoaded = 0;
    for (const script of SCRIPTS) {
      const scriptTag = document.createElement('script');

      scriptTag.src = script.src;

      if (script.isModule) {
        scriptTag.type = 'module';
      }

      if (script.isPrincipal) {
        document.head.appendChild(scriptTag);
      } else {
        document.body.appendChild(scriptTag);
      }

      scriptTag.onload = function () {
        scriptsLoaded++;
        if (scriptsLoaded === SCRIPTS.length) {
          resolve();
        }
      };
    }
  });
}

function loadLinks() {
  return new Promise((resolve) => {
    //Cargando cualquier Link externo
    for (const link of LINKS_EXTERNAL) {
      const linkTag = document.createElement('link');

      linkTag.rel = link.rel;
      linkTag.href = link.URL;

      document.head.appendChild(linkTag);
    }
    resolve();
  });
}
function checkTheme() {
  const storageTheme = localStorage.getItem('theme');
  const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const newTheme = storageTheme ?? systemColorScheme;

  const root = document.documentElement;
  const switcherTheme = document.getElementById
    ('trigger__theme');

  root.setAttribute('data-theme', newTheme);
  if (root.getAttribute('data-theme') === 'dark') {
    switcherTheme.checked = true;
  }

  switcherTheme.addEventListener('change', function () {
    const setTheme = this.checked ? 'dark' : 'light';
    root.setAttribute('data-theme', setTheme);
  })
}