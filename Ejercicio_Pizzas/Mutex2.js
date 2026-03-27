class Mutex2 {
    constructor(){
        this.queue = Promise.resolve();
    }

    lock() {
        let empieza;
        // Aqui el cocinero coge el mutex hasta que se ejecute empieza
        const siguiente = new Promise((finalizar) => {
            empieza = finalizar;
        });

        // En cuanto el cocinero termine ejecutará candado() 
        const candado = this.queue.then(() => empieza);

        this.queue = siguiente;

        return candado;
    }
}