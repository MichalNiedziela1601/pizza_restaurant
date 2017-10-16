const UserFactory = function ($http)
{
    const user = {
        isSignedIn: false
    };

    const getUser = () => user;
    const isSignedIn = () => user.isSignedIn;
    const signIn = () =>
    {
        user.isSignedIn = true;
    };

    return {getUser, isSignedIn, signIn};
};

UserFactory.$inject = ['$http'];

export default UserFactory;
