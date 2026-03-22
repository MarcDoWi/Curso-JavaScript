class Pizzero {
    constructor(nombre, tiempoPreparacionMasaPizza) {
        this.nombre = nombre;
        this.tiempoPreparacionMasaPizza = tiempoPreparacionMasaPizza;
        this.pizza = null;
    }

    async preparar_masa_pizza() {
        await new Promise((resolve) => setTimeout(resolve, this.tiempoPreparacionMasaPizza * 1000));
        this.pizza = new Pizza();
        console.log(`El cocinero ${this.nombre} ha terminado de preparar la masa de la pizza ${this.pizza.idPizza}`);
    }

    async meter_pizza_en_horno(horno, mesaPizzasCrudas){
        if (horno.pizzasCabenEnHorno > horno.pizzasEnHorno.length) {
            horno.pizzasEnHorno.push(this.pizza);
            console.log(`${this.nombre} ha metido la pizza ${this.pizza.idPizza} en el horno.`);
        } else {
            mesaPizzasCrudas.push(this.pizza);
            console.log(`Como el horno esta lleno, ${this.nombre} ha puesto la pizza ${this.pizza.idPizza} en la mesa del horno.`);
        }
    }

    async trabajar(horno, mesaPizzasCrudas) {
        this.preparar_masa_pizza();
        this.esperar(1);
        this.meter_pizza_en_horno();
        this.esperar(2);
    }

    async esperar(tiempo) {
        await new Promise(response => setTimeout(response, tiempo*1000));
    }
}