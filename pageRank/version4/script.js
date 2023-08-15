var networkGrapgh = {
    vertexs: [
        {
            id: 1,
            degree: 1,
            neighborsDegree: 16,
            xPosition: 250,
            yPosition: 270,
            counter: 0
        },
        {
            id: 2,
            degree: 2,
            neighborsDegree: 12,
            xPosition: 50,
            yPosition: 50,
            counter: 0
        },
        {
            id: 3,
            degree: 3,
            neighborsDegree: 44,
            xPosition: 320,
            yPosition: 150,
            counter: 0
        },
        {
            id: 4,
            degree: 4,
            neighborsDegree: 15,
            xPosition: 550,
            yPosition: 80,
            counter: 0
        },
        {
            id: 5,
            degree: 5,
            neighborsDegree: 54,
            xPosition: 180,
            yPosition: 100,
            counter: 0
        },
        {
            id: 6,
            degree: 6,
            neighborsDegree: 8,
            xPosition: 50,
            yPosition: 200,
            counter: 0
        },
        {
            id: 7,
            degree: 7,
            neighborsDegree: 37,
            xPosition: 50,
            yPosition: 550,
            counter: 0
        },
        {
            id: 8,
            degree: 8,
            neighborsDegree: 15,
            xPosition: 400,
            yPosition: 50,
            counter: 0
        },
        {
            id: 9,
            degree: 9,
            neighborsDegree: 46,
            xPosition: 50,
            yPosition: 500,
            counter: 0
        },
        {
            id: 10,
            degree: 10,
            neighborsDegree: 48,
            xPosition: 150,
            yPosition: 550,
            counter: 0
        },
        {
            id: 11,
            degree: 11,
            neighborsDegree: 27,
            xPosition: 50,
            yPosition: 300,
            counter: 0
        },
        {
            id: 12,
            degree: 12,
            neighborsDegree: 26,
            xPosition: 300,
            yPosition: 50,
            counter: 0
        },
        {
            id: 13,
            degree: 13,
            neighborsDegree: 20,
            xPosition: 250,
            yPosition: 50,
            counter: 0
        },
        {
            id: 14,
            degree: 14,
            neighborsDegree: 28,
            xPosition: 250,
            yPosition: 450,
            counter: 0
        },
        {
            id: 15,
            degree: 15,
            neighborsDegree: 39,
            xPosition: 550,
            yPosition: 270,
            counter: 0
        },
        {
            id: 16,
            degree: 16,
            neighborsDegree: 78,
            xPosition: 550,
            yPosition: 400,
            counter: 0
        },
        {
            id: 17,
            degree: 17,
            neighborsDegree: 8,
            xPosition: 300,
            yPosition: 300,
            counter: 0
        },
        {
            id: 18,
            degree: 18,
            neighborsDegree: 51,
            xPosition: 200,
            yPosition: 400,
            counter: 0
        },
        {
            id: 19,
            degree: 19,
            neighborsDegree: 51,
            xPosition: 450,
            yPosition: 300,
            counter: 0
        },
        {
            id: 20,
            degree: 20,
            neighborsDegree: 19,
            xPosition: 450,
            yPosition: 200,
            counter: 0
        },
        {
            id: 21,
            degree: 21,
            neighborsDegree: 39,
            xPosition: 550,
            yPosition: 550,
            counter: 0
        },
        {
            id: 22,
            degree: 22,
            neighborsDegree: 47,
            xPosition: 300,
            yPosition: 550,
            counter: 0
        },
        {
            id: 23,
            degree: 23,
            neighborsDegree: 108,
            xPosition: 400,
            yPosition: 550,
            counter: 0
        },
        {
            id: 24,
            degree: 24,
            neighborsDegree: 51,
            xPosition: 370,
            yPosition: 400,
            counter: 0
        },
        {
            id: 25,
            degree: 25,
            neighborsDegree: 47,
            xPosition: 450,
            yPosition: 450,
            counter: 0
        }
    ],
    edges: [
        [1, 2], [1, 3], [1, 5], [2, 5], [2, 6], [3, 5], [3, 13], [4, 15], [5, 6], [5, 17], [6, 1], [7, 9], [7, 10], [7, 18], [8, 3], [9, 10], [9, 18], [10, 18], [11, 9], [12, 5], [12, 8], [12, 13], [13, 5], [14, 10], [16, 15], [16, 19], [16, 21], [17, 3], [18, 11], [18, 14], [19, 15], [19, 20], [21, 16], [21, 23], [22, 23], [22, 24], [23, 16], [23, 24], [23, 25], [24, 22], [25, 24]
    ]
}

