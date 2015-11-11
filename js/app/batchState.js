jiant.onUiBound(todomvcJiant, function($, app) {

  var ctl = app.views.main.batchToggleStateCtl,
      m = app.models.todo;

  m.on(updateView);

  function updateView() {
    var total = m.all().length,
        completed = m.listByCompleted(true).length;
    total > 0 ? ctl.show() : ctl.hide();
    ctl.prop("checked", (total == completed) ? "checked" : null);
  }

  ctl.click(function() {
    app.models.todo.all().completed(ctl.prop("checked"));
  });

});