// Создание переменной que в который хранится словарь(Вопросы),а в этом словаре находится другой словарь(варианты ответов)
let que = {
  'Ухаживать за животными или обслуживать машины, приборы (следить, регулировать)?':{
    'Ухаживать за животными': 'a',
    'Обслуживать машины, приборы (следить, регулировать)': 'b',
  },
  'Помогать больным людям, лечить их или cоставлять таблицы, схемы, программы для вычислительных машин?':{
    'Помогать больным людям, лечить их': 'c',
    'Cоставлять таблицы, схемы, программы для вычислительных машин': 'e',
  },
  'Следить за качеством книжных иллюстраций, плакатов, художественных открыток, грампластинок или следить за состоянием, развитием растениий?':{
    'Следить за качеством книжных иллюстраций, плакатов, художественных открыток, грампластинок': 'd',
    'Следить за состоянием, развитием растениий': 'a',
  },
  'Обрабатывать материалы (дерево, ткань, пластмассу, металл и т.п.) или доводить товары до потребителя (рекламировать, продавать)?':{
    'Ухаживать за животными': 'b',
    'Доводить товары до потребителя (рекламировать, продавать)': 'c',
  },
  'Обсуждать научно-популярные книги, статьи или обсуждать художественные книги (или пьесы, концерты)?':{
    'Обсуждать научно-популярные книги, статьи': 'e',
    'Обсуждать художественные книги (или пьесы, концерты)': 'd',
  },
  'Выращивать молодняк (животных какой-либо породы) или тренировать товарищей (или младших) в выполнении каких-либо действий (трудовых, учебных, спортивных)?':{
    'Выращивать молодняк (животных какой-либо породы)': 'a',
    'Тренировать товарищей (или младших) в выполнении каких-либо действий (трудовых, учебных, спортивных)': 'c',
  },
  'Копировать рисунки, изображения (или настраивать музыкальные инструменты) или управлять каким-либо грузовым (подъемным или транспортным) средством: подъемным краном, трактором, тепловозом и др.?':{
    'Копировать рисунки, изображения (или настраивать музыкальные инструменты': 'd',
    'Управлять каким-либо грузовым (подъемным или транспортным) средством: подъемным краном, трактором, тепловозом и др.': 'b',
  },
  'Сообщать, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.) или художественно оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)?':{
    'Сообщать, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.)': 'c',
    'Художественно оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)': 'd',
  },
  'Ремонтировать вещи, изделия (одежду, технику), жилище или искать и исправлять ошибки в текстах, таблицах, рисунках?':{
    'Ремонтировать вещи, изделия (одежду, технику), жилище': 'b',
    'Искать и исправлять ошибки в текстах,таблицах, рисунках': 'e',
  },
  'Лечить животных или выполнять вычисления, расчеты?':{
    'Лечить животных': 'a',
    'Выполнять вычисления, расчеты.': 'e',
  },
  'Выводить новые сорта растений или конструировать, проектировать новые виды промышленных изделий (машины или одежду, дома, продукты питания и т.п.)?':{
    'Выводить новые сорта растений': 'a',
    'Конструировать, проектировать новые виды промышленных изделий (машины или одежду, дома, продукты питания и т.п.)': 'b',
  },
  'Разбирать споры, ссоры между людьми, убеждать, разъяснять поощрять, наказывать или разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)?':{
    'Разбирать споры, ссоры между людьми, убеждать, разъяснять поощрять, наказывать': 'c',
    'Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)': 'e',
  },
  'Наблюдать, изучать работу кружков художественной самодеятельности или наблюдать, изучать жизнь микробов?':{
    'Наблюдать, изучать работу кружков художественной самодеятельности': 'd',
    'Наблюдать, изучать жизнь микробов': 'a',
  },
  'Обсуждать, налаживать медицинские приборы, аппараты или оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.?':{
    'Обсуждать, налаживать медицинские приборы, аппараты': 'b',
    'Оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.': 'c',
  },
  'Составлять точные описания - отчеты о наблюдаемых явлениях, событиях, измеряемых объектах и др или художественно описывать, изображать события (наблюдаемые или представляемые)?':{
    'Составлять точные описания - отчеты о наблюдаемых явлениях, событиях, измеряемых объектах и др': 'e',
    'Художественно описывать, изображать события (наблюдаемые или представляемые)': 'd',
  },
  'Делать лабораторные анализы в больнице или принимать, осматривать больных, беседовать с ними, назначать лечение?':{
    'Делать лабораторные анализы в больнице': 'a',
    'Принимать, осматривать больных, беседовать с ними, назначать лечение': 'c',
  },
  'Красить или расписывать стены помещений, поверхность изделий или осуществлять монтаж зданий или сборку машин, приборов?':{
    'Красить или расписывать стены помещений, поверхность изделий': 'd',
    'Осуществлять монтаж зданий или сборку машин, приборов': 'b',
  },
  'Организовывать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п. или играть на сцене, принимать участие в концертах?':{
    'Организовывать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п.': 'c',
    'Играть на сцене, принимать участие в концертах': 'd',
  },
  'Изготовлять по чертежам детали, изделия (машины, одежду) строить здания или заниматься черчением, копированием чертежей, карт?':{
    'Изготовлять по чертежам детали, изделия (машины, одежду) строить здания': 'b',
    'Заниматься черчением, копированием чертежей, карт': 'e',
  },
  'Вести борьбу с болезнями растений, с вредителями леса, сада или работать на клавишных машинах?':{
    'Вести борьбу с болезнями растений, с вредителями леса, сада': 'a',
    'Работать на клавишных машинах': 'e',
  },
}

