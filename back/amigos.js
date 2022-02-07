//-----------------------------------------------------------------------------
let amigos = document.getElementById("amigos");
//-----------------------------------------------------------------------------
async function traerAmigoss() {
  const url = "https://randomuser.me/api/";
  const response = await fetch(url);
  const parsedResponse = await response.json();
  return parsedResponse;
}
//-----------------------------------------------------------------------------
async function addFriend(a) {
  const { title, id } = a;
  let amigo = JSON.parse(await localStorage.getItem("friend")) || [];
  let pos = amigo.findIndex((art) => art.id === id);
  let msg = "ammistad agregada";
  console.log(id, amigo, pos);
  if (pos !== -1) {
    const { cantidad } = amigo[pos];
    amigo.splice(pos, 1, {
      ...amigo[pos],
      cantidad: cantidad + 1,
    });
    msg = "amistades actualizadas";
  } else {
    amigo.push({
      title,
      id,
      cantidad: 1,
    });
  }
  alert(`${title} ${msg} correctamente.`);
  localStorage.setItem("friend", JSON.stringify(amigo));
  retornarAmistad(id);
}
//-----------------------------------------------------------------------------
async function deleteFriend(a) {
  const { title, id } = a;
  let amigo = JSON.parse(await localStorage.getItem("friend")) || [];
  let pos = amigo.findIndex((art) => art.id === id);
  let msg = "amistad eliminada";
  const { cantidad } = amigo[pos];
  if (cantidad - 1 > 0) {
    amigo.splice(pos, 1, {
      ...amigo[pos],
      cantidad: cantidad - 1,
    });
    msg = "amistad actualizada";
  } else if (cantidad - 1 === 0) {
    carrito.splice(pos, 1);
  }
  alert(`${title} ${msg} correctamente.`);
  localStorage.setItem("friend", JSON.stringify(amigo));
  retornarAmistad(id);
}
//-----------------------------------------------------------------------------
const retornarAmistad = (id) => {
  let amigo = JSON.parse(localStorage.getItem("friend")) || [];
  let pos = amigo.findIndex((art) => art.id === id);
  let valor = 0;
  if (pos > -1) {
    const { cantidad } = amigo[pos];
    valor = cantidad;
  }
  document.getElementById("cantidad-" + id).innerHTML = valor;
};

const cantidad = (id) => {
  let carrito = JSON.parse(localStorage.getItem("friend")) || [];
  let pos = carrito.findIndex((art) => art.id === id);
  let valor = 0;
  if (pos > -1) {
    const { cantidad } = amigo[pos];
    valor = cantidad;
  }
  return valor;
};
//-----------------------------------------------------------------------------
async function mostrarAmigos() {
  const amigos = await traerAmigos();
  const { results } = amigos;
  results.map((doc) => {
    const { thumbnail, title, price, id } = doc;
    var contenedor = document.createElement("div");
    contenedor.setAttribute("class", "producto_individual");
    let amistad = `
        <div class="card" style="width: 18rem; margin-top: 20px;">
            <img src="${thumbnail}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">$${price}</p>
                <button class="btn btn-primary" onclick='addFriend(${JSON.stringify(
                  doc
                )})'><i class="fas fa-plus"></i>
                </button>
                <p class="card-text" id="cantidad-${id}">${cantidad(id)}</p>
                <button class="btn btn-secondary" style="wid" onclick='deleteCar(${JSON.stringify(
                  doc
                )})'><i class="fas fa-minus"></i></button>
            </div>
        </div>`;
    contenedor.innerHTML += amistad;
    amistades.appendChild(contenedor);
  });
}
//-----------------------------------------------------------------------------
mostrarAmigos();