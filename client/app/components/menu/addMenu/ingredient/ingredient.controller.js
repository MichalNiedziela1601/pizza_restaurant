'use strict';
const _ = require('lodash');
class IngredientController {
    constructor()
    {
        this.ingredient = null;
        this.editMode = false;
        this.currentIndex = 0;
        this.titleMode = 'Add';
    }

    save()
    {
        if(this.editMode) {
            this.ingredients[this.currentIndex] = this.ingredient;
            this.editMode = false;
            this.titleMode = 'Add';
        } else {
            this.ingredients.push(this.ingredient);
        }
        this.ingredient = null;
    }

    edit(index)
    {
        this.ingredient = _.cloneDeep(this.ingredients[index]);
        this.currentIndex = index;
        this.editMode = true;
        this.titleMode = 'Save';
    }

    cancel()
    {
            this.editMode = false;
            this.ingredient = null;
            this.titleMode = 'Add';
    }

    remove(index) {
        this.ingredients.splice(index,1);
    }

}

export default IngredientController;
