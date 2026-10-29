// Las publicaciones del primer mes del Instagram de Wydan (fuente única).
// La usan: herramientas/plantilla.html (dibuja cada imagen), herramientas/generar.js (las guarda en PNG)
// y vista-previa.html (muestra el perfil y los textos para copiar).
// En los títulos, <em>…</em> va resaltado (azul vivo sobre foto, marcador sobre fondo claro).
// foto: archivo dentro de img/ (fotos/… de Pexels, ver img/fotos/fuentes.json; paginas/… = captura de una demo).
// pos: qué parte de la foto se ve (como background-position). sticker: la etiqueta inclinada de la portada.

// Los dos WhatsApp de Wydan (los mismos de la página comercial, Wydan-Web). Van los dos en textos e imágenes
// (decisión de la usuaria, 29/10/2026). WHATSAPP queda para el enlace de la bio y el sticker de las historias.
const WHATSAPP = '097 096 996';
const CONTACTOS = [
  { nombre: 'Wendy', numero: '097 096 996' },
  { nombre: 'Daniela', numero: '092 868 219' },
];

const HASHTAGS = '#Wydan #PymesUruguay #EmprendedoresUruguay #Rivera #Uruguay';

const CIERRE = `👉 Escribí DEMO por WhatsApp y te armamos una demostración gratis, con tu logo:
📱 Wendy: ${CONTACTOS[0].numero}
📱 Daniela: ${CONTACTOS[1].numero}
(o mandanos un mensaje directo por acá)`;

const CTA_COMUN = {
  tipo: 'cta',
  titulo: 'Pedí tu <em>demo gratis</em>',
  cuerpo: 'Te armamos una muestra de tu página, con tu logo y sin compromiso.',
  foto: 'fotos/mostrador-celular.jpg',
};

