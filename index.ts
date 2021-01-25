interface IProduct {
    item_id: number,
    price: number,
    quantity?: number,
}

interface RProduct {
    item_id: number;
}


class Cart {

    shop_cart: Array<IProduct> = [];

    addItem(product: IProduct) {
        // let shop_cart = new Array();
        this.shop_cart.push(product);
        return this;
    }





    removeItem(product: RProduct) {


        this.shop_cart = this.shop_cart.filter(function (obj) {
            return obj.item_id !== product.item_id;
        });
        return this;
    }

    addDiscount() {
        return this;
    }


    totalItems() {
        let totalItems: number = this.shop_cart.length;
        console.log(totalItems);
        return totalItems

    }

    totalQuantity() {

        let quantity: number = 0;

        this.shop_cart.map(function (item: IProduct) {
            if (item.quantity === undefined) {
                quantity += 1;
            } else {
                quantity += item.quantity
            }
        });

        console.log(quantity)
        return quantity

    }


    totalPrice() {

        let totalPrice: number = 0;

        this.shop_cart.map(function (item: IProduct) {
            if (item.quantity === undefined) {
                totalPrice += item.price * 1;
            } else {
                totalPrice += item.price * item.quantity
            }
        });

        console.log(totalPrice)
        return totalPrice

    }

    showAll(): void {
        console.log(this.shop_cart)

    }

    checkOut() {


    }



}

const cart = new Cart()

cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
    .addItem({ item_id: 2, price: 30000, quantity: 3 })
// .removeItem({ item_id: 2 })
cart.totalQuantity()
cart.totalItems()
cart.totalPrice()
cart.showAll()
// cart.addItem({ item_id: 1, price: 30000, quantity: 3 })





