var express=require("express");
var app=express(); //產生專案物件 
   app.listen(3000,function(){
	console.log("伺服器已啟動在http://localhost:3000/");
   });
app.get("/AAA",function(req,res){  
	res.send("Hello World AAA")
   });  // 當使用者連接到伺服器根目錄"/"時做出回應，執行某function sent一些訊息出去