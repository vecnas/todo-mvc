jiant.onUiBound(todomvcJiant, function($, app) {

  var tm = app.templates.tmTodo;

  tm.customRenderer = function(todo, elem) {
    todo.completed.on(function(td, val) {
      elem.toggleStateCtl.prop("checked", todo.completed());
    });
    elem.toggleStateCtl.prop("checked", todo.completed());
    elem.toggleStateCtl.click(function() {
      todo.completed(! todo.completed());
    });

    elem.deleteCtl.click(function() {
      todo.remove();
    });

    elem.editCtl.dblclick(function() {
      todo.editing(true);
      elem.titleInput.val(todo.title());
      elem.titleInput.focus();
    });

    elem.titleInput.blur(function() {
      update(todo, elem.titleInput, jiant.key.enter);
    });

    elem.titleInput.keyup(function(event) {
      update(todo, elem.titleInput, event.keyCode);
    });
  };

  function update(todo, input, keyCode) {
    if (keyCode == jiant.key.escape) {
      todo.editing(false);
      input.val(todo.title());
    } else if (keyCode == jiant.key.enter) {
      var newTitle = $.trim(input.val());
      if (newTitle != "") {
        todo.editing(false);
        todo.title(newTitle);
      } else {
        app.models.todo.remove(todo);
      }
    }
  }

  jiant.xl.bindList(app.models.todo, app.views.main.todoList, app.templates.tmTodo, "ui", null, true)();

});