<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png', alt='')
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/intro/2.svg', alt='')
      .col-sm-12.col-lg-6
        p.mb-0 La transformación digital contemporánea exige que los profesionales y aprendices no solo dominen los conceptos teóricos de su área de especialidad, sino que adquieran competencias transversales robustas en el manejo de la información y la comunicación. El curso virtual "Administración de servicios Microsoft 365 y herramientas de productividad para las organizaciones 4.0" se diseña con el propósito de responder a esta necesidad imperante. A través del estudio de este componente formativo, el aprendiz se apropiará de los saberes necesarios para emplear de manera óptima el correo electrónico Microsoft Outlook 365 y sus herramientas complementarias, trascendiendo el uso instrumental básico para alcanzar una gestión estratégica, crítica y eficiente del entorno de trabajo digital. El dominio de estas plataformas permitirá al participante organizar, clasificar y priorizar flujos de información complejos, habilidades indispensables para el desempeño exitoso en los dinámicos escenarios laborales actuales.

    p.mb-5 La relevancia de este componente formativo radica en su aplicabilidad directa a las demandas del sector productivo y académico. En la cotidianidad de las organizaciones 4.0, el tiempo y la información son los recursos más valiosos; por consiguiente, la capacidad de configurar reglas de automatización, administrar redes de contactos de forma estructurada y sincronizar agendas a través de calendarios compartidos se traduce en una ventaja competitiva fundamental. Estos saberes servirán como cimientos metodológicos para que el aprendiz optimice sus tiempos de respuesta, disminuya la carga cognitiva asociada a la saturación de datos y colabore eficazmente en equipos multidisciplinarios, sin importar la dispersión geográfica de sus integrantes. De este modo, la tecnología deja de ser un fin en sí misma y se convierte en un vehículo facilitador de la productividad y el aprendizaje continuo. 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.br-1.mb-5
      .bloque-texto-g__img.d-none.d-lg-block(
        :style="{ backgroundImage: `url(${require_src('@/assets/curso/intro/3.png')})` }")
      
      .bloque-texto-g__texto.p-4
        p.mb-0 El abordaje de los contenidos se realiza desde una perspectiva pedagógica activa y constructivista, orientada a la resolución de problemas reales y al desarrollo de procesos lógicos. En lugar de presentar un mero manual técnico de instrucciones, el desarrollo temático articula los saberes conceptuales con la dimensión práctica y reflexiva. Se analizan los principios detrás de cada función tecnológica, ilustrando, mediante ejemplos concretos, estudios de caso y analogías, cómo estas herramientas pueden aplicarse en situaciones verosímiles, tales como la gestión de proyectos de desarrollo web, la coordinación de entregables académicos o la administración de la comunicación corporativa. Esta metodología garantiza una coherencia secuencial que guía al aprendiz desde los fundamentos de la interfaz hasta las operaciones más avanzadas de colaboración en la nube.

    p.mb-5 Finalmente, la integración de este curso en el proceso formativo integral del Servicio Nacional de Aprendizaje (SENA) resulta de vital importancia para asegurar la pertinencia y la calidad de los perfiles de egreso. Las competencias desarrolladas a través del programa no solo preparan al aprendiz para interactuar eficazmente con plataformas de clase mundial como Microsoft 365, sino que fomentan el pensamiento crítico frente a la adopción tecnológica, la responsabilidad en el manejo de datos y la capacidad de autogestión en entornos virtuales de aprendizaje. Al dominar estas herramientas, el individuo potencia su perfil profesional, facilitando su inserción, adaptación y liderazgo en un mercado laboral interconectado y en constante evolución tecnológica.
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
