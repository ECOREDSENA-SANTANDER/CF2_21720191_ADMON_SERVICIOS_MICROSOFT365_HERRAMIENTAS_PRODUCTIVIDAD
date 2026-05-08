<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Herramientas complementarias para la gestión del tiempo y la información
        
       
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t2/13.svg', alt='')
            .col-sm-12.col-lg-10
              p.mb-0 La administración eficiente del correo electrónico y los contactos constituye únicamente la primera fase del dominio de Microsoft Outlook 365. Para dar cumplimiento integral al resultado de aprendizaje y lograr una operatividad óptima en el marco de las organizaciones 4.0, es imperativo que el aprendiz domine las herramientas complementarias del ecosistema: el calendario, las tareas y las notas. Estas utilidades transforman la plataforma de un simple gestor de comunicaciones a un centro de mando unificado para la planificación estratégica, la ejecución de proyectos y la gestión del conocimiento personal e institucional.
          p.mb-0 El abordaje pedagógico de estas herramientas exige comprender que el tiempo y la atención son recursos finitos. En entornos de formación virtual y trabajo remoto, la autogestión se convierte en una competencia transversal ineludible. Por lo tanto, el uso de estas funciones tecnológicas debe ir acompañado de la asimilación de metodologías de productividad, tales como el bloqueo de tiempo (time-blocking), la división del trabajo (work breakdown structure) y la captura ágil de información.
        
      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 El calendario interactivo como eje articulador de la gestión del tiempo y eventos
      
      p.mb-3 El calendario de Microsoft 365 trasciende la noción tradicional de una agenda estática en papel. En el entorno digital, el calendario actúa como un motor de programación dinámica y un espacio de visibilidad compartida que articula los esfuerzos de un equipo de trabajo. Pedagógicamente, el calendario es la representación visual de las prioridades de un aprendiz o profesional; lo que no se programa, difícilmente se ejecuta. 
      p.mb-5 Para aprovechar esta herramienta, es fundamental distinguir conceptualmente entre tres elementos operativos dentro de la plataforma: citas, reuniones y eventos.
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/3.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Cita")
              .col-12
                p.mb-0 Es una actividad que bloquea un espacio de tiempo en la agenda personal del usuario, pero que no involucra a otras personas ni requiere la reserva de recursos compartidos (por ejemplo, “Revisión de literatura para el proyecto de grado” o “Tiempo de estudio autónomo”).

            .row(numero="2" titulo="Reunión")
              .col-12
                p.mb-0 Es un evento que implica la convocatoria de otros participantes. Al crear una reunión, el sistema envía invitaciones formales, gestiona las confirmaciones de asistencia (RVP) y permite agregar enlaces para encuentros sincrónicos a través de Microsoft Teams.

            .row(numero="3" titulo="Evento de todo el día")
              .col-12
                p.mb-0 Se utiliza para marcar hitos que no tienen una hora de inicio y fin específica en el día, como fechas límite de entregas de evidencias en el SENA, días feriados o periodos de vacaciones.
          
      p.mb-5 Una de las funcionalidades más potentes y aplicables en contextos corporativos y de formación es el #[b asistente para programación]. Cuando un aprendiz necesita convocar a una reunión de proyecto con su instructor y tres compañeros, el método tradicional implicaría un largo cruce de correos electrónicos para encontrar un horario común. El asistente para programación soluciona esto superponiendo las agendas de todos los convocados (siempre que pertenezcan a la misma organización o hayan compartido permisos de visualización), identificando automáticamente los espacios libres comunes y sugiriendo las horas óptimas para el encuentro. Esta capacidad técnica reduce drásticamente la fricción administrativa y fomenta el respeto por el tiempo ajeno.
      
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/4.png', alt='')
        .col-sm-12.col-lg-9
          .bg-color-2.p-5.br-2.mb-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t4/5.svg', alt='')
              .col-sm-12.col-lg-8
                .bg-color-3.p-2.mb-4
                  h4.mb-0.text-white Aplicación en contextos educativos
                p.mb-0 Un aprendiz que cursa un programa tecnológico virtual puede utilizar el calendario para estructurar su semana bajo la técnica de time-blocking. En lugar de tener una lista interminable de deberes, el estudiante configura citas recurrentes en su calendario de Outlook: los martes de 8:00 a. m. a 10:00 a. m. bloquea el espacio para “Estudio de material en plataforma”, los jueves a las 6:00 p. m. programa las “Sesiones sincrónicas con el instructor”, y los viernes reserva una hora para “Reunión de avance con el equipo de trabajo”. Al categorizar estos bloques con colores específicos, el aprendiz obtiene un mapa de calor visual de su esfuerzo académico, permitiéndole equilibrar su carga cognitiva y evitar el agotamiento (burnout).
      
      
      
      
      
      
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Administración de tareas para el seguimiento y ejecución de proyectos
      
      .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/6.png')})` }")
        
        .bloque-texto-g__texto.p-4
          p.mb-3 Mientras que el calendario gestiona el “cuándo”, la herramienta de tareas (integrada actualmente con Microsoft To Do dentro del ecosistema 365) gestiona el “qué”. Un error común en la gestión digital es utilizar la bandeja de entrada del correo como una lista de tareas pendientes. Esto genera estrés y desorganización, ya que los correos nuevos empujan hacia abajo los compromisos antiguos. 

          p.mb-0 El proceso correcto, alineado con el saber de manejar herramientas complementarias, consiste en convertir la información recibida en elementos de acción concretos. Outlook 365 permite arrastrar un correo electrónico hacia el ícono de tareas, creando automáticamente una actividad pendiente que contiene el cuerpo del mensaje como contexto.


      p.mb-3 Desde la dimensión pedagógica, la administración de tareas debe enseñarse bajo el principio de la “acción siguiente”. Una tarea no debe ser redactada como un proyecto abstracto (por ejemplo, “Hacer sitio web”), sino como una instrucción clara, medible y ejecutable (por ejemplo, “Diseñar el boceto de la página de inicio en formato móvil”).

      p.mb-5 La plataforma permite dotar a cada tarea de atributos fundamentales para el seguimiento de proyectos: fecha de inicio, fecha de finalización, prioridad, estado de avance y asignación a un responsable específico. Al vincular tareas a eventos del calendario, se asegura que el tiempo se asigne correctamente y se evite la duplicación de esfuerzos.


      SlyderF(columnas="col-lg-6 col-xl-4").mb-5
        .tarjeta.bg-fondo-2.p-4.br-2
          .row.justify-content-center.mb-3
            .col-6.d-none.d-lg-block
              img.m-auto(src='@/assets/curso/temas/t4/7.svg' alt='')
          h2.text-center Fechas de vencimiento y recordatorios
          p.text-center Garantizan el cumplimiento de los cronogramas.


        .tarjeta.bg-fondo-2.p-4.br-2
          .row.justify-content-center.mb-3
            .col-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/8.svg' alt='')
          h2.text-center Estado de progreso
          p.text-center Permite marcar la tarea como “No comenzada”, “En curso”, “Completada” o “A la espera de otra persona”.
        
        .tarjeta.bg-fondo-2.p-4.br-2
          .row.justify-content-center.mb-3
            .col-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/9.svg' alt='')
          h2.text-center Niveles de prioridad
          p.text-center Clasifica las actividades en urgentes o rutinarias

        .tarjeta.bg-fondo-2.p-4.br-2
          .row.justify-content-center.mb-3
            .col-6.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/10.svg' alt='')
          h2.text-center Asignación
          p.text-center En un entorno colaborativo, una tarea puede ser delegada a otro miembro del equipo, generando una notificación automática y trazabilidad sobre quién es el responsable de la ejecución.

      .bg-full-width.bg-color-4.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-8
              .bg-color-5.p-2.mb-4.w-cus-1.px-3
                h4.mb-0.text-white Caso de uso vinculado a formación profesional
              p.mb-0 Durante la fase de ejecución de un proyecto formativo relacionado con la instalación de redes, el líder del grupo utiliza la herramienta de tareas de Outlook para desglosar el trabajo. Crea una tarea principal llamada “Adquisición de materiales” y establece subtareas: “Cotizar cable UTP”, “Comprar conectores RJ45” y “Verificar disponibilidad de herramientas de ponchado”. Cada subtarea tiene asignado a un aprendiz diferente con una fecha límite estricta previa a la práctica presencial. El instructor, si forma parte del entorno de trabajo compartido, puede visualizar este tablero, evaluar la capacidad de organización del equipo y realizar intervenciones tempranas si detecta que las fechas de vencimiento se están incumpliendo.
            .col-sm-12.col-lg-4.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t4/12.svg', alt='')


      
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Integración de notas digitales para la captura ágil de conocimiento
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/13.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/14.svg', alt='')
            .col-sm-12.col-lg-10
              p.mb-0 La tercera herramienta complementaria fundamental es el sistema de notas. En la dinámica acelerada de las organizaciones modernas, las grandes ideas, las instrucciones rápidas y los acuerdos verbales suelen perderse si no se documentan inmediatamente. Outlook 365 integra funcionalidades de notas rápidas y se sincroniza profundamente con Microsoft OneNote, proporcionando un lienzo digital infinito para la captura y organización del conocimiento.
          p.mb-0 Las notas digitales actúan como una memoria extendida. A diferencia de un documento de Word, que requiere una estructura formal, un título y un proceso de guardado en carpetas, las notas en Outlook están diseñadas para la fricción cero. Se pueden abrir con un solo clic, se guardan automáticamente en la nube y son fácilmente localizables gracias a los potentes motores de indexación de Microsoft, que incluso pueden leer texto dentro de imágenes (Reconocimiento óptico de caracteres - OCR).
      p.mb-0 Una aplicación pedagógica vital de esta herramienta es la creación de actas de reunión dinámicas. Cuando un grupo de aprendices asiste a una sesión de asesoría con su instructor, pueden abrir un bloc de notas compartido directamente desde la invitación del calendario en Outlook. Durante la reunión, todos los miembros del equipo pueden escribir simultáneamente, pegando capturas de pantalla de los errores de código, registrando las recomendaciones del instructor y documentando los acuerdos. Al finalizar la reunión, estas notas quedan vinculadas perpetuamente al evento del calendario, creando un repositorio histórico del proyecto al que se puede acudir meses después para comprender por qué se tomó una decisión de diseño específica.
        

  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
