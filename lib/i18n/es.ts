import type { Dictionary } from "./types";

export const es: Dictionary = {
  meta: {
    title: "MyDentist San Carlos | Dentista para toda la familia en San Carlos, Sonora",
    description:
      "Dentista en San Carlos, Sonora. Cita la misma semana, mensualidades sin intereses, atención para niños y adultos. Agenda por WhatsApp con el Dr. Daniel Martínez y la Dra. Carolina García.",
    ogAlt: "Consultorio MyDentist en San Carlos, Sonora",
    whatsappMessage:
      "Hola MyDentist, quiero agendar una cita. ¿Qué día tienen disponible esta semana?",
    whatsappFollowUp:
      "Hola MyDentist, acabo de mandar una solicitud de cita por la página y quiero confirmar.",
  },

  nav: {
    links: [
      { href: "#services", label: "Servicios" },
      { href: "#pricing", label: "Planes de pago" },
      { href: "#doctors", label: "Los doctores" },
      { href: "#faq", label: "Preguntas" },
    ],
    cta: "Agenda por WhatsApp",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    switchLocale: "Switch to English",
    homeLabel: "MyDentist, volver al inicio",
  },

  hero: {
    headline: "Tu sonrisa, en buenas manos.",
    support:
      "Dentista en San Carlos para toda la familia. Cita esta misma semana, precio claro desde la primera consulta y mensualidades sin intereses. Escríbenos por WhatsApp y listo.",
    primary: "Agenda por WhatsApp",
    secondary: { label: "Ver servicios", href: "#services" },
    image: {
      src: "/placeholder/hero-clinic-2400x1600.jpg",
      alt: "Consultorio de MyDentist en San Carlos, Sonora",
    },
  },

  trust: [
    { value: "12", label: "años atendiendo familias de San Carlos y Guaymas" },
    { value: "4,000+", label: "pacientes, muchos vienen con toda la familia" },
    { value: "3D", label: "radiografía digital y laboratorio en el consultorio" },
    { value: "5 años", label: "de garantía por escrito en coronas e implantes" },
  ],

  services: {
    eyebrow: "Servicios",
    headline: "Todo lo que tu familia necesita, en un solo lugar.",
    items: [
      {
        id: "cleaning",
        name: "Limpieza y revisión",
        description:
          "Limpieza profunda, revisión completa y radiografía digital en una sola cita de 45 minutos. Sin dolor y sin sorpresas en el precio.",
      },
      {
        id: "kids",
        name: "Dentista para niños",
        description:
          "Primera visita sin instrumentos, solo para que conozcan el lugar. Selladores, limpieza y resinas con paciencia y sin regaños.",
      },
      {
        id: "crowns",
        name: "Resinas y coronas",
        description:
          "Resinas del color de tu diente y coronas de zirconia hechas aquí mismo. Sale con su corona el mismo día, sin esperar semanas.",
      },
      {
        id: "ortho",
        name: "Ortodoncia",
        description:
          "Brackets y alineadores para adolescentes y adultos. Mensualidades fijas desde el primer día, sin pagos escondidos.",
      },
      {
        id: "implants",
        name: "Implantes dentales",
        description:
          "Recupera el diente que perdiste con implantes de marca suiza y alemana. Planeado en 3D y con garantía por escrito de cinco años.",
      },
      {
        id: "whitening",
        name: "Blanqueamiento",
        description:
          "Blanqueamiento en consultorio en hora y media. Te vas con tu kit para mantenerlo en casa.",
      },
    ],
    cta: "Pregunta por un servicio en WhatsApp",
  },

  why: {
    eyebrow: "Por qué MyDentist",
    headline: "Lo que sí importa cuando buscas dentista para tu familia.",
    items: [
      {
        eyebrow: "Tu tiempo",
        headline: "Cita esta misma semana, a la hora que te acomode.",
        body:
          "Abrimos de nueve a siete entre semana y los sábados hasta las dos, para que no tengas que pedir permiso en el trabajo. Escríbenos por WhatsApp, te contestamos en minutos y te apartamos la hora. Si es urgencia, te vemos el mismo día.",
        image: {
          src: "/placeholder/why-schedule-1600x1200.jpg",
          alt: "Recepción de MyDentist con el horario de atención",
        },
      },
      {
        eyebrow: "Tu bolsillo",
        headline: "Precio claro desde la primera cita. Mensualidades sin intereses.",
        body:
          "Antes de empezar cualquier tratamiento te damos el precio completo por escrito. Nada de que 'luego vemos'. Puedes pagar a 3, 6 o 12 meses sin intereses con tarjeta, y aceptamos seguros dentales. Tú decides cómo te conviene.",
        image: {
          src: "/placeholder/why-payments-1600x1200.jpg",
          alt: "Presupuesto por escrito entregado a un paciente",
        },
      },
      {
        eyebrow: "Tu familia",
        headline: "Un solo consultorio para todos, desde los peques hasta los abuelos.",
        body:
          "Agendamos a toda la familia el mismo día, uno tras otro, para que hagas un solo viaje. A los niños los tratamos con calma y sin prisa. El Dr. Daniel y la Dra. Carolina conocen el historial de cada quien, y en cada cita te atienden ellos, no alguien distinto cada vez.",
        image: {
          src: "/placeholder/why-family-1600x1200.jpg",
          alt: "Familia en la sala de espera de MyDentist",
        },
      },
    ],
  },

  beforeAfter: {
    eyebrow: "Resultados",
    headline: "Casos reales, hechos aquí en San Carlos.",
    support:
      "Arrastra la línea para comparar. Todos los casos son de pacientes de la región atendidos en MyDentist.",
    beforeLabel: "Antes",
    afterLabel: "Después",
    sliderLabel: "Comparar antes y después",
    cases: [
      {
        title: "Ocho carillas de porcelana",
        detail: "Arcada superior, dos citas, paciente de Guaymas",
        before: { src: "/placeholder/ba-veneers-before-1200x900.jpg", alt: "Sonrisa antes de las carillas" },
        after: { src: "/placeholder/ba-veneers-after-1200x900.jpg", alt: "Sonrisa después de ocho carillas de porcelana" },
      },
      {
        title: "Implante y corona",
        detail: "Diente frontal, colocación inmediata, paciente de San Carlos",
        before: { src: "/placeholder/ba-implant-before-1200x900.jpg", alt: "Diente frontal faltante antes del implante" },
        after: { src: "/placeholder/ba-implant-after-1200x900.jpg", alt: "Diente frontal restaurado con implante y corona" },
      },
      {
        title: "Blanqueamiento en consultorio",
        detail: "Hora y media, paciente de Empalme",
        before: { src: "/placeholder/ba-whitening-before-1200x900.jpg", alt: "Dientes antes del blanqueamiento" },
        after: { src: "/placeholder/ba-whitening-after-1200x900.jpg", alt: "Dientes después del blanqueamiento profesional" },
      },
    ],
  },

  doctors: {
    eyebrow: "Tus dentistas",
    headline: "Dos doctores, un consultorio. Te atienden ellos en cada cita.",
    contactLabel: "Escríbele a {name} por WhatsApp",
    items: [
      {
        id: "daniel",
        name: "Dr. Daniel Martínez Corona",
        role: "Odontología general, estética e implantes",
        credentials: [
          "Cirujano Dentista, Universidad Autónoma de Guadalajara",
          "Formación en implantología, New York University College of Dentistry",
          "Miembro de la Asociación Dental Mexicana",
          "Cédula profesional y licencia sanitaria COFEPRIS vigentes",
        ],
        quote:
          "Estudié en Nueva York y me pude haber quedado. Me regresé a San Carlos porque quería el consultorio al que yo mandaría a mi propia familia. Aquí me ves a mí en cada cita, desde la primera limpieza de tus hijos hasta lo que necesiten tus papás.",
        portrait: {
          src: "/placeholder/doctor-daniel-portrait-1200x1500.jpg",
          alt: "Retrato del Dr. Daniel Martínez Corona",
        },
      },
      {
        id: "carolina",
        name: "Dra. Carolina García Albelais",
        role: "Odontología general y familiar",
        credentials: [
          "Cirujana Dentista, Universidad Autónoma de Guadalajara",
          "Enfoque en prevención y atención a niños",
          "Miembro de la Asociación Dental Mexicana",
          "Cédula profesional y licencia sanitaria COFEPRIS vigentes",
        ],
        quote:
          "Casi todos mis pacientes llegan nerviosos la primera vez. Mi trabajo es que salgan tranquilos, entiendan qué les hicimos y regresen sin miedo. Eso aplica igual para un niño de seis años que para tu mamá.",
        portrait: {
          src: "/placeholder/doctor-carolina-portrait-1200x1500.jpg",
          alt: "Retrato de la Dra. Carolina García Albelais",
        },
      },
    ],
  },

  process: {
    eyebrow: "Cómo funciona",
    headline: "Cuatro pasos, sin vueltas.",
    steps: [
      {
        title: "Escríbenos por WhatsApp",
        body: "Nos dices qué necesitas y qué días te acomodan. Te contestamos en minutos y te apartamos la cita, casi siempre esta misma semana.",
      },
      {
        title: "Revisión y precio por escrito",
        body: "En la primera cita revisamos, tomamos radiografía digital y te damos el plan completo con precio. Sin compromiso.",
      },
      {
        title: "Eliges cómo pagar",
        body: "De contado, con seguro o a mensualidades sin intereses. Lo dejamos claro antes de empezar.",
      },
      {
        title: "Tratamiento y seguimiento",
        body: "Empezamos ese mismo día si quieres. Después, cualquier duda la resuelves por WhatsApp directo con el consultorio.",
      },
    ],
  },

  localeBlock: {
    eyebrow: "Planes de pago",
    headline: "Que el dinero no sea lo que te detenga.",
    support:
      "Sabemos que un tratamiento dental no siempre estaba en el presupuesto del mes. Por eso te damos opciones claras desde la primera cita, para que decidas con calma.",
    facts: [
      { label: "Mensualidades", value: "3, 6 y 12 meses sin intereses con tarjetas participantes" },
      { label: "Seguros", value: "Aceptamos seguros dentales. Tráenos tu póliza y te decimos cuánto cubre antes de empezar" },
      { label: "Formas de pago", value: "Efectivo, tarjeta de débito y crédito, transferencia. Factura si la necesitas" },
      { label: "Familia", value: "Citas seguidas para toda la familia el mismo día y precio especial en limpieza familiar" },
    ],
    plans: [
      {
        title: "Mensualidades sin intereses",
        body: "Ortodoncia, coronas e implantes a 3, 6 o 12 meses con tarjeta. El precio total es el mismo que de contado, ni un peso más.",
      },
      {
        title: "Aceptamos seguros",
        body: "Trabajamos con las aseguradoras dentales más comunes en Sonora. Nosotros hacemos el trámite y tú solo pagas la diferencia, si la hay.",
      },
      {
        title: "Agenda familiar",
        body: "Un solo viaje al consultorio para todos. Agendamos a tus hijos, a ti y a tus papás uno tras otro, y el precio de las limpiezas baja cuando vienen juntos.",
      },
    ],
    cta: "Pregunta por tu plan de pago en WhatsApp",
  },

  testimonials: {
    eyebrow: "Pacientes",
    headline: "Lo que dicen las familias de aquí.",
    items: [
      {
        quote:
          "Llevé a mis tres hijos el mismo sábado y salimos en hora y media. A la más chiquita ni cuenta se dio de que le hicieron limpieza. Y el precio fue el que me dijeron por WhatsApp, exacto.",
        name: "Mariana G.",
        place: "Guaymas, Sonora",
        treatment: "Limpieza familiar",
      },
      {
        quote:
          "Traía una muela que ya no aguantaba. Escribí un martes en la noche y el miércoles a las diez ya estaba en el sillón. Me dieron el precio por escrito antes de tocarme y lo pagué a seis meses sin intereses.",
        name: "Luis A.",
        place: "Empalme, Sonora",
        treatment: "Endodoncia y corona",
      },
      {
        quote:
          "Mi mamá tenía años sin ir al dentista por miedo. El Dr. Martínez se tomó el tiempo de explicarle todo con calma y ahora hasta ella pide su cita. Toda la familia nos atendemos aquí.",
        name: "Familia Enríquez",
        place: "San Carlos, Sonora",
        treatment: "Implantes y limpiezas",
      },
    ],
  },

  location: {
    eyebrow: "El consultorio",
    headline: "En Sector Crestón, San Carlos, a unos minutos de la marina.",
    addressLabel: "Dirección",
    hoursLabel: "Horario",
    days: { "mon-fri": "Lunes a viernes", sat: "Sábado", sun: "Domingo" },
    closed: "Cerrado",
    mapTitle: "Mapa con la ubicación de MyDentist en San Carlos, Sonora",
    openInMaps: "Abrir en Google Maps",
    whatsapp: "Escríbenos por WhatsApp",
    call: "Llamar al consultorio",
  },

  faq: {
    eyebrow: "Preguntas",
    headline: "Lo que nos preguntan antes de agendar.",
    items: [
      {
        q: "¿Cuánto cuesta la consulta?",
        a: "La revisión con radiografía digital tiene un precio fijo que te decimos por WhatsApp antes de venir. Si decides hacer el tratamiento con nosotros ese mismo día, la consulta se descuenta del total.",
      },
      {
        q: "¿Puedo pagar a mensualidades?",
        a: "Sí. Con tarjetas de crédito participantes puedes pagar a 3, 6 o 12 meses sin intereses. El precio es el mismo que de contado. Te lo explicamos antes de empezar cualquier tratamiento.",
      },
      {
        q: "¿Aceptan seguros dentales?",
        a: "Sí, trabajamos con las aseguradoras dentales más comunes en Sonora. Mándanos una foto de tu póliza por WhatsApp y te decimos qué cubre y cuánto te tocaría pagar, si algo.",
      },
      {
        q: "¿Qué tan rápido me pueden dar cita?",
        a: "Casi siempre esta misma semana. Si traes dolor o una urgencia, te atendemos el mismo día. Escríbenos por WhatsApp y te contestamos en minutos con las horas disponibles.",
      },
      {
        q: "¿Atienden niños? ¿Desde qué edad?",
        a: "Sí, desde que sale el primer diente. La primera visita es solo para que conozcan el consultorio y se suban al sillón sin miedo. Trabajamos con calma, sin regaños y sin prisa.",
      },
      {
        q: "¿Tienen horario en sábado o después del trabajo?",
        a: "Sí. Entre semana abrimos hasta las siete de la tarde y los sábados de nueve a dos, para que no tengas que pedir permiso en el trabajo ni sacar a los niños de la escuela.",
      },
      {
        q: "¿Dan garantía?",
        a: "Sí, por escrito. Cinco años en coronas, puentes e implantes, y dos años en resinas y carillas. Si algo falla, lo arreglamos aquí sin costo.",
      },
      {
        q: "¿Me van a cobrar algo que no me dijeron?",
        a: "No. Antes de empezar te damos el plan completo con precio por escrito, y ese es el precio. Si en el camino aparece algo distinto, paramos, te explicamos y tú decides.",
      },
    ],
  },

  finalCta: {
    headline: "Escríbenos hoy. Tu cita queda esta semana.",
    support:
      "Lo más rápido es WhatsApp. Te contestamos en minutos con las horas disponibles y el precio de la consulta.",
    whatsapp: "Agendar por WhatsApp",
    whatsappHint: "Abre WhatsApp con el mensaje ya escrito",
    form: {
      title: "O déjanos tus datos y nosotros te escribimos",
      name: "Tu nombre",
      phone: "Tu WhatsApp o teléfono",
      service: "¿Qué necesitas?",
      servicePlaceholder: "Elige un servicio",
      date: "Qué día te acomoda",
      submit: "Pedir mi cita",
      submitting: "Enviando tu solicitud",
      successTitle: "Listo. Te escribimos por WhatsApp en menos de una hora en horario de consultorio.",
      successBody: "Si quieres adelantar, mándanos un mensaje ahorita y te apartamos la hora de una vez.",
      successWhatsapp: "Seguir por WhatsApp",
      errorTitle: "Hay que revisar un dato",
      errors: {
        name: "Dinos tu nombre, por favor.",
        phone: "Escribe un número de diez dígitos donde te podamos contactar.",
        service: "Elige el servicio que necesitas.",
        date: "Elige una fecha de hoy en adelante.",
        generic: "No se pudo enviar. Inténtalo de nuevo o escríbenos por WhatsApp.",
      },
      privacy: "Solo usamos tus datos para contestarte. Nada de promociones.",
    },
    serviceOptions: [
      { id: "cleaning", label: "Limpieza y revisión" },
      { id: "kids", label: "Cita para mi hijo o hija" },
      { id: "crowns", label: "Resina o corona" },
      { id: "ortho", label: "Ortodoncia" },
      { id: "implants", label: "Implante" },
      { id: "whitening", label: "Blanqueamiento" },
      { id: "rootcanal", label: "Dolor o endodoncia" },
      { id: "other", label: "Otra cosa" },
    ],
  },

  mobileBar: { whatsapp: "WhatsApp", call: "Llamar" },

  footer: {
    tagline: "Dentista en San Carlos, Sonora, para las familias de aquí y para quienes vienen de lejos.",
    nav: "Secciones",
    contact: "Contacto",
    legal: "Legal",
    privacy: "Aviso de privacidad",
    rights: "Todos los derechos reservados.",
    instagram: "MyDentist en Instagram",
    facebook: "MyDentist en Facebook",
  },

  privacy: {
    title: "Aviso de privacidad",
    updated: "Última actualización: septiembre de 2026",
    body: [
      "MyDentist, con domicilio en San Carlos Nuevo Guaymas, Sonora, México, es responsable del tratamiento de los datos personales que nos compartes por esta página, WhatsApp, teléfono o en el consultorio.",
      "Recabamos tu nombre, teléfono, correo, el servicio que solicitas y las imágenes clínicas que nos mandes. Los usamos únicamente para contestarte, preparar tu plan de tratamiento, agendar citas y darte atención dental.",
      "Tu expediente clínico se resguarda conforme a la NOM-004-SSA3-2012 y a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. No vendemos ni compartimos tus datos con terceros para fines publicitarios.",
      "Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición (derechos ARCO) escribiendo a hola@mydentist.mx. Te respondemos en un plazo máximo de veinte días hábiles.",
    ],
  },
};
