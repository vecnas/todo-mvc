$(function () {
  jiant.bindUi(todomvcJiant, true);
});

var todomvcJiant = (function (jiant) {

  var collection = jiant.collection,
      container = jiant.container,
      ctl = jiant.ctl,
      cssMarker = jiant.cssMarker,
      cssFlag = jiant.cssFlag,
      input = jiant.input,
      label = jiant.label;

  return {

    id: "todomvc-jiant",

    appPrefix: "_",

    states: {
      "": {},
      active: {},
      completed: {}
    },

    intl: {
      url: "js/intl.json",
      i18n: true,

      t: function(val) {},
      itemsLeft: function(count) {return this.t("itemsLeft", {count: count})}
    },

    //semaphores: {
    //  footerLoaded: {
    //    fire: function() {},
    //    on: function() {}
    //  }
    //},

    views: {

      appView: {
        completedCount: cssMarker,
        filterCompleted: cssMarker
      },

      header: {
        newTodoTitleInput: input
      },

      main: {
        batchToggleStateCtl: ctl,
        todoList: container
      },

      footer: {
        activeCount: label,
        clearCompletedCtl: ctl,

        //navigation
        Ctl: ctl,
        activeCtl: ctl,
        completedCtl: ctl
      }

    },

    templates: {
      tmTodo: {
        completed: cssFlag,
        deleteCtl: ctl,
        editCtl: ctl,
        editing: cssFlag,
        toggleStateCtl: ctl,
        titleInput: input,
        hiddenInEditMode: collection,
        title: label
      }
    },

    models: {

      env: {
        activeCount: function(val) {},
        completedCount: function(val) {},
        filterCompleted: function(val) {}
      },

      todo: {
        add: function(val) {},
        remove: function(val) {},
        on: function(val) {},

        all: function() {},
        listByCompleted: function(bool) {},
        countByCompleted: function(bool) {return this.listByCompleted(bool).length},

        completed: function(val) {},
        title: function(val) {},

        editing: function(val) {},
        ui: function(val) {}
      }
    }

  }
})(jiant);