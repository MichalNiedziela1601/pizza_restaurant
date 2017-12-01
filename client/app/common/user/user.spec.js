import UserFactory from './user.factory';
import UserModule from './user';

describe('UserFactory', () =>
{
    let controller;
    beforeEach(window.module(UserModule));
    beforeEach(inject(() =>
    {
        controller = new UserFactory();
    }));

    describe('getUser', () =>
    {
        it('should return user', () =>
        {
            expect(controller.getUser()).to.eql({isSignedIn: false});
        });
    });

    describe('isSignedIn', () =>
    {
        describe('when user not signed', () =>
        {
            it('should return false or null', () =>
            {
                expect(controller.isSignedIn()).to.eql(false);
            });
        });
        describe('when user signed', () =>
        {
            it('should return true', () =>
            {
                controller.signIn();
                expect(controller.isSignedIn()).to.eql(true);
            });
        });
    });

    describe('signIn', () =>
    {
        it('should set user.isSignIn', () =>
        {
            controller.signIn();
            expect(controller.isSignedIn()).to.eql(true);
        });
    });
});
