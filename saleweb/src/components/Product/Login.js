import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import cookie from "react-cookies";
import { Navigate, useNavigate } from "react-router-dom";
import APIs, { authApi, endpoints } from "../../configs/APIs";
import { MyDispatchContext, MyUserContext } from "../../configs/Contexts";

const Login = () => {
    const fields = [{
        "label": "Tên đăng nhập",
        "type": "text",
        "field": "username"
    }, {
        "label": "Mật khẩu",
        "type": "password",
        "field": "password"
    }];
    const [user, setUser] = useState({});
    const dispatch = useContext(MyDispatchContext);
    const currentUser = useContext(MyUserContext);
    const nav = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        try {
            let res = await APIs.post(endpoints['login'], {...user});
            cookie.save("token", res.data);

           setTimeout(async () => {
                let u = await authApi().get(endpoints['current-user']);
                dispatch({
                    "type": "login",
                    "payload": u.data
                });
                nav("/");
           }, 100);
        } catch (ex) {
            console.error(ex);
        }
    }

    const change = (event, field) => {
        setUser(current => {
            return {...current, [field]: event.target.value}
        })
    }

    if (currentUser !== null)
        return <Navigate  to="/" />

    return (
        <>
            <h1 className="text-center text-info">ĐĂNG NHẬP NGƯỜI DÙNG</h1>
            <Form onSubmit={login}>
                {fields.map(f => <React.Fragment key={f.field}>
                    <Form.Group className="mb-3" controlId={f.field}>
                        <Form.Control onChange={e => change(e, f.field)} value={user[f.field]} type={f.type} placeholder={f.label} />
                    </Form.Group>
                </React.Fragment>)}

                <Button variant="info" type="submit" className="mb-1 mt-1">Đăng nhập</Button>
            </Form>
        </>
    );
}

export default Login;