let job = {
  "priroda":"Вы человек природа<p>Представителей этих профессий объединяет одно очень важное качество — любовь к природе.Но любовь не созерцательная. Которой обладают практически все люди,считая природу наиболее благоприятной средой для отдыха, а деятельная связанная спознанием ее законов и применением их. </p>Одно дело — любить животных и растения,играть с ними, радоваться им. И совсем другое — регулярно, день за днем ухаживатьза ними, наблюдать, лечить, выгуливать, не считаясь с личным временем и планами.Специалист должен не просто все знать о живых организмах, но и прогнозироватьвозможные изменения в них и принимать меры. От человека требуется инициатива исамостоятельность в решении конкретных задач, заботливость, терпение идальновидность. Человек, работающий в сфере «человек-природа», должен бытьспокойным и уравновешенным.<p>Специалистам в этой области приходится выполнять следующие виды деятельности:</p> Изучать, исследовать, анализировать состояние, условия жизни растений или животных (агроном, микробиолог, зоотехник, гидробиолог, агрохимик, фитопатолог);<p> Выращивать растения, ухаживать за животными (лесовод, полевод, цветовод, овощевод, птицевод, животновод, садовод, пчеловод);</p> Проводить профилактику заболеваний растений и животных (ветеринар, врач карантинной службы). ",
  
  "technik":"Вы человек техника<p>Особенность технических объектов в том, что они, как правило, могут быть точно измерены по многим признакам. При их обработке, преобразовании, перемещенииили оценке от работника требуется точность, определенность действий. Техника как предмет руда представляет широкие возможности для новаторства, выдумки,творчества, поэтому важное значение приобретает такое качество, как практическое мышление. Техническая фантазия, способность мысленно соединять и разъединятьтехнические объекты и их части — важные условия для успеха в данной области.</p>Специалистам в этой области приходится выполнять следующие виды деятельности:<p>Создание, монтаж, сборка технических устройств (специалисты проектируют, конструируют технические системы, устройства, разрабатывают процессы их изготовления.Из отдельных узлов, деталей собирают машины, механизмы, приборы, регулируют и налаживают их);<p>Эксплуатация технических устройств (специалисты работают на станках, управляют транспортом, автоматическими системами);</p>Ремонт технических устройств (специалисты выявляют, распознают неисправности технических систем, приборов, механизмов, ремонтируют, регулируют, налаживают их).",
  
 "znakovayasistema":"Вы человек знаковая система<p>Мы встречаемся со знаками значительно чаще, чем обычно представляем себе. Это цифры. Коды, условные знаки, естественные или искусственные языки, чертежи, таблицы формулы. В любом случае человек воспринимает знак как символ реального объекта или явления. Поэтому специалисту, который работает со знаками, важно уметь с одной стороны, абстрагироваться от реальных физических, химически, механических свойств предметов, а с другой —представлять и воспринимать характеристики реальных явлений или объектов, стоящих за знаками. Чтобы успешно работать в какой-нибудь профессии данного типа, необходимо уметь мысленно погружаться в мир, казалось бы, сухих обозначений и сосредотачиваться на сведениях, которые они несут в себе. Особые требования профессии этого типа предъявляют к вниманию</p>Предметом труда для представителей большинства профессий типа «человек знаковая система» являются:<p>Тексты на родном или иностранном языках (редактор, корректор, машинистка, делопроизводитель, телеграфист, наборщик);</p>Цифры, формулы, таблицы (программист, оператор ЗВМ, экономист, бухгалтер, статистик);\n\tЧертежи, схемы, карты (конструктор, инженер-технолог, чертежник, копировальщик, штурман, геодезист);\n\tЗвуковые сигналы (радист, стенографист, телефонист, звукооператор).",
  
    "hydozeshviniyobraz":"<p>Вы человек художественный образ</p>Важнейшие требования, которые предъявляют профессии, связанные с изобразительной, музыкальной, литературно-художественной, актерско-сценической деятельностью человека — наличие способности к искусствам, творческое воображение, образное мышление, талант, трудолюбие.\n\tCоздание, проектирование художественных произведений (писатель, художник, композитор, модельер, архитектор, скульптор, журналист, хореограф);\n\tВоспроизведение, изготовление различных изделий по образцу (ювелир, реставратор, гравер, музыкант, актер, столяр-краснодеревщик);\n\tРазмножение художественных произведений в массовом производстве (мастер по росписи фарфора, шлифовщик по камню и хрусталю, маляр, печатник). ",
  
  "chelovek":"Главное содержание труда в профессиях типа «человек-человек» сводится к взаимодействию между людьми. Если не наладится это взаимодействие, значит, не наладится и работа. Качества, необходимые для работы с людьми: устойчивое, хорошее настроение в процессе работы с людьми, потребность в общении, способность мысленно ставить себя на место другого человека, быстро понимать намерения, помыслы, настроение людей, умение разбираться в человеческих взаимоотношениях, хорошая память (умение держать в уме имена и особенности многих людей), терпение.\n\tСпециалистам в этой области приходится выполнять следующие виды деятельности:\n\tвоспитание, обучение людей (воспитатель, учитель, спортивный тренер);\n\tмедицинское обслуживание (врач, фельдшер, медсестра, няня);\n\tбытовое обслуживание (продавец, парикмахер, официант, вахтер);\n\tинформационное обслуживание (библиотекарь, экскурсовод, лектор);\n\tзащита общества и государства (юрист, милиционер, инспектор, военнослужащий)."
}
//Создание словаря в котором хранится 5 типов профессий, по классификации Е.А.Климова, а также профили для данных типов профессии
let direction ={
  "priroda":{
    "directions in the 8th grade": "Профиль 1 Профиль 2",
    "directions in the 9th grade": "Профиль 3 Профиль 4",
    "directions in the 10th-11th grade": "Профиль 5 Профиль 6"
    //пока создано для теста потом заменить
  },
  "technik" :{
    "directions in the 8th grade": "Профиль 7 Профиль 8",
    "directions in the 9th grade": "Профиль 9 Профиль 10",
    "directions in the 10th-11th grade": "Профиль 11 Профиль 12"
  },
  "znakovayasistema":{
    "directions in the 8th grade": "Профиль 13 Профиль 14",
    "directions in the 9th grade": "Профиль 15 Профиль 16",
    "directions in the 10th-11th grade": "Профиль 17 Профиль 18"
  },
  "hydozeshviniyobraz":{
    "directions in the 8th grade": "Профиль 19 Профиль 20",
    "directions in the 9th grade": "Профиль 21 Профиль 22",
    "directions in the 10th-11th grade": "Профиль 23 Профиль 24"
  },
  "chelovek":{
    "directions in the 8th grade": "Профиль 25 Профиль 26",
    "directions in the 9th grade": "Профиль 27 Профиль 28",
    "directions in the 10th-11th grade": "Профиль 29 Профиль 30"
  },
}

