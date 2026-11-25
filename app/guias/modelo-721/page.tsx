import type { Metadata } from "next";
import Link from "next/link";
import { Articulo } from "@/components/Articulo";

export const metadata: Metadata = {
  title: "Modelo 721 de criptomonedas: guía completa para 2027",
  description:
    "Quién debe presentar el Modelo 721, el umbral de 50.000 €, qué datos pide, cómo saber si tu exchange es extranjero, el plazo hasta el 31 de marzo de 2027 y las sanciones.",
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
        { nombre: "Agencia Tributaria: qué información debe suministrarse en el modelo 721", url: "https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/declaraciones-informativas/modelo-721-decla-sobre-monedas-extranjero/preguntas-frecuentes-sobre-modelo-721/que-informacion-debe-suministrarse-modelo-721.html" },
        { nombre: "Agencia Tributaria: diseño de registro del modelo 721 (Orden HFP/886/2023)", url: "https://www3.agenciatributaria.gob.es/static_files/Sede/Procedimiento_ayuda/GI55/Anexo721.pdf" },
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

      <h2>Quién está obligado</h2>
      <p>
        Los residentes fiscales en España que, a 31 de diciembre, tengan criptomonedas custodiadas por una persona o
        entidad que guarda las claves privadas de terceros fuera de España. Igual que en el Modelo 720 de cuentas y
        valores, no solo declara el titular: también quien figure como autorizado o beneficiario, o tenga poder de
        disposición sobre esas criptomonedas.
      </p>
      <p>
        Si en una cuenta hay dos titulares, cada uno presenta su propio 721 con el saldo completo de la cuenta y su
        condición. El umbral de 50.000 € se calcula sumando todas las plataformas extranjeras en las que tengas saldo.
      </p>

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

      <h2>Cómo saber si tu exchange es extranjero</h2>
      <p>
        Lo que importa no es dónde está la web ni el idioma de la aplicación, sino qué entidad guarda tus criptomonedas:
        la empresa con la que firmas el contrato de usuario. Muchas plataformas grandes operan en Europa a través de
        sociedades en otros países, y algunas han cambiado de entidad en los últimos años.
      </p>
      <ol>
        <li>Abre los términos y condiciones de tu cuenta y busca el nombre de la sociedad que presta el servicio.</li>
        <li>Comprueba en qué país está registrada. Si es fuera de España, cuenta para el 721.</li>
        <li>Guarda una copia de esos términos a 31 de diciembre: si la entidad cambia, es tu justificante.</li>
      </ol>
      <p>
        Si tienes dudas con una plataforma concreta, pregúntanos: lo revisamos con los documentos de tu cuenta.
      </p>

      <h2>Qué datos pide</h2>
      <p>La Agencia Tributaria pide, para cada plataforma y cada criptomoneda:</p>
      <ul>
        <li>
          <strong>La entidad que custodia:</strong> su nombre o razón social, el número de identificación fiscal de su
          país si lo tiene, y su domicilio o su dirección web.
        </li>
        <li>
          <strong>La criptomoneda:</strong> cada una por separado, con el nombre y las siglas con las que aparece en los
          sitios de referencia del mercado.
        </li>
        <li>
          <strong>El saldo a 31 de diciembre:</strong> en unidades de esa criptomoneda y su valoración en euros.
        </li>
      </ul>
      <p>
        Si dejaste de tener las criptomonedas antes del 31 de diciembre, por ejemplo porque cerraste la cuenta, se
        declara el saldo de la fecha en que dejaste de tenerlas.
      </p>

      <h2>Un ejemplo</h2>
      <p>
        A 31 de diciembre de 2026 tienes 38.000 € en bitcoin en un exchange europeo y 16.000 € en ether en otro, más
        10.000 € en un monedero propio. El saldo que cuenta es 54.000 €: supera el umbral y tienes que presentar el 721
        antes del 31 de marzo de 2027. Lo del monedero propio no suma.
      </p>

      <h2>Cómo se presenta</h2>
      <ol>
        <li>Reúne el informe de saldos a 31 de diciembre de cada plataforma extranjera.</li>
        <li>Valora cada criptomoneda en euros a esa fecha y suma todas las plataformas para comprobar el umbral.</li>
        <li>
          Presenta el modelo en la sede electrónica de la Agencia Tributaria, con certificado digital o Cl@ve, entre el 1
          de enero y el 31 de marzo.
        </li>
        <li>Guarda el justificante y los informes de saldos: te servirán para comparar el año siguiente.</li>
      </ol>

      <h2>El 721 y tu declaración de la Renta</h2>
      <p>
        El 721 no tiene impuesto, pero no está aislado. Con él, Hacienda sabe cuántas criptomonedas tienes fuera, y lo
        cruza con tu Renta: si el saldo baja mucho de un año a otro y no has declarado ninguna venta ni permuta, es fácil
        que te pidan explicaciones. Desde 2026, además, los exchanges de la Unión Europea registran las operaciones de
        sus clientes para enviarlas a Hacienda, como contamos en{" "}
        <Link href="/guias/dac8-criptomonedas/">DAC8: qué sabrá Hacienda de tus criptomonedas</Link>.
      </p>
      <p>
        Por eso conviene preparar las dos cosas juntas: el 721 con los saldos y la Renta con las{" "}
        <Link href="/guias/permutas-criptomonedas-fifo/">ganancias y pérdidas calculadas con FIFO</Link>.
      </p>

      <h2>Errores frecuentes</h2>
      <ul>
        <li>Contar solo una plataforma y no sumar el resto para ver si se supera el umbral.</li>
        <li>Incluir el saldo de un monedero propio, que no hay que declarar en el 721.</li>
        <li>No presentarlo de nuevo cuando el saldo ha subido más de 20.000 € desde la última declaración.</li>
        <li>Olvidar declarar el cierre de una cuenta o la venta de todas las unidades de una criptomoneda.</li>
        <li>Valorar en dólares o con el precio de otro día en lugar del valor en euros a 31 de diciembre.</li>
      </ul>

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
