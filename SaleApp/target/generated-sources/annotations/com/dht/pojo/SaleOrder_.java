package com.dht.pojo;

import com.dht.pojo.OrderDetail;
import com.dht.pojo.User;
import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SetAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.7.9.v20210604-rNA", date="2024-04-03T13:07:57")
@StaticMetamodel(SaleOrder.class)
public class SaleOrder_ { 

    public static volatile SingularAttribute<SaleOrder, Date> createdDate;
    public static volatile SingularAttribute<SaleOrder, Integer> id;
    public static volatile SingularAttribute<SaleOrder, User> userId;
    public static volatile SetAttribute<SaleOrder, OrderDetail> orderDetailSet;

}