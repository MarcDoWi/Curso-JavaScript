class Mutex3 {
    constructor() {
        this.queue = Promise.resolve();
    }

    lock() {
        let begin;
        const next = new Promise(resolve => {
            begin = resolve;
        })

        const lock = this.queue.then(() => begin);

        this.queue = next;
        
        return lock;
    }
}