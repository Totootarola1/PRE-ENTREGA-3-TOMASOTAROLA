
// arrays con informacion
const europa = [
   {
      foto:"./fotos/madrid-2.jpg",
      pais: "España",
      ciudad: "Madrid",
      precio: 1000000,
      info: "Puerta del Sol , Pedir un delicioso chocolate caliente con porras en la histórica Chocolatería San Ginés o una napolitana casera en La Mallorquina, para después acercarte a la Puerta del Sol, es una de las mejores cosas que hacer en Madrid."
   },
   {
      foto:"./fotos/milan-1.jpg",
      pais: "Italia",
      ciudad: "Milan",
      precio: 2400000,
      info: "LA ÚLTIMA CENA DE LEONARDO DAVINCI Cuando te encuentres en el centro histórico de Milán no puedes dejar de conocer una de las joyas de esta ciudad, una de las piezas artísticas más enigmáticas que se conocen hasta el momento, “La Última Cena” de Leonardo Da Vinci. La misma se ha vuelto extremadamente popular gracias a los libros de Dan Brown."
   },
   {
      foto:"./fotos/paris-1.jpg",
      pais: "Francia",
      ciudad: "Paris",
      precio: 4000000,
      info: "La Torre Eiffel Con sus 300 metros de altura sigue siendo la más alta de toda la ciudad. Fue parte de la exposición universal temporal en 1889 pero a pesar de las críticas de muchos artistas de la época, sus visionarios defensores lograron dejarla permanente. Hoy es el monumento que cobra entrada más visitado del mundo, con más de 7.1 millones de turistas cada año. Tiene 3 pisos donde se puede comer en renombrados restaurantes, mientras se disfruta de una vista panorámica de París. Y si la torre es una imagen impactante en el día."
   }
]
const america = [
   {
      foto:"./fotos/mendoza-1.jpg",
      pais: "Argentina",
      ciudad: "Mendoza",
      precio: 4000000,
      info: "Puente del Inca El Puente del Inca se encuentra al noroeste de la provincia de Mendoza y es una formación rocosa que forma un puente natural sobre el río Las Cuevas.Se ubica a unos 183 kilómetros de la Ciudad de Mendoza por la Ruta No. 7, cerca del paso a Chile, y de la entrada principal del Parque Provincial Aconcagua. Posee una forma curiosa y una gran variedad de colores entre los tonos del naranja, amarillo y ocre."
   },
   {
      foto:"./fotos/medellin-1.jpg",
      pais: "Colombia",
      ciudad: "Medellin",
      precio: 3500000,
      info: "omuna 13 La Comuna 13, un barrio de pasado trágico y violento donde murieron cientos de personas por la acción de las guerrillas, los grupos paramilitares, la guerra sucia del gobierno y las bandas de narcotráfico como el Cartel de Medellín de Pablo Escobar, ha sabido superar todas estas adversidades gracias al trabajo de su gente y transformarlo en el lugar más imprescindible que visitar en Medellín."
   },
   {
      foto:"./fotos/rio-1.jpg",
      pais: "Brasil",
      ciudad: "Rio",
      precio: 5000000,
      info: "Copacabana Custodiada por el Cerro Pan de Azúcar, la Playa de Copacabana, además de ser la de mayor acogida, es el escenario de varios eventos de la ciudad como la Fiesta de Año Nuevo con los famosos Fuegos Artificiales."
   }
]
const caribe = [
   {
      foto:"./fotos/sdom-1.jpg",
      pais: "Republica Dominicana",
      ciudad: "Santo Domingo",
      precio: 1200000,
      info: " La Catedral Primada de América . La primera catedral del continente americano es uno de los lugares turísticos de Santo Domingo más visitados. Bajo el nombre oficial de Santa Iglesia Catedral Basílica Metropolitana de Nuestra Señora Santa María de la Encarnación o Anunciación (sí, así se llama), esta edificación de estilo gótico fue construida entre 1510 y 1540. Al recorrer su interior y apreciar la gran cantidad de piezas antiguas, pinturas de la época colonial y el ambiente, nos sentiremos transportados al pasado. Además, la catedral se comunica con la Plaza España y la visita puede ser doblemente aprovechada para crear memorias que nunca te abandonarán. El lugar más icónico de la Zona Colonial te espera."
   },
   {
      foto:"./fotos/haba-1.jpg",
      pais: "Cuba",
      ciudad: "La habana",
      precio: 700000,
      info: "El Capitolio a imagen y semejanza , el Capitolio de La Habana data de 1929 y se inspiró en el de Washington en la época en que Cuba era una república aliada de EE.UU. y proveedora del azúcar que era procesado en fábricas en lo que hoy es la zona hípster de Brooklyn. Su función legislativa cesó en 1959 con la Revolución Cubana, y es hoy sede del Ministerio de Ciencia y Tecnología. "

   },
   {
      foto:"./fotos/ism-1.jpg",
      pais: "Mexico",
      ciudad: "Islas Mujeres",
      precio: 6300000,
      info: "Playa Norte, Entre las 10 playas más bellas del mundo, Playa Norte es la playa icónica de la Isla, la que aparece en el imaginario colectivo al pensar en Isla Mujeres. Su blanquísima arena, su amplitud, su ambiente, la rica comida que ahí se puede degustar, las aguas tranquilas y cálidas y de poca profundidad y la sombra de las palmeras son los imanes que atraen a miles de turistas a sus costas, las primeras que los exploradores españoles vislumbraron de México en su expedición de 1519. La isla es el primer punto de todo el país a donde llegan los rayos del sol y de los pocos lugares del Caribe mexicano desde donde se puede despedir al sol que se oculta en el agua al atardecer; ¡Playa Norte es imperdible! "
   }
]
// funcion para alerta
function buy() {
   Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Su compra ha sido realizada con exito',
      showConfirmButton: false,
      timer: 2500
   })
}
//se guarda en el servidor cada accion
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// se llama todos los botones
let contenedorInfo = document.querySelector("#contenedor-info")
let botonEuropa = document.querySelector("#europa")
let botonAmerica = document.querySelector("#america")
let botonCaribe = document.querySelector("#caribe")
let botonBorrar = document.querySelector("#ocultar")
//mediante jquery se hace la sintaxis de llamado de envento
$("#europa").click(mostrarEuropa);
$("#america").click(mostrarAmerica)
$("#caribe").click(mostrarCaribe)

