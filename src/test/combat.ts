import {Pokemon} from "../main/Pokemon";
import {resolveFirstFighter} from "../main/combat"

let pokemonA = new Pokemon("Theo", 1000);
let pokemonB = new Pokemon("Claudia", 50);

describe("Test combat.ts", () => {

    test("should return faster", () => {
        const starter = resolveFirstFighter(pokemonA, pokemonB, 0);

        expect(starter).toEqual(pokemonA);
    })
});