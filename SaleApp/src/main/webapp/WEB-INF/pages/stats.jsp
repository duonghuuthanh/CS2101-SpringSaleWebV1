<%-- 
    Document   : stats
    Created on : Apr 17, 2024, 1:25:56 PM
    Author     : admin
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<h1 class="text-center text-info mt-1">THÔNG KÊ BÁO CÁO</h1>

<div class="row">
    <div class="col-md-5 col-12">
        <table class="table table-striped">
            <tr>
                <th>Id</th>
                <th>Tên sản phẩm</th>
                <th>Doanh thu</th>
            </tr>
            <c:forEach items="${revenueByProducts}" var="p">
                <tr>
                    <td>${p[0]}</td>
                    <td>${p[1]}</td>
                    <td>${String.format("%,d", p[2])} VNĐ</td>
                </tr>
            </c:forEach>
        </table>
    </div>

    <div class="col-md-7 col-12">
        <canvas id="myChart"></canvas>
    </div>
</div>
<hr class="hr" />
<div class="row">
    <div class="col-md-5 col-12">
        <form>
            <div class="form-floating mb-3 mt-3">
                <input type="text" value="${param.year}" class="form-control" id="year" placeholder="Năm" name="year">
                <label for="year">Năm</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <select class="form-select" id="period" name="period">
                    <option value="MONTH" selected>Theo tháng</option>
                    <c:choose>
                        <c:when test="${param.period=='QUARTER'}">
                            <option value="QUARTER" selected>Theo quý</option>
                        </c:when>
                        <c:otherwise>
                            <option value="QUARTER">Theo quý</option>
                        </c:otherwise>
                    </c:choose>
                </select>
                <label for="period" class="form-label">Chọn thời gian:</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <button class="btn btn-success">Lọc</button>
            </div>
        </form>
        <%@ page import="java.util.Date" %>
        <jsp:useBean id="now" class="java.util.Date" />
        <c:if test="${param.year != null}">
            <div class="alert alert-info">
                <h4>Năm: ${param.year}</h4>
                <h4>Thời gian: ${param.period}</h4>
            </div>
        </c:if>
        <table class="table table-striped">
            <tr>
                <th>Thời gian</th>
                <th>Doanh thu</th>
            </tr>
            <c:forEach items="${revenueByPeriod}" var="p">
                <tr>
                    <td>${p[0]}</td>
                    <td>${String.format("%,d", p[1])} VNĐ</td>
                </tr>
            </c:forEach>
        </table>


    </div>

    <div class="col-md-7 col-12">
        <canvas id="myChart2"></canvas>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="<c:url value="js/script.js" />"></script>
<script>
    let labels = [];
    let data = [];
    <c:forEach items="${revenueByProducts}" var="p">
    labels.push('${p[1]}');
    data.push(${p[2]});
    </c:forEach>

    let label2 = [];
    let data2 = [];
    <c:forEach items="${revenueByPeriod}" var="p">
    label2.push(${p[0]});
    data2.push(${p[1]});
    </c:forEach>
    window.onload = function () {
        let ctx1 = document.getElementById("myChart");
        drawChartRevenue(ctx1, labels, data);

        let ctx2 = document.getElementById("myChart2");
        drawChartRevenue(ctx2, label2, data2);
    }
</script>