// funciones correspondientes a cada boton
function mostrarEuropa() {
   comprar = document.querySelector("#comprar")
   contenedorInfo.innerHTML = "";
   europa.forEach(mostrar => {
      show = document.createElement(`div`);
      show.innerHTML = ` <p><img class="foto" src="${mostrar.foto}" alt=""></p>
                <p> Pais : ${mostrar.pais} </p>
                <p> Ciudad : ${mostrar.ciudad}  </p>
                <p>  Precio en ARS : $ ${mostrar.precio} </p> 
                <p>  Turismo :  ${mostrar.info} </p>
                <button id="comprar" ${$("#comprar").click(buy)}>Comprar</button>`
      contenedorInfo.appendChild(show);
      $("#texto").toggle()
      europa.forEach(save => { guardarLocal(save.europa, JSON.stringify(europa)) })
      
   })
   $('#contenedor-info').toggle()

}
function mostrarAmerica() {
   contenedorInfo.innerHTML = "";
   america.forEach(mostrar => {
      show = document.createElement(`div`);
      show.innerHTML = ` 
                <p><img class="foto" src="${mostrar.foto}" alt=""></p>
                <p> Pais : ${mostrar.pais} </p>
                <p> Ciudad : ${mostrar.ciudad}  </p>
                <p>  Precio en ARS : $ ${mostrar.precio} </p> 
                <p>  Turismo :  ${mostrar.info} </p>
                <button id="comprar">Comprar</button>`
      contenedorInfo.appendChild(show);
      comprar = $("#comprar").click(buy)
      $("#texto").toggle()
      america.forEach(save => { guardarLocal(save.america, JSON.stringify(america)) })

   })
   $('#contenedor-info').toggle()
}
function mostrarCaribe() {
   contenedorInfo.innerHTML = "";
   caribe.forEach(mostrar => {
      show = document.createElement(`div`);
      show.innerHTML = `
                <p><img class="foto" src="${mostrar.foto}" alt=""></p>
                <p> Pais : ${mostrar.pais} </p>
                <p> Ciudad : ${mostrar.ciudad}  </p>
                <p>  Precio en ARS : $ ${mostrar.precio} </p> 
                <p>  Turismo :  ${mostrar.info} </p>
                <button id="comprar">Comprar</button>`
      contenedorInfo.appendChild(show);
      comprar = $("#comprar").click(buy)
      $("#texto").toggle()
      caribe.forEach(save => { guardarLocal(save.caribe, JSON.stringify(caribe)) })

   })
   $('#contenedor-info').toggle()
}



