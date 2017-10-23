import MenuModule from './menu';
import MenuController from './menu.controller';
import MenuComponent from './menu.component';
import MenuTemplate from './menu.html';
import DAOModule from '../../common/dao/dao';

describe('Menu', () =>
{
    let makeController;
    let MenuService;
    let  getMenu;

    beforeEach(window.module(MenuModule));
    beforeEach(window.module(DAOModule));
    beforeEach(inject(_MenuDAO_ =>
    {
        MenuService = _MenuDAO_;
        getMenu = sinon.stub(MenuService,'getMenu').resolves(['adfsdf']);
        makeController = () => new MenuController(MenuService);
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
        it('should call Menu.getMenu', () =>
        {
            makeController();
            expect(getMenu).callCount(1);
        });
    });

    // describe('Template', () =>
    // {
    //     // template specs
    //     // tip: use regex to ensure correct bindings are used e.g., {{  }}
    //     it('has name in template [REMOVE]', () =>
    //     {
    //         expect(MenuTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    //     });
    // });

    describe('Component', () =>
    {
        // component/directive specs
        const component = MenuComponent;

        it('includes the intended template', () =>
        {
            expect(component.template).to.equal(MenuTemplate);
        });

        it('invokes the right controller', () =>
        {
            expect(component.controller).to.equal(MenuController);
        });
    });
});
