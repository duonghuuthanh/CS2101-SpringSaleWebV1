import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import APIs, { endpoints } from "../../configs/APIs";

const Register = () => {
    const fields = [{
        "label": "Tên người dùng",
        "type": "text",
        "field": "firstName"
    }, {
        "label": "Họ và tên lót",
        "type": "text",
        "field": "lastName"
    }, {
        "label": "Số điện thoại",
        "type": "tel",
        "field": "phone"
    }, {
        "label": "Email",
        "type": "email",
        "field": "email"
    }, {
        "label": "Tên đăng nhập",
        "type": "text",
        "field": "username"
    }, {
        "label": "Mật khẩu",
        "type": "password",
        "field": "password"
    }, {
        "label": "Xác nhận mật khẩu",
        "type": "password",
        "field": "confirm"
    }];
    const [user, setUser] = useState({});
    const avatar = useRef();
    const nav = useNavigate();

    const change = (event, field) => {
        setUser(current => {
            return {...current, [field]: event.target.value}
        })
    }

    const register = async (e) => {
        e.preventDefault();

        let form = new FormData();
        for (let k in user)
            if (k !== 'confirm')
                form.append(k, user[k]);

        form.append('file', avatar.current.files[0]);

        try {
            let res = await APIs.post(endpoints['register'], form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (res.status === 201)
                nav("/login");
        } catch (ex) {
            console.error(ex);
        }
    }

    return (
        <>
            <h1 className="text-center text-info">ĐĂNG KÝ NGỜI DÙNG</h1>
            <Form onSubmit={register}>
                {fields.map(f => <React.Fragment key={f.field}>
                    <Form.Group className="mb-3" controlId={f.field}>
                        <Form.Control onChange={e => change(e, f.field)} value={user[f.field]} type={f.type} placeholder={f.label} />
                    </Form.Group>
                </React.Fragment>)}
                
                <Form.Control type="file" ref={avatar} accept=".png,.jpg" placeholder="Ảnh đại diện" />

                <Button variant="info" type="submit" className="mb-1 mt-1">Đăng ký</Button>
            </Form>
        </>
    );
}

export default Register;