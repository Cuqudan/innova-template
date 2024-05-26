import React from 'react'
import Styles from  "./ProductDash.module.scss"
const ProductDash = ({item, removetoCart}) => {
  return (
    <div className={Styles.card}>
    <img src={item.thumbnail} alt="photo" />
    <div className={Styles.carText}>
<h4>{item.title}</h4>
<p>{item.price}</p>
    </div>
    <div className={Styles.cardBtns}>
<button onClick={removetoCart}>Sil</button>
    </div>
</div>
  )
}

export default ProductDash