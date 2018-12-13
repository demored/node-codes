//tcp 客户端

var sendData = 'hello world';
var net = require('net');
var client = new net.Socket();

client.setEncoding('utf8');
client.connect(8431, 'localhost', function(){
	console.log('已经连接到服务器');
	console.log('客户端发送数据：'+sendData);
	client.write(sendData);
	client.end('再见');

});

client.on('data', function(data){
	console.log('已接收服务端发送的数据：' + data);
});

client.on('end', function(){
	console.log('服务器已经关闭了连接');
});




