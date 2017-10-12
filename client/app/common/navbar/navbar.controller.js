class NavbarController {
    constructor(User)
    {
        'ngInject';
        this.userFactory = User;
        this.name = 'pizzeria devoile';
    }

    signIn()
    {
        this.userFactory.signIn().then(data =>
        {
            console.log(data);
        });
    }
}

export default NavbarController;
