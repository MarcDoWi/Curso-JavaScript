import EventEmitter from "events";

export default class PincheCocina extends EventEmitter{
    constructor() {
        super();
    }
    
    sacarPizzaDelHorno(horno, mesaPizzasCocinadas) {
        const posicionPizzaCocinada = horno.pizzasEnHorno.findIndex(pizza => pizza.cocinada);
        if (posicionPizzaCocinada != -1) {
            const pizzaCocinada = horno.pizzasEnHorno.splice(posicionPizzaCocinada, 1)[0];
            mesaPizzasCocinadas.push(pizzaCocinada);
            console.log(`El pinche pendejo ha sacado la pizza ${pizzaCocinada.idPizza} del horno. Hay ${mesaPizzasCocinadas.length} pizzas cocinadas.`);
        } else {
            console.log("ERROR - EL PINCHE PENDEJO NO HA ENCONTRADO NINGUNA PIZZA COCINADA!!!!");
        }
    }

    meterPizzaCrudaAlHorno(horno, mesaPizzasCrudas, colaPizzerosEsperando) {
        if (mesaPizzasCrudas.length > 0) {
            if (horno.pizzasCabenEnHorno > horno.pizzasEnHorno.length) {
                let pizzaCruda = mesaPizzasCrudas.shift();
                horno.pizzasEnHorno.push(pizzaCruda);
                horno.cocinarPizza(pizzaCruda);
                if (colaPizzerosEsperando.length > 0) {
                    siguientePizzero = colaPizzerosEsperando.shift();
                    console.log(`Como hay ${mesaPizzasCrudas.length} pizzas esperando y en el horno hay ${horno.pizzasEnHorno.length} y caben ${horno.pizzasCabenEnHorno} el pinche ha metido una pizza en el horno. Avisando a ${siguientePizzero.nombre}.`);
                    siguientePizzero.emit("pizzaCrudaMetidaAlHorno");
                } else {
                    console.log(`Como hay ${mesaPizzasCrudas.length} pizzas esperando y en el horno hay ${horno.pizzasEnHorno.length} y caben ${horno.pizzasCabenEnHorno} el pinche ha metido una pizza en el horno. No hay cocineros esperando ${colaPizzerosEsperando.length}`);
                }
            } else {
                console.log(`Aunque hay ${mesaPizzasCrudas.length} pizzas esperando pero en el horno hay ${horno.pizzasEnHorno.length} y caben ${horno.pizzasCabenEnHorno} el horno esta lleno y el pinche no ha metido ninguna al horno.`)
            }
        } else {
            console.log(`Como en la mesa de pizzas crudas hay ${mesaPizzasCrudas.length} pizzas, el pinche no ha metido ninguna pizza al horno.`);
        }
    }

    async trabajar(horno, mesaPizzasCrudas, mesaPizzasCocinadas, colaPizzerosEsperando) {
        while (true){
            // Esperamos a recibir el aviso "pizzaCocinada" del horno. Mientras, podrá hacer otras cosas
            await new Promise((resolve) => {
                horno.on("pizzaCocinada", () => {
                    console.log("👂 [PINCHE]: ¡Oído! Voy a sacar la pizza.");
                    this.sacarPizzaDelHorno(horno, mesaPizzasCocinadas);
                    this.esperar(1);
                });
            });

            this.meterPizzaCrudaAlHorno(horno, mesaPizzasCrudas, colaPizzerosEsperando);

            await this.esperar(1);
        }
    }

    async esperar(tiempoEspera) {
        await new Promise(response => setTimeout(response, tiempoEspera * 1000));
    }
}