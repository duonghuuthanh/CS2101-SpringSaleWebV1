<%-- 
    Document   : index
    Created on : Mar 27, 2024, 1:11:45 PM
    Author     : admin
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<h1 class="text-center text-info mt-1">QUẢN TRỊ SẢN PHẨM</h1>
<div>
    <a class="btn btn-success" href="<c:url value="/products" />">Thêm sản phẩm</a>
</div>
<table class="table table-striped mt-1">
    <tr>
        <th></th>
        <th>Id</th>
        <th>Tên</th>
        <th>Giá</th>
        <th></th>
    </tr>
    <c:forEach items="${products}" var="p">
        <tr>
            <td> <img class="card-img-top" src="${p.image}" alt="${p.name}" style="width:200px;"></td>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${String.format("%,d", p.price)} VNĐ</td>
            <td>
                <c:url value="/api/products/${p.id}" var="url" />
                <a class="btn btn-info" href="<c:url value="/products/${p.id}" />">Cập nhật</a>
                <button onclick="deleteProduct('${url}',${p.id})" class="btn btn-danger">Xóa</button>
            </td>
        </tr>
    </c:forEach>
</table>

<script src="<c:url value="/js/script.js" />"></script>
