let count_chelovekpriroda = 0;
let count_chelovektehnica = 0;
let count_chelovekznaksis = 0;
let count_chelovekhydoshobraz = 0;
let count_chelovekchelovek = 0;

var gar;

function check_answer(){

  let que1 = document.querySelector('input[name="que1"]:checked');
  let que2 = document.querySelector('input[name="que2"]:checked');
  let que3 = document.querySelector('input[name="que3"]:checked');
  let que4 = document.querySelector('input[name="que4"]:checked');
  let que5 = document.querySelector('input[name="que5"]:checked');
  let que6 = document.querySelector('input[name = "que6"]:checked');
  let que7 = document.querySelector('input[name = "que7"]:checked');
  let que8 = document.querySelector('input[name = "que8"]:checked');
  let que9 = document.querySelector('input[name = "que9"]:checked');
  let que10 = document.querySelector('input[name = "que10"]:checked');
  let que11= document.querySelector('input[name = "que11"]:checked');
  let que12 = document.querySelector('input[name = "que12"]:checked');
  let que13 = document.querySelector('input[name = "que13"]:checked');
  let que14 = document.querySelector('input[name = "que14"]:checked');
  let que15 = document.querySelector('input[name = "que15"]:checked');
  let que16 = document.querySelector('input[name = "que16"]:checked');
  let que17 = document.querySelector('input[name = "que17"]:checked');
  let que18 = document.querySelector('input[name = "que18"]:checked');
  let que19 = document.querySelector('input[name = "que19"]:checked');
  let que20 = document.querySelector('input[name = "que20"]:checked');
  if (que1 !=null){
    if(que1.value == "a"){
      count_chelovekpriroda +=1;
      console.log("1a");
    }else{
      count_chelovektehnica +=1;
      console.log("1b");
    }
  }else{
    console.log("В1")  
  }
    if (que2 !=null){
      if(que2.value == "a"){
        count_chelovekchelovek +=1;
        console.log("2a");
      }else{
        count_chelovekznaksis +=1;
        console.log("2b");
      }
    }else{
    console.log("В2")  
  }
    if (que3 !=null){
      if(que3.value == "a"){
      count_chelovekhydoshobraz +=1;
      console.log("3a");
    }else{
      count_chelovekpriroda +=1;
      console.log("3b");
    }
  }else{
    console.log("В3")  
  }
    if (que4 !=null){
    if(que4.value == "a"){
      count_chelovektehnica +=1;
      console.log("4a");
    }else{
      count_chelovekchelovek +=1;
      console.log("4b");
    }
  }else{
    console.log("В4")  
  }
    if (que5 !=null){
    if(que5.value == "a"){
      count_chelovekznaksis +=1;
    }else{
      count_chelovekhydoshobraz +=1;
    }
  }else{
    console.log("В5")  
  }
    if (que6 !=null){
    if(que6.value == "a"){
      count_chelovekpriroda +=1;
    }else{
      count_chelovekchelovek +=1;
    }
  }else{
    console.log("В6")  
  }
    if (que7 !=null){
    if(que7.value == "a"){
      count_chelovekhydoshobraz +=1;
    }else{
      count_chelovektehnica +=1;
    }
  }else{
    console.log("В7")  
  }
  if (que8 !=null){
    if(que8.value == "a"){
      count_chelovekchelovek +=1;
    }else{
      count_chelovekhydoshobraz +=1;
    }
  }else{
    console.log("В8")  
  }
  if (que9 !=null){
    if(que9.value == "a"){
      count_chelovektehnica +=1;
    }else{
      count_chelovekznaksis +=1;
    }
  }else{
    console.log("В9")  
  }
  if (que10 !=null){
    if(que10.value == "a"){
      count_chelovekpriroda  +=1;
    }else{
      count_chelovekznaksis +=1;
    }
  }else{
    console.log("В10")  
  }
  if (que11 !=null){
    if(que11.value == "a"){
      count_chelovekpriroda +=1;
    }else{
      count_chelovektehnica +=1;
    }
  }else{
    console.log("В11")  
  }
  if (que12 !=null){
    if(que12.value == "a"){
      count_chelovekchelovek +=1;
    }else{
      count_chelovekznaksis +=1;
    }
  }else{
    console.log("В12")  
  }
  if (que13 !=null){
    if(que13.value == "a"){
      count_chelovekhydoshobraz +=1;
    }else{
      count_chelovekpriroda +=1;
    }
  }else{
    console.log("В13")  
  }
  if (que14 !=null){
    if(que14.value == "a"){
      count_chelovektehnica +=1;
    }else{
      count_chelovekchelovek +=1;
    }
  }else{
    console.log("В14")  
  }
  if (que15 !=null){
    if(que15.value == "a"){
      count_chelovekznaksis +=1;
    }else{
      count_chelovekhydoshobraz +=1;
    }
  }else{
    console.log("В15")  
  }
  if (que16 !=null){
    if(que16.value == "a"){
      count_chelovekpriroda +=1;
    }else{
      count_chelovekchelovek +=1;
    }
  }else{
    console.log("В16")  
  }
  if (que17 !=null){
    if(que17.value == "a"){
      count_chelovekhydoshobraz +=1;
    }else{
      count_chelovektehnica +=1;
    }
  }else{
    console.log("В17")  
  }
  if (que18 !=null){
    if(que18.value == "a"){
      count_chelovekchelovek +=1;
    }else{
      count_chelovekhydoshobraz +=1;
    }
  }else{
    console.log("В18")  
  }
  if (que19 !=null){
    if(que19.value == "a"){
      count_chelovektehnica +=1;
    }else{
      count_chelovekznaksis +=1;
    }
  }else{
    console.log("В19")  
  }
  if (que20 !=null){
    if(que20.value == "a"){
      count_chelovekpriroda +=1;
    }else{
      count_chelovekznaksis +=1;
    }
  }else{
    console.log("В20")  
  }
  
  
  console.log("count_chelovekpriroda");
  console.log(count_chelovekpriroda);
  console.log("count_chelovektehnica");
  console.log(count_chelovektehnica);
  console.log("count_chelovekznaksis");
  console.log(count_chelovekznaksis);
  console.log("count_chelovekhydoshobraz");
  console.log(count_chelovekhydoshobraz);
  console.log("count_chelovekchelovek");
  console.log(count_chelovekchelovek);

  gar = {
  "priroda": count_chelovekpriroda,
  "technik": count_chelovektehnica,
  "chelovek": count_chelovekchelovek,
  "hydozeshviniyobraz": count_chelovekhydoshobraz,
  "znakovayasistema": count_chelovekznaksis
  };
  
  console.log(f(gar)[1]);
}

