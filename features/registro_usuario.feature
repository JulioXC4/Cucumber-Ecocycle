Feature: Registro de Usuario

  Scenario: Acceder a registro de cuenta
    Given que el estudiante ha adquirido la aplicación
    When seleccione y abra la aplicación
    And el estudiante escoge la opción 'Registrarse'
    Then el estudiante será dirigido a la sección para completar los campos con sus datos personales, incluyendo el nombre, la carrera que estudia, sus preferencias y crear una contraseña.

  Scenario: Crear cuenta
    Given que el estudiante ha completado todos los campos necesarios
    And el estudiante acepta los términos y condiciones de la aplicación
    When el estudiante presione el botón de 'Confirmar registro'
    Then el sistema va a registrar la cuenta de manera exitosa.
