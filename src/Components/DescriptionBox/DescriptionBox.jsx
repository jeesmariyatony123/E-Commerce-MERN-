import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform that facilitate buying and selling of products or services over the internet serves as a virtual marketplace where businesses and individ showcase their products, interact with customers, and conduc transactions without the need for a physical presence. E-com websites have gained immense popularity due to their conveni accessibility, and the global reach they offer.</p>
                <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any avallable variations (eg, sizes colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
        </div>
    )
}

export default DescriptionBox