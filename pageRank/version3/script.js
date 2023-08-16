var networkGrapgh = {
    vertexs: [
        {
            id: 1,
            degree: 1,
            neighborsDegree: 11,
            xPosition: 250,
            yPosition: 270,
            counter: 0,
            score: 0
        },
        {
            id: 2,
            degree: 1,
            neighborsDegree: 8,
            xPosition: 50,
            yPosition: 50,
            counter: 0,
            score: 0
        },
        {
            id: 3,
            degree: 3,
            neighborsDegree: 10,
            xPosition: 320,
            yPosition: 150,
            counter: 0,
            score: 0
        },
        {
            id: 4,
            degree: 0,
            neighborsDegree: 4,
            xPosition: 550,
            yPosition: 80,
            counter: 0,
            score: 0
        },
        {
            id: 5,
            degree: 5,
            neighborsDegree: 10,
            xPosition: 180,
            yPosition: 100,
            counter: 0,
            score: 0
        },
        {
            id: 6,
            degree: 2,
            neighborsDegree: 7,
            xPosition: 50,
            yPosition: 200,
            counter: 0,
            score: 0
        },
        {
            id: 7,
            degree: 0,
            neighborsDegree: 8,
            xPosition: 50,
            yPosition: 550,
            counter: 0,
            score: 0
        },
        {
            id: 8,
            degree: 1,
            neighborsDegree: 3,
            xPosition: 400,
            yPosition: 50,
            counter: 0,
            score: 0
        },
        {
            id: 9,
            degree: 2,
            neighborsDegree: 4,
            xPosition: 50,
            yPosition: 500,
            counter: 0,
            score: 0
        },
        {
            id: 10,
            degree: 3,
            neighborsDegree: 6,
            xPosition: 150,
            yPosition: 550,
            counter: 0,
            score: 0
        },
        {
            id: 11,
            degree: 1,
            neighborsDegree: 5,
            xPosition: 50,
            yPosition: 300,
            counter: 0,
            score: 0
        },
        {
            id: 12,
            degree: 0,
            neighborsDegree: 6,
            xPosition: 300,
            yPosition: 50,
            counter: 0,
            score: 0
        },
        {
            id: 13,
            degree: 2,
            neighborsDegree: 8,
            xPosition: 250,
            yPosition: 50,
            counter: 0,
            score: 0
        },
        {
            id: 14,
            degree: 1,
            neighborsDegree: 6,
            xPosition: 250,
            yPosition: 450,
            counter: 0,
            score: 0
        },
        {
            id: 15,
            degree: 3,
            neighborsDegree: 4,
            xPosition: 550,
            yPosition: 270,
            counter: 0,
            score: 0
        },
        {
            id: 16,
            degree: 2,
            neighborsDegree: 5,
            xPosition: 550,
            yPosition: 400,
            counter: 0,
            score: 0
        },
        {
            id: 17,
            degree: 1,
            neighborsDegree: 8,
            xPosition: 300,
            yPosition: 300,
            counter: 0,
            score: 0
        },
        {
            id: 18,
            degree: 3,
            neighborsDegree: 7,
            xPosition: 200,
            yPosition: 400,
            counter: 0,
            score: 0
        },
        {
            id: 19,
            degree: 1,
            neighborsDegree: 6,
            xPosition: 450,
            yPosition: 300,
            counter: 0,
            score: 0
        },
        {
            id: 20,
            degree: 1,
            neighborsDegree: 2,
            xPosition: 450,
            yPosition: 200,
            counter: 0,
            score: 0
        },
        {
            id: 21,
            degree: 0,
            neighborsDegree: 4,
            xPosition: 550,
            yPosition: 550,
            counter: 0,
            score: 0
        },
        {
            id: 22,
            degree: 1,
            neighborsDegree: 5,
            xPosition: 300,
            yPosition: 550,
            counter: 0,
            score: 0
        },
        {
            id: 23,
            degree: 2,
            neighborsDegree: 6,
            xPosition: 400,
            yPosition: 550,
            counter: 0,
            score: 0
        },
        {
            id: 24,
            degree: 3,
            neighborsDegree: 5,
            xPosition: 370,
            yPosition: 400,
            counter: 0,
            score: 0
        },
        {
            id: 25,
            degree: 2,
            neighborsDegree: 7,
            xPosition: 450,
            yPosition: 450,
            counter: 0,
            score: 0
        }
    ],
    edges: [
        [1, 2], [1, 3], [1, 5], [2, 5], [2, 6], [3, 5], [3, 13], [4, 15], [5, 17], [6, 1], [7, 9], [7, 10], [7, 18], [8, 3], [9, 10], [10, 18], [11, 9], [12, 5], [13, 5], [14, 10], [16, 19], [17, 3], [18, 11], [18, 14], [19, 15], [19, 20], [20, 4], [21, 16], [21, 23], [22, 23], [22, 24], [23, 16], [23, 24], [23, 25],[24, 22], [25, 24]
    ]
}

