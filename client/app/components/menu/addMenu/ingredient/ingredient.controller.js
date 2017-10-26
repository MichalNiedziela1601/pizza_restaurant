'use strict';
const _ = require('lodash');
class IngredientController {
    constructor()
    {
        this.editEntry = null;
    }

    addNewIngredient()
    {
        this.ingredients.push({editMode: true});
    }

    save(entry)
    {
        entry.editMode = false;
        this.editEntry = null;
    }

    edit(entry)
    {
        this.editEntry = _.cloneDeep(entry);
        entry.editMode = true;
    }

    cancel(entry)
    {
        entry.editMode = false;
        if (this.editEntry) {
            const index = _.findIndex(this.ingredients, i => i.name === entry.name);
            this.ingredients[index] = this.editEntry;
            this.editEntry = null;
        } else {
            const index = _.findIndex(this.ingredients, i => i.name === entry.name);
            this.ingredients.splice(index, 1);
        }

    }

    remove(entry) {
        const index = _.findIndex(this.ingredients, item => item === entry);
        this.ingredients.splice(index,1);
    }

}

export default IngredientController;
