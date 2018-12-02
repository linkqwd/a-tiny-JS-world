function Inhabitant(props) {
    this.name = props.name;
    this.sex = props.sex;
    this.sound = props.sound;
    this.friends = props.friends;
}

Inhabitant.prototype.getInhabitantInfo = function () {
    return this.species + '; '
        + this.name + '; '
        + this.sex + '; '
        + this.arms + '; '
        + this.legs + '; '
        + this.sound + '; '
        + this.friends
}

function Human(props) {
    Inhabitant.call(this, props)
    this.species = 'human';
    this.arms = 2;
    this.legs = 2;
}

function Cat(props) {
    Inhabitant.call(this, props);
    this.species = 'cat';
    this.sound = 'Meowing'
    this.legs = 4;
}

function Dog(props) {
    Inhabitant.call(this, props);
    this.species = 'dog';
    this.sound = 'Barking';
    this.legs = 4;
}

Human.prototype = Object.create(Inhabitant.prototype);
Cat.prototype = Object.create(Inhabitant.prototype);
Dog.prototype = Object.create(Inhabitant.prototype);

var jhon = new Human({
    name: 'Jhon',
    sex: 'male',
    sound: 'How your doin\'',
    friends: ['Rex']
});

var whitney = new Human({
    name: 'Whitney',
    sex: 'female',
    sound: 'Hello boys',
    friends: ['Houston']
});

var houston = new Cat({
    name: 'Houston',
    sex: 'male',
    friends: ['Whitney']
});

var rex = new Dog({
    name: 'Rex',
    sex: 'male',
    friends: ['Jhon']
});

print(jhon.getInhabitantInfo());
print(whitney.getInhabitantInfo());
print(houston.getInhabitantInfo());
print(rex.getInhabitantInfo());