//create a http server using node js

const http =require('http');

const {
    create, read, update, del
}= require('./newModule.js')

const server =http.createServer(function(req,res){
       console.log(req.method, req.url);

       if(req.url =='/create' && req.method =='POST'){
        res.write(JSON.stringify(create(10)))
       } else if (req.url =='/read' && req.method =='GET '){
        res.write(JSON.stringify (read()))
       }else if (req.url == '/update'){
        res.write(JSON.stringify(update(0,100)))
       }else if (req.url =='/delete'){
        res.write(JSON.stringify(del(0)))
       }
       res.end();

       if(req.url =="/"){
        res.write("Request looks good");
       }else if(req.url =='/pizza'){
        res.write("Pizza is ready")
       }else{
        res.write("Request not supported")
       }
       res.end();
})

server.listen(5000, function(){
    console.log("Server running on part 5000")
});