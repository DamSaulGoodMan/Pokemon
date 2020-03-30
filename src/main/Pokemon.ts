import {getRandomInt} from "./commun/random"
import {Attack} from "./Attack";
import {Type} from "./Type";

export class Pokemon {
    name: string;

    speed: number;
    pv: number;
    types: Array<Type>

    attacks: Array<Attack>;

    constructor(name: string, speed: number, pv: number, types: Array<Type>, attacks: Array<Attack>) {
        this.name = name;

        this.speed = speed;
        this.pv = pv;
        this.types = types;

        this.attacks = attacks;
    }
}