function f(dictProf) {
  var IkX, kX;
  kX = 0;
  IkX = "";
  console.log(dictProf)
  if (dictProf["priroda"] > kX) {
    kX = dictProf["priroda"];
    IkX = "priroda";
  } else {
    if (dictProf["priroda"] === kX) {
      IkX = IkX + " and priroda";
    }
  }

  if (dictProf["technik"] > kX) {
    kX = dictProf["technik"];
    IkX = "technik";
  } else {
    if (dictProf["technik"] === kX) {
      IkX = IkX + " and technik";
    }
  }

  if (dictProf["chelovek"] > kX) {
    kX = dictProf["chelovek"];
    IkX = "chelovek";
  } else {
    if (dictProf["chelovek"] === kX) {
      IkX = IkX + " and chelovek";
    }
  }

  if (dictProf["hydozeshviniyobraz"] > kX) {
    kX = dictProf["hydozeshviniyobraz"];
    IkX = "hydozeshviniyobraz";
  } else {
    if (dictProf["hydozeshviniyobraz"] === kX) {
      IkX = IkX + " and hydozeshviniyobraz";
    }
  }

  if (dictProf["znakovayasistema"] > kX) {
    kX = dictProf["znakovayasistema"];
    IkX = "znakovayasistema";
  } else {
    if (dictProf["znakovayasistema"] === kX) {
      IkX = IkX + " and znakovayasistema";
    }
  }

  return [kX, IkX];
}


