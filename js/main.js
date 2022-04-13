(() => {
let LoopsPiece1 = document.querySelectorAll('.melody'),
LoopsPiece2 = document.querySelectorAll('.drum'),
LoopsPiece3 = document.querySelectorAll('.bass'),
dropZones = document.querySelectorAll (".Mixer"),
audioel1 = document.querySelector (".audio1"),
audioel2= document.querySelector (".audio2"),
audioel3 = document.querySelector (".audio3"),
play =document.querySelector(".play");
pause =document.querySelector(".pause");
repeat =document.querySelector(".repeat");



function dragStarted1(event) {
    console.log ('started dragging a piece');
    selecttrack1 = `audio/audio0.mp3`;
    console.log (selecttrack1)

}

function dragStarted2(event) {
    console.log ('started dragging a piece');
    selecttrack2 = `audio/audio2.mp3`;
    console.log (selecttrack2)

}

function dragStarted3(event) {
    console.log ('started dragging a piece');
    selecttrack3 = `audio/audio1.mp3`;
    console.log (selecttrack3)

}

function allowDragOver(event) {
    event.preventDefault();
    console.log ('dragging over me');
}


function allowDrop1(event) {
    event.preventDefault();
    console.log ('drop on me');
    audioel1.src = selecttrack1;
    audioel1.play();
}

function allowDrop2(event) {
    event.preventDefault();
    console.log ('drop on me');
    audioel2.src = selecttrack2;
    audioel2.play();
}

function allowDrop3(event) {
    event.preventDefault();
    console.log ('drop on me');
    audioel3.src = selecttrack3;
    audioel3.play();
}

function playtrack() {
    audioel1.play();
    audioel2.play();
    audioel3.play();
}

function pausetrack() {
    audioel1.pause();
    audioel2.pause();
    audioel3.pause();
}

function repeattrack() {
    audioel1.currentTime = 0;
    audioel2.currentTime = 0;
    audioel3.currentTime = 0;

    audioel1.play();
    audioel2.play();
    audioel3.play();
}
LoopsPiece1.forEach (piece => piece.addEventListener("dragstart", dragStarted1));
LoopsPiece2.forEach (piece => piece.addEventListener("dragstart", dragStarted2));
LoopsPiece3.forEach (piece => piece.addEventListener("dragstart", dragStarted3));
dropZones.forEach (zone => {
    zone.addEventListener("dragover", allowDragOver);
    zone.addEventListener("drop", allowDrop1);
    zone.addEventListener("drop", allowDrop2);
    zone.addEventListener("drop", allowDrop3);

play.addEventListener("click",playtrack);
pause.addEventListener("click",pausetrack);
repeat.addEventListener("click",repeattrack);
}); 
})();