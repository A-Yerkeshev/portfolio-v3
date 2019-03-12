Portfolio.directive('projectDirective', function() {
  var Directive = {};

  var template = $('#project-directive-tmpl').html();

  Directive.template = template;

  return Directive;
})
