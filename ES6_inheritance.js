class Inhabitant {
    constructor(props) {
        this.name = props.name;
        this.sex = props.sex;
        this.sound = props.sound;
        this.friends = props.friends;
    }

    static getInhabitantInfo(instance) {
        return Object.entries(instance)
        .map(value => `<strong>${value[0]}:</strong> ${value[1]}`)
        .join('; ')
    }
}

class Human extends Inhabitant {
    constructor(props) {
        super(props)
        this.species = 'human'
        this.legs = 2;
        this.arms = 2;
    }
}

class Cat extends Inhabitant {
    constructor(props) {
        super(props)
        this.species = 'cat'
        this.paws = 4;
    }
}

class Dog extends Inhabitant {
    constructor(props) {
        super(props)
        this.species = 'dog'
        this.paws = 4;
    }
}

const jhon = new Human({
    name: 'Jhon',
    sex: 'male',
    sound: 'How your doin\'',
    friends: ['Rex', 'Whitney']
});

const whitney = new Human({
    name: 'Whitney',
    sex: 'female',
    friends: ['Houston']
});

const houston = new Cat({
    name: 'Houston',
    sex: 'male',
    sound: 'Mmmrrrrr',
    friends: ['Whitney']
});

const rex = new Dog({
    name: 'Rex',
    sex: 'male',
    sound: 'Ggrrrrr',
    friends: ['Jhon']
});

print(Inhabitant.getInhabitantInfo(jhon));
print(Inhabitant.getInhabitantInfo(whitney));
print(Inhabitant.getInhabitantInfo(houston));
print(Inhabitant.getInhabitantInfo(rex));