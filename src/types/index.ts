export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type OrderItem = MenuItem & { //De esta forma se toma todo lo que tiene menu item y se asigna al menu item 
    quantity: number
}