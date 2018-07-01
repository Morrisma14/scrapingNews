$(document).ready(function(){
var articleContainer = $(".article-container");

$(document).on("click", ".btn.delete", handleArticleDelete);
$(document).on("click", ".btn.notes", handleArticleNotes);
$(document).on("click", ".btn.save", handleNoteSave);
$(document).on("click", ".btn.note-delete", handleNoteDelete);

initPage();

function initPage() {
	articleContainer.empty();
	$.get("/api/headlines?saved=true").then(function(data){
		if (data && data.length) {
			renderArticle(data);
		}
		else {
			renderEmpty();
		}
	});
}

function renderArticles(articles) {
	var articlePanels = [];

	for (var i = 0; i < articles.length; i++) {
		articlePanels.push(createPage(articles[i]));
	}

	articleContainer.append(articlePanels);
}

function createPanel(article) {
	var panel = 
		$(["<div class='panel panel-default'>",
			"<div class='panel-heading'>",
			"<h3>",
			article.headline,
			"<a class='btn btn-danger delete'>",
			"Delete From Saved",
			"</a>",
			"<a class='btn btn-info notes'>Article Notes</a>"
			"</h3>",
			"</div>",
			"<div class='panel-body's'>",
			article summary,
			"</div>"
			"</div>"
		].join(""));

		panel.data("_id", article_id);

		return panel;
}

function renderEmpty(){
	var emptyAlert = 
		$(["<div class ='alert alert-warning text-center'>",
			"<h4>Uh Oh, Looks like we don't have any saved articles.</h4>"
			"</div>"
			"div class='panel panel-default'>"
			"div class='panel panel-heading text-center'>",
			"<h3>What Would You Like To Browse Available Articles?</h3>"
			"</div>"
			"<div class='panel-body text-center'>"
			"<h4><a href='/'>Browse Articles</a></h4>",
			"</div>"
			"</div>"
			].join(""));
		articleContainer.append(emptyAlert);
}

function renderNotesList(data){
	var notesToRender = [];
	var currentNote;
	if (!data.notes.length){
		currentNote = []
	}
}

var currentArticle = $(this.parents("panel").data();

$.get("/api/notes/" + currentArticle._id).then(function(data){
	var modalText = [
	"<div class='container-fluid text-center'>"
	"<h4>Notes For Article: ",
	currentArticle._id,
	"</h4>",
	"<hr />",
	"<ul class='list-group note-container'>",
	"</ul>",
	"<textarea placeholder='New Note' rows='4' col='60'></textare>",
	"<button class= 'btn btn-success save'>Save Note</button>"
	"</div>"
	].join("");

	bootbox.dialog({
		message: modelText,
		closeButton: true
	});
	var noteData = {
		_id: currentArticle._id,
		notes:data || []
	};

	$(".btn.save").data("article", noteData);

	renderNotesList(noteData);
});

}