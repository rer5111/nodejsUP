import './App.css'
import { useState} from "react";
import ProductCard from "./ProductCard"
import FormExample from './FormExample';

export default function App() {
  const [message, setMessage] = useState("Нажми на кнопку");
  // сейчас у на солнце это факт который записан в мессадж
  // setMessage - действие. скоро начнется дождь: установи это значение в мессадж.
  
  function handleClick() {
    setMessage("Кнопка была нажата!");
  }

  function Welcome(props) {
    return <h1>Привет, {props.name}</h1>
  }
  
  return (
    <div>
      <h1>Магазин ботинок</h1>
      <div class="CardHolder">
      {/* а я пишу комент потомучто я крутой */}
        <ProductCard title="Красные кросовки" cost="1000$" img="src/assets/chiboots.png" class="ProductCard"/>
        <ProductCard title="Грязный ботинок" cost="1$" img="src/assets/dirtinok.png" class="ProductCard"/>
        <ProductCard title="Шапокляки" cost="250$" img="src/assets/shapoklak.png" class="ProductCard"/>
        <ProductCard title="Большой ботинок" cost="2500$" img="src/assets/big.png" class="ProductCard"/>
      </div>
    </div>
  )
}
