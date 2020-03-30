import {Pokemon} from "./Pokemon";

export function resolveFirstFighter(pokemonA: Pokemon, pokemonB: Pokemon, randomLuck: number): Pokemon {

    const speedBonusA = (pokemonA.luck > randomLuck) ? pokemonB.luck / 10 : 0;
    const speedBonusB = (pokemonB.luck > randomLuck) ? pokemonA.luck / 10 : 0;

    if(speedBonusA + pokemonA.speed > speedBonusB + pokemonB.speed) {
        return pokemonA;
    }
    else if(speedBonusA + pokemonA.speed < speedBonusB + pokemonB.speed) {
        return pokemonB;
    }
    else {
        if(randomLuck < 5) return pokemonA;
        else return pokemonB;
    }
}