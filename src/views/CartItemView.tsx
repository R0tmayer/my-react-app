import CartItem from "../interfaces/CartItem";
import "../styles/cartitem.css";
import Button from "../uikit/Button.tsx";

export default function CartItemView({item, onIncrement, onDecrement}: {
    item: CartItem,
    onIncrement: (id: number) => void,
    onDecrement: (id: number) => void
}) {
    const totalPrice = item.price * item.quantity;

    return (
        <div className="cart-item">
            <div className="cart-item__title">{item.title}</div>
            <div>{item.quantity}</div>
            <div>${item.price}</div>
            <div>{totalPrice}</div>
            <div>
                <Button title="+" onClick={() => onIncrement(item.id)}/>
                <Button title="-" onClick={() => onDecrement(item.id)}/>
            </div>
        </div>
    );
}
