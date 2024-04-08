class Graph{
    constructor() {
        this.adjacencyList = {}
    }
    addNode(node) {
        if (!this.adjacencyList[node]) this.adjacencyList[node] = []
    }

    addConnection(node1,node2) {
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
    }

    removeConnection(node1,node2) {
        this.adjacencyList[node1] = this.adjacencyList[node1].filter(v => v !== node2)
        this.adjacencyList[node2] = this.adjacencyList[node2].filter(v => v !== node1)
    }
    
    removeNode(node){
        while(this.adjacencyList[node].length) {
            const adjacentNode = this.adjacencyList[node].pop()
            this.removeConnection(node, adjacentNode)
        }
        delete this.adjacencyList[node]
    }
}

let graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addConnection("A", "B");
graph.addConnection("A","C");
graph.addConnection("B", "E");
graph.addConnection("B", "D");
graph.addConnection("C", "D");
console.log(graph);

aaaaa