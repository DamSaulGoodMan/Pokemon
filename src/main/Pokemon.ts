import "main/commun/random"

export class Pokemon {
    name: string;
    speed: number;
    luck: number;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;

        this.luck = getRandomInt(10);
    }
}