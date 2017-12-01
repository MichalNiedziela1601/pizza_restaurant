class NavbarController {
    constructor(User)
    {
        'ngInject';
        this.userFactory = User;
        this.name = 'pizzeria devoile';
    }

    signIn()
    {
        this.userFactory.signIn();
    }

    isLogged() {
        return this.userFactory.isSignedIn();
    }

    loggout() {
        this.userFactory.loggout();
    }
}

export default NavbarController;
