---
title: OWASP Top 10
description: Evaluación comparativa de postura de seguridad entre un desarrollo tradicional y uno bajo estándares OWASP.
order: 3
---

| Código y Riesgo                                                                                                                               | Descripción General del Impacto                                                                                                         |
| :-------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
|   [[**Pérdida de Control de Acceso**](https://owasp.org/Top10/es/A01_2021-Broken_Access_Control/)]                                              | Permite a los usuarios actuar fuera de sus permisos previstos, accediendo a datos ajenos o ejecutando funciones privilegiadas.          |
| [[**Configuración de Seguridad Incorrecta**](https://owasp.org/Top10/es/A05_2021-Security_Misconfiguration/)]                                 | Ocurre por falta de endurecimiento (hardening) en servidores, servicios en la nube o por mantener credenciales por defecto.             |
| [[**Fallas en la Cadena de Suministro de Software**](https://owasp.org/Top10/)]                                                               | Riesgos asociados al uso de dependencias de terceros, librerías heredadas, repositorios infectados o falta de verificación de paquetes. |
| [[**Fallas Criptográficas**](https://owasp.org/Top10/es/A02_2021-Cryptographic_Failures/)]                                                    | Exposición de datos sensibles en tránsito o almacenamiento debido a la ausencia o debilidad de algoritmos de cifrado.                   |
| [[**Inyección**](https://owasp.org/Top10/es/A03_2021-Injection/)]                                                                             | Datos proporcionados por el usuario son ejecutados como comandos por el intérprete (ej. SQLi, NoSQL, inyección de comandos OS).         |
| [[**Diseño Inseguro**](https://owasp.org/Top10/es/A04_2021-Insecure_Design/)]                                                                 | Defectos arquitectónicos que no pueden corregirse con parches de código; fallas nacidas desde la concepción del sistema.                |
| [[**Fallas de Autenticación**](https://owasp.org/Top10/es/A07_2021-Identification_and_Authentication_Failures/)]                              | Vulnerabilidades que permiten el secuestro de sesiones, ataques de fuerza bruta o suplantación de la identidad del usuario.             |
| [[**Fallas en la Integridad del Software o de los Datos**](https://owasp.org/Top10/es/A08_2021-Software_and_Data_Integrity_Failures/)]        | Falta de validación en actualizaciones de software, firmas digitales o deserialización de datos sin verificar la fuente original.       |
| [[**Fallas en el Registro, Alerta y Monitoreo de Seguridad**](https://owasp.org/Top10/es/A09_2021-Security_Logging_and_Monitoring_Failures/)] | La incapacidad de detectar o alertar a tiempo sobre brechas de seguridad activas debido a logs insuficientes o inexistentes.            |
| [[**Manejo Inadecuado de Condiciones Excepcionales**](https://owasp.org/Top10/)]                                                              | Fugas de información sensible a través de mensajes de error genéricos del servidor o fallos en el control de excepciones de la lógica.  |
