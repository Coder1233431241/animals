function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oaqz9lI7M/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResults);
}

var dog=0;
var cow=0;
var snake=0;
function gotResults(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    random_number_r=Math.floor(Math.random()*255)+1;
    random_number_g=Math.floor(Math.random()*255)+1;
    random_number_b=Math.floor(Math.random()*255)+1;

    document.getElementById("result_label").innerHTML="Detected voice is of - "+results[0].label;
    document.getElementById("result_count").innerHTML=' Detected dog - '+dog+' Detected cow - '+cow+' Detected snake - '+snake;
    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img=document.getElementById('animal_image')

    if(results[0].label=="bark"){
        img.src='dog.gif';
        dog=dog+1
    }
    else if(results[0].label=="moo"){
        img.src='another_scary_cow.gif';
        cow=cow+1
    }
    else if(results[0].label=="hiss"){
        img.src='dark-shadows.gif';
        snake=snake+1
    }
    else{
        img.src='giphy.gif';
    }
}
}