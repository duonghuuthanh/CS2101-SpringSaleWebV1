/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dht.services;

import com.dht.pojo.Comment;
import java.util.List;

/**
 *
 * @author admin
 */
public interface CommentService {
    List<Comment> getComments(int productId);
}
