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

	//DeleteMany
	//db.collection('Todos').deleteMany({text:"Delete this data"}).then((result)=>console.log(result));
	/*db.collection("Users").deleteMany({name:"Madhu Sudhan S"}).then((result)=>{
		console.log(result);
	})*/

	//deleteOne  5a6ab44a4a7ae9c8aa232fab  _id: new ObjectID("5a60cda5cd4605d291dd5195")
    //db.collection('Todos').deleteOne({text:"Del 1"}).then((result)=>console.log(result));
   /* db.collection("Users").deleteOne({_id: new ObjectID("5a6ab44a4a7ae9c8aa232fab")}).then((result)=>{
    	console.log(result);
    })*/
	
	//findOneAndDelete
	//db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{console.log(result)});
	db.collection("UsersAA").findOneAndDelete({name:"YJKS"}).then((result)=>{
		console.log(result);
	})

	//db.close();
});