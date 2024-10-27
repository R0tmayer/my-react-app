import {useState, useEffect} from 'react';
import CartItem from "../interfaces/CartItem"; // Импорт интерфейса
import CartItemView from "./CartItemView.tsx";
import '../styles/cart.css';
import CartTotalView from "./CartTotalView.tsx";

export default function CartView() {
    const [items, setItems] = useState<CartItem[]>([
        {id: 1, title: "Game1", price: 10, quantity: 2},
        {id: 2, title: "Game2", price: 5, quantity: 1},
        {id: 3, title: "Game3", price: 7, quantity: 25}
    ]);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = items.reduce((acc, current) => acc + (current.price * current.quantity), 0);
        setTotal(newTotal);
    }, [items]);

    const incrementQuantity = (id: number) => {
        const updatedItems = items.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item)
        setItems(updatedItems);
    };

    const decrementQuantity = (id: number) => {
        const updatedItems = items.map(item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1
        } : item);

        setItems(updatedItems.filter(item => item.quantity > 0))
    };

    const listItems = items.map((item: CartItem) =>
        <CartItemView item={item} key={item.id} onIncrement={incrementQuantity} onDecrement={decrementQuantity}/>
    );

    return (
        <div className="cart">
            <div className="cart-item-content">
                <span className="cart__title">Cart items</span>
                <div className="cart-headers">
                    <div>Title</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Total Price</div>
                    <div>Action</div>
                </div>
                <div>
                    {listItems}
                </div>
            </div>
            <div className="cart-total-content">
                <CartTotalView total={total}/>
            </div>
        </div>
    );
}
