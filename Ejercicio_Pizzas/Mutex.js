class Mutex {
    constructor() {
        this.queue = Promise.resolve();
    }

    lock() {
        let begin;
        // Create a new promise that says "pending";
        const next = new Promise(resolve => {
            // recuerda que resolve es una función, por lo que en begin almacenando la función resolve.
            begin = resolve;
        });

        // When the current queue finishes; we let the next one start
        // Cuando se resuelve la promesa de la cola, se executa el begin, que libera el mutex
        const lock = this.queue.then(() => begin);

        // Update the queue to wait for this new "next" promise.
        this.queue = next;

        return lock;
    }
}