

var Schema = required("../scripts/scrape");
var makeDate = required("../scripts/date");

var Headline = required("../models/Headline");

module.exports = {
	fetch: function(cb){
		scrape(function(data) {
			var articles = data;
			for (var i=0; i < articles.lengeth; i++) {
				articles[i].date = makeDate();
				articles[i].saved = false;
			}

			Headline.collection.insertMany(articles, {ordered: false}, function(eer, docs){
				cb(eer, docs);
			});
		});
	},
	delete: function(query. cd){
		Headline.remove(query,cb);
	},
	get: function(query, cb) {
		Headline.find(query)
		.sort({
			_id: -1
		})
		.exec(function(err, doc) {
			cb(doc);
		});
	},
	update: function(query, cb) {
		Headline.update(_id: query._id), {
			$set: query
		}, (), cb;
	}
	
}