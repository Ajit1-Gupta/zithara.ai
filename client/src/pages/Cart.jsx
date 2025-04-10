import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./cart.css";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="cart">
      {cart.length > 0 ? (
        <div className="map">
          <div className="cartitem">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="cartitem2">
            <div className="part1">
              <div className="part11">Your Cart</div>
              <div className="part111">Summary</div>
              <p>
                <span>
                  <div className="counti">Total Items: {cart.length}</div>
                </span>
              </p>
            </div>

            <div className="part2">
              <p className="part-amount">Total Amount: ${totalAmount}</p>
              <button className="buy">Buy</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="empty">Cart Empty</div>
          <Link to={"/home"}>
            <div className="shop-btn">
              <button>Shop Now</button>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
