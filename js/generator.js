/**
 * Created by laure on 5/21/2017.
 */
function randomPointsGenerator(startX, startY, finalX, finalY) {
    this.resultX = [startX];
    this.resultY = [startY];
    this.startY = startY;
    this.finalX = finalX;
    this.finalY = finalY;

    this.generate = function(isLeft) {
        var lastY = startY;
        var coefY = (this.startY < this.finalY) ? -1 : 1;
        while(true) {
            var coef = isLeft ? -1 : 1;
            var distX1 = getRandomInt(30, 40);
            var distY1 = getRandomInt(7,37);
            var distX2 = getRandomInt(30, 40);
            var distY2 = getRandomInt(7, 37);
            var len = this.resultX.length;
            var crtX = this.resultX[len-1];
            var x1 = crtX + coef * distX1;
            var x2 = crtX + coef * distX2;
            this.resultX.push(x1);
            this.resultX.push(x2);
            coef = getRandomInt(1,2) == 1 ? -1 : 1;
            var y1 = lastY + coef * distY1;
            this.resultY.push(y1);
            coef = -coef;
            var y2 = lastY + coef * distY2;
            this.resultY.push(y2);
            lastY = mean(y1, y2) - coefY * 5;
            if(Math.abs(x1 - this.finalX) < 45 || Math.abs(x2 - this.finalX) < 45){
                break;
            }
        }
        this.resultX.push(finalX);
        this.resultY.push(finalY);
        this.resultY.reverse();
        this.resultX.reverse();
    };
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mean(y1, y2) {
    return Math.floor((y1 + y2) / 2);
}
