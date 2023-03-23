// const { request } = require("express");

var connection = request('../koneksi');
var mysql = request('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk register
exports.registrasi = function(req,res){
    var post = {
        username:req.body.username,
        email:req.body.email,
        password:reg.body.password,
        role:reg.body.role,
        tanggaldaftar:new Date()
    }

    var query = "SELECT email FROM ?? WHER ??";
    var table = ["user","email",post.email];

    query = mysql.format(query,table);

    connection.query(query,function(error,rows){
        if(error){
            console.log(error);
        }else{
            if(rows.length ==0){
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.formar(query,table);
                connection.query(query,post,function(error,rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("Berhasil menambahkan data user");
                    }
                });
            }else{
                response.ok("email sudah terdaftar");
            }
        }
    })
}