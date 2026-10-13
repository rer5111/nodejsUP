import { useState } from "react";

export default function FormExample() {
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Отправлено: ${text}`);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange}/>
                <button type="submit">Добавить в корзину</button>
            </form>
        </div>
    )
}