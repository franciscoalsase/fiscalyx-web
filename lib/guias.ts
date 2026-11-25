export type Guia = {
  slug: string;
  titulo: string;
  resumen: string;
  tema: "Autónomos" | "Criptomonedas";
  fecha: string; // revisión
};

export const guias: Guia[] = [
  {
    slug: "gastos-deducibles-autonomos",
    titulo: "Gastos deducibles de autónomos en 2026",
    resumen: "Qué gastos entran en el IRPF y en el IVA, con sus límites: suministros de casa, comidas, vehículo, seguro médico y el 5 % sin factura.",
    tema: "Autónomos",
    fecha: "noviembre de 2026",
  },
  {
    slug: "autonomo-o-sociedad",
    titulo: "¿Autónomo o sociedad limitada? Cuándo compensa",
    resumen: "Los tipos del Impuesto sobre Sociedades de 2026 frente al IRPF, y lo que de verdad decide si te conviene una SL.",
    tema: "Autónomos",
    fecha: "noviembre de 2026",
  },
  {
    slug: "permutas-criptomonedas-fifo",
    titulo: "Permutas de criptomonedas y método FIFO",
    resumen: "Por qué cambiar una cripto por otra tributa aunque no pases a euros, y cómo se calcula la ganancia, con un ejemplo.",
    tema: "Criptomonedas",
    fecha: "noviembre de 2026",
  },
  {
    slug: "compensar-perdidas-criptomonedas",
    titulo: "Pérdidas con criptomonedas: cómo compensarlas",
    resumen: "Cómo restar tus pérdidas de las ganancias de este año y de los cuatro siguientes, y por qué diciembre es el momento de revisarlo.",
    tema: "Criptomonedas",
    fecha: "noviembre de 2026",
  },
  {
    slug: "calendario-fiscal-autonomos-2027",
    titulo: "Calendario fiscal del autónomo en 2027",
    resumen: "Todos los plazos del año para un autónomo en estimación directa, mes a mes, y qué pasa cuando el último día cae en fin de semana.",
    tema: "Autónomos",
    fecha: "noviembre de 2026",
  },
  {
    slug: "dac8-criptomonedas",
    titulo: "DAC8: qué sabrá Hacienda de tus criptomonedas y desde cuándo",
    resumen: "Qué datos van a enviar los exchanges, a partir de qué fecha, y qué conviene revisar antes de presentar la Renta de 2026.",
    tema: "Criptomonedas",
    fecha: "noviembre de 2026",
  },
  {
    slug: "modelo-721",
    titulo: "Modelo 721: quién tiene que presentarlo y cuándo",
    resumen: "El umbral de 50.000 €, el plazo de enero a marzo, cuándo hay que repetirlo y qué sanciones tiene no presentarlo.",
    tema: "Criptomonedas",
    fecha: "noviembre de 2026",
  },
  {
    slug: "cuota-autonomos-2027",
    titulo: "Cuota de autónomos en 2027: tramos y cómo se calcula",
    resumen: "Los 15 tramos por rendimientos, la tarifa plana, la cuota del autónomo societario y cómo funciona la regularización anual.",
    tema: "Autónomos",
    fecha: "noviembre de 2026",
  },
  {
    slug: "factura-electronica-verifactu",
    titulo: "VeriFactu y factura electrónica: qué cambia y cuándo te toca",
    resumen: "Las dos obligaciones que cambian tu forma de facturar, con sus fechas para sociedades y autónomos en 2027 y 2028.",
    tema: "Autónomos",
    fecha: "noviembre de 2026",
  },
  {
    slug: "staking-defi-impuestos",
    titulo: "Staking y DeFi: cómo tributan las recompensas",
    resumen: "Por qué las recompensas tributan al recibirlas, cómo se valoran y qué ha dicho Hacienda de los préstamos y los pools de liquidez.",
    tema: "Criptomonedas",
    fecha: "noviembre de 2026",
  },
  {
    slug: "retirar-dinero-binance-hacienda",
    titulo: "Retirar dinero de Binance al banco: qué ve Hacienda",
    resumen: "La transferencia no tributa, la venta sí. Qué te puede pedir el banco y cómo regularizar años sin declarar.",
    tema: "Criptomonedas",
    fecha: "noviembre de 2026",
  },
];
