var Note = required("../models/Note");
var makeDate = required("../scripts/date");



module.exports = {
	get: function(data, cb) {
		Note.find({
			_headlineId: data._id
		}, cb);
	},
	save: function(data, cb) {
		var newNote = {
			_headlineId: data._id,
			date: makeDate(),
			noteText: data.noteText
		};

		Note.create(newNte, function(err,doc) {
			if (err) {
				console.log(err);
			}
			else {
				console.log(doc);
				cb(doc);
			}

		});
	},
	delete: function(date. cd){
		Note.remove({
			_id: data._id
		}, cb);
	}
};	
