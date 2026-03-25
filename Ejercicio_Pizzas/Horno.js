    import EventEmitter from "events";
    
    export default class Horno extends EventEmitter{
        constructor(pizzas_caben_en_horno) {
            super();
            this.pizzasEnHorno = new Array();
            this.pizzasCabenEnHorno = pizzas_caben_en_horno;
            this.segundosParaCocinarLaPizza = 10;
        }

        async cocinarPizza(pizza) {
            await new Promise((resolve) => setTimeout(resolve, this.segundosParaCocinarLaPizza * 1000));
            console.log(`La pizza ${pizza.idPizza} ya esta cocinada!`);
            pizza.cocinada = true;
            console.log(`La pizza ${pizza.idPizza} ha terminado de cocinarse.`);
            // Esto emite un evento llamado pizzaCocinada
            this.emit("pizzaCocinada");
        }
    }