let pigeonImg;
let raodImg;
let map1Img;
let map2Img;
let map3Img;
let map4Img;

function preload() {
  pigeonImg = loadImage('assets/pigeon.svg');
  raodImg = loadImage('assets/road.svg');
  map1Img = loadImage('assets/1.png');
  map2Img = loadImage('assets/2.png');
  map3Img = loadImage('assets/3.png');
  map4Img = loadImage('assets/4.png');
}

const menuWidth = 90;

const objects = [];
const maps = [];
const menu = [];

let selectedObject = null;
let clickedObject = null;
let state = 0;

let mapWidth;
let mapHeight;

let score;
let stage;
let reset;
let next;
let prev;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mapWidth = windowWidth - menuWidth;
  mapHeight = windowHeight;

  score = createP('');
  stage = createP('');
  next = createButton('مرحله بعد');
  next.mousePressed(function () {
    if (state < maps.length - 1) {
      state++;
    }
  });
  prev = createButton('مرحله قبل');
  prev.mousePressed(function () {
    if (state > 0) {
      state--;
    }
  });
  reset = createButton('🔄️')
  reset.style('font-size', '20px');
  reset.style('padding', '0px');
  reset.mousePressed(function () {
    maps[state].reset();
  });

  menu.push(new RoadItem(20, 20));
  menu.push(new PigeonItem(20, 100));
  selectedObject = menu[0];

  let map1 = new MapGraph(map1Img, 6, 0);
  map1.addNode(new GameObject(0.4527089072543618, 0.19914346895074947));
  map1.addNode(new GameObject(0.5840220385674931, 0.4004282655246253));
  map1.addNode(new GameObject(0.43526170798898073, 0.5792291220556746));
  map1.addNode(new GameObject(0.6069788797061524, 0.6488222698072805));
  map1.addEdge([0, 1]);
  map1.addEdge([0, 2]);
  map1.addEdge([0, 3]);
  map1.addEdge([1, 2]);
  map1.addEdge([1, 3]);
  map1.addEdge([2, 3]);
  maps.push(map1);

  // let map2 = new MapGraph(map2Img, 6, 0);
  // map2.addNode(new GameObject(0.4527089072543618, 0.19914346895074947));
  // map2.addNode(new GameObject(0.5840220385674931, 0.4004282655246253));
  // map2.addNode(new GameObject(0.43526170798898073, 0.5792291220556746));
  // map2.addNode(new GameObject(0.6069788797061524, 0.6488222698072805));
  // map2.addEdge([0, 2]);
  // map2.addEdge([2, 3]);
  // maps.push(map2);

  let map2_1 = new MapGraph(map2Img, 2, 4);
  map2_1.addNode(new GameObject(0.4527089072543618, 0.19914346895074947));
  map2_1.addNode(new GameObject(0.5840220385674931, 0.4004282655246253));
  map2_1.addNode(new GameObject(0.43526170798898073, 0.5792291220556746));
  map2_1.addNode(new GameObject(0.6069788797061524, 0.6488222698072805));
  map2_1.addEdge([0, 2]);
  map2_1.addEdge([2, 3]);
  maps.push(map2_1);

  let map3 = new MapGraph(map3Img, 3, 1);
  map3.addNode(new GameObject(0.4527089072543618, 0.19914346895074947));
  map3.addNode(new GameObject(0.5840220385674931, 0.4004282655246253));
  map3.addNode(new GameObject(0.43526170798898073, 0.5792291220556746));
  map3.addNode(new GameObject(0.6069788797061524, 0.6488222698072805));
  map3.addNode(new GameObject(0.4233241505968779, 0.3297644539614561));
  map3.addEdge([2, 3]);
  map3.addEdge([0, 4]);
  map3.addEdge([4, 1]);
  map3.addEdge([4, 2]);
  maps.push(map3);

  // let map4 = new MapGraph(map4Img, 6, 0);
  // map4.addNode(new GameObject(0.4527089072543618, 0.19914346895074947));
  // map4.addNode(new GameObject(0.5840220385674931, 0.4004282655246253));
  // map4.addNode(new GameObject(0.43526170798898073, 0.5792291220556746));
  // map4.addNode(new GameObject(0.6069788797061524, 0.6488222698072805));
  // map4.addNode(new GameObject(0.4233241505968779, 0.3297644539614561));
  // map4.addNode(new GameObject(0.5160697887970616, 0.6702355460385439));
  // map4.addEdge([0, 4]);
  // map4.addEdge([4, 1]);
  // map4.addEdge([4, 2]);
  // map4.addEdge([3, 5]);
  // map4.addEdge([2, 5]);
  // map4.addEdge([1, 5]);
  // maps.push(map4);

  // let map4_1 = new MapGraph(map4Img, 6, 9);
  // map4_1.addNode(new GameObject(0.4527089072543618, 0.19914346895074947));
  // map4_1.addNode(new GameObject(0.5840220385674931, 0.4004282655246253));
  // map4_1.addNode(new GameObject(0.43526170798898073, 0.5792291220556746));
  // map4_1.addNode(new GameObject(0.6069788797061524, 0.6488222698072805));
  // map4_1.addNode(new GameObject(0.3717816683831102, 0.3340471092077088));
  // map4_1.addNode(new GameObject(0.5160697887970616, 0.6702355460385439));
  // map4_1.addEdge([0, 4]);
  // map4_1.addEdge([4, 1]);
  // map4_1.addEdge([4, 2]);
  // map4_1.addEdge([3, 5]);
  // map4_1.addEdge([2, 5]);
  // map4_1.addEdge([1, 5]);
  // maps.push(map4_1);
}

