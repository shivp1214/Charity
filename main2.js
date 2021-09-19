player1name=localStorage.getItem("player1key");
player2name=localStorage.getItem("player2key");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1name+" :";
document.getElementById("player2name").innerHTML=player2name+" :";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("player_question").innerHTML="Question turn - "+player1name;
document.getElementById("player_answer").innerHTML="Answer turn - "+player2name;


function Send(){
word=document.getElementById("word").value;
wordl=word.toLowerCase();
console.log(wordl);
charat1=wordl.charAt(1);
console.log(charat1);

divide=Math.floor(wordl.length/2); //rounds up the value
charat2=wordl.charAt(divide);
console.log(charat2);

minus=wordl.length-1;
charat3=wordl.charAt(minus);
console.log(charat3);

remove1=wordl.replace(charat1,"_");
remove2=remove1.replace(charat2,"_");
remove3=remove2.replace(charat3,"_");
console.log(remove3);


question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
var question_turn="player1";
var answer_turn="player2";
function check(){
    get_answer=document.getElementById("input").value;
    answer=get_answer.toLowerCase();
    console.log(answer);
    if(answer==wordl){
        if(answer_turn=="player1"){
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        }
        else{player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn - "+player2name;
    }
    else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn - "+player1name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player2name;
    }
    else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn - "+player1name;
    }
    document.getElementById("output").innerHTML="";
}