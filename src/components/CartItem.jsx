import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove  } from '../redux/slices/CartSlice';
import  Toast  from "react-hot-toast";
const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();
  const removeFromCart=()=>{
    dispatch(remove(item.id));
    Toast.success("Item Removed");
  }
  return (
    <div>
      <div>
        <div>
          <img src={item.image} alt="img" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <MdDelete/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
