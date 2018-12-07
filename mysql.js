var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	port:'3306',
})

conn.connect(function(err){
	if(err){
		console.log( '连接mysql失败');
		return false;
	}

	console.log('连接mysql成功');
});



var sql = 'use test';
conn.query(sql,function(err,rows,fields){
		console.log(err);
		console.log(rows);
		console.log(fields);
})


conn.query('insert into t1 (ch) values ("新增的")',function(err,res){
	if(err){
		console.log('插入失败');
	}else{
		console.log('插入成功，主键为'+res.insertId);
	}
});

conn.query('select * from t1',function(err,rows,fields){
	if(err){
		console.log('查询失败');
		return false;
	}else{
		for(var i = 0 ; i < rows.length ; i++){
			console.log(rows[i].id);
		}
	}
})

conn.end(function(err){
	if(err){
		console.log('关闭失败');
		return false;
	}else{
		console.log('关闭成功');
	}
})
