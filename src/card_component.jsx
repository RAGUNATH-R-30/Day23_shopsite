import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { FaStar } from "react-icons/fa";

//This is the reusable Card component where the products are displayed
function Card({ product, addtocart, cart, removefromcart }) {

    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="card" style={{ height: "350px", width: "225px", }}>
                    <div style={{ width: "100%", height: "150px", backgroundColor: "#dee1e6", borderRadius: "5px" }}>
                        {product.sale ? <div style={{ height: 25, width: 40, backgroundColor: "black", position: "absolute", top: "0.5rem", right: "0.5rem", borderRadius: "5px" }}>
                            <p style={{ textAlign: "center", color: "white", marginBottom: "15px", fontWeight: "400" }}>Sale</p>
                        </div> : null}

                        <div>
                            <p style={{ color: "grey", opacity: 0.4, textAlign: "center", marginTop: 60, fontSize: "25px" }}>400 x 350</p>
                        </div>
                    </div>

                    <div className="card-body" style={{ textAlign: "center" }}>
                        <h5 className="card-title"><b>{product.title}</b></h5>
                        {
                            product.stars ? <div>
                                <FaStar style={{ color: "gold", }} size={20} />
                                <FaStar style={{ color: "gold" }} size={20} />
                                <FaStar style={{ color: "gold" }} size={20} />
                                <FaStar style={{ color: "gold" }} size={20} />
                                <FaStar style={{ color: "gold" }} size={20} />

                            </div> : null
                        }
                        {
                            product.pricetype === "range" ? <div style={{ marginTop: 10 }}><span>{product.price}</span></div> : null
                        }
                        {
                            product.pricetype === "striked" ? <div style={{ marginTop: 10 }}><span style={{ textDecoration: "line-through" }}>{product.price1}</span> {product.price2}<span></span></div> : null
                        }
                        {
                            product.pricetype === "single" ? <div style={{ marginTop: 10 }}><span>{product.price}</span></div> : null
                        }
                    </div>

                    <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        {
                            cart.some((item) => item.id === product.id) ? <button type="button" className="btn btn-outline-dark" onClick={() => removefromcart(product)}>Remove from cart</button> :
                                <button type="button" className="btn btn-outline-dark" onClick={() => addtocart(product)}>Add to cart</button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;