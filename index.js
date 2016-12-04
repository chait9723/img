var express=require("express")
var app=express()
app.use('/exp1',express.static('Angularpage.html'))
app.use('/images',express.static(__dirname +'/images'))

app.get('/',function(request,response){
	response.send('hello world!')
})
app.get('/start',function(request,response){
	response.sendFile(__dirname+'/Angularpage.html')
	response.send(__dirname+'/images')
	console.log("start page has been hit.")
})
app.listen(5000,function(){
console.log("Node  app is running at localhost"+5000)
})
//app.listen(process.env.PORT || 5000, function(){
  //console.log('listening on', app.address().port);
//});		