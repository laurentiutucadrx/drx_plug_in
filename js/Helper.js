/**
 * Created by laure on 5/20/2017.
 */
var Helper = {
    AllPoints : [],
    Point : function(X, Y, Label) {
        this.x = X;
        this.y = Y;
        this.label = Label;
    },

    DrawPoint : function(Point){
        AllPoints.push(Point);

        ctx.beginPath();
        ctx.moveTo(Point.x, Point.y);
        ctx.fillRect(Point.x, Point.y,5,5);
        ctx.font = "bold 12px Arial";
        ctx.fillText(Point.label, Point.x-10, Point.y-10);
        ctx.stroke();
    },

    Link2Points : function(PointA, PointB) {
        ctx.moveTo(PointA.x+2, PointA.y+2);
        ctx.lineTo(PointB.x+2, PointB.y+2);
        ctx.stroke();
    },

    GetMousePosition : function(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        }
    },

    MouseFoundPoint : function(x, y, cx, cy, radius) {
        var distsq = (x - cx) * (x - cx) + (y - cy) * (y - cy);
        return distsq <= radius * radius;
    }
};
