'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("aplikasi Rest API berjalan",res);
};

//menampilkan data mahasiswa

exports.tampilsemuamahasiswa = function(req,res){
    connection.query('select * from mahasiswa',function(error,rows,fileds){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res)
        }
    });
};


//menampilkan data mahasiswa berdasarkan idnya
exports.tampilberdasarkanid = function(req,res){
    let id = req.params.id;
    connection.query('select * from mahasiswa where id = ?',[id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            }else{
                response.ok(rows,res);
            }
        });
}; 