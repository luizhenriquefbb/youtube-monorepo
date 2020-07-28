import React, { useCallback } from "react";
import Product from "../../models/product";

import "./productBox.css"
import { useChartContext } from "../../contexts/chartContext";

const ProductBox: React.FC<{product: Product}> = (props) => {

    const product = props.product;

    const {addProduct} = useChartContext();

    const handleAddToChart = useCallback((() => {
        if (addProduct(product)){
            alert('success');
        }
        else {
            alert('fail');
        }
    }), [addProduct, product])

    return <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image"/>
        <span className="product-name">{product.name}</span>
        <span className="product-price">{product.price}</span>
        <span className="product-description">{product.description}</span>

        <div className="actions">
            <button className="add" onClick={handleAddToChart}>Adiocionar ao carrinho</button>
        </div>
    </div>

}

export default ProductBox;