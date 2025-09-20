const questions = [
    {
        question: "शिवाजी महाराजांचा जन्म कुठे झाला?",
        options: ["तोरणा किल्ला", "शिवनेरी किल्ला", "रायगड", "पन्हाळा"],
        answer: "शिवनेरी किल्ला",
        info: "शिवाजी महाराजांचा जन्म १९ फेब्रुवारी १६३० रोजी शिवनेरी किल्ल्यावर झाला. हा किल्ला पुणे जिल्ह्यातील जुन्नरजवळ आहे आणि त्याचा उपयोग संरक्षणासाठी महत्त्वाचा होता."
    },
    {
        question: "शिवाजी महाराजांचे गुरू कोण होते?",
        options: ["समर्थ रामदास", "तुकाराम महाराज", "ज्ञानेश्वर", "एकनाथ"],
        answer: "समर्थ रामदास",
        info: "समर्थ रामदास स्वामी हे शिवाजी महाराजांचे आध्यात्मिक गुरू होते. त्यांनी 'दासबोध' हा ग्रंथ लिहिला आणि स्वराज्य स्थापनेत प्रेरणादायी भूमिका बजावली."
    },
    {
        question: "शहाजीराजे भोसले यांचा जन्म कोणत्या वर्षी झाला?",
        options: [
            "1594",
            "1600",
            "1578",
            "1605"
        ],
        answer: "1594"
    },
    {
        question: "शहाजीराजे भोसले कोणाच्या दरबारात सरदार होते?",
        options: [
            "अकबर",
            "अदिलशहा",
            "निजामशहा",
            "औरंगजेब"
        ],
        answer: "अदिलशहा"
    },
    {
        question: "छत्रपती संभाजी महाराजांचा जन्म कोणत्या दिवशी झाला?",
        options: ["१४ मे १६५७", "१९ फेब्रुवारी १६३०", "१० मार्च १६५७", "१६ एप्रिल १६५९"],
        answer: "१४ मे १६५७"
    },
    {
        question: "संभाजी महाराजांची पहिली लढाई कोणत्या शत्रूविरुद्ध होती?",
        options: ["पोर्तुगीज", "मुघल", "सिद्दी", "डच"],
        answer: "पोर्तुगीज"
    },
    {
        question: "संभाजी महाराज जेव्हा मुघलांच्या ताब्यात गेले, तेव्हा ते कोणत्या वाड्यात थांबले होते?",
        options: ["संगमेश्वर वाडा", "पन्हाळा वाडा", "रायगड वाडा", "साजगड वाडा"],
        answer: "संगमेश्वर वाडा"
    },
    {
        question: "शहाजीराजे भोसले यांनी कोणत्या किल्ल्यावर शासन केले?",
        options: [
            "बंगलोर",
            "रायगड",
            "पन्हाळा",
            "शिवनेरी"
        ],
        answer: "बंगलोर"
    },
    {
        question: "शहाजीराजांचे वडील कोण होते?",
        options: [
            "मालोजीराजे भोसले",
            "हंबीरराव मोहिते",
            "लक्ष्मणराव जाधव",
            "मुरारबाजी देशपांडे"
        ],
        answer: "मालोजीराजे भोसले"
    },
    {
        question: "शिवाजी महाराजांनी कोणत्या किल्ल्याला 'गडांचा राजा' असे म्हटले?",
        options: ["रायगड", "सिंहगड", "राजगड", "पन्हाळगड"],
        answer: "राजगड"
    },
    {
        question: "शिवाजी महाराजांनी सुरतेवर स्वारी केव्हा केली?",
        options: ["१६६४", "१६५७", "१६७०", "१६८१"],
        answer: "१६६४"
    },
    {
        question: "शिवाजी महाराजांचे प्रमुख सरसेनापती कोण होते?",
        options: ["नेताजी पालकर", "हंबीरराव मोहिते", "तानाजी मालुसरे", "शिवाजी पाटील"],
        answer: "हंबीरराव मोहिते"
    },
    {
        question: "शहाजीराजांनी कोणत्या भाषेत ग्रंथ लिहिण्याचा प्रयत्न केला होता?",
        options: [
            "संस्कृत",
            "फारसी",
            "कन्नड",
            "मराठी"
        ],
        answer: "कन्नड"
    },
    {
        question: "शहाजीराजे भोसले यांना कोणत्या उपाधीने गौरवले गेले होते?",
        options: [
            "हिंदूपदपातशाही",
            "श्रीमंत",
            "महाराज",
            "सरदार-ए-खास"
        ],
        answer: "श्रीमंत"
    },

    {
        question: "स्वराज्य स्थापनेची शपथ शिवाजी महाराजांनी कुठे घेतली?",
        options: ["रायगड", "तोरणा किल्ला", "रायरेश्वर", "पुणे"],
        answer: "रायरेश्वर"
    },
    {
        question: "शिवाजी महाराजांनी अफझलखानाचा वध कुठे केला?",
        options: ["कोल्हापूर", "प्रतापगड", "सिंधुदुर्ग", "पन्हाळा"],
        answer: "प्रतापगड"
    },

    {
        question: "शहाजीराजे भोसले यांचा मृत्यू कोणत्या ठिकाणी झाला?",
        options: [
            "जिंजी",
            "कर्नाटक",
            "बैंगलोर",
            "रायगड"
        ],
        answer: "कर्नाटक"
    },
    {
        question: "शिवाजी महाराजांच्या आईचे नाव काय होते?",
        options: ["जिजाबाई", "सईबाई", "ताराबाई", "शाहाजादी"],
        answer: "जिजाबाई"
    },
    {
        question: "शिवाजी महाराजांचा प्रमुख गुप्तचर कोण होता?",
        options: ["बहिरजी नाईक", "तानाजी मालुसरे", "मोरो पिंगळे", "नेताजी पालकर"],
        answer: "बहिरजी नाईक"
    },
    {
        question: "छत्रपती संभाजी महाराजांचे जन्म कुठे झाले?",
        options: ["पुरंदर किल्ला", "रायगड", "शिवनेरी", "सिंहगड"],
        answer: "पुरंदर किल्ला"
    },
    {
        question: "संभाजी महाराजांचे टोपणनाव काय होते जे त्यांनी पुस्तकासाठी वापरले?",
        options: ["कवी कलश", "शंभूराजे", "धर्मवीर", "बळीशास्त्रज्ञ"],
        answer: "शंभूराजे"
    },
    {
        question: "संभाजी महाराजांनी कोणते प्रसिद्ध ग्रंथ लिहिले?",
        options: ["बुद्धभूषण", "राजतरंगिणी", "दासबोध", "शिवलीलामृत"],
        answer: "बुद्धभूषण"
    },
    {
        question: "संभाजी महाराजांचा मृत्यु कोणत्या वर्षी झाला?",
        options: ["१६८९", "१६९०", "१६८१", "१६८५"],
        answer: "१६८९"
    },
    {
        question: "संभाजी महाराजांना पकडले ते कोणत्या नदीच्या काठावर?",
        options: ["भीमा", "गोदावरी", "कृष्णा", "पंचगंगा"],
        answer: "कृष्णा"
    },
    {
        question: "संभाजी महाराजांच्या पत्नीचे नाव काय होते?",
        options: ["येसुबाई", "सईबाई", "सखूबाई", "जिजाबाई"],
        answer: "येसुबाई"
    },
    {
        question: "संभाजी महाराज कोणत्या मुघल बादशहाच्या कैदेत होते?",
        options: ["औरंगजेब", "शाहजहान", "हुमायूं", "अकबर"],
        answer: "औरंगजेब"
    },
    {
        question: "संभाजी महाराजांनी किती वर्षे राज्य केले?",
        options: ["9 वर्षे", "14 वर्षे", "7 वर्षे", "20 वर्षे"],
        answer: "9 वर्षे"
    },
    {
        question: "संभाजी महाराजांना कोणत्या नावाने ओळखले जाते?",
        options: ["धर्मवीर", "पराक्रमी", "शूरवीर", "सत्यनिष्ठ"],
        answer: "धर्मवीर"
    },
    {
        question: "संभाजी महाराजांना पकडून त्यांना किती दिवस छळण्यात आले?",
        options: ["४० दिवस", "१५ दिवस", "२३ दिवस", "७ दिवस"],
        answer: "४० दिवस"
    },
    {
        question: "संभाजी महाराजांनी 'बुद्धभूषण' ग्रंथ कोणत्या भाषेत लिहिला?",
        options: ["संस्कृत", "मराठी", "फारसी", "हिंदी"],
        answer: "संस्कृत"
    }
];