function draw() {
  background(220);
  for (let i = 0; i < menu.length; i++) {
    menu[i].show();
  }
  for (let i = 0; i < objects.length; i++) {
    objects[i].show();
  }
  for (let i = 0; i < maps.length; i++) {
    maps[state].show();
  }
  if (selectedObject != null) {
    fill(0, 0, 0, 100);
    rect(mapWidth + selectedObject.x - 12, selectedObject.y - 12, 74, 74, 10);
    fill(0);
  }
  if (clickedObject != null) {
    if (selectedObject.toString() == "road") {
      stroke(0);
      strokeWeight(5);
    }
    if (selectedObject.toString() == "pigeon") {
      stroke(150, 150, 200)
      strokeWeight(5);
    }
    dashedLine(maps[state].nodes[clickedObject].getX(), maps[state].nodes[clickedObject].getY(), mouseX, mouseY);
    stroke(0);
    strokeWeight(1);
  }
  score.html("امتیاز: " + maps[state].getScore());
  score.position(mapWidth - 80, 0);
  stage.html("مرحله: " + (state + 1));
  stage.position(mapWidth - 170, 0);
  next.position(15, 15);
  prev.position(95, 15);
  reset.position(175, 15);
}

mousePressed = function () {
  for (let i = 0; i < maps[state].nodes.length; i++) {
    if (maps[state].nodes[i].isClicked(mouseX, mouseY)) {
      clickedObject = i;
      break;
    }
  }
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].isClicked(mouseX, mouseY)) {
      selectedObject = menu[i];
      break;
    }
  }
}

mouseReleased = function () {
  let releasedObject = null;
  for (let i = 0; i < maps[state].nodes.length; i++) {
    if (maps[state].nodes[i].isClicked(mouseX, mouseY)) {
      releasedObject = i
      break;
    }
  }
  if (clickedObject != null && releasedObject != null && clickedObject != releasedObject) {
    if (selectedObject.toString() == "road") {
      maps[state].addRoad([releasedObject, clickedObject]);
    }
    if (selectedObject.toString() == "pigeon") {
      maps[state].addPigeon([releasedObject, clickedObject]);
    }
  }
  clickedObject = null;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  mapWidth = windowWidth - 90;
  mapHeight = windowHeight;
}

class GameObject {
  constructor(x, y, disabled = false) {
    this.x = x;
    this.y = y;
    this.disabled = disabled;
  }
  isClicked(mouseX, mouseY) {
    return (mouseX > (this.x * mapWidth) - 40 && mouseX < (this.x * mapWidth) + 40 && mouseY > (this.y * mapHeight) - 40 && mouseY < (this.y * mapHeight) + 40);
  }
  show() {
    circle((this.x * mapWidth), (this.y * mapHeight), 80);
  }
  getX() {
    return this.x * mapWidth;
  }
  getY() {
    return this.y * mapHeight;
  }
}

class RoadItem extends GameObject {
  constructor(x, y, disabled = false) {
    super(x, y, disabled);
    this.img = raodImg;
  }
  isClicked(mouseX, mouseY) {
    return (mouseX > (mapWidth + this.x) && mouseX < (mapWidth + this.x) + 70 && mouseY > this.y && mouseY < this.y + 70);
  }
  show() {
    if (maps[state].showRoads) {
      text("x " + (maps[state].roadSize - maps[state].roads.length), mapWidth + this.x, this.y);
      image(this.img, mapWidth + this.x, this.y, 50, 50);
    }
  }
  toString() {
    return "road";
  }
}

class PigeonItem extends GameObject {
  constructor(x, y, disabled = false) {
    super(x, y, disabled);
    this.img = pigeonImg;
  }
  isClicked(mouseX, mouseY) {
    return (mouseX > (mapWidth + this.x) && mouseX < (mapWidth + this.x) + 70 && mouseY > this.y && mouseY < this.y + 70);
  }
  show() {
    if (maps[state].showPigeons) {
      text("x " + (maps[state].pigeonSize - maps[state].pigeons.length), mapWidth + this.x, this.y);
      image(this.img, mapWidth + this.x, this.y, 50, 50);
    }
  }
  toString() {
    return "pigeon";
  }
}

class MapGraph {
  constructor(img, roadSize = 6, pigeonSize = 6) {
    this.pigeons = [];
    this.roads = [];
    this.nodes = [];
    this.edges = [];
    this.img = img;
    this.roadSize = roadSize;
    this.pigeonSize = pigeonSize;
    this.showRoads = roadSize > 0;
    this.showPigeons = pigeonSize > 0;
  }
  addNode(node) {
    this.nodes.push(node);
  }

