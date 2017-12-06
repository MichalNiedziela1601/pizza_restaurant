export default class NavFixedController {
    constructor()
    {
        this.restrict = 'A';
    }

    link(scope, element)
    {
        const $page = angular.element(window);
        const el = element[0];
        let elScrollTopOriginal = $(el).offset().top + 60;

        $page.bind('scroll', () =>
        {
            const windowScrollTop = $page[0].pageYOffset;
            const elScrollTop = $(el).offset().top + 60;

            if (windowScrollTop > elScrollTop) {
                elScrollTopOriginal = elScrollTop;
                element.removeClass('topstate');
                element.addClass('affixed');
            }
            else if (windowScrollTop < elScrollTopOriginal + 30) {
                element.removeClass('affixed');
                element.addClass('topstate');
            }
        });
    }
}
