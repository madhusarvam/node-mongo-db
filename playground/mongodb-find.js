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

/*	db.collection('Todos').find({
		_id: new ObjectID("5a60cda5cd4605d291dd5195")
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));

	},(err)=>{
		console.log('Unable To fetch',err);
	});*/

	/*	db.collection('Todos').find().count().then((count)=>{
		console.log('Todos Count',count);
		 

	},(err)=>{
		console.log('Unable To fetch',err);
	});*/

	db.collection('Users').find({name : 'GGG'}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
console.log('Unable To fetch',err);
	});

	//db.close();
});