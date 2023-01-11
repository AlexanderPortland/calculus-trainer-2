function NameOf(unit){
    names = allAreas;
    //console.log(this.names);
    for (let i = 0; i < names.length; i++) {
        const element = names[i][0];
        //console.log(element + ": " + unit + "-" + i);
        if (element == unit) return [this.names[i][1], this.names[i][2]];
    }
    return ["", ""];
}

function FindArea(unit){
    for (let i = 0; i < areas.length; i++) {
        const element = areas[i];
        if (element.unit == unit) return i;
    }
    return -1;
}

class Area{
    constructor(_unit, _pastQuestions, _totalAnswered, _correct){
        this.unit = _unit;
        this.externalLinks = NameOf(this.unit)[1];
        this.name = NameOf(this.unit)[0];
        this.totalAnswered = _totalAnswered;
        this.correct = _correct;

        this.pastQuestions = _pastQuestions;
    }

    //001112223346
}

var allAreas = [
    //["2.1", "Average Rate of Change", "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:average-rate-of-change/v/introduction-to-average-rate-of-change"],
    //["2.7", "Complex Derivative Rules", ""],
    ["3.2", "Implicit Differentiation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-2/v/implicit-differentiation-1"],
    ["4.5", "Related Rates", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-4/v/rates-of-change-between-radius-and-area-of-circle"],
    //["4.6", "Linear Approximation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-6/v/linear-approximation-example"],
    ["4.7", "L'Hopital's Rule", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-7/v/introduction-to-l-hopital-s-rule"],
    ["5.4", "Determining Local Extrema", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-2/v/finding-critical-numbers"],
    //["5.5", "Determining Global Extrema", ""],
    ["7.5", "Euler's Method", "https://www.khanacademy.org/math/ap-calculus-bc/bc-differential-equations-new/bc-7-5/v/eulers-method"],
    //["7.7", "Solving Differential Equations", "https://www.khanacademy.org/math/ap-calculus-ab/ab-differential-equations-new/ab-7-7/v/finding-constant-of-integration-rational"],
    ["8.1", "Average Value", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-1/v/average-function-value-closed-interval"],
    //["8.5", "Area Between Curves", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-4/v/area-between-curves"],
    //["8.7", "Volumes with Cross Sections", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-7/v/volume-with-cross-sections-intro"],
    ["8.9", "Volumes of Rotation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-9/v/disk-method-around-<var>x</var>-axis"],
    //["10.11", "Taylor Polynomials", "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new/bc-10-11/v/maclaurin-and-taylor-series-intuition"]
];

function Random (tingz){
    var num = Math.floor(Math.random()*tingz.length);
    return tingz[num];
}

var storedPastQuestions = 6;
let areas = new Array();

function PushLocalAreas(){
    //initializes local storage if it does not exist
    localStorage.setItem('areas_unit', '[]');

    //creates temporary arrays to store subject area information in
    var areas_unit = new Array();
    var areas_pastQuestions = new Array();
    var areas_totalAnswered = new Array();
    var areas_correct = new Array();

    //loops through each subject area and adds its information to the corresponding temporary array
    for (let i = 0; i < areas.length; i++) {
        const element = areas[i];
        areas_unit.push(element.unit);
        //past questions is an array for each subject area, but we need to store it as a single value
        //so, it puts all the values into a single string seperated by - so that it can seperate them later
        var pastQuestions = JSON.stringify(element.pastQuestions).replace(/,/g, "-");
        areas_pastQuestions.push(pastQuestions);
        areas_totalAnswered.push(JSON.stringify(element.totalAnswered));
        areas_correct.push(JSON.stringify(element.correct));
    }

    //pushes all of the temporary arrays into html local storage
    localStorage.setItem('areas_unit', areas_unit);
    localStorage.setItem('areas_pastQuestions', areas_pastQuestions);
    localStorage.setItem('areas_totalAnswered', areas_totalAnswered);
    localStorage.setItem('areas_correct', areas_correct);
}

function FetchLocalAreas(){
    areas = new Array();

    //checks if the needed arrays exist in local storage
    if (localStorage.getItem("areas_unit") != null){
        //arrays are stored as strings in html local storage
        //so, we seperate each string out with the , character into an array of values
        var units = localStorage.getItem("areas_unit").split(',');
        var pastQuestions = localStorage.getItem("areas_pastQuestions").split(',');
        var totalAnswered = localStorage.getItem("areas_totalAnswered").split(',');
        var correct = localStorage.getItem("areas_correct").split(',');

        //logs success for debug purposes
        console.log("success" + units.length);

        //loops through each subject area found in local storage
        for (let i = 0; i < units.length; i++) {
            //pushes the found subject area with all of its information into our session's area array
            const element = units[i];
            area = new Area(
                units[i],
                //seperates the pastquestions variable by - and parses to get the array that was put in
                JSON.parse(pastQuestions[i].replace(/-/g, ",")),
                JSON.parse(totalAnswered[i]),
                JSON.parse(correct[i])
            );
            areas.push(area);
        }
    }
}

function Init(){
    var a = new Array();
    a = allAreas;
    a = a.sort(UnitCompare);
    var focusMenu = document.getElementById("focusArea");
    focusMenu.multiple = false;
    for (let i = 0; i < a.length; i++) {
        var newOption = document.createElement('option');
        newOption.innerText = a[i][0] + ": " + a[i][1];
        newOption.value = a[i][0];
        focusMenu.appendChild(newOption);
    }

    if (localStorage.getItem("defaultVal") != ""){
        focusMenu.value = localStorage.getItem("defaultVal");
    } else {
        focusMenu.value = "none";
    }
    localStorage.setItem("defaultVal", "");
}

function UnitCompare(a, b){
    return a[0] - b[0];
}

function NextQuestion(){
    //gets the question parameters as inputted by the user
    var focus = document.getElementById("focusArea").value;
    var apAllowed = document.getElementById("ap").checked;
    var ibAllowed = document.getElementById("ib").checked;

    //creates an empty array
    var q = new Array();

    //and fills it with all of the possible question types
    for (let i = 0; i < questions.length; i++) {
        const element = questions[i];
        q.push(element);
    }
    j = q.length;
    //loops through all potential questions up until the number of questions in the array
    for (let i = 0; i < j; i++) {
        const element = q[i];
        if ((element.type == 1 && !apAllowed) || (element.type == 2 && !ibAllowed)){
            //removes the question from consideration if it doesn't fit with the AP/IB parameters
            //also moves the currently considered question (i) and the total number of questions (j)
            //down by one to ensure that no questions are skipped
            q.splice(i, 1); 
            i--; 
            j--;
        }
        else if (focus != "none"){
            if (!element.Contains(focus)){
                //removes each question from consideration if it doesn't related to the focus subject area
                q.splice(i, 1);
                i--;
                j--;
            }
        }
    }

    if (q.length > 0){
        //if there are some questions that fit the parameters, a random fitting question is chosen
        var rand = Math.floor(Math.random()*q.length);
        ShowNewQuestion(q[rand]);
        //and the number of questions found is displayed as label text
        if (q.length == 1) document.getElementById("newQuestionLabel").innerText = q.length + " question found";
        else document.getElementById("newQuestionLabel").innerText = q.length + " questions found";
    } else {
        //if no questions fit the parameters, an error message is displayed
        console.log("no questions with those paramaters found");
        //and the fact that no questions were found is displayed as label text
        document.getElementById("newQuestionLabel").innerText = "No questions found :(";
    }
}

//console.log(areas);

FetchLocalAreas();
Init();

function UpdateAllQuestionText(){
    if (currentQuestion.imageSource != "" && currentQuestion.imageSource != null){
        document.getElementById("image").src = "./images/" + currentQuestion.imageSource + ".png";
        document.getElementById("image").style.display = "block";
    } else {
        document.getElementById("image").style.display = "none";
    }
    
    for (let i = 6; i >= 0; i--) {
        const element = currentQuestion.subQuestions[i];
        var char = String.fromCharCode(97+i);
        if (i < currentQuestion.subQuestions.length){
            //console.log(char);
            for (let j = 0; j < document.getElementsByClassName(char).length; j++) {
                const element = document.getElementsByClassName(char)[j];
                if (element.type == "button" || element.type == "text") {
                    element.style.display = "inline";
                    if (element.classList.contains("label")) element.innerHTML = "label";
                }
                else element.style.display = "block";
            }
        } else {
            //console.log(char);
            for (let j = 0; j < document.getElementsByClassName(char).length; j++) {
                const element = document.getElementsByClassName(char)[j];
                //console.log(element.style.display);
                element.style.display = "none";
            }
        }
        
    }
    let text = document.getElementById("test-text");
    text.innerHTML = currentQuestion.test;
    for (let index = 0; index < document.getElementsByClassName("demand").length; index++) {
        const element = document.getElementsByClassName("demand")[index];
        let i = 10000;
        if (element.classList.contains("a")) i = 0;
        if (element.classList.contains("b")) i = 1;
        if (element.classList.contains("c")) i = 2;
        if (element.classList.contains("d")) i = 3;
        if (element.classList.contains("e")) i = 4;
        if (currentQuestion.subQuestions.length > i) {
            if (currentQuestion.subQuestions[i].demand != null) element.innerHTML = currentQuestion.subQuestions[i].demand;
            else document.getElementsByClassName("demand")[index].innerHTML = "";
        } //else document.getElementsByClassName("demand")[index].innerHTML = "";
    }
    
    for (let index = 0; index < document.getElementsByClassName("question").length; index++) {
        const element = document.getElementsByClassName("question")[index];
        let i = 10000;
        if (element.classList.contains("a")) i = 0;
        if (element.classList.contains("b")) i = 1;
        if (element.classList.contains("c")) i = 2;
        if (element.classList.contains("d")) i = 3;
        if (element.classList.contains("e")) i = 4;
        if (currentQuestion.subQuestions.length > i) element.innerHTML = currentQuestion.subQuestions[i].question;
            //else document.getElementsByClassName("question")[index].innerHTML = "";
    }

    for (let index = 0; index < document.getElementsByClassName("answer").length; index++) {
        const element = document.getElementsByClassName("answer")[index];
        let i = 10000;
        if (element.classList.contains("a")) i = 0;
        if (element.classList.contains("b")) i = 1;
        if (element.classList.contains("c")) i = 2;
        if (element.classList.contains("d")) i = 3;
        if (element.classList.contains("e")) i = 4;
        //change back to answerFormula
        if (currentQuestion.subQuestions.length > i) element.innerHTML = currentQuestion.subQuestions[i].steps;
        //else document.getElementsByClassName("answer")[index].innerHTML = "";
    }
    document.getElementById("pitch").innerHTML = currentQuestion.pitch;
    //MathJax.typeset();
}

function UpdateAllFormula(){
    for (let index = 0; index < document.getElementsByClassName("formulae").length; index++) {
        const element = document.getElementsByClassName("formulae")[index];
        let formulaText = element.innerHTML;
        if (element.classList.contains("a")){
            if (currentQuestion.subQuestions.length > 0){
                formulaText = currentQuestion.FullSubValues(formulaText, 0);
                //console.log("a shit");
            }
        } else if (element.classList.contains("b")){
            if (currentQuestion.subQuestions.length > 1){
                formulaText = currentQuestion.FullSubValues(formulaText, 1);
                //console.log("b shit");
            }
        } else if (element.classList.contains("c")){
            if (currentQuestion.subQuestions.length > 2){
                formulaText = currentQuestion.FullSubValues(formulaText, 2);
                //console.log("c shit");
            }
        } else if (element.classList.contains("d")){
            if (currentQuestion.subQuestions.length > 3){
                formulaText = currentQuestion.FullSubValues(formulaText, 3);
            }
        } else if (element.classList.contains("e")){
            if (currentQuestion.subQuestions.length > 4){
                formulaText = currentQuestion.FullSubValues(formulaText, 4);
            }
        } else if (element.classList.contains("f")){
            if (currentQuestion.subQuestions.length > 5){
                formulaText = currentQuestion.FullSubValues(formulaText, 5);
            }
        } else {
            formulaText = currentQuestion.HalfSubValues(formulaText);
        }
        
        //if (.answerFormula.includes("over")){
        //    formulaText = formulaText.replace(/simplifiedAnswer/, q1.simplifiedAnswer);
        //}
        // can use element.innerText or .textContent if issues occur
        element.innerHTML = formulaText;
    }
    MathJax.typeset();
}

function CheckAnswer(proposed, question){
    if (question.answer != undefined){
        if (question.answer == "") return true;
        if (question.answer.includes(proposed)) {
            return true;
        }
    }

    if (proposed == "") return false;
    let real = question.finalAnswer;
    let errorMargin = 0.0019;
    
    if (Math.abs(proposed - real) <= errorMargin){
        return true;
    }

    if (proposed.includes("x") || proposed.includes("y")){
        var a = true;
        for (let index = 0; index < 10; index++) {
            let x = Math.random();
            let y = Math.random();
            //console.log(proposed);
            //console.log(question.answer);
            var stringA = proposed.replace(/x/g, x).replace(/y/g, y);
            var stringB = question.answer.replace(/x/g, x).replace(/y/g, y);
            //console.log(stringA);
            //console.log(stringB);
            if (question.Solve(stringA) != question.Solve(stringB)){
                a = false;
            }
        }
        if (a){
            return true;
        }
    }

    return false;
}

function CorrectAnswer(question){
    console.log("yayy");
    //ShowNewQuestion(aaab);

    FixData(question, 1);
}

function IncorrectAnswer(question){
    console.log("no :(");
    console.log("was looking for " + question.answer);

    FixData(question, 0);
}

function FixData(question, correct){
    if (question.unit != ""){
        FetchLocalAreas();
        if (FindArea(question.unit) == -1){
            //create new area if one doesnt already exist
            areas.push(new Area(
                question.unit,
                [],
                0,
                0
            ));
        }
        index = FindArea(question.unit);
        areas[index].totalAnswered++;
        areas[index].correct+=correct;

        if (areas[index].pastQuestions.length < storedPastQuestions){
            //add the new 1 or 0 to the front of the array
            var a = Array();
            a.push(correct);
            for (let i = 0; i < areas[index].pastQuestions.length; i++) {
                const element = areas[index].pastQuestions[i];
                a.push(element);
            }
            areas[index].pastQuestions = a;
        } else {
            //shift past x questions back one and insert a 1 or a 0 to newest slot
            for (let i = areas[index].pastQuestions.length-2; i >= 0; i--) {
                areas[index].pastQuestions[i+1] = areas[index].pastQuestions[i];
            }
            areas[index].pastQuestions[0] = correct;
        }

        console.log(areas);
        PushLocalAreas();
    }
}

document.getElementById("a-submit").onclick = function(){
    var val = document.getElementById("a-answer-input").value;
    var bool = CheckAnswer(val, currentQuestion.subQuestions[0]);
    if (bool){
        document.getElementById("a-submit").style.backgroundColor = '#52d383';
        CorrectAnswer(currentQuestion.subQuestions[0]);
        //document.getElementById("a-submit").style.color
    } else {
        document.getElementById("a-submit").style.backgroundColor = '#d05454';
        document.getElementById("a-answer").style.display = "block";
        IncorrectAnswer(currentQuestion.subQuestions[0]);
    }
}

document.getElementById("b-submit").onclick = function(){
    var val = document.getElementById("b-answer-input").value;
    var bool = CheckAnswer(val, currentQuestion.subQuestions[1]);
    if (bool){
        document.getElementById("b-submit").style.backgroundColor = '#52d383';
        CorrectAnswer(currentQuestion.subQuestions[1]);
        //document.getElementById("a-submit").style.color
    } else {
        document.getElementById("b-submit").style.backgroundColor = '#d05454';
        document.getElementById("b-answer").style.display = "block";
        IncorrectAnswer(currentQuestion.subQuestions[1]);
    }
}

document.getElementById("c-submit").onclick = function(){
    var val = document.getElementById("c-answer-input").value;
    var bool = CheckAnswer(val, currentQuestion.subQuestions[2]);
    if (bool){
        document.getElementById("c-submit").style.backgroundColor = '#52d383';
        CorrectAnswer(currentQuestion.subQuestions[2]);
        //document.getElementById("a-submit").style.color
    } else {
        document.getElementById("c-submit").style.backgroundColor = '#d05454';
        document.getElementById("c-answer").style.display = "block";
        IncorrectAnswer(currentQuestion.subQuestions[2]);
    }
}

document.getElementById("d-submit").onclick = function(){
    var val = document.getElementById("d-answer-input").value;
    var bool = CheckAnswer(val, currentQuestion.subQuestions[3]);
    if (bool){
        document.getElementById("d-submit").style.backgroundColor = '#52d383';
        CorrectAnswer(currentQuestion.subQuestions[3]);
        //document.getElementById("a-submit").style.color
    } else {
        document.getElementById("d-submit").style.backgroundColor = '#d05454';
        document.getElementById("d-answer").style.display = "block";
        IncorrectAnswer(currentQuestion.subQuestions[3]);
    }
}

document.getElementById("newQuestion").onclick = function(){
    NextQuestion();
}


function ResetButtons(){
    document.getElementById("a-submit").style.backgroundColor = '#ffffff';
    document.getElementById("b-submit").style.backgroundColor = '#ffffff';
    document.getElementById("c-submit").style.backgroundColor = '#ffffff';
    document.getElementById("d-submit").style.backgroundColor = '#ffffff';
}

function ResetAnswerText(){
    document.getElementById("a-answer").style.display = "none";
    document.getElementById("b-answer").style.display = "none";
    document.getElementById("c-answer").style.display = "none";
    document.getElementById("d-answer").style.display = "none";
}

function ShowNewQuestion(question){
    currentQuestion = question;
    currentQuestion.GenerateAllValues();
    UpdateAllQuestionText();
    UpdateAllFormula();
    ResetButtons();
    ResetAnswerText();
}