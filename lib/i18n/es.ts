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
 * Español de Sonora, con "tú". Ninguna cifra aquí está inventada: donde
 * todavía falta el dato, el copy promete el precio por escrito en lugar de
 * adivinarlo. En docs/pending-from-daniel.md está la lista de lo que entra
 * el día que Daniel lo confirme.
 */
export const es: Dictionary = {
  meta: {
    title: "MyDentist San Carlos | Implantes, ortodoncia y endodoncia en Sonora",
    description:
      "Tres especialistas en San Carlos, Sonora: prostodoncia e implantes, ortodoncia y endodoncia. Un plan claro, por escrito, desde la primera visita. Agenda por WhatsApp.",
    ogTitle: "MyDentist San Carlos | Implant & Cosmetic Center",
    ogDescription:
      "Sonrisas que se sienten en casa. Tres especialistas que te conocen por tu nombre.",
  },

  whatsapp: {
    general: "Hola MyDentist, quiero preguntar por un tratamiento.",
    consult: "Hola MyDentist, quiero agendar una cita. ¿Qué día tienen disponible esta semana?",
    quote: "Hola MyDentist, quiero saber cuánto me saldría. Les puedo mandar una foto.",
  },

  common: {
    /* La etiqueta de botón del brand kit. */
    bookConsult: "Agendar por WhatsApp",
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
        description: "Implantes, ortodoncia y endodoncia en un solo lugar.",
        items: [
          { title: "Implantes dentales", href: "#pricing" },
          { title: "Arcada completa", href: "#pricing" },
          { title: "Ortodoncia", href: "#pricing" },
          { title: "Endodoncia", href: "#pricing" },
        ],
      },
      {
        title: "Doctores",
        description: "Tres especialistas, y cómo funciona tu tratamiento.",
        items: [
          { title: "Conoce a los doctores", href: "#dentists" },
          { title: "Cómo funciona", href: "#how" },
          { title: "Planes de pago", href: "#compare" },
          { title: "Casos reales", href: "#cases" },
        ],
      },
    ],
    links: [
      { title: "Precios", href: "#pricing" },
      { title: "Visítanos", href: "#faq" },
    ],
  },

  hero: {
    /* Frase aprobada del brand kit. La segunda mitad baja a Powder Mist,
       que es como el kit marca el acento en una línea display. */
    eyebrow: "Implant & Cosmetic Center · San Carlos, Sonora",
    headlineLead: "Tu sonrisa,",
    headlineSig: "en buenas manos.",
    headlineTail: "",
    support:
      "Tres especialistas que te conocen por tu nombre. Un plan claro, por escrito, desde la primera visita.",
    secondary: "Conoce a los doctores",
    scroll: "Baja",
    scrollLabel: "Ir a la siguiente sección",
  },

  /* Reseñas de Google en español. Solo hay dos por ahora: no se inventa una
     tercera. Pendiente: pedir reseña a los pacientes de la región. */
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
      title: "Tres especialistas, un solo consultorio.",
      body:
        "Prostodoncia, ortodoncia y endodoncia en el mismo lugar. Tu caso no se pasa a otro consultorio ni a otra ciudad.",
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
        body: "De contado o diferido. Te decimos las opciones que hay y cuánto queda cada una antes de empezar.",
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
      "Cómo pagues no cambia el precio, ni el material, ni quién te atiende. Y el número completo lo sabes antes de empezar.",
    treatmentsLabel: "Elige tratamiento",
    colOurs: { name: "Diferido", sub: "Según tu caso" },
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
        ours: "El mismo",
        theirs: "El mismo",
      },
      {
        title: "Cuándo lo sabes",
        description: "En qué momento te dicen el número completo",
        ours: "Antes de empezar, por escrito",
        theirs: "Antes de empezar, por escrito",
      },
      {
        title: "Mensualidad",
        description: "Cuánto te toca cada mes",
        ours: "Te la calculamos en la consulta",
        theirs: "No aplica",
      },
      {
        title: "Quién te atiende",
        description: "Quién planea tu caso y quién lo hace",
        ours: "El mismo especialista",
        theirs: "El mismo especialista",
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
    headlineLead: "Lo que hacemos,",
    headlineAccent: "en un solo lugar.",
    support:
      "Implantes, arcada completa, ortodoncia y coronas. Se planea, se hace y se le da seguimiento en el mismo consultorio, con los mismos doctores.",
    cta: "Pregunta por tu caso",
    items: [
      { label: "Implantes de arcada completa", meta: "All-on-4" },
      { label: "Implante unitario", meta: "Corona incluida" },
      { label: "Ortodoncia", meta: "Brackets y alineadores" },
      { label: "Coronas y carillas", meta: "Estética" },
    ],
  },

  stats: {
    headline: "En corto",
    support: "Lo que encuentras aquí.",
    items: [
      {
        label: "Especialistas, un consultorio",
        sub: "En un solo lugar",
        value: "3",
        source: "MyDentist San Carlos",
      },
      {
        label: "Minutos desde Guaymas",
        sub: "Por carretera",
        value: "20",
        source: "Trayecto",
      },
      {
        label: "Idiomas en cada visita",
        sub: "Español e inglés",
        value: "2",
        source: "Consultorio",
      },
    ],
  },

  dentists: {
    headline: "Tres doctores, una misma atención",
    support: "Prostodoncia, ortodoncia y endodoncia en un solo lugar.",
    /* Se muestra solo si trae texto. Faltan cédulas y universidades de los
       tres; ver docs/pending-from-daniel.md. */
    licenseLabel: "",
    bookWith: "Agendar con",
    items: [
      {
        id: "daniel",
        specialty: "Prostodoncia e implantes",
        bio: "Rehabilita sonrisas completas con implantes y prótesis fijas. Planea cada caso por escrito y en una sola consulta.",
      },
      {
        id: "carolina",
        specialty: "Ortodoncia",
        bio: "Brackets y alineadores transparentes para niños y adultos, con seguimiento cercano en cada visita.",
      },
      {
        id: "giselle",
        specialty: "Endodoncia",
        bio: "Tratamientos de conducto con técnica mínimamente invasiva para conservar tu diente natural.",
      },
    ],
  },

  wall: {
    citiesLabel: "Pacientes de",
    cities: ["San Carlos", "Guaymas", "Empalme"],
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
    headline: "Tu precio, por escrito.",
    support:
      "Mándanos una foto por WhatsApp. Te damos el plan completo y el número completo antes de que te sientes en el sillón.",
    consultNote: "Primera revisión con radiografía.",
    consultSub: "Te decimos el precio antes de venir.",
    financingToggle: { label: "Ver mensualidades", full: "De contado", financing: "A meses" },
    /* Vacío esconde la unidad junto a la cifra, y un usPrice vacío esconde la
       línea de abajo. Las dos regresan el día que Daniel confirme los montos. */
    currency: "",
    compare: { prefix: "o", suffix: "al mes", strike: false },
    plans: [
      {
        name: "Implante dental",
        blurb: "Recupera el diente que perdiste, para siempre.",
        priceFull: "Un diente",
        priceFinancing: "Un diente",
        usPrice: "",
        features: [
          "Implante, pilar y corona",
          "Se planea en una sola consulta",
          "Precio por escrito antes de empezar",
        ],
        cta: "Agenda tu cita",
      },
      {
        name: "Arcada completa",
        blurb: "Dientes fijos otra vez, planeados en 3D.",
        priceFull: "Arcada completa",
        priceFinancing: "Arcada completa",
        usPrice: "",
        features: [
          "Dientes fijos, no una placa que se quita",
          "Se planea para que vengas lo menos posible",
          "Precio por escrito antes de empezar",
        ],
        cta: "Agenda tu cita",
      },
      {
        name: "Ortodoncia",
        blurb: "Brackets o alineadores. El precio depende de tu caso.",
        priceFull: "Plan a tu medida",
        priceFinancing: "Plan a tu medida",
        usPrice: "",
        features: [
          "Brackets o alineadores transparentes",
          "La Dra. Carolina te revisa en cada cita",
          "Precio por escrito antes de empezar",
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
        a: "La revisión con radiografía tiene un precio fijo y te lo decimos por WhatsApp antes de que vengas, para que nadie llegue con una sorpresa. De esa consulta sales con el plan completo y el precio por escrito.",
      },
      {
        q: "¿Puedo pagar a mensualidades?",
        a: "En la consulta te decimos qué opciones de pago aplican a tu caso y cuánto queda cada una. El precio total no cambia según cómo pagues, y lo tienes por escrito antes de empezar.",
      },
      {
        q: "¿Aceptan seguros dentales?",
        a: "Mándanos una foto de tu póliza por WhatsApp. Te decimos qué te cubre y cuánto te tocaría pagar a ti, antes de empezar el tratamiento.",
      },
      {
        q: "¿Qué tan rápido me pueden dar cita?",
        a: "Casi siempre esta misma semana, y el mismo día si traes dolor. Escríbenos por WhatsApp y te decimos las horas que quedan libres hoy.",
      },
      {
        q: "¿Duele un implante?",
        a: "Con anestesia local, la mayoría siente solo presión, no dolor. Te explicamos cada paso antes de hacerlo y tú marcas el ritmo.",
      },
      {
        q: "¿Atienden niños?",
        a: "Sí. La Dra. Carolina lleva ortodoncia de niños y adolescentes, con seguimiento cercano en cada visita. La primera cita es para que conozcan el consultorio sin prisa.",
      },
    ],
  },

  finalCta: {
    headlineSig: "Nueva imagen.",
    headlineRest: "",
    headlineLine2: "Mismo equipo.",
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
    rebrand: "Smile Makers ahora es MyDentist San Carlos.",
    descriptor: "Implant & Cosmetic Center",
    city: "San Carlos",
    rights: "Todos los derechos reservados.",
    tagline: "IMPLANT & COSMETIC CENTER",
    place: "SAN CARLOS, SONORA",
    est: "",
    bookConsult: "AGENDA TU CITA",
    whatsapp: "WHATSAPP",
    instagram: "Instagram",
    mark: "Logo de MyDentist",
  },
};
