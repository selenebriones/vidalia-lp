// Datos y textos de la landing, tomados del Google Sites de Vidalia
// (sites.google.com/futurite.com/vidaliafuneralesmemorables).

const PHONE = '3121408432';
// El WhatsApp es el mismo número de la línea 24/7.
const WHATSAPP = `52${PHONE}`;

const wa = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const SITE = {
  name: 'Vidalia Funerales Memorables',
  slogan: 'Honrando vidas con amor y dignidad',
  phone: '312 140 8432',
  phoneHref: `tel:+52${PHONE}`,
  whatsappHref: wa('Hola, me gustaría recibir información de Vidalia Funerales Memorables.'),
  inmediatoHref: wa('Hola, necesito un servicio funerario de atención inmediata.'),
  // PENDIENTE: página de contratación en línea; mientras tanto va a WhatsApp.
  contratarHref: wa('Hola, quiero contratar el Paquete Vidalia de $238 a la quincena.'),
  visitaHref: wa('Hola, me gustaría agendar una visita a las salas de Vidalia.'),
  address: 'Lat. Lib. Gobernadora Griselda Álvarez 502, Senderos de Rancho Blanco, Villa de Álvarez, Col.',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=Vidalia+Funerales+Memorables+Gobernadora+Griselda+%C3%81lvarez+502+Villa+de+%C3%81lvarez+Colima',
  mapsEmbed: 'https://www.google.com/maps?q=Lat.+Lib.+Gobernadora+Griselda+%C3%81lvarez+502,+Senderos+de+Rancho+Blanco,+Villa+de+%C3%81lvarez,+Col.&output=embed',
  profeco: '3992-2026',
};

export const NAV = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Instalaciones', href: '#instalaciones' },
  { label: 'Preguntas frecuentes', href: '#faq' },
  { label: 'Ubicación', href: '#ubicacion' },
];

// `count` anima la cifra al aparecer: se escribe `before` + número + `after`.
export const TRUST: {
  icon: string;
  strong: string;
  text: string;
  count?: { to: number; decimals?: number; before?: string; after?: string };
}[] = [
  { icon: 'ph-star', strong: '5.0 ★', count: { to: 5, decimals: 1, after: ' ★' }, text: 'en Google · 22 reseñas' },
  { icon: 'ph-users-three', strong: '+ de 500', count: { to: 500, before: '+ de ' }, text: 'familias confían en nosotros' },
  { icon: 'ph-trophy', strong: 'Número 1 en Colima', text: 'Ranking MejoresFunerarias.mx 2026' },
  { icon: 'ph-seal-check', strong: 'PROFECO', text: `Contrato núm. ${SITE.profeco}` },
];

export const INMEDIATO = [
  'Atención por teléfono y WhatsApp las 24 horas',
  'Recolección y traslado dentro de Colima',
  'Trámites: acta de defunción, panteones y cremación',
  'Velación en la Sala Vidalia o en casa',
  'Cremación o sepultura, ataúd o urna a elegir',
  'Cafetería con café de especialidad',
  'Precio claro y por escrito, sin cargos ocultos',
  '3 meses sin intereses o financiamiento a 6 y 9 meses',
];

export const PAQUETE = [
  'Sala Vidalia 12 horas (según disponibilidad) o velación en casa',
  'Ataúd de madera barnizada',
  'Arreglo estético y embalsamado esencial',
  'Cremación con urna estándar',
  'Cafetería para 100 personas',
  'Apoyo psicológico en grupo y 1 sesión privada de duelo',
  '1 hora de asesoría en sucesiones',
  '100% transferible, sin límite de edad.',
];

export const DISTINTO = [
  { icon: 'ph-armchair', title: 'Un espacio que abraza', text: 'Sala climatizada, salas de estar y amplio estacionamiento.' },
  { icon: 'ph-coffee', title: 'Cafetería de especialidad', text: '' },
  { icon: 'ph-receipt', title: 'Precio claro, siempre', text: 'Por escrito, sin cargos ocultos ni letra chiquita.' },
  { icon: 'ph-hand-heart', title: 'Seguimos contigo', text: 'Acompañamiento al duelo y asesoría legal después de la despedida.' },
];

export const FAQS: { q: string; a: string; list?: string[]; after?: string }[] = [
  {
    q: '¿Qué hago si acaba de fallecer un ser Amado en Colima?',
    a: `Llámanos al ${SITE.phone}, a cualquier hora. Un Agente Funerario te atiende de inmediato y te guía paso a paso.`,
  },
  {
    q: '¿Qué documentos necesito para un Servicio Funerario?',
    a: '',
    list: [
      'Certificado médico de defunción',
      'Identificación oficial de tu ser Amado',
      'CURP de tu ser Amado',
      'Acta de nacimiento de tu ser Amado',
      'Acta de matrimonio, cuando corresponda',
      'Identificación oficial del familiar o responsable del servicio',
      'CURP del familiar o responsable',
    ],
    after: 'Si te falta alguno, te decimos qué hacer.',
  },
  {
    q: '¿Para quién puedo contratar un Paquete Funerario Vidalia?',
    a: 'Para ti o para tus papás, sin límite de edad. Además es 100% transferible a un familiar, vecino o amigo.',
  },
  {
    q: '¿Desde cuándo está protegida mi familia al contratar un Paquete Funerario?',
    a: `Desde tu primer pago. Contrato registrado ante PROFECO con el número ${SITE.profeco}.`,
  },
];
