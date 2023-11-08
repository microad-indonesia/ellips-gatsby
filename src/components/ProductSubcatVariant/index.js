import React, { Component } from 'react'
import { withTrans } from '../../i18n/withTrans'
import LocalizedLink from '../LocalizedLink'
class ProductSubcatVariant extends Component {
    render() {
        const { t } = this.props

        const categoryProductsMap = this.props.data.map((catProducts) => {
            // console.log('Testing Wira  = ', { catProducts })
            return (
                <div
                    className="product-display-wrapper mont-regular"
                    key={catProducts.id}
                >
                    <div className="product-display-img">
                        <img
                            src={catProducts.image_thumbnail}
                            alt={`Ellips Haircare Products - ${catProducts.name}`}
                            className="img-fluid"
                        />
                    </div>
                    <div className="product-name mont-medium">
                        <h3>{catProducts.name}</h3>
                    </div>
                    <LocalizedLink
                        to={`/${this.props.parent}/${catProducts.slug}`}
                        className="btn btn-outline-primary btn-outline-primary__outline-black see-detail grow shrink"
                    >
                        {t('common.button')}
                    </LocalizedLink>
                </div>
            )
        })

        return <div className="product-display">{categoryProductsMap}</div>
    }
}

export default withTrans(ProductSubcatVariant)
