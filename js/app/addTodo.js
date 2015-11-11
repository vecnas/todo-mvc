jiant.onUiBound(todomvcJiant.id, function($, app) {

  var view = app.views.header;

  view.newTodoTitleInput.keyup(function(event) {
    if (event.keyCode == jiant.key.enter) {
      var title = $.trim(view.newTodoTitleInput.val());
      if (title.length > 0) {
        view.newTodoTitleInput.val("");
        app.models.todo.add({title: title, completed: false});
      }
    }
  });

});