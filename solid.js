class Solid {
    constructor() {
        this.volume = 0;
        this.surfaceArea = 0;
    }

    calculateVolume() {
        // Розрахунок об'єму - заглушка
        this.volume = 0;
    }

    calculateSurfaceArea() {
        // Розрахунок площі поверхні - заглушка
        this.surfaceArea = 0;
    }
}

class Cube extends Solid {
    constructor(side) {
        super();
        this.side = side;
        this.calculateVolume();
        this.calculateSurfaceArea();
    }

    calculateVolume() {
        this.volume = Math.pow(this.side, 3);
    }

    calculateSurfaceArea() {
        this.surfaceArea = 6 * Math.pow(this.side, 2);
    }
}

class Cylinder extends Solid {
    constructor(radius, height) {
        super();
        this.radius = radius;
        this.height = height;
        this.calculateVolume();
        this.calculateSurfaceArea();
    }

    calculateVolume() {
        this.volume = Math.PI * Math.pow(this.radius, 2) * this.height;
    }

    calculateSurfaceArea() {
        this.surfaceArea =
            2 * Math.PI * Math.pow(this.radius, 2) +
            2 * Math.PI * this.radius * this.height;
    }
}
