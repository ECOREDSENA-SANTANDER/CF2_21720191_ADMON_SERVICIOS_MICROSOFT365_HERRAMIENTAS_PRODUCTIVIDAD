<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Gestión de contactos y construcción de redes de colaboración
        
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.br-1.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/1.png')})` }")
        
        .bloque-texto-g__texto.p-4
          p.mb-0 El correo electrónico carece de utilidad sin una red de destinatarios gestionada eficientemente. El resultado de aprendizaje del curso especifica explícitamente la necesidad de realizar “operaciones con contactos” y administrar la “lista de contactos”. Esta gestión va más allá del simple almacenamiento de direcciones; representa la construcción de una agenda digital que facilita la colaboración ágil, un componente vital en cualquier proyecto formativo o laboral.
        
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Creación, administración y estructuración de listas de contactos
      
      .bg-full-width.bg-color-4.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-8
              p.mb-3 En el ecosistema de Microsoft 365, el módulo de “Contactos” o “Personas” actúa como una base de datos relacional personal. Al almacenar un contacto, el usuario no solo guarda un nombre y una dirección de correo, sino que tiene la capacidad de documentar múltiples campos: números telefónicos, cargos, departamentos, ubicación física e incluso notas adicionales de contexto.

              p.mb-3 Desde una perspectiva pedagógica, estructurar correctamente un contacto fomenta el orden y la atención al detalle. En un escenario de educación virtual, donde el contacto presencial es limitado, contar con el perfil completo de un compañero, incluyendo su rol dentro de un proyecto colaborativo, agiliza las interacciones. La estructuración adecuada requiere que el aprendiz comprenda la importancia de la actualización constante de esta libreta de direcciones, garantizando que la información almacenada mantenga su integridad y fiabilidad a lo largo del tiempo. 

              p.mb-0 Además, Outlook 365 se integra estrechamente con el directorio activo de la organización (en el caso de aprendices, el directorio global del SENA). Esto permite realizar búsquedas rápidas de instructores o personal administrativo sin necesidad de haberlos agregado previamente de forma manual, optimizando los tiempos de búsqueda y fomentando la interconectividad institucional.

            .col-sm-12.col-lg-4.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t3/2.svg', alt='')



      
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Operaciones avanzadas, grupos de distribución y su impacto en el trabajo colaborativo
      
      .row.justify-content-center.mb-4.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.svg', alt='')  
        .col-sm-12.col-lg-11
            p.mb-0 Una de las operaciones más potentes para optimizar el trabajo y dar cumplimiento a la articulación pedagógica del manejo de la plataforma, es la creación de listas de contactos (anteriormente grupos de distribución personales). Esta función permite agrupar múltiples direcciones de correo electrónico bajo un único nombre o alias.
      p.mb-4(data-aos='fade-right') En lugar de escribir individualmente los correos electrónicos de veinte personas distintas cada vez que se necesita enviar una actualización de proyecto, el usuario redacta el mensaje dirigido a la lista consolidada (por ejemplo, “Equipo de Desarrollo Frontend”). La aplicación práctica de este principio reduce exponencialmente el riesgo de omitir a un miembro crucial en la cadena de comunicación, garantizando que el flujo de información sea simétrico y equitativo para todos los involucrados.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')
        .col-sm-12.col-lg-9
          .bg-color-2.p-5.br-2.mb-4
            .row.justify-content-center.mb-0
              .col-sm-12.col-lg-4.d-none.d-lg-block
                img(src='@/assets/curso/temas/t3/5.svg', alt='')
              .col-sm-12.col-lg-8
                .bg-color-3.p-2.mb-3
                  h4.mb-0.text-white Ejemplo de aplicación en contextos reales
                p.mb-0 Imaginemos una situación de diseño web donde un equipo de cinco aprendices SENA debe presentar semanalmente los avances de usabilidad de una plataforma a un comité evaluador conformado por tres instructores y dos expertos externos. El administrador de comunicaciones del equipo creará en su Outlook 365 una lista de contactos denominada “Comité Evaluación Web”.
          p.mb-0 Durante las seis semanas del proyecto, todas las actas de reunión, los prototipos navegables y las solicitudes de retroalimentación se enviarán a esta lista. Si a mitad del proyecto se incorpora un nuevo instructor al comité, el aprendiz solo debe actualizar la lista de contactos añadiendo al nuevo miembro; en los envíos futuros, este recibirá la información automáticamente. Esto demuestra cómo el dominio técnico del software se traduce en una mejora tangible en la eficiencia de los procesos operativos de un entorno formativo profesional.


      p.mb-5(data-aos='fade-right') Se invita al aprendiz a explorar este pódcast sobre la gestión estratégica de contactos y redes de colaboración. En este recurso, se analiza cómo el manejo técnico de agendas y listas de distribución en Outlook 365 optimiza el tiempo y garantiza una comunicación eficiente y profesional en entornos laborales y formativos.

      img.mb-0.d-none.d-lg-block(src='@/assets/curso/temas/t3/6.svg')(data-aos='fade-right')
      .row.justify-content-center.g-0.bg-color-5.mb-5(data-aos='fade-right')
        .col-12
          .tarjeta.clr--pink.p-4.rounded-0.h-100
            .tarjeta.bg-white.p-4
              TarjetaAudio.color-acento-botones.mb-0.p-4(
              texto="Pódcast: El arte de gestionar redes de colaboración"
              :audio="podcast"
          )

















  </template>
<script>
import podcast from '@/assets/actividad/audio/success.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
    podcast: podcast,
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
