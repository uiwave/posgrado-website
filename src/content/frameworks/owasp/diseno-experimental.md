---
title: Diseño Metodológico del Experimento
description: Estructuración de variables, escenarios y matriz de evaluación para el A/B Testing de seguridad con OWASP.
order: 2
---

# Enfoque de la Investigación

La presente metodología plantea un **estudio experimental comparativo** estructurado bajo el principio de _A/B Testing_ aplicado a la ingeniería de software. El objetivo central es demostrar cuantitativamente el impacto y valor académico de implementar las guías de OWASP frente a un desarrollo empírico o tradicional.


# 1. Definición del Experimento (Variables)

Para garantizar la rigurosidad científica del estudio, el marco metodológico delimita las siguientes variables de control:

- **Variable Independiente:** La aplicación sistemática de la metodología y estándares de seguridad de **OWASP** (controles proactivos y requisitos de _ASVS Nivel 1_).
- **Variable Dependiente:** El nivel de seguridad general del sistema, el volumen de vulnerabilidades críticas identificadas y el índice de deuda técnica en el software resultante.

---

# 2. Los Dos Escenarios a Comparar

Para asegurar una comparativa simétrica y justa, ambos sistemas comparten el mismo alcance funcional, lenguaje de programación, motor de base de datos y arquitectura base:

### Software A (Grupo Control - "Sin OWASP")

Desarrollo enfocado estrictamente en criterios funcionales ("que el sistema funcione"). Se programa bajo prácticas comunes o empíricas de la industria, sin capas avanzadas de sanitización de entradas, gestión robusta de sesiones o hardening de infraestructura.

### Software B (Grupo Experimental - "Con OWASP")

Desarrollo construido implementando los **OWASP Proactive Controls** desde la fase de diseño. Cada módulo es validado y contrastado con los requisitos específicos del estándar **OWASP ASVS Nivel 1**.

---

# 3. Matriz de Evaluación y Métricas

La recolección de datos y el posterior análisis de resultados para la tesis se articulará en torno a cuatro ejes fundamentales de evaluación:

| Criterio de Comparación       | Herramienta / Método de Medición          | Resultado Esperado                                                                                                      |
| :---------------------------- | :---------------------------------------- | :---------------------------------------------------------------------------------------------------------------------- |
| **Análisis Estático (SAST)**  | SonarQube / OWASP Dependency-Check        | El _Software A_ presentará un mayor índice de alertas por código inseguro y dependencias desactualizadas o vulnerables. |
| **Análisis Dinámico (DAST)**  | OWASP ZAP (Escaneo automatizado)          | El _Software B_ mitigará exitosamente los vectores de ataque automatizados estándar (XSS, SQLi, CSRF).                  |
| **Cumplimiento del Estándar** | Check-list de OWASP ASVS Nivel 1          | Porcentaje contrastado de requisitos de seguridad cubiertos y aprobados de forma nativa en ambas soluciones.            |
| **Pruebas de Penetración**    | Pentesting Manual / Pruebas de caja negra | Intentos dirigidos a comprometer la lógica de negocio, la elusión de autenticación y la escalada de privilegios.        |

---

# 💡 Mitigación del Sesgo Metodológico

> **Desafío Metodológico:** Al adquirir conocimiento sobre OWASP, el desarrollador corre el riesgo de introducir un sesgo cognitivo inconsciente si construye el _Software A_ (es complejo omitir técnicas de prevención de inyecciones de forma deliberada si ya se dominan).

Para neutralizar este sesgo en el documento de tesis, se plantean las siguientes alternativas de ejecución:

- **Opción 1 (Estrategia de Hardening):** Desarrollar el _Software A_ guiado por documentación o tutoriales estándar de internet orientados exclusivamente a la funcionalidad. Posteriormente, bifurcar el código y aplicar refactorización de seguridad (_hardening_) guiada por OWASP para dar origen al _Software B_.
- **Opción 2 (Línea de Base Externa):** Adoptar un proyecto o código base previo desarrollado por terceros (por ejemplo, estudiantes de semestres anteriores) que no haya considerado auditorías de seguridad. Este código actuará como la _Baseline A_, la cual será intervenida y securizada para generar la versión _B_.

---

# Recursos Adicionales del Proyecto

A continuación, puedes consultar los repositorios de código y la documentación técnica generada durante el desarrollo de la fase experimental.

<a href="/docs/matriz-evaluacion-owasp.xlsx" target="_blank" rel="noopener noreferrer" class="not-prose inline-flex items-center gap-2 px-5 py-3 bg-slate-900 text-white font-bold text-sm rounded-xl shadow-[4px_4px_0_0_#2563eb] hover:translate-x-0.5 hover:translate-y-0.5 transition-all my-4">📊 Descargar Matriz de Evaluación (Excel)</a>
