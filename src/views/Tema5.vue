<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Integración práctica en entornos de formación profesional y proyectos digitales
        
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/1.png')})` }")
        
        .bloque-texto-g__texto.p-4
          p.mb-0   El dominio aislado de las funciones de correo, contactos, calendarios, tareas y notas carece de impacto si no se articula en una estrategia unificada de trabajo. La formación profesional integral del SENA busca que el aprendiz trascienda el rol de “operador de software” para convertirse en un “solucionador de problemas” mediante el uso de la tecnología. Esta sección demuestra cómo las herramientas de Microsoft 365 convergen para dar respuesta a necesidades reales en el aprendizaje virtual, el trabajo remoto y la gestión de proyectos digitales.
        
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.1 Resolución de necesidades reales en el aprendizaje virtual y el trabajo remoto
      
      p.mb-3(data-aos='fade-right') En un escenario de trabajo remoto o formación cien por ciento virtual, la barrera geográfica y la asincrónica son los principales obstáculos para la productividad. La falta de comunicación no verbal y la imposibilidad de acercarse al puesto de un compañero exigen que los procesos digitales sean impecables. La suite de Outlook 365, administrada correctamente, mitiga estos riesgos estructurando flujos de trabajo claros. 

      p.mb-5(data-aos='fade-right') Para ilustrar esta integración, analicemos una situación verosímil de creación de un producto digital, integrando todos los saberes conceptuales y de proceso desarrollados en los apartados anteriores.

      


      .bg-full-width.bg-color-4.mb-5(data-aos='fade-right')
        .p-full-width
          .titulo-tercer-nivel.mb-5
            img.titulo-tercer-nivel__icon(src='@/assets/curso/bg/1.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escenario integrador de la aplicación de las herramientas complementarias
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/2.svg', alt='')
            .col-sm-12.col-lg-11
              h4 Desarrollo de un sitio web corporativo
              p.mb-0 Un equipo de cuatro aprendices del área de diseño e integración multimedia recibe, mediante un correo electrónico de su instructor, los requerimientos técnicos para el proyecto final: diseñar un portal web accesible para una empresa local.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/3.png', alt='')
        .col-sm-12.col-lg-6
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Recepción y procesamiento (correo y tareas) ")
              .col-12
                p.mb-0 El aprendiz que funge como gestor del proyecto recibe el correo. En lugar de dejarlo en la bandeja de entrada, utiliza una acción rápida para convertir el correo en una tarea titulada “Analizar requerimientos del sitio web”. Asigna una categoría de color rojo (prioridad alta) al correo y lo archiva en una carpeta específica creada para el proyecto.

            .row(numero="2" titulo="Organización del equipo (contactos) ")
              .col-12
                p.mb-0 Para asegurar una comunicación fluida, el gestor crea una lista de contactos llamada “Proyecto Web - Grupo 4”, incluyendo a los diseñadores, al programador y al instructor (como observador).
            .row(numero="3" titulo="Planificación estratégica (calendario y notas) ")
              .col-12
                p.mb-0 Utilizando el asistente para programación, el gestor revisa la disponibilidad de sus compañeros y programa una reunión de planeación inicial por Teams. Además, crea eventos de todo el día en el calendario compartido para marcar los hitos del proyecto: “Entrega de Wireframes”, “Pruebas de usabilidad” y “Lanzamiento a producción”.

            .row(numero="4" titulo="Ejecución y documentación (notas y tareas) ")
              .col-12
                p.mb-0 Durante la reunión de planeación, el equipo utiliza un bloc de notas compartido vinculado al evento del calendario para hacer una lluvia de ideas sobre la paleta de colores y la estructura del sitio. De esa reunión surgen decisiones concretas que el gestor traduce inmediatamente en nuevas tareas asignadas a cada miembro (por ejemplo: “Diseñar logo vectorial” asignado a María; “Configurar base de datos” asignado a Juan), cada una con fechas de vencimiento alineadas a los hitos del calendario.

      p.mb-5(data-aos='fade-right') En este escenario, la tecnología actúa como un soporte invisible pero fundamental. Ninguna información se pierde, las responsabilidades están claramente delimitadas, los plazos son visibles para todos y la comunicación es asertiva. El aprendiz ha demostrado el cumplimiento del resultado de aprendizaje al emplear de manera óptima el ecosistema en un contexto productivo real.

     
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.2 Estrategias pedagógicas apoyadas en el ecosistema Outlook 365
      
      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/4.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t5/5.svg', alt='')
            .col-sm-12.col-lg-10
              p.mb-4 El uso de estas plataformas también transforma la didáctica y la relación entre el instructor y el aprendiz. El ecosistema Microsoft 365 facilita el diseño de estrategias pedagógicas basadas en el aprendizaje autónomo, colaborativo y basado en proyectos. 

              p.mb-0 Desde la perspectiva del aprendizaje autónomo, la configuración de un entorno digital organizado (bandejas de entrada limpias, calendarios estructurados, tareas priorizadas) fomenta la metacognición. El aprendiz se hace consciente de cómo invierte su tiempo, qué distractores le afectan y cómo puede optimizar sus rutinas de estudio. La capacidad de autogestionar el conocimiento a través de alertas y categorizaciones disminuye la dependencia directa del instructor para recordar fechas o requerimientos operativos, empoderando al estudiante en su propio proceso formativo.


      p.mb-5(data-aos='fade-right') En cuanto al aprendizaje colaborativo, herramientas como las listas de distribución y los calendarios compartidos rompen los silos de información. Se fomenta una pedagogía de la transparencia, donde el trabajo de un individuo es visible y auditable por sus pares. Esto genera dinámicas de coevaluación natural; si un aprendiz no actualiza el estado de sus tareas en la plataforma, el equipo entero identifica el cuello de botella y puede ofrecer apoyo o redistribuir cargas.

      p.mb-0(data-aos='fade-right') Finalmente, para el instructor, este ecosistema ofrece una trazabilidad invaluable. Al solicitar a los aprendices que canalicen la gestión de sus proyectos a través de Outlook 365, el educador puede evaluar no solo el producto final (el sitio web, el código o el ensayo), sino el proceso subyacente. Revisar cómo un equipo estructuró sus tareas, con qué formalidad redactaron los correos dirigidos a “clientes” simulados y cómo gestionaron los conflictos de agenda, permite al instructor emitir juicios evaluativos sobre competencias blandas fundamentales, tales como el liderazgo, la comunicación efectiva y la resolución de problemas en entornos digitales.

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
