player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn -" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn -" + player2_name;

function send() 
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    quesstion_word = "<h5>"+ number1 +" x "+ number2 +"</h4>";
    input_box = "<br>Answer:<input type='text' id='input_checkbox'>";
    check_button = "<br><br><button onclick='check()' class='btn btn-info'>check</button>";
    row = quesstion_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
questionturn = "player1";
answerturn = "player2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    answer=getanswer.toLowerCase();
    console.log("answer in lower case"+ answer);
    if(answer == actual_answer){
     if(answerturn = "player1"){
        player1_score = player1_score + 1;
        update_score();
        document.getElementById("player1_score").innerHTML = player1_score;
     }
     else{
        player2_score = player2_score + 1;
        update_score();
        document.getElementById("player2_score").innerHTML = player2_score;
     }

    }
    else{
        if(answerturn=="player1"){
            player1_score = player1_score - 1;
            player2_score = player2_score + 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else
        {
            player1_score = player1_score + 1;
            player2_score = player2_score - 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(questionturn=="player1"){
        questionturn = "player2";
        document.getElementById("player_question").innerHTML="Question Turn-"+ player2_name;
    
    }
    else
    {
        questionturn="player1";
        document.getElementById("player_question").innerHTML="Question Turn-" + player1_name;
    }


    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player2_name;
    
    }
    else{
        answerturn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn-" + player1_name;
    }
    document.getElementById("output").innerHTML="";
}
function update_score(){
    localStorage.setItem("player1_score",player1_score);
    localStorage.setItem("player2_score",player2_score);
}
