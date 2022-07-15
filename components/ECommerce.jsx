import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import Paper from '@mui/material/Paper';
import { useStateContext } from '../context/StateContext';
import Button from '@mui/material/Button';
import { GrFormAdd }  from 'react-icons/gr';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import data from '../data/productData';
import styles from './styles/eCommerce.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const ECommerce = () => {
    const { onAdd, qty } = useStateContext();
    const { showCart, setShowCart } = useStateContext();


    const products = data;
    console.log(products);
    return (
        <div>
            <ScrollAnimation className={styles.skills_container} animateIn="animate__slideInDown" animateOnce="true">
                <Paper className={styles.product_paper} sx={{ backgroundColor: 'var(--very-light-green)', width: '75%', marginBottom:'6rem', marginLeft:'auto', marginRight: 'auto'}}>
                    <div className={styles.header_container}>
                        <h1 className='header_text mt-4 ml-6 font-bold'>Shop for My Skills</h1>
                        <Button className="mr-4 mt-4" onClick={(() => setShowCart(true))}>
                            <AiOutlineShoppingCart size={30}/>
                        </Button>
                    </div>
                    <div className={`${styles.product_container} flex flex-row`}>
                        <div className='flex flex-col mt-8 mb-8 ml-8 width_ninety'>
                            {products.slice(0,3)?.map((product) => 
                                <div className='flex flex-col' key={product.id}>
                                    <ProductCard key={product.id} product={product}/>
                                    <div className='flex flex-row mb-2 ml-auto mr-auto'>
                                        <p><b>Add:</b></p>
                                        <Button className="ml-2" onClick={() => onAdd(product, qty)} variant="contained">
                                            <GrFormAdd/>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col mt-8 mb-8 ml-8 width_ninety'>
                            {products.slice(3,7)?.map((product) => 
                                <div className='flex flex-col' key={product.id}>
                                    <ProductCard key={product.id} product={product}/>
                                    <div className='flex flex-row mb-2 ml-auto mr-auto'>
                                        <p><b>Add:</b></p>
                                        <Button className="ml-2" onClick={() => onAdd(product, qty)} variant="contained">
                                            <GrFormAdd/>
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>      
                </Paper>
            </ScrollAnimation>
            {showCart && 
                <Cart />
            }
        </div>
    )
}

export default ECommerce;