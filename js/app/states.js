jiant.onUiBound(todomvcJiant, function($, app) {

  var footer = app.views.footer,
      env = app.models.env;

  jiant.xl.nav(app, footer, "Ctl", "selected")();

  app.views.appView.propagate(env);

  app.states.active.start(function() {
    env.filterCompleted(false);
  });

  app.states.completed.start(function() {
    env.filterCompleted(true);
  });

  app.states[""].start(function() {
    env.filterCompleted(undefined);
  });

});