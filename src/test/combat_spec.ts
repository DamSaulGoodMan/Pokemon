import {Pokemon} from "../main/Pokemon";
import {attackPokemon, resolveFirstFighter, runFight, selectRandomAttack} from "../main/combat"
import {Attack} from "../main/Attack";
import {Type} from "../main/Type";

const pokemonA = new Pokemon("Theo", 1000, 200,
    [Type.Fairy, Type.Fighting],
    [new Attack("clamernoir", 10, Type.Dark)]
);
const pokemonB = new Pokemon("Claudia", 50, 300,
    [Type.Dragon],
    [new Attack("Nexter", 50, Type.Ghost), new Attack("Kiss Théo", 50, Type.Electric)]
);

describe("Resolve beginner pokemon in a combat", () => {

    test("should return pokemonA", () => {
        const starter = resolveFirstFighter(pokemonA, pokemonB);

        expect(starter).toEqual(pokemonA);
    });

    test("should return pokemonC", () => {
        let pokemonC = pokemonB;
        pokemonC.speed = 2000;

        const starter = resolveFirstFighter(pokemonA, pokemonC);

        expect(starter).toEqual(pokemonC);
    });

    test("should return pokemonA", () => {
        let pokemonC = pokemonB;
        pokemonC.speed = 1000;

        const starter = resolveFirstFighter(pokemonA, pokemonC);

        expect(starter).toEqual(pokemonA);
    });

    test("should choose pokemonA attack's \"" + pokemonA.attacks[0].name + "\"", () => {
        const attackSelected = selectRandomAttack(pokemonA.attacks);

        expect(attackSelected).toEqual(pokemonA.attacks[0]);
    });

    test("should choose pokemonB attack's", () => {
        const attackSelected = selectRandomAttack(pokemonB.attacks);

        expect(pokemonA.attacks).toContain(attackSelected);
    });

    test("should remove 50hp from pokemonA", () => {
        let pokemonSelected = pokemonA;

        attackPokemon(new Attack("r", 50, Type.Normal), pokemonSelected);

        expect(pokemonSelected.pv).toEqual(pokemonA.pv - 50);
    });

    test("should set pokemon hp to 0", () => {
        let pokemonSelected = pokemonA;

        attackPokemon(new Attack("pa r", 5000, Type.Steel), pokemonSelected);

        expect(pokemonSelected.pv).toEqual(0);
    });

    test("should start a fight then end with pokemonB as winner", () => {
        let pokemonWinner = runFight(pokemonA, pokemonB);

        console.log("The winner is : " + pokemonWinner.name);

        expect(pokemonWinner).toEqual(pokemonB);
    });
});