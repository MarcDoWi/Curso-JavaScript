    import Pizza from "./Pizza.js";

    const MAXIMO_PIZZAS_CRUDAS_ESPERANDO = 3;
    const colaPizzerosEsperando = new Set();

/*
Observaciones:
    1. Las esperas de los cocineros son largas para evitar el spam de mensajes, soy consciente que siendo tan largas el 2o cocinero que llege podría robarles el turno.
*/

    export default class Pizzero {
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
            // Mesa pizzas crudas llena?
            while (mesaPizzasCrudas.length >= MAXIMO_PIZZAS_CRUDAS_ESPERANDO) {
                // Los cocineros deben esperar a pizzaCrudaMetidaAlHorno
                colaPizzerosEsperando.add(this);
                console.log(`Como la mesa de pizzas crudas esta llena (caben ${MAXIMO_PIZZAS_CRUDAS_ESPERANDO} y hay ${mesaPizzasCrudas.length} pizzas, ${this.nombre} se pone a esperar.)`);
                await this.esperar(1);
            }
            colaPizzerosEsperando.delete(this);
            // Mesa pizzas crudas vacía?
            if (mesaPizzasCrudas.length == 0) {
                // Horno lleno?
                if (horno.pizzasCabenEnHorno > horno.pizzasEnHorno.length) {
                    horno.pizzasEnHorno.push(this.pizza);
                    console.log(`${this.nombre} ha metido la pizza ${this.pizza.idPizza} en el horno. Hay ${horno.pizzasEnHorno.length} pizzas en el horno y caben ${horno.pizzasCabenEnHorno} pizzas.`);
                    this.pizza = null;
                } else {
                    mesaPizzasCrudas.push(this.pizza);
                    console.log(`Como el horno esta lleno (caben ${horno.pizzasCabenEnHorno} y hay ${horno.pizzasEnHorno.length}), ${this.nombre} ha puesto la pizza ${this.pizza.idPizza} en la mesa del horno.`);
                    this.pizza = null;
                }
            } else {
                // Los cocineros deben esperar a pizzaCrudaMetidaAlHorno.
                while (mesaPizzasCrudas.length >= MAXIMO_PIZZAS_CRUDAS_ESPERANDO) {
                    colaPizzerosEsperando.add(this);
                    console.log(`Como ${this.nombre} ve que en la mesa de pizzas crudas hay ${mesaPizzasCrudas.length} y caben ${MAXIMO_PIZZAS_CRUDAS_ESPERANDO} se pone a esperar a que haya hueco.`)
                    await this.esperar(3);
                }
                colaPizzerosEsperando.delete(this);
                mesaPizzasCrudas.push(this.pizza);
                console.log(`Como hay pizzas en la mesa de pizzas crudas, ${this.nombre} ha puesto la pizza ${this.pizza.idPizza} en la mesa de pizzas crudas. Hay ${horno.pizzasEnHorno} pizzas en el horno y caben ${horno.pizzasCabenEnHorno} pizzas.`);
                this.pizza = null;
            }
        }

        async trabajar(horno, mesaPizzasCrudas) {
            while (true) {
                if (mesaPizzasCrudas.length > 3) {
                    await this.esperar(10);
                    continue
                }
                await this.preparar_masa_pizza();
                await this.esperar(1);
                await this.meter_pizza_en_horno(horno, mesaPizzasCrudas);
                await this.esperar(2);
            }
        }

        async esperar(tiempo) {
            await new Promise(response => setTimeout(response, tiempo * 1000));
        }
    }