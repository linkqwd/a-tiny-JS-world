const human = (props) => {
    let defaultProperties = {
        species: 'human',
        arms: '2',
        legs: '2',
    }
    return Object.assign(props, defaultProperties)
}

const cat = (props) => {
    let defaultProperties = {
        species: 'cat',
        paws: 4
    }
    return Object.assign(props, defaultProperties, meower())
}

const dog = (props) => {
    let defaultProperties = {
        species: 'dog',
        paws: 4
    }
    return Object.assign(props, defaultProperties)
}

const catWomen = (props) => {
    return Object.assign(human(props), meower())
}

function meower (arg) {
    return {sound: arg || 'Moewing'}
}

const jhon = human({
    name: 'Jhon',
    sex: 'male',
    sound: 'How your doin\'',
    friends: ['Rex', 'selina']
});

const whitney = human({
    name: 'whitney',
    sex: 'female',
    sound: 'Hi guys',
    friends: ['Rex', 'selina']
});

const houston = cat({
    name: 'Houston',
    sex: 'male',
    friends: ['selina']
});

const rex = dog({
    name: 'Rex',
    sex: 'male',
    sound: 'barking',
    friends: ['jhon']
});

const selina = catWomen({
    name: 'selina',
    sex: 'female',
    friends: ['Houston', 'whitney']
});

function getInhabitantInfo (object) {
    return Object.entries(object)
        .map(value => `<strong>${value[0]}:</strong> ${value[1]}`)
        .join('; ')
}

print(getInhabitantInfo(jhon))
print(getInhabitantInfo(whitney))
print(getInhabitantInfo(houston))
print(getInhabitantInfo(rex))
print(getInhabitantInfo(selina))