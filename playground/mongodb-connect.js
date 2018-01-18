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

/*	var user= {name : 'Madhu', age:25}
	var {name} = user;
	console.log(name);*/

/*	db.collection('Todos').insertOne({
		text : "Something to do",
		completed : false

	},(err, result)=>{

		if(err)
		{
			return console.log("Unable to insert ToDO",err);
		}
		return console.log(JSON.stringify(result.ops,undefined,2));
	});*/


	/*db.collection('Users').insertOne({
		name : "Madhu Sudhan S",
		age : 25,
		location : "Bangalore"

	},(err, result)=>{

		if(err)
		{
			return console.log("Unable to insert User",err);
		}
		return console.log(result.ops[0]._id.getTimestamp());
	});*/

	db.close();
});