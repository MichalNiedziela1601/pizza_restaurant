const UserFactory = function ()
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

export default UserFactory;
