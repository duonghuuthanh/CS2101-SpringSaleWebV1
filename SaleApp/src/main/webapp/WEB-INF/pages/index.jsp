<%-- 
    Document   : index
    Created on : Mar 27, 2024, 1:11:45 PM
    Author     : admin
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>


<table class="table table-striped">
    <tr>
        <th></th>
        <th>Id</th>
        <th>Tên</th>
        <th>Gía</th>
        <th></th>
    </tr>
    <c:forEach items="${products}" var="p">
        <tr>
            <td> <img class="card-img-top" src="${p.image}" alt="${p.name}" style="width:300px;"></td>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.price} VNĐ</td>
            <td>
                <button class="btn btn-info">Cập nhật</button>
                <button class="btn btn-danger">Xóa</button>
            </td>
        </tr>
    </c:forEach>
</table>
