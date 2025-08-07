let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indiceAleatorio];

  const li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${nombreSorteado}`;
  resultado.appendChild(li);
}
