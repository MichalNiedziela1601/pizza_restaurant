const MenuDAO = function ($http)
{
    'ngInject';
    const getMenu = () => $http.get('api/menu').then(menu => menu.data);
    const addMenu = (data) => $http.post('api/menu',data);

    return {
        getMenu, addMenu
    };
};

export default MenuDAO;
