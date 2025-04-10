import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import "./cartitem.css";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div className="allitem1">
        <div>
          <img src={item.image} width="200rem" />
        </div>

        <div className="price-item">
          <div className="desc1">{item.title} </div>
          <div className="desc2">{item.description} </div>

          <div className="price">
            <div className="price-icon">${item.price}</div>
            <div className="icon" onClick={removeFromCart}>
              <button>remove</button>
            </div>
          </div>
        </div>

        <div className="ajit">
          <div>
            <span className="ors">Order Status</span> :
            <div className="ors-answer">
              You can check your order status anytime. Updates are provided with
              date, time, and day.
            </div>
          </div>

          <div>
            <span className="ors">Refunds</span> :
            <div className="ors-answer">
              Refunds are processed within 7 days from the return date
            </div>
          </div>

          <div>
            <span className="ors">Stores Policy</span>:
            <div className="ors-answer">
              Our policies cover shipping, returns, payments, and privacy. All
              actions are time-stamped for clarity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
