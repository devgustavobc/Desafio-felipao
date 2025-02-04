class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let ataque;

        if (this.type == "mago")
            ataque = 'magia'

        else if (this.type == "guerreiro")
            ataque = 'espada'

        else if (this.type == "monge")
            ataque = 'artes marciais'

        else if (this.type == "ninja")
            ataque = 'shuriken'

        console.log(`o ${this.type} atacou usando ${ataque}`)

    }   
}

let newHero = new hero("Varian Wrynn", "45", "guerreiro")
let newHeroTwo = new hero("Jaina Proudmoore", "45", "mago")
let newHeroThree = new hero("Taran Zhu", "80", "monge")
let newHeroFour = new hero("Edwin VanCleef", "35", "ninja")

newHero.attack()
newHeroTwo.attack()
newHeroThree.attack()
newHeroFour.attack()


// olá