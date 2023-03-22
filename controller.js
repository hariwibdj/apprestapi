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

//menambahkan data mahasiswa
exports.tambahMahasiswa = function(req, res){
    var npm = req.body.npm;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (npm,nama,jurusan) VALUES(?,?,?)',
    [npm,nama,jurusan],
    function(error,rows,files){
        if(error){
            console.log(error);
        }else{
            response.ok('berhasil menambahkan data mahasiswa',res)
        }
    });
};