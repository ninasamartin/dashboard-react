import React, {useState, useEffect} from 'react';
import Heading from './Heading';
import Row from './Row';
import Card from './Card';
import Article from './Article';
import Category from './Category';
import Table from './Table';
import './assets/style.css';
let url = "http://localhost:3001";

function Main() {
    const [products, setProducts] = useState({
        count: "",
        countByCategory: [],
        products: [{descripcion: "", imagen: ""}]
    });
    const [users, setUsers] = useState({
        count: "",
        users: [{}]
    });

    useEffect(() => {
        fetch(url + '/api/productos')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    useEffect(() => {
        fetch(url + '/api/usuarios')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return(
        <div className="container-fluid" id="main">
            <Heading/>
            <Row>
                <Card
                    type="primary"
                    title="Cantidad de productos"
                    quantity={products.count}
                    icon="fas fa-clipboard-list fa-2x text-gray-300"
                />
                <Card
                    type="warning"
                    title="Cantidad de usuarios"
                    quantity={users.count}
                    icon="fas fa-user-check fa-2x text-gray-300"
                />
                <Card
                    type="success"
                    title="Cantidad de categorias"
                    quantity={products.countByCategory.length}
                    icon="fas fa-tags fa-2x text-gray-300"
                />
            </Row>
            <Row>
                {/* <!-- Last Product in DB --> */}
                <Article title="Último producto cargado" large={6}>
                    <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '18rem'}} src={`${url}/img/uploads/productimage/${products.products[products.products.length-1].imagen}`} alt="producto"/>
                    </div>
                    <p>{products.products[products.products.length-1].descripcion}</p>
                    <a target="_blank" rel="nofollow" href={url + '/productos/detalle/' + products.products[products.products.length-1].id} id="productDetail">Ver detalle del producto</a>
                </Article>

                {/* <!-- Categories in DB --> */}
                <Article title="Categorías" large={6}>
                    <Row>
                        {
                            products.countByCategory.map((category, i) => {
                                return (<Category title={category.categoria} key={i}/>)
                            })
                        }
                    </Row>
                </Article>
            </Row>
            <Row>
                <Article title="Productos" large={12}>
                    <Table/>
                </Article>
            </Row>
        </div>
    );
}

export default Main;