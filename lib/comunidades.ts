// Datos autonómicos de 2026 para las páginas por comunidad.
// Fuente: Ministerio de Hacienda, «Tributación Autonómica. Medidas 2026», capítulo I (actualizado a 23/09/2026).
// Solo comunidades de régimen común que atendemos: quedan fuera País Vasco y Navarra (forales), Canarias, Ceuta y Melilla.

export type Comunidad = {
  slug: string; // ruta: /gestoria-<slug>/
  nombre: string; // «Comunidad de Madrid»
  corto: string; // «Madrid», para frases
  en: string; // «en la Comunidad de Madrid»
  ciudades: string[];
  tramos: number;
  min: number; // tipo marginal mínimo autonómico, %
  max: number; // tipo marginal máximo autonómico, %
  minimo: string; // mínimo personal y familiar
  patrimonio: string;
  sucesiones: string;
  itp: string;
  agencia: string; // administración tributaria autonómica
  intro: [string, string];
  pagina?: string; // si ya existe una página propia con otra ruta
};

export const ESTATAL_MAX = 24.5; // tipo máximo de la escala estatal del IRPF

export const comunidades: Comunidad[] = [
  {
    slug: "madrid",
    nombre: "Comunidad de Madrid",
    corto: "Madrid",
    en: "en la Comunidad de Madrid",
    ciudades: ["Madrid", "Móstoles", "Alcalá de Henares", "Fuenlabrada", "Leganés", "Getafe", "Alcorcón"],
    tramos: 5,
    min: 8.5,
    max: 20.5,
    minimo: "Más alto que el estatal: sube el del contribuyente, descendientes, ascendientes y discapacidad",
    patrimonio: "Bonificación del 100 % desde 2009, con un mínimo exento de 700.000 €",
    sucesiones: "Bonificación del 99 % de la cuota entre padres, hijos y cónyuges",
    itp: "6 %, el más bajo de las comunidades que atendemos",
    agencia: "Dirección General de Tributos de la Comunidad de Madrid",
    intro: [
      "Madrid tiene el tramo autonómico del IRPF más bajo de las comunidades de régimen común: su tipo máximo es del 20,5 %, cuatro puntos por debajo de la escala estatal. Sumadas las dos mitades, el tipo más alto que paga un madrileño es del 45 %, frente al 53,85 % de la Comunitat Valenciana.",
      "Eso no significa que el IRPF se haga solo. La escala baja se nota sobre todo en rentas medias y altas; en las bajas pesan más las deducciones autonómicas, que hay que pedir en la Renta porque el borrador no siempre las recoge. Las revisamos cada año con tu situación.",
    ],
  },
  {
    slug: "andalucia",
    nombre: "Andalucía",
    corto: "Andalucía",
    en: "en Andalucía",
    ciudades: ["Sevilla", "Málaga", "Córdoba", "Granada", "Almería", "Huelva", "Cádiz", "Jaén", "Marbella", "Jerez de la Frontera"],
    tramos: 5,
    min: 9.5,
    max: 22.5,
    minimo: "Más alto que el estatal en todos los conceptos",
    patrimonio: "Bonificación del 100 %; mínimo exento mayor para personas con discapacidad",
    sucesiones: "Bonificación del 99 % de la cuota entre padres, hijos y cónyuges",
    itp: "7 %",
    agencia: "Agencia Tributaria de Andalucía",
    intro: [
      "Andalucía tiene desde hace unos años una de las escalas autonómicas más bajas, con cinco tramos que van del 9,5 % al 22,5 %, y bonifica al 100 % el Impuesto sobre el Patrimonio. Para un autónomo con rendimientos medios, la diferencia con otras comunidades está más en las deducciones que en la escala.",
      "Trabajamos en remoto con autónomos y sociedades de las ocho provincias: profesionales de Sevilla y Málaga que facturan a empresas, negocios de costa que viven de la temporada, agricultores y comercios. Si tu actividad es agrícola, el régimen especial del IVA tiene sus propias reglas, y te las explicamos.",
    ],
  },
  {
    slug: "cataluna",
    nombre: "Cataluña",
    corto: "Cataluña",
    en: "en Cataluña",
    ciudades: ["Barcelona", "L'Hospitalet de Llobregat", "Terrassa", "Badalona", "Sabadell", "Lleida", "Tarragona", "Girona", "Mataró", "Reus"],
    tramos: 8,
    min: 9.5,
    max: 25.5,
    minimo: "El mismo que el estatal",
    patrimonio: "Mínimo exento de 500.000 €, el más bajo junto con Extremadura; sin bonificación general",
    sucesiones: "Bonificación del 99 % para el cónyuge y del 99 % al 20 % para hijos, según lo que hereden",
    itp: "Escala del 10 % al 13 % según el valor",
    agencia: "Agència Tributària de Catalunya",
    intro: [
      "Cataluña es de las comunidades donde más pesa el tramo autonómico: ocho tramos que llegan al 25,5 %, y un mínimo personal que no mejora el estatal. Sumada la mitad estatal, el tipo más alto del IRPF es del 50 %. Para rentas altas, y también en Patrimonio y Sucesiones, es donde más se nota la diferencia con Madrid.",
      "Por eso en Cataluña planificar vale más que en otros sitios: elegir bien entre autónomo y sociedad, repartir rendimientos o aprovechar las deducciones que quedan, como las nuevas de 2026 para quien se traslada o compra vivienda en un municipio rural. Trabajamos en remoto con autónomos y sociedades de las cuatro provincias.",
    ],
  },
  {
    slug: "galicia",
    nombre: "Galicia",
    corto: "Galicia",
    en: "en Galicia",
    ciudades: ["Vigo", "A Coruña", "Ourense", "Lugo", "Santiago de Compostela", "Pontevedra", "Ferrol"],
    tramos: 5,
    min: 9,
    max: 22.5,
    minimo: "Más alto que el estatal en todos los conceptos",
    patrimonio: "Mínimo exento de 700.000 € y bonificación del 50 %",
    sucesiones: "Bonificación del 99 % de la cuota entre padres, hijos y cónyuges",
    itp: "8 %",
    agencia: "Axencia Tributaria de Galicia",
    intro: [
      "Galicia tiene una escala autonómica corta, de cinco tramos entre el 9 % y el 22,5 %, y un mínimo personal más alto que el estatal. A diferencia de Madrid o Andalucía, el Impuesto sobre el Patrimonio no está bonificado del todo: la rebaja es del 50 %.",
      "Llevamos en remoto a autónomos y sociedades de Vigo, A Coruña y toda la comunidad: profesionales, comercio, hostelería del Camino y empresas del mar. Las deducciones gallegas, como las de natalidad, las revisamos en cada Renta.",
    ],
  },
  {
    slug: "castilla-y-leon",
    nombre: "Castilla y León",
    corto: "Castilla y León",
    en: "en Castilla y León",
    ciudades: ["Valladolid", "Burgos", "Salamanca", "León", "Palencia", "Zamora", "Ávila", "Segovia", "Soria", "Ponferrada"],
    tramos: 5,
    min: 9,
    max: 21.5,
    minimo: "El mismo que el estatal",
    patrimonio: "Sin bonificación general; exención para el patrimonio protegido de personas con discapacidad",
    sucesiones: "Bonificación del 99 % de la cuota entre padres, hijos y cónyuges",
    itp: "8 % hasta cierto valor y 10 % por encima",
    agencia: "Consejería de Economía y Hacienda de Castilla y León",
    intro: [
      "Castilla y León tiene la segunda escala autonómica más baja, después de Madrid: cinco tramos que no pasan del 21,5 %. El mínimo personal, en cambio, es el estatal, así que en rentas bajas la ventaja frente a otras comunidades es pequeña.",
      "Muchos de nuestros clientes de la comunidad son autónomos en municipios pequeños, donde las deducciones por vivir o emprender en el medio rural pueden pesar más que la escala. Las aplicamos en tu Renta si te corresponden.",
    ],
  },
  {
    slug: "castilla-la-mancha",
    nombre: "Castilla-La Mancha",
    corto: "Castilla-La Mancha",
    en: "en Castilla-La Mancha",
    ciudades: ["Albacete", "Toledo", "Guadalajara", "Talavera de la Reina", "Ciudad Real", "Cuenca", "Puertollano"],
    tramos: 5,
    min: 9.5,
    max: 22.5,
    minimo: "El mismo que el estatal",
    patrimonio: "Sin bonificación general",
    sucesiones: "Bonificación del 100 % al 80 % en herencias de padres a hijos y entre cónyuges, según lo que se herede",
    itp: "9 %",
    agencia: "Consejería de Hacienda de Castilla-La Mancha",
    intro: [
      "Castilla-La Mancha aplica una escala de cinco tramos, del 9,5 % al 22,5 %, la misma estructura que Andalucía o Murcia. Donde más se aparta es en Sucesiones, con bonificaciones altas para herencias en familia, y en el ITP, que es del 9 %.",
      "Trabajamos en remoto con autónomos y sociedades de Albacete, Toledo, Guadalajara y el resto de la comunidad. En Guadalajara y Toledo son muchos los que trabajan para clientes de Madrid: facturar desde aquí no cambia el IVA, pero tu IRPF sí sigue la escala castellanomanchega.",
    ],
  },
  {
    slug: "aragon",
    nombre: "Aragón",
    corto: "Aragón",
    en: "en Aragón",
    ciudades: ["Zaragoza", "Huesca", "Teruel", "Calatayud", "Utebo", "Monzón"],
    tramos: 9,
    min: 9.5,
    max: 25.5,
    minimo: "Sin cambios relevantes sobre el estatal",
    patrimonio: "Mínimo exento de 700.000 €; bonificación del 99 % solo para patrimonio protegido",
    sucesiones: "Reducción del 100 % de la base con límites y bonificación del 99 % para hijos y cónyuges",
    itp: "Escala del 8 % al 10 % según el valor",
    agencia: "Departamento de Hacienda del Gobierno de Aragón",
    intro: [
      "Aragón tiene una escala autonómica larga, de nueve tramos entre el 9,5 % y el 25,5 %. Sumada la estatal, el tipo más alto es del 50 %, como en Cataluña. En la mayoría de rentas de autónomos, la diferencia con las comunidades de escala baja es de unos cientos de euros al año.",
      "Llevamos en remoto a autónomos y sociedades de Zaragoza, Huesca, Teruel y el resto de Aragón. Para quien vive en municipios pequeños, las deducciones para municipios con poca población pueden compensar parte de esa diferencia; las revisamos en cada Renta.",
    ],
  },
  {
    slug: "asturias",
    nombre: "Principado de Asturias",
    corto: "Asturias",
    en: "en Asturias",
    ciudades: ["Gijón", "Oviedo", "Avilés", "Siero", "Langreo", "Mieres"],
    tramos: 8,
    min: 9,
    max: 26,
    minimo: "Más alto que el estatal, hasta el máximo permitido",
    patrimonio: "Sin bonificación general; bonificación del 99 % para patrimonio protegido",
    sucesiones: "Mejora de la reducción estatal con coeficientes reductores para hijos y cónyuges",
    itp: "Escala del 8 % al 10 % según el valor",
    agencia: "Ente Público de Servicios Tributarios del Principado de Asturias",
    intro: [
      "Asturias combina un tipo máximo autonómico alto, del 26 %, con un mínimo personal elevado al máximo que permite la ley. El resultado es que las rentas bajas y medias pagan menos de lo que sugiere la escala, y las altas, más: el tipo marginal máximo sumado llega al 50,5 %.",
      "Trabajamos en remoto con autónomos y sociedades de Gijón, Oviedo, Avilés y toda la comunidad. Revisamos las deducciones asturianas, entre ellas las del medio rural, en cada Renta.",
    ],
  },
  {
    slug: "baleares",
    nombre: "Illes Balears",
    corto: "Baleares",
    en: "en Baleares",
    ciudades: ["Palma", "Calvià", "Manacor", "Ibiza", "Llucmajor", "Marratxí", "Inca", "Maó", "Ciutadella"],
    tramos: 9,
    min: 9,
    max: 24.75,
    minimo: "Más alto que el estatal para mayores de 65 y 75 años, descendientes, ascendientes y discapacidad",
    patrimonio: "Mínimo exento de 3.000.000 €, el más alto de las comunidades que atendemos",
    sucesiones: "Bonificación del 100 % de la cuota entre padres, hijos y cónyuges",
    itp: "Escala del 8 % al 13 % según el valor",
    agencia: "Agència Tributària de les Illes Balears",
    intro: [
      "Baleares tiene nueve tramos autonómicos, del 9 % al 24,75 %, y dos rasgos que la separan del resto: el mínimo exento del Impuesto sobre el Patrimonio más alto, de 3 millones, y la bonificación total de las herencias en familia. El ITP, en cambio, sube hasta el 13 % en las compras caras.",
      "Muchos de nuestros clientes de las islas son negocios de temporada, que facturan en seis meses lo de todo el año. Trabajamos en remoto con Mallorca, Menorca, Ibiza y Formentera, y ajustamos la cuota de autónomo y los pagos a cuenta a ese ritmo.",
    ],
  },
  {
    slug: "cantabria",
    nombre: "Cantabria",
    corto: "Cantabria",
    en: "en Cantabria",
    ciudades: ["Santander", "Torrelavega", "Castro Urdiales", "Camargo", "Piélagos", "El Astillero"],
    tramos: 6,
    min: 8.5,
    max: 24.5,
    minimo: "Sin cambios relevantes sobre el estatal",
    patrimonio: "Mínimo exento de 700.000 € y bonificación del 100 %, salvo patrimonios de más de 3 millones",
    sucesiones: "Bonificación del 100 % de la cuota entre padres, hijos y cónyuges",
    itp: "9 %",
    agencia: "Agencia Cántabra de Administración Tributaria",
    intro: [
      "Cantabria rebajó su escala hasta un tipo mínimo del 8,5 %, de los más bajos, con un máximo del 24,5 %. Bonifica al 100 % las herencias en familia y el Impuesto sobre el Patrimonio, salvo en patrimonios por encima de tres millones mientras siga en vigor el impuesto estatal de solidaridad de las grandes fortunas.",
      "Trabajamos en remoto con autónomos y sociedades de Santander, Torrelavega y toda la comunidad, también con los muchos de Castro Urdiales que trabajan para clientes del País Vasco: si vives y tributas en Cantabria, tu IRPF es el de régimen común aunque tus clientes estén en Bizkaia.",
    ],
  },
  {
    slug: "extremadura",
    nombre: "Extremadura",
    corto: "Extremadura",
    en: "en Extremadura",
    ciudades: ["Badajoz", "Cáceres", "Mérida", "Plasencia", "Don Benito", "Villanueva de la Serena", "Almendralejo"],
    tramos: 9,
    min: 7.75,
    max: 25,
    minimo: "Sin cambios relevantes sobre el estatal",
    patrimonio: "Mínimo exento de 500.000 € (más con discapacidad) y bonificación del 100 %",
    sucesiones: "Bonificación del 99 % hasta 300.000 € de base y del 50 % en el exceso hasta 600.000 €",
    itp: "Escala del 8 % al 11 % según el valor",
    agencia: "Consejería de Hacienda de la Junta de Extremadura",
    intro: [
      "Extremadura cambió su escala en 2026 y ahora tiene el tipo mínimo autonómico más bajo del régimen común, del 7,75 %, con nueve tramos que llegan al 25 %. Para rentas bajas es de las comunidades donde menos IRPF autonómico se paga.",
      "Llevamos en remoto a autónomos y sociedades de Badajoz, Cáceres, Mérida y el resto de la comunidad, incluidos agricultores y ganaderos, que tienen su propio régimen especial en el IVA.",
    ],
  },
  {
    slug: "la-rioja",
    nombre: "La Rioja",
    corto: "La Rioja",
    en: "en La Rioja",
    ciudades: ["Logroño", "Calahorra", "Arnedo", "Haro", "Alfaro", "Lardero"],
    tramos: 8,
    min: 8,
    max: 27,
    minimo: "El estatal, con un mínimo más alto por discapacidad de descendientes",
    patrimonio: "Mínimo exento de 700.000 € y bonificación del 100 % desde 2025",
    sucesiones: "Bonificación del 99 % de la cuota entre padres, hijos y cónyuges",
    itp: "7 %",
    agencia: "Dirección General de Tributos de La Rioja",
    intro: [
      "La Rioja es la comunidad de los extremos: su tipo mínimo, del 8 %, es de los más bajos, y el máximo, del 27 %, de los más altos. Las rentas bajas pagan poco; las que pasan de los tramos altos, bastante más que en las comunidades vecinas. Desde 2025 bonifica al 100 % el Impuesto sobre el Patrimonio.",
      "Trabajamos en remoto con autónomos y sociedades de Logroño y toda La Rioja, incluidas bodegas y explotaciones agrícolas, que suelen combinar actividad agraria, venta directa y exportación.",
    ],
  },
];

// Comunidades con página propia ya existente, para la comparativa general.
export const otrasComunidades = [
  { nombre: "Comunitat Valenciana", corto: "Comunitat Valenciana", tramos: 11, min: 8.8, max: 29.35, itp: "9 % (11 % si pasa de 1 millón)", pagina: "/gestoria-alicante/" },
  { nombre: "Región de Murcia", corto: "Murcia", tramos: 5, min: 9.5, max: 22.5, itp: "7,75 %", pagina: "/gestoria-murcia/" },
];

export const pct = (n: number) => `${n.toLocaleString("es-ES")} %`;
