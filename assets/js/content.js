(function () {
  "use strict";

  const modules = [
    {
      id: 1,
      title: "Conociendo la LLA",
      shortTitle: "La LLA",
      icon: "book",
      tone: "blue",
      summary: "Qué es la leucemia linfoblástica aguda, cómo se confirma y qué significa el diagnóstico.",
      objective: "Comprender la enfermedad con palabras claras y reconocer el papel del cuidador durante el proceso.",
      image: "assets/images/celulas-sangre.webp",
      imageAlt: "Representación educativa de glóbulos rojos, glóbulos blancos y plaquetas.",
      keyMessages: [
        "La LLA es el cáncer más frecuente en la infancia y afecta células que forman parte de los glóbulos blancos.",
        "No es contagiosa y no aparece por algo que hayan hecho los padres o cuidadores.",
        "Con diagnóstico oportuno y tratamiento adecuado, muchos niños logran superar la enfermedad.",
        "El tratamiento puede durar meses o años y requiere controles periódicos.",
        "El cuidador es una parte fundamental del equipo de cuidado."
      ],
      sections: [
        {
          title: "¿Qué ocurre en la sangre?",
          text: "La médula ósea produce las células de la sangre. En la LLA se forman demasiadas células inmaduras llamadas linfoblastos, que desplazan a las células sanas.",
          bullets: ["Menos glóbulos rojos puede causar cansancio o palidez.", "Menos plaquetas puede facilitar moretones o sangrado.", "Menos glóbulos blancos sanos puede aumentar el riesgo de infección."]
        },
        {
          title: "Señales que pueden llevar al diagnóstico",
          text: "Los síntomas también pueden aparecer en otras enfermedades. Solo el equipo de salud puede establecer el diagnóstico.",
          bullets: ["Fiebre o infecciones repetidas.", "Palidez, cansancio o poca energía.", "Moretones, petequias o sangrado.", "Dolor de huesos o articulaciones.", "Ganglios aumentados o abdomen inflamado."]
        },
        {
          title: "¿Cómo se confirma?",
          text: "El equipo tratante puede solicitar un cuadro hemático y estudios de médula ósea. También puede indicar otros exámenes para conocer el tipo de leucemia y planear el tratamiento.",
          note: "Pida que le expliquen cada examen y anote las dudas antes de la consulta."
        },
        {
          title: "Pronóstico y seguimiento",
          text: "Cada niño es diferente. La respuesta al tratamiento, los resultados de los estudios y otros factores orientan al equipo tratante. Evite comparar procesos o cifras sin contexto clínico."
        }
      ],
      do: ["Consultar fuentes recomendadas por el equipo de salud.", "Participar en las consultas y anotar preguntas.", "Comunicar cambios en el estado del niño.", "Explicar lo que ocurre con palabras apropiadas para su edad."],
      avoid: ["Confiar en cadenas o publicaciones sin fuente.", "Comparar el caso con el de otros niños.", "Ocultar síntomas por miedo o vergüenza.", "Interrumpir controles o tratamiento."],
      consult: ["Si no comprende el diagnóstico o una indicación.", "Si aparece un síntoma nuevo.", "Si necesita orientación para el cuidado en casa."],
      checklist: ["Anoté mis preguntas para la próxima consulta.", "Sé cómo contactar al equipo tratante.", "Puedo explicar con mis palabras qué es la LLA."]
    },
    {
      id: 2,
      title: "Tratamiento",
      shortTitle: "Tratamiento",
      icon: "iv",
      tone: "teal",
      summary: "Objetivos, fases de la quimioterapia, procedimientos y controles durante el tratamiento.",
      objective: "Anticipar los principales momentos del tratamiento y saber qué preguntar al equipo de hemato-oncología.",
      keyMessages: [
        "El plan de tratamiento se adapta al tipo de LLA y a la respuesta de cada niño.",
        "La quimioterapia se administra por etapas y puede usar distintas vías.",
        "Los controles permiten vigilar la respuesta y prevenir o tratar complicaciones.",
        "Nunca cambie el plan sin hablar con el equipo tratante."
      ],
      sections: [
        { title: "¿Qué busca el tratamiento?", text: "Eliminar las células leucémicas, alcanzar la remisión, mantenerla y disminuir el riesgo de recaída. El equipo explicará el objetivo de cada fase." },
        { title: "Fases que puede escuchar", text: "Los nombres y la duración pueden variar según el protocolo.", bullets: ["Inducción: busca alcanzar la remisión.", "Consolidación o intensificación: actúa sobre células que puedan quedar.", "Mantenimiento: ayuda a conservar la remisión durante un periodo prolongado."] },
        { title: "Procedimientos frecuentes", text: "Pueden incluir punción lumbar, aspirado de médula ósea, transfusiones, estudios de laboratorio y cuidado de un catéter venoso central.", note: "Antes de cada procedimiento pregunte para qué sirve, cómo prepararse y qué cuidados se necesitan después." },
        { title: "Hospitalización y controles", text: "Algunas etapas requieren hospitalización; otras permiten continuar parte del cuidado en casa. Cumpla las fechas de laboratorio y consulta indicadas." }
      ],
      do: ["Llevar una lista actualizada de medicamentos.", "Cumplir citas, exámenes y recomendaciones.", "Preguntar qué debe vigilar después de cada procedimiento.", "Guardar los teléfonos y rutas de atención."],
      avoid: ["Modificar fechas, dosis o procedimientos por cuenta propia.", "Retirarse de la institución sin comprender las indicaciones.", "Comparar protocolos entre pacientes."],
      consult: ["Si una cita o medicamento no está disponible.", "Si no entiende una fase o procedimiento.", "Ante cualquier cambio clínico o signo de alarma."],
      checklist: ["Conozco la próxima cita o control.", "Tengo el plan de tratamiento a la mano.", "Sé qué señales debo vigilar hoy."]
    },
    {
      id: 3,
      title: "Cuidados en casa",
      shortTitle: "En casa",
      icon: "homeHeart",
      tone: "blue",
      summary: "Higiene, descanso, actividad, visitas, escuela y protección cotidiana.",
      objective: "Organizar un entorno seguro sin aislar innecesariamente al niño ni interrumpir su vida familiar.",
      keyMessages: [
        "La rutina diaria puede adaptarse a la energía y las indicaciones del equipo.",
        "La higiene de manos y el cuidado de la boca y la piel ayudan a prevenir complicaciones.",
        "El aislamiento protector no significa encierro total.",
        "Las recomendaciones pueden cambiar según las defensas y la fase del tratamiento."
      ],
      sections: [
        { title: "Higiene diaria", text: "Mantenga baño regular, ropa limpia y uñas cortas. Use los productos indicados y observe piel, boca y zona del catéter.", bullets: ["Cepillo de dientes suave si el equipo lo autoriza.", "No comparta utensilios de higiene.", "Avise si hay heridas, enrojecimiento, dolor o secreción."] },
        { title: "Descanso y actividad", text: "Permita descansos y actividad suave según tolerancia. El niño no debe esforzarse si está mareado, muy cansado o con dolor. Consulte qué actividades son seguras." },
        { title: "Visitas, escuela y salidas", text: "Evite el contacto con personas enfermas. La asistencia a la escuela, los viajes y los lugares concurridos deben acordarse con el equipo tratante según el momento clínico." },
        { title: "Entorno protector", text: "Mantenga espacios limpios y ventilados, lave frutas y verduras, higienice objetos de uso frecuente y siga las indicaciones sobre mascotas." }
      ],
      do: ["Lavarse las manos al llegar y antes de cuidar al niño.", "Ventilar y limpiar las superficies de contacto frecuente.", "Mantener una rutina flexible de sueño, juego y estudio.", "Consultar antes de viajes, vacunas o actividades nuevas."],
      avoid: ["Recibir visitas con síntomas respiratorios o digestivos.", "Usar productos irritantes sin orientación.", "Forzar la actividad cuando hay agotamiento.", "Convertir el cuidado protector en aislamiento total."],
      consult: ["Si aparecen lesiones en piel o boca.", "Si el niño deja de comer, beber u orinar con normalidad.", "Si hay dudas sobre escuela, mascotas, viajes o actividad física."],
      checklist: ["La casa está ventilada y las superficies limpias.", "Las visitas saben que no deben venir si están enfermas.", "Tengo a mano los elementos de higiene indicados."]
    },
    {
      id: 4,
      title: "Medicamentos",
      shortTitle: "Medicamentos",
      icon: "medicine",
      tone: "teal",
      summary: "Administración segura, horarios, almacenamiento y qué hacer ante dudas.",
      objective: "Reducir errores en casa y fortalecer la adherencia al tratamiento indicado.",
      keyMessages: [
        "Administre cada medicamento en la dosis, vía y horario formulados.",
        "No cambie ni suspenda un medicamento sin autorización.",
        "Use un registro diario para evitar olvidos o duplicaciones.",
        "Conserve los medicamentos según las instrucciones de la etiqueta y del equipo."
      ],
      sections: [
        { title: "Antes de administrar", text: "Confirme el nombre del niño, el medicamento, la dosis, la vía y la hora. Si algo no coincide con la fórmula, deténgase y consulte." },
        { title: "Medición y registro", text: "Use jeringas o dispositivos de medición, no cucharas caseras. Registre inmediatamente cada dosis y mantenga un listado actualizado." },
        { title: "Almacenamiento", text: "Mantenga los medicamentos en su empaque, fuera del alcance de niños y separados de alimentos cuando así se indique. Respete refrigeración, luz y fecha de vencimiento." },
        { title: "Si hay vómito u olvido", text: "No repita ni duplique la dosis por su cuenta. Llame al equipo para recibir una indicación específica según el medicamento y el tiempo transcurrido.", note: "Tenga a mano el nombre del medicamento, la dosis y la hora en que ocurrió el evento." }
      ],
      do: ["Seguir la fórmula y usar dispositivos de medición.", "Registrar dosis y horarios.", "Guardar los medicamentos de forma segura.", "Llevar la lista a cada consulta."],
      avoid: ["Duplicar una dosis olvidada.", "Triturar o abrir cápsulas sin autorización.", "Compartir medicamentos o automedicar.", "Suspenderlos porque el niño parece sentirse mejor."],
      consult: ["Si vomita poco después de una dosis.", "Si olvidó o administró una dosis incorrecta.", "Si aparece una reacción inesperada.", "Si tiene dificultad para conseguir o administrar el medicamento."],
      checklist: ["Revisé medicamento, dosis, vía y horario.", "Registré las dosis de hoy.", "Los medicamentos están almacenados de forma segura."]
    },
    {
      id: 5,
      title: "Alimentación segura",
      shortTitle: "Alimentación",
      icon: "food",
      tone: "green",
      summary: "Higiene de alimentos, hidratación y estrategias cuando cambia el apetito.",
      objective: "Ofrecer alimentos y líquidos de manera segura durante el tratamiento.",
      image: "assets/images/alimentacion-segura.webp",
      imageAlt: "Mesa limpia con alimentos lavados y bien cocidos, agua segura y utensilios separados.",
      keyMessages: [
        "La seguridad de los alimentos es tan importante como su variedad.",
        "Las necesidades pueden cambiar durante el tratamiento.",
        "Ofrezca líquidos y porciones pequeñas según tolerancia.",
        "Siga siempre las restricciones específicas del equipo o nutricionista."
      ],
      sections: [
        { title: "Preparación segura", text: "Lávese las manos, limpie superficies y use agua segura. Separe alimentos crudos de los cocidos y cocine completamente carnes y huevos." },
        { title: "Frutas, verduras y conservación", text: "Lave los productos según las indicaciones de su institución. Refrigere pronto lo que corresponda, respete fechas de vencimiento y deseche alimentos con olor o aspecto extraño." },
        { title: "Poco apetito", text: "Ofrezca porciones pequeñas varias veces al día, sin presionar. Aproveche los momentos de mayor apetito y registre cambios importantes." },
        { title: "Hidratación y suplementos", text: "Ofrezca los líquidos recomendados. No use suplementos, productos naturales o vitaminas sin aprobación del equipo tratante." }
      ],
      do: ["Lavar manos, alimentos y superficies.", "Separar crudos y cocidos.", "Refrigerar y cocinar de forma adecuada.", "Consultar si hay pérdida de peso o dificultad para beber."],
      avoid: ["Alimentos crudos o poco cocidos.", "Comida vencida o mal refrigerada.", "Forzar al niño a comer.", "Suplementos o remedios sin autorización."],
      consult: ["Si no tolera líquidos.", "Si hay vómito o diarrea persistentes.", "Si orina mucho menos o muestra signos de deshidratación.", "Si el apetito disminuye durante varios días."],
      checklist: ["Separé alimentos crudos y cocidos.", "El agua y los alimentos se prepararon de forma segura.", "Vigilé cuánto bebió y cómo toleró la comida."]
    },
    {
      id: 6,
      title: "Prevención de infecciones",
      shortTitle: "Infecciones",
      icon: "shield",
      tone: "teal",
      summary: "Lavado de manos, higiene del entorno, contactos, vacunas y fiebre.",
      objective: "Aplicar medidas cotidianas que reducen la exposición a infecciones y actuar oportunamente ante fiebre.",
      image: "assets/images/lavado-manos.webp",
      imageAlt: "Secuencia educativa de manos que se mojan, reciben jabón, se frotan y se enjuagan.",
      keyMessages: [
        "La quimioterapia puede disminuir temporalmente las defensas.",
        "El lavado de manos es una de las medidas más efectivas.",
        "Evite el contacto con personas enfermas y mantenga limpio el entorno.",
        "La fiebre puede ser la primera señal de una infección."
      ],
      sections: [
        { title: "Lavado de manos", text: "Lávese con agua y jabón antes de preparar alimentos o medicamentos, después de ir al baño, al volver de la calle y antes de tocar el catéter. Frote palmas, dorsos, dedos, uñas y muñecas; enjuague y seque bien." },
        { title: "Casa, juguetes y mascotas", text: "Limpie superficies y juguetes de uso frecuente. Evite que el niño limpie excrementos o areneros; consulte las recomendaciones específicas sobre mascotas." },
        { title: "Personas enfermas y multitudes", text: "Pida a las visitas que avisen si tienen fiebre, tos, diarrea u otros síntomas. Evite contactos y lugares concurridos cuando el equipo lo indique." },
        { title: "Mascarillas y vacunas", text: "Use mascarilla y programe vacunas únicamente según las indicaciones del equipo tratante. No todas las vacunas son apropiadas durante todas las fases del tratamiento.", note: "Mida la temperatura con un termómetro y conozca la ruta de urgencias de su institución." }
      ],
      do: ["Lavarse las manos con frecuencia.", "Mantener uñas cortas y limpias.", "Higienizar juguetes y superficies.", "Preparar alimentos de forma segura y vigilar la temperatura."],
      avoid: ["Contacto cercano con personas enfermas.", "Alimentos crudos o poco cocidos.", "Vacunas o medicamentos sin autorización.", "Ignorar o intentar ocultar la fiebre."],
      consult: ["Temperatura de 38 °C o más: atención inmediata.", "Escalofríos, dificultad para respirar o tos persistente.", "Enrojecimiento, dolor o secreción en una herida o catéter."],
      checklist: ["Todas las personas se lavaron las manos.", "El termómetro funciona y está disponible.", "Conozco la ruta que debo seguir si hay fiebre."]
    },
    {
      id: 7,
      title: "Efectos secundarios",
      shortTitle: "Efectos",
      icon: "symptom",
      tone: "coral",
      summary: "Náuseas, cambios intestinales, lesiones en boca, dolor, cansancio y sangrado.",
      objective: "Reconocer efectos frecuentes, aplicar medidas indicadas y saber cuándo pedir ayuda.",
      keyMessages: [
        "Algunos efectos son esperados y pueden aliviarse con las medidas del equipo.",
        "La intensidad y duración varían en cada niño.",
        "Registrar los cambios ayuda a comunicarlos con claridad.",
        "Un síntoma frecuente también puede volverse urgente si es intenso o persistente."
      ],
      sections: [
        { title: "Náuseas y vómito", text: "Use solo los medicamentos indicados. Ofrezca líquidos y alimentos en pequeñas cantidades si el equipo lo permite. Registre frecuencia y tolerancia." },
        { title: "Diarrea o estreñimiento", text: "Observe número y características de las deposiciones, dolor, hidratación y orina. No use laxantes ni antidiarreicos sin autorización." },
        { title: "Boca y mucosas", text: "Mantenga la higiene indicada y revise si hay enrojecimiento, placas, úlceras o dificultad para tragar. Evite enjuagues caseros no aprobados." },
        { title: "Dolor, fatiga, caída del cabello y sangrado", text: "Permita descanso, trate el dolor solo con el plan indicado y observe moretones o sangrado. La caída del cabello puede ser temporal; acompañe al niño con honestidad y afecto." }
      ],
      do: ["Ofrecer líquidos y porciones pequeñas según tolerancia.", "Mantener la higiene oral indicada.", "Registrar síntomas y medicamentos usados.", "Seguir las recomendaciones del equipo."],
      avoid: ["Automedicar o usar remedios sin aprobación.", "Suspender medicamentos.", "Forzar la alimentación.", "Minimizar un síntoma que empeora."],
      consult: ["Vómito persistente o incapacidad para tolerar líquidos.", "Diarrea intensa, dolor fuerte o lesiones graves en boca.", "Sangrado, moretones extensos o somnolencia marcada."],
      checklist: ["Registré los síntomas y su duración.", "El niño tolera líquidos y está orinando.", "Sé cuáles cambios requieren una llamada o urgencias."]
    },
    {
      id: 8,
      title: "Signos de alarma",
      shortTitle: "Alarmas",
      icon: "alert",
      tone: "coral",
      summary: "Reconozca cuándo debe contactar al equipo o acudir de inmediato a urgencias.",
      objective: "Tomar decisiones oportunas ante señales que pueden indicar una complicación.",
      keyMessages: [
        "La fiebre durante la quimioterapia se considera una urgencia.",
        "Algunos síntomas requieren atención inmediata, aunque parezcan iniciar de forma leve.",
        "Actuar rápido puede prevenir complicaciones.",
        "Ante la duda, contacte al equipo tratante."
      ],
      sections: [
        { title: "Fiebre", text: "Una temperatura de 38 °C o más requiere atención inmediata. Siga la ruta definida por su institución.", note: "No dé medicamentos para ocultar la fiebre ni antibióticos sin indicación. No espere a que la temperatura baje sola." },
        { title: "Respiración o estado neurológico", text: "Dificultad para respirar, convulsiones, desmayo, confusión o somnolencia excesiva requieren atención inmediata." },
        { title: "Sangrado y piel", text: "Acuda si hay sangrado que no se detiene, petequias extensas o moretones que aparecen de forma llamativa." },
        { title: "Dolor, vómito y orina", text: "Busque ayuda inmediata ante dolor intenso que no mejora, vómito persistente con incapacidad para tolerar líquidos, disminución marcada de la orina o signos de deshidratación." }
      ],
      do: ["Medir y anotar la temperatura.", "Mantener la calma e iniciar la ruta indicada.", "Llevar resumen clínico y lista de medicamentos.", "Avisar al equipo mientras se dirige a urgencias si así se lo indicaron."],
      avoid: ["Dar antibióticos no formulados.", "Esperar varias horas para ver si mejora.", "Enmascarar la fiebre sin orientación.", "Retrasar el traslado por trámites o pertenencias."],
      consult: ["38 °C o más.", "Dificultad para respirar o convulsiones.", "Sangrado que no se detiene.", "Somnolencia excesiva, dolor intenso o poca orina."],
      checklist: ["Conozco la dirección de urgencias.", "Tengo transporte o un plan para llegar.", "El resumen clínico y los teléfonos están disponibles."]
    },
    {
      id: 9,
      title: "Apoyo al cuidador",
      shortTitle: "Apoyo",
      icon: "people",
      tone: "purple",
      summary: "Estrés, autocuidado, comunicación y redes de apoyo para quien cuida.",
      objective: "Reconocer las propias necesidades y pedir apoyo como parte del cuidado del niño.",
      image: "assets/images/apoyo-cuidador.webp",
      imageAlt: "Una cuidadora descansa mientras otra persona le ofrece compañía y apoyo.",
      keyMessages: [
        "Sentir miedo, cansancio o incertidumbre no significa que esté fallando.",
        "Descansar y pedir ayuda también protege al niño.",
        "La información clara reduce la carga de tomar decisiones solo.",
        "El apoyo puede venir de familiares, comunidad y equipo psicosocial."
      ],
      sections: [
        { title: "Señales de sobrecarga", text: "Irritabilidad constante, dificultad para dormir, tristeza persistente, sensación de no poder continuar o abandono del propio cuidado son razones para pedir apoyo." },
        { title: "Un plan de relevo", text: "Identifique al menos una persona que pueda acompañar, cocinar, cuidar a otros hijos, realizar trámites o escuchar. Deje instrucciones claras y actualizadas." },
        { title: "Hablar con el niño", text: "Use palabras adecuadas para su edad, permita preguntas y evite promesas que no puede garantizar. El equipo de psicología puede acompañar conversaciones difíciles." },
        { title: "Comunicación con el equipo", text: "Anote preguntas, repita las indicaciones con sus propias palabras y solicite material escrito. Informe barreras económicas, de transporte o acceso a medicamentos." }
      ],
      do: ["Dormir y alimentarse cuando sea posible.", "Aceptar ayuda concreta y organizar relevos.", "Hablar con trabajo social, psicología o enfermería.", "Mantener una lista breve de tareas prioritarias."],
      avoid: ["Cargar todo el cuidado sin relevo.", "Ocultar agotamiento o barreras de acceso.", "Exigirse estar bien todo el tiempo.", "Aislarse de personas de confianza."],
      consult: ["Si la angustia impide dormir o realizar tareas básicas.", "Si siente que no puede continuar o podría hacerse daño.", "Si necesita apoyo social, económico o para acceder al tratamiento."],
      checklist: ["Identifiqué una persona que puede ayudarme.", "Tomé una pausa breve para comer, descansar o respirar.", "Anoté lo que necesito preguntar o solicitar."]
    },
    {
      id: 10,
      title: "Recursos útiles",
      shortTitle: "Recursos",
      icon: "resources",
      tone: "blue",
      summary: "Glosario, preguntas frecuentes, calendarios, fuentes y herramientas para organizar el cuidado.",
      objective: "Encontrar rápidamente información confiable y preparar los recursos esenciales del hogar.",
      keyMessages: [
        "Guarde la ruta de urgencias y los contactos del equipo en un lugar visible.",
        "Use calendarios y listas para reducir olvidos.",
        "Confirme la información en fuentes oficiales y con el equipo tratante.",
        "No registre datos personales o clínicos en esta versión de la herramienta."
      ],
      sections: [
        { title: "Kit de información", text: "Conserve una carpeta física o digital con resumen clínico, lista de medicamentos, indicaciones, citas, exámenes y teléfonos. Mantenga una copia disponible para otro cuidador." },
        { title: "Calendarios sencillos", text: "Puede usar el calendario del teléfono o una hoja impresa para citas y horarios. No incluya información sensible si comparte el dispositivo." },
        { title: "Fuentes confiables", text: "Priorice la información del equipo tratante, el Ministerio de Salud, organismos científicos y centros oncológicos reconocidos. Revise la fecha y el propósito de cada material." },
        { title: "Cómo usar esta herramienta", text: "Explore los módulos, marque listas de verificación y use el buscador. El progreso se guarda solo en este navegador y puede eliminarse desde Ajustes." }
      ],
      do: ["Guardar contactos y ruta de urgencias.", "Mantener una lista de medicamentos y citas.", "Revisar el glosario cuando aparezca una palabra nueva.", "Compartir la herramienta con los cuidadores autorizados."],
      avoid: ["Guardar nombres, diagnósticos o documentos personales aquí.", "Tomar decisiones clínicas solo con información de internet.", "Reemplazar las indicaciones del equipo con consejos generales."],
      consult: ["Si necesita ayuda para comprender una indicación.", "Si encuentra información contradictoria.", "Si una barrera impide asistir, obtener medicamentos o continuar el cuidado."],
      checklist: ["Guardé los contactos esenciales.", "Mi lista de medicamentos está actualizada.", "Sé dónde encontrar el glosario y las alarmas."]
    }
  ];

  const glossary = [
    { term: "Adherencia", definition: "Cumplir el tratamiento, las citas, los controles y las recomendaciones acordadas con el equipo.", recognize: "La escuchará al hablar de medicamentos y seguimiento.", action: "Informe cualquier barrera que dificulte cumplir el plan.", fact: "Un calendario y un registro diario pueden reducir olvidos." },
    { term: "Anemia", definition: "Disminución de glóbulos rojos o hemoglobina.", recognize: "Puede asociarse con palidez, cansancio o poca energía.", action: "Comunique los síntomas y cumpla los controles de sangre.", fact: "Solo un examen permite confirmar su presencia y gravedad." },
    { term: "Aspirado de médula ósea", definition: "Procedimiento para obtener una pequeña muestra de médula ósea y estudiarla.", recognize: "Puede solicitarse al diagnóstico o para evaluar la respuesta.", action: "Pregunte cómo prepararse y qué cuidados seguir después.", fact: "La médula ósea no es lo mismo que la médula espinal." },
    { term: "Catéter venoso central", definition: "Dispositivo que permite administrar medicamentos y tomar algunas muestras sin punciones repetidas.", recognize: "Puede estar en el pecho o conectado a una vena de mayor calibre.", action: "Siga exactamente las indicaciones de higiene y protección.", fact: "Enrojecimiento, dolor, secreción o daño requieren aviso inmediato." },
    { term: "Ciclo de quimioterapia", definition: "Periodo de tratamiento seguido, en algunos protocolos, por un tiempo de recuperación.", recognize: "El equipo lo usa para organizar medicamentos y controles.", action: "Confirme fechas y señales que debe vigilar en casa.", fact: "Los ciclos no son iguales para todos los niños." },
    { term: "Cultivo", definition: "Examen que busca microorganismos en sangre u otras muestras.", recognize: "Puede solicitarse cuando hay fiebre o sospecha de infección.", action: "Siga la ruta de atención sin esperar el resultado.", fact: "El tratamiento puede comenzar antes de que el cultivo esté listo." },
    { term: "Glóbulos blancos", definition: "Células de la sangre que ayudan a defender el cuerpo de infecciones.", recognize: "También pueden llamarse leucocitos.", action: "Siga las medidas de prevención indicadas cuando estén bajos.", fact: "El número y el tipo se conocen mediante un examen de sangre." },
    { term: "Glóbulos rojos", definition: "Células que transportan oxígeno a los tejidos.", recognize: "Cuando están bajos puede haber palidez, cansancio o falta de aire.", action: "Informe cambios y cumpla los controles.", fact: "Contienen hemoglobina, la proteína que transporta oxígeno." },
    { term: "Hemoglobina", definition: "Proteína de los glóbulos rojos que transporta oxígeno.", recognize: "Aparece en el cuadro hemático.", action: "Pida al equipo que le explique el resultado en contexto.", fact: "Un valor aislado no define por sí solo una decisión." },
    { term: "Leucocitos", definition: "Otro nombre para los glóbulos blancos.", recognize: "Aparece con frecuencia en los exámenes de sangre.", action: "No interprete el valor sin los demás datos clínicos.", fact: "Incluyen varios tipos de células, como los neutrófilos." },
    { term: "Médula ósea", definition: "Tejido blando dentro de algunos huesos donde se forman las células de la sangre.", recognize: "Se menciona en el diagnóstico y el seguimiento de la LLA.", action: "Pregunte qué busca cada estudio de médula.", fact: "No es la médula espinal." },
    { term: "Mucositis", definition: "Inflamación o lesiones de las mucosas, especialmente de la boca y el tubo digestivo.", recognize: "Puede causar enrojecimiento, dolor, llagas o dificultad para comer.", action: "Mantenga la higiene indicada y comunique lesiones o dolor.", fact: "El equipo puede ofrecer medidas para aliviarla." },
    { term: "Neutrófilos", definition: "Tipo de glóbulo blanco importante para defenderse de algunas infecciones.", recognize: "Su cantidad se conoce en el cuadro hemático.", action: "Siga las recomendaciones de prevención y la ruta para fiebre.", fact: "No es posible saber si están bajos solo mirando al niño." },
    { term: "Neutropenia", definition: "Disminución del número de neutrófilos.", recognize: "El equipo la identifica mediante un examen de sangre.", action: "Vigile la temperatura y evite exposiciones indicadas.", fact: "La fiebre durante neutropenia puede ser una urgencia." },
    { term: "Neutropenia febril", definition: "Fiebre en una persona con neutrófilos bajos; requiere valoración urgente.", recognize: "Puede ser la primera señal de una infección.", action: "Siga de inmediato la ruta de urgencias de su institución.", fact: "No se debe esperar a que aparezcan otros síntomas." },
    { term: "Petequias", definition: "Puntos rojos o morados pequeños bajo la piel que no desaparecen al presionar.", recognize: "Pueden aparecer en grupos y relacionarse con plaquetas bajas.", action: "Informe su aparición; si son extensas o hay sangrado, busque atención inmediata.", fact: "No son lo mismo que una irritación común." },
    { term: "Plaquetas", definition: "Fragmentos celulares que ayudan a detener el sangrado.", recognize: "Cuando están bajas pueden aparecer petequias, moretones o sangrado.", action: "Evite golpes y siga las recomendaciones del equipo.", fact: "Su cantidad se mide en el cuadro hemático." },
    { term: "Punción lumbar", definition: "Procedimiento para obtener líquido cefalorraquídeo o administrar tratamiento, según el protocolo.", recognize: "El equipo explicará preparación, anestesia o sedación y cuidados posteriores.", action: "Siga las instrucciones antes y después del procedimiento.", fact: "Forma parte del diagnóstico o tratamiento en muchos protocolos de LLA." },
    { term: "Quimioterapia", definition: "Medicamentos que destruyen células leucémicas o impiden que sigan creciendo.", recognize: "Puede administrarse por distintas vías y en varias fases.", action: "Cumpla el plan y comunique efectos o dificultades.", fact: "No todos los medicamentos ni efectos son iguales." },
    { term: "Recaída", definition: "Reaparición de la enfermedad después de un periodo de remisión.", recognize: "Solo puede determinarla el equipo mediante evaluación y estudios.", action: "Cumpla los controles aun cuando el niño se sienta bien.", fact: "Un síntoma aislado no significa necesariamente una recaída." },
    { term: "Remisión", definition: "Etapa en la que no se detectan signos de enfermedad con los métodos usados por el equipo.", recognize: "Puede mencionarse después de evaluar la respuesta al tratamiento.", action: "Continúe el tratamiento y seguimiento indicados.", fact: "Remisión no significa suspender el plan por cuenta propia." },
    { term: "Sepsis", definition: "Respuesta grave del organismo ante una infección que puede afectar órganos.", recognize: "Puede acompañarse de fiebre o temperatura baja, respiración rápida, somnolencia o empeoramiento marcado.", action: "Requiere atención inmediata.", fact: "La rapidez de la atención es importante." },
    { term: "Trombocitopenia", definition: "Disminución del número de plaquetas.", recognize: "Puede relacionarse con petequias, moretones o sangrado.", action: "Informe los cambios y evite medicamentos no autorizados.", fact: "Solo el examen de sangre confirma el nivel de plaquetas." }
  ];

  const alarms = {
    intro: "Use este semáforo como orientación educativa. Siga siempre la ruta y las indicaciones específicas de su institución.",
    levels: [
      {
        id: "red",
        label: "Rojo · Atención inmediata",
        action: "Acuda de inmediato a urgencias o siga la ruta indicada por el equipo tratante. No dé medicamentos para ocultar los síntomas sin orientación.",
        items: ["Temperatura de 38 °C o más.", "Sangrado que no se detiene.", "Dificultad para respirar.", "Convulsiones, desmayo o confusión.", "Somnolencia excesiva o dificultad para despertar.", "Dolor intenso que no mejora.", "Petequias extensas o moretones llamativos.", "Vómito persistente e incapacidad para tolerar líquidos.", "Disminución marcada de la orina o signos de deshidratación."]
      },
      {
        id: "yellow",
        label: "Amarillo · Comuníquese con el equipo",
        action: "Contacte al servicio de hemato-oncología para recibir orientación y vigile si aparecen señales rojas.",
        items: ["Náuseas persistentes.", "Disminución del apetito durante varios días.", "Diarrea leve que continúa.", "Estreñimiento.", "Dolor moderado.", "Lesiones pequeñas o molestias en la boca."]
      },
      {
        id: "green",
        label: "Verde · Continúe el cuidado",
        action: "Continúe las medidas habituales, el tratamiento indicado y los controles programados.",
        items: ["Recibe los medicamentos de acuerdo con la fórmula.", "Come y bebe según su tolerancia.", "No presenta fiebre ni sangrado.", "Mantiene sus controles y el cuidador sabe cómo pedir ayuda."]
      }
    ]
  };

  const faq = [
    { question: "¿La LLA es contagiosa?", answer: "No. La leucemia linfoblástica aguda no se transmite de una persona a otra." },
    { question: "¿Fue causada por algo que hicimos?", answer: "No se considera consecuencia de una acción del niño, sus padres o cuidadores. Si tiene dudas sobre factores específicos, hable con el equipo." },
    { question: "¿Qué hago si la temperatura llega a 38 °C?", answer: "Siga de inmediato la ruta de urgencias indicada por su institución. No espere ni intente ocultar la fiebre con medicamentos sin orientación." },
    { question: "¿Puedo repetir una dosis si el niño vomita?", answer: "No la repita por su cuenta. Comuníquese con el equipo y tenga a mano el nombre, la dosis y la hora del medicamento." },
    { question: "¿Puede recibir visitas?", answer: "Depende del momento clínico. En general, evite personas con síntomas y pida a todas las visitas que se laven las manos. Confirme restricciones con el equipo." },
    { question: "¿Puede asistir a la escuela?", answer: "La decisión depende de sus defensas, la fase del tratamiento y las condiciones del entorno. Acuérdela con el equipo tratante y la institución educativa." },
    { question: "¿Puede comer alimentos crudos?", answer: "Evite carnes, huevos y otros alimentos crudos o poco cocidos. Siga las restricciones específicas del equipo o nutricionista." },
    { question: "¿Esta herramienta reemplaza una consulta?", answer: "No. Es un recurso educativo y no reemplaza valoración, diagnóstico, tratamiento ni seguimiento profesional." }
  ];

  const resources = [
    { label: "Ministerio de Salud de Colombia · Guías de práctica clínica", url: "https://gpc.minsalud.gov.co", kind: "Fuente nacional" },
    { label: "Instituto Nacional de Cancerología de Colombia", url: "https://www.cancer.gov.co", kind: "Fuente nacional" },
    { label: "OMS · Cáncer infantil", url: "https://www.who.int/news-room/fact-sheets/detail/cancer-in-children", kind: "Organismo internacional" },
    { label: "Together by St. Jude", url: "https://together.stjude.org", kind: "Educación para familias" },
    { label: "Children's Oncology Group · Manual para familias", url: "https://www.childrensoncologygroup.org/cog-family-handbook", kind: "Educación para familias" },
    { label: "Cancer.Net · LLA infantil", url: "https://www.cancer.net/cancer-types/leukemia-childhood-acute-lymphoblastic-all", kind: "Información oncológica" },
    { label: "American Cancer Society · Leucemia infantil", url: "https://www.cancer.org/cancer/types/leukemia-in-children.html", kind: "Información oncológica" }
  ];

  const sus = {
    items: [
      "Creo que me gustaría utilizar este sistema con frecuencia.",
      "Encontré el sistema innecesariamente complejo.",
      "Considero que el sistema fue fácil de usar.",
      "Creo que necesitaría el apoyo de una persona con conocimientos técnicos para poder utilizar este sistema.",
      "Encontré que las diferentes funciones de este sistema estaban bien integradas.",
      "Considero que existía demasiada inconsistencia en este sistema.",
      "Imagino que la mayoría de las personas aprenderían a utilizar este sistema muy rápidamente.",
      "Encontré el sistema muy complicado de utilizar.",
      "Me sentí seguro(a) al utilizar el sistema.",
      "Necesité aprender muchas cosas antes de poder utilizar este sistema."
    ],
    scoring: "En los ítems impares se resta 1 a la respuesta; en los pares se resta la respuesta de 5. Se suman los valores y se multiplican por 2,5 para obtener una puntuación de 0 a 100.",
    interpretation: ["85 o más: excelente", "70 a 84: buena", "50 a 69: aceptable o marginal", "Menos de 50: problemas importantes"]
  };

  window.APP_CONTENT = Object.freeze({
    brand: { name: "En Sus Manos", tagline: "Más educación, mejor cuidado" },
    welcome: {
      eyebrow: "Herramienta educativa para cuidadores",
      title: "Información clara para acompañar el cuidado de un niño con LLA",
      text: "Recorra diez módulos breves, consulte signos de alarma y encuentre respuestas con lenguaje sencillo.",
      disclaimer: "Este recurso complementa la educación del equipo de salud. No reemplaza la consulta, la valoración clínica, el diagnóstico, el tratamiento ni el seguimiento profesional."
    },
    modules,
    glossary,
    alarms,
    faq,
    resources,
    sus
  });
})();
