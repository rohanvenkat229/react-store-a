import "./Products.css"
import { appContext } from "../App"
import { useContext } from "react"
export default function Products(){
    const {user,products,setCart,cart} = useContext(appContext)
    const addtoCart =(id)=>{
        setCart({...cart,[id]:1})
        
    }
   return( 
    <div>
        {user.name}  
        <div className="App-Products-row">
                      
            {
                products.map((value,index)=>(
                    <div className="App-Products-box"key={index}>
                        <h3>{value.name}</h3>
                        <h4>{value.price}</h4>
                        <button onClick={()=> addtoCart(value.id)}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    </div>
   )
}