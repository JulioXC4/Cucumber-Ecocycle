# features/ver_perfiles.feature
Feature: Ver perfiles de otros usuarios

  Scenario: Visualización de perfil
    Given que el estudiante se encuentra registrado
    And acceda a su cuenta
    When haga clic en el perfil de otro usuario desde la lista de búsqueda
    Then el estudiante debe ser redirigido a su perfil
    And pueda ver el nombre, foto de perfil, carrera y otros detalles

  Scenario: Compartir perfil
    Given que el estudiante se encuentra registrado
    And acceda a su cuenta
    When vea el perfil de otro usuario
    Then el estudiante debe tener la opción de compartir su propio perfil
    And conectarse con él si está interesado
