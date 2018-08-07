   const fs =require('fs');
   const http=require('http');
   const path=require('path');
   //记录网址根目录
   let rootPath=path.join(__dirname,'www');
   //创建服务器
   let seever=http.createServer((request,response)=>{
       //生成地址
        //   response.end('hello');
    let targetPath=path.join(rootPath,request.url);
    //判断路径是否存在
    //存在
    if(fs.existsSync(targetPath)){
        fs.stat(targetPath,(err,stat)=>{
             console.log(stat);
         });
        response.end('exist');
    }
    //不存在 404
    else{
        //只能设置头 不能设置 状态码
        response.statusCode=404;
        response.setHeader('content-type','text/html;charset=utf-8');
        response.end(` <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
        <html><head>
        <title>404 Not Found</title>
        </head><body>
        <h1>Not Found</h1>
        <p>你请求的${request.url} 不在服务器上哦,检查一下呗</p>
        </body></html>`)
    }



   });

   seever.listen(7979,'192.168.38.36',()=>{
       console.log('开启成功')
   });
