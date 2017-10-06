class HeroController {
    constructor()
    {
        this.name = 'hero';
        this.active = 0;
        this.myInterval = 4000;
        this.slides = [
            {
                id: 0,
                image: 'assets/img/hero_pizza_1.jpg',
                text: 'Our pizza is delicious'
            },
            {
                id: 1,
                image: 'assets/img/hero_pizza_2.jpg',
                text: 'Our pizza is delicious'
            }
        ]
    }
}

export default HeroController;
