import { BASEURL, LINKS } from "../utils/globalVariables.js";

function getListItem(linkArray, isExpandedItem = false) {
  let links = "";

  for (const link of linkArray) {
    if (link.isExpandContainer) {
      links += `<li class="navbar-expand-container">
                    <label class="navbar-list-item navbar-expand-label">
                      ${link.title}
                      <span class="material-symbols-outlined">
                        ${link.iconExpanded ?? "keyboard_arrow_down"}
                      </span>
                    </label>
                    <ul class="navbar-expanded-list">
                      ${getListItem(link.children, true)}
                    </ul>
                </li>`
    } else {
      if (!isExpandedItem) {
        links += `<li class="nav-item">
                      <a class="navbar-list-item" href="${link.URL}">${link.title}</a>
                  </li>`
      } else {
        links += `<li class="navbar-expanded-item">
                    <a class="navbar-list-item" href="${link.URL}">${link.title}</a>
                  </li>`
      }
    }
  }

  return links;
}

function generateHeader(links) {
  let header = `
    <header class="border-bottom-sutil">
      <div class="nav-container">
        <div class="poppins-bold nav-logo">
          <a href="${BASEURL}"> <img src="https://observatoriocovid19.sv/img/ufg.png" alt="Logo de la Universidad Francisco Gavidia"
            height="60px"><span>Principal<span></a>
        </div>
        <div class="nav__menu__container">
          <p>Menú</p>
          <div class="nav__burger__menu navbar__burger__menu--open" title="Abrir/Cerrar Menú">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <nav class="navbar">
          <ul class="navbar-list">
            ${links}
          </ul>
        </nav>
        <div class="overlay"></div>
        <div class="switcher__container">
          <input title="Cambiar a dark mode" type="checkbox" id="trigger__theme">
          <div class="theme__option"></div>
        </div>
      </div>
    </header>
  `;

  return header;
}

(() => {
  const links = getListItem(LINKS);
  const header = generateHeader(links);

  document.body.insertAdjacentHTML("afterbegin", header);
})();