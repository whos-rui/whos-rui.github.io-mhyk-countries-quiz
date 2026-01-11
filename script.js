//HAHA have fun looking at my shitty code i did this in like a week with hella tutorials

// Scenes (dialogue + questions)
let scenes = [
    {
        type: "dialogue",
        text: "Welcome to the MHYK country quiz!!\n\nJust a silly quiz to see which country you'd be from if you were in the MHYK universe :)",
        buttonText: "Next"
    },
    {
        type: "dialogue",
        text: "DISCLAIMER: \nThis is an unofficial work inspired by Mahoyaku. All rights go to Promise of Wizard【魔法使いの約束】and ©coly.",
        buttonText: "Next"
    },
    {
        type: "dialogue",
        text: "There are 13 questions in total. \nAre you ready to start? >:D",
        description: "",
        buttonText: "Let's go!!"
    },
    {   type: "question", 
        text: "The sun rising upon the horizon signals the start of a new day and shakes you awake. \nAs you lie in bed, what is the first thing you do?", 
        answers: [
            { text: "Sleep in a little longer. My bed is just too comfortable", country: "western" },
            { text: "Get up right away! I like to have a nice and early start to my day to make the most out of it", country: "central" },
            { text: "I curse the sun for getting up so early, but I get up anyway. No point in dragging it out", country: "eastern" },
            { text: "...It's already morning?", country: "northern" },
            { text: "I think about how I want to spend my day. Just imagining all the possibilities has got me excited to get up and do stuff!", country: "southern" }
        ],
        weight: 11
    },
    {   type: "question", 
        text: "As a wizard, you are blessed with the ability to create anything out of nothing. \nHow do you use your powers?", 
        answers: [
            { text: "I use my power to help people and serve justice", country: "central" },
            { text: "I use my power to protect the weak and heal the injured", country: "southern" },
            { text: "I use my power as I please. After all, magic comes from the heart", country: "western" },
            { text: "I use my power for no one else but myself", country: "northern" },
            { text: "I use my power as needed, whether it be to curse or to purify", country: "eastern" }
        ],
        weight: 0
    },
    {   type: "question", 
        text: "You've been requested for a mission! The commissioner agrees to give you a little something extra if the job is well done. \nWhat do you choose as your reward?", 
        answers: [
            { text: "No extra reward is needed. I am simply doing my job", country: "central" },
            { text: "It's gotta be mana stones!", country: "northern" },
            { text: "I'll see what catches my eye after I complete the mission", country: "western" },
            { text: "Maybe the seeds of flowers that only bloom in this region? Or perhaps a rare tea?", country: "southern" },
            { text: "Probably something that has knowledge to be imparted, like an old spellbook", country: "eastern" }
        ],
        weight: 7
    },
    {   type: "question", 
        text: "Oh no! Something terrible has happened on the way to your mission. To resolve this, you must work in a group with other wizards. \nHow do you feel about the sudden need for teamwork?", 
        answers: [
            { text: "I work better alone, but I won't complain if I have to work as a team", country: "eastern" },
            { text: "I love working with other people and discussing with them! It helps me broaden my perspective", country: "central" },
            { text: "I don't need other people. They'll just drag me down if they turn out to be incompetent", country: "northern" },
            { text: "Teamwork is great! No one could handle everything alone since everyone has their own strengths and weaknesses", country: "southern" },
            { text: "Working with other people is no problem, but don't be too surprised if I get mad at someone and refuse to cooperate", country: "western" }
        ],
        weight: 5
    },
    {   type: "question", 
        text: "You've arrived in the Central Country! The streets are teeming with life, the markets are full and aplenty with both humans and wizards. \nQuietly, you think to yourself: is it truly possible for humans and wizards to coexist in peace?", 
        answers: [
            { text: "Yes! I think we can work out our differences and surely we'll be able to live together comfortably!", country: "southern" },
            { text: "No. We're just not cut from the same cloth. It's like asking if a bear and a wolf could live together without being wary of each other. It just doesn't seem possible", country: "eastern" },
            { text: "No way. The laws of nature simply don't work that way", country: "northern" },
            { text: "I would definitely like to see it happen! Maybe not right now, but in 50, 100 years, I can see us living together in peace", country: "central" },
            { text: "Only time can tell, and I'd like to be around to witness all that transpires from here on out", country: "western" }
        ],
        weight: 1
    },
    {   type: "question", 
        text: "You've arrived in the Northern Country! The frigid wind and icy surroundings make it seem impossible for life to exist. Even so, humans and wizards alike thrive in this country by using everything at their disposal to solve their problems. \nHow do you deal with any problems that arise?", 
        answers: [
            { text: "I face my problems head on! No point in worrying about them when I could just solve them on my own right now", country: "northern" },
            { text: "I do what I feel is right, although that sometimes leads me to jumping in without a proper plan. I'm not afraid to ask for help if needed", country: "central" },
            { text: "Creating a strategy is essential to solving a problem. It is important to not make any rash decisions, lest the situation worsens", country: "eastern" },
            { text: "It really hinges on how I'm feeling at that moment. Sometimes I'll leave it hanging for days, sometimes I'll want to deal with it immediately", country: "western" },
            { text: "I try to understand what the root of the problem is. If you try to solve it without understanding why the problem arose in the first place, it'll surely come back in the future", country: "southern" }
        ],
        weight: 2
    },
    {   type: "question", 
        text: "You've arrived in the Eastern Country! The streets are quiet to a fault, leaving you with only your thoughts. You reminisce about all the people whose paths you've crossed. \nWhat is your relationship like with others?", 
        answers: [
            { text: "I love interacting with other people! Being around others makes me very happy", country: "southern" },
            { text: "I don't need others. After all, we all are our own people in the end", country: "northern" },
            { text: "I'm not good with other people, so I prefer to be by myself. Although, that isn't to say I don't enjoy other people's company", country: "eastern" },
            { text: "People are fascinating. There is much to learn by being around other people", country: "western" },
            { text: "Since we share this world with other people, it is inevitable that we must learn to live with them too. There are people I like and people I don't, but ultimately we must learn to get along", country: "central" }
        ],
        weight: 3
    },
    {   type: "question", 
        text: "You've arrived in the Western Country! The streets are lined with all sorts of artworks and extravagant decorations. \nHow do you view art?", 
        answers: [
            { text: "I love it! Art is so pretty to look at and I just can't get enough of it!", country: "southern" },
            { text: "Art is my everything. Sometimes it infuriates me to no end, and other times it is my beacon of hope. I could never give it up", country: "western" },
            { text: "Personally, I'm not very good at art, but I really look up to the people who are able to create such wonderful pieces!", country: "central" },
            { text: "It's cool if it's pretty but otherwise I don't dwell on the subject for too long. I guess I just don't think too much about it", country: "northern" },
            { text: "Creating and observing art is not for the weak. In a sense, it is a type of much-needed introspection", country: "eastern" }
        ],
        weight: 8
    },
    {   type: "question", 
        text: "You've arrived in the Southern Country! Nature flourishes in these undeveloped lands, abundant flowers grow everywhere. \nYou bend down to pick a flower, what type of flower is it?", 
        answers: [
            { text: "A Rudbeckia", country: "central" },
            { text: "An Edelweiss", country: "nothern" },
            { text: "A Begonia", country: "eastern" },
            { text: "A Carnation", country: "western" },
            { text: "A Freesia", country: "southern" }
        ],
        weight: 12
    },
    {   type: "question", 
        text: "You've worked up quite the appetite after your mission. Thankfully, the restaurant you wandered in has quite the assortment of dishes on their menu. \nWhat do you reach for?", 
        answers: [
            { text: "Anything that piques my interest. Even if I end up not liking it, the act of eating it would surely be an enjoyable experience in and of itself!", country: "western" },
            { text: "Something I'm familiar with, like my favourite food if they happen to have it", country: "eastern" },
            { text: "Anything that seems like a big, hearty meal. Food is where you get your energy from after all. You have to eat up!", country: "northern" },
            { text: "Something that I know will relax my tired body and nourish my soul", country: "southern" },
            { text: "A good balance of everything: new foods, familiar foods, filling foods, and of course something to satisfy my cravings", country: "central" }
        ],
        weight: 9
    },
    {   type: "question", 
        text: "You find yourself weary and exhausted having just come home from the mission. \nYou look outside the window of your room, what do you see?", 
        answers: [
            { text: "A well-developed cityscape right on the edge of the ocean. Music can be heard from almost any corner, harmonizing with the crashing of the waves", country: "western" },
            { text: "A quaint, picturesque country village with fields of wheat and animals roaming free. A carefree place that makes you feel happy just being here and breathing in the air", country: "southern" },
            { text: "A quiet town, tucked away from the chaos of the world like the surface of a tranquil lake: a little world that belongs only to myself", country: "eastern" },
            { text: "A bustling plaza with many people around. The birds' chirping blends in with the laughter of the people on the streets. It makes me want to smile too", country: "central" },
            { text: "A white expanse that seems to go on forever. The trees look like they're carved out of the purest of crystals and the snow falls from the sky like flakes of glitter. Truly, it feels a frozen piece of time", country: "northern" }
        ],
        weight: 4
    },
    {   type: "question", 
        text: "Since the mission is over, it's time to let loose and relax! \nWhat do you do in your free time?", 
        answers: [
            { text: "I like to read. It quiets my mind and lets me temporarily forget all that is troubling me", country: "eastern" },
            { text: "I like working out. I'm just always on that grind", country: "northern" },
            { text: "I like doing something that excites me, like playing games or going out for drinks or even watching a horror movie with friends!", country: "western" },
            { text: "I like to grab a cup of tea, curl up on the couch and catch up with my friends!", country: "southern" },
            { text: "I like to plan out my next day. Doing so gives me a sense of assurance", country: "central" }
        ],
        weight: 6
    },
    {   type: "question", 
        text: "Finally, the moon has fully risen and it's time to head back to your sweet, sweet bed! You close your eyes and quickly find yourself deep within the embrace of slumber. \nWhat do you dream of?", 
        answers: [
            { text: "I dream of all sorts of strange and fantastical things! I wonder where my dream will take me next...", country: "western" },
            { text: "I dream of my future", country: "central" },
            { text: "I dream that I am surrounded by all my loved ones", country: "southern" },
            { text: "I dream of my past", country: "eastern" },
            { text: "I hardly ever dream, but when I do it's usually about me obtaining everything that I desire", country: "northern" }
        ],
        weight: 10
    },
    {
        type: "dialogue",
        text: "Are you ready to see your result?",
        buttonText: "Let's go!!"
    }
];

