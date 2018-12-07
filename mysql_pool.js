//mysql 连接池


var mysql = require('mysql');
var pool = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'root',
	port:'3306',
	database:'test'
});

//从连接池中获得
pool.getConnection(function(err,conn){
		conn.query('select * from t1',function(err,rows,fields){
		// if(err){
		// 	console.log(err);
		// 	return false;
		// }else{
		// 	console.log('成功');
		// }
		console.log(rows);
		console.log(fields.length);
	})
})