console.log(Object.values(job)[0]);


let count_chelovekpriroda = 0;
let count_chelovektehnica = 0;
let count_chelovekznaksis = 0;
let count_chelovekhydoshobraz = 0;
let count_chelovekchelovek = 0;

let true_ans = 0;
let count_que = 0;
let count_close = 0;
let result_test = "";

let dict_que_div = document.getElementById('que_div');
let ans1_que = document.getElementById('ans1');
let ans2_que = document.getElementById('ans2');
let lab1_que = document.getElementById('lab1');
let lab2_que = document.getElementById('lab2');
// получения количества вопросов
let que_size = Object.keys(que).length;
console.log("Количество вопросов в тесте: " + que_size);
let current_que_view = document.getElementById('title_que');
current_que_view.innerHTML = "Текущий вопрос " + Number(count_que + 1) + "/" + Number(que_size);

// вывод текста вопроса
console.log("Первый: " + Object.keys(que)[0]);
dict_que_div.innerHTML = Object.keys(que)[0];

// вывод текста ответов из словаря
let a = 0;
for(let e_que in Object.values(que)[0]){
  console.log("--- " + e_que)
  if (a == 0){
    lab1_que.innerHTML = e_que;
  }
  if (a == 1){
    lab2_que.innerHTML = e_que;
  }
  a++;
}

