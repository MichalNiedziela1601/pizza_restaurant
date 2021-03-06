import ItemModule from './item';
import ItemController from './item.controller';
import ItemComponent from './item.component';
import ItemTemplate from './item.html';

describe('Item', () =>
{
    let makeController;

    beforeEach(window.module(ItemModule));
    beforeEach(inject(() =>
    {
        makeController = () => new ItemController();
    }));

    describe('Module', () =>
    {
        // top-level specs: i.e., routes, injection, naming
    });

    describe('Controller', () =>
    {
        // controller specs
        it('has a name property [REMOVE]', () =>
        { // erase if removing this.name from the controller
            const controller = makeController();
            expect(controller).to.have.property('name');
        });
    });

    // describe('Template', () =>
    // {
    //     // template specs
    //     // tip: use regex to ensure correct bindings are used e.g., {{  }}
    //     // it('has name in template [REMOVE]', () =>
    //     // {
    //     //     expect(ItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    //     // });
    // });

    describe('Component', () =>
    {
        // component/directive specs
        const component = ItemComponent;

        it('includes the intended template', () =>
        {
            expect(component.template).to.equal(ItemTemplate);
        });

        it('invokes the right controller', () =>
        {
            expect(component.controller).to.equal(ItemController);
        });
    });
});
