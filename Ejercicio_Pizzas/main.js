    import Horno from "./Horno.js";
    import Pizzero from "./Pizzero.js";
    import PincheCocina from "./PincheCocina.js";

    /*
    Los cocineros preparan masa para 1 pizza cada uno.
    Los cocineros intentan meter su masa de pizza en el horno.
    Si el horno esta lleno, dejan la pizza en la mesa (Una lista ordenada de pizzas).
        Cuando haya hueco en el horno meteran la pizza dentro por orden de entrada.
    Si hay hueco en el horno meteran la pizza en el horno.
    El horno cocina las pizzas.
    Un pinche de cocina se encargará de sacar las pizzas cocinadas.
        El pinche de cocina dejará la pizza cocinada que haya sacado encima de la mesa de pizzas cocinadas (Array de pizzas).
    */

    let mesaPizzasCrudas = [];
    let mesaPizzasCocinadas = [];
    let horno = new Horno(3);
    let pizzero1 = new Pizzero("Marc", 5);
    let pizzero2 = new Pizzero("Koops", 11);
    let pincheCocina = new PincheCocina()

    pizzero1.trabajar(horno, mesaPizzasCrudas);
    pizzero2.trabajar(horno, mesaPizzasCrudas);
    pincheCocina.trabajar(horno, mesaPizzasCrudas, mesaPizzasCocinadas);


/*
    Falta que el pinche avise cuando quita una pizza de la mesa. => Ahora avisa, falta que los cocineros escuchen.
    Por algún motivo parece que el horno no cocina las pizzas y el Pinche no trabaja.
*/