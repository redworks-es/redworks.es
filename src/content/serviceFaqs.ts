import type { FaqItem } from '../lib/faqSchema';
import type { Lang } from '../i18n/ui';

// Hand-written FAQ content for a subset of service pages, keyed by [lang][content-collection slug].
// Not every service has an entry yet — ServicePage.astro only renders the FAQ block when
// a mapping exists, so this can grow incrementally without touching the extraction pipeline.
export const SERVICE_FAQS: Record<Lang, Record<string, FaqItem[]>> = {
  es: {
    electricidad: [
      {
        question: '¿Qué es una instalación eléctrica de baja tensión?',
        answer:
          'Es cualquier instalación eléctrica que funciona por debajo de 1.000 voltios en corriente alterna, que es el caso de prácticamente todas las instalaciones de oficinas, comercios y viviendas. Incluye el cuadro eléctrico, el cableado, los mecanismos y las protecciones.',
      },
      {
        question: '¿Necesito un boletín eléctrico para mi instalación?',
        answer:
          'Sí, cualquier instalación nueva o reforma de cierta entidad requiere un boletín eléctrico (certificado de instalación) emitido por un instalador autorizado, como Redworks Solutions, para poder dar de alta el suministro con la compañía eléctrica.',
      },
      {
        question: '¿Con qué frecuencia hay que revisar una instalación eléctrica?',
        answer:
          'Depende del tipo de instalación y su uso, pero como norma general recomendamos una revisión de mantenimiento anual para instalaciones comerciales e industriales, y siempre tras cualquier incidencia o ampliación de carga eléctrica.',
      },
      {
        question: '¿Hacéis instalaciones eléctricas completas en oficinas nuevas?',
        answer:
          'Sí. Diseñamos, planificamos y ejecutamos instalaciones eléctricas completas de baja tensión para oficinas, locales comerciales y naves, incluyendo la homologación acorde a la legislación vigente en la Comunidad de Madrid.',
      },
    ],
    seguridad: [
      {
        question: '¿Qué diferencia hay entre cámaras CCTV analógicas e IP?',
        answer:
          'Las cámaras analógicas transmiten la señal por cable coaxial a un grabador dedicado, mientras que las cámaras IP envían vídeo digital por red (Ethernet o wifi), con mayor resolución y la posibilidad de integrarse con otros sistemas. En Redworks trabajamos con ambas tecnologías según las necesidades de cada instalación.',
      },
      {
        question: '¿Puedo ver las cámaras de seguridad desde el móvil?',
        answer:
          'Sí, los sistemas de videovigilancia IP que instalamos permiten visualizar las cámaras en remoto desde el móvil o el ordenador, con acceso seguro a través de la aplicación del fabricante o de un servicio en la nube.',
      },
      {
        question: '¿Qué es un sistema de control de accesos?',
        answer:
          'Es un sistema que gestiona quién puede entrar a unas instalaciones y cuándo, mediante tarjetas, códigos, huella o reconocimiento facial. Permite saber en todo momento la ubicación y los horarios de entrada y salida del personal y visitantes.',
      },
      {
        question: '¿Se puede integrar la videovigilancia con el control de accesos?',
        answer:
          'Sí. Diseñamos sistemas de seguridad centralizados donde la videovigilancia, el control de accesos y los interfonos funcionan de forma coordinada, facilitando la gestión desde un único punto.',
      },
    ],
    'telefonia-voip': [
      {
        question: '¿Qué es la telefonía VoIP?',
        answer:
          'VoIP (Voice over IP) es una tecnología que transmite las llamadas de voz a través de internet en lugar de la red telefónica tradicional. Permite gestionar llamadas desde teléfonos IP, ordenadores o móviles, con centralitas más flexibles y económicas.',
      },
      {
        question: '¿Necesito fibra óptica para usar telefonía VoIP?',
        answer:
          'No es imprescindible, pero sí recomendable. Una conexión estable con suficiente ancho de banda (fibra óptica o una buena línea de datos) mejora notablemente la calidad de las llamadas VoIP, especialmente con varias líneas simultáneas.',
      },
      {
        question: '¿Puedo mantener mi número de teléfono actual al pasar a VoIP?',
        answer:
          'Sí, es posible portar tu numeración actual a una centralita VoIP sin perder continuidad en las llamadas. Nos encargamos de gestionar la portabilidad como parte de la instalación.',
      },
      {
        question: '¿Qué ventajas tiene la telefonía VoIP frente a la tradicional?',
        answer:
          'Menor coste por línea y llamada, gestión centralizada desde varios dispositivos y ubicaciones, escalabilidad sencilla al crecer el equipo, y funciones avanzadas como grabación de llamadas o desvíos configurables que la telefonía tradicional no ofrece de serie.',
      },
    ],
    paneles: [
      {
        question: '¿Cuánto se puede ahorrar con placas solares en una empresa?',
        answer:
          'El ahorro depende del consumo del negocio, la superficie disponible y la orientación de la instalación. En términos generales, el autoconsumo fotovoltaico reduce de forma significativa la factura eléctrica al cubrir parte del consumo diurno con energía propia.',
      },
      {
        question: '¿Existen subvenciones para instalar paneles solares?',
        answer:
          'Sí, suele haber ayudas y deducciones fiscales para autoconsumo fotovoltaico a nivel estatal y autonómico, aunque las condiciones cambian con el tiempo. Te asesoramos sobre las ayudas vigentes en el momento de tu proyecto.',
      },
      {
        question: '¿Cuánto se tarda en amortizar una instalación de placas solares?',
        answer:
          'El plazo de amortización depende de la inversión inicial, el consumo y las horas de sol disponibles, pero en instalaciones bien dimensionadas para negocios suele situarse entre varios años, con la instalación siguiendo generando ahorro muchos años después.',
      },
      {
        question: '¿Necesito permisos para instalar placas solares en mi negocio?',
        answer:
          'Sí, toda instalación fotovoltaica requiere darse de alta como instalación de autoconsumo y, según el tamaño, puede necesitar permisos municipales o de la compañía eléctrica. Nos encargamos de toda la tramitación como parte del proyecto.',
      },
    ],
  },
  fr: {
    electricidad: [
      {
        question: "Qu'est-ce qu'une installation électrique basse tension ?",
        answer:
          "C'est toute installation électrique qui fonctionne en dessous de 1 000 volts en courant alternatif, ce qui est le cas de pratiquement toutes les installations de bureaux, commerces et logements. Elle comprend le tableau électrique, le câblage, les mécanismes et les protections.",
      },
      {
        question: "Ai-je besoin d'un certificat électrique pour mon installation ?",
        answer:
          "Oui, toute installation neuve ou rénovation d'une certaine ampleur nécessite un certificat électrique (bulletin d'installation) délivré par un installateur agréé, comme Redworks Solutions, pour pouvoir mettre en service l'alimentation auprès de la compagnie d'électricité.",
      },
      {
        question: 'À quelle fréquence faut-il réviser une installation électrique ?',
        answer:
          "Cela dépend du type d'installation et de son usage, mais en règle générale nous recommandons une révision de maintenance annuelle pour les installations commerciales et industrielles, et systématiquement après tout incident ou toute augmentation de charge électrique.",
      },
      {
        question: 'Réalisez-vous des installations électriques complètes dans des bureaux neufs ?',
        answer:
          "Oui. Nous concevons, planifions et exécutons des installations électriques basse tension complètes pour bureaux, locaux commerciaux et entrepôts, y compris l'homologation conforme à la réglementation en vigueur dans la Communauté de Madrid.",
      },
    ],
    seguridad: [
      {
        question: 'Quelle est la différence entre les caméras CCTV analogiques et IP ?',
        answer:
          "Les caméras analogiques transmettent le signal par câble coaxial à un enregistreur dédié, tandis que les caméras IP envoient de la vidéo numérique par réseau (Ethernet ou wifi), avec une résolution supérieure et la possibilité de s'intégrer à d'autres systèmes. Chez Redworks, nous travaillons avec les deux technologies selon les besoins de chaque installation.",
      },
      {
        question: 'Puis-je voir les caméras de sécurité depuis mon mobile ?',
        answer:
          "Oui, les systèmes de vidéosurveillance IP que nous installons permettent de visualiser les caméras à distance depuis le mobile ou l'ordinateur, avec un accès sécurisé via l'application du fabricant ou un service cloud.",
      },
      {
        question: "Qu'est-ce qu'un système de contrôle d'accès ?",
        answer:
          "C'est un système qui gère qui peut entrer dans des installations et à quel moment, au moyen de cartes, codes, empreinte digitale ou reconnaissance faciale. Il permet de connaître à tout moment la localisation et les horaires d'entrée et de sortie du personnel et des visiteurs.",
      },
      {
        question: "Peut-on intégrer la vidéosurveillance au contrôle d'accès ?",
        answer:
          "Oui. Nous concevons des systèmes de sécurité centralisés où la vidéosurveillance, le contrôle d'accès et les interphones fonctionnent de manière coordonnée, facilitant la gestion depuis un point unique.",
      },
    ],
    'telefonia-voip': [
      {
        question: "Qu'est-ce que la téléphonie VoIP ?",
        answer:
          "La VoIP (Voice over IP) est une technologie qui transmet les appels vocaux via internet plutôt que par le réseau téléphonique traditionnel. Elle permet de gérer les appels depuis des téléphones IP, ordinateurs ou mobiles, avec des standards plus flexibles et économiques.",
      },
      {
        question: 'Ai-je besoin de la fibre optique pour utiliser la téléphonie VoIP ?',
        answer:
          "Ce n'est pas indispensable, mais c'est recommandé. Une connexion stable avec suffisamment de bande passante (fibre optique ou une bonne ligne de données) améliore nettement la qualité des appels VoIP, en particulier avec plusieurs lignes simultanées.",
      },
      {
        question: 'Puis-je conserver mon numéro de téléphone actuel en passant à la VoIP ?',
        answer:
          "Oui, il est possible de porter votre numérotation actuelle vers un standard VoIP sans perdre de continuité dans les appels. Nous nous chargeons de gérer la portabilité dans le cadre de l'installation.",
      },
      {
        question: 'Quels sont les avantages de la téléphonie VoIP par rapport à la téléphonie traditionnelle ?',
        answer:
          "Un coût par ligne et par appel réduit, une gestion centralisée depuis plusieurs appareils et sites, une évolutivité simple à mesure que l'équipe grandit, et des fonctions avancées comme l'enregistrement des appels ou les renvois configurables que la téléphonie traditionnelle n'offre pas en standard.",
      },
    ],
    paneles: [
      {
        question: 'Combien peut-on économiser avec des panneaux solaires dans une entreprise ?',
        answer:
          "L'économie dépend de la consommation de l'entreprise, de la surface disponible et de l'orientation de l'installation. De manière générale, l'autoconsommation photovoltaïque réduit significativement la facture d'électricité en couvrant une partie de la consommation diurne avec sa propre énergie.",
      },
      {
        question: 'Existe-t-il des aides pour installer des panneaux solaires ?',
        answer:
          "Oui, il existe généralement des aides et des déductions fiscales pour l'autoconsommation photovoltaïque au niveau national et régional, bien que les conditions évoluent dans le temps. Nous vous conseillons sur les aides en vigueur au moment de votre projet.",
      },
      {
        question: "Combien de temps faut-il pour amortir une installation de panneaux solaires ?",
        answer:
          "Le délai d'amortissement dépend de l'investissement initial, de la consommation et des heures d'ensoleillement disponibles, mais pour des installations bien dimensionnées pour une entreprise, il se situe généralement entre quelques années, l'installation continuant à générer des économies de nombreuses années après.",
      },
      {
        question: 'Ai-je besoin de permis pour installer des panneaux solaires dans mon entreprise ?',
        answer:
          "Oui, toute installation photovoltaïque doit être déclarée comme installation d'autoconsommation et, selon sa taille, peut nécessiter des permis municipaux ou de la compagnie d'électricité. Nous nous chargeons de toutes les démarches dans le cadre du projet.",
      },
    ],
  },
};
