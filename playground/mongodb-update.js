//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

/*var obj = new ObjectID();
console.log(obj);*/


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log("Unable to connect mongo db server");
	}
	console.log("connected to mongodb db");

	/*db.collection("Todos").findOneAndUpdate({
		_id : new ObjectID("5a6ab1314a7ae9c8aa232ea5")
	},{
		$set :{
			completed : true
		}
	},{
		returnOriginal:false
	}).then((res)=>{
		console.log(res);
	})*/

	db.collection("Users").findOneAndUpdate({
		_id : new ObjectID("5a60c9edac951e0a6c117bae")
	},{
		$set :{
			name : "Madhu Sudhan S"
		},
		$inc :{
			age : 1
		}
	},{
		returnOriginal:false
	}).then((res)=>{
		console.log(res);
	})

	//db.close();
});