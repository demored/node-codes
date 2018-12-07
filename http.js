//node创建http服务器端

var net = require('net');
var server = net.createServer(function(){
	console.log('客户端与服务端的连接已建立');
	server.getConnections(function(err,count){
        console.log('当前存在%d个客户端连接', count);
        //设置最大连接数
        server.maxConnections = 2;
        console.log('TCP服务器的最大连接数为%d', server.maxConnections);
    })
})
server.listen(8765, 'localhost', function(){
	console.log('服务器开始监听');
	var address = server.address();
	console.log(address);
})

server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
		console.log('该端口已被占用');
	}
})

server.on('close',function(){
	console.log('服务器被关闭');
})