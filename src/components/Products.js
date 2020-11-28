import React, { Component } from 'react';


import axios from 'axios';

const api = axios.create({
    baseURL: `http://localhost:5039/`
})
const imageURL = 'http://localhost:5039/images/product/';

class Products extends Component {

    //to store the state
    state = {
        products: []
    }

    //runs when the component is initialized
    constructor() {
        super();
        this.getProducts();
    }
    //method to get the products
    getProducts = async () => {
        try {
            let data = await api.get('/product').then(({ data }) => data);
            this.setState({ products: data })
        } catch (err) {
            console.log(err);
        }
    }
    //method to render the view
    render() {
        return (
            <section className="page-section portfolio text-white bg-primary" id="products">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Products</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row">
                    {/* code to dynamically show the table */}
                    {this.state.products.map(product =>
                        <div className="col-md-6 col-lg-4 mb-5" key={product.id}>
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <p className="product-text">{product.title}</p>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white">
                                        {product.content}
                                    </div>
                                </div>
                                <img className="img-fluid" src={imageURL+product.productimage} alt="" caption="Hello" />
                            </div>
                        </div>
                    )}
                    {/* end of dynamic table code */}
                    </div>
                </div>
            </section>
        )
    }
}
export default Products;