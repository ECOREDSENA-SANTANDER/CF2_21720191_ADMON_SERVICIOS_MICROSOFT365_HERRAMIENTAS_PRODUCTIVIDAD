<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos y procesos fundamentales relacionados con la administración estratégica del correo electrónico Outlook 365, la gestión de contactos y el uso del calendario, las tareas y las notas en contextos colaborativos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué caracteriza el paso de la ofimática tradicional a la productividad en la nube en Microsoft 365?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El uso exclusivo de archivos locales sin conexión a internet.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La colaboración en tiempo real, la sincronización en múltiples dispositivos y la integración de servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La eliminación del correo electrónico como canal de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La dependencia de archivadores físicos para compartir información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de los conceptos relacionados con la productividad en la nube y la integración de servicios de Microsoft 365.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la productividad en la nube y el ecosistema Microsoft 365.',
        },
        {
          id: 2,
          texto:
            'Frente a la infoxicación, ¿qué competencia resulta más valiosa en las organizaciones 4.0?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Memorizar toda la información recibida durante la jornada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Revisar el correo de manera reactiva cada pocos minutos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumentar la cantidad de notificaciones para no perder ningún dato.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Filtrar, organizar, priorizar y responder adecuadamente a la información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de los conceptos relacionados con la gestión estratégica de la información y la mitigación de la sobrecarga informativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la infoxicación y la priorización de la información digital.',
        },
        {
          id: 3,
          texto:
            'Dentro del componente formativo, Microsoft Outlook 365 se comprende principalmente como:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un simple lector de correspondencia sin relación con otras herramientas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un editor de textos orientado exclusivamente a documentos formales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un centro de mando unificado para gestionar comunicaciones, tareas y calendario.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Una herramienta exclusiva para videollamadas corporativas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la función sistémica de Outlook 365 dentro del ecosistema de productividad corporativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con Outlook 365 como plataforma integrada de trabajo.',
        },
        {
          id: 4,
          texto:
            '¿Qué característica debe tener el asunto de un correo corporativo bien estructurado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser descriptivo y conciso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Contener saludos informales para acercarse al destinatario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reemplazar completamente el cuerpo del mensaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incluir una sola palabra genérica como contexto principal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de los criterios de netiqueta y estructura formal del correo electrónico corporativo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el asunto y la redacción profesional del correo.',
        },
        {
          id: 5,
          texto:
            'En un envío profesional o académico, el campo CC se utiliza para:',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ocultar la identidad de los destinatarios secundarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener informadas a otras personas sobre el mensaje enviado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Bloquear automáticamente las respuestas al remitente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Enviar archivos adjuntos de gran tamaño sin restricciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio del uso pedagógico y profesional de los campos de destinatario en un correo electrónico.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los campos “Para” y “CC” en la comunicación formal.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito del método Inbox Zero adaptado a Outlook 365?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Borrar todos los correos sin analizarlos para liberar espacio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener la bandeja vacía por obligación sin procesar mensajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Procesar cada correo de manera consciente para decidir qué hacer con él.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Evitar el uso de carpetas, categorías y reglas de automatización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la organización consciente de la bandeja de entrada y del procesamiento estratégico del correo.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con Inbox Zero y la gestión avanzada de la bandeja de entrada.',
        },
        {
          id: 7,
          texto:
            '¿Qué aportan las categorías por código de colores a la gestión del correo electrónico?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permiten una clasificación visual transversal que agiliza la búsqueda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reemplazan la necesidad de redactar asuntos claros en los mensajes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminan todas las notificaciones del sistema de correo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Convierten automáticamente los correos en reuniones de calendario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la clasificación visual y de la organización transversal de la información en Outlook 365.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con categorías y etiquetas por colores.',
        },
        {
          id: 8,
          texto: 'Una regla de automatización en Outlook 365 se define como:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una contraseña temporal para validar el inicio de sesión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un mensaje prediseñado para responder siempre del mismo modo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una instrucción condicional que ejecuta acciones automáticas sobre los correos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un tipo especial de archivo adjunto protegido en la nube.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la automatización de flujos de trabajo mediante reglas en Outlook 365.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con reglas de automatización y pasos rápidos.',
        },
        {
          id: 9,
          texto:
            'Según el proceso de decisión frente a un correo nuevo, si el mensaje es accionable y toma menos de dos minutos, lo más adecuado es:',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Archivarlo para revisarlo al final de la semana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Responder de inmediato.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Imprimirlo para conservar evidencia física.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Convertirlo siempre en una nota sin atender el requerimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio del proceso de toma de decisiones frente a correos accionables y de respuesta rápida.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el diagrama de gestión de correos nuevos.',
        },
        {
          id: 10,
          texto:
            '¿Qué finalidad cumple una firma corporativa bien diseñada en Outlook 365?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ocultar la identidad del usuario para proteger su privacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Impedir el uso de archivos adjuntos en el correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reemplazar el asunto del mensaje en las comunicaciones formales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Estandarizar la presentación profesional y los datos de contacto.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la proyección de identidad profesional mediante la firma corporativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la firma de correo electrónico y su propósito institucional.',
        },
        {
          id: 11,
          texto:
            '¿Para qué se configuran las respuestas automáticas en Outlook 365?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reenviar todos los mensajes a otro buzón de manera permanente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para informar la ausencia y orientar sobre alternativas de contacto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para eliminar automáticamente los correos no leídos de la bandeja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para clasificar los contactos por cargo y departamento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la gestión de expectativas comunicativas mediante respuestas automáticas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la configuración de mensajes fuera de la oficina.',
        },
        {
          id: 12,
          texto:
            '¿Qué ventaja principal ofrece la creación de una lista de contactos en Outlook 365?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar copias locales de los correos en el equipo del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente el calendario institucional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reunir varias direcciones bajo un alias para facilitar envíos recurrentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Impedir la actualización posterior de los miembros del grupo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio del trabajo colaborativo mediante listas de contactos y grupos de distribución.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la creación y administración de listas de contactos.',
        },
        {
          id: 13,
          texto:
            'La integración de Outlook 365 con el directorio global de la organización permite:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Buscar instructores o personal sin agregarlos manualmente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Eliminar por completo la libreta de direcciones del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Usar Outlook 365 sin conexión a internet ni sincronización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Compartir contraseñas entre los miembros del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la interconectividad institucional y del uso del directorio global en Microsoft 365.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con contactos, personas y directorio global.',
        },
        {
          id: 14,
          texto:
            '¿Qué diferencia correctamente una cita de una reunión en el calendario de Microsoft 365?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cita convoca participantes y la reunión bloquea solo tiempo personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La reunión no admite invitaciones ni confirmaciones de asistencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ambas se utilizan exclusivamente para marcar días festivos institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cita bloquea tiempo personal y la reunión involucra a otros participantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la distinción operativa entre citas y reuniones en la gestión del calendario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los tipos de eventos del calendario interactivo.',
        },
        {
          id: 15,
          texto:
            '¿Cuándo resulta más pertinente utilizar un evento de todo el día en el calendario?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando se agenda una llamada de quince minutos con un compañero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando se requiere marcar un hito o fecha sin horario específico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cuando se necesita adjuntar un documento al correo del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando el evento solo involucra a una persona del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio del uso de eventos de todo el día para la gestión de hitos y fechas relevantes.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con citas, reuniones y eventos de todo el día.',
        },
        {
          id: 16,
          texto:
            '¿Para qué sirve el asistente para programación de Outlook 365?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para superponer agendas y encontrar horarios comunes para una reunión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Para convertir mensajes de correo en tareas asignables automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para cambiar la zona horaria del dispositivo del usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para crear categorías por colores en el calendario y el correo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la coordinación eficiente de reuniones mediante el asistente para programación.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la programación colaborativa de eventos.',
        },
        {
          id: 17,
          texto:
            'En la administración de tareas, ¿qué error común ayuda a corregir Outlook 365?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar el calendario para programar sesiones sincrónicas con el equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asignar fechas de vencimiento y recordatorios a las actividades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilizar la bandeja de entrada como lista permanente de pendientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Compartir actas de reunión con los participantes del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la conversión del correo en acciones concretas dentro de la herramienta de tareas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la administración de tareas y el seguimiento de proyectos.',
        },
        {
          id: 18,
          texto:
            'Según el principio de la “acción siguiente”, una tarea debe redactarse como:',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una instrucción clara, medible y ejecutable.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un proyecto amplio y abstracto sin delimitación operativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una cadena de correos acumulados dentro de la bandeja de entrada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una idea general sin fecha, contexto ni responsable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la formulación efectiva de tareas orientadas a la ejecución y al seguimiento.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la redacción de tareas y la acción siguiente.',
        },
        {
          id: 19,
          texto:
            '¿Qué valor aportan las notas digitales integradas con Outlook 365 y OneNote?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituyen completamente al calendario y a las reuniones del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sirven para capturar conocimiento y documentar acuerdos de forma ágil.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Solo almacenan imágenes y no permiten registrar texto o decisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Bloquean la escritura colaborativa durante las sesiones de trabajo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la captura ágil de conocimiento y de las actas dinámicas de reunión.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con notas digitales y documentación colaborativa.',
        },
        {
          id: 20,
          texto:
            'En las estrategias pedagógicas apoyadas en Outlook 365, un entorno digital organizado favorece principalmente:',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La dependencia permanente del instructor para recordar cada actividad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La improvisación constante en la gestión del tiempo y los entregables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La autogestión y la metacognición del aprendiz.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La eliminación del trabajo colaborativo entre los integrantes del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Demuestra un adecuado dominio de la relación entre organización digital, aprendizaje autónomo y metacognición.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las estrategias pedagógicas apoyadas en Outlook 365.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la administración de la mensajería, los contactos, el calendario y las herramientas complementarias de Outlook 365.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
