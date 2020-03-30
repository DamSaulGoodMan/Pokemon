import {Pokemon} from "./Pokemon";
import {Attack} from "./Attack";
import {Type} from "./Type";
import {getRandomInt} from "./commun/random";

export function resolveFirstFighter(pokemonA: Pokemon, pokemonB: Pokemon): Pokemon {

    if(pokemonA.speed >= pokemonB.speed) {
        return pokemonA;
    }
    else {
        return pokemonB;
    }
}

function getDamageWithType(pokemonTargetedTypes: Array<Type>, attack: Attack): number {
    return attack.damage;
}

export function selectRandomAttack(attacks: Array<Attack>): Attack {
    return attacks[getRandomInt(attacks.length - 1)];
}

export function attackPokemon(attack: Attack, pokemonTargeted: Pokemon) {
    if(attack.damage >= pokemonTargeted.pv)
        pokemonTargeted.pv = 0;
    else
        pokemonTargeted.pv -= attack.damage;
}

export function runFight(pokemonA: Pokemon, pokemonB: Pokemon): Pokemon {

    let numAttack = 0;
    let listPokemon = [pokemonA, pokemonB];

    while(pokemonA.pv != 0 && pokemonB.pv != 0) {
        if(numAttack % 2 == 0) {
            if(resolveFirstFighter(pokemonA, pokemonB) == pokemonB) {
                listPokemon[0] = pokemonB;
                listPokemon[1] = pokemonA;
            } else {
                listPokemon[0] = pokemonA;
                listPokemon[1] = pokemonB;
            }
        }

        attackPokemon(selectRandomAttack(listPokemon[numAttack % 2].attacks), listPokemon[(numAttack + 1) % 2]);

        numAttack++;
    }

    if(pokemonA.pv == 0)
        return pokemonB;
    else
        return pokemonA;
}