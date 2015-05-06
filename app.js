var express = require('express');
var app = express();

app.use(express.cookieParser())
.use(express.session({secret: 'todosecretofthecentury'}))
.use(express.bodyParser())
.use(function(req, res, next) {
	if (typeof(re.session.todolist) == 'undefined') {
		req.session.todolist = [];
	}
	next();
})
.get('/todo', function(req, res) {
	res.render('todo.ejs', {todolist: req.session.todolist });
})
.post('/todo/ajouter', function(req, res) {
	if (req.body.newtodo != '') {
		req.session.todolist.push(req.body.newtodo);
	}
	res.redirect('/todo');
})
.get('/todo/supprimer/:id', function(req, res) {
	if (req.params.id != '') {
		req.session.todolist.splice(req.params.id, 1);
	}
	res.redirect('/todo');
})
.use(function(req, res, next) {
	res.redirect('/todo');
})
.listen(8080);
