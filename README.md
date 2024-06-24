# Cucumber-Ecocycle
# Ecocycle Gherkin & Cucumber Demo

Este proyecto utiliza Gherkin y Cucumber para el análisis de requerimientos y pruebas automatizadas para Ecocycle, una aplicación destinada a ...

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio desde GitHub:

   ```bash
   git clone <url_del_repositorio>
   cd ecocycle-gherkin
   
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
