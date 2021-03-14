import React, {useState, useEffect} from 'react';
import Product from './Product';
import './assets/style.css';

let url = 'http://localhost:3001';

function Table() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(url + '/api/productos')
            .then(res => res.json())
            .then(data => setProducts(data.products))  
    }, []);

    return(
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th className="display-none">Categoria</th>
                            <th className="display-none">Talles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => {
                                return(
                                    <Product
                                        key={i}
                                        product={product.producto}
                                        price={product.precio}
                                        category={product.categoria}
                                        size={product.talles}
                                    />
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;