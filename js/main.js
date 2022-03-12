(() => {
let LoopsPiece = document.querySelectorAll('#songsearch img');
dropZones = document.querySelectorAll (".Mixer");

function dragStarted(event) {
    console.log ('started dragging a piece');
    event.dataTransfer.setData('currentItem',event.target.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log ('dragging over me');
}
function allowDrop(event) {
    event.preventDefault();
    console.log ('drop on me');
    let droppedEl = event.dataTransfer.getData('currentItem');
    console.log(droppedEl);
    let loop = document.createElement("loop");
    if (event.currentTarget.children.length ===0){
    this.appendChild(document.querySelector(`${droppedEl}`)); 
    }
}



LoopsPiece.forEach (piece => piece.addEventListener("dragstart", dragStarted));
dropZones.forEach (zone => {
    zone.addEventListener("dragover", allowDragOver);
    zone.addEventListener("drop", allowDrop);
}); 
})();