const PUBLICACIONES = [
  // ───────────────────────── LANZAMIENTO · martes 3/11 (las 3 juntas) ─────────────────────────
  {
    n: 1, fecha: '2026-11-03', hora: '19:00', cuando: 'Mar 3/11 · lanzamiento', tipo: 'carrusel', id: 'c1-hola',
    titulo: 'Hola, somos Wydan',
    laminas: [
      { tipo: 'presentacion', foto: 'fotos/presentacion.jpg', pos: 'center 30%', chip: 'Hola, somos', titulo: 'Páginas de gestión<br><em>hechas a medida</em><br>para tu negocio', etiquetas: ['Compu', 'Celular', 'Tablet', 'Sin instalar nada'] },
      { tipo: 'captura', foto: 'fotos/juntos-laptop.jpg', pos: 'center 40%', chip: 'Qué hacemos', titulo: '¿Qué es una <em>página de gestión</em>?', img: 'yunque', puntos: ['Clientes, ventas y cobros', 'Stock, turnos y vencimientos', 'Los números del mes, al instante'] },
      { tipo: 'mosaico', chip: 'A medida', titulo: 'Hecha para vos,<br><em>no una plantilla</em>', cuerpo: 'Partimos de cómo trabajás. Con tu logo, tus colores y tus palabras.', imgs: ['aura', 'motorfix', 'escribania', 'contadores'] },
      { tipo: 'lista', foto: 'fotos/mostrador-celular.jpg', pos: 'center 55%', chip: 'Desde donde estés', titulo: 'En la compu, el celular <em>o la tablet</em>', puntos: ['No hay que instalar nada: se abre en el navegador', 'Cada persona entra con su propio usuario', 'Tus datos guardados en un solo lugar'] },
      CTA_COMUN,
    ],
    texto: `Hola 👋 Somos Wydan.

Creamos páginas de gestión hechas 100 % a medida: un solo lugar para tus clientes, ventas, stock, turnos y cobros.

No es una plantilla. La armamos a partir de cómo trabajás vos, con tu logo y tus colores. Y la usás desde la compu, el celular o la tablet, sin instalar nada.

¿Querés ver cómo sería la tuya?
${CIERRE}`,
    hashtags: HASHTAGS + ' #GestiónDeNegocios',
  },
  {
    n: 2, fecha: '2026-11-03', hora: '19:15', cuando: 'Mar 3/11 · lanzamiento', tipo: 'reel', id: 'r1-presentacion',
    titulo: 'Presentación de Wydan', video: 'wydan-vertical.mp4', duracion: '41 s',
    portada: { cuadro: 23, chip: 'Así trabajamos', titulo: 'Tu negocio,<br>en <em>una sola página</em>' },
    texto: `Del cuaderno, el Excel y los mil mensajes… a una sola página con todo tu negocio 📲

Así trabajamos en Wydan: cada página es distinta porque cada negocio es distinto. Contadores, talleres, barracas, centros de estética… y el tuyo.

${CIERRE}`,
    hashtags: HASHTAGS + ' #NegocioOrdenado',
  },
  {
    n: 3, fecha: '2026-11-03', hora: '19:30', cuando: 'Mar 3/11 · lanzamiento', tipo: 'carrusel', id: 'c2-como-funciona',
    titulo: 'Cómo funciona, en 4 pasos',
    laminas: [
      { tipo: 'portada', foto: 'fotos/tienda-tablet.jpg', pos: '70% 20%', sticker: 'En 4 pasos', chip: 'Paso a paso', titulo: '¿Cómo es tener <em>tu propia página</em>?' },
      { tipo: 'paso', num: 1, foto: 'fotos/mate.jpg', pos: 'center 45%', titulo: 'Nos contás cómo trabajás', cuerpo: 'Una charla por WhatsApp o en persona: qué hacés, qué anotás y qué te complica.' },
      { tipo: 'paso', num: 2, foto: 'paginas/aura.png', pos: 'left top', titulo: 'Te armamos una demo gratis', cuerpo: 'En pocos días ves tu página funcionando, con tu logo y datos de ejemplo.' },
      { tipo: 'paso', num: 3, foto: 'fotos/charla.jpg', pos: 'center 35%', titulo: 'La ajustamos juntos', cuerpo: 'Sacamos, agregamos o cambiamos lo que quieras. Nos adaptamos a vos, no vos a nosotros.' },
      { tipo: 'paso', num: 4, foto: 'fotos/celular-local.jpg', pos: 'center 30%', titulo: 'La usás todos los días', cuerpo: 'Desde la compu, el celular o la tablet. Y si necesitás una mano, estamos.' },
      CTA_COMUN,
    ],
    texto: `¿Cómo es tener tu propia página de gestión? Más fácil de lo que pensás 👇

1️⃣ Nos contás cómo trabajás.
2️⃣ Te armamos una demo gratis, con tu logo.
3️⃣ La ajustamos juntos: nos adaptamos a vos, no vos a nosotros.
4️⃣ La usás todos los días, desde donde estés.

El primer paso no cuesta nada.
${CIERRE}`,
    hashtags: HASHTAGS + ' #Digitalización',
  },

  // ───────────────────────── 6/11 al 11/11 ─────────────────────────
  {
    n: 4, fecha: '2026-11-06', hora: '19:30', cuando: 'Vie 6/11', tipo: 'reel', id: 'r2-homo-planillus',
    titulo: 'Homo Planillus', video: 'homo-planillus-vertical.mp4', duracion: '49 s',
    portada: { cuadro: 8, chip: 'Documental', titulo: 'Homo<br><em>Planillus</em>', bajada: 'Una especie que vive entre planillas' },
    texto: `Lo vimos en todos los rubros: el Homo Planillus 🦍📋

Cuatro planillas que no coinciden, la caza del dato que dura 14 minutos y el grito de siempre: «lo tengo anotado en algún lado».

Por suerte, algunos ejemplares evolucionaron. ¿Conocés a alguno que todavía no? Etiquetalo 👇

${CIERRE}`,
    hashtags: HASHTAGS + ' #HumorEmprendedor',
  },
  {
    n: 5, fecha: '2026-11-09', hora: '19:30', cuando: 'Lun 9/11', tipo: 'carrusel', id: 'c3-senales',
    titulo: '5 señales de que tu negocio necesita ordenarse',
    laminas: [
      { tipo: 'portada', foto: 'fotos/papeles-volando.jpg', pos: 'center 25%', sticker: '¿Te pasa?', chip: 'Hacé la prueba', titulo: '5 señales de que tu negocio <em>necesita ordenarse</em>', bajada: '¿Con cuántas te identificás?' },
      { tipo: 'senal', num: 1, foto: 'fotos/buscando-papeles.jpg', pos: '35% 30%', titulo: 'Para encontrar un dato, buscás en <em>3 lugares</em>', cuerpo: 'El cuaderno, el Excel y el WhatsApp. Y no coinciden.' },
      { tipo: 'senal', num: 2, foto: 'fotos/estantes-vacios.jpg', pos: 'center', titulo: 'El stock lo sabés <em>«a ojo»</em>', cuerpo: 'Hasta que un cliente pide algo y no queda.' },
      { tipo: 'senal', num: 3, foto: 'fotos/calendario.jpg', pos: 'center 70%', titulo: 'Te enterás de un vencimiento <em>cuando ya pasó</em>', cuerpo: 'Y llega el recargo, la multa o el cliente enojado.' },
      { tipo: 'senal', num: 4, foto: 'fotos/recibos.jpg', pos: 'center', titulo: 'Hay cobros que <em>se te olvidan</em>', cuerpo: 'Lo que no está anotado en un solo lugar, se pierde.' },
      { tipo: 'senal', num: 5, foto: 'fotos/solo-oficina.jpg', pos: '60% center', titulo: 'Si vos no estás, <em>nadie sabe nada</em>', cuerpo: 'Todo está en tu cabeza. Y no te podés tomar ni un día.' },
      { tipo: 'cta', foto: 'fotos/escritorio-ordenado.jpg', titulo: '¿Te identificaste con <em>2 o más</em>?', cuerpo: 'Tiene arreglo. Te mostramos cómo sería tu página, gratis.' },
    ],
    texto: `5 señales de que tu negocio necesita ordenarse 👇 (sé sincero/a 😅)

1. Para encontrar un dato, buscás en 3 lugares.
2. El stock lo sabés «a ojo».
3. Te enterás de los vencimientos cuando ya pasaron.
4. Hay cobros que se te olvidan.
5. Si vos no estás, nadie sabe nada.

¿Con cuántas te identificaste? Contanos en los comentarios.
Si fueron 2 o más, tiene arreglo:
${CIERRE}`,
    hashtags: HASHTAGS + ' #ConsejosParaEmprendedores',
  },
  {
    n: 6, fecha: '2026-11-11', hora: '19:30', cuando: 'Mié 11/11', tipo: 'reel', id: 'r3-cronometro',
    titulo: 'El cronómetro', video: 'el-cronometro-vertical.mp4', duracion: '36 s',
    portada: { cuadro: 8, chip: 'Hacé la prueba', titulo: '¿Cuánto tardás en <em>encontrar un dato</em>?', bajada: '4 preguntas · 1 reloj' },
    texto: `⏱️ 4 preguntas de todos los días. Un reloj corriendo.

¿En qué etapa está el camión? ¿Qué vence esta semana? ¿Hay turno mañana a las 14? ¿Cuánto cemento queda?

Con el cuaderno… seguimos buscando. Con tu página: las 4 en menos de 8 segundos.

¿Cuánto tardás vos? 👇
${CIERRE}`,
    hashtags: HASHTAGS + ' #Productividad',
  },

  // ───────────────────────── 13/11 al 18/11 ─────────────────────────
  {
    n: 7, fecha: '2026-11-13', hora: '19:30', cuando: 'Vie 13/11', tipo: 'carrusel', id: 'c4-paginas',
    titulo: 'Páginas que ya creamos',
    laminas: [
      { tipo: 'portada', fotos: ['fotos/estetica.jpg', 'fotos/ferreteria.jpg', 'fotos/taller.jpg', 'fotos/escribania.jpg'], sticker: '5 rubros', chip: 'Lo que hacemos', titulo: 'Cada negocio es distinto. <em>Cada página también.</em>' },
      { tipo: 'captura', foto: 'fotos/estetica.jpg', pos: 'center 30%', chip: 'Centro de estética', titulo: 'Turnos <em>sin superposiciones</em>', img: 'aura', puntos: ['Agenda de cada profesional', 'Ficha de cada clienta, con alertas', 'Recordatorios por WhatsApp'], nota: true },
      { tipo: 'captura', foto: 'fotos/ferreteria.jpg', pos: '65% center', chip: 'Barraca y ferretería', titulo: 'Cada venta <em>descuenta el stock</em>', img: 'yunque', puntos: ['Ventas, caja y cuentas corrientes', 'Aviso de poco stock y vencidos', 'Las entregas del día'], nota: true },
      { tipo: 'captura', foto: 'fotos/taller.jpg', pos: '40% 30%', chip: 'Taller mecánico', titulo: 'Cada auto, <em>en qué etapa está</em>', img: 'motorfix', puntos: ['Del ingreso a «Listo», paso a paso', 'Turnos, repuestos y caja', 'Lo pendiente de cobro, a la vista'], nota: true },
      { tipo: 'captura', foto: 'fotos/escribania.jpg', pos: 'center 55%', chip: 'Escribanía', titulo: 'Firmas y plazos <em>bajo control</em>', img: 'escribania', puntos: ['Carpetas por estado', 'Agenda de firmas y plazos', 'Honorarios y fondos de clientes'], nota: true },
      { tipo: 'captura', foto: 'fotos/contadora.jpg', pos: '70% 35%', chip: 'Estudio contable', titulo: 'Ningún vencimiento <em>se pasa</em>', img: 'contadores', puntos: ['Calendario de DGI y BPS', 'Tareas de cada cliente, con semáforo', 'Sueldos, honorarios y finanzas'], nota: true },
      { tipo: 'cta', foto: 'fotos/celular-local.jpg', titulo: '¿Cómo sería <em>la tuya</em>?', cuerpo: 'Contanos tu rubro y te armamos una demo gratis, con tu logo.' },
    ],
    texto: `Cada negocio es distinto. Por eso cada página también 🧩

✂️ Centro de estética: turnos sin superposiciones y recordatorios por WhatsApp.
🧱 Barraca: cada venta descuenta el stock sola.
🔧 Taller: cada auto, en qué etapa está.
📑 Escribanía: firmas y plazos bajo control.
📊 Estudio contable: ningún vencimiento se pasa.

(Son demostraciones con datos de ejemplo.)

¿Y tu rubro? Contanos cuál es en los comentarios 👇
${CIERRE}`,
    hashtags: HASHTAGS + ' #SoftwareAMedida',
  },
  {
    n: 8, fecha: '2026-11-16', hora: '19:30', cuando: 'Lun 16/11', tipo: 'reel', id: 'r4-top5-excusas',
    titulo: 'Top 5 excusas', video: 'top5-excusas-vertical.mp4', duracion: '47 s',
    portada: { cuadro: 14, chip: 'Ranking', titulo: 'Top 5 excusas de un negocio <em>desordenado</em>' },
    texto: `Top 5 excusas de un negocio desordenado 🏆

#5 «Te lo anoté en un papel…»
…y el #1 lo dijimos todos alguna vez 😅

¿Cuál es la que más escuchás? ¿Cuál falta en la lista? 👇

Todas tienen arreglo:
${CIERRE}`,
    hashtags: HASHTAGS + ' #HumorEmprendedor',
  },
  {
    n: 9, fecha: '2026-11-18', hora: '19:30', cuando: 'Mié 18/11', tipo: 'carrusel', id: 'c5-planilla-vs-pagina',
    titulo: 'Planilla vs. página',
    laminas: [
      { tipo: 'portada-vs', chip: 'Antes y después', antes: 'Planilla', despues: 'Página', fotoAntes: 'fotos/escritorio-desordenado.jpg', fotoDespues: 'fotos/escritorio-ordenado.jpg' },
      { tipo: 'vs', tema: 'Buscar un cliente', antes: 'Abrís 3 archivos y el WhatsApp.', despues: 'Escribís el nombre y aparece todo.' },
      { tipo: 'vs', tema: 'Saber cuánto vendiste', antes: 'Sumás a mano a fin de mes.', despues: 'Lo ves al instante, todos los días.' },
      { tipo: 'vs', tema: 'Controlar el stock', antes: 'Contás los estantes cada tanto.', despues: 'Baja solo con cada venta y te avisa.' },
      { tipo: 'vs', tema: 'Trabajar en equipo', antes: '«planilla_final_FINAL_v3.xlsx»', despues: 'Todos ven lo mismo, cada uno con su usuario.' },
      { tipo: 'vs', tema: 'Desde el celular', antes: 'Hacés zoom y se desarma.', despues: 'Funciona igual que en la compu.' },
      CTA_COMUN,
    ],
    texto: `Planilla vs. página: lo mismo de todos los días, de dos maneras 👇

🔎 Buscar un cliente
📈 Saber cuánto vendiste
📦 Controlar el stock
👥 Trabajar en equipo
📱 Usarlo desde el celular

Deslizá y decinos: ¿de qué lado estás hoy? 😉

${CIERRE}`,
    hashtags: HASHTAGS + ' #Excel',
  },

  // ───────────────────────── 20/11 al 25/11 ─────────────────────────
  {
    n: 10, fecha: '2026-11-20', hora: '19:30', cuando: 'Vie 20/11', tipo: 'reel', id: 'r5-el-chat',
    titulo: 'El chat', video: 'el-chat-vertical.mp4', duracion: '31 s',
    portada: { cuadro: 17, chip: 'Así trabajamos', titulo: 'Jorge mandó su logo. <em>3 días después…</em>' },
    texto: `Jorge tiene una barraca… y un cuaderno lleno de tachones 📒

Nos mandó su logo por WhatsApp. Tres días después tenía su propia página funcionando.
«¡¿Esto es MÍO?!» 😄

(Jorge es el personaje de una de nuestras demos, pero el camino es exactamente así.)

Mandanos tu logo y tu rubro:
${CIERRE}`,
    hashtags: HASHTAGS + ' #Barraca',
  },
  {
    n: 11, fecha: '2026-11-23', hora: '19:30', cuando: 'Lun 23/11', tipo: 'carrusel', id: 'c6-preguntas',
    titulo: 'Preguntas frecuentes',
    laminas: [
      { tipo: 'portada', foto: 'fotos/duda.jpg', pos: '45% 25%', sticker: 'Sin vueltas', chip: 'Preguntas frecuentes', titulo: 'Lo que siempre <em>nos preguntan</em>' },
      { tipo: 'pregunta', pregunta: '¿Hay que instalar algo?', respuesta: 'No. Se abre desde el navegador, como cualquier página. Entrás con tu usuario y tu contraseña.' },
      { tipo: 'pregunta', pregunta: '¿Anda en el celular?', respuesta: 'Sí. Está pensada para usarse en la compu, el celular y la tablet.' },
      { tipo: 'pregunta', pregunta: '¿Cuánto cuesta?', respuesta: 'Depende de lo que necesites: las secciones, los usuarios y las conexiones. Por eso primero te armamos la demo gratis y después te pasamos un presupuesto sin compromiso.' },
      { tipo: 'pregunta', pregunta: '¿Y el soporte?', respuesta: 'Es aparte y opcional. Te lo explicamos junto con el presupuesto, para que elijas.' },
      { tipo: 'pregunta', pregunta: '¿Cuánto demora?', respuesta: 'La demo, pocos días. La página terminada depende de lo que lleve, y te lo decimos antes de empezar.' },
      { tipo: 'pregunta', pregunta: '¿Quién ve mis datos?', respuesta: 'Solo las personas que vos autorices, cada una con su usuario.' },
      CTA_COMUN,
    ],
    texto: `Lo que siempre nos preguntan (y nuestras respuestas, sin vueltas) 👇

¿Hay que instalar algo? No.
¿Anda en el celular? Sí.
¿Cuánto cuesta? Depende de lo que necesites. Por eso primero la demo gratis y después un presupuesto sin compromiso.
¿Cuánto demora? La demo, pocos días.

¿Te quedó alguna duda? Dejala en los comentarios y te respondemos.
${CIERRE}`,
    hashtags: HASHTAGS + ' #PreguntasFrecuentes',
  },
  {
    n: 12, fecha: '2026-11-25', hora: '19:30', cuando: 'Mié 25/11', tipo: 'reel', id: 'r6-5-mitos',
    titulo: '5 mitos', video: '5-mitos-vertical.mp4', duracion: '54 s',
    portada: { cuadro: 6, chip: 'Mitos y realidades',titulo: '5 mitos sobre tener <em>tu propia página</em>' },
    texto: `5 mitos sobre tener tu propia página de gestión 💥

❌ «Es carísimo»
❌ «Hay que instalar programas»
❌ «Es complicado»
❌ «Mi negocio es distinto»
❌ «Tarda meses»

Mirá cómo se rompe cada uno 👆

Ya no hay excusas:
${CIERRE}`,
    hashtags: HASHTAGS + ' #MitosYRealidades',
  },
];

