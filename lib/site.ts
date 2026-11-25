// Datos de contacto y precios en un solo sitio, para cambiarlos sin tocar el diseño.

export const site = {
  name: "Fiscalyx",
  url: "https://www.fiscalyx.com",
  owner: "Francisco Seva Soriano",
  ownerShort: "Francisco Seva",
  nif: "48559762T",
  colegiado: "4174",
  colegio: "Colegio de Economistas de Alicante",
  address: "Centro ULab, Plaza San Cristóbal 14, 03002 Alicante",
  city: "Alicante",
  email: "info@fiscalyx.com",
  phoneDisplay: "637 46 08 35",
  phoneIntl: "34637460835",
  horario: "Lunes a viernes, de 8:30 a 17:30",
  calendly: "https://calendly.com/francisco-alsase/30min",
  formspreeId: "xkgljdvq",
};

export const whatsappLink = (text = "Hola, vengo de la web de Fiscalyx.") =>
  `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(text)}`;

export const prices = {
  autonomoMes: 49,
  sociedadMes: 129,
  nominaMes: 15,
  cripto: [
    {
      name: "Renta con criptomonedas",
      detail:
        "Informe de trazabilidad, cálculo de ganancias y pérdidas, presentación de la Renta y archivo para justificarlo.",
      tiers: [
        { label: "Hasta 200 operaciones", price: "249 €" },
        { label: "Hasta 2.000 operaciones", price: "549 €" },
        { label: "Más volumen, DeFi o NFT", price: "desde 950 €" },
      ],
    },
    {
      name: "Modelo 721",
      detail: "Declaración de criptomonedas custodiadas en el extranjero por más de 50.000 €.",
      tiers: [{ label: "Por ejercicio", price: "desde 150 €" }],
    },
    {
      name: "Regularización o requerimiento",
      detail:
        "Revisión de años anteriores, declaraciones complementarias y respuesta a cartas de Hacienda.",
      tiers: [{ label: "Diagnóstico, descontable si sigues", price: "60 €" }],
    },
  ],
};
