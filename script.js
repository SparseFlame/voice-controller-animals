//https://teachablemachine.withgoogle.com/models/t-Bth3ZQD/
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/t-Bth3ZQD/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        random_number_r = Math.floor(Math.random() *255) + 1;
        random_number_g = Math.floor(Math.random() *255) + 1;
        random_number_b = Math.floor(Math.random() *255) + 1;
        document.getElementById("result_label").innerHTML = "I hear a - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "percentage - " + (results[0].confidence*100).toFixed(4) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("alien1");

        if(results[0].label == "dog"){
            img1.src = "dog.jpg";
            }
        else if(results[0].label == "cat"){
            img1.src = "cat.jpg";
        }
        else{
            img1.src = "ear.png"
        }
    }
}