<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El desarrollo del presente componente formativo ha evidenciado que el manejo de Microsoft Outlook 365, en el contexto de las organizaciones 4.0, debe entenderse no como la simple operación de un #[i software], sino como la apropiación de un ecosistema digital integral para la gestión de la productividad y la colaboración. A lo largo del documento, se ha trascendido la instrucción instrumental para abordar los fundamentos pedagógicos y analíticos que sustentan la administración estratégica del correo electrónico, la construcción de redes de colaboración eficientes y la articulación de herramientas complementarias como calendarios interactivos, gestores de tareas y blocs de notas dinámicos. Este enfoque garantiza que el aprendiz desarrolle competencias cognitivas y operativas, tales como la priorización de información, la mitigación de la "infoxicación" y la estructuración lógica de flujos de trabajo en entornos virtuales y remotos.
    p.mb-5 En consecuencia, el logro del resultado de aprendizaje propuesto capacita al estudiante del SENA para intervenir proactivamente en escenarios profesionales reales. Al dominar la configuración de reglas de automatización, la estandarización de las comunicaciones corporativas y la planificación colaborativa mediante herramientas en la nube, el aprendiz no solo optimiza su rendimiento académico autónomo, sino que adquiere habilidades transversales de altísima demanda en el sector productivo actual. Así, la tecnología se posiciona como un vehículo facilitador que potencia el liderazgo, la eficiencia operativa y la capacidad resolutiva, preparando al egresado para enfrentar con éxito los desafíos de conectividad y gestión del conocimiento que caracterizan a la industria contemporánea.

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