let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
// const nextBtn = document.getElementById("next-btn");
const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.querySelector(".welcome-screen");
const quizContainer = document.querySelector(".quiz-container");
const resultContainer = document.querySelector(".result-container");
const scoreEl = document.getElementById("score");
const playAgainBtn = document.getElementById("play-again-btn");
const bgMusic = document.getElementById("background-music");
const levelScreen = document.getElementById("level-screen");
const levelTitle = document.getElementById("level-title");
const startLevelBtn = document.getElementById("start-level-btn");

const eventSlide = document.getElementById("event-slide");
const slideHeading = document.getElementById("slide-heading");
const slideImage = document.getElementById("slide-image");
const slideText = document.getElementById("slide-text");

let currentLevel = 1;
const questionsPerLevel = 10;
// let scoreHistory = []; // प्रत्येक लेव्हलचा स्कोअर store करण्यासाठी
let totalScore = 0;
let slideStep = 0;



function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function startLevel(level) {
    levelScreen.style.display = "none";
    quizContainer.style.display = "block";
    currentIndex = (level - 1) * questionsPerLevel;
    score = 0;
    loadQuestion();
}  //

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 30;
    updateTimer();

    const currentQuestion = questions[currentIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");                        //
        btn.textContent = option;
        btn.onclick = () => {
            clearInterval(timer);
            checkAnswer(option);
        }
        optionsEl.appendChild(btn);
    });

    // Fade-in animation
    questionEl.classList.remove("fade-in");
    void questionEl.offsetWidth; // reflow for re-triggering animation
    questionEl.classList.add("fade-in");

    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();                                           /////
        }
    }, 1000);
}

