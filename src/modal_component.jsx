import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Cartitem from "./cartitem";

// This is the modal component where the cart products are displayed
function Modal_component({ cart, display, closedisplay, removefromcart }) {
  return (
    <div className={`modal fade show`} id="exampleModal" tabIndex={"-1"} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: `${display}` }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Cart Items</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closedisplay}></button>
          </div>
          <div className="modal-body">
            <>
              <ol className="list-group list-group-numbered">
                
                {
                  cart.length == 0 ? (<p style={{ textAlign: "center", fontSize: 20 }}>Cart is Empty</p>) :
                    cart.map((item, index) => {
                      return <Cartitem item={item} key={index} removefromcart={removefromcart} />
                    })
                }

              </ol>
            </>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closedisplay}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Modal_component;