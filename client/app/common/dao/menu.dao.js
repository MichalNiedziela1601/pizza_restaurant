const MenuDAO = function ($http)
{
    'ngInject';
    const getMenu = () => $http.get('api/menu').then(menu => menu.data);

    return {
        getMenu
    };
};

export default MenuDAO;
