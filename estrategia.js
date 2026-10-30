// Estrategia del Instagram de Wydan: crecer sin invertir, anuncios, seguimiento e ideas (armado el 30/10/2026).
// La usa vista-previa.html (el «centro de contenido»). Fechas en formato AAAA-MM-DD.
// Regla de la casa: en ningún texto se muestra un precio suelto (ver «cómo hablar del precio»).

const LANZAMIENTO = '2026-11-03';

// ── Crecer sin invertir: por etapas, desde una cuenta vacía ──
const ETAPAS_ORGANICAS = [
  {
    id: 'e0', desde: '2026-10-30', hasta: '2026-11-02', nombre: 'Antes de lanzar',
    objetivo: 'Que el perfil esté completo y tener a quién avisarle el día 1.',
    acciones: [
      'Armar la <b>lista de los primeros 100</b>: clientes actuales, conocidos de Wendy y Daniela y contactos del estudio. Una lista en el celular alcanza.',
      'Desde @wydan.solutions, <b>seguir a 30–50 cuentas de Rivera</b>: comercios, profesionales, medios locales, centro comercial. Con intención, no en masa.',
      'Dejar listas las <b>5 destacadas</b> y el perfil completo (nombre, bio, enlaces, foto).',
      'Tener a mano el <b>mensaje de aviso</b> para la lista (está más abajo, listo para copiar).',
    ],
    meta: 'Perfil 100 % completo y la lista armada.',
  },
  {
    id: 'e1', desde: '2026-11-03', hasta: '2026-11-09', nombre: 'Semana del lanzamiento',
    objetivo: 'Los primeros seguidores: la gente que ya nos conoce.',
    acciones: [
      'Martes 3/11: publicar la 1, la 2 y la 3 juntas.',
      'Ese mismo día, <b>avisar a todos</b>: estados de WhatsApp de Wendy, Daniela y el estudio, Facebook personal y mensaje a la lista de 100.',
      'En Instagram: menú ☰ → <b>«Seguir e invitar amigos»</b> → invitar a los contactos y a los amigos de Facebook.',
      'Pedirles a <b>3 a 5 clientes</b> que sigan la cuenta y compartan una publicación en su historia. Cada uno nos muestra a su gente.',
      '<b>Responder todo en menos de 1 hora</b>, sobre todo el primer día: a Instagram le importa que haya conversación.',
      'Una historia por día, aunque sea compartir la publicación nueva.',
    ],
    meta: '50 a 100 seguidores, la mayoría conocidos. Es lo normal para arrancar.',
  },
  {
    id: 'e2', desde: '2026-11-10', hasta: '2026-11-30', nombre: 'Hacerse ver en Rivera',
    objetivo: 'Que nos descubran negocios que todavía no nos conocen.',
    acciones: [
      '<b>Rutina de 20 minutos por día</b> (más abajo, con casillas para tildar).',
      'En cada publicación poné la <b>ubicación «Rivera, Uruguay»</b> y 3 a 5 hashtags: #Rivera #RiveraUruguay #EmprendedoresRivera + 1 o 2 del rubro.',
      '<b>Publicaciones en colaboración</b> (opción «Invitar colaborador»): proponerle a 2 o 3 clientes mostrar su caso, con su OK. La publicación aparece en los dos perfiles.',
      '<b>Encuestas y cajitas de preguntas</b> en historias, 2 veces por semana. Cada respuesta es una conversación: ahí se ofrece la demo, sin presión.',
      'A quien comenta o reacciona: <b>agradecerle por mensaje</b> y preguntarle por su negocio.',
      'Compartir cada reel también en <b>Facebook</b> y en los <b>estados de WhatsApp</b>.',
    ],
    meta: '150 a 250 seguidores y los primeros mensajes «DEMO» de gente que no nos conocía.',
  },
  {
    id: 'e3', desde: '2026-12-01', hasta: '2027-12-31', nombre: 'Crecer con constancia',
    objetivo: 'Que la cuenta traiga consultas todas las semanas.',
    acciones: [
      '<b>Secciones fijas</b>: lunes «Consejo para tu negocio» (carrusel), miércoles «Demo en 30 segundos» (reel grabando la pantalla), viernes humor o mitos.',
      '<b>Testimonios en video</b>: pedirle a un cliente 20 segundos con el celular, una vez por mes.',
      '<b>Un vivo por mes</b> mostrando una demo y respondiendo preguntas.',
      '<b>Reciclar lo que funcionó</b>: el carrusel con más guardados, rehacerlo como reel, y al revés.',
      '<b>Alianzas</b>: que el Estudio W. Machado y otros profesionales recomienden la cuenta a sus clientes.',
    ],
    meta: 'Crecer un 10 a 20 % por mes. Lo que más importa: los mensajes «DEMO» por semana.',
  },
];

