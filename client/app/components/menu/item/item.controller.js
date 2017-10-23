class ItemController {
    constructor()
    {
        this.name = 'item';
    }

    showImage()
    {
        this.onShowImage({image: this.item.thumb});
    }
}

export default ItemController;
