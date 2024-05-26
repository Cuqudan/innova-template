import React from 'react'
import Styles from  "./Productcard.module.scss"
const ProductCard = ({item, addtoCart, addtoWish}) => {
  return (
    <div className={Styles.card}>
        <img src={item.thumbnail} alt="photo" />
        <div className={Styles.carText}>
<h4>{item.title}</h4>
<p>{item.price}AZN</p>
        </div>
        <div className={Styles.cardBtns}>
<button onClick={addtoCart}>Satin al</button>
<button onClick={addtoWish}>Beyen</button>
        </div>
    </div>
  )
}

export default ProductCard