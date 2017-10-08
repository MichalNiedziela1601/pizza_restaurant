import HeroModule from './hero';
import HeroController from './hero.controller';
import HeroComponent from './hero.component';
import HeroTemplate from './hero.html';

describe('Hero', () =>
{
    const slidesMock = [
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
    ];

    beforeEach(window.module(HeroModule));

    describe('Module', () =>
    {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () =>
    {
        // controller specs
        let controller;
        beforeEach(() =>
        {
            controller = new HeroController();
        });

        it('has a name property [REMOVE]', () =>
        { // erase if removing this.name from the controller
            expect(controller).to.have.property('name');
            expect(controller.name).to.eql('hero');
        });

        it('has a slides array property', () =>
        {
            expect(controller).to.have.property('slides');
            expect(controller.slides).to.eql(slidesMock);
        });

        it('has a active property', () =>
        {
            expect(controller).to.have.property('active');
            expect(controller.active).to.eql(0);
        });

        it('has a interval property', () =>
        {
            expect(controller).to.have.property('myInterval');
            expect(controller.myInterval).to.eql(5000);
        });
    });

    // describe('Template', () => {
    //   // template specs
    //   // tip: use regex to ensure correct bindings are used e.g., {{  }}
    //   it('has name in template [REMOVE]', () => {
    //     expect(HeroTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    //   });
    // });

    describe('Component', () =>
    {
        // component/directive specs
        const component = HeroComponent;

        it('includes the intended template', () =>
        {
            expect(component.template).to.equal(HeroTemplate);
        });

        it('invokes the right controller', () =>
        {
            expect(component.controller).to.equal(HeroController);
        });
    });
})
;
