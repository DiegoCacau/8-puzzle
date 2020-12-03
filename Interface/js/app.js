//var game = new Game('203156478');
var game = new Game();
Board.draw(game.state);

var boardDiv = document.getElementById('board');



let no0 = new Node({state: "263804175", parent: null, cost: 0, depth: 0})
let no1 = new Node({state: "263084175", parent: no0, cost: 1, depth: 1})
let no2 = new Node({state: "263184075", parent: no1, cost: 2, depth: 2})

console.log(no0)

let frontierList = [
new Node({state: "263840175", parent: no0, cost: 1, depth: 1}),
new Node({state: "203864175", parent: no0, cost: 1, depth: 1}),
new Node({state: "263874105", parent: no0, cost: 1, depth: 1}),
new Node({state: "063284175", parent: no1, cost: 2, depth: 2})]



let expandedNodes = {}

expandedNodes[263084175] = no0;
expandedNodes[263804175] = no1;


var visualizationData = Visualization.importData(
    expandedNodes,
    frontierList,
    no1,
    '#ffb366'
);

console.log("todos",visualizationData)


console.log("a",expandedNodes)
console.log("b",frontierList)
console.log("c",no2)
Visualization.draw(visualizationData);