// установить значения ответов из словаря
let b = 0 ;
for(let [key, values] of Object.entries(Object.values(que)[0])){
  if (b == 0){
    document.getElementById("ans1").value = values;
 }
  if (b == 1){
    document.getElementById("ans2").value = values;
  }
  b++;
}
console.log("-- " + Object.values(Object.values(que)[0]));



function next_que(){
  console.log("Выбранный ответ");
  console.log("1 Ответ: " + ans1_que.checked);
  console.log("2 Ответ: " + ans2_que.checked);
  // подсветить не выбранные ответы
  if(ans1_que.checked == false && ans2_que.checked == false){
    lab1_que.style.border = "2px solid red";
    lab2_que.style.border = "2px solid red";  
  }
  else{
    console.log("Текущий вопрос: " + count_que);

    // полчения значения выбранного ответа
    let answer = document.querySelector("input[name=q]:checked");
    let ia = answer.value;
    console.log("Выбранный ответ из вопросов: " + ia);
  
    if(ia == "a") count_chelovekpriroda++;
    if(ia == "b") count_chelovektehnica++;
    if(ia == "c") count_chelovekchelovek++; 
    if(ia == "d") count_chelovekhydoshobraz++;
    if(ia == "e") count_chelovekznaksis++;
    
    console.log("count_chelovekpriroda: " + count_chelovekpriroda);
    console.log("count_chelovektehnica: " + count_chelovektehnica);
    console.log("count_chelovekznaksis: " + count_chelovekznaksis);
    console.log("count_chelovekhydoshobraz: " + count_chelovekhydoshobraz);
    console.log("count_chelovekchelovek: " + count_chelovekchelovek);

    // убрать выбор ответов
    ans1_que.checked = false;
    ans2_que.checked = false;
    document.getElementById("circle1").style.border = "1px solid rgb(63, 42, 255)";
    document.getElementById("circle2").style.border = "1px solid rgb(63, 42, 255)";
  
    count_que++;
    console.log("Текущий вопрос: " + count_que);
    
    current_que_view.innerHTML = "Текущий вопрос " + Number(count_que + 1) + "/" + Number(que_size);
    
    ////Начало заполенения вопроса данными из словапя
    dict_que_div.innerHTML = Object.keys(que)[count_que];
    console.log(Object.keys(que)[count_que]);

    if(count_que == 19){
        console.log("Последний вопрос")
        document.getElementById("next").value= "Завершить";
    }
    
    if (count_que < que_size - 1){
      let b = 0 ;
      for(let [key, values] of Object.entries(Object.values(que)[count_que + 1])){
        if (b == 0){
          document.getElementById("ans1").value = values;
        }
        if (b == 1){
          document.getElementById("ans2").value = values;
        }
        b++;
      }
  
      let a = 0;
      for(let e_que in Object.values(que)[count_que]){
      console.log("--- " + e_que)
        if (a == 0){
          lab1_que.innerHTML = e_que;
        }
        if (a == 1){
          lab2_que.innerHTML = e_que;
        }
        a++;
      }
      ////Конец заполнения вопроса
      console.log("Текущий вопрос после заполенения: " + count_que);

     
    }else{
      
      //document.getElementById("next").value= "Завершить";
      console.log("Вопросы закончились!")
      
      if (count_close == 1){
        lastque();
      }
      count_close++;
  
      gar = {
        "priroda": count_chelovekpriroda,
        "technik": count_chelovektehnica,
        "chelovek": count_chelovekchelovek,
        "hydozeshviniyobraz": count_chelovekhydoshobraz,
        "znakovayasistema": count_chelovekznaksis
      };
    
      console.log(f(gar)[1]);
      result_test = f(gar)[1];
      
      console.log("gar", result_test);
    }
  } 
}

