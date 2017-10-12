class MenuController {
    constructor(MenuDAO)
    {
        'ngInject';
        this.menuDao = MenuDAO;
        this.name = 'menu';
        // this.items = [
        //     {
        //         name: 'Margerita',
        //         ingredients: ['cheese', 'sauce', 'oregano'],
        //         prices: [
        //             {size: 32, price: 14.00},
        //             {size: 40, price: 17.00},
        //             {size: 50, price: 21.00}
        //         ],
        //         thumbImage: 'margeritta'
        //     },
        //     {
        //         name: 'Firmowa',
        //         ingredients: ['cheese', 'sauce', 'oregano', 'grilled tune', 'olives', 'shrimp'],
        //         prices: [
        //             {size: 32, price: 22.00},
        //             {size: 40, price: 28.00},
        //             {size: 50, price: 36.00}
        //         ],
        //         thumbImage: 'firm_pizza'
        //     },
        //     {
        //         name: 'Firmowa',
        //         ingredients: ['cheese', 'sauce', 'oregano', 'grilled tune', 'olives', 'shrimp'],
        //         prices: [
        //             {size: 32, price: 22.00},
        //             {size: 40, price: 28.00},
        //             {size: 50, price: 36.00}
        //         ],
        //         thumbImage: 'firm_pizza'
        //     },
        //     {
        //         name: 'Capri',
        //         ingredients: ['cheese', 'sauce', 'mushrooms', 'oregano', 'pepper', 'corn'],
        //         prices: [
        //             {size: 32, price: 18.00},
        //             {size: 40, price: 23.00},
        //             {size: 50, price: 29.00}
        //         ],
        //         thumbImage: 'capri'
        //     }
        // ];
        this.menuDao.getMenu().then(menu =>
        {
            console.log(menu);
            this.items = menu;
        });
    }
}

export default MenuController;
