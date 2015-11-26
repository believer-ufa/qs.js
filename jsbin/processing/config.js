var config = {"lib":{"description":"qs.js.org quickstart template for Processing.js","config":{"group":"Drawing/Charting Libraries"},"author":"Kirill Cherkashin","data":{"js":"start(function (){\n\n  background(255, 200, 100);\n  rect(10, 10, 100, 100);\n\n}, {globals: true});\n","html":"<!DOCTYPE html>\n<html>\n<head>\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.4.1/processing-api.min.js\"></script>\n\n    <script>\n        function start(callback, config){\n            config = config || {};\n\n            function sketchProc(processing){\n                if (config.globals) {\n                    for (var i in processing) {\n                        if (typeof processing[i] === 'function') {\n                            window[i] = processing[i].bind(processing);\n                        }\n                    }\n                }\n\n                processing.draw = callback\n                processing.setup = function (){\n                    size(500, 500);\n                }\n            }\n\n            var canvas = document.getElementById(\"canvas\");\n            var p = new Processing(canvas, sketchProc);\n        }\n\n    </script>\n    <meta charset=\"utf-8\">\n    <title>Processing.js started with qs.js.org</title>\n</head>\n<body>\n<canvas id=\"canvas\"></canvas>\n</body>\n\n</html>\n","css":""},"key":"processing"},"playground":{"key":"jsbin","label":"JsBin"}};