import React from 'react'
import Styles from  "./Productcard.module.scss"

const ProductWish = ({item, removetoWish}) => {
  return (
    <div className={Styles.card}>
        <img src={item.thumbnail} alt="photo" />
        <div className={Styles.carText}>
<h4>{item.title}</h4>
<p>{item.price}</p>
        </div>
        <div className={Styles.cardBtns}>
<button onClick={removetoWish}>Sil</button>
        </div>
    </div>
  )
}

export default ProductWish