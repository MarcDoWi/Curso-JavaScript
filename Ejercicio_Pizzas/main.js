
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
    El problema actual es que los cocineros ponen las pizzas directamente en el horno o en la mesa, sin mirar si hay pizzas crudas esperando
    y que nadie mete las pizzas de la mesa de pizzas crudas al horno.

    Otras cosas: Estaría bien mostrar mensajes de cuantas pizzas hay en el horno y en la mesa de pizzas crudas cada vez que se intenta
    meter una pizza en el horno
    Estaría bien mostrar la cantidad de pizzas que hay cocinadas.
*/