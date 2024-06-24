# Cucumber-Ecocycle
# Ecocycle Gherkin & Cucumber Demo

Este proyecto utiliza Gherkin y Cucumber para el análisis de requerimientos y pruebas automatizadas para Ecocycle.

## Instalación de Node.js

Para poder ejecutar este proyecto localmente, asegúrate de tener Node.js instalado en tu máquina. Node.js es un entorno de ejecución de JavaScript que necesitarás para ejecutar las pruebas y scripts de este proyecto.

### Instalación de Node.js

1. **Descarga de Node.js:**
   - Ve al sitio web oficial de Node.js: [nodejs.org](https://nodejs.org/).
   - Descarga la versión recomendada para tu sistema operativo (Windows, macOS, Linux).

2. **Instalación en Windows:**
   - Ejecuta el instalador descargado y sigue las instrucciones del asistente de instalación.

3. **Instalación en macOS:**
   - Abre el archivo .pkg descargado y sigue las instrucciones del instalador.

4. **Instalación en Linux:**
   - Puedes instalar Node.js a través del gestor de paquetes de tu distribución (por ejemplo, `apt` para Ubuntu):
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

5. **Verificación de la instalación:**
   - Para asegurarte de que Node.js se haya instalado correctamente, abre una terminal y ejecuta los siguientes comandos:
     ```bash
     node --version
     npm --version
     ```
     - `node --version` debería mostrar la versión instalada de Node.js.
     - `npm --version` debería mostrar la versión instalada de npm, que es el gestor de paquetes de Node.js.

## Ejecución del Proyecto

Una vez que Node.js esté instalado correctamente, puedes proceder con la ejecución del proyecto que utiliza Gherkin y Cucumber para pruebas automatizadas.

1. **Clonar el Repositorio:**
   - Clona el repositorio desde GitHub como se indica en el README del proyecto.

2. **Instalación de Dependencias:**
   - Una vez dentro del directorio del proyecto (`ecocycle-gherkin`), instala las dependencias necesarias utilizando npm (el gestor de paquetes de Node.js):
     ```bash
     npm install
     ```

3. **Agregar Nuevos Features:**
   - Si deseas agregar nuevos escenarios de prueba, sigue las instrucciones proporcionadas en el README para crear archivos `.feature` y definir pasos en JavaScript.
   
## Agregar Nuevos Features
Si deseas agregar nuevos features para pruebas o análisis de requerimientos, sigue estos pasos:

1. Crea un nuevo archivo .feature en el directorio features/. Por ejemplo, nuevo_feature.feature.
2. Define los escenarios y pasos en este archivo .feature utilizando Gherkin.
3. Crea los pasos correspondientes en JavaScript en el directorio features/step_definitions/. Por ejemplo, nuevo_feature_steps.js.
   
Ejemplo:

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');

// Define tus pasos Given, When, Then aquí
```
## Ejecución de Pruebas
Para ejecutar las pruebas definidas con Cucumber, utiliza el siguiente comando:
```javascript
npm test
```
Este comando ejecutará las pruebas definidas en los archivos .feature utilizando Cucumber.
