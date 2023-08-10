var networkGrapgh = {
    vertexs: [
        {
            id: 1,
            degree: 9,
            neighborsDegree: 23,
            xPosition: 100,
            yPosition: 200
        },
        {
            id: 2,
            degree: 6,
            neighborsDegree: 23,
            xPosition: 200,
            yPosition: 180
        },
        {
            id: 3,
            degree: 12,
            neighborsDegree: 15,
            xPosition: 120,
            yPosition: 400
        },
        {
            id: 4,
            degree: 11,
            neighborsDegree: 30,
            xPosition: 200,
            yPosition: 300
        },
        {
            id: 5,
            degree: 8,
            neighborsDegree: 18,
            xPosition: 400,
            yPosition: 400
        },
        {
            id: 6,
            degree: 7,
            neighborsDegree: 19,
            xPosition: 250,
            yPosition: 400
        },
        {
            id: 7,
            degree: 10,
            neighborsDegree: 8,
            xPosition: 410,
            yPosition: 500
        },
        {
            id: 8,
            degree: 0,
            neighborsDegree: 11,
            xPosition: 320,
            yPosition: 50
        },
        {
            id: 9,
            degree: 4,
            neighborsDegree: 8,
            xPosition: 480,
            yPosition: 50
        },
        {
            id: 10,
            degree: 5,
            neighborsDegree: 5,
            xPosition: 320,
            yPosition: 180
        },
        {
            id: 11,
            degree: 2,
            neighborsDegree: 7,
            xPosition: 450,
            yPosition: 180
        },
        {
            id: 12,
            degree: 1,
            neighborsDegree: 9,
            xPosition: 550,
            yPosition: 100
        },
        {
            id: 13,
            degree: 3,
            neighborsDegree: 2,
            xPosition: 480,
            yPosition: 300
        }
    ],
    edges: [
        [1, 3], [1, 4], [2, 3], [2, 4], [4, 5], [4, 6], [5, 6], [5, 7], [8, 9], [8, 10], [8, 11], [9, 10], [9, 11], [9, 12], [10, 12], [11, 13] 
    ]
}

function setup() {
    createCanvas(600, 600);

    let form = document.createElement("form");
    let formLable = document.createElement("label");
    formLable.setAttribute("for", "mode");
    form.appendChild(formLable);
    let select = document.createElement("select");
    select.setAttribute("id", "mode");
    let option1 = document.createElement("option");
    option1.setAttribute("value", 1);
    option1.innerHTML = "degree of vertix";
    select.appendChild(option1);
    let option2 = document.createElement("option");
    option2.setAttribute("value", 2);
    option1.innerHTML = "degree of neighbors";
    select.appendChild(option2);
    let btn = document.createElement("button");
    btn.innerHTML = "choose game mode";


    btn.onclick = event => {
        event.preventDefault();
        if(select.selectedIndex === 1){
            networkGrapgh["vertexs"].sort((a, b) =>{
                return a.degree - b.degree;
            });
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (i+1) * 8, (i+1) * 8);
                createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 15);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                point1 = point2 = '';
                for (let j = 0; j < networkGrapgh.vertexs.length; j++){
                    if(networkGrapgh["edges"][i][0] === networkGrapgh["vertexs"][j]["id"]){
                        point1 = networkGrapgh["vertexs"][j];
                    }
                    else if(networkGrapgh["edges"][i][1] === networkGrapgh["vertexs"][j]["id"]){
                        point2 = networkGrapgh["vertexs"][j];
                    }
                }
                line(point1["xPosition"], point1["yPosition"], point2["xPosition"], point2["yPosition"]);
            }
        }
        else if(select.selectedIndex === 2){
            networkGrapgh["vertexs"].sort((a, b) =>{
                return a.neighborsDegree - b.neighborsDegree;
            });
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (i+1) * 8, (i+1) * 8);
                createP(networkGrapgh["vertexs"][i]["neighborsDegree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 15);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                point1 = point2 = '';
                for (let j = 0; j < networkGrapgh.vertexs.length; j++){
                    if(networkGrapgh["edges"][i][0] === networkGrapgh["vertexs"][j]["id"]){
                        point1 = networkGrapgh["vertexs"][j];
                    }
                    else if(networkGrapgh["edges"][i][1] === networkGrapgh["vertexs"][j]["id"]){
                        point2 = networkGrapgh["vertexs"][j];
                    }
                }
                line(point1["xPosition"], point1["yPosition"], point2["xPosition"], point2["yPosition"]);
            }
        }
    };


    form.appendChild(btn);
    document.getElementById("main").appendChild(form);
}
  
function draw() {
}