function circleBorder1(){
  lab1_que.style.border = "none";
  lab2_que.style.border = "none"; 
  if(ans2.checked == true){
    document.getElementById("circle2").style.border = "1px solid rgb(63, 42, 255)";
  }
  document.getElementById("circle1").style.border = "7px solid rgb(63, 42, 255)";
  
}

function circleBorder2(){
  lab1_que.style.border = "none";
  lab2_que.style.border = "none"; 
  if(ans1.checked == true){
    document.getElementById("circle1").style.border = "1px solid rgb(63, 42, 255)";
  }
   document.getElementById("circle2").style.border = "7px solid rgb(63, 42, 255)";
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
      IkX = IkX + "priroda";
    }
  }

  if (dictProf["technik"] > kX) {
    kX = dictProf["technik"];
    IkX = "technik";
  } else {
    if (dictProf["technik"] === kX) {
      IkX = IkX + " technik";
    }
  }

  if (dictProf["chelovek"] > kX) {
    kX = dictProf["chelovek"];
    IkX = "chelovek";
  } else {
    if (dictProf["chelovek"] === kX) {
      IkX = IkX + " chelovek";
    }
  }

  if (dictProf["hydozeshviniyobraz"] > kX) {
    kX = dictProf["hydozeshviniyobraz"];
    IkX = "hydozeshviniyobraz";
  } else {
    if (dictProf["hydozeshviniyobraz"] === kX) {
      IkX = IkX + " hydozeshviniyobraz";
    }
  }

  if (dictProf["znakovayasistema"] > kX) {
    kX = dictProf["znakovayasistema"];
    IkX = "znakovayasistema";
  } else {
    if (dictProf["znakovayasistema"] === kX) {
      IkX = IkX + " znakovayasistema";
    }
  }

  return [kX, IkX];
}