var counter = 0;
var terminated = false;

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
    let option3 = document.createElement("option");
    option3.setAttribute("value", 3);
    option3.innerHTML = "page rank";
    select.appendChild(option3);
    let option4 = document.createElement("option");
    option4.setAttribute("value", 4);
    option4.innerHTML = "page rank with k factor";
    select.appendChild(option4);
    let btn = document.createElement("button");
    btn.innerHTML = "see graph";


    btn.onclick = event => {
        event.preventDefault();
        if(select.selectedIndex === 0){
            clear();
            terminated = true;
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            let inputK = document.getElementById("k");
            if(inputK != null){
                inputK.parentNode.removeChild(inputK);
            }
            let btn2 = document.getElementById("kBtn");
            if(btn2 != null){
                btn2.parentNode.removeChild(btn2);
            }
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"],  30, 30);
                createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] - 2);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y;
                let r1 = 15;
                let r2 = 15;
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
                else if(center1Y > center2Y && center1X >= center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y + 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y + 10 * Math.sin(theta + 120));
                }
                else if(center1X >= center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
                else if(center1X <= center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
        }
        else if(select.selectedIndex === 1){
            terminated = true;
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            let inputK = document.getElementById("k");
            if(inputK != null){
                inputK.parentNode.removeChild(inputK);
            }
            let btn2 = document.getElementById("kBtn");
            if(btn2 != null){
                btn2.parentNode.removeChild(btn2);
            }
            fill("white");
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], 30, 30);
                createP(networkGrapgh["vertexs"][i]["neighborsDegree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] - 5);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y, r1, r2;
                r1 = r2 = 15;
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
                else if(center1Y > center2Y && center1X >= center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y + 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y + 10 * Math.sin(theta + 120));
                }
                else if(center1X >= center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
                else if(center1X <= center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
        }
        else if(select.selectedIndex === 2){
            counter = 0;
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            let inputK = document.getElementById("k");
            if(inputK != null){
                inputK.parentNode.removeChild(inputK);
            }
            let btn2 = document.getElementById("kBtn");
            if(btn2 != null){
                btn2.parentNode.removeChild(btn2);
            }
            fill("white");
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"],  30, 30);
                createP(networkGrapgh["vertexs"][i]["counter"]).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] - 2);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y;
                let r1 = 15;
                let r2 = 15;
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
                else if(center1Y > center2Y && center1X >= center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y + 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y + 10 * Math.sin(theta + 120));
                }
                else if(center1X > center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
                else if(center1X <= center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
            terminated = false;
            setTimeout(initializePageRank, 1000);
        }
        else if(select.selectedIndex === 3){
            counter = 0;
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            let inputK = document.createElement("input");
            inputK.setAttribute("type", "text");
            inputK.setAttribute("id", "k");
            document.getElementById("main").appendChild(inputK);
            let btn2 = document.createElement("button");
            btn2.setAttribute("id", "kBtn");
            btn2.innerHTML = "set k value";
            document.getElementById("main").appendChild(btn2);
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"],  30, 30);
                createP(networkGrapgh["vertexs"][i]["counter"]).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] + 20);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y;
                let r1 = 15;
                let r2 = 15;
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
                else if(center1Y > center2Y && center1X >= center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y + 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y + 10 * Math.sin(theta + 120));
                }
                else if(center1X > center2X){
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X + 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
                else if(center1X <= center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
            btn2.onclick = (event) => {
                let kFactor = parseInt(inputK.value);
                terminated = false;
                initializePageRank(kFactor);
            };
        }
    };

    form.appendChild(select);
    form.appendChild(btn);
    document.getElementById("main").appendChild(form);
}
  
function draw() {
}

function initializePageRank(kFactor = ""){
    let selectedNode = newRandomNode();
    updateScores(selectedNode);
    if(kFactor === ""){
        setTimeout(() => pageRankLoop(selectedNode), 1000);
    }
    else{
        setTimeout(() => {pageRankLoop(selectedNode, kFactor)}, 1000);
    }
}

function pageRankLoop(selectedNode, kFactor = ""){
    resetColor(selectedNode);
    if(! terminated){
        if(kFactor === ""){
            selectedNode = selectRandomNeighbor(selectedNode);
            if(selectedNode != undefined){
                updateScores(selectedNode);
                setTimeout(()=>pageRankLoop(selectedNode), 1000);
            }
        }
        else if (kFactor != 1){
            selectedNode = selectRandomNeighbor(selectedNode);
            if(selectedNode != undefined){
                updateScores(selectedNode);
                setTimeout(()=>pageRankLoop(selectedNode, kFactor - 1), 1000);
            }
        }
        else{
            initializePageRank(parseInt(document.getElementById("k").value));
        }
    }
}

function newRandomNode(){
    return networkGrapgh["vertexs"][Math.floor(Math.random() * 25)];
}

function updateScores(selectedNode){
    setColor(selectedNode);
    selectedNode["counter"] += 1;
    counter += 1;
    let ps = document.getElementsByTagName("p");
    while(ps[0]){
        ps[0].parentNode.removeChild(ps[0]);
    }
    for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
        createP(networkGrapgh["vertexs"][i]["counter"] / counter).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] - 2);
    }
}


function setColor(selectedNode){
    fill("red");
    ellipse(selectedNode["xPosition"], selectedNode["yPosition"], 30, 30);
}

function resetColor(selectedNode){
    fill("white");
    ellipse(selectedNode["xPosition"], selectedNode["yPosition"], 30, 30);
    
}

function selectRandomNeighbor(selectedNode){
    let list = [];
    for(let i = 0; i < networkGrapgh["edges"].length; i++){
        if(networkGrapgh["edges"][i][0] === selectedNode["id"]){
            for(let j = 0; j < networkGrapgh["vertexs"].length; j++){
                if (networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][1]){
                    list.push(networkGrapgh["vertexs"][j]);
                    break;
                }
            }
        }
    }
    return list[Math.floor(Math.random() * (list.length))];
}