// Rutina diaria de la etapa «Hacerse ver» (se tilda en la página; se guarda en el navegador)
const RUTINA_DIARIA = [
  'Responder todos los comentarios y mensajes.',
  'Subir al menos 1 historia.',
  'Dejar 10 comentarios de verdad (una pregunta o un aporte) en publicaciones de negocios de Rivera.',
  'Responder 3 historias de cuentas que nos siguen.',
  'Seguir a 5 negocios nuevos del rubro que queremos.',
];

const NO_HACER = [
  'Comprar seguidores o «me gusta»: Instagram los detecta y muestra menos la cuenta.',
  'El «sigo y dejo de seguir»: quema la cuenta y queda mal.',
  'Mandar el mismo mensaje a desconocidos en masa: es spam y pueden bloquear la cuenta.',
  'Poner 30 hashtags: con 3 a 5 bien elegidos alcanza.',
  'Borrar publicaciones que «no funcionaron»: se pierde lo que sí sumaron.',
  'Publicar y desaparecer: sin respuestas, Instagram deja de mostrarnos.',
];

const COMO_DECIDE_INSTAGRAM = [
  ['Que miren el reel completo', 'Los primeros 2 segundos tienen que atrapar (por eso los títulos grandes y las preguntas).'],
  ['Que lo guarden', 'Los carruseles útiles («5 señales…») se guardan para leer después.'],
  ['Que lo compartan', 'Humor y cosas que pasan en todos los negocios («Top 5 excusas»).'],
  ['Que te escriban', 'Cerrar siempre con una pregunta o con «Escribí DEMO».'],
];

// ── Anuncios ──
const ANUNCIOS = {
  cuando: 'Desde el <b>lunes 9/11</b>. Antes no: quien toca el anuncio entra al perfil, y si lo ve vacío no escribe.',
  antes: [
    'Cuenta profesional (Empresa) ✓',
    'Página de Facebook de Wydan conectada en el Centro de cuentas.',
    'WhatsApp Business conectado (es el destino de los anuncios).',
    'Medio de pago cargado en Meta Business Suite: <b>lo carga Wendy o Daniela</b>, nunca se pasa la tarjeta por chat.',
    'Mensaje automático de bienvenida en WhatsApp Business (abajo está el texto).',
  ],
  donde: 'En <b>Meta Business Suite → Anuncios → Crear anuncio</b> (más control que el botón «Promocionar» de Instagram).',
  objetivo: '<b>Mensajes → WhatsApp</b>. No «seguidores» ni «me gusta»: lo que vende es la conversación.',
  publico: [
    'Ubicación: <b>Rivera + 40 km</b> (después se puede probar Tacuarembó, Artigas o todo Uruguay).',
    'Edad: <b>25 a 60</b>.',
    'Intereses: pequeñas empresas, emprendimiento, administración de empresas, contabilidad, comercio minorista. O dejar que Meta busque solo (público Advantage+).',
  ],
  etapas: [
    { cuando: '9/11 al 15/11', nombre: 'Prueba', detalle: '<b>Dos anuncios</b> con el mismo presupuesto chico (sugerido USD 2 por día cada uno): el reel <b>«El cronómetro»</b> y el reel <b>«Top 5 excusas»</b>. No tocarlos los primeros 3 días: Meta está aprendiendo.' },
    { cuando: '16/11 al 29/11', nombre: 'Ganador', detalle: 'Apagar el que trajo menos mensajes. Al ganador, subirle de a poco el presupuesto. Sumar el carrusel <b>«Páginas que ya creamos»</b>.' },
    { cuando: 'Desde diciembre', nombre: 'Volver a mostrar', detalle: 'Anuncio para la gente que <b>ya vio un reel o interactuó</b> en los últimos 30 días (público personalizado), con «Empezá 2027 ordenado».' },
  ],
  reglas: [
    'Mirar el anuncio cada 2 o 3 días, no todos los días.',
    'Si después de 4 días no trajo ningún mensaje, apagarlo y probar otro video.',
    'Si la misma persona lo vio más de 3 veces (frecuencia mayor a 3), cambiar el video.',
    'Contestar los mensajes del anuncio en menos de 15 minutos en horario de trabajo: el que espera, se enfría.',
    'Nunca poner precios en el anuncio: la página se cotiza según lo que necesita cada negocio.',
  ],
  metricas: [
    ['Conversaciones iniciadas', 'Cuántas personas escribieron por el anuncio.'],
    ['Costo por conversación', 'Lo gastado dividido entre las conversaciones. Anotarlo cada semana y comparar.'],
    ['Demos pedidas', 'De los que escribieron, cuántos pasaron rubro y logo.'],
    ['Ventas', 'De las demos, cuántas se cerraron. Es el número que manda.'],
  ],
};

