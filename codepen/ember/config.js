var config = {"lib":{"description":"qs.js.org quickstart template for Ember","config":{"group":"Frameworks","jsbin":{"url":"http://emberjs.jsbin.com/"}},"author":"Ember people","data":{"js":"App = Ember.Application.create();\n\nApp.Router.map(function (){\n  // put your routes here\n});\n\nApp.IndexRoute = Ember.Route.extend({\n  model: function (){\n    return ['red', 'yellow', 'blue'];\n  }\n});\n","html":"<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"utf-8\">\n    <title>Ember started with qs.js.org</title>\n    <link rel=\"stylesheet\" href=\"http://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.css\">\n    <script src=\"http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js\"></script>\n    <script src=\"http://builds.emberjs.com/tags/v1.13.5/ember-template-compiler.js\"></script>\n    <script src=\"http://builds.emberjs.com/tags/v1.13.5/ember.debug.js\"></script>\n</head>\n<body>\n\n<script type=\"text/x-handlebars\">\n    <h2>Welcome to Ember.js</h2>\n\n    {{outlet}}\n</script>\n\n<script type=\"text/x-handlebars\" data-template-name=\"index\">\n    <ul>\n        {{#each model as |item|}}\n        <li>{{item}}</li>\n        {{/each}}\n    </ul>\n</script>\n\n</body>\n</html>\n","css":""},"key":"ember"},"playground":{"key":"codepen","label":"Codepen"}};