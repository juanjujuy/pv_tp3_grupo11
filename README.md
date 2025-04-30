# Trabajo Práctico N°3

## Integrantes del Grupo

A continuación, los integrantes del grupo con sus respectivos nombres de usuario de GitHub:

* Juan Eduardo Lamas - usuario de Github: juanjujuy (hizo la parte logica de lista tarea )
* Pricila Acsama - usuario de Github: pricilaacsama (hizo la parte logica de lista producto)
* Delia Maribel Cusipuma - usuario de Github: Delia150 (hizo la parte de estilos de lista producto)
* Matias Gabriel Alfaro - usuario de Github: mati465 (hizo la parte de estilos de lista tarea)
* Jonatan Rojas Romero - usuario de Github: Jonatan1Romero (no participo en este tp)

Este proyecto consiste en la creación y gestión de datos utilizando React. Se implementan dos funcionalidades principales: la gestión de una lista de productos y la gestión de una lista de tareas.

La sección de **Productos** permite la visualización de una lista de productos con sus descripciones y precios. Además, se realizan diversas operaciones sobre esta lista, como filtrado por precio, cálculo de IVA, ordenamiento, adición y eliminación de productos. La implementación de la lista de productos se realiza en el componente `Producto.jsx` sin el uso de hooks de React.

La sección de **Tareas** (a ser implementada en el componente `Tarea.jsx`, tambien usando los componentes funcionales `TaskInput`, `TaskItem` y `TaskList`) permitirá la creación, visualización, edición y eliminación de tareas, utilizando el hook `useState` de React para la gestión del estado.

Podrás ver el listado de productos en la interfaz y también se mostrará en la consola del navegador.
Tambien se podra ver en la interfaz el listado de tareas.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
