import type { FavoritePokemon } from "@/types/pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

function getLocalStorage(): FavoritePokemon[] {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export default function FavoritePokemons() {
  const [pokemons, setPokemons] = createSignal(getLocalStorage());

  return (
    <div class="grid grid-cols-2 gap-10">
      <For each={pokemons()}>
        {(pokemon) => <FavoritePokemonCard pokemon={pokemon} />}
      </For>
    </div>
  );
}