var scoreColors = ["#e6ffec", "#d1ffdd", "#c4ffd3", "#b6fcc7","#acfcc0", "#9dfcb5", "#89f5a4", "#79e895", "#69db86", "#5acc76", "#4cc269", "#3fb55d", "#37b055", "#2ea34b", "#269642", "#1e8a39", "#198233", "#137d2d", "#0d7527", "#086e21", "#03631b", "#015716", "#004010", "#00300c", "#001c07"];

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
    let btn = document.createElement("button");
    btn.innerHTML = "see graph";


    btn.onclick = event => {
        event.preventDefault();
        if(select.selectedIndex === 0){
            terminated = true;
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            let slider = document.getElementById("sliderDiv");
            if(slider != null){
                slider.parentNode.removeChild(slider);
            }
            fill("white");
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], (networkGrapgh["vertexs"][i]["degree"] + 1) * 17, (networkGrapgh["vertexs"][i]["degree"] + 1) * 17);
                createP(networkGrapgh["vertexs"][i]["degree"]).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] + 4);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y, r1, r2;
                for(let j = 0; j < networkGrapgh["vertexs"].length; j++){
                    if (networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][0]){
                        center1X = networkGrapgh["vertexs"][j]["xPosition"];
                        center1Y = networkGrapgh["vertexs"][j]["yPosition"];
                        r1 = (networkGrapgh["vertexs"][j]["degree"] + 1) * 8.5;
                    }
                    else if(networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][1]){
                        center2X = networkGrapgh["vertexs"][j]["xPosition"];
                        center2Y = networkGrapgh["vertexs"][j]["yPosition"];
                        r2 = (networkGrapgh["vertexs"][j]["degree"] + 1) * 8.5;
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
                else if(center1X < center2X){
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
            let slider = document.getElementById("sliderDiv");
            if(slider != null){
                slider.parentNode.removeChild(slider);
            }
            fill("white");
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], networkGrapgh["vertexs"][i]["neighborsDegree"] * 5, networkGrapgh["vertexs"][i]["neighborsDegree"] * 5);
                createP(networkGrapgh["vertexs"][i]["neighborsDegree"]).position(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"] + 5);
            }
            for (let i = 0; i < networkGrapgh["edges"].length; i++){
                let center1X, center1Y, center2X, center2Y, r1, r2;
                for(let j = 0; j < networkGrapgh["vertexs"].length; j++){
                    if (networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][0]){
                        center1X = networkGrapgh["vertexs"][j]["xPosition"];
                        center1Y = networkGrapgh["vertexs"][j]["yPosition"];
                        r1 = networkGrapgh["vertexs"][j]["neighborsDegree"] * 2.5;
                    }
                    else if(networkGrapgh["vertexs"][j]["id"] === networkGrapgh["edges"][i][1]){
                        center2X = networkGrapgh["vertexs"][j]["xPosition"];
                        center2Y = networkGrapgh["vertexs"][j]["yPosition"];
                        r2 = networkGrapgh["vertexs"][j]["neighborsDegree"] * 2.5;
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
                else if(center1X < center2X){
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta -120), point2Y - 10 * Math.sin(theta -120));
                    line(point2X, point2Y, point2X - 10 * Math.cos(theta + 120), point2Y - 10 * Math.sin(theta + 120));
                }
            }
        }
        else if(select.selectedIndex === 2){
            clear();
            let ps = document.getElementsByTagName("p");
            while(ps[0]){
                ps[0].parentNode.removeChild(ps[0]);
            }
            let oldSlider = document.getElementById("sliderDiv");
            if(oldSlider != null){
                oldSlider.parentNode.removeChild(oldSlider);
            }
            let sliderDiv = document.createElement("div");
            sliderDiv.setAttribute("id", "sliderDiv");
            let slider = document.createElement("input");
            slider.setAttribute("type", "range");
            slider.setAttribute("min", "1");
            slider.setAttribute("max", "10");
            slider.setAttribute("step", "1");
            slider.setAttribute("value", "1");
            slider.setAttribute("id", "slider");
            sliderDiv.appendChild(slider);
            let sliderP = document.createElement("p");
            sliderP.setAttribute("id", "rangeValue");
            sliderDiv.appendChild(sliderP);
            document.getElementById("main").appendChild(sliderDiv);
            for (let i = 0; i < networkGrapgh["vertexs"].length; i++){
                ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"],  30, 30);
                createP(networkGrapgh["vertexs"][i]["counter"]).position(networkGrapgh["vertexs"][i]["xPosition"] + 2, networkGrapgh["vertexs"][i]["yPosition"] + 40);
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
            counter = 0;
            terminated = false;
            setTimeout(initializePageRank, parseInt(document.getElementById("slider").value) * 1000);
        }
    };

    form.appendChild(select);
    form.appendChild(btn);
    document.getElementById("main").appendChild(form);
}
  
