/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dht.services.impl;

import com.dht.pojo.Comment;
import com.dht.repositories.CommentRepository;
import com.dht.services.CommentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author admin
 */
@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private CommentRepository commentRepo;
    
    @Override
    public List<Comment> getComments(int productId) {
        return this.commentRepo.getComments(productId);
    }
}
