var networkGrapgh = {
    vertexs: [
        {
            id: 2,
            degree: 1,
            xPosition: 50,
            yPosition: 50
        },
        {
            id: 3,
            degree: 1,
            xPosition: 450,
            yPosition: 50
        },
        {
            id: 4,
            degree: 2,
            xPosition: 200,
            yPosition: 100
        },
        {
            id: 5,
            degree: 3,
            xPosition: 70,
            yPosition: 140
        },
        {
            id: 1,
            degree: 2,
            xPosition: 300,
            yPosition: 30
        },
        {
            id: 9,
            degree: 2,
            xPosition: 450,
            yPosition: 200
        },
        {
            id: 7,
            degree: 2,
            xPosition: 250,
            yPosition: 240
        },
        {
            id: 11,
            degree: 3,
            xPosition: 480,
            yPosition: 480
        },
        {
            id: 6,
            degree: 1,
            xPosition: 70,
            yPosition: 450
        },
        {
            id: 10,
            degree: 1,
            xPosition: 300,
            yPosition: 380
        },
        {
            id: 8,
            degree: 3,
            xPosition: 200,
            yPosition: 510
        }
    ],
    edges: [
        [1, 3], [2, 4], [2, 5], [3, 2], [3, 4], [4, 1], [4, 5], [5, 1], [5, 7], [5, 9], [6, 8], [6, 11], [7, 5], [7, 8], [7, 11], [8, 11], [9, 7], [10, 8], [11, 6], [11, 10], [11, 9]
    ]
}

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
        ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (networkGrapgh["vertexs"][i]["degree"]) * 20, (networkGrapgh["vertexs"][i]["degree"]) * 20);
        createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 15);
    }
    for (let i = 0; i < networkGrapgh["edges"].length; i++){
        let center1X, center1Y, center2X, center2Y, r1, r2;
        for(let j = 0; j < networkGrapgh["vertexs"].length; j++){
            if (networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][0]){
                center1X = networkGrapgh["vertexs"][j]["xPosition"];
                center1Y = networkGrapgh["vertexs"][j]["yPosition"];
                r1 = 10 * networkGrapgh["vertexs"][j]["degree"];
            }
            else if(networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][1]){
                center2X = networkGrapgh["vertexs"][j]["xPosition"];
                center2Y = networkGrapgh["vertexs"][j]["yPosition"];
                r2 = 10 * networkGrapgh["vertexs"][j]["degree"];
            }
        }
        let slope = (center2Y - center1Y)/(center2X - center1X);
        let theta = Math.abs(Math.atan(slope));
        let cos = Math.abs(Math.cos(theta));
        let sin = Math.abs(Math.sin(theta));
        let point1X, point1Y, point2X, point2Y;
        if (center1Y > center2Y){
            point1Y = center1Y - r1 * sin;
            point2Y = center2Y + r2 * sin;
        }
        else{
            point1Y = center1Y + r1 * sin;
            point2Y = center2Y - r2 * sin;
        }
        if(center1X > center2X){
            point1X = center1X - r1 * cos;
            point2X = center2X + r2 * cos;
        }
        else{
            point1X = center1X + r1 * cos;
            point2X = center2X - r2 * cos;
        }
        line(point1X, point1Y, point2X, point2Y);
        if(center1Y > center2Y && center1X < center2X){
            line(point2X, point2Y, point2X + 10 * Math.cos(theta-60), point2Y - 10 * Math.sin(theta-60));
            line(point2X, point2Y, point2X + 10 * Math.cos(theta + 60), point2Y - 10 * Math.sin(theta + 60));
        }
        else if(center1Y > center2Y && center1X > center2X){
            line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y + 10 * Math.sin(theta -120));
            line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y + 10 * Math.sin(theta + 120));
        }
        else if(center1Y < center2Y && center1X > center2X){
            line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
            line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
        }
        else if(center1Y < center2Y && center1X < center2X){
            line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
            line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
        }
    }
}
  
function draw() {
    
}