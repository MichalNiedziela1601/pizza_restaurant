class MenuController {
    constructor(MenuDAO, User)
    {
        'ngInject';
        this.user = User;
        this.menuDao = MenuDAO;
        this.name = 'menu';
        this.menuDao.getMenu().then(menu =>
        {
            this.items = menu;
        });
        this.show = false;
    }

    showGallery(image)
    {
        this.show = true;
        this.showImage = image;
    }

    nextImg()
    {
        const menuItem = this.items.find(item => item.thumb === this.showImage);
        const index = this.items.indexOf(menuItem);
        if (this.items.length - 1 <= index) {
            this.showImage = this.items[0].thumb;
        } else {
            this.showImage = this.items[index + 1].thumb;
        }
    }

    prevImage()
    {
        const menuItem = this.items.find(item => item.thumb === this.showImage);
        const index = this.items.indexOf(menuItem);
        if (0 >= index) {
            this.showImage = this.items[this.items.length - 1].thumb;
        } else {
            this.showImage = this.items[index - 1].thumb;
        }
    }

    isAdmin()
    {
        return this.user.isSignedIn();
    }
}

export default MenuController;
