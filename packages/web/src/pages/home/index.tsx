import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
// import Product from "../../models/product";
import Product from "@barbeiro-monorepo/frontend-commons/src/models/product";
// import Product from "@frontend-commons/src/models/product";
// import Product from "../../../../frontend-commons/src/models/product";
import ProductBox from "../../components/productBox/ProductBox";
import { useChartContext } from "../../contexts/chartContext";
import Header from "../../components/header/header";
// import database from "../../services/database";
import database from "@barbeiro-monorepo/frontend-commons/src/services/database";


const Home: React.FC = () => {

    const [productsToShow, setProducts] = useState<Product[]>([]);

    const {chart,} = useChartContext();

    /** get products from DB */
    useEffect(() => {
        const getUsers = async () => {
            const productsQuery = await database.collection('products').get()

            const products: Product[] = [];
            productsQuery.forEach((el:any) => {
                products.push(new Product({ ...el.data() }))
            });

            setProducts(products);
            console.log('products', products);
        }

        getUsers();

    }, [])

    return <>
        <Header />

        <h1>Home</h1>
        <Container>
            <Row>
                <Col sm="12" md="6">
                    <h2>Produtos disponiveis</h2>

                    <Row>
                        {productsToShow.map((p,index) => {
                            return (
                                <Col xs={6} lg={4} key={index}>
                                    <ProductBox product={p} />
                                </Col>
                            )
                        })}
                    </Row>

                </Col>
                <Col sm="12" md="6">
                    <h2>Carrinho</h2>

                    <ul>
                        {chart.products.map((p, index) => {
                            return (
                                <li key={index}>
                                    <span>{p.quantity} x </span>
                                    <span>{p.product.name}</span>
                                </li>
                            )
                        })}
                    </ul>

                    <button>Finalizar compra</button>
                </Col>
            </Row>

        </Container>
    </>

}

export default Home;