jiant.onUiBound(todomvcJiant, ["intl"], function($, app) {

  function updateView() {
    app.models.todo.all().length > 0 ? app.views.footer.show() : app.views.footer.hide();
  }

  app.views.footer.activeCount.customRenderer = function(env, elem, cnt) {
    elem.html(app.logic.intl.itemsLeft(cnt));
  };

  app.models.todo.on(function() {
    app.models.env.activeCount(app.models.todo.countByCompleted(false));
  });
  app.models.env.activeCount(app.models.todo.countByCompleted(false));

  app.models.todo.on(function() {
    app.models.env.completedCount(app.models.todo.countByCompleted(true));
  });
  app.models.env.completedCount(app.models.todo.countByCompleted(true));

  app.views.footer.clearCompletedCtl.click(function() {
    app.models.todo.listByCompleted(true).remove();
  });

  app.models.todo.on(updateView);

  app.views.footer.propagate(app.models.env, true);

});