  addEdge(edge) {
    this.edges.push(edge);
  }

  findEdge(node1, node2) {
    for (let i = 0; i < this.edges.length; i++) {
      if ((this.edges[i][0] == node1 && this.edges[i][1] == node2) || (this.edges[i][0] == node2 && this.edges[i][1] == node1)) {
        return i;
      }
    }
    return -1;
  }

  findRoad(node1, node2) {
    for (let i = 0; i < this.roads.length; i++) {
      if ((this.roads[i][0] == node1 && this.roads[i][1] == node2) || (this.roads[i][0] == node2 && this.roads[i][1] == node1)) {
        return i;
      }
    }
    return -1;
  }

  findPigeon(node1, node2) {
    for (let i = 0; i < this.pigeons.length; i++) {
      if ((this.pigeons[i][0] == node1 && this.pigeons[i][1] == node2) || (this.pigeons[i][0] == node2 && this.pigeons[i][1] == node1)) {
        return i;
      }
    }
    return -1;
  }

  findSmallestNumberOfEdgesBetweenTwoNodes(node1, node2) {
    const visited = new Set();
    const queue = [[node1, 0]]; // Each element in the queue is [node, distance]

    while (queue.length > 0) {
      const [currentNode, distance] = queue.shift();

      if (currentNode === node2) {
        return distance;
      }

      if (!visited.has(currentNode)) {
        visited.add(currentNode);
        let neighbors = []
        for (let i = 0; i < this.roads.length; i++) {
          if (this.roads[i][0] == currentNode) {
            neighbors.push(this.roads[i][1]);
          }
          if (this.roads[i][1] == currentNode) {
            neighbors.push(this.roads[i][0]);
          }
        }
        for (let i = 0; i < this.pigeons.length; i++) {
          if (this.pigeons[i][0] == currentNode) {
            neighbors.push(this.pigeons[i][1]);
          }
          if (this.pigeons[i][1] == currentNode) {
            neighbors.push(this.pigeons[i][0]);
          }
        }

        for (const neighbor of neighbors) {
          queue.push([neighbor, distance + 1]);
        }
      }
    }
    return -1; // No path found
  }

  getScore() {
    let score = 0;
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        let distance = this.findSmallestNumberOfEdgesBetweenTwoNodes(i, j);
        if (distance == -1) continue;
        score += this.nodes.length - distance;
      }
    }
    return score;
  }

  addRoad(road) {
    if (this.roads.length >= this.roadSize) {
      return;
    }
    let fRoad = this.findRoad(road[0], road[1]);
    if (fRoad != -1) {
      return;
    }
    let fPigeon = this.findPigeon(road[0], road[1]);
    let fEdge = this.findEdge(road[0], road[1]);
    if (fPigeon != -1 && fEdge != -1) {
      this.pigeons.splice(fPigeon, 1);
      this.roads.push(road);
      return;
    }
    if (fEdge != -1) {
      this.roads.push(road);
      return;
    }
  }

  addPigeon(pigeon) {
    if (this.pigeons.length == this.pigeonSize) {
      return;
    }
    let fPigeon = this.findPigeon(pigeon[0], pigeon[1]);
    if (fPigeon != -1) {
      return;
    }
    let fRoad = this.findRoad(pigeon[0], pigeon[1]);
    if (fRoad != -1) {
      this.roads.splice(fRoad, 1);
      this.pigeons.push(pigeon);
      return;
    }
    this.pigeons.push(pigeon);
  }

  reset() {
    this.pigeons = [];
    this.roads = [];
  }

  show() {
    image(this.img, 0, 0, mapWidth, mapHeight);
    // for (let i = 0; i < this.nodes.length; i++) {
    //   this.nodes[i].show();
    // }
    // for (let i = 0; i < this.edges.length; i++) {
    //   line(this.nodes[this.edges[i][0]].getX(), this.nodes[this.edges[i][0]].getY(), this.nodes[this.edges[i][1]].getX(), this.nodes[this.edges[i][1]].getY());
    // }
    strokeWeight(10);
    for (let i = 0; i < this.roads.length; i++) {
      line(this.nodes[this.roads[i][0]].getX(), this.nodes[this.roads[i][0]].getY(), this.nodes[this.roads[i][1]].getX(), this.nodes[this.roads[i][1]].getY());
    }
    stroke(150, 150, 200)
    for (let i = 0; i < this.pigeons.length; i++) {
      line(this.nodes[this.pigeons[i][0]].getX(), this.nodes[this.pigeons[i][0]].getY(), this.nodes[this.pigeons[i][1]].getX(), this.nodes[this.pigeons[i][1]].getY());
    }
    strokeWeight(1);
    stroke(0);
  }
}

function dashedLine(x1, y1, x2, y2) {
  let x = x1;
  let y = y1;
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  let distance = sqrt(xDistance * xDistance + yDistance * yDistance);
  let xStep = xDistance / (distance / 10);
  let yStep = yDistance / (distance / 10);
  for (let i = 0; i < distance / 20; i++) {
    line(x, y, x + xStep, y + yStep);
    x += xStep * 2;
    y += yStep * 2;
  }
}