function lastque(){
  document.getElementById("que_div").style.visibility  = 'hidden';
  document.getElementById("circle1").style.visibility  = 'hidden';
  document.getElementById("circle2").style.visibility  = 'hidden';
  document.getElementById("ans1").style.visibility  = 'hidden';
  document.getElementById("ans2").style.visibility  = 'hidden';
  document.getElementById("title_que").style.visibility  = 'hidden';
  document.getElementById("next").style.visibility  = 'hidden';
  document.getElementById("lab1").style.visibility  = 'hidden';
  document.getElementById("lab2").style.visibility  = 'hidden';
  console.log("До спита", result_test);
  console.log(Object.keys(job)[0]);
  console.log(Object.keys(job)[1]);
  console.log(Object.keys(job)[2]);
  console.log(Object.keys(job)[3]);
  console.log(Object.keys(job)[4]);
  result_test= result_test.split(" ")
  console.log("last_que", result_test);
  let text_output = "";
  for(let i=0; i<result_test.length; i++){
    if (result_test[i] == Object.keys(job)[0]){
      text_output = text_output + Object.values(job)[0];
      console.log("object 0");
    }
      if (result_test[i] == Object.keys(job)[1]){
      text_output= text_output + Object.values(job)[1];
      console.log("object 1");
    }
    if (result_test[i] == Object.keys(job)[2]){
      text_output=text_output + Object.values(job)[2];
      console.log("object 2");
    }
    if (result_test[i] == Object.keys(job)[3]){
    text_output = text_output + Object.values(job)[3];
    console.log("object 3");
    
    }
  if (result_test[i] == Object.keys(job)[4]){
    text_output= text_output + Object.values(job)[4];
    console.log("object 4");
    }
  
  }
  console.log(text_output);
  document.getElementById("text_output_test").innerHTML = text_output;
  document.getElementById("text_output_test").style.visibility  = 'visible';
  document.getElementById("id_btn_result_school").style.visibility = 'visible'
  //Код для школ
  let direction_after_test_8_class = "";
  let direction_after_test_9_class = "";
  let direction_after_test_10_11_class = "";
  for(let i=0; i<result_test.length; i++){
    if (result_test[i] == Object.keys(job)[0]){
      direction_after_test_8_class = direction_after_test_8_class + Object.values(Object.values(direction)[0])[0];
      direction_after_test_9_class = direction_after_test_9_class + Object.values(Object.values(direction)[0])[1];
      direction_after_test_10_11_class = direction_after_test_10_11_class + Object.values(Object.values(direction)[0])[2];
    }
    if (result_test[i] == Object.keys(job)[1]){
      direction_after_test_8_class = direction_after_test_8_class + Object.values(Object.values(direction)[1])[0];;
      direction_after_test_9_class = direction_after_test_9_class + Object.values(Object.values(direction)[1])[1];
      direction_after_test_10_11_class = direction_after_test_10_11_class + Object.values(Object.values(direction)[1])[2];
    }
    if (result_test[i] == Object.keys(job)[2]){
      direction_after_test_8_class = direction_after_test_8_class + Object.keys(direction);
      direction_after_test_9_class = direction_after_test_9_class + Object.keys(direction);
      direction_after_test_10_11_class = direction_after_test_10_11_class + Object.keys(direction);
    }
    if (result_test[i] == Object.keys(job)[3]){
      direction_after_test_8_class = direction_after_test_8_class + Object.keys(direction);
      direction_after_test_9_class = direction_after_test_9_class + Object.keys(direction);
      direction_after_test_10_11_class = direction_after_test_10_11_class + Object.keys(direction);
    }
    if (result_test[i] == Object.keys(job)[4]){
      direction_after_test_8_class = direction_after_test_8_class + Object.values(Object.values(direction)[0]);
      direction_after_test_9_class = direction_after_test_9_class + Object.keys(direction);
      direction_after_test_10_11_class = direction_after_test_10_11_class + Object.keys(direction);
    }
  }
}