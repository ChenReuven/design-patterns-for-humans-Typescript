// 🔌 Adapter
// Explanation:
// There is an Hunter that know to Hunt ONLY Lions (he know to hunt several types of lions such: AfricaLion/AsianLion etc...)
// We want to give the ability for the Hunter to hunt also new kind of animal: WildDog!
// So we need to "adapt" the Hunter to hunt new kind of type: the WildDog
// we need to create adapter for the Hunter for that.
// The code below explain how to do it.
// future: there is also a diagram for that in draw.io

interface Lion {
  roar(): void;
}

class AfricanLion implements Lion {
    public roar(){
      console.log("roar: AfricanLion");
    }
}

class AsianLion implements Lion {
    public roar(){
      console.log("roar: AsianLion");
    }
}

/******/
class Hunter {
    public hunt(lion: Lion) {
        lion.roar();
    }
}

/******/
// This needs to be added to the game
class WildDog {
    public bark(){
      console.log("roar: WildDog");
    }
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion {
    protected dog;

    public constructor(dog: WildDog) {
        this.dog = dog;
    }

    public roar(): void {
        this.dog.bark();
    }
}

/** Client **/
const wildDog: WildDog = new WildDog();
const wildDogAdapter: Lion = new WildDogAdapter(wildDog); // Note About This Adapter ❤️

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
