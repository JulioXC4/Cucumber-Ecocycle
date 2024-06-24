const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('que el estudiante se encuentra registrado', function () {
    // Aquí iría la lógica para verificar que el estudiante está registrado
    console.log('Estudiante se encuentra registrado');
});

Given('acceda a su cuenta', function () {
    // Aquí iría la lógica para acceder a la cuenta del estudiante
    console.log('Estudiante accede a su cuenta');
});

When('haga clic en el perfil de otro usuario desde la lista de búsqueda', function () {
    // Aquí iría la lógica para simular el clic en el perfil de otro usuario
    console.log('Estudiante hace clic en perfil de otro usuario');
});

Then('el estudiante debe ser redirigido a su perfil', function () {
    // Aquí iría la lógica para verificar que el estudiante es redirigido a su propio perfil
    console.log('Estudiante es redirigido a su perfil');
});

Then('pueda ver el nombre, foto de perfil, carrera y otros detalles', function () {
    // Aquí iría la lógica para verificar que se muestran los detalles del perfil del otro usuario
    console.log('Estudiante puede ver detalles del perfil de otro usuario');
});

When('vea el perfil de otro usuario', function () {
    // Aquí iría la lógica para simular la visualización del perfil de otro usuario
    console.log('Estudiante ve el perfil de otro usuario');
});

Then('el estudiante debe tener la opción de compartir su propio perfil', function () {
    // Aquí iría la lógica para verificar que se muestra la opción de compartir perfil
    console.log('Estudiante tiene la opción de compartir su propio perfil');
});

Then('conectarse con él si está interesado', function () {
    // Aquí iría la lógica para conectar con el otro usuario si el estudiante está interesado
    console.log('Estudiante puede conectarse con el otro usuario si está interesado');
});