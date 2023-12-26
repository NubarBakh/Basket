

import style from './basket.module.css'
import red from './red.png'
import { useReducer, useState} from "react";
import styles from './header.module.css'


function reducer (state,action){
    
    if(action.neet==='artir'){ return {...state, price: state.price+2}}
    else if(action.neet==='azalt'){ return {...state, price: state.price-2}}
    
}

export default function Basket (){
const [count,setcount]=useState(1)
const[state, dispatch]=useReducer(reducer, {price:2})
const [totalItems, setTotalItems] = useState(0); 

 
function artir(){

        setcount(count+1)
        dispatch({neet:'artir', neqeder: state.price}) 
 }


 function azalt(){
    if (count > 1) {
        dispatch({neet:'azalt', neqeder: state.price})
        setcount(count-1)} 
     }


 function add (){
    setTotalItems( count); 
 }
    

    return<>
              <div className={styles.mainn}>
                    <ul >
                        <h1>
                            E-commerce
                        </h1>
                        <li>
                            Home
                        </li>
                        <li>
                           Basket  {totalItems}
                        </li>
                    </ul>
                </div>

              <div  className={style.main}>
                <img src={red}></img>
                <p>Guba apples</p>
                <h2>{state.price}</h2>
                <div className={style.buttons} >
                    <button  onClick={azalt} className={style.button}>-</button>
                    <p>{count}</p>
                    <button onClick={artir} className={style.button}>+</button>
                </div>
                <button onClick={add}  className={style.button}>Add</button>
              </div>

                

    
    </>
}