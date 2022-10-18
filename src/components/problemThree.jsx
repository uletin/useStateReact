import { useState } from "react"

export default function ProblemThree() {
    const [products, setProducts] = useState([
        {id:1, title:"black sneakers", quantity:1},
        {id:2, title:"red t-shirt", quantity:1},
        {id:3, title:"blue jeans", quantity:1},
    ])

    const [selectedId, setSelectedId] = useState(null)
    const selectedProduct = products.find((p) => p.id === selectedId)

    console.log(selectedProduct)

    const increment = (id) => {
        setProducts((prev) => {
            return prev.map((products) => {
                if (products.id == id){
                    return {...products, quantity:products.quantity + 1}
                }
                else {
                    return products
                }
            })
        })
    }

    const handleChoose = (id) => {
        setSelectedId(id)
    }

    return(
        <div className="p-10 bg-slate-400 space-y-5">
            <p>Problem Three</p>
            <p>All Products</p>
            {
                products.map((product) => (
                    <div key={product.id}>
                        <span>
                            {product.title} <br></br>
                            <button onClick={() => handleChoose(product.id)}>Choose</button>
                        </span>
                        <div className="quantity">
                            <button>-</button>
                            <span>{product.quantity}</span>
                            <button onClick={() => increment(product.id)}>+</button>
                        </div>
                    </div>
                ))
            }

            <h4>Selected Product</h4>
            <span>{selectedProduct?.title}</span><br></br>
            <span>{selectedProduct?.quantity}</span>
        </div>
    )
}