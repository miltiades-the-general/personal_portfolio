import React from 'react';
import Paper from '@mui/material/Paper';



import { Icon } from '@iconify/react';
import styles from './styles/eCommerce.module.css';



const ProductCard = ({ product: { name, image, slug, price, id, ethereum }}) => {


  return (
    <div className='mr-auto ml-auto'>
      <Paper sx={{ backgroundColor: 'white', width: '150px', height: '221px', marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem' }}>
        <div className={styles.product_card}>
          <img 
            src={image}
            alt={slug}
            width={250}
            height={250}
            className={styles.product_image}/>
            <p className={styles.product_name}>{name}</p>
            <div className='flex flex-row mt-auto'>
              {ethereum && 
                <Icon icon="mdi:ethereum" color="#44BD09" width="17" height="17" />
              }
              {!ethereum && 
                <p className={styles.product_price}>$</p>
              }
                <p className={styles.product_price}>{price}</p>
            </div>
        </div>
      </Paper>
    </div>
  )
}

export default ProductCard