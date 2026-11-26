import fs from "fs";
import { geoConicConformal, geoPath, geoCentroid } from "d3-geo";
import { feature } from "topojson-client";
import { presimplify, simplify, quantile } from "topojson-simplify";
const topo = JSON.parse(fs.readFileSync("node_modules/es-atlas/es/autonomous_regions.json"));
let t2 = presimplify(topo); t2 = simplify(t2, quantile(t2, 0.25));
const fc = feature(t2, t2.objects.autonomous_regions);
const keep = fc.features.filter(f => !["05","18","19","20"].includes(f.id));
const slug = {"01":"andalucia","02":"aragon","03":"asturias","04":"baleares","06":"cantabria","07":"castilla-y-leon","08":"castilla-la-mancha","09":"cataluna","10":"valenciana","11":"extremadura","12":"galicia","13":"madrid","14":"murcia","15":"navarra","16":"pais-vasco","17":"la-rioja"};
const W=760,H=560;
const proj = geoConicConformal().rotate([3.5,0]).parallels([37,43]);
proj.fitExtent([[8,8],[W-8,H-8]], {type:"FeatureCollection",features:keep});
const path = geoPath(proj).digits(0);
const out = keep.map(f => {
  const c = proj(geoCentroid(f));
  return { id: slug[f.id], d: path(f), x: Math.round(c[0]), y: Math.round(c[1]) };
});
fs.writeFileSync("mapa.json", JSON.stringify({W,H,regiones:out}));
console.log(out.map(o=>o.id+" "+o.d.length+" "+o.x+","+o.y).join("\n"));
