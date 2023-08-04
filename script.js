var networkGrapgh = {
    vertexs: [
        {
            id: 1,
            degree: 1,
            xPosition: 30,
            yPosition: 60
        },
        {
            id: 2,
            degree: 20,
            xPosition: 30,
            yPosition: 100
        },
        {
            id: 3,
            degree: 26,
            xPosition: 100,
            yPosition: 165
        },
        {
            id: 4,
            degree: 52,
            xPosition: 150,
            yPosition: 50
        }
    ],
    edges: [
        [1,2], [1,3], [1,4], [2,3] 
    ]
}

function setup() {
    createCanvas(500, 500);
    for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
        ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (i+1) * 20, (i+1) * 20);
        createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 15);
    }
    for (let i = 0; i < networkGrapgh["edges"].length; i++){
        line(networkGrapgh["vertexs"][networkGrapgh["edges"][i][0] - 1]["xPosition"] + (networkGrapgh["edges"][i][0] * 10), networkGrapgh["vertexs"][networkGrapgh["edges"][i][0] - 1]["yPosition"], networkGrapgh["vertexs"][networkGrapgh["edges"][i][1] - 1]["xPosition"] - (networkGrapgh["edges"][i][1] * 10), networkGrapgh["vertexs"][networkGrapgh["edges"][i][1] - 1]["yPosition"]);
    }
}
  
function draw() {
    
}