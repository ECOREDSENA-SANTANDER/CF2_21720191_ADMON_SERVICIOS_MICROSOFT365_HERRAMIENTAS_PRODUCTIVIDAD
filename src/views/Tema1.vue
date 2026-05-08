<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 El ecosistema de Microsoft 365 en las organizaciones 4.0
      img.mb-5(src='@/assets/curso/temas/t1/1.png', alt='')(data-aos='fade-right')  
      p.mb-0(data-aos='fade-right') La cuarta revolución industrial, o Industria 4.0, ha redefinido los paradigmas de producción, comunicación y educación a nivel global. En este contexto, el software ha evolucionado de ser una herramienta instalada de manera aislada en un equipo físico a convertirse en un ecosistema interconectado en la nube. Comprender esta transición es el primer paso para dominar las herramientas de productividad contemporáneas y alinearlas con los resultados de aprendizaje proyectados para la formación profesional integral. 
      
      
      
      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 De la ofimática tradicional a la productividad en la nube
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/2.png', alt='')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-2
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/t1/3.svg', alt='')
            .col-sm-12.col-lg-10
              p.mb-0 Históricamente, el uso de procesadores de texto, hojas de cálculo y clientes de correo electrónico se realizaba de forma local y fragmentada. El usuario debía guardar sus archivos en medios de almacenamiento físicos y el correo electrónico funcionaba principalmente como un buzón pasivo de recepción de mensajes. Sin embargo, el ecosistema de Microsoft 365 representa un salto cualitativo hacia la productividad en la nube, donde la colaboración en tiempo real, la sincronización en múltiples dispositivos y la integración de servicios son la norma.
          p.mb-0 En términos pedagógicos, este cambio de paradigma es equivalente a pasar de un modelo de estudio individual en una biblioteca cerrada a un espacio de cocreación en un laboratorio abierto. Microsoft Outlook 365, eje central de este componente, ya no opera como un simple lector de correspondencia, sino como un centro de mando unificado. Desde esta plataforma, un profesional puede revisar un mensaje, convertirlo inmediatamente en una tarea asignable, programar una reunión en el calendario con los actores implicados y vincular un documento compartido para su revisión conjunta. 

      p.mb-5(data-aos='fade-right') Este nivel de integración exige que el aprendiz no solo memorice la ubicación de los botones en una interfaz, sino que desarrolle un esquema mental sistémico, comprendiendo cómo una acción en el correo electrónico repercute en el calendario y en la gestión de tiempos de toda una organización.

      .row.justify-content-center.mb-0(data-aos='fade-right')
        .col-sm-12.col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 1. 
              span El núcleo de la seguridad
            figure.mb-0
              img(src='@/assets/curso/temas/t1/4.svg', alt='Infografía comparativa dividida en dos paneles. A la izquierda, la “Ofimática tradicional” (modelo aislado) se ilustra con una computadora de escritorio antigua, archivadores físicos, almacenamiento local en disco duro y correos unidireccionales. A la derecha, el “Ecosistema en la nube de Microsoft 365” (modelo conectado) muestra una laptop, tablet y celular sincronizados a una nube central brillante que integra aplicaciones como Outlook, Teams y SharePoint, destacando la colaboración en tiempo real, archivos compartidos y el acceso desde múltiples dispositivos.')









      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.2 Importancia de la gestión de la información en la cuarta revolución industrial
      
      p.mb-5(data-aos='fade-right') En el marco de las organizaciones 4.0, la sobreabundancia de datos es un desafío latente. Los profesionales se enfrentan a lo que se conoce en la psicología cognitiva como “infoxicación” o sobrecarga de información. En este escenario, la competencia más valorada no es la capacidad de retener datos, sino la habilidad para filtrar, organizar, priorizar y responder adecuadamente a la información que fluye a través de los canales digitales.

      .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/5.png')})` }")
        
        .bloque-texto-g__texto.p-4
          p.mb-0 Es pertinente plantear la siguiente pregunta orientadora: ¿Cómo puede un equipo de trabajo mantener la eficiencia cuando cada integrante recibe decenas de notificaciones, correos y alertas por hora? La respuesta se encuentra en la correcta parametrización y administración de las herramientas digitales. El dominio óptimo del correo electrónico Microsoft Outlook 365 y sus herramientas complementarias permite establecer filtros atencionales. Al emplear reglas de automatización, categorías por colores y listas de contactos segmentadas, el aprendiz construye un entorno digital estructurado que protege su tiempo y su concentración, facilitando el aprendizaje autónomo y el rendimiento profesional sostenido.   

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
