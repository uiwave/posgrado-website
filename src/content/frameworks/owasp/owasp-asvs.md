---
title: OWASP ASVS
order: 4
---

# OWASP ASVS (Application Security Verification Standard)

| Capítulo | Tema Principal               | Ejemplos de lo que verifica                                                          |
| :------- | :--------------------------- | :----------------------------------------------------------------------------------- |
| **V1**   | Arquitectura y Diseño Seguro | Modelado de amenazas, separación de componentes y ciclo de vida seguro.              |
| **V2**   | Autenticación                | Políticas de contraseñas, almacenamiento seguro de credenciales, MFA.                |
| **V3**   | Gestión de Sesiones          | Tiempos de expiración de sesión, tokens seguros, prevención de fijación de sesión.   |
| **V4**   | Control de Acceso            | Verificación de permisos en cada solicitud, principio de mínimo privilegio.          |
| **V5**   | Validación y Desinfección    | Prevenir SQL Injection, XSS, sanitización de entradas de texto.                      |
| **V6**   | Criptografía Almacenada      | Cifrado de datos sensibles en la base de datos (AES-256, hashing con Argon2/Bcrypt). |
| **V7**   | Errores y Registro (Logs)    | Evitar mostrar trazas de error con datos técnicos; registrar intentos de ataque.     |
| **V8**   | Protección de Datos          | Privacidad de datos, manejo de cookies seguras (HttpOnly, Secure, SameSite).         |
| **V9**   | Comunicaciones               | Uso de TLS/HTTPS en todas las conexiones, cifrado en tránsito fuerte.                |
| **V10**  | Código Malicioso             | Evitar código no autorizado, puertas traseras (backdoors) o bombas de tiempo.        |
| **V11**  | Lógica de Negocio            | Evitar ataques que exploten el flujo de la app (ej. comprar con saldo negativo).     |
| **V12**  | Archivos y Recursos          | Subida segura de archivos (evitar la ejecución de scripts maliciosos cargados).      |
| **V13**  | APIs y Servicios Web         | Seguridad en endpoints REST/GraphQL, autenticación por tokens JWT.                   |
| **V14**  | Configuración                | Endurecimiento de servidores (hardening), cabeceras HTTP de seguridad.               |