// Textos listos para copiar
const TEXTOS_LISTOS = [
  {
    id: 'aviso', titulo: 'Aviso del lanzamiento (para la lista de 100 y los estados)',
    texto: '¡Hola! 😊 Te cuento que arrancamos el Instagram de Wydan, donde vamos a mostrar las páginas de gestión que creamos para negocios.\nSi nos seguís nos das una gran mano 🙏 instagram.com/wydan.solutions\nY si algo te gusta, ¡compartilo!',
  },
  {
    id: 'demo', titulo: 'Respuesta a quien escribe «DEMO» (también como bienvenida automática de WhatsApp Business)',
    texto: '¡Hola! Gracias por escribirnos 🙌 Para armarte tu demo gratis contanos:\n1) ¿A qué se dedica tu negocio?\n2) ¿Qué te gustaría ordenar primero? (turnos, stock, clientes, cobros…)\n3) Si tenés, mandanos tu logo.\nEn pocos días te mostramos tu página funcionando, sin compromiso.',
  },
  {
    id: 'colab', titulo: 'Propuesta de publicación en colaboración (para un cliente)',
    texto: '¡Hola! ¿Cómo estás? Estamos mostrando en Instagram cómo trabajan los negocios que usan su página de Wydan. ¿Te animás a que hagamos una publicación juntos sobre la tuya? Aparece en los dos perfiles, así también te ven más clientes a vos. No mostramos datos de tu negocio, solo cómo la usás. ¡Gracias!',
  },
];

// ── Banco de ideas ──
const IDEAS = [
  { grupo: 'Diciembre: «Empezá 2027 ordenado»', items: [
    'Carrusel: «Checklist para cerrar el año sin dolor de cabeza» (caja, stock, cobros pendientes, clientes).',
    'Reel: «Lo que tu negocio aprendió en 2026» con humor.',
    'Historia con encuesta: «¿Qué querés ordenar en 2027?».',
    'Anuncio de diciembre: «Empezá 2027 con tu negocio ordenado. Escribí DEMO».',
  ] },
  { grupo: 'Reels cortos con el celular (15 a 30 s)', items: [
    'Grabar la pantalla de una demo haciendo una sola cosa: «Así se carga una venta en 5 segundos».',
    '«Un día en la página de un taller»: del ingreso del auto a «Listo».',
    'Antes y después con una planilla inventada desordenada → la página.',
    'Respuesta en video a una pregunta que llegó por la cajita.',
  ] },
  { grupo: 'Carruseles que se guardan', items: [
    '«5 números que tu negocio debería mirar cada semana».',
    '«Cómo saber si tu stock está bien (sin contar estantes)».',
    '«Turnos que no se pisan: 4 reglas simples».',
    '«Qué pedirle a una página de gestión antes de contratarla».',
  ] },
  { grupo: 'Historias de todos los días', items: [
    'Compartir cada publicación nueva con el sticker «Nueva publicación».',
    'Encuesta: «¿Dónde anotás los turnos? Cuaderno · Excel · WhatsApp · La cabeza».',
    'Cajita de preguntas: «¿Qué te complica más de tu negocio?».',
    'Pedacitos de una demo grabados con el celular, con «¿Te imaginás la tuya?».',
    'Detrás de escena: armando una demo (sin datos reales de clientes).',
    'Sticker de enlace a WhatsApp con «Escribí DEMO».',
  ] },
  { grupo: 'Colaboraciones y alianzas', items: [
    'Publicación en colaboración con el Estudio W. Machado: «Cómo organizamos el estudio».',
    'Caso de un cliente (con su OK): el problema, la página, el resultado.',
    'Vivo con un cliente contando cómo la usa.',
  ] },
];

// ── Seguimiento semanal (se completa en la página) ──
const SEGUIMIENTO_COLUMNAS = [
  ['seguidores', 'Seguidores'],
  ['alcance', 'Alcance'],
  ['demo', 'Mensajes DEMO'],
  ['demos', 'Demos hechas'],
  ['ventas', 'Ventas'],
  ['gasto', 'Gasto anuncios (USD)'],
];
const SEGUIMIENTO_DESDE = '2026-11-02';  // lunes de la semana del lanzamiento
const SEGUIMIENTO_SEMANAS = 12;

if (typeof module !== 'undefined') module.exports = { LANZAMIENTO, ETAPAS_ORGANICAS, RUTINA_DIARIA, NO_HACER, COMO_DECIDE_INSTAGRAM, ANUNCIOS, TEXTOS_LISTOS, IDEAS, SEGUIMIENTO_COLUMNAS, SEGUIMIENTO_DESDE, SEGUIMIENTO_SEMANAS };
