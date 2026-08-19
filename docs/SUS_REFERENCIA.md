# Escala de Usabilidad del Sistema (SUS)

Esta referencia se tomó del archivo proporcionado para el proyecto. En el formulario, cada afirmación debe usar una escala de 1 (totalmente en desacuerdo) a 5 (totalmente de acuerdo).

1. Creo que me gustaría utilizar este sistema con frecuencia.
2. Encontré el sistema innecesariamente complejo.
3. Considero que el sistema fue fácil de usar.
4. Creo que necesitaría el apoyo de una persona con conocimientos técnicos para poder utilizar este sistema.
5. Encontré que las diferentes funciones de este sistema estaban bien integradas.
6. Considero que existía demasiada inconsistencia en este sistema.
7. Imagino que la mayoría de las personas aprenderían a utilizar este sistema muy rápidamente.
8. Encontré el sistema muy complicado de utilizar.
9. Me sentí seguro(a) al utilizar el sistema.
10. Necesité aprender muchas cosas antes de poder utilizar este sistema.

## Calificación

- Ítems impares (1, 3, 5, 7 y 9): reste 1 al valor seleccionado.
- Ítems pares (2, 4, 6, 8 y 10): reste la respuesta de 5.
- Sume los diez valores y multiplique el resultado por 2,5.
- La puntuación final va de 0 a 100.

Interpretación definida en el archivo del proyecto:

- 85 o más: excelente usabilidad.
- 70 a 84: buena usabilidad.
- 50 a 69: usabilidad aceptable o marginal.
- Menos de 50: problemas importantes de usabilidad.

Una puntuación de 68 se usa habitualmente como referencia promedio.

Referencia proporcionada: Brooke J. SUS: A Quick and Dirty Usability Scale. En: Jordan PW, Thomas B, Weerdmeester BA, McClelland IL, editores. *Usability Evaluation in Industry*. Londres: Taylor & Francis; 1996. p. 189–194.

## Configurar Microsoft Forms

1. Cree un formulario con consentimiento e instrucciones aprobados por el protocolo de investigación.
2. Añada las diez afirmaciones en el mismo orden y una escala obligatoria de 1 a 5.
3. Revise qué datos de identidad recoge Microsoft Forms y ajuste la configuración según la aprobación ética.
4. Copie el enlace público en `assets/js/config.js`, dentro de `susFormUrl`.
5. Pruebe el formulario desde una ventana privada antes de distribuir la herramienta.
