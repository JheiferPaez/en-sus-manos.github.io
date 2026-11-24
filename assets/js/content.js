(function () {
  "use strict";

  window.APP_CONTENT = Object.freeze({
  "brand": {
    "name": "En Sus Manos",
    "tagline": "Más educación, mejor cuidado"
  },
  "welcome": {
    "eyebrow": "Herramienta educativa para cuidadores",
    "title": "¡Bienvenidos a En Sus Manos!",
    "text": "Información para acompañarle durante el cuidado de un niño con LLA.",
    "paragraphs": [
      "Hola, soy Liz Gómez, enfermera profesional. Cuando el cáncer toca la vida de las personas que amamos, aparecen momentos de incertidumbre y dificultad. He aprendido que siempre es posible seguir adelante.",
      "En Sus Manos nació de esa experiencia y de la convicción de que el conocimiento, el cuidado y la esperanza pueden caminar juntos; y de que, aun cuando no tengamos todas las respuestas, podemos confiar plenamente en Dios, quien sostiene nuestras vidas y fortalece nuestros corazones en cada paso del camino.",
      "¡Bienvenidos a En Sus Manos! Esta herramienta tiene como propósito fortalecer los conocimientos en salud de los cuidadores de niños con leucemia linfoblástica aguda (LLA), porque la educación en salud representa una oportunidad para favorecer un mejor cuidado."
    ],
    "disclaimer": "Esta herramienta no reemplaza al equipo de salud. Ante dudas o cambios en la salud de su hijo, consulte a su médico tratante o acuda a urgencias si presenta signos de alarma."
  },
  "transplantNote": "Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante.",
  "carePlans": [
    {
      "title": "Mi plan de cuidados después del trasplante",
      "url": "recursos/plan-cuidados-trasplante.html",
      "description": "Temperatura de alarma, servicio de atención, medicamentos, controles y cuidados indicados."
    },
    {
      "title": "Mi plan si vivo lejos",
      "url": "recursos/plan-si-vivo-lejos.html",
      "description": "Centro tratante, urgencias cercanas, transporte, alojamiento y acciones acordadas con el equipo."
    },
    {
      "title": "Registro de cuidados después de cada ciclo",
      "url": "recursos/registro-cuidados-quimioterapia.html",
      "description": "Ciclo, temperatura, síntomas, alimentación, medicamentos prescritos y preguntas para el equipo."
    }
  ],
  "modules": [
    {
      "id": 1,
      "title": "Conociendo la LLA",
      "shortTitle": "Conociendo la LLA",
      "icon": "book",
      "tone": "blue",
      "summary": "Qué es la leucemia linfoblástica aguda, cómo se confirma y qué significa el diagnóstico.",
      "objective": "Comprender la enfermedad con palabras claras y reconocer el papel del cuidador durante el proceso.",
      "image": "assets/images/celulas-sangre.webp",
      "imageAlt": "Representación educativa de glóbulos rojos, glóbulos blancos y plaquetas.",
      "keyMessages": [
        "La LLA es el cáncer más frecuente en la infancia y afecta células que forman parte de los glóbulos blancos.",
        "No es contagiosa y no aparece por algo que hayan hecho los padres o cuidadores.",
        "Con diagnóstico oportuno y tratamiento adecuado, muchos niños logran superar la enfermedad.",
        "El tratamiento puede durar meses o años y requiere controles periódicos.",
        "El cuidador es una parte fundamental del equipo de cuidado."
      ],
      "sections": [
        {
          "title": "¿Qué ocurre en la sangre?",
          "text": "La médula ósea produce las células de la sangre. En la LLA se forman demasiadas células inmaduras llamadas linfoblastos, que desplazan a las células sanas.",
          "bullets": [
            "Menos glóbulos rojos puede causar cansancio o palidez.",
            "Menos plaquetas puede facilitar moretones o sangrado.",
            "Menos glóbulos blancos sanos puede aumentar el riesgo de infección."
          ]
        },
        {
          "title": "Señales que pueden llevar al diagnóstico",
          "text": "Los síntomas también pueden aparecer en otras enfermedades. Solo el equipo de salud puede establecer el diagnóstico.",
          "bullets": [
            "Fiebre o infecciones repetidas.",
            "Palidez, cansancio o poca energía.",
            "Moretones, petequias o sangrado.",
            "Dolor de huesos o articulaciones.",
            "Ganglios aumentados o abdomen inflamado."
          ]
        },
        {
          "title": "¿Cómo se confirma?",
          "text": "El equipo tratante puede solicitar los siguientes estudios según la valoración del niño y el criterio médico:",
          "note": "Pida que le expliquen cada examen y anote las dudas antes de la consulta.",
          "bullets": [
            "Hemograma, extendido de sangre periférica y reticulocitos en sangre.",
            "Punción y aspirado de médula ósea.",
            "Citogenética.",
            "Estudios moleculares.",
            "Biopsia de médula ósea y citometría de flujo en líquido cefalorraquídeo.",
            "Imágenes: radiografías, ecografía de abdomen total, ecografía testicular según la clínica, ecocardiograma y resonancia magnética de cerebro a criterio médico."
          ]
        },
        {
          "title": "Pronóstico y seguimiento",
          "text": "Cada niño es diferente. La respuesta al tratamiento, los resultados de los estudios y otros factores orientan al equipo tratante. Evite comparar procesos o cifras sin contexto clínico."
        }
      ],
      "do": [
        "Consultar fuentes recomendadas por el equipo de salud.",
        "Participar en las consultas y anotar preguntas.",
        "Comunicar cambios en el estado del niño.",
        "Explicar lo que ocurre con palabras apropiadas para su edad."
      ],
      "avoid": [
        "Confiar en cadenas o publicaciones sin fuente.",
        "Comparar el caso con el de otros niños.",
        "Ocultar síntomas por miedo o vergüenza.",
        "Interrumpir controles o tratamiento."
      ],
      "consult": [
        "Si no comprende el diagnóstico o una indicación.",
        "Si aparece un síntoma nuevo.",
        "Si necesita orientación para el cuidado en casa."
      ],
      "checklist": [
        "Anoté mis preguntas para la próxima consulta.",
        "Sé cómo contactar al equipo tratante.",
        "Puedo explicar con mis palabras qué es la LLA."
      ]
    },
    {
      "id": 2,
      "title": "Tratamiento de la LLA",
      "shortTitle": "Tratamiento de la LLA",
      "icon": "iv",
      "tone": "teal",
      "summary": "Objetivos, fases de la quimioterapia, procedimientos y controles durante el tratamiento.",
      "objective": "Conocer los principales momentos del tratamiento y saber qué preguntar al equipo de hemato-oncología.",
      "keyMessages": [
        "El plan de tratamiento se adapta al tipo de LLA y a la respuesta de cada niño.",
        "La quimioterapia se administra por etapas y puede usar distintas vías.",
        "Los controles permiten vigilar la respuesta y prevenir o tratar complicaciones.",
        "Nunca cambie el plan sin hablar con el equipo tratante."
      ],
      "sections": [
        {
          "title": "¿Qué busca el tratamiento?",
          "text": "Eliminar las células leucémicas, alcanzar la remisión, mantenerla y disminuir el riesgo de recaída. El equipo explicará el objetivo de cada fase."
        },
        {
          "title": "Fases que puede escuchar",
          "text": "Los nombres y la duración pueden variar según el protocolo.",
          "bullets": [
            "Inducción: busca alcanzar la remisión.",
            "Consolidación o intensificación: actúa sobre células que puedan quedar.",
            "Mantenimiento: ayuda a conservar la remisión durante un periodo prolongado."
          ]
        },
        {
          "title": "Procedimientos frecuentes",
          "text": "Pueden incluir punción lumbar, aspirado de médula ósea, transfusiones, estudios de laboratorio y cuidado de un catéter venoso central.",
          "note": "Antes de cada procedimiento pregunte para qué sirve, cómo prepararse y qué cuidados se necesitan después."
        },
        {
          "title": "Hospitalización y controles",
          "text": "Algunas etapas requieren hospitalización; otras permiten continuar parte del cuidado en casa. Cumpla las fechas de laboratorio y consulta indicadas."
        },
        {
          "title": "Conocer el trasplante",
          "text": "La indicación de un trasplante no es igual para todos los niños. El equipo de hematología-oncología determina si es apropiado considerando la enfermedad, la respuesta al tratamiento y las condiciones del niño.",
          "links": [
            {
              "label": "Explorar el módulo de trasplante",
              "url": "#/modulo/11"
            }
          ]
        }
      ],
      "do": [
        "Llevar una lista actualizada de medicamentos.",
        "Cumplir citas, exámenes y recomendaciones.",
        "Preguntar qué debe vigilar después de cada procedimiento.",
        "Guardar los teléfonos y rutas de atención."
      ],
      "avoid": [
        "Modificar fechas, dosis o procedimientos por cuenta propia.",
        "Retirarse de la institución sin comprender las indicaciones.",
        "Comparar protocolos entre pacientes."
      ],
      "consult": [
        "Si una cita o medicamento no está disponible.",
        "Si no entiende una fase o procedimiento.",
        "Ante cualquier cambio clínico o signo de alarma."
      ],
      "checklist": [
        "Conozco la próxima cita o control.",
        "Tengo el plan de tratamiento a la mano.",
        "Sé qué señales debo vigilar hoy."
      ]
    },
    {
      "id": 12,
      "icon": "iv",
      "tone": "blue",
      "summary": "Cómo prepararse, acompañar cada ciclo y reconocer los cambios que requieren atención.",
      "objective": "Prepararse para cada ciclo, acompañar al niño y reconocer los cambios que requieren atención.",
      "keyMessages": [
        "Siga las indicaciones individuales antes, durante y después de cada ciclo.",
        "Comunique los síntomas nuevos y todos los medicamentos que utiliza el niño.",
        "Ante fiebre o señales de alarma, siga de inmediato la ruta indicada por el equipo tratante."
      ],
      "sections": [
        {
          "id": "m12-s1",
          "title": "Antes de la quimioterapia: ¿cómo preparo a mi hijo?",
          "blocks": [
            {
              "type": "heading",
              "text": "¿Qué debo hacer?"
            },
            {
              "type": "list",
              "items": [
                "Confirmar la fecha, hora y lugar de administración.",
                "Seguir las instrucciones del equipo médico sobre ayuno, si el protocolo lo requiere. No todos los tratamientos necesitan ayuno.",
                "Informar si el niño presenta fiebre, tos, diarrea, vómitos, lesiones en la piel o cualquier síntoma nuevo.",
                "Comunicar todos los medicamentos que utiliza, incluidos vitaminas, suplementos y productos naturales.",
                "Llevar los medicamentos indicados, resultados de exámenes y documentos solicitados.",
                "Ofrecer una alimentación equilibrada y adecuada a su tolerancia.",
                "Mantener una hidratación apropiada, salvo que tenga restricción de líquidos.",
                "Explicar al niño, de acuerdo con su edad, qué procedimiento recibirá y quién lo acompañará.",
                "Preparar ropa cómoda y algún objeto que le proporcione tranquilidad."
              ]
            },
            {
              "type": "heading",
              "text": "Alimentación antes del tratamiento"
            },
            {
              "type": "paragraph",
              "text": "No existe una dieta especial universal para todos los niños que reciben quimioterapia. Se recomienda una alimentación variada, suficiente, segura y adaptada a las necesidades nutricionales, preferencias y tolerancia del niño."
            },
            {
              "type": "table",
              "rows": [
                [
                  "Grupo de alimentos",
                  "Ejemplos orientativos"
                ],
                [
                  "Proteínas",
                  "Pollo, pescado bien cocido, huevo bien cocido, carne y legumbres."
                ],
                [
                  "Frutas",
                  "Banano, papaya, mango y otras frutas correctamente lavadas y manipuladas."
                ],
                [
                  "Verduras",
                  "Zanahoria, ahuyama, espinaca y otras verduras adecuadamente preparadas."
                ],
                [
                  "Cereales y tubérculos",
                  "Arroz, avena, pasta, papa y arepa."
                ],
                [
                  "Lácteos",
                  "Leche y yogur pasteurizados."
                ]
              ],
              "caption": "Alimentación antes del tratamiento"
            },
            {
              "type": "paragraph",
              "text": "No se debe obligar al niño a comer si tiene náuseas o falta de apetito. Pueden ofrecerse porciones pequeñas y frecuentes, de acuerdo con la tolerancia y las indicaciones del equipo tratante."
            }
          ]
        },
        {
          "id": "m12-s2",
          "title": "Durante la quimioterapia: ¿qué debo saber?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Durante la administración pueden presentarse reacciones inmediatas o molestias relacionadas con los medicamentos. No todos los niños experimentan los mismos síntomas."
            },
            {
              "type": "heading",
              "text": "¿Qué debo hacer?"
            },
            {
              "type": "list",
              "items": [
                "Permanecer atento al niño y comunicar cualquier molestia al personal de enfermería.",
                "Informar inmediatamente si presenta picazón, ronchas, dificultad respiratoria, hinchazón, escalofríos o dolor.",
                "Evitar que el niño manipule las conexiones, catéteres o equipos de infusión.",
                "Seguir las indicaciones sobre alimentación e hidratación durante la administración.",
                "Favorecer actividades tranquilas: lectura, dibujos, música o juegos apropiados.",
                "No administrar alimentos, bebidas, medicamentos o remedios naturales sin consultar cuando existan restricciones específicas."
              ]
            },
            {
              "type": "heading",
              "text": "¿Qué NO debo hacer?"
            },
            {
              "type": "list",
              "items": [
                "No modificar ni suspender medicamentos por cuenta propia.",
                "No permitir que el niño manipule medicamentos de quimioterapia.",
                "No ocultar síntomas al personal de salud.",
                "No insistir en que coma cuando tiene náuseas.",
                "No aplicar cremas, remedios caseros ni productos sobre el catéter sin autorización."
              ]
            },
            {
              "type": "heading",
              "text": "Visitas durante la quimioterapia"
            },
            {
              "type": "paragraph",
              "text": "Pueden permitirse visitas cuando el hospital y el estado clínico del niño lo autoricen. Las personas con fiebre, tos, síntomas gripales, diarrea, lesiones infecciosas u otros síntomas contagiosos no deben visitarlo. Todas las personas deben realizar higiene de manos y respetar las normas institucionales sobre número de visitantes, aislamiento y uso de elementos de protección. Si existe neutropenia importante o aislamiento protector, el equipo tratante determinará las restricciones."
            }
          ]
        },
        {
          "id": "m12-s3",
          "title": "Después de la quimioterapia: cuidados en casa",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Que el niño haya terminado la infusión no significa que hayan terminado los riesgos asociados al tratamiento. Algunos efectos secundarios pueden aparecer horas o días después. Determinados medicamentos pueden disminuir las células sanguíneas y aumentar el riesgo de infecciones o sangrados."
            },
            {
              "type": "heading",
              "text": "Cuidados en casa"
            },
            {
              "type": "list",
              "items": [
                "Administrar los medicamentos en los horarios prescritos.",
                "Seguir el esquema de antieméticos indicado por el equipo tratante.",
                "Vigilar la temperatura siguiendo las instrucciones recibidas.",
                "Observar el estado general, la alimentación, la hidratación y la eliminación urinaria e intestinal.",
                "Realizar higiene de manos frecuente.",
                "Mantener limpios los espacios donde permanece el niño.",
                "Evitar el contacto con personas enfermas.",
                "Cumplir las recomendaciones de cuidado del catéter venoso central.",
                "Favorecer el descanso y permitir actividades según su energía.",
                "Asistir a los controles y realizar los hemogramas y exámenes programados."
              ]
            },
            {
              "type": "heading",
              "text": "¿Por qué aumenta el cuidado después de la quimioterapia?"
            },
            {
              "type": "paragraph",
              "text": "Algunos medicamentos afectan también células sanas, en especial las de la médula ósea. Esto puede ocasionar:"
            },
            {
              "type": "list",
              "items": [
                "Neutropenia: disminución de neutrófilos, con mayor riesgo de infección.",
                "Anemia: disminución de glóbulos rojos, que puede producir cansancio, palidez o debilidad.",
                "Trombocitopenia: disminución de plaquetas, con mayor riesgo de moretones y sangrado."
              ]
            },
            {
              "type": "paragraph",
              "text": "El momento de mayor vulnerabilidad no es igual para todos los niños. Depende del protocolo, los medicamentos, las dosis y la recuperación de la médula ósea."
            }
          ],
          "links": [
            {
              "label": "Cuidados en casa",
              "url": "#/modulo/3"
            },
            {
              "label": "Medicamentos",
              "url": "#/modulo/4"
            }
          ]
        },
        {
          "id": "m12-s4",
          "title": "Alimentación antes, durante y después de la quimioterapia",
          "blocks": [
            {
              "type": "paragraph",
              "text": "La alimentación debe contribuir a mantener el peso, favorecer el crecimiento, aportar energía y proteínas y ayudar al niño a tolerar el tratamiento. No existe una dieta única para todos los pacientes con LLA."
            },
            {
              "type": "table",
              "rows": [
                [
                  "Momento",
                  "Recomendaciones generales"
                ],
                [
                  "Antes",
                  "Alimentación variada, suficiente, segura y adaptada a la tolerancia del niño."
                ],
                [
                  "Durante",
                  "Seguir las indicaciones del hospital. Ofrecer alimentos permitidos y porciones pequeñas si es necesario."
                ],
                [
                  "Después",
                  "Mantener hidratación y alimentación suficiente. Ajustar la alimentación según náuseas, vómitos, diarrea, estreñimiento o lesiones bucales."
                ]
              ],
              "caption": "Alimentación antes, durante y después de la quimioterapia"
            },
            {
              "type": "heading",
              "text": "¿Puede comer dulces?"
            },
            {
              "type": "paragraph",
              "text": "Un niño que recibe quimioterapia no tiene que eliminar automáticamente todos los dulces. Pueden consumirse ocasionalmente si el niño los tolera, son seguros y no existen restricciones individuales. Los dulces no deben sustituir comidas ni desplazar alimentos nutritivos."
            },
            {
              "type": "list",
              "items": [
                "Caramelos duros: pueden ayudar con el mal sabor de boca en algunos niños, siempre que tengan edad suficiente para consumirlos sin riesgo de atragantamiento y no presenten lesiones bucales.",
                "Chocolate y postres: pueden consumirse ocasionalmente si son seguros, están bien conservados y se toleran.",
                "Golosinas y productos azucarados: no deben desplazar alimentos nutritivos.",
                "Dulces ácidos: pueden irritar la boca cuando existen mucositis o úlceras.",
                "Productos con alto contenido de azúcar: pueden empeorar la diarrea en algunos niños."
              ]
            },
            {
              "type": "paragraph",
              "text": "Eliminar completamente el azúcar no ha demostrado curar la leucemia ni detener su avance. Evite dietas restrictivas sin indicación del equipo tratante; los alimentos azucarados no deben desplazar una alimentación suficiente y nutritiva. [7]"
            },
            {
              "type": "heading",
              "text": "Alimentos que deben evitarse o manejarse con precaución"
            },
            {
              "type": "table",
              "rows": [
                [
                  "Alimento o práctica",
                  "Motivo de precaución"
                ],
                [
                  "Carnes, pescados y huevos crudos o poco cocidos",
                  "Riesgo de microorganismos transmitidos por alimentos."
                ],
                [
                  "Leche y quesos no pasteurizados",
                  "Riesgo de infecciones alimentarias."
                ],
                [
                  "Alimentos de procedencia o conservación desconocida",
                  "Riesgo de contaminación."
                ],
                [
                  "Frutas y verduras sin lavar",
                  "Pueden contener microorganismos y residuos."
                ],
                [
                  "Alimentos vencidos o mal refrigerados",
                  "Pueden favorecer el crecimiento bacteriano."
                ],
                [
                  "Comidas preparadas o manipuladas sin higiene adecuada",
                  "Mayor exposición a microorganismos."
                ]
              ],
              "caption": "Alimentos que deben evitarse o manejarse con precaución"
            },
            {
              "type": "heading",
              "text": "Reglas de inocuidad alimentaria"
            },
            {
              "type": "list",
              "items": [
                "Lavarse las manos antes de cocinar y antes de comer.",
                "Lavar cuidadosamente frutas y verduras con agua potable.",
                "Separar alimentos crudos de los cocidos.",
                "Cocinar adecuadamente carnes, huevos y pescados.",
                "Mantener la cadena de refrigeración.",
                "Utilizar agua potable.",
                "No ofrecer alimentos en mal estado ni de dudosa procedencia."
              ]
            },
            {
              "type": "paragraph",
              "text": "No imponga por su cuenta una dieta restrictiva para prevenir infecciones. Priorice la higiene, la manipulación segura y una alimentación suficiente. Las necesidades particulares del niño y las indicaciones de su equipo tratante orientan los ajustes. [2]"
            },
            {
              "type": "heading",
              "text": "Manejo alimentario según síntomas"
            },
            {
              "type": "table",
              "rows": [
                [
                  "Situación",
                  "Recomendaciones generales"
                ],
                [
                  "Náuseas y vómitos",
                  "Ofrecer porciones pequeñas, alimentos suaves, líquidos en sorbos y evitar olores intensos. Utilizar los antieméticos prescritos. Consultar si los vómitos persisten o no retiene líquidos."
                ],
                [
                  "Llagas en la boca (mucositis)",
                  "Ofrecer alimentos blandos, húmedos y frescos. Evitar cítricos, picantes, alimentos duros y muy salados. Comunicar dolor o dificultad para comer."
                ],
                [
                  "Diarrea",
                  "Mantener hidratación según indicación, registrar deposiciones y consultar si persiste o se acompaña de fiebre, dolor o signos de deshidratación."
                ],
                [
                  "Estreñimiento",
                  "Favorecer líquidos y fibra cuando estén permitidos, además de actividad suave. Consultar antes de utilizar laxantes o enemas."
                ]
              ],
              "caption": "Manejo alimentario según síntomas"
            },
            {
              "type": "paragraph",
              "text": "Se recomienda evaluación nutricional si el niño pierde peso, come muy poco, presenta dificultades persistentes para alimentarse o tiene síntomas gastrointestinales que afectan su ingesta."
            }
          ],
          "links": [
            {
              "label": "Alimentación segura",
              "url": "#/modulo/5"
            },
            {
              "label": "Prevención de infecciones",
              "url": "#/modulo/6"
            }
          ]
        },
        {
          "id": "m12-s5",
          "title": "Efectos secundarios: ¿qué puede pasar después de la quimioterapia?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Los efectos secundarios varían entre niños y entre ciclos. Reconozca los cambios y comuníquelos al equipo tratante. Un síntoma frecuente no debe considerarse automáticamente inofensivo ni manejarse sin consultar."
            },
            {
              "type": "table",
              "rows": [
                [
                  "Efecto",
                  "Cómo puede manifestarse",
                  "Qué puede hacer el cuidador"
                ],
                [
                  "Náuseas y vómitos",
                  "Malestar, rechazo de alimentos y vómitos.",
                  "Administrar antieméticos prescritos, ofrecer pequeñas porciones y vigilar hidratación."
                ],
                [
                  "Fatiga",
                  "Cansancio, sueño y menor actividad.",
                  "Permitir descanso y actividades según tolerancia; informar si es intenso o súbito."
                ],
                [
                  "Mucositis",
                  "Llagas, dolor y dificultad para comer.",
                  "Higiene oral suave y alimentos blandos; comunicarlo al equipo."
                ],
                [
                  "Caída del cabello",
                  "Pérdida parcial o total del cabello.",
                  "Acompañar emocionalmente y proteger el cuero cabelludo."
                ],
                [
                  "Diarrea",
                  "Deposiciones frecuentes y líquidas.",
                  "Registrar frecuencia y características; vigilar deshidratación."
                ],
                [
                  "Estreñimiento",
                  "Evacuaciones difíciles o poco frecuentes.",
                  "Vigilar deposiciones y consultar sobre el manejo."
                ],
                [
                  "Anemia",
                  "Palidez, cansancio y debilidad.",
                  "Informar síntomas y asistir a controles."
                ],
                [
                  "Neutropenia",
                  "Puede no producir síntomas inicialmente.",
                  "Aplicar medidas de prevención de infecciones y actuar ante fiebre."
                ],
                [
                  "Trombocitopenia",
                  "Moretones, petequias o sangrado.",
                  "Evitar traumatismos y comunicar cualquier sangrado."
                ],
                [
                  "Neuropatía",
                  "Hormigueo, dolor o debilidad en manos y pies.",
                  "Informar al equipo de hemato-oncología."
                ]
              ],
              "caption": "Efectos secundarios: ¿qué puede pasar después de la quimioterapia?"
            },
            {
              "type": "heading",
              "text": "Síntomas frecuentes y señales que requieren atención"
            },
            {
              "type": "list",
              "items": [
                "Puede presentarse cansancio después de la quimioterapia; cansancio extremo acompañado de dificultad respiratoria requiere atención.",
                "Pueden aparecer náuseas; vómitos persistentes que impiden retener líquidos requieren valoración.",
                "Puede disminuir el apetito; no debe ignorarse la incapacidad para beber o los signos de deshidratación.",
                "Puede disminuir el recuento de células sanguíneas; la fiebre en un niño en tratamiento oncológico es una urgencia potencial."
              ]
            }
          ],
          "links": [
            {
              "label": "Efectos secundarios",
              "url": "#/modulo/7"
            }
          ]
        },
        {
          "id": "m12-s6",
          "title": "Cambios de humor y comportamiento",
          "blocks": [
            {
              "type": "paragraph",
              "text": "El tratamiento puede afectar no solamente el cuerpo, sino también el bienestar emocional y el comportamiento del niño. Los cambios pueden relacionarse con estrés, dolor, cansancio, hospitalización o medicamentos."
            },
            {
              "type": "heading",
              "text": "¿Qué cambios puede presentar?"
            },
            {
              "type": "list",
              "items": [
                "Irritabilidad o enojo.",
                "Llanto frecuente.",
                "Tristeza o aislamiento.",
                "Miedo a los procedimientos.",
                "Ansiedad antes de asistir al hospital.",
                "Alteraciones del sueño.",
                "Mayor necesidad de compañía.",
                "Cambios en el apetito.",
                "Dificultad para concentrarse.",
                "Retrocesos conductuales, como volver a presentar comportamientos de etapas anteriores."
              ]
            },
            {
              "type": "paragraph",
              "text": "Los corticosteroides utilizados en determinados protocolos de LLA pueden producir irritabilidad, alteraciones del sueño, aumento del apetito y cambios de comportamiento. La intensidad y duración varían entre pacientes. No modifique estos medicamentos por su cuenta. [8]"
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo ayudarlo?"
            },
            {
              "type": "list",
              "items": [
                "Escucharlo sin juzgarlo.",
                "Permitirle expresar sus emociones.",
                "Explicarle los procedimientos con palabras apropiadas para su edad.",
                "Mantener rutinas familiares cuando sea posible.",
                "Favorecer el juego, la lectura y las actividades recreativas.",
                "No castigarlo por sus cambios de humor.",
                "Solicitar acompañamiento psicológico cuando los cambios sean intensos o persistentes."
              ]
            },
            {
              "type": "heading",
              "text": "¿Cuándo debo informar al médico?"
            },
            {
              "type": "paragraph",
              "text": "Cuando aparezcan cambios bruscos de comportamiento, confusión, desorientación, alucinaciones, somnolencia inusual, tristeza persistente o conductas que pongan en riesgo al niño. Algunos cambios pueden ser manifestaciones de toxicidad farmacológica o alteraciones metabólicas y necesitan evaluación."
            }
          ]
        },
        {
          "id": "m12-s7",
          "title": "Signos de alarma después de la quimioterapia",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Ante fiebre o señales de alarma, siga de inmediato la ruta indicada por el equipo tratante. Si el niño se deteriora rápidamente, no espere una respuesta telefónica para buscar atención de urgencias."
            },
            {
              "type": "heading",
              "text": "Consulte inmediatamente con el equipo tratante"
            },
            {
              "type": "list",
              "items": [
                "Fiebre o temperatura que alcance el límite indicado por el equipo tratante. Una temperatura de 38 °C o más requiere contacto y atención inmediatos; siga también cualquier umbral más bajo que le hayan indicado y la forma de medición acordada. No espere a alcanzar esa cifra si el niño está muy decaído o presenta otras señales de alarma. [1,3]",
                "Escalofríos o temblores, incluso sin fiebre.",
                "Decaimiento importante o aspecto de niño muy enfermo.",
                "Dificultad para respirar.",
                "Vómitos persistentes o incapacidad para retener líquidos.",
                "Diarrea abundante o signos de deshidratación.",
                "Dolor intenso o abdomen muy distendido.",
                "Sangrado de encías, nariz, orina o deposiciones.",
                "Petequias o aparición de moretones nuevos sin explicación.",
                "Enrojecimiento, dolor, secreción o inflamación en el sitio del catéter."
              ]
            },
            {
              "type": "heading",
              "text": "Trasládese a urgencias inmediatamente"
            },
            {
              "type": "list",
              "items": [
                "Dificultad respiratoria importante.",
                "Pérdida del conocimiento o convulsiones.",
                "Alteración del estado de conciencia o dificultad para despertar.",
                "Sangrado abundante o que no se detiene.",
                "Debilidad extrema, piel fría o signos de colapso circulatorio.",
                "Deterioro rápido del estado general."
              ]
            },
            {
              "type": "paragraph",
              "text": "Si existe dificultad respiratoria grave, convulsiones o pérdida de conciencia, solicite el servicio de emergencias."
            },
            {
              "type": "heading",
              "text": "¿Qué NO debo hacer cuando mi hijo tiene fiebre?"
            },
            {
              "type": "list",
              "items": [
                "No esperar hasta el día siguiente.",
                "No esperar a que la fiebre desaparezca por sí sola.",
                "No administrar acetaminofén, ibuprofeno o aspirina sin autorización del equipo tratante.",
                "No utilizar termómetros rectales.",
                "No automedicar con antibióticos.",
                "No retrasar la consulta intentando controlar la fiebre en casa."
              ]
            }
          ],
          "alwaysVisible": true,
          "links": [
            {
              "label": "Signos de alarma",
              "url": "#/modulo/8"
            }
          ]
        },
        {
          "id": "m12-s8",
          "title": "Preguntas frecuentes de los cuidadores",
          "blocks": [
            {
              "type": "table",
              "rows": [
                [
                  "Pregunta",
                  "Respuesta"
                ],
                [
                  "¿Mi hijo puede recibir visitas?",
                  "Sí, si su condición clínica y las normas hospitalarias lo permiten. Los visitantes enfermos deben evitar el contacto."
                ],
                [
                  "¿Puede comer dulces?",
                  "Sí, ocasionalmente, si los tolera y no existen restricciones particulares."
                ],
                [
                  "¿Puede jugar después de la quimioterapia?",
                  "Sí, según su energía y condición clínica."
                ],
                [
                  "¿Puede salir de casa?",
                  "Depende del estado clínico, los recuentos sanguíneos y las recomendaciones del equipo."
                ],
                [
                  "¿Puede asistir al colegio?",
                  "Puede ser posible, pero debe acordarse con el equipo tratante y la institución educativa."
                ],
                [
                  "¿Puede comer frutas?",
                  "Sí, con adecuada higiene, manipulación y conservación, salvo indicación individual diferente."
                ],
                [
                  "¿Puede tener mascotas?",
                  "En muchos casos sí, aplicando medidas de higiene y evitando contacto con excrementos, mordeduras o arañazos."
                ],
                [
                  "¿Debe comer aunque no tenga hambre?",
                  "No debe forzarse. Es preferible ofrecer pequeñas porciones y consultar si la falta de apetito persiste."
                ],
                [
                  "¿Todos los ciclos producen los mismos efectos?",
                  "No. Depende de los medicamentos, las dosis y la respuesta individual."
                ],
                [
                  "¿Puedo darle vitaminas o productos naturales?",
                  "No sin autorización del oncólogo, porque algunos pueden interferir con el tratamiento."
                ]
              ],
              "caption": "Preguntas frecuentes de los cuidadores"
            }
          ]
        },
        {
          "id": "m12-s9",
          "title": "Registro de cuidados después de cada ciclo",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Imprima el registro y complételo a mano para comunicar al equipo de salud lo que ha observado después de cada ciclo. Anote la información tal como ocurrió. Este registro no diagnostica, no calcula dosis y no sustituye la consulta."
            },
            {
              "type": "table",
              "rows": [
                [
                  "Dato",
                  "Información que puede registrar el cuidador"
                ],
                [
                  "Ciclo de quimioterapia",
                  "Número o nombre del ciclo y fecha de administración."
                ],
                [
                  "Temperatura",
                  "Valor, hora y método de medición, según las indicaciones del equipo."
                ],
                [
                  "Síntomas",
                  "Fiebre, náuseas, vómitos, diarrea, estreñimiento, dolor, mucositis, cansancio, sangrado, cambios de humor o falta de apetito."
                ],
                [
                  "Alimentación e hidratación",
                  "Adecuada, disminuida, muy escasa o incapacidad para tolerar alimentos/líquidos."
                ],
                [
                  "Medicamentos",
                  "Medicamentos prescritos y observaciones sobre dosis omitidas o dificultades; no modificar el esquema."
                ],
                [
                  "Observaciones",
                  "Inicio, duración y evolución de síntomas; preguntas para el equipo tratante."
                ]
              ],
              "caption": "Registro de cuidados después de cada ciclo"
            },
            {
              "type": "paragraph",
              "text": "Si el niño presenta fiebre o señales de alarma, no espere a completar el registro. Siga de inmediato la ruta de atención indicada por su equipo tratante."
            }
          ],
          "links": [
            {
              "label": "Imprimir registro de cuidados",
              "url": "recursos/registro-cuidados-quimioterapia.html"
            }
          ]
        }
      ],
      "introduction": [],
      "jumpLinks": [
        {
          "label": "Antes",
          "sectionId": "m12-s1"
        },
        {
          "label": "Durante",
          "sectionId": "m12-s2"
        },
        {
          "label": "Después",
          "sectionId": "m12-s3"
        },
        {
          "label": "Signos de alarma",
          "sectionId": "m12-s7"
        },
        {
          "label": "Registro de cuidados",
          "sectionId": "m12-s9"
        }
      ],
      "urgentMessage": "Ante fiebre o señales de alarma, siga de inmediato la ruta indicada por el equipo tratante. Si el niño se deteriora rápidamente, no espere una respuesta telefónica para buscar atención de urgencias.",
      "do": [
        "Seguir las indicaciones del equipo tratante para cada ciclo.",
        "Observar y comunicar cambios en la salud del niño.",
        "Anotar lo observado y las preguntas para el equipo."
      ],
      "avoid": [
        "Modificar o suspender medicamentos por cuenta propia.",
        "Ocultar síntomas al personal de salud.",
        "Retrasar la consulta intentando controlar la fiebre en casa."
      ],
      "consult": [
        "Fiebre o temperatura que alcance el límite indicado por el equipo tratante.",
        "Dificultad para respirar, sangrado abundante o deterioro rápido del estado general.",
        "Vómitos persistentes, incapacidad para retener líquidos o signos de deshidratación."
      ],
      "checklist": [
        "Confirmé las indicaciones del equipo para este ciclo.",
        "Reconozco las señales que requieren atención inmediata.",
        "Tengo disponible el registro y mis preguntas para el equipo."
      ],
      "sources": [
        {
          "number": 1,
          "label": "Fiebre y neutropenia",
          "citation": "Lehrnbecher T, et al. Guideline for the Management of Fever and Neutropenia in Pediatric Patients With Cancer and Hematopoietic Cell Transplantation Recipients: 2023 Update. J Clin Oncol. 2023;41(9):1774–1785. doi:10.1200/JCO.22.02224.",
          "url": "https://doi.org/10.1200/JCO.22.02224"
        },
        {
          "number": 2,
          "label": "Alimentación segura",
          "citation": "Phillips R, et al. Use of food restrictions to prevent infections in paediatric patients with cancer and haematopoietic cell transplantation recipients: a systematic review and clinical practice guideline. EClinicalMedicine. 2025;81:103093. doi:10.1016/j.eclinm.2025.103093.",
          "url": "https://doi.org/10.1016/j.eclinm.2025.103093"
        },
        {
          "number": 3,
          "label": "Fiebre y signos de infección",
          "citation": "Together by St. Jude. Fiebre y signos de infección.",
          "url": "https://together.stjude.org/es-us/treatment-tests-procedures/symptoms-side-effects/fever-and-signs-of-infection.html"
        },
        {
          "number": 7,
          "label": "Azúcar y cáncer",
          "citation": "National Cancer Institute. Common Cancer Myths and Misconceptions.",
          "url": "https://www.cancer.gov/about-cancer/causes-prevention/risk/myths"
        },
        {
          "number": 8,
          "label": "Medicamentos y comportamiento",
          "citation": "Together by St. Jude. Steroid Medicines and Behavior.",
          "url": "https://together.stjude.org/en-us/medical-care/medication-management/steroid-medicines-and-behavior.html"
        }
      ],
      "shortTitle": "Cuidados en quimioterapia",
      "title": "Acompañando durante la quimioterapia"
    },
    {
      "id": 7,
      "title": "Conociendo y manejando los efectos secundarios",
      "shortTitle": "Efectos secundarios",
      "icon": "symptom",
      "tone": "coral",
      "summary": "Náuseas, cambios intestinales, lesiones en boca, dolor, cansancio y sangrado.",
      "objective": "Reconocer efectos frecuentes, aplicar medidas indicadas y saber cuándo pedir ayuda.",
      "keyMessages": [
        "Algunos efectos son esperados y pueden aliviarse con las medidas del equipo.",
        "La intensidad y duración varían en cada niño.",
        "Registrar los cambios ayuda a comunicarlos con claridad.",
        "Un síntoma frecuente también puede volverse urgente si es intenso o persistente."
      ],
      "sections": [
        {
          "title": "Náuseas y vómito",
          "text": "Use solo los medicamentos indicados. Ofrezca líquidos y alimentos en pequeñas cantidades si el equipo lo permite. Registre frecuencia y tolerancia."
        },
        {
          "title": "Diarrea o estreñimiento",
          "text": "Observe número y características de las deposiciones, dolor, hidratación y orina. No use laxantes ni antidiarreicos sin autorización."
        },
        {
          "title": "Boca y mucosas",
          "text": "Mantenga la higiene indicada y revise si hay enrojecimiento, placas, úlceras o dificultad para tragar. Evite enjuagues caseros no aprobados."
        },
        {
          "title": "Dolor, fatiga, caída del cabello y sangrado",
          "text": "Permita descanso, trate el dolor solo con el plan indicado y observe moretones o sangrado. La caída del cabello puede ser temporal; acompañe al niño con honestidad y afecto."
        }
      ],
      "do": [
        "Ofrecer líquidos y porciones pequeñas según tolerancia.",
        "Mantener la higiene oral indicada.",
        "Registrar síntomas y medicamentos usados.",
        "Seguir las recomendaciones del equipo."
      ],
      "avoid": [
        "Automedicar o usar remedios sin aprobación.",
        "Suspender medicamentos.",
        "Forzar la alimentación.",
        "Minimizar un síntoma que empeora."
      ],
      "consult": [
        "Vómito persistente o incapacidad para tolerar líquidos.",
        "Diarrea intensa, dolor fuerte o lesiones graves en boca.",
        "Sangrado, moretones extensos o somnolencia marcada."
      ],
      "checklist": [
        "Registré los síntomas y su duración.",
        "El niño tolera líquidos y está orinando.",
        "Sé cuáles cambios requieren una llamada o urgencias."
      ]
    },
    {
      "id": 3,
      "title": "Cuidados en casa",
      "shortTitle": "Cuidados en casa",
      "icon": "homeHeart",
      "tone": "blue",
      "summary": "Higiene, descanso, actividad, visitas, escuela y protección cotidiana.",
      "objective": "Organizar un entorno seguro sin aislar innecesariamente al niño ni interrumpir su vida familiar.",
      "keyMessages": [
        "La rutina diaria puede adaptarse a la energía y las indicaciones del equipo.",
        "La higiene de manos y el cuidado de la boca y la piel ayudan a prevenir complicaciones.",
        "El aislamiento protector no significa encierro total.",
        "Las recomendaciones pueden cambiar según las defensas y la fase del tratamiento."
      ],
      "sections": [
        {
          "title": "Higiene diaria",
          "text": "Mantenga baño regular, ropa limpia y uñas cortas. Use los productos indicados y observe piel, boca y zona del catéter.",
          "bullets": [
            "Cepillo de dientes suave si el equipo lo autoriza.",
            "No comparta utensilios de higiene.",
            "Avise si hay heridas, enrojecimiento, dolor o secreción."
          ]
        },
        {
          "title": "Descanso y actividad",
          "text": "Permita descansos y actividad suave según tolerancia. El niño no debe esforzarse si está mareado, muy cansado o con dolor. Consulte qué actividades son seguras."
        },
        {
          "title": "Visitas, escuela y salidas",
          "text": "Evite el contacto con personas enfermas. La asistencia a la escuela, los viajes y los lugares concurridos deben acordarse con el equipo tratante según el momento clínico."
        },
        {
          "title": "Entorno protector",
          "text": "Mantenga espacios limpios y ventilados, lave frutas y verduras, higienice objetos de uso frecuente y siga las indicaciones sobre mascotas."
        }
      ],
      "do": [
        "Lavarse las manos al llegar y antes de cuidar al niño.",
        "Ventilar y limpiar las superficies de contacto frecuente.",
        "Mantener una rutina flexible de sueño, juego y estudio.",
        "Consultar antes de viajes, vacunas o actividades nuevas."
      ],
      "avoid": [
        "Recibir visitas con síntomas respiratorios o digestivos.",
        "Usar productos irritantes sin orientación.",
        "Forzar la actividad cuando hay agotamiento.",
        "Convertir el cuidado protector en aislamiento total."
      ],
      "consult": [
        "Si aparecen lesiones en piel o boca.",
        "Si el niño deja de comer, beber u orinar con normalidad.",
        "Si hay dudas sobre escuela, mascotas, viajes o actividad física."
      ],
      "checklist": [
        "La casa está ventilada y las superficies limpias.",
        "Las visitas saben que no deben venir si están enfermas.",
        "Tengo a mano los elementos de higiene indicados."
      ]
    },
    {
      "id": 4,
      "title": "Administración segura de medicamentos",
      "shortTitle": "Medicamentos",
      "icon": "medicine",
      "tone": "teal",
      "summary": "Administración segura, horarios, almacenamiento y qué hacer ante dudas.",
      "objective": "Reducir errores en casa y fortalecer la adherencia al tratamiento indicado.",
      "keyMessages": [
        "Administre cada medicamento en la dosis, vía y horario formulados.",
        "No cambie ni suspenda un medicamento sin autorización.",
        "Use un registro diario para evitar olvidos o duplicaciones.",
        "Conserve los medicamentos según las instrucciones de la etiqueta y del equipo."
      ],
      "sections": [
        {
          "title": "Antes de administrar",
          "text": "Confirme el nombre del niño, el medicamento, la dosis, la vía y la hora. Si algo no coincide con la fórmula, deténgase y consulte."
        },
        {
          "title": "Medición y registro",
          "text": "Use jeringas o dispositivos de medición, no cucharas caseras. Registre inmediatamente cada dosis y mantenga un listado actualizado."
        },
        {
          "title": "Almacenamiento",
          "text": "Mantenga los medicamentos en su empaque, fuera del alcance de niños y separados de alimentos cuando así se indique. Respete refrigeración, luz y fecha de vencimiento."
        },
        {
          "title": "Si hay vómito u olvido",
          "text": "No repita ni duplique la dosis por su cuenta. Llame al equipo para recibir una indicación específica según el medicamento y el tiempo transcurrido.",
          "note": "Tenga a mano el nombre del medicamento, la dosis y la hora en que ocurrió el evento."
        }
      ],
      "do": [
        "Seguir la fórmula y usar dispositivos de medición.",
        "Registrar dosis y horarios.",
        "Guardar los medicamentos de forma segura.",
        "Llevar la lista a cada consulta."
      ],
      "avoid": [
        "Duplicar una dosis olvidada.",
        "Triturar o abrir cápsulas sin autorización.",
        "Compartir medicamentos o automedicar.",
        "Suspenderlos porque el niño parece sentirse mejor."
      ],
      "consult": [
        "Si vomita poco después de una dosis.",
        "Si olvidó o administró una dosis incorrecta.",
        "Si aparece una reacción inesperada.",
        "Si tiene dificultad para conseguir o administrar el medicamento."
      ],
      "checklist": [
        "Revisé medicamento, dosis, vía y horario.",
        "Registré las dosis de hoy.",
        "Los medicamentos están almacenados de forma segura."
      ]
    },
    {
      "id": 5,
      "title": "Alimentación segura",
      "shortTitle": "Alimentación segura",
      "icon": "food",
      "tone": "green",
      "summary": "Higiene de alimentos, hidratación y estrategias cuando cambia el apetito.",
      "objective": "Ofrecer alimentos y líquidos de manera segura durante el tratamiento.",
      "image": "assets/images/alimentacion-segura.webp",
      "imageAlt": "Mesa limpia con alimentos lavados y bien cocidos, agua segura y utensilios separados.",
      "keyMessages": [
        "La seguridad de los alimentos es tan importante como su variedad.",
        "Las necesidades pueden cambiar durante el tratamiento.",
        "Ofrezca líquidos y porciones pequeñas según tolerancia.",
        "Siga siempre las restricciones específicas del equipo o nutricionista."
      ],
      "sections": [
        {
          "title": "Preparación segura",
          "text": "Lávese las manos, limpie superficies y use agua segura. Separe alimentos crudos de los cocidos y cocine completamente carnes y huevos."
        },
        {
          "title": "Frutas, verduras y conservación",
          "text": "Lave los productos según las indicaciones de su institución. Refrigere pronto lo que corresponda, respete fechas de vencimiento y deseche alimentos con olor o aspecto extraño."
        },
        {
          "title": "Poco apetito",
          "text": "Ofrezca porciones pequeñas varias veces al día, sin presionar. Aproveche los momentos de mayor apetito y registre cambios importantes."
        },
        {
          "title": "Hidratación y suplementos",
          "text": "Ofrezca los líquidos recomendados. No use suplementos, productos naturales o vitaminas sin aprobación del equipo tratante."
        }
      ],
      "do": [
        "Lavar manos, alimentos y superficies.",
        "Separar crudos y cocidos.",
        "Refrigerar y cocinar de forma adecuada.",
        "Consultar si hay pérdida de peso o dificultad para beber."
      ],
      "avoid": [
        "Alimentos crudos o poco cocidos.",
        "Comida vencida o mal refrigerada.",
        "Forzar al niño a comer.",
        "Suplementos o remedios sin autorización."
      ],
      "consult": [
        "Si no tolera líquidos.",
        "Si hay vómito o diarrea persistentes.",
        "Si orina mucho menos o muestra signos de deshidratación.",
        "Si el apetito disminuye durante varios días."
      ],
      "checklist": [
        "Separé alimentos crudos y cocidos.",
        "El agua y los alimentos se prepararon de forma segura.",
        "Vigilé cuánto bebió y cómo toleró la comida."
      ]
    },
    {
      "id": 6,
      "title": "Prevención de infecciones",
      "shortTitle": "Prevención de infecciones",
      "icon": "shield",
      "tone": "teal",
      "summary": "Lavado de manos, higiene del entorno, contactos, vacunas y fiebre.",
      "objective": "Aplicar medidas cotidianas que reducen la exposición a infecciones y actuar oportunamente ante fiebre.",
      "image": "assets/images/lavado-manos.webp",
      "imageAlt": "Secuencia educativa de manos que se mojan, reciben jabón, se frotan y se enjuagan.",
      "keyMessages": [
        "La quimioterapia puede disminuir temporalmente las defensas.",
        "El lavado de manos es una de las medidas más efectivas.",
        "Evite el contacto con personas enfermas y mantenga limpio el entorno.",
        "La fiebre puede ser la primera señal de una infección."
      ],
      "sections": [
        {
          "title": "Lavado de manos",
          "text": "Lávese con agua y jabón antes de preparar alimentos o medicamentos, después de ir al baño, al volver de la calle y antes de tocar el catéter. Frote palmas, dorsos, dedos, uñas y muñecas; enjuague y seque bien."
        },
        {
          "title": "Casa, juguetes y mascotas",
          "text": "Limpie superficies y juguetes de uso frecuente. Evite que el niño limpie excrementos o areneros; consulte las recomendaciones específicas sobre mascotas."
        },
        {
          "title": "Un espacio seguro para jugar",
          "text": "Antes de que el niño juegue, prepare un espacio limpio, seguro y apropiado para su edad.",
          "bullets": [
            "Mantenga el área libre de polvo y suciedad visible.",
            "Limpie regularmente las superficies donde el niño juega.",
            "Evite que juegue directamente sobre superficies contaminadas con tierra.",
            "Evite el contacto con tierra de jardín, materas o actividades de excavación durante períodos de inmunosupresión importante.",
            "Mantenga los productos de limpieza fuera del alcance del niño."
          ],
          "note": "Gatear no significa que el niño deba permanecer aislado. Siga las recomendaciones específicas del equipo de salud según el estado de defensas del niño.",
          "image": "assets/images/espacio-seguro-jugar.webp",
          "imageAlt": "Un niño pequeño juega con piezas grandes junto a una cuidadora en un espacio doméstico limpio y ordenado."
        },
        {
          "title": "Cuida sus juguetes",
          "text": "Antes, durante y después del juego, tenga en cuenta estas indicaciones:",
          "bullets": [
            "Antes de jugar: lávese las manos.",
            "Durante el juego: evite compartir juguetes que el niño lleve a la boca.",
            "Después de jugar: limpie los juguetes según el material y las indicaciones del fabricante.",
            "Peluches: lavar regularmente y siempre que estén sucios.",
            "Plástico: preferir juguetes lavables y fáciles de limpiar.",
            "Baño: evitar juguetes que acumulen agua y no puedan secarse completamente."
          ],
          "image": "assets/images/cuidado-juguetes.webp",
          "imageAlt": "Una cuidadora limpia un camión de juguete; otros juguetes están secos y un peluche permanece en una repisa separada."
        },
        {
          "title": "Personas enfermas y multitudes",
          "text": "Pida a las visitas que avisen si tienen fiebre, tos, diarrea u otros síntomas. Evite contactos y lugares concurridos cuando el equipo lo indique."
        },
        {
          "title": "Mascarillas y vacunas",
          "text": "Use mascarilla y programe vacunas únicamente según las indicaciones del equipo tratante. No todas las vacunas son apropiadas durante todas las fases del tratamiento.",
          "note": "Mida la temperatura con un termómetro y conozca la ruta de urgencias de su institución."
        }
      ],
      "do": [
        "Lavarse las manos con frecuencia.",
        "Mantener uñas cortas y limpias.",
        "Higienizar juguetes y superficies.",
        "Preparar alimentos de forma segura y vigilar la temperatura."
      ],
      "avoid": [
        "Contacto cercano con personas enfermas.",
        "Alimentos crudos o poco cocidos.",
        "Vacunas o medicamentos sin autorización.",
        "Ignorar o intentar ocultar la fiebre."
      ],
      "consult": [
        "Temperatura de 38 °C o más: atención inmediata.",
        "Escalofríos, dificultad para respirar o tos persistente.",
        "Enrojecimiento, dolor o secreción en una herida o catéter."
      ],
      "checklist": [
        "Todas las personas se lavaron las manos.",
        "El termómetro funciona y está disponible.",
        "Conozco la ruta que debo seguir si hay fiebre."
      ],
      "consultNote": "Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante."
    },
    {
      "id": 8,
      "title": "Signos de alarma y de regreso al servicio de urgencias",
      "shortTitle": "Signos de alarma",
      "icon": "alert",
      "tone": "coral",
      "summary": "Reconozca las señales de alarma y planifique cómo acceder a urgencias, especialmente si vive lejos.",
      "objective": "Tomar decisiones oportunas ante señales que pueden indicar una complicación.",
      "keyMessages": [
        "La fiebre durante la quimioterapia se considera una urgencia.",
        "Algunos síntomas requieren atención inmediata, aunque parezcan iniciar de forma leve.",
        "Actuar rápido puede prevenir complicaciones.",
        "Ante la duda, contacte al equipo tratante."
      ],
      "sections": [
        {
          "title": "Fiebre",
          "text": "Una temperatura de 38 °C o más requiere atención inmediata. Siga la ruta definida por su institución.",
          "note": "No dé medicamentos para ocultar la fiebre ni antibióticos sin indicación. No espere a que la temperatura baje sola. Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante."
        },
        {
          "title": "Respiración o estado neurológico",
          "text": "Dificultad para respirar, convulsiones, desmayo, confusión o somnolencia excesiva requieren atención inmediata."
        },
        {
          "title": "Sangrado y piel",
          "text": "Acuda si hay sangrado que no se detiene, petequias extensas o moretones que aparecen de forma llamativa."
        },
        {
          "title": "Dolor, vómito y orina",
          "text": "Busque ayuda inmediata ante dolor intenso que no mejora, vómito persistente con incapacidad para tolerar líquidos, disminución marcada de la orina o signos de deshidratación."
        },
        {
          "title": "¿Vives lejos del hospital o clínica donde atienden a tu hijo?",
          "text": "Cuando un niño con leucemia recibe tratamientos que pueden disminuir sus defensas, es importante planificar con anticipación cómo llegará a un servicio de atención en caso de presentar una urgencia.",
          "paragraphs": [
            "Si la familia vive a varias horas del centro donde recibe el tratamiento, converse con el equipo de hematología-oncología sobre la posibilidad de permanecer temporalmente cerca del hospital durante los períodos de mayor riesgo, cuando así lo consideren necesario.",
            "Ante algunas complicaciones, como fiebre durante períodos de defensas bajas, el niño puede necesitar una valoración médica urgente y tratamiento oportuno. Recorrer largas distancias antes de recibir atención puede representar una dificultad logística."
          ],
          "image": "assets/images/plan-vivo-lejos.webp",
          "imageAlt": "Una cuidadora y un niño preparan una bolsa junto a una carpeta; al fondo se ven un vehículo y un edificio sanitario genérico."
        },
        {
          "title": "Planifique con anticipación",
          "text": "Antes de regresar a casa, pregunte al equipo de salud:",
          "bullets": [
            "¿Durante qué períodos debemos permanecer cerca del hospital?",
            "¿A partir de qué síntomas debemos acudir inmediatamente?",
            "¿A qué servicio de urgencias debemos dirigirnos?",
            "¿Podemos acudir a un hospital cercano si estamos lejos del centro tratante?",
            "¿Qué debemos hacer si estamos a varias horas de distancia?",
            "¿A qué número podemos llamar durante una emergencia?",
            "¿Existe algún programa de alojamiento temporal para familias que viven lejos?"
          ]
        },
        {
          "title": "Si vivimos muy lejos",
          "text": "No tome la decisión de mudarse permanentemente por cuenta propia. Hable con el equipo tratante para valorar alternativas como:",
          "bullets": [
            "Alojamiento temporal cerca del centro de atención.",
            "Programas de apoyo para familias.",
            "Hospital o servicio de urgencias cercano para situaciones específicas.",
            "Comunicación directa con el equipo tratante.",
            "Plan de transporte para situaciones de emergencia."
          ],
          "note": "La cercanía al centro de atención debe planificarse de acuerdo con la condición del niño, la etapa del tratamiento, el riesgo clínico y las indicaciones de su equipo de salud."
        },
        {
          "title": "Ante una urgencia, siga el plan acordado",
          "text": "Ante un signo de alarma, no retrase la atención intentando realizar un viaje prolongado hasta el hospital tratante.",
          "note": "Siga el plan de emergencia establecido por el equipo de hematología-oncología. Si el niño presenta una situación que requiere atención inmediata, solicite atención de urgencias según las instrucciones recibidas."
        },
        {
          "title": "Mi plan si vivo lejos",
          "text": "Imprima la hoja y complétela a mano junto con el equipo de salud. Incluye el centro tratante, los servicios cercanos, el transporte y las indicaciones para actuar.",
          "links": [
            {
              "label": "Abrir mi plan si vivo lejos",
              "url": "recursos/plan-si-vivo-lejos.html"
            }
          ]
        }
      ],
      "do": [
        "Medir y anotar la temperatura.",
        "Mantener la calma e iniciar la ruta indicada.",
        "Llevar resumen clínico y lista de medicamentos.",
        "Avisar al equipo mientras se dirige a urgencias si así se lo indicaron."
      ],
      "avoid": [
        "Dar antibióticos no formulados.",
        "Esperar varias horas para ver si mejora.",
        "Enmascarar la fiebre sin orientación.",
        "Retrasar el traslado por trámites o pertenencias."
      ],
      "consult": [
        "38 °C o más.",
        "Dificultad para respirar o convulsiones.",
        "Sangrado que no se detiene.",
        "Somnolencia excesiva, dolor intenso o poca orina."
      ],
      "checklist": [
        "Conozco la dirección de urgencias.",
        "Tengo transporte o un plan para llegar.",
        "El resumen clínico y los teléfonos están disponibles."
      ],
      "consultNote": "Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante."
    },
    {
      "id": 13,
      "icon": "people",
      "tone": "purple",
      "summary": "Comprender sus emociones, hablar de la enfermedad y acompañarlo según su edad.",
      "objective": "Comprender el desarrollo, reconocer respuestas emocionales y acompañar a niños y adolescentes durante la enfermedad.",
      "introduction": [
        {
          "type": "paragraph",
          "text": "Acompañamiento según la edad. Una guía para comprender el desarrollo, reconocer respuestas emocionales y acompañar a niños y adolescentes durante la enfermedad."
        },
        {
          "type": "paragraph",
          "text": "Aquí encontrará orientaciones para comprender cómo su hijo puede vivir la enfermedad y cómo acompañarlo según su edad, su desarrollo y sus necesidades."
        },
        {
          "type": "paragraph",
          "text": "Las edades son rangos orientativos para organizar la información. No representan límites rígidos: el desarrollo, la personalidad, las experiencias previas, el contexto familiar y la situación clínica también influyen en la manera de afrontar la enfermedad."
        }
      ],
      "sections": [
        {
          "id": "m13-s1",
          "title": "¿Por qué la edad influye en la manera de vivir la enfermedad?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Recibir un diagnóstico de leucemia linfoblástica aguda representa un cambio importante en la vida del niño, del adolescente y de toda su familia. Sin embargo, cada niño comprende y experimenta esta situación de acuerdo con su etapa de desarrollo."
            },
            {
              "type": "paragraph",
              "text": "La edad influye en la forma de entender lo que sucede, expresar las emociones, relacionarse con los demás y afrontar los procedimientos médicos."
            },
            {
              "type": "paragraph",
              "text": "Por ejemplo:"
            },
            {
              "type": "list",
              "items": [
                "Un niño pequeño puede no comprender qué significa tener leucemia, pero puede manifestar angustia ante la separación de sus padres, los procedimientos médicos y los cambios en sus rutinas.",
                "Un niño en edad escolar puede comenzar a preguntarse por qué está enfermo, si hizo algo malo o cuándo podrá regresar al colegio.",
                "Un adolescente puede experimentar preocupación por los cambios físicos, la pérdida de independencia, sus amistades, su imagen corporal y la interrupción de sus proyectos personales."
              ]
            },
            {
              "type": "paragraph",
              "text": "Las necesidades de información, participación y acompañamiento cambian con el desarrollo. Adapte la comunicación a lo que su hijo comprende, pregunta y necesita en cada momento. [4,5]"
            },
            {
              "type": "paragraph",
              "text": "Recuerde: no todos los niños reaccionan igual. Estas son respuestas que pueden presentarse, no comportamientos que necesariamente experimentará cada paciente."
            }
          ]
        },
        {
          "id": "m13-s2",
          "title": "Primera infancia: de 0 a 3 años",
          "blocks": [
            {
              "type": "heading",
              "text": "¿Cómo puede vivir la enfermedad mi hijo?"
            },
            {
              "type": "paragraph",
              "text": "En esta etapa, los niños dependen especialmente de sus cuidadores para sentirse seguros, regular sus emociones y satisfacer sus necesidades. Su comprensión verbal y cognitiva todavía está en desarrollo."
            },
            {
              "type": "paragraph",
              "text": "Aunque un niño de 2 años no comprenda qué es la leucemia ni pueda explicar lo que siente, puede reaccionar ante las hospitalizaciones, los procedimientos, el dolor, la separación de sus figuras de apego y las alteraciones de sus rutinas."
            },
            {
              "type": "paragraph",
              "text": "Algunas respuestas que pueden presentarse son:"
            },
            {
              "type": "list",
              "items": [
                "Llanto frecuente o mayor necesidad de estar en brazos.",
                "Irritabilidad y dificultad para tranquilizarse.",
                "Alteraciones del sueño.",
                "Cambios en la alimentación.",
                "Temor ante personas, espacios o procedimientos desconocidos.",
                "Regresión temporal en algunas habilidades que ya había adquirido."
              ]
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo acompañarlo como cuidador?"
            },
            {
              "type": "list",
              "items": [
                "Mantenga, siempre que sea posible, rutinas de sueño, alimentación, juego y descanso.",
                "Ofrézcale contacto físico, abrazos y palabras tranquilizadoras.",
                "Procure acompañarlo durante los procedimientos cuando el equipo asistencial lo permita.",
                "Utilice canciones, cuentos, juguetes y objetos familiares para brindarle seguridad.",
                "Explíquele lo que sucederá con palabras sencillas, incluso si todavía no puede comprender toda la información.",
                "Evite regañarlo por llorar, tener miedo o necesitar más atención."
              ]
            },
            {
              "type": "heading",
              "text": "Ejemplo de cómo hablarle:"
            },
            {
              "type": "paragraph",
              "text": "\"Mi amor, vamos a ir al hospital para que los doctores te ayuden. Yo voy a estar contigo y puedes tomar mi mano\"."
            },
            {
              "type": "paragraph",
              "text": "Lo que debe recordar: su presencia, la continuidad de los cuidados y las experiencias de seguridad son fundamentales para acompañar a los niños pequeños."
            }
          ]
        },
        {
          "id": "m13-s3",
          "title": "Etapa preescolar: de 4 a 6 años",
          "blocks": [
            {
              "type": "heading",
              "text": "¿Cómo puede vivir la enfermedad mi hijo?"
            },
            {
              "type": "paragraph",
              "text": "En esta etapa, los niños empiezan a desarrollar explicaciones sobre lo que sucede a su alrededor, pero todavía pueden tener dificultades para comprender las causas de una enfermedad compleja."
            },
            {
              "type": "paragraph",
              "text": "Pueden interpretar la enfermedad como un castigo por haberse portado mal o por haber hecho algo que consideran incorrecto. También pueden tener temor al dolor, a los procedimientos médicos y a separarse de sus padres."
            },
            {
              "type": "paragraph",
              "text": "Algunas respuestas que pueden presentarse son:"
            },
            {
              "type": "list",
              "items": [
                "Miedo a los procedimientos y a las personas desconocidas.",
                "Preguntas repetitivas sobre lo que está sucediendo.",
                "Culpa por creer que hicieron algo malo.",
                "Irritabilidad, tristeza o frustración.",
                "Mayor dependencia del cuidador.",
                "Dificultad para expresar verbalmente sus preocupaciones."
              ]
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo acompañarlo como cuidador?"
            },
            {
              "type": "list",
              "items": [
                "Explíquele la enfermedad con palabras sencillas y adecuadas para su comprensión.",
                "Aclárele que no tiene la culpa de estar enfermo y que no es un castigo.",
                "Utilice cuentos, dibujos, muñecos y juegos para ayudarlo a expresar lo que siente.",
                "Anticípele los procedimientos de acuerdo con las indicaciones del equipo de salud.",
                "Permítale expresar miedo, tristeza o enojo sin juzgarlo.",
                "Reconozca sus pequeños logros y esfuerzos durante el tratamiento."
              ]
            },
            {
              "type": "heading",
              "text": "Ejemplo de cómo hablarle:"
            },
            {
              "type": "paragraph",
              "text": "\"Tienes una enfermedad que se llama leucemia. Esto no pasó porque te hayas portado mal. Los médicos están trabajando para ayudarte y yo estaré contigo durante este proceso\"."
            },
            {
              "type": "paragraph",
              "text": "Lo que debe recordar: no minimice sus preguntas. Responda con sinceridad, utilizando explicaciones breves y concretas."
            }
          ]
        },
        {
          "id": "m13-s4",
          "title": "Edad escolar: de 7 a 12 años",
          "blocks": [
            {
              "type": "heading",
              "text": "¿Cómo puede vivir la enfermedad mi hijo?"
            },
            {
              "type": "paragraph",
              "text": "Durante esta etapa, los niños desarrollan una mayor capacidad para comprender relaciones de causa y efecto. Pueden entender mejor que la leucemia es una enfermedad que requiere tratamiento, aunque su comprensión dependerá de su desarrollo y de la información que reciban."
            },
            {
              "type": "paragraph",
              "text": "Pueden preocuparse por los cambios en su apariencia, el dolor, las hospitalizaciones, la interrupción de sus actividades escolares y la separación de sus amigos."
            },
            {
              "type": "paragraph",
              "text": "Algunas respuestas que pueden presentarse son:"
            },
            {
              "type": "list",
              "items": [
                "Tristeza por no poder asistir al colegio o compartir con sus compañeros.",
                "Miedo a los procedimientos y a los resultados del tratamiento.",
                "Preocupación por los cambios físicos.",
                "Frustración por las limitaciones en sus actividades.",
                "Sentimientos de aislamiento.",
                "Necesidad de conocer qué sucederá durante el tratamiento."
              ]
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo acompañarlo como cuidador?"
            },
            {
              "type": "list",
              "items": [
                "Bríndele información clara y progresiva sobre su enfermedad y tratamiento.",
                "Permita que haga preguntas y exprese disposición para escucharlo.",
                "Explíquele que puede hablar de sus preocupaciones sin temor a entristecerle.",
                "Favorezca el contacto con sus amigos y compañeros cuando su condición clínica lo permita.",
                "Busque alternativas para mantener actividades escolares, recreativas y de aprendizaje.",
                "Involúcrelo en decisiones cotidianas relacionadas con su cuidado, de acuerdo con su edad y capacidad."
              ]
            },
            {
              "type": "heading",
              "text": "Ejemplo de cómo hablarle:"
            },
            {
              "type": "paragraph",
              "text": "\"Sabemos que este tratamiento puede cambiar algunas cosas de tu vida y que quizás extrañes el colegio y tus amigos. Puedes contarnos cómo te sientes y preguntarnos todo lo que necesites saber\"."
            },
            {
              "type": "paragraph",
              "text": "Lo que debe recordar: su hijo necesita información, pero también necesita sentirse escuchado, tomado en cuenta y acompañado en las decisiones que afectan su vida."
            }
          ]
        },
        {
          "id": "m13-s5",
          "title": "Adolescencia: de 13 a 18 años",
          "blocks": [
            {
              "type": "heading",
              "text": "¿Cómo puede vivir la enfermedad mi hijo?"
            },
            {
              "type": "paragraph",
              "text": "La adolescencia es una etapa de construcción de identidad, autonomía, relaciones sociales y proyectos personales. Recibir un diagnóstico de LLA puede generar una ruptura importante en las actividades y experiencias propias de esta etapa."
            },
            {
              "type": "paragraph",
              "text": "El adolescente puede comprender mejor la enfermedad y sus implicaciones, pero esto no significa que tenga todas las herramientas emocionales para afrontarla."
            },
            {
              "type": "paragraph",
              "text": "Entre las preocupaciones que pueden aparecer se encuentran:"
            },
            {
              "type": "list",
              "items": [
                "Tristeza por la interrupción de sus actividades escolares y sociales.",
                "Temor a perder el cabello o experimentar otros cambios físicos.",
                "Preocupación por su imagen corporal y autoestima.",
                "Frustración por depender nuevamente de sus padres.",
                "Preocupación por sus amistades, relaciones afectivas y aceptación social.",
                "Miedo al futuro, a la evolución de la enfermedad y a los resultados del tratamiento.",
                "Necesidad de privacidad, autonomía y participación en las decisiones."
              ]
            },
            {
              "type": "paragraph",
              "text": "El adolescente puede necesitar más autonomía, información y participación en su atención. Escuche cómo quiere recibir apoyo y acuerde con el equipo de salud las decisiones en las que puede participar. [4,5]"
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo acompañarlo como cuidador?"
            },
            {
              "type": "list",
              "items": [
                "Escuche sus preocupaciones sin juzgar ni restar importancia a lo que siente.",
                "Respete sus espacios de privacidad, manteniendo una comunicación abierta.",
                "Permítale participar en las conversaciones con el equipo de salud.",
                "Evite tratarlo como si fuera un niño pequeño por el hecho de estar enfermo.",
                "Facilite el contacto con sus amigos y actividades educativas cuando sea posible.",
                "Converse con él sobre los cambios físicos y emocionales, sin imponerle cómo debe sentirse.",
                "Reconozca su necesidad de independencia y acuerde responsabilidades de autocuidado según su capacidad.",
                "Pregúntele qué información desea recibir y cómo prefiere que se converse sobre su enfermedad."
              ]
            },
            {
              "type": "heading",
              "text": "Ejemplo de cómo hablarle:"
            },
            {
              "type": "paragraph",
              "text": "\"Entiendo que este proceso ha cambiado muchas cosas de tu vida. No quiero decidir por ti cómo debes sentirte. Me gustaría escucharte, saber qué te preocupa y acompañarte en lo que necesites. Podemos hablar juntos con el equipo médico para resolver tus preguntas\"."
            },
            {
              "type": "paragraph",
              "text": "Lo que debe recordar: acompañar a un adolescente significa protegerlo sin quitarle su autonomía, respetar su identidad y reconocer que sigue teniendo necesidades propias de su edad, además de las relacionadas con la enfermedad."
            }
          ]
        },
        {
          "id": "m13-s6",
          "title": "¿Cómo hablar con mi hijo sobre su enfermedad?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "No existe una única forma de conversar con todos los niños. La comunicación debe adaptarse a su edad, comprensión, preguntas, estado emocional y disposición para recibir información."
            },
            {
              "type": "paragraph",
              "text": "Algunas recomendaciones generales son:"
            },
            {
              "type": "list",
              "items": [
                "Hable con sinceridad y utilice palabras que pueda comprender.",
                "Evite explicaciones demasiado extensas o información que no haya solicitado y no esté preparado para procesar.",
                "No prometa resultados que no puede garantizar.",
                "Permita que exprese sus dudas y emociones.",
                "Pregúntele qué ha entendido para identificar posibles confusiones.",
                "Si no sabe responder, dígale que buscarán juntos la respuesta con el equipo de salud.",
                "No excluya al niño o adolescente de las conversaciones que se relacionan con su atención, teniendo en cuenta su desarrollo y capacidad de participación."
              ]
            },
            {
              "type": "paragraph",
              "text": "Converse de forma honesta y sensible, respetando lo que su hijo puede comprender y desea preguntar. Pida al equipo de salud apoyo para las conversaciones difíciles. [4,5]"
            }
          ]
        },
        {
          "id": "m13-s7",
          "title": "¿Cómo puedo acompañar sus emociones como cuidador?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Durante el diagnóstico y el tratamiento, el niño puede experimentar diferentes emociones. Estas pueden cambiar con el tiempo y manifestarse de distintas maneras."
            },
            {
              "type": "table",
              "rows": [
                [
                  "Emoción",
                  "¿Cómo puede manifestarse?",
                  "¿Cómo acompañarlo?"
                ],
                [
                  "Miedo",
                  "Llanto, preguntas frecuentes, resistencia a procedimientos.",
                  "Escúchelo, explíquele qué sucederá y ofrézcale seguridad."
                ],
                [
                  "Tristeza",
                  "Aislamiento, llanto o pérdida de interés en algunas actividades.",
                  "Permita que exprese lo que siente y acompáñelo sin presionarlo."
                ],
                [
                  "Enojo",
                  "Irritabilidad, frustración o rechazo a ciertas actividades.",
                  "Mantenga la calma, reconozca su malestar y establezca límites respetuosos."
                ],
                [
                  "Ansiedad",
                  "Inquietud, preocupación anticipada o dificultad para tranquilizarse.",
                  "Ofrézcale información progresiva, rutinas y acompañamiento."
                ],
                [
                  "Frustración",
                  "Molestia por no poder realizar actividades habituales.",
                  "Busque alternativas de juego, aprendizaje y participación."
                ]
              ],
              "caption": "¿Cómo puedo acompañar sus emociones como cuidador?"
            },
            {
              "type": "paragraph",
              "text": "Estas manifestaciones son orientativas y no permiten establecer por sí solas un diagnóstico psicológico."
            },
            {
              "type": "paragraph",
              "text": "Cinco acciones que puede poner en práctica:"
            },
            {
              "type": "list",
              "items": [
                "Escuchar: permita que hable sin interrumpirlo.",
                "Validar: reconozca su emoción. Puede decirle: \"Entiendo que esto te dé miedo\".",
                "Acompañar: hágale saber que no está solo.",
                "Facilitar la expresión: utilice conversaciones, dibujos, juegos o actividades adecuadas para su edad.",
                "Observar: identifique cambios persistentes en su comportamiento, estado de ánimo y relaciones."
              ]
            }
          ]
        },
        {
          "id": "m13-s8",
          "title": "¿Cuándo necesita mi hijo acompañamiento psicológico?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "El acompañamiento psicológico puede ser útil desde el diagnóstico, no solamente cuando aparecen dificultades emocionales importantes."
            },
            {
              "type": "paragraph",
              "text": "Es recomendable solicitar orientación al equipo de salud mental cuando observe:"
            },
            {
              "type": "list",
              "items": [
                "Tristeza, ansiedad o irritabilidad persistentes.",
                "Aislamiento social o pérdida marcada de interés en actividades que antes disfrutaba.",
                "Dificultades importantes para dormir o alimentarse relacionadas con el malestar emocional.",
                "Temor intenso que dificulta su participación en procedimientos o actividades de cuidado.",
                "Dificultades para adaptarse a los cambios asociados con la enfermedad.",
                "Expresiones de desesperanza, culpa intensa o rechazo hacia sí mismo.",
                "Dificultades importantes en la comunicación familiar."
              ]
            },
            {
              "type": "paragraph",
              "text": "Si expresa deseos de hacerse daño, de morir o presenta conductas de riesgo, busque atención profesional inmediata y no lo deje solo."
            },
            {
              "type": "heading",
              "text": "¿A quién puedo acudir?"
            },
            {
              "type": "list",
              "items": [
                "Psicología de la institución donde recibe tratamiento.",
                "Psicooncología, si está disponible.",
                "Psiquiatría infantil y adolescente, cuando el equipo lo considere necesario.",
                "Equipo interdisciplinario de atención pediátrica."
              ]
            },
            {
              "type": "paragraph",
              "text": "No espere a que las dificultades sean graves para solicitar orientación. El equipo de salud puede ayudarle a identificar las necesidades emocionales de su hijo y establecer el acompañamiento adecuado."
            }
          ]
        },
        {
          "id": "m13-s9",
          "title": "¿Cómo cuidar mis emociones mientras acompaño a mi hijo?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "El diagnóstico también transforma la vida del cuidador. Puede experimentar miedo, incertidumbre, tristeza, agotamiento o preocupación por el futuro de su hijo."
            },
            {
              "type": "paragraph",
              "text": "Recuerde que no tiene que tener todas las respuestas ni mostrarse fuerte todo el tiempo."
            },
            {
              "type": "paragraph",
              "text": "Algunas recomendaciones:"
            },
            {
              "type": "list",
              "items": [
                "Reconozca sus emociones sin sentir culpa por experimentarlas.",
                "Busque apoyo en familiares y personas de confianza.",
                "Comparta las responsabilidades del cuidado cuando sea posible.",
                "Reserve momentos para descansar y atender sus necesidades.",
                "Solicite orientación psicológica cuando sienta que necesita acompañamiento.",
                "Evite ocultar permanentemente sus emociones; puede expresarlas de manera tranquila y adecuada a la edad de su hijo."
              ]
            },
            {
              "type": "paragraph",
              "text": "Una idea importante: cuidar emocionalmente a su hijo también implica reconocer cuándo necesita ayuda para continuar acompañándolo."
            }
          ],
          "links": [
            {
              "label": "Cuidar a quien cuida",
              "url": "#/modulo/9"
            }
          ]
        },
        {
          "id": "m13-s10",
          "title": "Mensaje final",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Cada etapa necesita una forma diferente de acompañar."
            },
            {
              "type": "paragraph",
              "text": "Su hijo sigue siendo un niño o adolescente con sueños, necesidades, emociones y una manera particular de comprender el mundo."
            },
            {
              "type": "paragraph",
              "text": "No necesita tener las palabras perfectas. Necesita que lo escuche, que respete su manera de sentir, que le brinde información adecuada para su edad y que le recuerde que no está solo."
            },
            {
              "type": "paragraph",
              "text": "Acompañar también es aprender a comprender su mundo, crecer con él y caminar a su lado durante el proceso de la enfermedad."
            }
          ]
        }
      ],
      "keyMessages": [
        "Adapte la comunicación a la edad, el desarrollo y las necesidades de su hijo.",
        "Permita que exprese sus emociones y haga preguntas.",
        "Puede solicitar acompañamiento psicológico desde el diagnóstico."
      ],
      "jumpLinks": [
        {
          "label": "0 a 3 años",
          "sectionId": "m13-s2"
        },
        {
          "label": "4 a 6 años",
          "sectionId": "m13-s3"
        },
        {
          "label": "7 a 12 años",
          "sectionId": "m13-s4"
        },
        {
          "label": "13 a 18 años",
          "sectionId": "m13-s5"
        }
      ],
      "do": [
        "Escuchar sin juzgar y brindar información clara y progresiva.",
        "Mantener rutinas y actividades apropiadas cuando sea posible.",
        "Solicitar orientación al equipo de salud cuando necesite apoyo."
      ],
      "avoid": [
        "Prometer resultados que no puede garantizar.",
        "Minimizar sus preguntas o culpabilizarlo por la enfermedad.",
        "Imponerle cómo debería sentirse."
      ],
      "consult": [
        "Tristeza, ansiedad o irritabilidad persistentes que afecten su bienestar.",
        "Dificultades importantes para dormir, alimentarse o participar en sus actividades.",
        "Si expresa deseos de hacerse daño, de morir o presenta conductas de riesgo, busque atención profesional inmediata y no lo deje solo."
      ],
      "checklist": [
        "Identifiqué orientaciones adecuadas para la edad de mi hijo.",
        "Reservé un momento para escucharlo y responder sus preguntas.",
        "Sé a quién solicitar apoyo psicológico."
      ],
      "sources": [
        {
          "number": 4,
          "label": "Comunicación según el desarrollo",
          "citation": "Together by St. Jude. Información apropiada para la edad sobre el cáncer infantil.",
          "url": "https://together.stjude.org/es-us/emotional-support-daily-life/parents/talking-to-your-child-about-cancer/age-appropriate-information.html"
        },
        {
          "number": 5,
          "label": "Apoyo a las familias",
          "citation": "National Cancer Institute. Support for Families: Childhood Cancer.",
          "url": "https://www.cancer.gov/about-cancer/coping/caregiver-support/parents"
        }
      ],
      "shortTitle": "Emociones de mi hijo",
      "title": "Comprendiendo las emociones y necesidades de mi hijo"
    },
    {
      "id": 9,
      "title": "Cuidar a quien cuida",
      "shortTitle": "Cuidar a quien cuida",
      "icon": "people",
      "tone": "purple",
      "summary": "Cuidar su bienestar emocional, compartir responsabilidades y encontrar apoyo.",
      "objective": "Reconocer sus emociones, afrontar los momentos difíciles, buscar apoyo y saber cuándo solicitar atención psicológica.",
      "image": "assets/images/apoyo-cuidador.webp",
      "imageAlt": "Una cuidadora descansa mientras otra persona le ofrece compañía y apoyo.",
      "keyMessages": [
        "Sus emociones y sus necesidades también merecen atención.",
        "Puede compartir las responsabilidades y pedir ayuda.",
        "No necesita esperar a sentirse desbordado para buscar apoyo profesional."
      ],
      "sections": [
        {
          "id": "m9-s1",
          "title": "Comprender mis emociones ante el diagnóstico",
          "blocks": [
            {
              "type": "heading",
              "text": "Cuando recibo el diagnóstico: ¿qué puede pasar conmigo?"
            },
            {
              "type": "paragraph",
              "text": "Recibir la noticia de que su hijo tiene leucemia linfoblástica aguda puede cambiar de manera inesperada su vida y la de toda su familia. Es posible que, al escuchar el diagnóstico, sienta que el mundo se detiene, que le cueste comprender lo que está sucediendo o que tenga muchas preguntas sobre el futuro."
            },
            {
              "type": "paragraph",
              "text": "Durante este momento puede experimentar:"
            },
            {
              "type": "list",
              "items": [
                "Impacto o conmoción: sentir que no puede creer lo que está ocurriendo, quedarse en silencio o tener dificultad para asimilar la información.",
                "Incredulidad: preguntarse si el diagnóstico es correcto o desear que todo sea un error.",
                "Confusión: sentir que recibe demasiada información médica y que le cuesta comprenderla o recordarla.",
                "Miedo e incertidumbre: preocuparse por el tratamiento, la evolución de la enfermedad y lo que pueda suceder.",
                "Sensación de pérdida de control: sentir que su vida cotidiana ha cambiado y que muchas decisiones ahora dependen de circunstancias que no puede controlar."
              ]
            },
            {
              "type": "paragraph",
              "text": "Estas reacciones pueden aparecer juntas, cambiar con el tiempo o presentarse en diferentes momentos del proceso."
            },
            {
              "type": "paragraph",
              "text": "Recuerde: No existe una manera correcta de reaccionar ante el diagnóstico. No tiene que comprenderlo todo inmediatamente ni demostrar fortaleza en cada momento. Dese permiso para asimilar la información, expresar sus preocupaciones y solicitar explicaciones al equipo de salud cuando las necesite."
            },
            {
              "type": "heading",
              "text": "Una palabra para recordar"
            },
            {
              "type": "paragraph",
              "text": "Sentirse abrumado no significa que sea un mal cuidador. Significa que está enfrentando una situación difícil y también necesita apoyo."
            },
            {
              "type": "heading",
              "text": "El duelo por la pérdida de la salud esperada"
            },
            {
              "type": "paragraph",
              "text": "Antes del diagnóstico probablemente tenía expectativas sobre el crecimiento, la educación, las actividades y el futuro de su hijo. Quizás imaginaba sus cumpleaños, sus juegos, sus estudios, los paseos familiares y una vida cotidiana sin tantas preocupaciones relacionadas con su salud."
            },
            {
              "type": "paragraph",
              "text": "Con la llegada del diagnóstico, muchas de esas expectativas pueden verse interrumpidas o modificadas. Es posible que sienta tristeza por los cambios que ha experimentado su familia, por la pérdida de algunas rutinas o por no saber cuándo podrán retomarlas."
            },
            {
              "type": "paragraph",
              "text": "A esta experiencia podemos comprenderla como una respuesta de duelo ante la pérdida de la salud esperada y de la vida cotidiana que conocía."
            },
            {
              "type": "heading",
              "text": "¿Qué puede sentir durante este proceso?"
            },
            {
              "type": "list",
              "items": [
                "Tristeza por los cambios en la vida de su hijo.",
                "Nostalgia por la tranquilidad que existía antes del diagnóstico.",
                "Frustración porque los planes familiares han tenido que cambiar.",
                "Incertidumbre frente a las expectativas que tenía sobre el futuro.",
                "Temor de no poder recuperar la normalidad que conocía."
              ]
            },
            {
              "type": "paragraph",
              "text": "Es importante comprender que este proceso no significa que haya perdido la esperanza ni que esté renunciando a la recuperación de su hijo. Puede sentir tristeza por lo que ha cambiado y, al mismo tiempo, conservar la esperanza en el tratamiento y en el futuro."
            },
            {
              "type": "heading",
              "text": "Tenga presente:"
            },
            {
              "type": "paragraph",
              "text": "No tiene que obligarse a aceptar todos los cambios de inmediato. Adaptarse a esta nueva realidad requiere tiempo. Puede construir nuevas rutinas, conservar los proyectos familiares que sean posibles y encontrar momentos significativos junto a su hijo."
            },
            {
              "type": "heading",
              "text": "Emociones que puedo experimentar"
            },
            {
              "type": "paragraph",
              "text": "Cada cuidador vive la experiencia de manera particular. Algunas emociones pueden aparecer desde el diagnóstico, mientras que otras surgen durante la hospitalización, la quimioterapia, los controles médicos o ante situaciones de incertidumbre."
            },
            {
              "type": "paragraph",
              "text": "Conocerlas le permitirá identificar lo que está sintiendo sin juzgarse."
            },
            {
              "type": "heading",
              "text": "Miedo"
            },
            {
              "type": "paragraph",
              "text": "Puede sentir temor por la salud de su hijo, los efectos del tratamiento, las hospitalizaciones o la posibilidad de complicaciones."
            },
            {
              "type": "heading",
              "text": "Tristeza"
            },
            {
              "type": "paragraph",
              "text": "Puede aparecer al pensar en los cambios que ha vivido su hijo, las separaciones familiares o las actividades que han tenido que suspender."
            },
            {
              "type": "heading",
              "text": "Rabia o frustración"
            },
            {
              "type": "paragraph",
              "text": "Puede preguntarse por qué está sucediendo esto, sentir impotencia ante situaciones que no puede cambiar o molestarse por las dificultades del proceso."
            },
            {
              "type": "heading",
              "text": "Culpa"
            },
            {
              "type": "paragraph",
              "text": "Puede preguntarse si hizo algo que ocasionó la enfermedad o si pudo haberla detectado antes. Recuerde que no debe responsabilizarse por haber causado el cáncer de su hijo."
            },
            {
              "type": "heading",
              "text": "Ansiedad"
            },
            {
              "type": "paragraph",
              "text": "Puede experimentar preocupación constante, pensamientos repetitivos sobre el futuro, dificultad para descansar o sensación de alerta ante cualquier cambio en la salud de su hijo."
            },
            {
              "type": "heading",
              "text": "Esperanza"
            },
            {
              "type": "paragraph",
              "text": "Puede encontrar tranquilidad en los avances del tratamiento, el acompañamiento familiar, las palabras del equipo de salud y los momentos compartidos con su hijo."
            },
            {
              "type": "paragraph",
              "text": "Algo importante: Puede experimentar varias emociones al mismo tiempo. Sentir miedo no significa que haya perdido la esperanza; sentir rabia no significa que quiera menos a su hijo, y sentir alegría en algunos momentos no significa que esté ignorando la enfermedad."
            },
            {
              "type": "paragraph",
              "text": "No necesita sentirse bien todo el tiempo para ser un buen cuidador."
            },
            {
              "type": "heading",
              "text": "Reconozco lo que estoy sintiendo"
            },
            {
              "type": "paragraph",
              "text": "A veces estamos tan concentrados en atender las necesidades de nuestros hijos que dejamos de prestar atención a lo que sucede con nosotros mismos."
            },
            {
              "type": "paragraph",
              "text": "Reconocer sus emociones es el primer paso para comprender sus necesidades de apoyo. Para hacerlo, puede comenzar observando tres aspectos:"
            },
            {
              "type": "list",
              "items": [
                "Lo que siento: identifique la emoción que está experimentando.",
                "Lo que pienso: reconozca los pensamientos que aparecen ante una situación.",
                "Lo que noto en mi cuerpo: observe si tiene tensión muscular, dolor de cabeza, cansancio, palpitaciones, dificultad para dormir o cambios en el apetito."
              ]
            },
            {
              "type": "paragraph",
              "text": "Por ejemplo:"
            },
            {
              "type": "table",
              "rows": [
                [
                  "Situación",
                  "Pensamiento",
                  "Emoción"
                ],
                [
                  "Mi hijo tiene que recibir quimioterapia.",
                  "¿Cómo va a reaccionar al tratamiento?",
                  "Miedo."
                ],
                [
                  "Mi hijo presenta un cambio en su estado de salud.",
                  "¿Será algo grave?",
                  "Ansiedad."
                ],
                [
                  "Recuerdo cómo era nuestra vida antes del diagnóstico.",
                  "Extraño nuestra tranquilidad.",
                  "Tristeza."
                ],
                [
                  "Mi hijo tiene un día tranquilo y podemos compartir juntos.",
                  "Hoy podemos disfrutar este momento.",
                  "Alegría y esperanza."
                ]
              ],
              "caption": "Reconozco lo que estoy sintiendo"
            },
            {
              "type": "reflection",
              "title": "¿Cómo me siento hoy?",
              "intro": "Lea cada pregunta y tómese un momento para reflexionar. Puede escribir sus ideas en una hoja personal. No hay respuestas correctas o incorrectas.",
              "lead": "Tómese un momento para pensar en estas preguntas:",
              "questions": [
                "¿Qué emoción he experimentado con mayor frecuencia durante los últimos días?",
                "¿Qué situaciones hacen que esta emoción aparezca?",
                "¿Qué pensamientos pasan por mi mente cuando me siento así?",
                "¿Cómo noto esta emoción en mi cuerpo?",
                "¿He podido expresar lo que siento con alguien de confianza?"
              ],
              "closing": "No necesita tener todas las respuestas. Lo importante es comenzar a escucharse y reconocer que sus emociones también merecen atención."
            },
            {
              "type": "heading",
              "text": "Cada persona vive este proceso de manera diferente"
            },
            {
              "type": "paragraph",
              "text": "Aunque dos familias atraviesen una situación similar, sus experiencias emocionales pueden ser diferentes. Algunas personas necesitan hablar sobre lo que sienten; otras prefieren estar en silencio, buscar información, acercarse a sus familiares o tomarse un tiempo para asimilar lo sucedido."
            },
            {
              "type": "paragraph",
              "text": "También es posible que sus emociones cambien durante el tratamiento. Un día puede sentir tranquilidad y al siguiente experimentar miedo o preocupación."
            },
            {
              "type": "paragraph",
              "text": "No existe una secuencia obligatoria de emociones ni un tiempo establecido para adaptarse a esta experiencia."
            },
            {
              "type": "paragraph",
              "text": "Evite compararse con otros cuidadores o exigirse afrontar la situación de la misma manera que ellos."
            },
            {
              "type": "heading",
              "text": "¿Cuándo es importante buscar acompañamiento psicológico?"
            },
            {
              "type": "paragraph",
              "text": "Es recomendable solicitar apoyo al psicólogo del equipo de oncología pediátrica o a un profesional de salud mental cuando:"
            },
            {
              "type": "list",
              "items": [
                "La tristeza, angustia o ansiedad son muy intensas o persisten y dificultan sus actividades cotidianas.",
                "Presenta dificultades importantes para dormir, alimentarse o realizar sus actividades habituales.",
                "Experimenta pensamientos de culpa o desesperanza que no logra manejar.",
                "Siente que no puede afrontar las responsabilidades del cuidado.",
                "Se aísla de las personas que habitualmente le brindan apoyo.",
                "Presenta crisis emocionales frecuentes o siente que su bienestar está siendo afectado."
              ]
            },
            {
              "type": "paragraph",
              "text": "Si aparecen pensamientos de hacerse daño o de no querer continuar viviendo, busque atención profesional inmediata o acuda a urgencias."
            },
            {
              "type": "paragraph",
              "text": "Recuerde: Pedir ayuda no es una señal de debilidad. Es una forma de cuidar su salud emocional y reconocer que no tiene que afrontar este proceso en soledad."
            }
          ]
        },
        {
          "id": "m9-s2",
          "title": "Cuidarme emocionalmente durante el tratamiento",
          "blocks": [
            {
              "type": "heading",
              "text": "Adaptarme a los cambios durante el tratamiento"
            },
            {
              "type": "heading",
              "text": "Cambios que puede experimentar"
            },
            {
              "type": "list",
              "items": [
                "Cambios en las rutinas familiares, laborales y personales.",
                "Adaptación a las hospitalizaciones, consultas, procedimientos y ciclos de quimioterapia.",
                "Organización de las responsabilidades del cuidado.",
                "Manejo de la incertidumbre entre controles y etapas del tratamiento.",
                "Importancia de establecer nuevas rutinas sin exigirse recuperar inmediatamente la vida anterior."
              ]
            },
            {
              "type": "paragraph",
              "text": "El tratamiento de su hijo puede modificar muchas áreas de su vida. Es posible que deba reorganizar sus horarios, interrumpir algunas actividades, cambiar sus prioridades y dedicar gran parte de su tiempo al cuidado."
            },
            {
              "type": "paragraph",
              "text": "Adaptarse no significa que tenga que acostumbrarse a todas las dificultades ni que deba dejar de lado sus propias necesidades. Significa encontrar, poco a poco, maneras de organizar su vida y reconocer qué apoyos necesita para transitar este proceso."
            },
            {
              "type": "heading",
              "text": "¿Cómo afrontar los momentos emocionalmente difíciles?"
            },
            {
              "type": "paragraph",
              "text": "Es normal que sienta:"
            },
            {
              "type": "list",
              "items": [
                "Preocupación ante los resultados de exámenes y controles.",
                "Miedo antes de la quimioterapia o de los procedimientos médicos.",
                "Angustia ante los efectos secundarios y cambios en el estado de salud del hijo.",
                "Dificultades para manejar la incertidumbre.",
                "Pensamientos anticipatorios y preocupación constante."
              ]
            },
            {
              "type": "paragraph",
              "text": "Puede aprender estrategias para afrontar las situaciones que le generan tensión emocional."
            },
            {
              "type": "paragraph",
              "text": "Durante el tratamiento pueden presentarse momentos especialmente difíciles. Una hospitalización inesperada, un resultado médico que genera preocupación o una reacción adversa pueden aumentar el miedo y la angustia."
            },
            {
              "type": "paragraph",
              "text": "Cuando esto ocurra, intente identificar qué situación está generando su preocupación, diferenciar lo que sabe de aquello que está imaginando y buscar información confiable en el equipo de salud."
            },
            {
              "type": "paragraph",
              "text": "No tiene que resolver todas las preocupaciones al mismo tiempo. Concéntrese en la situación que está viviendo y en el siguiente paso que puede dar."
            },
            {
              "type": "heading",
              "text": "Aprender a regular mis emociones"
            },
            {
              "type": "heading",
              "text": "Técnicas que puede aprender y practicar:"
            },
            {
              "type": "heading",
              "text": "A. Respiración lenta y consciente"
            },
            {
              "type": "paragraph",
              "text": "Cuando sienta tensión o preocupación:"
            },
            {
              "type": "list",
              "items": [
                "Busque una posición cómoda.",
                "Inhale suavemente por la nariz.",
                "Exhale despacio, sin forzar la respiración.",
                "Repita durante unos minutos, concentrándose en el movimiento de su respiración.",
                "Si siente mareo o incomodidad, vuelva a respirar con normalidad."
              ]
            },
            {
              "type": "paragraph",
              "text": "Esta práctica puede ayudarle a disminuir la tensión y recuperar la calma en momentos de estrés."
            },
            {
              "type": "heading",
              "text": "B. Pausa consciente"
            },
            {
              "type": "paragraph",
              "text": "Cuando sienta que las preocupaciones le sobrepasan:"
            },
            {
              "type": "list",
              "items": [
                "Deténgase unos instantes.",
                "Identifique cómo se siente.",
                "Observe qué está ocurriendo a su alrededor.",
                "Reconozca qué necesita en ese momento.",
                "Elija una acción pequeña que pueda ayudarle."
              ]
            },
            {
              "type": "heading",
              "text": "C. Identificar y cuestionar pensamientos preocupantes"
            },
            {
              "type": "paragraph",
              "text": "En ocasiones, la preocupación nos lleva a imaginar escenarios negativos que todavía no han ocurrido."
            },
            {
              "type": "paragraph",
              "text": "Por ejemplo:"
            },
            {
              "type": "list",
              "items": [
                "Pensamiento: «No voy a ser capaz de afrontar todo lo que viene».",
                "Pregunta: ¿Qué evidencia tengo de que no podré hacerlo?",
                "Pensamiento alternativo: «No tengo que resolverlo todo hoy. Puedo avanzar paso a paso y pedir ayuda cuando la necesite»."
              ]
            },
            {
              "type": "heading",
              "text": "D. Relajación muscular"
            },
            {
              "type": "paragraph",
              "text": "Consiste en reconocer la tensión del cuerpo y aprender a relajar progresivamente diferentes grupos musculares. Puede practicarse en un espacio tranquilo, sin generar dolor ni forzar los movimientos."
            },
            {
              "type": "paragraph",
              "text": "Es importante recordar que estas herramientas son estrategias de apoyo y no sustituyen la atención psicológica cuando se necesita."
            },
            {
              "type": "heading",
              "text": "Reconocer el agotamiento emocional y prevenir la sobrecarga"
            },
            {
              "type": "paragraph",
              "text": "Cuidar a un hijo durante un tratamiento oncológico puede exigir mucho de usted. Las hospitalizaciones, las noches de poco descanso, las preocupaciones constantes y las responsabilidades familiares pueden acumular cansancio físico y emocional."
            },
            {
              "type": "paragraph",
              "text": "En ocasiones, puede acostumbrarse tanto a atender las necesidades de su hijo que deja de reconocer sus propias señales de agotamiento."
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo reconocer que estoy sobrecargado?"
            },
            {
              "type": "table",
              "rows": [
                [
                  "Manifestaciones emocionales",
                  "Manifestaciones físicas y conductuales"
                ],
                [
                  "Irritabilidad frecuente.",
                  "Cansancio persistente."
                ],
                [
                  "Sensación de estar sobrepasado.",
                  "Dificultad para dormir."
                ],
                [
                  "Desmotivación.",
                  "Cambios en el apetito."
                ],
                [
                  "Dificultad para concentrarse.",
                  "Dolores musculares o de cabeza."
                ],
                [
                  "Sensación de no poder continuar con las responsabilidades.",
                  "Aislamiento o abandono de actividades personales."
                ]
              ],
              "caption": "¿Cómo puedo reconocer que estoy sobrecargado?"
            },
            {
              "type": "heading",
              "text": "¿Qué puedo hacer cuando siento que estoy llegando al límite?"
            },
            {
              "type": "list",
              "items": [
                "Reconocer que necesito descansar.",
                "Compartir las responsabilidades con personas de confianza.",
                "Expresar cuando una situación me está sobrepasando.",
                "Evitar exigirme realizar todas las tareas perfectamente.",
                "Reservar momentos para atender mis necesidades.",
                "Solicitar acompañamiento psicológico cuando el agotamiento afecta mi bienestar."
              ]
            },
            {
              "type": "paragraph",
              "text": "Recuerde: Su bienestar también importa. No necesita llegar al límite para permitirse descansar o pedir ayuda."
            },
            {
              "type": "heading",
              "text": "El autocuidado también hace parte del cuidado de mi hijo"
            },
            {
              "type": "paragraph",
              "text": "El autocuidado consiste en reconocer y atender sus propias necesidades, incluso cuando gran parte de su tiempo está dedicado al tratamiento y bienestar de su hijo."
            },
            {
              "type": "paragraph",
              "text": "No significa alejarse de sus responsabilidades ni dejar de acompañarlo. Significa comprender que usted también necesita descanso, alimentación, bienestar emocional y espacios personales."
            },
            {
              "type": "heading",
              "text": "Pequeñas acciones para cuidar de usted:"
            },
            {
              "type": "heading",
              "text": "Cuide su alimentación"
            },
            {
              "type": "paragraph",
              "text": "Procure mantener horarios de alimentación y no pasar largos periodos sin comer."
            },
            {
              "type": "heading",
              "text": "Permítase descansar"
            },
            {
              "type": "paragraph",
              "text": "Busque oportunidades para dormir y recuperar energía. Si es posible, alterne los turnos de acompañamiento."
            },
            {
              "type": "heading",
              "text": "Manténgase activo"
            },
            {
              "type": "paragraph",
              "text": "Realice caminatas cortas o movimientos suaves según sus posibilidades."
            },
            {
              "type": "heading",
              "text": "Conserve actividades que disfruta"
            },
            {
              "type": "paragraph",
              "text": "Escuchar música, leer, escribir, conversar o realizar alguna actividad que le proporcione tranquilidad."
            },
            {
              "type": "heading",
              "text": "Mantenga sus relaciones personales"
            },
            {
              "type": "paragraph",
              "text": "Busque momentos para comunicarse con familiares, amigos y personas significativas."
            },
            {
              "type": "paragraph",
              "text": "No necesita disponer de varias horas para comenzar a cuidarse. A veces, unos minutos de descanso, una conversación o una comida tranquila pueden ser un buen comienzo."
            },
            {
              "type": "heading",
              "text": "Aprender a pedir ayuda: mis redes de apoyo"
            },
            {
              "type": "paragraph",
              "text": "Acompañar a un hijo con LLA no debería ser una responsabilidad que tenga que asumir en soledad. Contar con personas que le escuchen, le acompañen y colaboren con las actividades cotidianas puede disminuir la sobrecarga y favorecer su bienestar."
            },
            {
              "type": "paragraph",
              "text": "Las redes de apoyo pueden estar conformadas por:"
            },
            {
              "type": "list",
              "items": [
                "Familiares: personas que puedan acompañarle, compartir responsabilidades o ayudarle con otros integrantes de la familia.",
                "Amigos y personas cercanas: quienes puedan escucharle, brindarle compañía o ayudarle con actividades cotidianas.",
                "Otros padres y cuidadores: personas que han vivido experiencias similares y con quienes puede compartir inquietudes.",
                "Equipo de salud: psicólogos, trabajadores sociales, enfermeros y médicos que pueden orientarle durante el tratamiento.",
                "Comunidad y organizaciones de apoyo: fundaciones, grupos de acompañamiento y organizaciones que ofrecen orientación y asistencia."
              ]
            },
            {
              "type": "heading",
              "text": "¿Cómo puedo solicitar ayuda?"
            },
            {
              "type": "paragraph",
              "text": "A veces las personas cercanas desean colaborar, pero no saben qué necesitamos. Por eso, es importante aprender a expresar nuestras necesidades de manera clara."
            },
            {
              "type": "paragraph",
              "text": "Por ejemplo:"
            },
            {
              "type": "list",
              "items": [
                "«¿Podrías acompañar a mi hijo mientras descanso un momento?».",
                "«Necesito que me escuches, hoy ha sido un día difícil».",
                "«¿Puedes ayudarme con las actividades de la casa?».",
                "«Me gustaría que me acompañaras a la próxima consulta»."
              ]
            },
            {
              "type": "paragraph",
              "text": "Pedir ayuda no significa que esté dejando de cumplir su papel como cuidador. Significa permitir que otras personas también participen en el acompañamiento de su familia."
            }
          ]
        },
        {
          "id": "m9-s3",
          "title": "Reconstruir mi bienestar después del tratamiento",
          "blocks": [
            {
              "type": "heading",
              "text": "Cuando termina el tratamiento, ¿qué pasa conmigo?"
            },
            {
              "type": "paragraph",
              "text": "Después de meses o años de acompañar a su hijo durante consultas, hospitalizaciones, quimioterapia y procedimientos médicos, escuchar que ha terminado el tratamiento puede generar una gran alegría y sensación de alivio."
            },
            {
              "type": "paragraph",
              "text": "Sin embargo, también puede experimentar emociones que no esperaba. Durante el tratamiento tenía citas frecuentes, indicaciones médicas y un equipo de salud que acompañaba de cerca cada etapa. Cuando esta rutina cambia, puede sentir incertidumbre, temor o incluso una sensación de vacío."
            },
            {
              "type": "paragraph",
              "text": "Es posible que se pregunte:"
            },
            {
              "type": "list",
              "items": [
                "¿Y ahora qué sigue?",
                "¿Cómo sabré si mi hijo está bien?",
                "¿Qué debo hacer si presenta algún síntoma?",
                "¿Podremos recuperar nuestra vida familiar?",
                "¿Cómo puedo dejar de preocuparme constantemente?"
              ]
            },
            {
              "type": "paragraph",
              "text": "Finalizar el tratamiento no significa que desaparezcan inmediatamente todas las preocupaciones. Empieza una nueva etapa de seguimiento y adaptación, en la que tanto su hijo como su familia necesitan tiempo para reorganizarse."
            },
            {
              "type": "paragraph",
              "text": "Recuerde: Puede sentir alegría porque su hijo ha terminado el tratamiento y, al mismo tiempo, experimentar miedo o incertidumbre. Una emoción no invalida la otra."
            },
            {
              "type": "heading",
              "text": "El miedo a la recaída y la ansiedad ante los controles"
            },
            {
              "type": "paragraph",
              "text": "Después de finalizar el tratamiento, algunos cuidadores continúan preocupándose por la posibilidad de que la leucemia regrese. Esta preocupación puede aumentar cuando se aproxima una consulta, un examen de laboratorio o la entrega de resultados."
            },
            {
              "type": "paragraph",
              "text": "Algunas situaciones que pueden generar angustia son:"
            },
            {
              "type": "list",
              "items": [
                "La proximidad de los controles médicos.",
                "La espera de resultados de laboratorio.",
                "La aparición de síntomas o cambios físicos en el niño.",
                "Recordar experiencias difíciles durante el tratamiento.",
                "Escuchar que otro niño con cáncer ha presentado una recaída."
              ]
            },
            {
              "type": "paragraph",
              "text": "A veces, esta preocupación puede llevarle a interpretar cualquier cambio en la salud de su hijo como una señal de que la enfermedad ha regresado."
            },
            {
              "type": "heading",
              "text": "¿Qué puede hacer para manejar estos momentos?"
            },
            {
              "type": "list",
              "items": [
                "Reconozca cuándo comienza su preocupación y qué situación la desencadena.",
                "Evite anticipar resultados antes de recibir la información del equipo médico.",
                "Anote sus preguntas para resolverlas durante las consultas.",
                "Mantenga los controles y las recomendaciones indicadas por hematología-oncología pediátrica.",
                "Busque apoyo emocional si la preocupación interfiere con su descanso o sus actividades cotidianas."
              ]
            },
            {
              "type": "paragraph",
              "text": "Importante: No todos los síntomas indican una recaída. Sin embargo, cualquier manifestación que le preocupe debe ser consultada con el equipo tratante. No suspenda ni modifique los controles por su cuenta."
            },
            {
              "type": "heading",
              "text": "Recuperar la vida familiar y las rutinas"
            },
            {
              "type": "paragraph",
              "text": "Durante el tratamiento, es posible que la vida familiar haya girado alrededor de las necesidades médicas de su hijo. Quizás algunas actividades quedaron suspendidas, otros integrantes de la familia asumieron nuevas responsabilidades y las relaciones familiares cambiaron."
            },
            {
              "type": "paragraph",
              "text": "Después del tratamiento, recuperar la vida cotidiana puede requerir tiempo y adaptación. No todas las actividades podrán retomarse inmediatamente y algunas necesitarán ajustes de acuerdo con las recomendaciones médicas."
            },
            {
              "type": "heading",
              "text": "¿Qué puede hacer para recuperar la dinámica familiar?"
            },
            {
              "type": "list",
              "items": [
                "Retomar progresivamente las actividades que disfrutaban como familia.",
                "Establecer espacios para compartir con cada integrante del hogar.",
                "Escuchar las necesidades emocionales de los hermanos del niño que tuvo cáncer.",
                "Recuperar celebraciones, paseos y actividades recreativas cuando sean apropiados.",
                "Conversar en familia sobre los cambios que han experimentado.",
                "Evitar que todas las conversaciones familiares giren exclusivamente alrededor de la enfermedad."
              ]
            },
            {
              "type": "heading",
              "text": "Un aspecto importante:"
            },
            {
              "type": "paragraph",
              "text": "Los hermanos también pueden haber vivido momentos de separación, preocupación, cambios de responsabilidades o menor atención durante el tratamiento. Es importante reconocer sus sentimientos y ofrecerles espacios para expresar lo que han vivido."
            },
            {
              "type": "paragraph",
              "text": "Recuerde: Recuperar la vida familiar no significa volver exactamente a como era antes. Significa construir una nueva dinámica en la que cada integrante pueda recuperar sus espacios, relaciones y proyectos."
            },
            {
              "type": "heading",
              "text": "Volver a reconocerme más allá del cuidado"
            },
            {
              "type": "paragraph",
              "text": "Durante el tratamiento de su hijo, es posible que haya dedicado gran parte de su tiempo y energía a acompañarlo. Quizás dejó de trabajar, suspendió estudios, redujo sus actividades sociales o pospuso proyectos personales."
            },
            {
              "type": "paragraph",
              "text": "En ocasiones, después de tanto tiempo concentrado en el cuidado, puede sentir que ha dejado de lado aspectos importantes de su propia vida."
            },
            {
              "type": "paragraph",
              "text": "Es posible que se pregunte:"
            },
            {
              "type": "list",
              "items": [
                "¿Qué actividades disfrutaba antes?",
                "¿Qué cosas he dejado de hacer por dedicarme al cuidado?",
                "¿Qué proyectos personales quisiera retomar?",
                "¿Qué necesito para sentirme nuevamente conectado conmigo mismo?"
              ]
            },
            {
              "type": "paragraph",
              "text": "¿Cómo puedo recuperar mis espacios personales?"
            },
            {
              "type": "list",
              "items": [
                "Identifique las actividades que disfrutaba antes del diagnóstico.",
                "Piense en algún interés o proyecto que haya dejado pendiente.",
                "Establezca metas pequeñas y realistas para retomarlos.",
                "Permítase compartir con amigos y personas significativas.",
                "Reconozca que también tiene derecho a disfrutar, descansar y desarrollar sus propios proyectos."
              ]
            },
            {
              "type": "paragraph",
              "text": "No tiene que sentir culpa por dedicar tiempo a su bienestar. Su identidad no se limita a ser madre, padre o cuidador. También es una persona con necesidades, intereses, relaciones y sueños propios."
            },
            {
              "type": "paragraph",
              "text": "Recuerde: Recuperarse emocionalmente también significa volver a reconocerse, valorar sus capacidades y permitirse construir proyectos que incluyan su propio bienestar."
            },
            {
              "type": "heading",
              "text": "Acompañar emocionalmente a mi hijo después del tratamiento"
            },
            {
              "type": "paragraph",
              "text": "La finalización del tratamiento también representa una transición para su hijo. Aunque puede experimentar alegría por regresar a sus actividades, también puede sentir miedo, inseguridad o preocupación por su salud."
            },
            {
              "type": "paragraph",
              "text": "Algunos niños pueden tener dificultades para retomar las actividades escolares, relacionarse con otros niños, separarse de sus padres o adaptarse nuevamente a las rutinas."
            },
            {
              "type": "paragraph",
              "text": "Otros pueden recordar experiencias difíciles relacionadas con las hospitalizaciones, los procedimientos o los efectos del tratamiento."
            },
            {
              "type": "heading",
              "text": "¿Cómo puede acompañarlo emocionalmente?"
            },
            {
              "type": "list",
              "items": [
                "Escúchelo sin juzgar: permita que exprese sus preocupaciones, incluso cuando no sepa exactamente qué responder.",
                "Hable con sinceridad: utilice palabras sencillas y apropiadas para su edad. No prometa que nunca volverá a enfermar.",
                "Reconozca sus emociones: evite expresiones como «no llores», «no tengas miedo» o «eso ya pasó». Puede decirle: «Entiendo que tengas miedo, estoy aquí para escucharte».",
                "Favorezca su autonomía: permita que recupere progresivamente actividades y responsabilidades apropiadas para su edad.",
                "Acompañe su regreso a la escuela: converse con los docentes y coordine con el equipo tratante las recomendaciones necesarias para su reincorporación.",
                "Respete su ritmo: algunos niños necesitan más tiempo para recuperar la confianza y sentirse seguros."
              ]
            },
            {
              "type": "heading",
              "text": "¿Qué señales pueden indicar que mi hijo necesita apoyo psicológico?"
            },
            {
              "type": "paragraph",
              "text": "Preste atención a cambios persistentes como:"
            },
            {
              "type": "list",
              "items": [
                "Tristeza frecuente o pérdida de interés por actividades que antes disfrutaba.",
                "Miedo intenso a separarse de sus padres.",
                "Alteraciones importantes del sueño.",
                "Irritabilidad o cambios de comportamiento que dificultan su vida cotidiana.",
                "Recuerdos angustiantes de las experiencias médicas.",
                "Dificultades para regresar a la escuela o relacionarse con otros niños."
              ]
            },
            {
              "type": "paragraph",
              "text": "Si observa estas manifestaciones, consulte con el equipo de salud para valorar la necesidad de acompañamiento psicológico infantil."
            },
            {
              "type": "paragraph",
              "text": "Recuerde: No necesita tener todas las respuestas. A veces, escuchar, brindar seguridad y acompañar a su hijo en sus emociones es una de las formas más importantes de apoyarlo."
            },
            {
              "type": "heading",
              "text": "Seguir cuidando mi bienestar y reconocer cuándo necesito ayuda"
            },
            {
              "type": "paragraph",
              "text": "La finalización del tratamiento no significa que todas las experiencias difíciles hayan desaparecido. Algunas preocupaciones pueden continuar durante los controles médicos y otras pueden aparecer tiempo después."
            },
            {
              "type": "paragraph",
              "text": "Es posible que haya mantenido sus emociones en segundo plano durante meses o años porque su prioridad era atender a su hijo. Ahora puede comenzar a reconocer cómo le ha afectado esta experiencia."
            },
            {
              "type": "heading",
              "text": "¿Cuándo debo buscar acompañamiento psicológico?"
            },
            {
              "type": "paragraph",
              "text": "Considere solicitar valoración profesional cuando:"
            },
            {
              "type": "list",
              "items": [
                "El miedo a la recaída ocupa gran parte de sus pensamientos y no le permite disfrutar de la vida cotidiana.",
                "Experimenta ansiedad intensa antes, durante o después de los controles médicos.",
                "Presenta recuerdos recurrentes y angustiantes de la hospitalización o el tratamiento.",
                "Evita situaciones que le recuerdan la enfermedad y esto limita sus actividades.",
                "Continúa experimentando tristeza, irritabilidad o desesperanza que afectan sus relaciones.",
                "Tiene dificultades persistentes para dormir, trabajar o retomar sus actividades.",
                "Siente que no ha podido adaptarse a los cambios familiares después del tratamiento."
              ]
            },
            {
              "type": "heading",
              "text": "¿Dónde puede buscar ayuda?"
            },
            {
              "type": "list",
              "items": [
                "Psicología del servicio de oncología pediátrica.",
                "Profesionales de salud mental de su institución de salud.",
                "Programas de seguimiento de supervivientes de cáncer infantil.",
                "Trabajo social y organizaciones de apoyo a familias.",
                "Servicios de salud mental y atención en salud de su red de prestación de servicios."
              ]
            },
            {
              "type": "paragraph",
              "text": "Si experimenta pensamientos de hacerse daño o de no querer vivir, busque atención inmediata en urgencias."
            },
            {
              "type": "heading",
              "text": "Un mensaje para usted:"
            },
            {
              "type": "paragraph",
              "text": "Ha acompañado a su hijo en una etapa que probablemente transformó su vida. Reconocer lo que ha vivido, atender sus propias necesidades y aceptar ayuda también forman parte de su proceso de recuperación."
            },
            {
              "type": "paragraph",
              "text": "No tiene que dejar de preocuparse de un día para otro. Puede aprender a convivir con la incertidumbre sin permitir que el miedo ocupe todos sus espacios."
            }
          ]
        },
        {
          "id": "m9-s4",
          "title": "¿Cuándo buscar ayuda psicológica?",
          "blocks": [
            {
              "type": "paragraph",
              "text": "Reconocer lo que siente también es una forma de cuidarse. No tiene que esperar a sentirse desbordado para pedir ayuda."
            },
            {
              "type": "heading",
              "text": "Reconozca las señales de alerta emocional"
            },
            {
              "type": "paragraph",
              "text": "Preste atención si presenta:"
            },
            {
              "type": "list",
              "items": [
                "Tristeza o ansiedad persistentes.",
                "Dificultad para dormir o descansar.",
                "Irritabilidad o sensación de agotamiento constante.",
                "Aislamiento de familiares y amigos.",
                "Dificultad para realizar sus actividades cotidianas."
              ]
            },
            {
              "type": "heading",
              "text": "¿Cuándo solicitar orientación psicológica?"
            },
            {
              "type": "paragraph",
              "text": "Busque acompañamiento profesional cuando sus emociones sean intensas, persistan o interfieran con su bienestar, sus relaciones y sus actividades diarias."
            },
            {
              "type": "paragraph",
              "text": "Puede acudir al servicio de psicología de su institución de salud."
            }
          ]
        },
        {
          "id": "m9-s5",
          "title": "Mensaje final",
          "blocks": [
            {
              "type": "heading",
              "text": "Un mensaje para usted"
            },
            {
              "type": "paragraph",
              "text": "A lo largo de este camino ha acompañado a su hijo en momentos difíciles, ha enfrentado preocupaciones, cambios y desafíos que quizás nunca imaginó vivir."
            },
            {
              "type": "paragraph",
              "text": "En medio de tantas responsabilidades, recuerde que usted también importa. Sus emociones merecen ser escuchadas, su cuerpo necesita descanso y su corazón necesita espacios para recuperar fuerzas."
            },
            {
              "type": "paragraph",
              "text": "No tiene que ser fuerte todo el tiempo, ni resolverlo todo por su cuenta. Permítase sentir, descansar, compartir sus preocupaciones y aceptar la ayuda de quienes le rodean."
            },
            {
              "type": "paragraph",
              "text": "Recuerde que cuidar de usted no significa querer menos a su hijo. Significa reconocer que su bienestar también merece atención."
            },
            {
              "type": "paragraph",
              "text": "No olvide:"
            },
            {
              "type": "list",
              "items": [
                "Dese permiso para descansar.",
                "Reconozca sus emociones sin juzgarse.",
                "Acepte el apoyo de las personas que le quieren.",
                "Busque ayuda profesional cuando la necesite.",
                "Conserve sus sueños, sus proyectos y sus espacios personales."
              ]
            },
            {
              "type": "paragraph",
              "text": "Sus manos también necesitan cuidado."
            },
            {
              "type": "paragraph",
              "text": "Ha estado presente para cuidar, acompañar y dar amor. Ahora recuerde incluirse también en ese cuidado."
            }
          ]
        }
      ],
      "do": [
        "Reconocer sus emociones sin juzgarse.",
        "Reservar momentos para descansar y atender sus necesidades.",
        "Compartir responsabilidades con personas de confianza y solicitar apoyo profesional cuando lo necesite."
      ],
      "avoid": [
        "Exigirse resolver todo a la vez o hacerlo todo perfectamente.",
        "Dejar de atender sus necesidades de descanso y alimentación.",
        "Afrontar en soledad las dificultades cuando puede pedir apoyo."
      ],
      "consult": [
        "Emociones intensas o persistentes que interfieren con su bienestar y sus actividades.",
        "Dificultad importante para dormir, alimentarse o afrontar las responsabilidades del cuidado.",
        "Si aparecen pensamientos de hacerse daño o de no querer continuar viviendo, busque atención profesional inmediata o acuda a urgencias."
      ],
      "checklist": [
        "Identifiqué una persona que puede ayudarme.",
        "Tomé una pausa breve para comer, descansar o respirar.",
        "Anoté lo que necesito preguntar o solicitar."
      ],
      "introduction": [],
      "jumpLinks": [
        {
          "label": "Diagnóstico",
          "sectionId": "m9-s1"
        },
        {
          "label": "Tratamiento",
          "sectionId": "m9-s2"
        },
        {
          "label": "Después del tratamiento",
          "sectionId": "m9-s3"
        },
        {
          "label": "Buscar ayuda",
          "sectionId": "m9-s4"
        }
      ],
      "sources": [
        {
          "number": 5,
          "label": "Apoyo a las familias",
          "citation": "National Cancer Institute. Support for Families: Childhood Cancer.",
          "url": "https://www.cancer.gov/about-cancer/coping/caregiver-support/parents"
        },
        {
          "number": 6,
          "label": "Bienestar del cuidador",
          "citation": "Instituto Nacional del Cáncer. Apoyo para cuidadores de personas con cáncer.",
          "url": "https://www.cancer.gov/espanol/cancer/sobrellevar/apoyo-a-quien-cuida"
        }
      ]
    },
    {
      "id": 11,
      "title": "Trasplante de células madre hematopoyéticas",
      "shortTitle": "Trasplante de células madre",
      "icon": "cells",
      "tone": "gold",
      "summary": "Qué es el TCMH, cómo es el proceso y qué cuidados seguir antes, durante y después.",
      "objective": "Comprender el trasplante, sus etapas y los cuidados antes, durante y después, siguiendo las indicaciones del equipo de trasplante.",
      "image": "assets/images/trasplante-acompanamiento.webp",
      "imageAlt": "Un niño y su cuidadora conversan con una profesional de salud que sostiene una carpeta.",
      "imageWidth": 1536,
      "imageHeight": 1024,
      "imageFit": "contain",
      "keyMessages": [
        "La indicación del trasplante es individual: no todos los niños con LLA lo necesitan.",
        "En la LLA pediátrica, el trasplante alogénico tiene mayor relevancia clínica; ambos tipos no tienen la misma utilización.",
        "La prevención de infecciones, la adherencia al tratamiento y el seguimiento continúan después del trasplante.",
        "No suspenda, modifique o duplique medicamentos sin indicación del equipo tratante.",
        "Siga el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante."
      ],
      "sections": [
        {
          "title": "¿Qué es el trasplante?",
          "text": "El trasplante de células madre hematopoyéticas (TCMH) es un procedimiento mediante el cual se administran células capaces de reconstruir el sistema hematopoyético después de un tratamiento previo que puede producir una supresión profunda de la médula ósea.",
          "bullets": [
            "Las células pueden proceder del propio paciente: trasplante autólogo.",
            "Las células pueden proceder de un donante: trasplante alogénico.",
            "Pueden obtenerse de sangre periférica, médula ósea o sangre de cordón umbilical."
          ]
        },
        {
          "title": "¿Qué hace la médula ósea?",
          "text": "La médula ósea produce las células sanguíneas necesarias para el organismo. La recuperación de esta producción es una parte fundamental del proceso de trasplante.",
          "bullets": [
            "Glóbulos rojos: transportan oxígeno.",
            "Glóbulos blancos: participan en la defensa contra infecciones.",
            "Plaquetas: participan en la coagulación y ayudan a prevenir sangrados."
          ]
        },
        {
          "title": "¿Por qué puede necesitarlo mi hijo?",
          "text": "En la LLA, el trasplante alogénico puede utilizarse en determinados pacientes, especialmente aquellos con alto riesgo de recaída o enfermedad en recaída, de acuerdo con las características de la enfermedad y la respuesta al tratamiento.",
          "note": "El equipo de hematología-oncología determina si el trasplante es apropiado considerando las características de la leucemia, la respuesta al tratamiento, el riesgo de recaída, el estado clínico del niño y la disponibilidad de un donante adecuado, entre otros factores."
        },
        {
          "title": "Tipos de trasplante",
          "text": "En el trasplante autólogo, las células proceden del propio paciente. Se recolectan, se conservan y se administran después del acondicionamiento.",
          "paragraphs": [
            "En el trasplante alogénico, las células proceden de otra persona. El donante puede ser un hermano o hermana compatible, un familiar compatible, un donante no relacionado compatible o, en determinadas circunstancias, un donante haploidéntico. El centro puede seleccionar otras fuentes celulares.",
            "La selección considera la compatibilidad HLA, las características del paciente y la disponibilidad del donante. Las células inmunológicas del donante pueden reconocer células malignas del receptor: es el efecto injerto contra leucemia. También pueden reconocer tejidos sanos y producir enfermedad injerto contra huésped."
          ],
          "note": "En la LLA pediátrica, el trasplante alogénico es el escenario de mayor relevancia clínica. Los dos tipos no tienen la misma utilización en esta enfermedad."
        },
        {
          "title": "¿De dónde vienen las células?",
          "text": "Las células pueden proceder de sangre periférica, médula ósea o sangre de cordón umbilical.",
          "bullets": [
            "Sangre periférica: las células se movilizan hacia la sangre y se recolectan mediante aféresis.",
            "Médula ósea: se obtienen mediante un procedimiento realizado bajo condiciones médicas especializadas."
          ]
        },
        {
          "title": "Antes del trasplante: evaluación",
          "text": "Se realiza una valoración integral del niño. Permite identificar riesgos y establecer estrategias preventivas.",
          "bullets": [
            "Evaluación de la enfermedad y estudios de laboratorio.",
            "Evaluación de órganos y estudios infecciosos.",
            "Valoración nutricional y evaluación odontológica cuando esté indicada.",
            "Valoración psicosocial.",
            "Evaluación del donante y compatibilidad."
          ]
        },
        {
          "title": "Antes del trasplante: acondicionamiento",
          "text": "El niño recibe un régimen de acondicionamiento que puede incluir quimioterapia con o sin radioterapia, según el protocolo y sus características.",
          "bullets": [
            "Reducir o eliminar células malignas residuales.",
            "Preparar el organismo para recibir el injerto.",
            "Proporcionar inmunosupresión suficiente para favorecer el establecimiento del injerto."
          ],
          "note": "No todos los niños reciben exactamente el mismo esquema."
        },
        {
          "title": "Día 0: recibimos las células madre",
          "text": "El día en que se administran las células madre suele denominarse día 0. Se administran por vía intravenosa a través del acceso vascular indicado por el equipo de salud, de manera similar a una transfusión. No se realiza una cirugía para colocar las células directamente dentro de los huesos.",
          "paragraphs": [
            "Durante la infusión, el equipo vigila al niño para identificar posibles reacciones. Informe inmediatamente al personal de salud si observa:"
          ],
          "bullets": [
            "Dificultad respiratoria, escalofríos o fiebre.",
            "Dolor, náuseas o vómitos.",
            "Cambios en el estado general o cualquier manifestación que le genere preocupación."
          ],
          "note": "No intente tratar la reacción por cuenta propia."
        },
        {
          "title": "Injerto o prendimiento",
          "text": "Después de la infusión, las células madre llegan a la médula ósea y comienzan progresivamente a producir nuevas células sanguíneas. Este proceso se conoce como injerto o prendimiento hematopoyético.",
          "note": "Durante este período puede haber una profunda disminución de las células sanguíneas. El niño requiere vigilancia estrecha."
        },
        {
          "title": "Ahora comienza la recuperación",
          "text": "El seguimiento continúa después del injerto. El equipo vigila:",
          "bullets": [
            "Recuperación hematológica e inmunológica.",
            "Infecciones, toxicidades y enfermedad injerto contra huésped.",
            "Funcionamiento de órganos y estado nutricional.",
            "Medicamentos, vacunación y posibles efectos tardíos."
          ],
          "note": "Entre las complicaciones que vigila el equipo están la fiebre neutropénica, infecciones bacterianas, fúngicas y virales, sangrado, fallo del injerto, complicaciones endoteliales y EICH aguda y crónica."
        },
        {
          "title": "Prevención de infecciones",
          "text": "Antes del trasplante se realizan evaluaciones para identificar infecciones previas y factores de riesgo. Después del trasplante puede haber una importante disminución de las defensas, por lo que se mantiene la vigilancia.",
          "bullets": [
            "Mantenga una higiene adecuada de manos y del entorno.",
            "Evite el contacto cercano con personas enfermas.",
            "Informe si algún integrante del hogar presenta síntomas infecciosos.",
            "Cumpla las recomendaciones del centro de trasplante.",
            "Siga las indicaciones relacionadas con medicamentos preventivos."
          ],
          "links": [
            {
              "label": "Repasar prevención de infecciones",
              "url": "#/modulo/6"
            }
          ]
        },
        {
          "title": "Medicamentos",
          "text": "Aprenda junto con el equipo: qué medicamento administrará, para qué sirve, qué dosis, a qué hora, cómo administrarlo, qué hacer si el niño vomita y cuándo informar.",
          "note": "No suspender, modificar o duplicar medicamentos sin indicación del equipo tratante.",
          "paragraphs": [
            "En los trasplantes alogénicos pueden utilizarse medicamentos para prevenir o tratar complicaciones inmunológicas como la enfermedad injerto contra huésped."
          ],
          "links": [
            {
              "label": "Repasar administración de medicamentos",
              "url": "#/modulo/4"
            }
          ]
        },
        {
          "title": "Alimentación segura",
          "text": "Siga las recomendaciones individualizadas del equipo de nutrición.",
          "bullets": [
            "Higiene de manos antes de preparar alimentos.",
            "Manipulación y almacenamiento seguros.",
            "Agua segura y cocción adecuada."
          ],
          "note": "Las recomendaciones alimentarias pueden variar según el momento del trasplante y las condiciones clínicas del niño. Siga las indicaciones del equipo tratante.",
          "links": [
            {
              "label": "Repasar alimentación",
              "url": "#/modulo/5"
            }
          ]
        },
        {
          "title": "También debemos prepararnos emocionalmente",
          "text": "La educación y el acompañamiento ayudan a comprender el cuidado y a expresar las preocupaciones de la familia.",
          "bullets": [
            "Pregunte al equipo cuando algo no sea comprendido.",
            "Exprese preocupaciones y temores.",
            "Busque apoyo psicológico cuando esté disponible.",
            "Mantenga comunicación con familiares y redes de apoyo.",
            "Prepare con anticipación los elementos necesarios para la hospitalización.",
            "Defina quién será el cuidador principal y quién puede brindar apoyo."
          ],
          "links": [
            {
              "label": "Consultar apoyo al cuidador",
              "url": "#/modulo/9"
            }
          ]
        },
        {
          "title": "Sangrado y otras complicaciones",
          "text": "La disminución de plaquetas puede aumentar el riesgo de sangrado. Comunique al equipo:",
          "bullets": [
            "Sangrado nasal persistente.",
            "Sangre en orina o deposiciones.",
            "Vómito con sangre.",
            "Aparición extensa o inusual de hematomas.",
            "Cualquier sangrado que genere preocupación."
          ]
        },
        {
          "title": "Enfermedad injerto contra huésped (EICH)",
          "text": "En el trasplante alogénico, algunas células inmunitarias del donante pueden reconocer tejidos del receptor como diferentes y generar una respuesta inmunológica. Esto se conoce como enfermedad injerto contra huésped (EICH o GVHD). Puede afectar la piel, el hígado y el tracto gastrointestinal, entre otros órganos.",
          "bullets": [
            "Piel: erupciones o cambios nuevos.",
            "Digestivo: diarrea o cambios gastrointestinales importantes.",
            "Hígado: cambios clínicos que el equipo haya indicado vigilar."
          ],
          "note": "Es una complicación potencialmente grave. El cuidador no debe diagnosticar EICH: debe reconocer cambios y comunicarlos oportunamente al equipo tratante."
        },
        {
          "title": "Signos de alarma: ¿cuándo debo consultar?",
          "text": "Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante.",
          "paragraphs": [
            "Consulte inmediatamente según las indicaciones recibidas ante:"
          ],
          "bullets": [
            "Fiebre o temperatura por encima del límite indicado por el equipo.",
            "Dificultad para respirar o sangrado.",
            "Cambios importantes en el estado de conciencia o comportamiento.",
            "Convulsiones.",
            "Vómitos persistentes.",
            "Diarrea importante o persistente.",
            "Dolor intenso o nuevo.",
            "Erupciones o cambios importantes en la piel.",
            "Disminución marcada de la cantidad de orina.",
            "Imposibilidad para tomar medicamentos o líquidos.",
            "Cualquier deterioro repentino del estado general."
          ],
          "note": "La fiebre y la neutropenia requieren valoración clínica y manejo oportunos por el equipo de salud."
        },
        {
          "title": "Cuidados en casa",
          "text": "Antes de regresar a casa, revise las indicaciones junto con el equipo:",
          "bullets": [
            "Higiene: lavado de manos, higiene personal y limpieza del entorno.",
            "Medicamentos: nombre, dosis, horario, vía, almacenamiento y qué hacer ante dificultades de administración.",
            "Catéter: reconocer cambios en el sitio, mantener los cuidados indicados e informar signos de infección o complicaciones.",
            "Alimentación: seguridad alimentaria, hidratación y recomendaciones individualizadas.",
            "Controles: citas, laboratorios, medicamentos y seguimiento del injerto.",
            "Signos de alarma: qué observar, a quién llamar y dónde acudir."
          ]
        },
        {
          "title": "Mi plan de cuidados después del trasplante",
          "text": "Imprima la hoja y complétela a mano junto con el equipo. Incluye la temperatura de alarma, el servicio de atención, medicamentos, horarios, cuidado del catéter, próximo control y signos de alarma específicos.",
          "links": [
            {
              "label": "Abrir mi plan de cuidados",
              "url": "recursos/plan-cuidados-trasplante.html"
            }
          ]
        },
        {
          "title": "Comprender, identificar, actuar y consultar",
          "text": "Use estas preguntas para conversar con el equipo de salud:",
          "bullets": [
            "Comprender: ¿qué es el trasplante?",
            "Identificar: ¿qué cambios debo observar en mi hijo?",
            "Actuar: ¿qué debo hacer si aparecen?",
            "Consultar: siga las indicaciones y la ruta acordadas con el equipo tratante."
          ]
        }
      ],
      "do": [
        "Cumplir las recomendaciones del centro de trasplante y el tratamiento indicado.",
        "Mantener la higiene de manos, del entorno y de los alimentos.",
        "Comunicar cambios o preocupaciones al equipo.",
        "Preparar el plan de cuidados y acudir a los controles."
      ],
      "avoid": [
        "Suspender, modificar o duplicar medicamentos sin indicación.",
        "Tratar por cuenta propia una reacción durante la infusión.",
        "Intentar diagnosticar EICH.",
        "Ignorar un deterioro repentino del estado general."
      ],
      "consult": [
        "Fiebre o temperatura por encima del límite indicado por el equipo de trasplante.",
        "Dificultad respiratoria, sangrado, convulsiones o cambios de conciencia.",
        "Vómitos o diarrea persistentes, dolor intenso, cambios importantes en la piel o disminución marcada de orina.",
        "Imposibilidad para tomar medicamentos o líquidos, o deterioro repentino del estado general."
      ],
      "consultNote": "Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante.",
      "checklist": [
        "Revisé con el equipo la temperatura de alarma y dónde acudir.",
        "Comprendo las indicaciones de medicamentos y cuidados en casa.",
        "Tengo el plan de controles y sé quién puede apoyarme."
      ]
    },
    {
      "id": 10,
      "title": "Recursos útiles para todo cuidador",
      "shortTitle": "Recursos útiles",
      "icon": "resources",
      "tone": "blue",
      "summary": "Glosario, preguntas frecuentes, calendarios, fuentes y herramientas para organizar el cuidado.",
      "objective": "Encontrar rápidamente información confiable y preparar los recursos esenciales del hogar.",
      "keyMessages": [
        "Guarde la ruta de urgencias y los contactos del equipo en un lugar visible.",
        "Use calendarios y listas para reducir olvidos.",
        "Confirme la información en fuentes oficiales y con el equipo tratante.",
        "No registre datos personales o clínicos en esta versión de la herramienta."
      ],
      "sections": [
        {
          "title": "Kit de información",
          "text": "Conserve una carpeta física o digital con resumen clínico, lista de medicamentos, indicaciones, citas, exámenes y teléfonos. Mantenga una copia disponible para otro cuidador."
        },
        {
          "title": "Calendarios sencillos",
          "text": "Puede usar el calendario del teléfono o una hoja impresa para citas y horarios. No incluya información sensible si comparte el dispositivo."
        },
        {
          "title": "Fuentes confiables",
          "text": "Priorice la información del equipo tratante, el Ministerio de Salud, organismos científicos y centros oncológicos reconocidos. Revise la fecha y el propósito de cada material."
        },
        {
          "title": "Cómo usar esta herramienta",
          "text": "Explore los módulos, marque listas de verificación y use el buscador. El progreso se guarda solo en este navegador y puede eliminarse desde Ajustes."
        }
      ],
      "do": [
        "Guardar contactos y ruta de urgencias.",
        "Mantener una lista de medicamentos y citas.",
        "Revisar el glosario cuando aparezca una palabra nueva.",
        "Compartir la herramienta con los cuidadores autorizados."
      ],
      "avoid": [
        "Guardar nombres, diagnósticos o documentos personales aquí.",
        "Tomar decisiones clínicas solo con información de internet.",
        "Reemplazar las indicaciones del equipo con consejos generales."
      ],
      "consult": [
        "Si necesita ayuda para comprender una indicación.",
        "Si encuentra información contradictoria.",
        "Si una barrera impide asistir, obtener medicamentos o continuar el cuidado."
      ],
      "checklist": [
        "Guardé los contactos esenciales.",
        "Mi lista de medicamentos está actualizada.",
        "Sé dónde encontrar el glosario y las alarmas."
      ]
    }
  ],
  "glossary": [
    {
      "term": "Adherencia",
      "definition": "Cumplir el tratamiento, las citas, los controles y las recomendaciones acordadas con el equipo.",
      "recognize": "La escuchará al hablar de medicamentos y seguimiento.",
      "action": "Informe cualquier barrera que dificulte cumplir el plan.",
      "fact": "Un calendario y un registro diario pueden reducir olvidos."
    },
    {
      "term": "Anemia",
      "definition": "Disminución de glóbulos rojos o hemoglobina.",
      "recognize": "Puede asociarse con palidez, cansancio o poca energía.",
      "action": "Comunique los síntomas y cumpla los controles de sangre.",
      "fact": "Solo un examen permite confirmar su presencia y gravedad."
    },
    {
      "term": "Aspirado de médula ósea",
      "definition": "Procedimiento para obtener una pequeña muestra de médula ósea y estudiarla.",
      "recognize": "Puede solicitarse al diagnóstico o para evaluar la respuesta.",
      "action": "Pregunte cómo prepararse y qué cuidados seguir después.",
      "fact": "La médula ósea no es lo mismo que la médula espinal."
    },
    {
      "term": "Catéter venoso central",
      "definition": "Dispositivo que permite administrar medicamentos y tomar algunas muestras sin punciones repetidas.",
      "recognize": "Puede estar en el pecho o conectado a una vena de mayor calibre.",
      "action": "Siga exactamente las indicaciones de higiene y protección.",
      "fact": "Enrojecimiento, dolor, secreción o daño requieren aviso inmediato."
    },
    {
      "term": "Ciclo de quimioterapia",
      "definition": "Periodo de tratamiento seguido, en algunos protocolos, por un tiempo de recuperación.",
      "recognize": "El equipo lo usa para organizar medicamentos y controles.",
      "action": "Confirme fechas y señales que debe vigilar en casa.",
      "fact": "Los ciclos no son iguales para todos los niños."
    },
    {
      "term": "Cultivo",
      "definition": "Examen que busca microorganismos en sangre u otras muestras.",
      "recognize": "Puede solicitarse cuando hay fiebre o sospecha de infección.",
      "action": "Siga la ruta de atención sin esperar el resultado.",
      "fact": "El tratamiento puede comenzar antes de que el cultivo esté listo."
    },
    {
      "term": "Glóbulos blancos",
      "definition": "Células de la sangre que ayudan a defender el cuerpo de infecciones.",
      "recognize": "También pueden llamarse leucocitos.",
      "action": "Siga las medidas de prevención indicadas cuando estén bajos.",
      "fact": "El número y el tipo se conocen mediante un examen de sangre."
    },
    {
      "term": "Glóbulos rojos",
      "definition": "Células que transportan oxígeno a los tejidos.",
      "recognize": "Cuando están bajos puede haber palidez, cansancio o falta de aire.",
      "action": "Informe cambios y cumpla los controles.",
      "fact": "Contienen hemoglobina, la proteína que transporta oxígeno."
    },
    {
      "term": "Hemoglobina",
      "definition": "Proteína de los glóbulos rojos que transporta oxígeno.",
      "recognize": "Aparece en el cuadro hemático.",
      "action": "Pida al equipo que le explique el resultado en contexto.",
      "fact": "Un valor aislado no define por sí solo una decisión."
    },
    {
      "term": "Leucocitos",
      "definition": "Otro nombre para los glóbulos blancos.",
      "recognize": "Aparece con frecuencia en los exámenes de sangre.",
      "action": "No interprete el valor sin los demás datos clínicos.",
      "fact": "Incluyen varios tipos de células, como los neutrófilos."
    },
    {
      "term": "Médula ósea",
      "definition": "Tejido blando dentro de algunos huesos donde se forman las células de la sangre.",
      "recognize": "Se menciona en el diagnóstico y el seguimiento de la LLA.",
      "action": "Pregunte qué busca cada estudio de médula.",
      "fact": "No es la médula espinal."
    },
    {
      "term": "Mucositis",
      "definition": "Inflamación o lesiones de las mucosas, especialmente de la boca y el tubo digestivo.",
      "recognize": "Puede causar enrojecimiento, dolor, llagas o dificultad para comer.",
      "action": "Mantenga la higiene indicada y comunique lesiones o dolor.",
      "fact": "El equipo puede ofrecer medidas para aliviarla."
    },
    {
      "term": "Neutrófilos",
      "definition": "Tipo de glóbulo blanco importante para defenderse de algunas infecciones.",
      "recognize": "Su cantidad se conoce en el cuadro hemático.",
      "action": "Siga las recomendaciones de prevención y la ruta para fiebre.",
      "fact": "No es posible saber si están bajos solo mirando al niño."
    },
    {
      "term": "Neutropenia",
      "definition": "Disminución del número de neutrófilos.",
      "recognize": "El equipo la identifica mediante un examen de sangre.",
      "action": "Vigile la temperatura y evite exposiciones indicadas.",
      "fact": "La fiebre durante neutropenia puede ser una urgencia."
    },
    {
      "term": "Neutropenia febril",
      "definition": "Fiebre en una persona con neutrófilos bajos; requiere valoración urgente.",
      "recognize": "Puede ser la primera señal de una infección.",
      "action": "Siga de inmediato la ruta de urgencias de su institución.",
      "fact": "No se debe esperar a que aparezcan otros síntomas."
    },
    {
      "term": "Petequias",
      "definition": "Puntos rojos o morados pequeños bajo la piel que no desaparecen al presionar.",
      "recognize": "Pueden aparecer en grupos y relacionarse con plaquetas bajas.",
      "action": "Informe su aparición; si son extensas o hay sangrado, busque atención inmediata.",
      "fact": "No son lo mismo que una irritación común."
    },
    {
      "term": "Plaquetas",
      "definition": "Fragmentos celulares que ayudan a detener el sangrado.",
      "recognize": "Cuando están bajas pueden aparecer petequias, moretones o sangrado.",
      "action": "Evite golpes y siga las recomendaciones del equipo.",
      "fact": "Su cantidad se mide en el cuadro hemático."
    },
    {
      "term": "Punción lumbar",
      "definition": "Procedimiento para obtener líquido cefalorraquídeo o administrar tratamiento, según el protocolo.",
      "recognize": "El equipo explicará preparación, anestesia o sedación y cuidados posteriores.",
      "action": "Siga las instrucciones antes y después del procedimiento.",
      "fact": "Forma parte del diagnóstico o tratamiento en muchos protocolos de LLA."
    },
    {
      "term": "Quimioterapia",
      "definition": "Medicamentos que destruyen células leucémicas o impiden que sigan creciendo.",
      "recognize": "Puede administrarse por distintas vías y en varias fases.",
      "action": "Cumpla el plan y comunique efectos o dificultades.",
      "fact": "No todos los medicamentos ni efectos son iguales."
    },
    {
      "term": "Recaída",
      "definition": "Reaparición de la enfermedad después de un periodo de remisión.",
      "recognize": "Solo puede determinarla el equipo mediante evaluación y estudios.",
      "action": "Cumpla los controles aun cuando el niño se sienta bien.",
      "fact": "Un síntoma aislado no significa necesariamente una recaída."
    },
    {
      "term": "Remisión",
      "definition": "Etapa en la que no se detectan signos de enfermedad con los métodos usados por el equipo.",
      "recognize": "Puede mencionarse después de evaluar la respuesta al tratamiento.",
      "action": "Continúe el tratamiento y seguimiento indicados.",
      "fact": "Remisión no significa suspender el plan por cuenta propia."
    },
    {
      "term": "Sepsis",
      "definition": "Respuesta grave del organismo ante una infección que puede afectar órganos.",
      "recognize": "Puede acompañarse de fiebre o temperatura baja, respiración rápida, somnolencia o empeoramiento marcado.",
      "action": "Requiere atención inmediata.",
      "fact": "La rapidez de la atención es importante."
    },
    {
      "term": "Trombocitopenia",
      "definition": "Disminución del número de plaquetas.",
      "recognize": "Puede relacionarse con petequias, moretones o sangrado.",
      "action": "Informe los cambios y evite medicamentos no autorizados.",
      "fact": "Solo el examen de sangre confirma el nivel de plaquetas."
    },
    {
      "term": "Trasplante de células madre hematopoyéticas (TCMH)",
      "definition": "Procedimiento en el que se administran células capaces de reconstruir la producción de células sanguíneas después del tratamiento previo.",
      "recognize": "El equipo determina de forma individual si está indicado.",
      "action": "Pregunte por las etapas y los cuidados antes, durante y después.",
      "fact": "Las células pueden proceder del propio paciente o de un donante."
    },
    {
      "term": "Injerto o prendimiento",
      "definition": "Proceso en el que las células madre llegan a la médula ósea y comienzan progresivamente a producir nuevas células sanguíneas.",
      "recognize": "Es un momento importante del seguimiento después de la infusión.",
      "action": "Cumpla la vigilancia y los controles indicados.",
      "fact": "El seguimiento continúa después del injerto."
    },
    {
      "term": "Enfermedad injerto contra huésped (EICH)",
      "definition": "Respuesta inmunológica en la que células del donante reconocen tejidos del receptor como diferentes después de un trasplante alogénico.",
      "recognize": "Puede afectar piel, hígado y tracto gastrointestinal, entre otros órganos.",
      "action": "Reconozca cambios y comuníquelos al equipo. No intente diagnosticarla.",
      "fact": "También puede mencionarse con la sigla GVHD."
    }
  ],
  "alarms": {
    "intro": "Use este semáforo como orientación educativa. Siga siempre la ruta y las indicaciones específicas de su institución.",
    "transplantNote": "Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante.",
    "levels": [
      {
        "id": "red",
        "label": "Rojo · Atención inmediata",
        "action": "Acuda de inmediato a urgencias o siga la ruta indicada por el equipo tratante. No dé medicamentos para ocultar los síntomas sin orientación.",
        "items": [
          "Temperatura de 38 °C o más.",
          "Sangrado que no se detiene.",
          "Dificultad para respirar.",
          "Convulsiones, desmayo o confusión.",
          "Somnolencia excesiva o dificultad para despertar.",
          "Dolor intenso que no mejora.",
          "Petequias extensas o moretones llamativos.",
          "Vómito persistente e incapacidad para tolerar líquidos.",
          "Disminución marcada de la orina o signos de deshidratación."
        ]
      },
      {
        "id": "yellow",
        "label": "Amarillo · Comuníquese con el equipo",
        "action": "Contacte al servicio de hemato-oncología para recibir orientación y vigile si aparecen señales rojas.",
        "items": [
          "Náuseas persistentes.",
          "Disminución del apetito durante varios días.",
          "Diarrea leve que continúa.",
          "Estreñimiento.",
          "Dolor moderado.",
          "Lesiones pequeñas o molestias en la boca."
        ]
      },
      {
        "id": "green",
        "label": "Verde · Continúe el cuidado",
        "action": "Continúe las medidas habituales, el tratamiento indicado y los controles programados.",
        "items": [
          "Recibe los medicamentos de acuerdo con la fórmula.",
          "Come y bebe según su tolerancia.",
          "No presenta fiebre ni sangrado.",
          "Mantiene sus controles y el cuidador sabe cómo pedir ayuda."
        ]
      }
    ]
  },
  "faq": [
    {
      "question": "¿La LLA es contagiosa?",
      "answer": "No. La leucemia linfoblástica aguda no se transmite de una persona a otra."
    },
    {
      "question": "¿Fue causada por algo que hicimos?",
      "answer": "No se considera consecuencia de una acción del niño, sus padres o cuidadores. Si tiene dudas sobre factores específicos, hable con el equipo."
    },
    {
      "question": "¿Qué hago si la temperatura llega a 38 °C?",
      "answer": "Siga de inmediato la ruta de urgencias indicada por su institución. No espere ni intente ocultar la fiebre con medicamentos sin orientación. Después de un trasplante, siga siempre el umbral de temperatura y las instrucciones específicas entregadas por el equipo de trasplante."
    },
    {
      "question": "¿Puedo repetir una dosis si el niño vomita?",
      "answer": "No la repita por su cuenta. Comuníquese con el equipo y tenga a mano el nombre, la dosis y la hora del medicamento."
    },
    {
      "question": "¿Puede recibir visitas?",
      "answer": "Depende del momento clínico. En general, evite personas con síntomas y pida a todas las visitas que se laven las manos. Confirme restricciones con el equipo."
    },
    {
      "question": "¿Puede asistir a la escuela?",
      "answer": "La decisión depende de sus defensas, la fase del tratamiento y las condiciones del entorno. Acuérdela con el equipo tratante y la institución educativa."
    },
    {
      "question": "¿Puede comer alimentos crudos?",
      "answer": "Evite carnes, huevos y otros alimentos crudos o poco cocidos. Siga las restricciones específicas del equipo o nutricionista."
    },
    {
      "question": "¿Esta herramienta reemplaza una consulta?",
      "answer": "No. Es un recurso educativo y no reemplaza valoración, diagnóstico, tratamiento ni seguimiento profesional."
    }
  ],
  "resources": [
    {
      "label": "Ministerio de Salud de Colombia · Guías de práctica clínica",
      "url": "https://gpc.minsalud.gov.co",
      "kind": "Fuente nacional"
    },
    {
      "label": "Instituto Nacional de Cancerología de Colombia",
      "url": "https://www.cancer.gov.co",
      "kind": "Fuente nacional"
    },
    {
      "label": "OMS · Cáncer infantil",
      "url": "https://www.who.int/news-room/fact-sheets/detail/cancer-in-children",
      "kind": "Organismo internacional"
    },
    {
      "label": "Together by St. Jude",
      "url": "https://together.stjude.org",
      "kind": "Educación para familias"
    },
    {
      "label": "Children's Oncology Group · Manual para familias",
      "url": "https://www.childrensoncologygroup.org/cog-family-handbook",
      "kind": "Educación para familias"
    },
    {
      "label": "Cancer.Net · LLA infantil",
      "url": "https://www.cancer.net/cancer-types/leukemia-childhood-acute-lymphoblastic-all",
      "kind": "Información oncológica"
    },
    {
      "label": "American Cancer Society · Leucemia infantil",
      "url": "https://www.cancer.org/cancer/types/leukemia-in-children.html",
      "kind": "Información oncológica"
    },
    {
      "label": "Fiebre y neutropenia",
      "url": "https://doi.org/10.1200/JCO.22.02224",
      "kind": "Fuente educativa"
    },
    {
      "label": "Alimentación segura",
      "url": "https://doi.org/10.1016/j.eclinm.2025.103093",
      "kind": "Fuente educativa"
    },
    {
      "label": "Fiebre y signos de infección",
      "url": "https://together.stjude.org/es-us/treatment-tests-procedures/symptoms-side-effects/fever-and-signs-of-infection.html",
      "kind": "Fuente educativa"
    },
    {
      "label": "Comunicación según el desarrollo",
      "url": "https://together.stjude.org/es-us/emotional-support-daily-life/parents/talking-to-your-child-about-cancer/age-appropriate-information.html",
      "kind": "Fuente educativa"
    },
    {
      "label": "Apoyo a las familias",
      "url": "https://www.cancer.gov/about-cancer/coping/caregiver-support/parents",
      "kind": "Fuente educativa"
    },
    {
      "label": "Bienestar del cuidador",
      "url": "https://www.cancer.gov/espanol/cancer/sobrellevar/apoyo-a-quien-cuida",
      "kind": "Fuente educativa"
    },
    {
      "label": "Azúcar y cáncer",
      "url": "https://www.cancer.gov/about-cancer/causes-prevention/risk/myths",
      "kind": "Fuente educativa"
    },
    {
      "label": "Medicamentos y comportamiento",
      "url": "https://together.stjude.org/en-us/medical-care/medication-management/steroid-medicines-and-behavior.html",
      "kind": "Fuente educativa"
    },
    {
      "label": "LLA y estudios diagnósticos",
      "url": "https://www.cancer.gov/espanol/tipos/leucemia/paciente/tratamiento-lla-infantil-pdq",
      "kind": "Fuente educativa"
    }
  ],
  "generalPrintables": [
    "Ruta y contactos esenciales",
    "Plan semanal de medicamentos",
    "Citas, exámenes y preguntas"
  ]
});
})();
