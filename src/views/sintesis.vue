<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El desarrollo del presente componente formativo evidencia que la administración segura de mensajería y agendamiento corporativo mediante Microsoft Office 365 trasciende la instrucción instrumental, consolidándose como la apropiación de un ecosistema digital integral para la productividad organizacional. A lo largo del documento, se han cimentado las bases operativas y cognitivas para una gestión de comunicaciones rigurosa, abarcando desde la estructuración, etiqueta y automatización del correo electrónico, hasta la articulación estratégica de redes de contacto. Este andamiaje se integra de manera armónica con herramientas complementarias indispensables: calendarios interactivos enfocados en la gestión del tiempo (time-blocking), administradores de tareas que viabilizan el seguimiento de prioridades, y notas digitales diseñadas para la captura ágil de conocimiento y la formulación de actas dinámicas, mitigando la "infoxicación" y optimizando los flujos de trabajo.

    p.mb-5 En consecuencia, la integración práctica de estos recursos capacita al aprendiz para intervenir con solvencia y criterio en los exigentes escenarios de la industria 4.0. El dominio de estas competencias va más allá de la eficiencia operativa; cataliza un aprendizaje autónomo fundamentado en procesos de autogestión y metacognición, al tiempo que dinamiza el trabajo colaborativo y la asincronía, factores esenciales para la ejecución de proyectos digitales. De este modo, la tecnología asume un rol mediador que fortalece el liderazgo, la planificación estructurada y la capacidad resolutiva, preparando integralmente al egresado para liderar los desafíos de conectividad y gestión estratégica del conocimiento que demanda el sector productivo contemporáneo.



    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual que presenta a Microsoft Outlook 365 como un ecosistema integral que articula la gestión avanzada de comunicaciones con herramientas de organización y productividad. A través de pilares como la automatización, el trabajo colaborativo y la gestión del tiempo, la plataforma optimiza el flujo de trabajo profesional. El esquema destaca la transición del simple uso del correo electrónico hacia una estrategia de autogestión y sinergia digital dentro del entorno Office 365.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
