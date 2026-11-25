import { site } from "@/lib/site";

type Tema = "autonomo" | "sociedad" | "cripto" | "paro" | "licitacion" | "otro";

// Envío con JavaScript mínimo: sin React en el navegador.
const script = `(function(){
  document.addEventListener("submit",function(e){
    var f=e.target; if(!f||!f.matches||!f.matches("form[data-formspree]")) return;
    e.preventDefault();
    var boton=f.querySelector("button[type=submit]"), error=f.querySelector(".estado-error");
    if(f.elements._gotcha&&f.elements._gotcha.value) return;
    boton.disabled=true; boton.textContent="Enviando…"; if(error) error.hidden=true;
    fetch(f.action,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}})
      .then(function(r){ if(!r.ok) throw new Error();
        var ok=document.createElement("div"); ok.className="enviado"; ok.setAttribute("role","status");
        ok.innerHTML="<h3>Mensaje enviado</h3><p>Te contestamos en un plazo de 24 horas laborables, por correo o por teléfono si nos lo has dejado.</p>";
        f.replaceWith(ok); })
      .catch(function(){ boton.disabled=false; boton.textContent="Enviar mensaje"; if(error) error.hidden=false; });
  });
})();`;

export function FormularioContacto({ temaInicial = "autonomo" }: { temaInicial?: Tema }) {
  return (
    <>
      <form
        className="formulario"
        action={`https://formspree.io/f/${site.formspreeId}`}
        method="POST"
        data-formspree=""
      >
        <div className="fila-campos">
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" autoComplete="name" required />
          </div>
          <div className="campo">
            <label htmlFor="telefono">
              Teléfono <span className="ayuda">(opcional)</span>
            </label>
            <input id="telefono" name="telefono" type="tel" autoComplete="tel" />
          </div>
        </div>

        <div className="campo">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>

        <div className="campo">
          <label htmlFor="tema">Qué necesitas</label>
          <select id="tema" name="tema" defaultValue={temaInicial}>
            <option value="autonomo">Gestoría de autónomo</option>
            <option value="sociedad">Gestoría de sociedad</option>
            <option value="cripto">Declarar criptomonedas</option>
            <option value="paro">Capitalizar el paro</option>
            <option value="licitacion">Presentarme a una licitación</option>
            <option value="otro">Otra consulta</option>
          </select>
        </div>

        <div className="campo">
          <label htmlFor="mensaje">Cuéntanos tu caso</label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            placeholder="A qué te dedicas, si ya tienes gestoría y qué te preocupa."
          />
        </div>

        <div className="trampa" aria-hidden="true">
          <label htmlFor="_gotcha">No rellenes este campo</label>
          <input id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </div>
        <input type="hidden" name="_subject" value="Nueva consulta desde fiscalyx.com" />

        <label className="consentimiento">
          <input type="checkbox" name="acepto_privacidad" value="sí" required />
          <span>
            He leído la <a href="/privacidad/">política de privacidad</a> y acepto que Fiscalyx use estos datos para
            contestar a mi consulta.
          </span>
        </label>

        <p className="estado estado-error" role="alert" hidden>
          No se ha podido enviar el mensaje. Revisa tu conexión y vuelve a intentarlo, o escríbenos a{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>

        <div>
          <button className="boton boton-principal" type="submit">
            Enviar mensaje
          </button>
        </div>
      </form>
      <script id="formulario" dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
