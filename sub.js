//node 订阅者
var RedisPort = 6379;
var RedisHost = "127.0.0.1";
var redis      = require("redis");

var rclient   = redis.createClient(RedisPort,RedisHost);
rclient.on("error", function (err) {
    console.log("Error(redis): " + err);
})
 
var io = require('socket.io').listen(8006);
var socketUsers = {};
io.sockets.on('connection', function(socket) {
    socket.emit('connect_success', {msg: socket.id});
    socket.on('login',function(data, fn){
         socket.emit('login_success', {msg: '登录成功'});
        //订阅
        rclient.subscribe("testChannel"); 

    });
    
    //收到消息后执行回调，message是redis发布的消息
    rclient.on('message', function(channel, message){
        console.log('收到订阅频道'+channel+'的消息:'+message);
        socket.emit('receive_msg', {msg: message});
        // socket.emit('login_success', {msg: '登录成功'});
    });
    
    //监听断线
    socket.on('disconnect',function() {
        console.log('-链接断开['+socket.id+']-');   
        delete socketUsers[socket.id];
    });  
});