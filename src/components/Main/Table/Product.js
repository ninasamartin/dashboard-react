import React from 'react';

function Product(props) {
    return (
        <tr>
            <td>{props.product}</td>
            <td>${props.price}</td>
            <td className="display-none">{props.category}</td>
            <td className="display-none">
                <ul>
                {
                    props.size.map((size,i) => {
                        return(
                            <li key={i}>{size.talle}</li>
                        )
                    })
                }
                </ul>
            </td>
        </tr>
    )        
}

export default Product;