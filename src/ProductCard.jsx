import { useState } from "react";

export default function ProductCard(props) {
    const [count, setCount] = useState(0);

    function removeFromCart(){
        if (count > 0){
            setCount(count-1);
        }
    }

    return (
        <div class="ProductCard">
            <h1>{props.title}</h1>
            <h2>{props.cost}</h2>
            <img src={props.img} />
            <p>В корзине: {count}</p>
            <button onClick={() => setCount(count + 1)}>Добавить в корзину</button>
            <button onClick={() => removeFromCart()}>Удалить из корзины</button>
        </div>
    )
}