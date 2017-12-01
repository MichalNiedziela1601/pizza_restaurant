class HeroController {
    constructor()
    {
        this.name = 'hero';
        this.active = 0;
        this.myInterval = 5000;
        this.slides = [
            {
                id: 0,
                image: 'assets/img/hero_pizza_1.jpg',
                text: 'Our pizza is delicious',
                title: 'Zapraszamy na najlepszą pizzę w mieście'
            },
            {
                id: 1,
                image: 'assets/img/hero_pizza_2.jpg',
                text: 'Our pizza is delicious',
                title: 'Mamy największą pizzę w mieście'
            }
        ];
    }
}

export default HeroController;
