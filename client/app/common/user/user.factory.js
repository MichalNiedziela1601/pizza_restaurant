const UserFactory = function ($http)
{
    const user = {
        isSignedIn: false
    };

    const getUser = () => user;
    const isSignedIn = () => user.isSignedIn;
    const signIn = () =>
    {
        return $http.get('api/hello').then(data =>
        {
            user.isSignedIn = true;
            return data.data;
        });
    };

    return {getUser, isSignedIn, signIn};
};

UserFactory.$inject = ['$http'];

export default UserFactory;
