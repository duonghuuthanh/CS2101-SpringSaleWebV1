import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row, Spinner } from "react-bootstrap";
import { Link, useNavigate, useOutlet } from "react-router-dom";
import APIs, { endpoints } from "../../configs/APIs";
import { CartContext, MyDispatchContext, MyUserContext } from "../../configs/Contexts";
import MySpinner from "./MySpinner";

const Header = () => {
    const [categories, setCategories] = useState(null);
    const [kw, setKw] = useState("");
    const nav = useNavigate();
    const [value, ] = useContext(CartContext);
    const user = useContext(MyUserContext);
    const dispatch = useContext(MyDispatchContext);

    const loadCates = async () => {
        try {
            let res = await APIs.get(endpoints['categories']);
            setCategories(res.data);
        } catch (ex) {
            console.error(ex);
        }
    }

    useEffect(() => {
        loadCates();
    }, []);

    const submit = (event) => {
        event.preventDefault();
        nav(`/?kw=${kw}`);
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">E-Commerce Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Trang chủ</Link>
                    <NavDropdown title="Danh mục" id="basic-nav-dropdown">
                        {categories===null?<MySpinner />:<>
                            {categories.map(c => {
                                let url = `/?cateId=${c.id}`;
                                return <Link to={url} className="nav-link" key={c.id}>{c.name}</Link>;
                            })}
                        </>}
                    </NavDropdown>
                    <Link to="/cart" className="nav-link">&#128722; <Badge bg="danger">{value}</Badge></Link>
                    {user !== null?<>
                        <Link to="/" className="nav-link text-danger">Xin chào {user.username}!</Link>
                        <Link onClick={() => dispatch({"type": "logout"})} className="nav-link text-danger">Đăng xuất</Link>
                    </>:<>
                        <Link to="/login" className="nav-link text-danger">Đăng nhập</Link>
                        <Link to="/register" className="nav-link text-info">Đăng ký</Link>
                    </>}
                  
                    
                </Nav>
                </Navbar.Collapse>

                <Form inline onSubmit={submit}>
                    <Row>
                    <Col xs="auto">
                        <Form.Control value={kw} onChange={e => setKw(e.target.value)}
                        type="text"
                        placeholder="Tìm sản phẩm.."
                        className=" mr-sm-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit">Tìm</Button>
                    </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
}

export default Header;