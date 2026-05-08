<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Integración práctica en entornos de formación profesional y proyectos digitales
        
        
        
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.1 Resolución de necesidades reales en el aprendizaje virtual y el trabajo remoto
      
      
      
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.2 Estrategias pedagógicas apoyadas en el ecosistema Outlook 365
      
        

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
