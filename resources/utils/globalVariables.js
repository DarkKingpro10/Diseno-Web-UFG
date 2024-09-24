export const BASEURL = window.location.origin;

export const SCRIPTS = [
  {
    "src": BASEURL + "/resources/components/navbar.js",
    "isModule": true,
    "isPrincipal": true
  }
];

export const LINKS_EXTERNAL = [
  {
    "rel": "stylesheet",
    "URL": "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  },
  {
    "rel": "stylesheet",
    "URL": BASEURL+"/style.css"
  }
]

export const LINKS = [
  {
    "title": "Inicio",
    "URL": BASEURL,
    "isExpandContainer": false
  },
  {
    "title": "Periodo 1",
    "isExpandContainer": true,
    "children": [
      {
        "title": "Actividad 1",
        "URL": BASEURL + "/periodo1/actividad1.html",
        "isExpandContainer": true,
        "iconExpanded": "chevron_right",
        "children": [
          {
            "title": "Enlaces",
            "URL": BASEURL + "/periodo1/enlaces.html",
            "isExpandContainer": false,
          },
          {
            "title": "Formularios",
            "URL": BASEURL + "/periodo1/formularios.html",
            "isExpandContainer": false
          }
        ]
      },
      {
        "title": "Actividad 2",
        "URL": BASEURL + "/periodo1/actividad2.html",
        "isExpandContainer": false
      },
      {
        "title": "Actividad 3",
        "URL": BASEURL + "/periodo1/actividad3.html",
        "isExpandContainer": false
      }
    ]
  },
  {
    "title": "Periodo 2",
    "isExpandContainer": true,
    "children": [
      {
        "title": "Enlaces",
        "URL": BASEURL + "/periodo2/enlaces.html",
        "isExpandContainer": false
      },
      {
        "title": "Formularios",
        "URL": BASEURL + "/periodo2/formularios.html",
        "isExpandContainer": false
      },
      {
        "title": "Validación Formularios",
        "URL": BASEURL + "/periodo2/formularios2.html",
        "isExpandContainer": false
      }
    ]
  }
];