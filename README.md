# Proyecto de Pruebas Automatizadas con Cypress

Este proyecto contiene pruebas automatizadas para la página web de Frávega (https://www.fravega.com/) utilizando Cypress y JavaScript. A continuación, se detallan los pasos para la instalación, configuración y ejecución de los tests.

## Pre-requisitos

Antes de iniciar, asegúrate de tener las siguientes herramientas instaladas en tu máquina:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. **Clonar el repositorio**:
   git clone https://github.com/valdelarosa/frav-qa-challenge.git

Instalar dependencias: Ejecuta el siguiente comando para instalar Cypress y otras dependencias del proyecto:
- npm install

## Estructura del Proyecto:

cypress/e2e/: Contiene los scripts de pruebas (Test cases).
cypress/support/: Archivos de configuración y comandos personalizados.
cypress/fixtures/: Archivos de datos de prueba.
cypress/screenObjects: Archivos con selectores y acciones.
cypress/artifacts: Grabaciones de ejecuciones de scripts.
cypress.config.js: Archivo de configuración de Cypress.

## Ejecución de Scripts:

Abrir Cypress:
npx cypress open

Ejecutar Cypress en modo headless: 
npx cypress run
