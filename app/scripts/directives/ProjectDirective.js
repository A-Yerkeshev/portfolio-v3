Portfolio.directive('projectDirective', function() {
  var Directive = {};

  Directive.template = '<h1>{{project.name}}</h1><span>{{project.url}}</span>'

  return Directive;
})
