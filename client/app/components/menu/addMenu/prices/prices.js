import template from './prices.html'
import './prices.scss'
class Prices {
    constructor() {
        this.editEntry = null;
        this.titleMode = 'Add price';
        this.editMode = false;
    }

    edit(entry) {
        this.titleMode = 'Edit';
        this.editEntry = _.cloneDeep(entry);
        this.editMode = true;
    }

    cancel() {
        this.editMode = false;
        this.editEntry = null;
        this.titleMode = 'Add price';
    }

    save() {
        if (this.editMode) {
            this.prices[this.editEntry.index] = this.editEntry;
            this.titleMode = 'Add price';
            this.editMode = false;
        } else {
            const index = Object.keys(this.prices).length;
            this.prices[index] = { size: this.editEntry.size, price: this.editEntry.price, index: index };
        }
        this.editEntry = null;
    }
}

export default {
    controller: Prices,
    template,
    bindings: {
        prices: '<'
    },
    restrict: 'E'

}