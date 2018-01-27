const mongoose = require('mongoose');

const BucketListSchema = mongoose.Schema({
	title : {
		type: String,
		require: true
	},
	description : {
		type : String
	},
	category : {
		type : String,
		enum : ['low', 'medium', 'high']
	}
});

const BucketList = module.exports = mongoose.model('BucketList',BucketListSchema);

// function , We can also declare in another file

module.exports.getAllLists = (callback) => {
	BucketList.find(callback);
}

module.exports.addList = (newList, callback) => {
	newList.save(callback);
}

module.exports.removeListById = (id, callback) => {
	let query = {_id : id};
	BucketList.remove(query, callback);
}