// Una sola fuente para la agenda del próximo plazo: el mismo código JavaScript
// genera el HTML al compilar la web y lo actualiza en el navegador de cada visitante.

export const PLAZO_JS = String.raw`function fiscalyxAgenda(hoy){
  var meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  var dias=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  function habil(d){var r=new Date(d.getTime());if(r.getDay()===6)r.setDate(r.getDate()+2);if(r.getDay()===0)r.setDate(r.getDate()+1);return r}
  var tri=[["303","IVA del trimestre"],["130","Pago a cuenta del IRPF (autónomos)"],["111 y 115","Retenciones, si tienes trabajadores o alquilas un local"]];
  function p(a,m,d,t,mods){var n=new Date(a,m,d);return{ini:new Date(a,m,1),fin:habil(n),nom:n,t:t,mods:mods}}
  function del(a){return[
    p(a,0,30,"cuarto trimestre de "+(a-1),[["303","IVA del trimestre"],["130","Pago a cuenta del IRPF (autónomos)"],["390","Resumen anual del IVA"],["111 y 115","Retenciones, con plazo hasta el día 20"]]),
    p(a,3,20,"primer trimestre de "+a,tri),p(a,6,20,"segundo trimestre de "+a,tri),p(a,9,20,"tercer trimestre de "+a,tri)]}
  var dia=new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate());
  var todos=del(dia.getFullYear()).concat(del(dia.getFullYear()+1)),q=null;
  for(var i=0;i<todos.length;i++){if(todos[i].fin>=dia){q=todos[i];break}}
  var an=q.ini.getFullYear(),me=q.ini.getMonth(),nd=new Date(an,me+1,0).getDate(),hu=(new Date(an,me,1).getDay()+6)%7;
  var ult=q.fin.getMonth()===me?q.fin.getDate():nd,desp=q.fin.getTime()!==q.nom.getTime();
  var c=[],k;for(k=0;k<hu;k++)c.push(0);for(k=1;k<=nd;k++)c.push(k);while(c.length%7)c.push(0);
  var h='<p class="agenda-etiqueta">'+(q.ini<=dia?"Plazo abierto ahora":"Tu próximo plazo")+'</p>';
  h+='<p class="agenda-mes">'+meses[me].charAt(0).toUpperCase()+meses[me].slice(1)+' de '+an+'</p>';
  h+='<p class="agenda-sub">Cierre del '+q.t+'</p><div class="agenda-rejilla" aria-hidden="true">';
  "LMXJVSD".split("").forEach(function(d){h+='<span class="agenda-dia-semana">'+d+'</span>'});
  c.forEach(function(d,i){var m=d>0&&d<=ult,cl="agenda-dia";if(m)cl+=" marcado";if(m&&(i%7===0||d===1))cl+=" inicio";if(m&&(i%7===6||d===ult))cl+=" fin";if(d===ult&&!desp)cl+=" limite";
    h+='<span class="'+cl+'"'+(m?' style="animation-delay:'+Math.floor(i/7)*90+'ms"':'')+'>'+(d||"")+'</span>'});
  h+='</div><p class="agenda-limite">Último día: <strong>'+dias[q.fin.getDay()]+' '+q.fin.getDate()+' de '+meses[q.fin.getMonth()]+'</strong></p>';
  if(desp)h+='<p class="agenda-aviso">El '+q.nom.getDate()+' cae en '+dias[q.nom.getDay()]+', así que el plazo pasa al siguiente día hábil.</p>';
  h+='<ul class="agenda-modelos">';q.mods.forEach(function(m){h+='<li><span class="modelo">Modelo '+m[0]+'</span><span>'+m[1]+'</span></li>'});
  h+='</ul><p class="agenda-nota">Lo preparamos y presentamos nosotros. Antes, tu asesor te llama para repasar las cifras.</p>';
  return{clave:q.fin.getFullYear()+"-"+(q.fin.getMonth()+1)+"-"+q.fin.getDate(),html:h,etiqueta:"Próximo plazo: hasta el "+q.fin.getDate()+" de "+meses[q.fin.getMonth()]+" de "+q.fin.getFullYear()}
}`;

type Agenda = { clave: string; html: string; etiqueta: string };

export const agendaEnServidor: (hoy: Date) => Agenda = new Function(`${PLAZO_JS}; return fiscalyxAgenda;`)();

export const PLAZO_CLIENTE = `${PLAZO_JS}
(function(){var el=document.getElementById("agenda-plazo");if(!el)return;var a=fiscalyxAgenda(new Date());
if(el.getAttribute("data-clave")!==a.clave){el.innerHTML=a.html;el.setAttribute("data-clave",a.clave);el.setAttribute("aria-label",a.etiqueta)}})();`;
