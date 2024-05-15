import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useSearchParams } from "react-router-dom";
import APIs, { endpoints } from "../../configs/APIs";
import { CartContext } from "../../configs/Contexts";
import MySpinner from "../Commons/MySpinner";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [q, ] = useSearchParams();
    const [page, setPage] = useState(1);
    const [, dispatch] = useContext(CartContext);

    const loadProducts = async () => {
        setLoading(true);
        try {
            let url = `${endpoints['products']}?page=${page}`;

            let cateId = q.get('cateId');
            if (cateId) {
                url = `${url}&cateId=${cateId}`
                setPage(1);
            } else {
                let kw = q.get('kw');
                if (kw) {
                    url = `${url}&kw=${kw}`;
                    setPage(1);
                }
            }

            let res = await APIs.get(url);
            if (page === 1)
                setProducts(res.data);
            else if (page > 1)
                setProducts(current => {
                    return [...current, ...res.data];
                });
        } catch (ex) {
            console.error(ex);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        loadProducts();
    }, [q, page]);

    const loadMore = () => {
        if (!loading)
            setPage(page + 1);
    }

    const addToCart = (p) => {
        let cart = cookie.load("cart") || null;
        if (cart === null)
            cart = {};

        if (p.id in cart) {
            // có trong giỏ
            cart[p.id]["quantity"]++;
        } else {
            // chưa có trong giỏ
            cart[p.id] = {
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "quantity": 1
            }
        }

        cookie.save("cart", cart);
        dispatch({
            type: 'update-cart',
            payload: countCart()
        })
    }

    const countCart = () => {
        let count = 0;
        let cart = cookie.load("cart") || null;
        if (cart !== null) {
            for (let c of Object.values(cart))
                count += c.quantity;
        }

        return count;
    }

    return (
        <>
            {loading && <MySpinner />}
            <Row>
                {products.map(p => <Col key={p.id} md={3} xs={12} className='p-2'>
                    <Card>
                        <Card.Img variant="top" src={p.image} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>{p.price} VNĐ</Card.Text>
                            <Button variant="primary" className="m-1">Xem chi tiết</Button>
                            <Button variant="danger" className="m-1" onClick={() => addToCart(p)}>Đặt hàng</Button>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
            {loading && page > 1 && <MySpinner />}
            <div className="text-center mt-2">
                <Button variant="success" onClick={loadMore}>Xem thêm...</Button>
            </div>
        </>
    );
}

export default Home;