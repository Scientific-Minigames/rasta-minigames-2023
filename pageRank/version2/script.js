var networkGrapgh = {
    vertexs: [
        {
            id: 1,
            degree: 1,
            neighborsDegree: 25,
            xPosition: 270,
            yPosition: 100
        },
        {
            id: 2,
            degree: 2,
            neighborsDegree: 12,
            xPosition: 240,
            yPosition: 50
        },
        {
            id: 3,
            degree: 3,
            neighborsDegree: 44,
            xPosition: 440,
            yPosition: 150
        },
        {
            id: 4,
            degree: 4,
            neighborsDegree: 23,
            xPosition: 550,
            yPosition: 200
        },
        {
            id: 5,
            degree: 5,
            neighborsDegree: 31,
            xPosition: 300,
            yPosition: 50
        },
        {
            id: 6,
            degree: 6,
            neighborsDegree: 8,
            xPosition: 170,
            yPosition: 120
        },
        {
            id: 7,
            degree: 7,
            neighborsDegree: 62,
            xPosition: 40,
            yPosition: 250
        },
        {
            id: 8,
            degree: 8,
            neighborsDegree: 53,
            xPosition: 450,
            yPosition: 230
        },
        {
            id: 9,
            degree: 9,
            neighborsDegree: 78,
            xPosition: 170,
            yPosition: 200
        },
        {
            id: 10,
            degree: 10,
            neighborsDegree: 59,
            xPosition: 70,
            yPosition: 350
        },
        {
            id: 11,
            degree: 11,
            neighborsDegree: 58,
            xPosition: 70,
            yPosition: 120
        },
        {
            id: 12,
            degree: 12,
            neighborsDegree: 26,
            xPosition: 540,
            yPosition: 100
        },
        {
            id: 13,
            degree: 13,
            neighborsDegree: 20,
            xPosition: 400,
            yPosition: 70
        },
        {
            id: 14,
            degree: 14,
            neighborsDegree: 55,
            xPosition: 120,
            yPosition: 500
        },
        {
            id: 15,
            degree: 15,
            neighborsDegree: 47,
            xPosition: 520,
            yPosition: 330
        },
        {
            id: 16,
            degree: 16,
            neighborsDegree: 34,
            xPosition: 500,
            yPosition: 490
        },
        {
            id: 17,
            degree: 17,
            neighborsDegree: 35,
            xPosition: 300,
            yPosition: 200
        },
        {
            id: 18,
            degree: 18,
            neighborsDegree: 51,
            xPosition: 200,
            yPosition: 380
        },
        {
            id: 19,
            degree: 19,
            neighborsDegree: 39,
            xPosition: 380,
            yPosition: 400
        }
    ],
    edges: [
        [1, 2], [1, 9], [2, 5], [2, 6], [3, 5], [3, 13], [4, 8], [4, 15], [5, 1], [6, 1], [7, 9], [7, 10], [7, 11], [7, 14], [7, 18], [8, 3], [8, 15], [9, 7], [9, 10], [9, 11], [9, 14], [9, 17], [9, 18], [10, 7], [10, 9], [10, 11], [10, 14], [10, 18], [11, 7], [11, 9], [11, 10], [11, 14], [11, 18], [12, 5], [12, 8], [12, 13], [13, 5], [14, 7], [14, 9], [14, 10], [14, 11], [14, 18], [16, 15], [16, 19], [17, 3], [18, 7], [18, 9], [18, 10], [18, 11], [18, 14], [18, 17], [19, 8], [19, 15] 
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
    option2.innerHTML = "degree of neighbors";
    select.appendChild(option2);
    let btn = document.createElement("button");
    btn.innerHTML = "choose game mode";


    btn.onclick = event => {
        event.preventDefault();
        if(select.selectedIndex === 0){
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], networkGrapgh["vertexs"][i]["id"] * 8, networkGrapgh["vertexs"][i]["id"] * 8);
                createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] - 2);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y;
                let r1 = networkGrapgh["edges"][i][0] * 4;
                let r2 = networkGrapgh["edges"][i][1] * 4;
                for(let j = 0; j < networkGrapgh["vertexs"].length; j++){
                    if (networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][0]){
                        center1X = networkGrapgh["vertexs"][j]["xPosition"];
                        center1Y = networkGrapgh["vertexs"][j]["yPosition"];
                    }
                    else if(networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][1]){
                        center2X = networkGrapgh["vertexs"][j]["xPosition"];
                        center2Y = networkGrapgh["vertexs"][j]["yPosition"];
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
                else if(center1X > center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
                else if(center1X < center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
        }
        else if(select.selectedIndex === 1){
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            networkGrapgh["vertexs"].sort((a, b) =>{
                return a.neighborsDegree - b.neighborsDegree;
            });
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (i+1) * 5, (i+1) * 5);
                createP(networkGrapgh["vertexs"][i]["neighborsDegree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 5);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y, r1, r2;
                for(let j = 0; j < networkGrapgh["vertexs"].length; j++){
                    if (networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][0]){
                        center1X = networkGrapgh["vertexs"][j]["xPosition"];
                        center1Y = networkGrapgh["vertexs"][j]["yPosition"];
                        r1 = j * 2.5;
                    }
                    else if(networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][1]){
                        center2X = networkGrapgh["vertexs"][j]["xPosition"];
                        center2Y = networkGrapgh["vertexs"][j]["yPosition"];
                        r2 = j * 2.5;
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
                else if(center1X > center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
                else if(center1X < center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
        }
    };

    form.appendChild(select);
    form.appendChild(btn);
    document.getElementById("main").appendChild(form);
}
  
function draw() {
}