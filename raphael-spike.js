var r = Raphael(10, 50, 640, 480); // draw our canvas

coords = { x:[0, 1, 2, 3, 4, 5]
          , y:[0, 0.1, 0.7, 1.3, 2.7, 4.2]
        };

goalLine = { x:[0, 5]
          , y:[0, 5]
        };

r.linechart(5, 5, 640, 480, coords.x, coords.y, {shade: true, colors: ['green']});
r.linechart(5, 5, 640, 480, goalLine.x, goalLine.y, {colors: ['blue']});
