import {Type} from "./Type";

export class Attack {
    name: string;
    damage: number;
    type: Type;

    constructor(name: string, damage: number, type: Type) {
        this.name = name;
        this.damage = damage;
        this.type = type;
    }
}