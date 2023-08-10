var networkGrapgh = {
    vertexs: [
        {
            id: 1,
            degree: 2,
            xPosition: 300,
            yPosition: 30
        },
        {
            id: 2,
            degree: 3,
            xPosition: 450,
            yPosition: 50
        },
        {
            id: 3,
            degree: 5,
            xPosition: 400,
            yPosition: 100
        },
        {
            id: 4,
            degree: 6,
            xPosition: 280,
            yPosition: 150
        },
        {
            id: 5,
            degree: 1,
            xPosition: 450,
            yPosition: 150
        },
        {
            id: 6,
            degree: 11,
            xPosition: 450,
            yPosition: 300
        },
        {
            id: 7,
            degree: 9,
            xPosition: 250,
            yPosition: 330
        },
        {
            id: 8,
            degree: 18,
            xPosition: 400,
            yPosition: 400
        },
        {
            id: 9,
            degree: 7,
            xPosition: 50,
            yPosition: 450
        },
        {
            id: 10,
            degree: 14,
            xPosition: 400,
            yPosition: 500
        },
        {
            id: 11,
            degree: 10,
            xPosition: 280,
            yPosition: 550
        }
    ],
    edges: [
        [2, 1], [2, 3], [1, 3], [1, 4], [3, 4], [3, 5], [5, 2], [4, 5], [4, 6], [6, 7], [7, 8], [7, 11], [8, 10], [9, 11], [10, 11], [11, 8] 
    ]
}

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
        ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (i+1) * 20, (i+1) * 20);
        createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 15);
    }
    for (let i = 0; i < networkGrapgh["edges"].length; i++){
        line(networkGrapgh["vertexs"][networkGrapgh["edges"][i][0] - 1]["xPosition"], networkGrapgh["vertexs"][networkGrapgh["edges"][i][0] - 1]["yPosition"], networkGrapgh["vertexs"][networkGrapgh["edges"][i][1] - 1]["xPosition"], networkGrapgh["vertexs"][networkGrapgh["edges"][i][1] - 1]["yPosition"]);
    }
}
  
function draw() {
    
}