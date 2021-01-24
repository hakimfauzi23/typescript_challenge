interface IProduct {
    item_id: number,
    price: number,
    quantity?: number,
}

class Cart implements IProduct {
    item_id: number;
    price: number;
    quantity: number ;
    
    addItem(product: IProduct) {
        let shop_cart = new Array();
        let add = shop_cart.push(product.item_id, product.price, product.quantity)
        console.log(shop_cart)
    }
    


    removeItem(product : IProduct){
        let shop_cart = new Array();
        let rm = delete shop_cart[product.item_id]
    }

    

}

const cart = new Cart()

cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
cart.addItem({ item_id: 2, price: 10000, quantity: 1 })               // By default quantity is 1
cart.addItem({ item_id: 3, price: 5000, quantity: 2 })



