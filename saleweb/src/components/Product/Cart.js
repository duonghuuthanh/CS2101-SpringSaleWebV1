import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import cookie from "react-cookies";

const Cart = () => {
    const [cart, setCart] = useState(cookie.load('cart') || null);


    return (
        <>
        <h1 className="text-center text-info mt-1">GIỎ HÀNG</h1>
        {cart === null?<p>Không có sản phẩm trong giỏ!</p>:<>
        </>}
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tên sản phẩm</th>
                    <th>Đơn giá</th>
                    <th>Số lượng</th>
                    <th></th>
                </tr>
            </thead>
            
            <tbody>
            {Object.values(cart).map(c =>  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.name}</td>
                    <td>{c.price}</td>
                    <td>
                        <Form.Control value={c.quantity} />
                    </td>
                    <td>
                        <Button variant="danger">&times;</Button>
                    </td>
                </tr>)}    
               
               
            </tbody>
            </Table>

            <Button variant="success" className="mt-1">Thanh toán</Button>
        </>
    );
}

export default Cart;