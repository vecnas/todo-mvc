jiant.onUiBound(todomvcJiant, [], function($, app) {

  var prefix = "todos-jiant.";

  load();

  function load() {
    var count = localStorage[countKey()],
        idx = 0;
    if (count) {
      while (idx < count) {
        app.models.todo.add({title: localStorage[titleKey(idx)], completed: localStorage[completedKey(idx)] === "true"});
        idx++;
      }
    }
    app.models.todo.on(persist);
  }

  function persist() {
    var todos = app.models.todo.all(),
        prevCount = localStorage[countKey()];
    $.each(todos, function(idx, todo) {
      localStorage[titleKey(idx)] = todo.title();
      localStorage[completedKey(idx)] = todo.completed();
    });
    localStorage[countKey()] = todos.length;
    if (prevCount) {
      while (prevCount > todos.length) {
        localStorage.removeItem(titleKey(prevCount - 1));
        localStorage.removeItem(completedKey(prevCount - 1));
        prevCount--;
      }
    }
  }

  function titleKey(idx) {
    return prefix + idx + "title";
  }

  function completedKey(idx) {
    return prefix + idx + "completed";
  }

  function countKey() {
    return prefix + "count";
  }

});