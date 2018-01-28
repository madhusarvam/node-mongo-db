var mongoose = require("mongoose");

var Todo = mongoose.model("Todo",{
	text :{
		type : String,
		required : true,
		minlength : 1,
		trim : true
	},
	completed :{
		type : Boolean,
		default : false
	},
	completedAt :{
		type : Number,
		default : null
	}
});
/*
var newTodo = new Todo({
	text : "Hello"
});

newTodo.save().then((doc)=>{
	console.log("Saved Tode",doc);
},(e)=>{
	console.log("Unable to save",JSON.stringify(e,undefined,2));
});*/

module.exports = {Todo};