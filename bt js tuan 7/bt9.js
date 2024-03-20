class Pet {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Tôi tên là ${this.name}.`);
    }

    talk(sound) {
        console.log(sound);
    }
}

class Dog extends Pet {
    constructor(name, animalType) {
        super(name);
        this.animalType = animalType;
    }

    animalTypeInfo() {
        console.log(`Tôi là động vật ${this.animalType}.`);
    }

    introduce() {
        super.introduce();
    }

    talk(sound) {
        super.talk(sound);
    }
}

// Sử dụng lớp Dog
let dog = new Dog("Bobby", "có lông xù");
dog.introduce();
dog.animalTypeInfo();
dog.talk("Gâu gâu");