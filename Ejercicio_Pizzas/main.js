
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

    const mesaPizzasCrudas = [];
    const mesaPizzasCocinadas = [];
    const horno = new Horno(3);
    const pizzero1 = new Pizzero("Marc", 5);
    const pizzero2 = new Pizzero("Koops", 11);
    const PincheCocina = new PincheCocina()



/*
    Ahora los mensajes descriptivos son mejores.
    Ahora se tienen en cuenta las pizzas que hay esperando para meterlas al horno, hay un máximo de pizzas que pueden haber en esa mesa definido por una constante global.
        si se supera el máximo los cocineros esperaran a que haya un hueco para dejar la pizza que han hecho.
    Ahora se borra la pizza del pizzero en cuanto la pone en el horno o la mesa de pizzas crudas.

    Falta añadir una cola de cocineros para evitar que se cuelen mientras uno espera a que haya hueco para dejar la pizza.
    Falta que el horno trabaje.
    Falta que el horno avise cuando una pizza este hecha.
    Falta que el pinche avise cuando quita una pizza de la mesa.
    Falta el código del main.
*/