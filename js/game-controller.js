var wordsArray = [
  "ability","aboard","accept","accident","according","account","accurate","across","action","active",
  "activity","actual","actually","addition","additional","adjective","adventure","advice","affect","afraid",
  "afternoon","against","airplane","almost","alphabet","already","although","amount","ancient","animal",
  "announced","another","answer","anybody","anyone","anything","anyway","anywhere","apartment","appearance",
  "applied","appropriate","around","arrange","arrangement","arrive","article","asleep","atmosphere","atomic",
  "attached","attack","attempt","attention","audience","author","automobile","available","average","balance",
  "balloon","baseball","basket","battle","beautiful","beauty","became","because","become","becoming",
  "before","beginning","behavior","behind","believed","belong","beneath","beside","better","between",
  "beyond","bicycle","bigger","biggest","birthday","blanket","border","bottle","bottom","branch",
  "breakfast","breath","breathe","breathing","breeze","bridge","bright","broken","brother","brought",
  "buffalo","building","buried","business","butter","camera","cannot","capital","captain","captured",
  "carbon","careful","carefully","carried","castle","cattle","caught","center","central","century",
  "certain","certainly","chamber","chance","change","changing","chapter","character","characteristic","charge",
  "cheese","chemical","chicken","children","choice","choose","chosen","church","circle","circus",
  "citizen","classroom","clearly","climate","closely","closer","clothes","clothing","coffee","collect",
  "college","colony","column","combination","combine","comfortable","coming","command","common","community",
  "company","compare","compass","complete","completely","complex","composed","composition","compound","concerned",
  "condition","congress","connected","consider","consist","consonant","constantly","construction","contain","continent",
  "continued","contrast","control","conversation","cookies","copper","corner","correct","correctly","cotton",
  "country","couple","courage","course","cowboy","create","creature","curious","current","customs",
  "cutting","damage","danger","dangerous","darkness","daughter","decide","declared","deeply","definition",
  "degree","depend","describe","desert","design","detail","determine","develop","development","diagram",
  "diameter","differ","difference","different","difficult","difficulty","dinner","direct","direction","directly",
  "disappear","discover","discovery","discuss","discussion","disease","distance","distant","divide","division",
  "doctor","dollar","donkey","double","driven","driver","driving","dropped","during","earlier",
  "easier","easily","education","effect","effort","either","electric","electricity","element","elephant",
  "eleven","energy","engine","engineer","enough","entire","entirely","environment","equally","equator",
  "equipment","escape","especially","essential","establish","evening","eventually","everybody","everyone","everything",
  "everywhere","evidence","exactly","examine","example","excellent","except","exchange","excited","excitement",
  "exciting","exclaimed","exercise","expect","experience","experiment","explain","explanation","explore","express",
  "expression","facing","factor","factory","failed","fairly","fallen","familiar","family","famous",
  "farmer","farther","fastened","faster","father","favorite","feathers","feature","fellow","fierce",
  "fifteen","fighting","figure","finally","finest","finger","finish","fireplace","flight","floating",
  "flower","follow","football","foreign","forest","forget","forgot","forgotten","former","forward",
  "fought","fourth","freedom","frequently","friend","friendly","frighten","frozen","function","furniture",
  "further","future","garage","garden","gasoline","gather","general","generally","gentle","gently",
  "getting","giving","golden","government","grabbed","gradually","grandfather","grandmother","gravity","greater",
  "greatest","greatly","ground","growth","halfway","handle","handsome","happen","happened","happily",
  "harbor","harder","hardly","having","headed","heading","health","hearing","height","helpful",
  "herself","hidden","higher","highest","highway","himself","history","hollow","hospital","however",
  "hundred","hungry","hunter","hurried","husband","identity","imagine","immediately","importance","important",
  "impossible","improve","include","including","income","increase","indeed","independent","indicate","individual",
  "industrial","industry","influence","information","inside","instance","instant","instead","instrument","interest",
  "interior","introduced","invented","involved","island","itself","joined","journey","jungle","kitchen",
  "knowledge","language","larger","largest","layers","leader","leather","leaving","length","lesson",
  "letter","library","likely","limited","liquid","listen","little","living","locate","location",
  "lonely","longer","lovely","machine","machinery","magnet","mainly","making","managed","manner",
  "manufacturing","market","married","massage","master","material","mathematics","matter","measure","medicine",
  "melted","member","memory","mental","merely","method","middle","mighty","military","minerals",
  "minute","mirror","missing","mission","mistake","mixture","modern","molecular","moment","monkey",
  "morning","mostly","mother","motion","mountain","movement","moving","muscle","musical","myself",
  "mysterious","nation","national","native","natural","naturally","nature","nearby","nearer","nearest",
  "nearly","necessary","needed","needle","negative","neighbor","neighborhood","nervous","newspaper","nobody",
  "nodded","nothing","notice","number","numeral","object","observe","obtain","occasionally","office",
  "officer","official","oldest","operation","opinion","opportunity","opposite","orange","ordinary","organization",
  "organized","origin","original","ourselves","outline","outside","oxygen","package","palace","paragraph",
  "parallel","parent","particles","particular","particularly","partly","passage","pattern","pencil","people",
  "percent","perfect","perfectly","perhaps","period","person","personal","phrase","physical","picture",
  "pictured","planet","planned","planning","plastic","plates","pleasant","please","pleasure","plenty",
  "plural","pocket","poetry","police","policeman","political","popular","population","position","positive",
  "possible","possibly","potatoes","powder","powerful","practical","practice","prepare","present","president",
  "pressure","pretty","prevent","previous","primitive","principal","principle","printed","private","probably",
  "problem","process","produce","product","production","program","progress","promised","proper","properly",
  "property","protection","provide","public","purple","purpose","putting","quarter","question","quickly",
  "quietly","rabbit","railroad","rapidly","rather","reader","realize","reason","recall","receive",
  "recent","recently","recognize","record","refused","region","regular","related","relationship","religious",
  "remain","remarkable","remember","remove","repeat","replace","replied","report","represent","require",
  "research","respect","result","return","review","rhythm","riding","rising","rocket","rubbed",
  "rubber","running","saddle","safety","salmon","satellites","satisfied","scared","school","science",
  "scientific","scientist","screen","search","season","second","secret","section","seeing","seldom",
  "select","selection","sentence","separate","series","serious","service","setting","settle","settlers",
  "several","shadow","shaking","shallow","shells","shelter","shinning","shorter","should","shoulder",
  "signal","silence","silent","silver","similar","simple","simplest","simply","single","sister",
  "sitting","situation","slight","slightly","slipped","slowly","smaller","smallest","smooth","social",
  "society","softly","soldier","solution","somebody","somehow","someone","something","sometime","somewhere",
  "source","southern","special","species","specific","speech","spider","spirit","spoken","spread",
  "spring","square","stairs","standard","stared","statement","station","steady","stepped","stomach",
  "stopped","straight","strange","stranger","stream","street","strength","stretch","strike","string",
  "strong","stronger","struck","structure","struggle","student","studied","studying","subject","substance",
  "success","successful","sudden","suddenly","suggest","summer","sunlight","supper","supply","support",
  "suppose","surface","surprise","surrounded","swimming","syllable","symbol","system","taught","teacher",
  "telephone","television","temperature","terrible","themselves","theory","therefore","thirty","though","thought",
  "thousand","thread","throat","through","throughout","thrown","tightly","tobacco","together","tomorrow",
  "tongue","tonight","toward","traffic","transportation","travel","treated","triangle","troops","tropical",
  "trouble","twelve","twenty","typical","underline","understanding","unhappy","universe","unknown","unless",
  "unusual","upward","useful","usually","valley","valuable","variety","various","vegetable","vertical",
  "vessels","victory","village","visitor","volume","voyage","wealth","weather","weight","welcome",
  "western","whatever","whenever","wherever","whether","whispered","whistle","widely","willing","window",
  "winter","within","without","wonder","wonderful","wooden","worker","worried","wrapped","writer",
  "writing","written","yellow","yesterday","younger","yourself"
];