function updateTimer() {
    timerEl.textContent = currentIndex < questions.length ? `🕒 उर्वरित वेळ: ${timeLeft} सेकंद` : "";
}


function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentIndex].answer;
    const options = document.querySelectorAll("#options button");

    if (selectedOption === correctAnswer) {
        score++;
    }

    options.forEach(option => {
        option.disabled = true;
        if (option.innerText === correctAnswer) {
            option.classList.add("correct-answer");
        } else if (option.innerText === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add("wrong-answer");
        }
    });

    const infoPara = document.createElement("p");
    infoPara.classList.add("answer-info");
    infoPara.textContent = currentQuestion.info || "";
    optionsContainer.appendChild(infoPara);                                /////

     setTimeout(() => {
        currentIndex++;
        if (currentIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2000);
}

function nextQuestion() {
    clearInterval(timer);
    currentIndex++;

    const levelEndIndex = currentLevel * questionsPerLevel;

    if (currentIndex >= questions.length) {
        showResult();
    }
    else if (currentIndex === levelEndIndex) {
        showLevelResult();
    }
    else {
        loadQuestion();
    }
}

function checkLevelOrNextQuestion() {
    currentIndex++;

    if (currentIndex % 10 === 0 && currentIndex < questions.length) {
        currentLevel = currentIndex / 10;
        showEventSlide(currentLevel);
    } else if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showEventSlide(level) {
    const slideData = levelSlides[level - 1];

    quizContainer.style.display = "none";
    eventSlide.style.display = "block";
    resultContainer.style.display = "none";

    slideHeading.innerText = "🛡️ " + slideData.heading;
    slideImage.src = slideData.images[0];
    slideText.innerText = slideData.info;
    slideText.style.display = "none";
    slideStep = 0;
}

function nextSlide() {
    const slideData = levelSlides[currentLevel - 1];

    slideStep++;
    if (slideStep === 1) {
        slideText.style.display = "block"; // info show
    } else if (slideStep === 2) {
        slideImage.src = slideData.images[1]; // real image
        slideText.style.display = "none";
    } else {
        eventSlide.style.display = "none";
        quizContainer.style.display = "block";
        loadQuestion();
    }
}


function showLevelResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = "";

    totalScore += score;
    let normalizedFinalScore = Math.round((score / questionsPerLevel) * 10); // ✅ याच ठिकाणी टाक

    let badgeName = "";
    let badgeDesc = "";
    let allowNextLevel = true;

    if (normalizedFinalScore <= 3) {
        badgeName = "🐣 नवशिक्या";
        badgeDesc = "अभ्यास गरजेचा आहे!";
    } else if (normalizedFinalScore <= 5) {
        badgeName = "🛡️ मावळा";
        badgeDesc = "छान! पण अजून प्रयत्न हवे!";
    } else if (normalizedFinalScore <= 8) {
        badgeName = "⚔️ सेनापती";
        badgeDesc = "उत्तम कामगिरी!";
    } else {
        badgeName = "🏆🚩 स्वराज्य योद्धा";
        badgeDesc = "अफलातून! जय भवानी!";
    }

    resultContainer.innerHTML = `
        <h2>🎯 लेव्हल ${currentLevel} संपली!</h2>
        <p>तुमचा स्कोअर: <strong>${normalizedFinalScore} / 10</strong></p> 
        <h3>${badgeName}</h3>
        <p>${badgeDesc}</p>
    `;

    const nextBtn = document.createElement("button");

    if ((currentLevel * questionsPerLevel) < questions.length) {
        // अजून प्रश्न बाकी आहेत -> पुढचा लेव्हल
        nextBtn.textContent = allowNextLevel ? "पुढचा लेव्हल सुरू करा" : "लेव्हल पुन्हा खेळा";
        nextBtn.onclick = () => {
            totalScore += score; // ✅ Har level ke baad add
            score = 0;
            resultContainer.style.display = "none";
            if (allowNextLevel) {
                totalScore += score; // ✅ मागचा स्कोअर जोडा
                score = 0;
                currentLevel++;
                levelScreen.style.display = "block";
                levelTitle.textContent = `Level ${currentLevel}`;
            } else {
                quizContainer.style.display = "block";
                score = 0;
                currentIndex = (currentLevel - 1) * questionsPerLevel;
                loadQuestion();
            }
        };
    } else {
        // शेवटचा लेव्हल आहे -> अंतिम निकाल दाखवा
        nextBtn.textContent = "अंतिम निकाल बघा";
        nextBtn.onclick = () => {
            totalScore += score; // ✅ शेवटचा स्कोअर पण जोड
            showResult();
        };
    }

    resultContainer.appendChild(nextBtn);
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `
        <h2>🎉 क्विझ संपली!</h2>
        <p>तुमचा अंतिम स्कोअर: <strong>${totalScore} / ${questions.length}</strong></p>
    `;
    let averageScore = Math.round(totalScore / currentLevel);

    let badgeName = "";
    let badgeDesc = "";

    if (averageScore <= 6) {
        badgeName = "🐣 नवशिक्या";
        badgeDesc = "अभ्यास गरजेचा आहे!";
    } else if (averageScore <= 10) {
        badgeName = "🛡️ मावळा";
        badgeDesc = "छान! पण अजून प्रयत्न हवे!";
    } else if (averageScore <= 15) {
        badgeName = "⚔️ सेनापती";
        badgeDesc = "उत्तम कामगिरी!";
    } else {
        badgeName = "🏆🚩 स्वराज्य योद्धा";
        badgeDesc = "अफलातून! जय भवानी!";
    }

    resultContainer.innerHTML += `
        <h3>${badgeName}</h3>
        <p>${badgeDesc}</p>
    `;

    // Play Again Button
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "🔁 पुन्हा खेळा";
    playAgainBtn.onclick = () => {
        currentIndex = 0;
        score = 0;
        totalScore = 0;
        currentLevel = 1;
        resultContainer.style.display = "none";
        levelScreen.style.display = "block";
        levelTitle.textContent = "Level 1";
        shuffleQuestions();
    };
    resultContainer.appendChild(playAgainBtn);
}

// Background Music Logic
const music = document.getElementById("background-music");
const musicBtn = document.getElementById("toggle-music-btn");
let isMusicPlaying = false;

startBtn.addEventListener("click", () => {
    welcomeScreen.style.display = "none";
    quizContainer.style.display = "none";
    levelScreen.style.display = "block";//
    levelTitle.textContent = "Level 1";//
    shuffleQuestions();
    // loadQuestion();

    music.play();
    isMusicPlaying = true;
    musicBtn.textContent = "🎵 म्युझिक बंद करा"
});

startLevelBtn.addEventListener("click", () => {
    startLevel(currentLevel);
}); //

musicBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
        music.pause();
        musicBtn.textContent = "🎵 म्युझिक चालू करा";
    } else {
        music.play();
        musicBtn.textContent = "🎵 म्युझिक बंद करा";
    }
    isMusicPlaying = !isMusicPlaying;

    console.log("Music paused:", music.paused);

});






