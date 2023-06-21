import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add,remove  } from '../redux/slices/CartSlice';
import  Toast  from 'react-hot-toast';
const Product = ({post}) => {
    const [selected,setSelected] = useState(false);
    const cart = useSelector((state)=>state);
    const dispatch = useDispatch();

    const addToCart = ()=>{
        dispatch(add(post));
        Toast.success("Item added to Cart");
    }
    const removeFromCart = ()=>{
        dispatch(remove(post.id));
        Toast.success("Item removed from Cart");
    }
  return (
    <div>
        <div>
            <p>
                {
                    post.title
                }
            </p>
        </div>
        <div>
            <p>
                {
                    post.description
                }
            </p>
        </div>
        <div>
            <img src={post.image} alt="" />
        </div>
        <div>
            <p>
                {post.price}
            </p>
        </div>
        {
            cart.some((p)=>p.id===post.id)?
            (<button onClick={removeFromCart}>
                Remove Item
            </button>):
            (
                <button onClick={addToCart}>
                     Add to Cart
                </button>
            )
        }
        <button>
            {
                selected? <p>Remove Item</p>:<p>Add to Cart</p>
            }
        </button>
    </div>
  )
}

export default Product