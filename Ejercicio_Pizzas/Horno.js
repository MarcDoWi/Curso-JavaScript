    class Horno {
        constructor(pizzas_caben_en_horno) {
            this.pizzasEnHorno = new Array();
            this.pizzasCabenEnHorno = pizzas_caben_en_horno;
            this.segundosParaCocinarLaPizza = 10;
        }

        async cocinar_pizza(pizza) {
            await new Promise((resolve) => setTimeout(resolve, this.segundosParaCocinarLaPizza * 1000));
            pizza.cocinada = true;
            console.log(`La pizza ${pizza.idPizza} ha terminado de cocinarse.`);
        }
    }