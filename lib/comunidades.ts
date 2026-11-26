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
  deducciones: string[];
  preguntas: { p: string; r: string }[];
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
    deducciones: ["Nacimiento o adopción de hijos", "Alquiler de la vivienda habitual", "Cuidado de ascendientes o descendientes", "Familia numerosa", "Fomento del autoempleo"],
    preguntas: [
      { p: "¿Hay alguna deducción en Madrid para quien se hace autónomo?", r: "Sí. Madrid tiene una deducción autonómica por fomento del autoempleo, con requisitos que hay que cumplir el año del alta. Si empiezas este año, comprobamos si te corresponde y la aplicamos en tu Renta." },
      { p: "Vivo en Madrid y mis clientes están en otras comunidades. ¿Dónde tributo?", r: "En Madrid. El IRPF se paga en la comunidad donde vives más días del año, no donde están tus clientes ni donde facturas." },
      { p: "¿Tengo que presentar el Impuesto sobre el Patrimonio en Madrid?", r: "Si tus bienes valen más de dos millones, sí hay que presentarlo, aunque la bonificación del 100 % deja la cuota a cero. Por encima de tres millones se calcula aparte el impuesto estatal de solidaridad de las grandes fortunas." },
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
    deducciones: ["Nacimiento o adopción de hijos", "Alquiler de la vivienda habitual", "Familia numerosa", "Gastos educativos y libros de texto", "Edad o discapacidad del contribuyente o su cónyuge"],
    preguntas: [
      { p: "¿Me puedo deducir el alquiler de mi casa en Andalucía?", r: "Andalucía tiene una deducción autonómica por alquiler de la vivienda habitual, con límites de edad y de renta. Si cumples los requisitos, la aplicamos en tu Renta." },
      { p: "Soy agricultor. ¿Me lleváis?", r: "Sí. Si estás en el régimen especial agrario del IVA no cobras IVA ni lo presentas, y cobras una compensación del comprador; si vas a invertir en un invernadero o maquinaria, calculamos contigo si te conviene salir de él." },
      { p: "Tengo hijos en edad escolar. ¿Hay alguna deducción?", r: "Sí, Andalucía tiene deducción por gastos educativos y libros de texto, además de las de familia numerosa. Revisamos cada año cuáles te corresponden." },
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
    deducciones: ["Nacimiento de hijos", "Alquiler de la vivienda habitual", "Compra o rehabilitación de la vivienda habitual", "Intereses de préstamos para grado, máster y doctorado", "Residencia en municipios rurales o en riesgo de despoblación"],
    preguntas: [
      { p: "¿Por qué pago más IRPF en Cataluña que en Madrid con los mismos ingresos?", r: "Porque la escala catalana llega al 25,5 % y el mínimo personal no mejora el estatal, mientras que en Madrid el máximo es del 20,5 % y el mínimo es más alto. La diferencia crece con la renta." },
      { p: "¿Me conviene montar una sociedad en Cataluña?", r: "El Impuesto sobre Sociedades es igual en toda España, así que con una escala de IRPF alta la sociedad empieza a compensar antes que en otras comunidades. Lo calculamos con tus números en la calculadora de autónomo o sociedad." },
      { p: "He comprado casa en un pueblo pequeño. ¿Me puedo deducir algo?", r: "Desde 2026 Cataluña tiene deducciones nuevas por comprar, rehabilitar o trasladar la vivienda habitual a un municipio rural, con límites de renta. Comprobamos si tu municipio entra." },
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
    deducciones: ["Nacimiento de hijos", "Alquiler de la vivienda habitual, también para el arrendador", "Cuidado de ascendientes o descendientes", "Familia numerosa", "Edad o discapacidad del contribuyente o su cónyuge"],
    preguntas: [
      { p: "¿Hay deducciones por tener hijos en Galicia?", r: "Sí: por nacimiento, por familia numerosa y por cuidado de hijos y mayores a cargo. Las revisamos en cada Renta porque cambian con la edad de los niños." },
      { p: "Alquilo un piso. ¿Hay alguna deducción para el casero?", r: "Galicia es de las pocas comunidades que también tiene deducción para el arrendador, además de la del inquilino. Tiene requisitos, que comprobamos contigo." },
      { p: "¿Pago el Impuesto sobre el Patrimonio en Galicia?", r: "Por encima de 700.000 € de patrimonio neto, sin contar la vivienda habitual hasta su límite, sí, con una bonificación del 50 %. A diferencia de Madrid o Andalucía, no queda a cero." },
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
    deducciones: ["Nacimiento de hijos", "Cuidado de ascendientes o descendientes", "Familia numerosa", "Edad o discapacidad del contribuyente o su cónyuge", "Vivienda en el medio rural"],
    preguntas: [
      { p: "Vivo en un pueblo pequeño. ¿Hay deducciones?", r: "Castilla y León tiene deducciones ligadas a la vivienda en el medio rural. Comprobamos si tu municipio y tu caso entran y las aplicamos en la Renta." },
      { p: "¿Cuánto IRPF autonómico se paga en Castilla y León?", r: "Es la segunda escala más baja de las comunidades de régimen común, después de Madrid: el tipo máximo autonómico es del 21,5 %, y sumado al estatal, del 46 %." },
      { p: "Cuido de mi madre en casa. ¿Me puedo deducir algo?", r: "Castilla y León tiene deducción por cuidado de ascendientes y descendientes, además del mínimo por ascendiente que ya da el Estado. Comprobamos si cumples los requisitos." },
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
    deducciones: ["Nacimiento de hijos", "Acogimiento de menores o personas con discapacidad", "Cuidado de ascendientes o descendientes", "Familias monoparentales", "Alquiler de la vivienda habitual"],
    preguntas: [
      { p: "Vivo en Guadalajara y trabajo para empresas de Madrid. ¿Dónde tributo?", r: "En Castilla-La Mancha, porque es donde vives. Tus facturas no cambian, pero tu IRPF lleva la escala castellanomanchega y sus deducciones." },
      { p: "Crío sola a mis hijos. ¿Hay alguna deducción?", r: "Sí, Castilla-La Mancha tiene deducción para familias monoparentales, además de las de nacimiento y cuidado de hijos. Comprobamos los requisitos en tu Renta." },
      { p: "He heredado de mis padres. ¿Cuánto voy a pagar?", r: "Castilla-La Mancha bonifica entre el 100 % y el 80 % la cuota de las herencias de padres a hijos, según lo que herede cada uno. En la mayoría de herencias familiares se paga muy poco o nada." },
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
    deducciones: ["Nacimiento o adopción de hijos", "Alquiler de la vivienda habitual", "Acogimiento de menores o personas con discapacidad", "Vivienda en el medio rural o en núcleos pequeños", "Abonos de transporte público"],
    preguntas: [
      { p: "Uso el abono de transporte público. ¿Me lo puedo deducir?", r: "Aragón es de las pocas comunidades con deducción por abonos de transporte público. La aplicamos en tu Renta si cumples los requisitos." },
      { p: "Vivo en un pueblo pequeño de Teruel o Huesca. ¿Hay deducciones?", r: "Sí, Aragón tiene deducciones para la vivienda en el medio rural y en determinados núcleos de población. Comprobamos si tu municipio entra." },
      { p: "¿Se paga mucho más IRPF en Aragón?", r: "En rentas altas, sí: el tipo máximo sumado es del 50 %, frente al 45 % de Madrid. En rentas de autónomos medias, la diferencia suele ser de unos cientos de euros al año." },
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
    deducciones: ["Nacimiento de hijos", "Emancipación de jóvenes de hasta 35 años", "Gastos de vida para contribuyentes de hasta 35 años", "Hijos a cargo cuando un progenitor fallece en accidente laboral", "Fomento del autoempleo"],
    preguntas: [
      { p: "Tengo menos de 35 años y me hago autónomo en Asturias. ¿Hay deducciones?", r: "Varias: por fomento del autoempleo y, para menores de 35, por emancipación y por gastos de vida. Comprobamos cuáles te corresponden el año del alta." },
      { p: "¿Por qué se dice que Asturias tiene el IRPF alto?", r: "Porque su tipo máximo, del 26 %, es de los más altos. Pero su mínimo personal está al máximo que permite la ley, así que en rentas bajas y medias se paga menos de lo que parece." },
      { p: "He heredado de mis padres en Asturias. ¿Pago mucho?", r: "Asturias mejora la reducción estatal para herencias de padres a hijos y entre cónyuges, con coeficientes que reducen la cuota. Depende mucho del importe; lo calculamos antes de presentar." },
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
    deducciones: ["Nacimiento de hijos", "Alquiler de la vivienda habitual", "Fomento del autoempleo", "Edad o discapacidad del contribuyente o su cónyuge", "Gastos educativos y libros de texto"],
    preguntas: [
      { p: "Mi negocio solo abre en temporada. ¿Cómo lo hacemos?", r: "Ajustamos tu base de cotización a los meses de más y menos actividad, que puedes cambiar hasta seis veces al año, y planificamos los pagos a cuenta para que la Renta no te sorprenda en invierno." },
      { p: "¿Hay deducción por hacerse autónomo en Baleares?", r: "Sí, Baleares tiene una deducción autonómica por fomento del autoempleo. Comprobamos los requisitos el año de tu alta." },
      { p: "¿Pago el Impuesto sobre el Patrimonio en Baleares?", r: "Solo si tu patrimonio neto supera los 3 millones, el mínimo exento más alto de las comunidades que atendemos. Por debajo, no se paga nada." },
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
    deducciones: ["Nacimiento de hijos", "Alquiler de la vivienda habitual", "Acogimiento de menores o personas con discapacidad", "Residencia en municipios rurales o en riesgo de despoblación", "Incorporación al mercado laboral o traslado de residencia"],
    preguntas: [
      { p: "Me he mudado a Cantabria por trabajo. ¿Hay alguna deducción?", r: "Cantabria tiene una deducción de apoyo a quien se incorpora al mercado laboral o traslada su residencia. Comprobamos si te corresponde en tu primera Renta aquí." },
      { p: "Vivo en un municipio pequeño. ¿Me deduzco algo?", r: "Sí, Cantabria tiene deducción por residir en municipios rurales o en riesgo de despoblación. Verificamos si tu municipio está en la lista." },
      { p: "Si heredo de mis padres en Cantabria, ¿pago Sucesiones?", r: "Cantabria bonifica el 100 % de la cuota en las herencias entre padres, hijos y cónyuges, así que normalmente no se paga. Hay que presentar la declaración igualmente." },
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
    deducciones: ["Nacimiento de hijos", "Alquiler de la vivienda habitual", "Acogimiento de menores o personas con discapacidad", "Traslado de residencia a la comunidad", "Gastos educativos y libros de texto"],
    preguntas: [
      { p: "Me he mudado a Extremadura. ¿Hay alguna deducción?", r: "Extremadura tiene una deducción por traslado de residencia a la comunidad. La aplicamos en tu Renta si cumples los requisitos." },
      { p: "Tengo ingresos bajos. ¿Cuánto IRPF autonómico pago?", r: "Poco: desde 2026 el primer tramo extremeño es del 7,75 %, el más bajo del régimen común. Para rendimientos bajos es de las comunidades donde menos se paga." },
      { p: "Soy ganadero. ¿Me lleváis?", r: "Sí. Si estás en el régimen especial agrario del IVA, cobras una compensación del 10,5 % en ganadería en lugar de IVA. Revisamos contigo si te conviene seguir en él." },
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
    deducciones: ["Nacimiento de hijos", "Alquiler de la vivienda habitual", "Fomento del autoempleo", "Ayuda doméstica", "Residencia en municipios rurales o en riesgo de despoblación"],
    preguntas: [
      { p: "¿Hay deducción para autónomos que empiezan en La Rioja?", r: "Sí, La Rioja tiene una deducción autonómica por fomento del autoempleo. Comprobamos los requisitos el año de tu alta." },
      { p: "Tengo una persona que me ayuda en casa. ¿Me lo deduzco?", r: "La Rioja es de las pocas comunidades con deducción por ayuda doméstica. Tiene requisitos, que comprobamos contigo." },
      { p: "Gano bastante. ¿Me afecta el 27 %?", r: "Solo en la parte de tu renta que supera el último tramo. Por debajo pagas los tipos de cada tramo, y los primeros son de los más bajos de España." },
    ],
  },
];

// Comunidades con página propia ya existente, para la comparativa general.
export const otrasComunidades = [
  { nombre: "Comunitat Valenciana", corto: "Comunitat Valenciana", tramos: 11, min: 8.8, max: 29.35, itp: "9 % (11 % si pasa de 1 millón)", pagina: "/gestoria-alicante/" },
  { nombre: "Región de Murcia", corto: "Murcia", tramos: 5, min: 9.5, max: 22.5, itp: "7,75 %", pagina: "/gestoria-murcia/" },
];

export const pct = (n: number) => `${n.toLocaleString("es-ES")} %`;
