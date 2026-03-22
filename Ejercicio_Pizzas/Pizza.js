class Pizza {
    static numPizza = 0;

    constructor() {
        this.cocinada = false;
        this.idPizza = `P${++Pizza.numPizza}`;
    }
}