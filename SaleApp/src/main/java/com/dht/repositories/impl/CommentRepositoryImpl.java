/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dht.repositories.impl;

import com.dht.pojo.Comment;
import com.dht.repositories.CommentRepository;
import java.util.List;
import javax.persistence.Query;
import org.hibernate.Session;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;

/**
 *
 * @author admin
 */
@Repository
public class CommentRepositoryImpl implements CommentRepository {
    private LocalSessionFactoryBean factory;

    @Override
    public List<Comment> getComments(int productId) {
        Session s = this.factory.getObject().getCurrentSession();
        Query query = s.createQuery("From Comment WHERE productI=:productId");
        query.setParameter("productId", productId);
        
        return query.getResultList();
    }
    
}