var correctWord = "";
var correctLetters = [];
var numCorrectGuesses = 0;
var guessedLetters = [];
var guesses = 0;

function addToHangman() {
  $(".wrong-" + String(guesses)).css("visibility", "visible");
}

function setUpGame(word) {
  correctLetters = word.split('');
  numCorrectGuesses = 0;

  correctWord = word;
  correctLetters = word.toUpperCase().split('');
  listElements = "";
  guessedLetters = [];

  for(i = 0; i < guesses; i++) {
    $(".wrong-" + String(i)).css("visibility", "hidden");
  }

  guesses = 0;

  for(i = 0; i < correctLetters.length; i++) {
    listElements += "<li><div class='letter-space-" + String(i)
      + "'>&nbsp;</div></li>";
  }

  $("#word-letters").html(listElements);
}

$(document).ready(function() {
  $("#input-new-word").focus();

  $("#submit-random-word").click(function() {
    var randomWord = wordsArray[Math.floor(Math.random() * (wordsArray.length - 1))];
    setUpGame(randomWord);
  });

  $("#input-new-word").keyup(function(event) {
    if(event.keyCode == 13) {
      $("#submit-new-word").click();
    }
  });

  $("#submit-new-word").click(function() {
    var userWord = String($("#input-new-word").val());
    if(userWord !== "") {
      setUpGame(userWord);
      $("#input-new-word").val("");
    }
  });

  $("#input-letter").keyup(function(event) {
    if(event.keyCode == 13) {
      $("#submit-letter").click();
    }
  });

  // setUpWord("hello".toUpperCase());

  $("#submit-letter").click(function() {

    // Set variable for guessed letter as upper case
    var checkLetter = String($("#input-letter").val()).toUpperCase();
    if(checkLetter === "") {
      return;
    }

    // Check if letter is in correct letters array and set index
    if($.inArray(checkLetter, guessedLetters) !== -1) {
      $("#message-box").html("<p>Already guessed " + checkLetter +  "</p><p>guesses remaining: " + (10 - guesses) +
       "</p><p>guessed letters: " + guessedLetters + "</p>");
    } else {
      letterIndex = $.inArray(checkLetter, correctLetters);

      // Guess was correct
      if(letterIndex !== -1) {

        // Add letter from correctLetters to ordered list
        var letterIndexArray = [];
        for(i = 0; i < 10; i++) {
          if(correctLetters[i] === checkLetter) {
            letterIndexArray.push(i);
            numCorrectGuesses++;
          }
        }

        var letterClass = [];
        for(i = 0; i < letterIndexArray.length; i++) {
          $(".letter-space-" + String(letterIndexArray[i])).html(checkLetter);
        }

        $(letterClass).html(correctLetters[letterIndex]);
        guessedLetters.push(checkLetter);
        $("#message-box").html("<p>word has " + checkLetter +  "</p><p>guesses remaining: " + (10 - guesses) +
         "</p><p>guessed letters: " + guessedLetters + "</p>");

         if(numCorrectGuesses >= correctLetters.length) {
           alert("win");
         }
      }

      // Guess was incorrect
      else {
        guessedLetters.push(checkLetter);
        addToHangman();
        if(guesses >= 9) {
          $("#game-over-heading").html("Game Over");
          if(correctWord === "") {
            $("#correct-word").html("There was no word. Congratulations, you played yourself. Never play yourself.");
          } else {
            $("#correct-word").html('The word was "' + correctWord + '"');
          }
          $("#game-over-screen").fadeIn(300);
        }
        guesses++;
        $("#message-box").html("<p>word does not have " + checkLetter +  "</p><p>guesses remaining: " + (10 - guesses) +
         "</p><p>guessed letters: " + guessedLetters + "</p>");
      }
    }

    $("#input-letter").val("");
    $("#input-letter").focus();
  });

  $("#btn-play-again").click(function() {
    setUpGame("");
    $("#game-over-screen").fadeOut(100);
    $("#message-box").html("<p>Enter a word for someone else to play, or generate a random word.</p>");
  })
});
