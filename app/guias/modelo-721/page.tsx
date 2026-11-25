import type { Metadata } from "next";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Modelo 721: quién tiene que presentarlo y cuándo",
  description:
    "Quién debe presentar el Modelo 721, el umbral de 50.000 €, el plazo de enero a marzo y las sanciones por no presentarlo.",
  alternates: { canonical: "/guias/modelo-721/" },
};

export default function Modelo721() {
  return (
    <Articulo
      titulo="Modelo 721: quién tiene que presentarlo y cuándo"
      entradilla="El Modelo 721 es una declaración informativa: no se paga nada, pero hay que presentarla si a 31 de diciembre tienes más de 50.000 € en criptomonedas custodiadas por plataformas en el extranjero."
      tema="Criptomonedas"
      fecha="noviembre de 2026"
      cta={{
        titulo: "¿No sabes si te toca?",
        texto: "Revisamos tus saldos a 31 de diciembre, te decimos si estás obligado y, si lo estás, lo presentamos junto con tu Renta.",
        href: "/criptomonedas/#contacto",
        boton: "Pedir presupuesto",
      }}
      fuentes={[
        { nombre: "Agencia Tributaria: plazo de presentación del modelo 721", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-721-decla-sobre-monedas-extranjero/preguntas-frecuentes-sobre-modelo-721/plazo-presentacion-modelo-721.html" },
        { nombre: "INEAF: umbral, plazo y sanciones del modelo 721", url: "https://www.ineaf.es/tribuna/modelo-721/" },
        { nombre: "OCU: plazo de los modelos 720 y 721", url: "https://www.ocu.org/inversiones/fiscalidad-y-derechos/impuestos/articulos/2026/03/criptomonedas-en-el-extranjero-hasta-el-31-de-marzo-para-presentar-el-modelo-721" },
      ]}
    >
      <h2>Lo esencial</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <tbody>
            <tr>
              <th scope="row">Quién</th>
              <td>Residentes fiscales en España con criptomonedas custodiadas por plataformas en el extranjero.</td>
            </tr>
            <tr>
              <th scope="row">Umbral</th>
              <td>Saldo conjunto de más de 50.000 € a 31 de diciembre, valorado en euros.</td>
            </tr>
            <tr>
              <th scope="row">Plazo</th>
              <td>Del 1 de enero al 31 de marzo del año siguiente. Los saldos de 2026 se declaran hasta el 31 de marzo de 2027.</td>
            </tr>
            <tr>
              <th scope="row">Años siguientes</th>
              <td>Solo si el saldo conjunto sube más de 20.000 € respecto a la última declaración, o si dejas de tener alguna de las criptomonedas declaradas.</td>
            </tr>
            <tr>
              <th scope="row">Coste</th>
              <td>Ninguno. Es informativa: no se paga impuesto por presentarla.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Qué cuenta y qué no</h2>
      <p>
        Cuentan las criptomonedas que guarda por ti una plataforma con sede fuera de España: un exchange o un custodio
        extranjero. No entran las que guardas en tu propio monedero, sea físico o de software, cuando solo tú tienes
        las claves.
      </p>
      <p>
        Las que tienes en plataformas españolas tampoco van en el 721: esas plataformas ya informan a Hacienda por su
        cuenta.
      </p>

      <h2>Un ejemplo</h2>
      <p>
        A 31 de diciembre de 2026 tienes 38.000 € en bitcoin en un exchange europeo y 16.000 € en ether en otro, más
        10.000 € en un monedero propio. El saldo que cuenta es 54.000 €: supera el umbral y tienes que presentar el 721
        antes del 31 de marzo de 2027. Lo del monedero propio no suma.
      </p>

      <h2>Sanciones</h2>
      <div className="tabla-scroll">
        <table className="tabla tabla-guia">
          <thead>
            <tr>
              <th scope="col">Situación</th>
              <th scope="col">Por cada dato</th>
              <th scope="col">Mínimo</th>
              <th scope="col">Máximo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">No presentarlo, o presentarlo tras un requerimiento</th>
              <td>20 €</td>
              <td>300 €</td>
              <td>20.000 €</td>
            </tr>
            <tr>
              <th scope="row">Presentarlo tarde, sin requerimiento</th>
              <td>10 €</td>
              <td>150 €</td>
              <td>10.000 €</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="nota-tabla">
        Si te has pasado del plazo, presentarlo cuanto antes y por tu cuenta reduce la sanción a la mitad.
      </p>
    </Articulo>
  );
}
