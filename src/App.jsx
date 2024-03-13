import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from "./nav_component"
import Banner from "./banner_component"
import Card from './card_component'
import Bottombanner from "./bottom_banner_component"
import Modal_component from "./modal_component"
import './App.css'
import { useState } from "react"

//This is the main app function
function App() {

//This is the Product Data
  let product = [
    {
      id: 1,
      title: "Fancy Product",
      pricetype: "range",
      price: "$40.00 - $80.00",
      stars: false,
      options: true,
      sale: false
    },
    {
      id: 2,
      title: "Special Item",
      pricetype: "striked",
      price1: "$20.00",
      price2: "$18.00",
      stars: true,
      options: false,
      sale: true
    },
    {
      id: 3,
      title: "Sale Item",
      pricetype: "striked",
      price1: "$50.00",
      price2: "$25.00",
      stars: false,
      options: false,
      sale: true
    },
    {
      id: 4,
      title: "Popular Item",
      pricetype: "single",
      price: "$40.00",
      stars: true,
      options: false,
      sale: false
    },
    {
      id: 5,
      title: "Sale Item",
      pricetype: "striked",
      price1: "$50.00",
      price2: "$25.00",
      stars: false,
      options: false,
      sale: true
    },
    {
      id: 6,
      title: "Fancy Product",
      pricetype: "range",
      price: "$40.00 - $80.00",
      stars: false,
      options: true,
      sale: false
    },
    {
      id: 7,
      title: "Special Item",
      pricetype: "striked",
      price1: "$20.00",
      price2: "$18.00",
      stars: true,
      options: false,
      sale: true
    },
    {
      id: 8,
      title: "Popular Item",
      pricetype: "single",
      price: "$40.00",
      stars: true,
      options: false,
      sale: false
    }
  ]

  //This is the state used for modal to display
  const [display, modaldisplay] = useState("none")

  //This is the state used for cart
  const [cart, setCart] = useState([])

  //This function is used to add products to cart
  let addtocart = (product) => {
    setCart([...cart, product])
  }

  //This function is used to remove products to cart
  let removefromcart = (product) => {
    const newcart = cart.filter((item) => item.id !== product.id)
    setCart(newcart)
  }

  //This function is used to change the modal to display 
  let changedisplay = () => {
    modaldisplay("block")
  }

  //This function are used to change the modal not to display
  let closedisplay = () => {
    modaldisplay("none")
  }

  return (
    <>
      <Navbar modaldisplay={changedisplay} cartcount={cart}></Navbar>
      <Banner></Banner>
      <div className="container" style={{ margin: "60px auto" }}>
        <div className="row">
          {
            product.map((item, index) => {
              return (
                <Card product={item} key={index} addtocart={addtocart} cart={cart} removefromcart={removefromcart} />
              )
            })
          }
        </div>
      </div>
      <Bottombanner />
      <Modal_component cart={cart} display={display} closedisplay={closedisplay} removefromcart={removefromcart} />
    </>

  );
}

export default App;
