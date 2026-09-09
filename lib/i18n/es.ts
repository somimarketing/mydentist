import type { Dictionary } from "./en";

/**
 * Copy en español: familias de San Carlos, Guaymas y la región.
 *
 * No es una traducción del inglés. El visitante de habla hispana ya confía en
 * el concepto de ir al dentista: lo que lo detiene es el costo, no saber si le
 * van a cobrar algo que no le dijeron, y encontrar hora sin faltar al trabajo.
 * Por eso el argumento cambia: precio por escrito, mensualidades, cita esta
 * misma semana y atención para toda la familia.
 *
 * Español de Sonora, con "tú". [DATO] marca un dato que solo Daniel puede
 * confirmar; ver docs/pending-from-daniel.md. Nunca se inventa una cifra.
 */
export const es: Dictionary = {
  meta: {
    title: "MyDentist | Dentista en San Carlos, Sonora, para toda la familia",
    description:
      "Dentista en San Carlos, Sonora. Cita esta misma semana, precio por escrito desde la primera consulta y mensualidades sin intereses. Agenda por WhatsApp con el Dr. Daniel y la Dra. Carolina.",
    ogTitle: "MyDentist | Dentista en San Carlos, Sonora",
    ogDescription:
      "Cita esta misma semana, precio claro desde la primera consulta y mensualidades sin intereses. Agenda por WhatsApp.",
  },

  whatsapp: {
    general: "Hola MyDentist, quiero preguntar por un tratamiento.",
    consult: "Hola MyDentist, quiero agendar una cita. ¿Qué día tienen disponible esta semana?",
    quote: "Hola MyDentist, quiero saber cuánto me saldría. Les puedo mandar una foto.",
  },

  common: {
    bookConsult: "Agenda tu cita",
    whatsapp: "WhatsApp",
    freeInEnglish: "Te contestamos hoy",
    messageTheClinic: "Escríbele al consultorio",
    switchToLight: "Cambiar a modo claro",
    switchToDark: "Cambiar a modo oscuro",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    home: "MyDentist, ir al inicio",
    switchLanguage: "View this page in English",
  },

  nav: {
    groups: [
      {
        title: "Tratamientos",
        description: "Limpieza, resinas, coronas, ortodoncia e implantes.",
        items: [
          { title: "Limpieza y revisión", href: "#pricing" },
          { title: "Resinas y coronas", href: "#pricing" },
          { title: "Ortodoncia", href: "#pricing" },
          { title: "Implantes dentales", href: "#pricing" },
        ],
      },
      {
        title: "Por qué MyDentist",
        description: "Cómo funciona, cuánto cuesta y quién te atiende.",
        items: [
          { title: "Cómo funciona", href: "#how" },
          { title: "Planes de pago", href: "#compare" },
          { title: "Casos reales", href: "#cases" },
          { title: "Conoce a tus dentistas", href: "#dentists" },
        ],
      },
    ],
    links: [
      { title: "Precios", href: "#pricing" },
      { title: "Preguntas", href: "#faq" },
    ],
  },

  hero: {
    /* El itálico cae en "Tu", igual que el logo pone "My" en serif itálica. */
    headlineLead: "",
    headlineSig: "Tu",
    headlineTail: "sonrisa, en buenas manos.",
    support:
      "Dentista en San Carlos para toda la familia. Cita esta misma semana, precio por escrito desde la primera consulta y mensualidades sin intereses.",
    scroll: "Baja",
    scrollLabel: "Ir a la siguiente sección",
  },

  /* Reseñas de Google en español. Solo hay dos por ahora: no se inventa una
     tercera. [DATO] Pedir a los pacientes de la región que dejen reseña. */
  reviewsCarousel: {
    next: "Siguiente",
    items: [
      {
        quote:
          "Muchas gracias por su atención, doctora Carolina. ¡Quedé muy contenta con mi blanqueamiento!",
        name: "Elsa Noelia Ruiz Suchilt",
        meta: "Reseña de Google",
      },
      {
        quote:
          "Excelente servicio, un equipo amable y profesional, con un ambiente muy cómodo y agradable.",
        name: "Guillermo Soberón",
        meta: "Reseña de Google",
      },
    ],
  },

  proof: [
    {
      title: "Cita esta misma semana.",
      body:
        "Escríbenos por WhatsApp y te apartamos la hora. Si traes dolor, te vemos el mismo día.",
    },
    {
      title: "El precio, por escrito, antes de empezar.",
      body:
        "Te decimos el costo completo desde la primera cita. Nada de que luego vemos, y nada que no te hayamos dicho.",
    },
    {
      title: "Toda la familia con el mismo dentista.",
      body:
        "Agendamos a tus hijos, a ti y a tus papás el mismo día, para que hagas un solo viaje.",
    },
  ],

  how: {
    eyebrow: "Cómo funciona",
    headline: "Cuatro pasos, sin vueltas",
    support: "Sin letras chiquitas. Tú decides en cada paso, con el precio a la vista.",
    steps: [
      {
        title: "Escríbenos por WhatsApp",
        body: "Nos dices qué necesitas y qué días te acomodan. Te contestamos y te apartamos la cita.",
      },
      {
        title: "Revisión y precio por escrito",
        body: "Revisamos, tomamos radiografía y te damos el plan completo con precio. Sin compromiso.",
      },
      {
        title: "Eliges cómo pagar",
        body: "De contado o a mensualidades sin intereses [DATO]. Lo dejamos claro antes de empezar.",
      },
      {
        title: "Tratamiento y seguimiento",
        body: "Empezamos ese mismo día si quieres. Después cualquier duda la resuelves por WhatsApp.",
      },
    ],
  },

  /* El mismo componente que en inglés compara San Carlos contra una clínica
     de Estados Unidos. Aquí eso no le dice nada a una familia de Guaymas, así
     que la tabla compara lo único que sí le importa: pagar de contado o a
     meses. Las filas que salen iguales en las dos columnas son el argumento:
     diferir el pago no te cuesta más ni te da menos. */
  compare: {
    headline: "Lo que cuesta, y cómo lo puedes pagar",
    support:
      "Pagar a meses no cambia el precio, ni el material, ni la garantía. Aquí está el desglose.",
    treatmentsLabel: "Elige tratamiento",
    colOurs: { name: "A mensualidades", sub: "Sin intereses" },
    colTheirs: { name: "De contado", sub: "Un solo pago" },
    tabs: [
      { id: "implant", label: "Implante", inSentence: "implante" },
      { id: "crown", label: "Corona", inSentence: "corona" },
      { id: "aligners", label: "Ortodoncia", inSentence: "tratamiento de ortodoncia" },
    ],
    rows: [
      {
        title: "Precio total",
        description: "Lo que pagas por tu {treatment}, todo incluido",
        ours: "$[DATO]",
        theirs: "$[DATO]",
      },
      {
        title: "Mensualidad",
        description: "Cuánto te toca cada mes",
        ours: "$[DATO]",
        theirs: "No aplica",
      },
      {
        title: "Intereses",
        description: "Cuánto más pagas por diferirlo",
        ours: "Sin intereses [DATO]",
        theirs: "No aplica",
      },
      {
        title: "Plazo",
        description: "En cuántos meses lo terminas de pagar",
        ours: "[DATO] meses",
        theirs: "Un solo pago",
      },
      {
        title: "Garantía",
        description: "Qué cubre y por cuánto tiempo",
        ours: "[DATO] años",
        theirs: "[DATO] años",
      },
      {
        title: "Mismo material, mismo doctor",
        description: "Las mismas marcas y el mismo dentista, pagues como pagues",
        ours: true,
        theirs: true,
      },
    ],
  },

  cases: {
    headlineLead: "Sonrisas reales,",
    headlineAccent: "pacientes de aquí.",
    support:
      "Cada caso es de un paciente de la región, atendido en este consultorio. Nada de fotos de banco.",
    cta: "Ver más casos",
    items: [
      { label: "Implantes de arcada completa · [DATO ciudad]", meta: "[DATO]" },
      { label: "Implante unitario · [DATO ciudad]", meta: "[DATO]" },
      { label: "Ortodoncia · [DATO ciudad]", meta: "[DATO]" },
      { label: "Coronas · [DATO ciudad]", meta: "[DATO]" },
    ],
  },

  stats: {
    headline: "Los números",
    support: "Resultados, no publicidad.",
    items: [
      { label: "Implantes colocados", sub: "Desde [DATO]", value: "[DATO]", source: "Expediente del consultorio" },
      { label: "Años cuidando sonrisas", sub: "En San Carlos", value: "[DATO]", source: "Consultorio" },
      {
        label: "Familias que se atienden aquí",
        sub: "Últimos 12 meses",
        value: "[DATO]",
        source: "Consultorio",
      },
    ],
  },

  dentists: {
    headline: "Conoce a tus dentistas",
    support: "Ellos te atienden en cada cita.",
    roles: {
      daniel: "Implantes y odontología estética",
      carolina: "Odontología general y familiar, socia del consultorio",
    },
  },

  wall: {
    citiesLabel: "Pacientes de",
    cities: ["San Carlos [DATO]", "Guaymas [DATO]", "Empalme [DATO]"],
    ratingLabel: "5 de 5 estrellas",
    googleReview: "Reseña de Google",
    featured: {
      quote:
        "Muchas gracias por su atención, doctora Carolina. ¡Quedé muy contenta con mi blanqueamiento!",
      name: "Elsa Noelia Ruiz Suchilt",
      meta: "Reseña de Google",
    },
    items: [
      {
        quote:
          "Excelente servicio, un equipo amable y profesional, con un ambiente muy cómodo y agradable.",
        name: "Guillermo Soberón",
        meta: "Reseña de Google",
        date: "",
      },
    ],
  },

  pricing: {
    headline: "Precios claros, sin letras chiquitas.",
    support: "Lo que cuesta, y en cuántos meses lo puedes pagar.",
    consultNote: "Primera revisión con radiografía.",
    consultSub: "Te decimos el precio antes de venir.",
    financingToggle: { label: "Ver mensualidades", full: "De contado", financing: "A meses" },
    currency: "MXN",
    /* En español la segunda línea no es un precio que se está venciendo,
       es la mensualidad. Sin tachar. */
    compare: { prefix: "o", suffix: "al mes sin intereses [DATO]", strike: false },
    plans: [
      {
        name: "Implante dental",
        blurb: "Recupera el diente que perdiste, para siempre.",
        priceFull: "$[DATO]",
        priceFinancing: "$[DATO] al mes",
        usPrice: "$[DATO] al mes",
        features: [
          "Implante de marca premium [DATO]",
          "Corona incluida [DATO]",
          "[DATO] años de garantía",
        ],
        cta: "Agenda tu cita",
      },
      {
        name: "Arcada completa",
        blurb: "Dientes fijos otra vez, planeados en 3D.",
        priceFull: "$[DATO]",
        priceFinancing: "$[DATO] al mes",
        usPrice: "$[DATO] al mes",
        features: [
          "[DATO] implantes por arcada",
          "Dientes fijos, no removibles [DATO]",
          "[DATO] años de garantía",
        ],
        cta: "Agenda tu cita",
      },
      {
        name: "Ortodoncia",
        blurb: "Brackets o alineadores. El precio depende de tu caso.",
        priceFull: "$[DATO]",
        priceFinancing: "$[DATO] al mes",
        usPrice: "$[DATO] al mes",
        features: [
          "Plan completo de tratamiento [DATO]",
          "Citas de control incluidas [DATO]",
          "Retenedores incluidos [DATO]",
        ],
        cta: "Pregunta por tu caso",
      },
    ],
  },

  faq: {
    headline: "Lo que nos preguntan antes de agendar.",
    support:
      "Lo que más nos preguntan por WhatsApp. Si te queda otra duda, escríbenos y te contestamos.",
    items: [
      {
        q: "¿Cuánto cuesta la consulta?",
        a: "La revisión con radiografía tiene un precio fijo, y te lo decimos por WhatsApp antes de que vengas. [DATO] Confirmar el monto y si se descuenta del tratamiento.",
      },
      {
        q: "¿Puedo pagar a mensualidades?",
        a: "[DATO]. Cuando quede confirmado el plan, aquí va el número de meses, con qué tarjetas y si lleva intereses. El precio total no cambia por diferirlo.",
      },
      {
        q: "¿Aceptan seguros dentales?",
        a: "[DATO]. Mándanos una foto de tu póliza por WhatsApp y te decimos qué cubre y cuánto te tocaría pagar, antes de empezar.",
      },
      {
        q: "¿Qué tan rápido me pueden dar cita?",
        a: "Casi siempre esta misma semana, y el mismo día si traes dolor. Escríbenos por WhatsApp y te decimos las horas que quedan libres. [DATO] Confirmar el horario del consultorio.",
      },
      {
        q: "¿Atienden niños? ¿Desde qué edad?",
        a: "Sí. La primera visita es solo para que conozcan el consultorio y se suban al sillón sin miedo. La Dra. Carolina lleva la parte de niños y trabaja con calma, sin prisa y sin regaños.",
      },
      {
        q: "¿Dan garantía?",
        a: "Sí, por escrito. [DATO] Años y qué cubre en coronas, puentes, implantes y resinas. Si algo falla dentro de ese plazo, lo arreglamos aquí sin costo.",
      },
    ],
  },

  finalCta: {
    headlineSig: "Tu",
    headlineRest: "nueva sonrisa",
    headlineLine2: "empieza con un mensaje.",
    place: "San Carlos, Sonora",
  },

  contact: {
    headline: "Escríbenos",
    support: "Te contesta el consultorio, no un robot.",
    methods: [
      {
        title: "WhatsApp",
        description: "Te contestamos en minutos en horario de consultorio.",
      },
      {
        title: "Agenda tu cita",
        description: "Casi siempre hay lugar esta misma semana.",
      },
      { title: "Llamar al consultorio", description: "" },
    ],
  },

  footer: {
    city: "San Carlos",
    rights: "Todos los derechos reservados.",
    tagline: "DENTAL Y ESTÉTICA",
    place: "SAN CARLOS, SONORA",
    est: "EST. [DATO]",
    bookConsult: "AGENDA TU CITA",
    whatsapp: "WHATSAPP",
    instagram: "Instagram",
    mark: "Logo de MyDentist",
  },
};
