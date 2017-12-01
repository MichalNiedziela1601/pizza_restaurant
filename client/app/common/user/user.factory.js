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
    const loggout = () =>
    {
        user.isSignedIn = false;
    };

    return {getUser, isSignedIn, signIn, loggout};
};

UserFactory.$inject = ['$http'];

export default UserFactory;
