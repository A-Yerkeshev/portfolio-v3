"use strict";

Portfolio.directive('projectDirective', function() {
  const Directive = {};

  const template = $('#project-directive-tmpl').html();

  Directive.template = template;

  return Directive;
});
