import {runFight} from "./combat";
import {Pokemon} from "./Pokemon";
import {Type} from "./Type";
import {Attack} from "./Attack";

function main(): number {

    console.log("Start fight btw Theo and Claudia");

    const pokemonA = new Pokemon("Theo", 1000, 200,
        [Type.Fairy, Type.Fighting],
        [new Attack("clamernoir", 10, Type.Dark)]
    );
    const pokemonB = new Pokemon("Claudia", 50, 300,
        [Type.Dragon],
        [new Attack("Kiss Théo", 50, Type.Electric)]
    );

    console.log("The winner is : " + runFight(pokemonA, pokemonB));

    return 0;
}