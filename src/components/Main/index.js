import React from 'react';
import Heading from './Heading';
import Row from './Row';
import Card from './Card';
import Article from './Article';
import Category from './Category';

import productDummy from '../../assets/images/product_dummy.svg';

function Main() {
    return(
        <div className="container-fluid">
            <Heading/>
            <Row>
                {/* <!-- Amount of Products in DB --> */}
                <Card
                    type="primary"
                    title="Products in Data Base"
                    quantity="135"
                    icon="fas fa-clipboard-list fa-2x text-gray-300"
                />
                {/* <!-- $$$ of all products in DB --> */}
                <Card
                    type="success"
                    title="Amount in products"
                    quantity="$546.456"
                    icon="fas fa-dollar-sign fa-2x text-gray-300"
                />
                {/* <!-- Amount of users in DB --> */}
                <Card
                    type="warning"
                    title="Users quantity"
                    quantity="38"
                    icon="fas fa-user-check fa-2x text-gray-300"
                />
            </Row>
            <Row>
                {/* <!-- Last Product in DB --> */}
                <Article title="Last products in Data Base">
                    <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={productDummy} alt="product dummy"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                    <a target="_blank" rel="nofollow" href="/">View product detail</a>
                </Article>

                {/* <!-- Categories in DB --> */}
                <Article title="Categories in Data Base">
                    <Row>
                        <Category title="Category 01"/>
                        <Category title="Category 02"/>
                        <Category title="Category 03"/>
                        <Category title="Category 04"/>
                        <Category title="Category 05"/>
                        <Category title="Category 06"/>
                    </Row>
                </Article>
            </Row>
        </div>
    );
}

export default Main;