import React, { Component } from 'react'
import LocalizedLink from '../LocalizedLink'

class ProductVariantDisplay extends Component {
    render() {
        const variantMap = this.props.data.map((variant) => (
            <LocalizedLink
                to={`${this.props.parent}/${variant.slug}`}
                key={variant._id}
                className={this.props.active === variant._id ? 'active' : ''}
            >
                <div className="image-container ">
                    <img
                        src={variant.image_thumbnail}
                        alt={`Ellips Haircare Products - ${variant.name}`}
                        className="img-fluid"
                    />
                </div>
            </LocalizedLink>
        ))
        return <div className="variant-img">{variantMap}</div>
    }
}

export default ProductVariantDisplay
