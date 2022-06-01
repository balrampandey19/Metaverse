class KeyMovement {

    constructor() {
        this.movement = {};
        window.addEventListener("keydown", this.down.bind(this));
        window.addEventListener("keyup", this.up.bind(this));

    }

    isPresed(keyCode) {
        return this.movement[keyCode] ? this.movement[keyCode] : false;
    }

    down(e) {
        if (this.movement[e.keyCode]) return;
        this.movement[e.keyCode] = true;
        console.log("KeyDown:", e.key, "Key Code:", e.keyCode);


    }
    up(e) {
        this.movement[e.keyCode] = false;
        console.log("Key UP:", e.key, "Key Code:", e.keyCode);


    }

}

const Movements = new KeyMovement();
export default Movements;