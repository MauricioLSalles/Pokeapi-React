import type { Pokemon, SimplifiedPokemon } from "../Types/Pokemon";
import ApiGet from "./ApiGet";

/**
 * The same as CacheApi, but it optimizes memory
 * @param url Url to fetch data
 * @returns If data is cached, returns cached data, else makes the fetch
 */
export async function CacheApiGetSimplifiedPokemons(
  url: string
): Promise<SimplifiedPokemon> {
  try {
    const cahceIndex: string = url;
    const cachedString = sessionStorage.getItem(cahceIndex);
    if (cachedString) {
      return JSON.parse(cachedString) as SimplifiedPokemon;
    }

    const res = (await ApiGet<Pokemon>(url)).data;
    const simplified: SimplifiedPokemon = {
      id: res.id,
      name: res.name,
      types: res.types,
      sprites: res.sprites,
    };
    sessionStorage.setItem(cahceIndex, JSON.stringify(simplified));
    return simplified;
  } catch {
    sessionStorage.clear();
    const res = (await ApiGet<Pokemon>(url)).data;
    const simplified: SimplifiedPokemon = {
      id: res.id,
      name: res.name,
      types: res.types,
      sprites: res.sprites,
    };
    return simplified;
  }
}

export default CacheApiGetSimplifiedPokemons;