function draw() {
}

function initializePageRank(){
    let selectedNode = newRandomNode();
    updateScores(selectedNode);
    setTimeout(() => pageRankLoop(selectedNode), parseInt(document.getElementById("slider").value) * 1000);
}

function pageRankLoop(selectedNode){
    resetColor();
    if(! terminated){
        selectedNode = selectRandomNeighbor(selectedNode);
        if(selectedNode != undefined){
            updateScores(selectedNode);
            setTimeout(()=>pageRankLoop(selectedNode), parseInt(document.getElementById("slider").value) * 1000);
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
        networkGrapgh["vertexs"][i]["score"] = (networkGrapgh["vertexs"][i]["counter"] / counter).toFixed(2);
        createP(networkGrapgh["vertexs"][i]["score"]).position(networkGrapgh["vertexs"][i]["xPosition"] - 2, networkGrapgh["vertexs"][i]["yPosition"] + 30);
    }
    updateColors(selectedNode);
}


function setColor(selectedNode){
    fill("red");
    ellipse(selectedNode["xPosition"], selectedNode["yPosition"], 30, 30);
}

function resetColor(){
    fill("white");
    for(let i = 0; i < networkGrapgh["vertexs"].length; i++){
        ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], 30, 30);
    }
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

function updateColors(selectedNode){
    networkGrapgh["vertexs"].sort((a, b) =>{
        return a.score - b.score;
    });
    let colorIndex = 0;
    for(let i = 0; i < networkGrapgh["vertexs"].length; i++){
        if(i != 0 && networkGrapgh["vertexs"][i]["score"] > networkGrapgh["vertexs"][i - 1]["score"]){
            colorIndex += 1;
        }
        fill(scoreColors[colorIndex]);
        if(networkGrapgh["vertexs"][i] === selectedNode){
            ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], 20, 20);
        }
        else{
            ellipse(networkGrapgh["vertexs"][i]["xPosition"], networkGrapgh["vertexs"][i]["yPosition"], 30, 30);
        }
    }
}