let currentScene = 0;
// Scores
let scores = { central: 0, northern: 0, eastern: 0, western: 0, southern: 0};
let multiplier = 0.99;

//Webpage elements
const resultEl = document.getElementById("result");
const scenesEl = document.getElementById("scenes");
const answersEl = document.getElementById("answers");
const quizContainer = document.getElementById("quiz");
const resultImgEl = document.getElementById("resultImg");
const downloadGuideEl = document.getElementById("downloadGuide");
const countriesBtn = document.getElementById("countriesBtn");
const returnBtn = document.getElementById("returnBtn");
const retakeBtn = document.getElementById("retakeBtn");

//Countries images
const centralImgEl = document.getElementById("centralImg");
const northernImgEl = document.getElementById("northernImg");
const easternImgEl = document.getElementById("easternImg");
const westernImgEl = document.getElementById("westernImg");
const southernImgEl = document.getElementById("southernImg");


//Functions
function startQuiz(){
    countriesBtn.classList.add("hidden");
    returnBtn.classList.add("hidden");
    retakeBtn.classList.add("hidden");
    showScene();
    
}

function showScene(){
    document.body.scrollTo(0,0);
    const s = scenes[currentScene];
    if(s.type === "dialogue"){
        showDialogue();
    }
    else if (s.type === "question"){
        showQuestion();
    }
}

