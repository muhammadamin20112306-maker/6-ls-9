import { pokemons } from "./pokemons.js";

const input = document.getElementById("input");
const btnAz = document.getElementById("btnAz");
const btnZa = document.getElementById("btnZa");
const wrapper = document.getElementById("wrapper");

function renderList(item) {
  wrapper.innerHTML = "";
  item.forEach((pokemon) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <div class="bg-yellow-300 text-black shadow-md rounded-xl p-4 flex flex-col items-center w-60 ">
        <div class="bg-red-700  text-white px-2 py-1 rounded-tr-xl self-start">
          <span>${pokemon.num}</span>
        </div>
        <h2 class="text-xl font-semibold my-2">${pokemon.name}</h2>
        <img src="${pokemon.img}" alt="${pokemon.name}" class="w-32 h-32 object-contain"/>
        <p class="bg-blue-500 text-white px-3 py-1 rounded-lg my-2">${pokemon.type}</p>
        <p class="text-sm">${pokemon.candy ?? ""} ${pokemon.candy_count ?? ""}</p>
        <button class="bg-gray-200 px-3 py-1 rounded mt-2">${pokemon.weight}</button>
      </div>
    `;
    wrapper.appendChild(div);
  });
}
renderList(pokemons);

input.addEventListener("input", () => {
  const qwery = input.value.toLowerCase();
  const filtered = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(qwery)
  );
  renderList(filtered);
});

btnAz.addEventListener("click", () => {
  const sorted = [...pokemons].sort((a, b) => a.name.localeCompare(b.name));
  renderList(sorted);
});

btnZa.addEventListener("click", () => {
  const sorted = [...pokemons].sort((a, b) => b.name.localeCompare(a.name));
  renderList(sorted);
});