// Tapas de las historias destacadas (el ícono va dibujado en la plantilla)
const DESTACADAS = [
  { id: 'd1-demos', nombre: 'Demos', icono: 'pantalla' },
  { id: 'd2-como-funciona', nombre: 'Cómo funciona', icono: 'pasos' },
  { id: 'd3-clientes', nombre: 'Clientes', icono: 'estrella' },
  { id: 'd4-preguntas', nombre: 'Preguntas', icono: 'pregunta' },
  { id: 'd5-contacto', nombre: 'Contacto', icono: 'chat' },
];

// Historias que van adentro de cada destacada (1080 × 1920). Arriba y abajo Instagram tapa con sus botones:
// el contenido va entre los 250 y los 1580 px.
// «Clientes»: SOLO testimonios reales (los publicados en wydansolutions.com, 29/10/2026), recortados con frases
// textuales y […] donde se saltea; solo rubro y ciudad, sin fotos de personas. Nunca inventarlos.
const HISTORIAS = {
  'd1-demos': [
    { tipo: 'h-portada', foto: 'fotos/juntos-laptop.jpg', pos: '45% center', sticker: 'Demos', chip: 'Páginas que ya creamos', titulo: 'Una página <em>distinta</em> para cada negocio', bajada: 'Tocá para ver algunas →' },
    { tipo: 'h-rubro', foto: 'fotos/estetica.jpg', pos: 'center 30%', img: 'aura', chip: 'Centro de estética', titulo: 'Turnos <em>sin superposiciones</em>', puntos: ['Agenda de cada profesional', 'Recordatorios por WhatsApp'] },
    { tipo: 'h-rubro', foto: 'fotos/ferreteria.jpg', pos: '65% center', img: 'yunque', chip: 'Barraca y ferretería', titulo: 'Cada venta <em>descuenta el stock</em>', puntos: ['Ventas, caja y cuentas corrientes', 'Aviso de poco stock'] },
    { tipo: 'h-rubro', foto: 'fotos/taller.jpg', pos: '40% 30%', img: 'motorfix', chip: 'Taller mecánico', titulo: 'Cada auto, <em>en qué etapa está</em>', puntos: ['Del ingreso a «Listo»', 'Lo pendiente de cobro, a la vista'] },
    { tipo: 'h-rubro', foto: 'fotos/escribania.jpg', pos: 'center 55%', img: 'escribania', chip: 'Escribanía', titulo: 'Firmas y plazos <em>bajo control</em>', puntos: ['Carpetas por estado', 'Agenda de firmas y plazos'] },
    { tipo: 'h-rubro', foto: 'fotos/contadora.jpg', pos: '70% 35%', img: 'contadores', chip: 'Estudio contable', titulo: 'Ningún vencimiento <em>se pasa</em>', puntos: ['Calendario de DGI y BPS', 'Tareas de cada cliente, con semáforo'] },
  ],
  'd2-como-funciona': [
    { tipo: 'h-paso', num: 1, foto: 'fotos/mate.jpg', pos: 'center 45%', titulo: 'Nos contás cómo trabajás', cuerpo: 'Una charla por WhatsApp o en persona: qué hacés, qué anotás y qué te complica.' },
    { tipo: 'h-paso', num: 2, foto: 'paginas/aura.png', pos: 'left top', titulo: 'Te armamos una demo gratis', cuerpo: 'En pocos días ves tu página funcionando, con tu logo y datos de ejemplo.' },
    { tipo: 'h-paso', num: 3, foto: 'fotos/charla.jpg', pos: 'center 35%', titulo: 'La ajustamos juntos', cuerpo: 'Nos adaptamos a vos, no vos a nosotros.' },
    { tipo: 'h-paso', num: 4, foto: 'fotos/celular-local.jpg', pos: 'center 30%', titulo: 'La usás todos los días', cuerpo: 'Desde la compu, el celular o la tablet. Y si necesitás una mano, estamos.' },
    { tipo: 'h-cta', foto: 'fotos/mostrador-celular.jpg', titulo: 'Empezá por <em>el paso 1</em>', cuerpo: 'Escribinos DEMO y te armamos la tuya gratis, con tu logo.' },
  ],
  'd3-clientes': [
    { tipo: 'h-portada', foto: 'fotos/escritorio-ordenado.jpg', pos: 'center', sticker: 'Testimonios reales', chip: 'Clientes', titulo: 'Lo que dicen <em>quienes ya la usan</em>', bajada: 'Tocá para leerlos →' },
    { tipo: 'h-testimonio', rubro: 'Taller de camiones', ciudad: 'Rivera',
      texto: 'Desde que comenzamos a utilizar el aplicativo, la forma de gestionar el taller ha mejorado muchísimo. […] Estamos muy conformes y contentos con el resultado. […] Sin dudas, recomendamos esta herramienta.' },
    { tipo: 'h-testimonio', rubro: 'Estudio Contable W. Machado', ciudad: 'Rivera',
      texto: 'Hay un antes y un después de la existencia de esta herramienta. […] Logramos cubrir esos pequeños obstáculos, quedando más eficientes frente al cliente. ¿Que si lo recomiendo? Claro que sí, súper recomiendo.' },
    { tipo: 'h-testimonio', rubro: 'Estudio contable', ciudad: 'Rivera',
      texto: 'Excelente sistema para seguimiento de tareas y clientes. […] Es ideal para saber exactamente el estado de las tareas de cada cliente y centralizar toda su información y honorarios en un solo lugar.' },
    { tipo: 'h-cta', foto: 'fotos/mostrador-celular.jpg', titulo: '¿Querés <em>la tuya</em>?', cuerpo: 'Te armamos una demo gratis, con tu logo.' },
  ],
  'd4-preguntas': [
    { tipo: 'h-portada', foto: 'fotos/duda.jpg', pos: '45% 25%', sticker: 'Sin vueltas', chip: 'Preguntas frecuentes', titulo: 'Lo que siempre <em>nos preguntan</em>', bajada: 'Tocá para ver las respuestas →' },
    { tipo: 'h-pregunta', pregunta: '¿Hay que instalar algo?', respuesta: 'No. Se abre desde el navegador, como cualquier página. Entrás con tu usuario y tu contraseña.' },
    { tipo: 'h-pregunta', pregunta: '¿Anda en el celular?', respuesta: 'Sí. Está pensada para usarse en la compu, el celular y la tablet.' },
    { tipo: 'h-pregunta', pregunta: '¿Cuánto cuesta?', respuesta: 'Depende de lo que necesites: las secciones, los usuarios y las conexiones. Por eso primero te armamos la demo gratis y después te pasamos un presupuesto sin compromiso.' },
    { tipo: 'h-pregunta', pregunta: '¿Cuánto demora?', respuesta: 'La demo, pocos días. La página terminada depende de lo que lleve, y te lo decimos antes de empezar.' },
    { tipo: 'h-pregunta', pregunta: '¿Quién ve mis datos?', respuesta: 'Solo las personas que vos autorices, cada una con su usuario.' },
    { tipo: 'h-cta', foto: 'fotos/celular-local.jpg', titulo: '¿Otra duda? <em>Escribinos</em>', cuerpo: 'Te respondemos por WhatsApp o por mensaje directo.' },
  ],
  'd5-contacto': [
    { tipo: 'h-contacto', titulo: '<em>Hablemos</em>', cuerpo: 'Escribí DEMO y te armamos una demostración gratis, con tu logo.' },
  ],
};

