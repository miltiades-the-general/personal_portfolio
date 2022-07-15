import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useStateContext } from '../context/StateContext';
import data from '../data/productData';

const Cart = () => {
    const cartRef = useRef();
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext();
    const item = data;

    return (
        <div className='cart-wrapper' ref={cartRef}>
        <div className='cart-container'>
            <button type="button" className='cart-heading' onClick={() => setShowCart(false)}>
            <AiOutlineLeft/>
            <span heading>
                Your Cart
            </span> 
            <span className='cart-num-items'>
                ({totalQuantities} Items)
            </span>
            </button>
            {cartItems.length < 1 && (
            <div className='empty-cart'>
                <AiOutlineShopping size={150}/>
                <h3>Your Shopping Bag is Empty</h3>
                <Link href="/">
                <button type="button" onClick={() => setShowCart(false)} className="btn">
                    Continue Shopping 
                </button>
                </Link>
            </div>
            )}
            <div className='product-container'>
            {cartItems.length >= 1 && cartItems.map((item) => (
                <div className='product' key={item._id}>
                <img src={item.image} className='cart-product-image'/>
                <div className='item-desc'>
                    <div className='flex top'>
                    <h5>{item.name}</h5>
                    <h4>${item.price}</h4>
                    </div>
                    <div className='flex bottom'>
                    <div>
                        <p className="quantity-desc">
                        <span className="minus" onClick={() => toggleCartItemQuantity(item.id, 'dec')}><AiOutlineMinus /></span>
                        <span className="num">{item.quantity}</span>
                        <span className="plus" onClick={() => toggleCartItemQuantity(item.id, 'inc')}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <button type="button" className='remove-item' onClick={() => onRemove(item)}>
                        <TiDeleteOutline/>
                    </button>
                    </div>
                </div>
                </div>
            ))}

            </div>
            {cartItems.length >= 1 && (
            <div className='cart-bottom'>
                <div className='total'>
                <h3>
                    Subtotal:
                </h3>
                <h3>
                    ${Math.round(totalPrice * 100) / 100}
                </h3>
                </div>
            </div>
            )}
        </div>

        </div>
    )
    }

export default Cart