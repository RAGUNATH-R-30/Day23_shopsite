import "/node_modules/bootstrap/dist/css/bootstrap.css"

//This is the cartitems where the items added to the cart are displayed.
function Cartitem({ item, removefromcart }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{item.title}</div>
            </div>
            {
                item.pricetype === "range" ? <span className="badge text-bg-primary rounded-pill">{item.price}</span> : null
            }
            {
                item.pricetype === "striked" ? <span className="badge text-bg-primary rounded-pill">{item.price1}-{item.price2}</span> : null
            }
            {
                item.pricetype === "single" ? <span className="badge text-bg-primary rounded-pill">{item.price}</span> : null
            }
            <button onClick={() => removefromcart(item)} className="badge text-bg-danger rounded-pill" >X</button>
        </li>
    )
}
export default Cartitem;