// Cronograma del primer mes (armado el 28/10/2026). Las publicaciones se suman solas por su `fecha`;
// acá van las tareas que no son publicar. tipo: tarea · publicidad · revision · aviso
const CRONOGRAMA = [
  { fecha: '2026-10-28', tipo: 'revision', titulo: 'Revisar las publicaciones y los videos', detalle: 'Mirar la vista previa entera y avisar qué cambiar.' },
  { fecha: '2026-10-29', tipo: 'tarea', titulo: 'Crear la cuenta de Instagram', detalle: 'Con wydan.solutions@gmail.com · usuario @wydan.solutions · pasarla a cuenta profesional → Empresa → categoría «Empresa de software».' },
  { fecha: '2026-10-29', tipo: 'tarea', titulo: 'Conectar Facebook y WhatsApp Business', detalle: 'Centro de cuentas: sumar la página de Facebook de Wydan. Agregar el botón de WhatsApp (097 096 996). Sin esto no se puede hacer publicidad.' },
  { fecha: '2026-10-30', tipo: 'tarea', titulo: 'Completar el perfil', detalle: 'Foto de perfil, nombre «Wydan | Páginas de gestión», categoría «Empresa de software», bio B y link a la web.' },
  { fecha: '2026-10-30', tipo: 'tarea', titulo: 'Armar las historias destacadas', detalle: 'Crearlas al revés (Contacto → Preguntas → Clientes → Cómo funciona → Demos). Demos 6, Cómo funciona 5, Clientes 5 (testimonios reales), Preguntas 7 y Contacto 1. Están en la vista previa, sección «Historias destacadas».' },
  { fecha: '2026-11-02', tipo: 'aviso', titulo: 'Feriado (Día de los Difuntos): no se publica', detalle: 'Buen día para dejar programadas las publicaciones de la semana en Meta Business Suite → Planificador.' },
  { fecha: '2026-11-03', hora: '20:00', tipo: 'tarea', titulo: 'Contarle a todos que arrancamos', detalle: 'Compartir el perfil en los estados de WhatsApp y pedirle a conocidos y clientes que nos sigan. Los primeros seguidores ayudan a que Instagram nos muestre.' },
  { fecha: '2026-11-09', tipo: 'publicidad', titulo: 'Primera publicidad', detalle: 'Promocionar el reel que más gustó la primera semana. Objetivo: mensajes por WhatsApp. Zona y presupuesto a definir (sugerido USD 3 a 5 por día, 7 días).' },
  { fecha: '2026-11-13', tipo: 'revision', titulo: 'Revisar la primera publicidad', detalle: 'Cuántos mensajes trajo y cuánto costó cada uno. Seguir, cambiar el video o cambiar la zona.' },
  { fecha: '2026-11-16', tipo: 'publicidad', titulo: 'Segunda publicidad', detalle: 'Probar con el carrusel «Páginas que ya creamos», apuntado a dueños de comercios y profesionales.' },
  { fecha: '2026-11-20', tipo: 'revision', titulo: 'Revisión de mitad de mes', detalle: 'Qué publicación tuvo más alcance, guardados y mensajes. Repetir lo que funcionó.' },
  { fecha: '2026-11-27', tipo: 'tarea', titulo: 'Armar el plan de diciembre', detalle: 'Idea: «Empezá 2027 con tu negocio ordenado» (fin de año, cierre de caja y balances).' },
  { fecha: '2026-11-30', tipo: 'revision', titulo: 'Balance del primer mes', detalle: 'Seguidores, mensajes, demos pedidas y ventas. Con eso se ajusta el plan.' },
];

if (typeof module !== 'undefined') module.exports = { PUBLICACIONES, DESTACADAS, HISTORIAS, CRONOGRAMA, WHATSAPP, CONTACTOS };
