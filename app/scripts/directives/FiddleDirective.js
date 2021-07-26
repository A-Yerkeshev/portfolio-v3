"use strict";

Portfolio.directive('fiddleDirective', function() {
  const Directive = {};

  const template = $('#fiddle-directive-tmpl').html();

  Directive.template = template;

  return Directive;
});