function showDialogue(){
    const d = scenes[currentScene];
    const text = d.text.replace(/\n/g, '<br>');
    scenesEl.innerHTML = text;
    //scenesEl.textContent = text;
    answersEl.innerHTML = "";

    let btnNext = document.createElement("button");
    btnNext.textContent = d.buttonText;
    btnNext.onclick = () => {
        currentScene++;
        if (currentScene >= scenes.length) {
            showResult();
        } else {
            showScene();
        }
    };
    answersEl.appendChild(btnNext);
               
}

function showQuestion(){
    const q = scenes[currentScene];
    scenesEl.hidden = false;
    const text = q.text.replace(/\n/g, '<br>');
    scenesEl.innerHTML = text;
    answersEl.innerHTML = "";

    q.answers.forEach((answer) => {
        let btn = document.createElement("button");
        btn.textContent = answer.text;
        btn.onclick = () => {
            scores[answer.country] += multiplier**q.weight;
            currentScene++;
            if (currentScene >= scenes.length) {
                showResult();
            } else {
                showScene();
            }
          };
        answersEl.appendChild(btn);
        }
    )
}

function showResult(){
    let maxKey = null;
    let maxValue = 0; 

    for (const [key, value] of Object.entries(scores)) {
        if (value > maxValue) {
        maxValue = value;
        maxKey = key;
        } 
    }
    displayResult(maxKey);
    downloadGuideEl.hidden = false;
}


function displayResult(country){
    quizContainer.hidden = true;
    resultEl.textContent = 'You got:';
    let link = "images/"+country + "-info.png";
    resultImgEl.src = link;
    resultImgEl.classList.remove("hidden");
    resultEl.classList.remove("hidden");
    retakeBtn.classList.remove("hidden");
    countriesBtn.classList.remove("hidden");
}

retakeBtn.onclick = () => {
    window.location.reload();
}

countriesBtn.onclick = () => {
    resultImgEl.classList.add("hidden");
    resultEl.textContent = 'All countries:';
    countriesBtn.classList.add("hidden");

    returnBtn.classList.remove("hidden");

    centralImgEl.classList.remove("hidden");
    northernImgEl.classList.remove("hidden");
    easternImgEl.classList.remove("hidden");
    westernImgEl.classList.remove("hidden");
    southernImgEl.classList.remove("hidden");
    document.body.scrollTo(0,0);
}

returnBtn.onclick = () =>{
    resultImgEl.classList.remove("hidden");
    resultEl.textContent = 'You got:';
    countriesBtn.classList.remove("hidden");

    returnBtn.classList.add("hidden");

    centralImgEl.classList.add("hidden");
    northernImgEl.classList.add("hidden");
    easternImgEl.classList.add("hidden");
    westernImgEl.classList.add("hidden");
    southernImgEl.classList.add("hidden");
    document.body.scrollTo(0,0);
}

//start on page load
startQuiz();



