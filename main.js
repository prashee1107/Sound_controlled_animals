function start(){
  navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/AUrgX7Iaj/model.json",modelReady);
}
function modelReady(){
     classifier.classify(gotResult);
}
function gotResult(error, results){
    console.error(error);
    }
