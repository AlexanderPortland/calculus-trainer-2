
class SubQuestion{
    constructor(_unit, _demand, _question, _answerFormula, _steps){
        this.unit = _unit;
        this.demand = _demand;
        this.question = _question;
        this.answerFormula = _answerFormula;
        this.steps = _steps;
        this.finalAnswer;
        this.answer;

        this.localVars;
        this.a;
        this.q;
        this.c;
        this.d;
        this.e;
        this.parentQuestion;
        
        //this.simplifiedAnswer = this.SubValues(this.answerFormula);;
    }

    NewValues(){
        this.a = (Math.floor(Math.random() * 9) + 1);
        this.b = (Math.floor(Math.random() * 9) + 1);
        this.d = (Math.floor(Math.random() * 9) + 1);
        this.q = (Math.floor(Math.random() * 9) + 1);
        this.v = (Math.floor(Math.random() * 5) + 1);

        this.e = (Math.floor(Math.random() * 8) + 2);
        this.p = (Math.floor(Math.random() * 8) + 2);
        this.c = (Math.floor(Math.random() * 8) + 2);

        this.f = (Math.floor(Math.random() * 8) + 2);
        if (Math.random() >= 0.5) this.f = 0 - this.f;
        this.g = (Math.floor(Math.random() * 8) + 2);
        if (Math.random() >= 0.5) this.g = 0 - this.g;
        this.n = (Math.floor(Math.random() * 5) + 1);
        if (Math.random() >= 0.5) this.n = 0 - this.n;
        
        this.r = (Math.floor(Math.random() * this.a) + 1);
        this.s = (Math.floor(Math.random() * this.r) + 1);
        this.t = (Math.floor(Math.random() * this.s) + 1);
        
        this.w = (Math.floor(Math.random() * 3) + 2);
        this.l = 2*(Math.floor(Math.random() * 3) + 1);

        this.a = this.a.toString();
        this.b = this.b.toString();
        this.c = this.c.toString();
        this.d = this.d.toString();
        this.e = this.e.toString();
        this.f = this.f.toString();
        this.g = this.g.toString();
        this.l = this.l.toString();
        this.q = this.q.toString();
        this.r = this.r.toString();
        this.s = this.s.toString();
        this.t = this.t.toString();
        this.w = this.w.toString();
    }

    SubValues(stringToSub){
        var value = stringToSub;

        value = value.replace(/a_a/g,this.a);
        value = value.replace(/b_b/g,this.b);
        value = value.replace(/c_c/g,this.c);
        value = value.replace(/d_d/g,this.d);
        value = value.replace(/e_e/g,this.e);
        value = value.replace(/f_f/g,this.f);
        value = value.replace(/g_g/g,this.g);
        value = value.replace(/l_l/g,this.l);
        value = value.replace(/n_n/g,this.n);
        value = value.replace(/p_p/g,this.p);
        value = value.replace(/r_r/g,this.r);
        value = value.replace(/s_s/g,this.s);
        value = value.replace(/t_t/g,this.t);
        value = value.replace(/q_q/g,this.q);
        value = value.replace(/v_v/g,this.v);
        value = value.replace(/w_w/g,this.w);
        value = value.replace(/=>/g, "\\(\\rightarrow\\)");
        value = value.replace(/\+ -/g,"- ");
        value = value.replace(/\+-/g,"-");
        value = value.replace(/-\+/g,"-");
        value = value.replace(/- \+/g,"-");
        value = value.replace(/1x/g,"x");
        value = value.replace(/1y/g,"y");
        
        value = value.replace(/2x/g,"2*x");
        value = value.replace(/3x/g,"3*x");
        value = value.replace(/4x/g,"4*x");
        value = value.replace(/5x/g,"5*x");
        value = value.replace(/6x/g,"6*x");
        value = value.replace(/7x/g,"7*x");
        value = value.replace(/8x/g,"8*x");
        value = value.replace(/9x/g,"9*x");
        value = value.replace(/10x/g,"10*x");

        value = value.replace(/11x/g,"11*x");
        value = value.replace(/12x/g,"12*x");
        value = value.replace(/13x/g,"13*x");
        value = value.replace(/14x/g,"14*x");
        value = value.replace(/15x/g,"15*x");
        value = value.replace(/16x/g,"16*x");
        value = value.replace(/17x/g,"17*x");
        value = value.replace(/18x/g,"18*x");
        value = value.replace(/19x/g,"19*x");
        value = value.replace(/20x/g,"20*x");
        
        value = value.replace(/21x/g,"21*x");
        value = value.replace(/22x/g,"22*x");
        value = value.replace(/23x/g,"23*x");
        value = value.replace(/24x/g,"24*x");
        value = value.replace(/25x/g,"25*x");
        value = value.replace(/26x/g,"26*x");
        value = value.replace(/27x/g,"27*x");
        value = value.replace(/28x/g,"28*x");
        value = value.replace(/29x/g,"29*x");

        value = value.replace(/2y/g,"2*y");
        value = value.replace(/3y/g,"3*y");
        value = value.replace(/4y/g,"4*y");
        value = value.replace(/5y/g,"5*y");
        value = value.replace(/6y/g,"6*y");
        value = value.replace(/7y/g,"7*y");
        value = value.replace(/8y/g,"8*y");
        value = value.replace(/9y/g,"9*y");
        value = value.replace(/10y/g,"10*y");
        value = value.replace(/11y/g,"11*y");
        value = value.replace(/12y/g,"12*y");
        value = value.replace(/13y/g,"13*y");
        value = value.replace(/14y/g,"14*y");
        value = value.replace(/15y/g,"15*y");
        value = value.replace(/16y/g,"16*y");
        value = value.replace(/17y/g,"17*y");
        value = value.replace(/18y/g,"18*y");
        value = value.replace(/19y/g,"19*y");
        value = value.replace(/20y/g,"20*y");
        value = value.replace(/21y/g,"21*y");
        value = value.replace(/22y/g,"22*y");
        value = value.replace(/23y/g,"23*y");
        value = value.replace(/24y/g,"24*y");
        value = value.replace(/25y/g,"25*y");
        value = value.replace(/26y/g,"26*y");
        value = value.replace(/27y/g,"27*y");
        value = value.replace(/28y/g,"28*y");
        value = value.replace(/29y/g,"29*y");
        //value = value.replace(/finalAnswer/g,this.finalAnswer); <- moved to question form substitution
        //value = value.replace(/simplifiedAnswer/g,this.);
        return value;
    }

    MathJaxToMathJS(stringToSub){
        var value = stringToSub;
        value = value.replace(/{/g,"(");
        value = value.replace(/}/g,")");
        value = value.replace(/over/g," / ");
        value = value.replace(/ver/g," / ");
        value = value.replace(/times/g," * ");
        value = value.replace(/imes/g," * ");
        value = value.replace(/\\/g,"");
        //console.log(value);
        return value;
    }

    MathJSToMathJax(stringToSub){
        var value = stringToSub;
        //console.log(value);
        value = value.replace(/\(/g,"{");
        value = value.replace(/\)/g,"}");
        value = value.replace(/\//g," /\\/over ");
        value = value.replace(/\*/g," /\\/times ");
        return value;
    }

    SimplifiedAnswer(stringToSub){
        var value = stringToSub;
        var value1 = value.slice(1, value.indexOf("over")-1);
        value1 = math.evaluate(this.MathJaxToMathJS(this.SubValues(value1))).toString();
        value1 = this.MathJSToMathJax(value1);
        var value2 = value.slice(value.indexOf("over") + 4, value.length-1);
        //value2 = this.Solve(value2);
        //console.log(value1);
        //console.log(value2);

        //var rex = new RegExp("\\\\");
        var finalValue = value1 + "\\" + "over " + value2;

        return finalValue;
    }

    Solve(stringToSolve){
        stringToSolve = this.parentQuestion.HalfSubValues(stringToSolve);
        //console.log(stringToSolve);
        stringToSolve = this.SubValues(stringToSolve);
        stringToSolve = this.MathJaxToMathJS(stringToSolve);
        stringToSolve = math.evaluate(stringToSolve);
        stringToSolve = math.round(stringToSolve, 3);
        //stringToSolve = math.round(stringToSolve, 3);
        //console.log(stringToSolve);
        return stringToSolve;
    }
    FixAnswerText(){

    }

    FindAnswer(){
        //console.log(this.answer);
        this.finalAnswer = this.Solve(this.answerFormula);
    }
}

class QuestionForm{
    constructor(_type, _test, _calculator, _bigUnit, _pitch, _globalVars, _subQuestions, _imageSource){
        this.type = _type;
        this.test = _test;
        this.calculator = _calculator;
        this.bigUnit = _bigUnit;
        this.pitch = _pitch;
        this.globalVars = _globalVars;
        this.subQuestions = _subQuestions;
        this.subQuestions.forEach(element => {
            element.parentQuestion = this;
        });
        this.imageSource = _imageSource;
        
        this.a;
        this.b;
        this.c;
        this.d;
        this.e;
        this.f;
        this.g;
        this.p;
        this.q;
        this.r;
        this.w;
    }


    NewValues(){
        this.a = (Math.floor(Math.random() * 9) + 1);
        this.b = (Math.floor(Math.random() * 9) + 1);

        this.d = (Math.floor(Math.random() * 9) + 1);
        this.q = (Math.floor(Math.random() * 9) + 1);

        this.e = (Math.floor(Math.random() * 8) + 2);

        this.sign;
        if (Math.random() >= 0.5) this.sign = "+";
        else this.sign = "-";
        
        this.f = (Math.floor(Math.random() * 8) + 2);
        if (Math.random() >= 0.5) this.f = 0 - this.f;
        this.g = (Math.floor(Math.random() * 8) + 2);
        if (Math.random() >= 0.5) this.g = 0 - this.g;
        this.n = (Math.floor(Math.random() * 5) + 1);
        if (Math.random() >= 0.5) this.n = 0 - this.n;

        this.p = (Math.floor(Math.random() * 6) + 2);
        this.c = (Math.floor(Math.random() * 8) + 2);
        
        this.r = (Math.floor(Math.random() * this.a) + 1);
        this.s = (Math.floor(Math.random() * this.r) + 1);
        this.t = (Math.floor(Math.random() * this.s) + 1);
        
        this.w = (Math.floor(Math.random() * 3) + 2);
        this.i = (this.w-1);
        this.j = (this.w-2);

        this.a = this.a.toString();
        this.b = this.b.toString();
        this.c = this.c.toString();
        this.d = this.d.toString();
        this.e = this.e.toString();
        this.f = this.f.toString();
        this.g = this.g.toString();
        this.q = this.q.toString();
        this.r = this.r.toString();
        this.s = this.s.toString();
        this.t = this.t.toString();
        this.w = this.w.toString();
        this.i = this.i.toString();
        this.j = this.j.toString();
    }

    FullSubValues(documentToSwitch, subQToUse){
        var string = documentToSwitch;

        
        if (subQToUse < this.subQuestions.length) string = this.subQuestions[subQToUse].SubValues(string);
        else console.log("subQToUse subbed in out of range of subQuestions");
        string = this.SubValues(string);
        return string;
    }

    HalfSubValues(stringToSub){
        var value = stringToSub;
        value = value.replace(/-sign/g,this.sign);
        value = value.replace(/aaa/g,this.a);
        value = value.replace(/bbb/g,this.b);
        value = value.replace(/ccc/g,this.c);
        value = value.replace(/ddd/g,this.d);
        value = value.replace(/eee/g,this.e);
        value = value.replace(/fff/g,this.f);
        value = value.replace(/ggg/g,this.g);
        value = value.replace(/nnn/g,this.n);
        value = value.replace(/ppp/g,this.p);
        value = value.replace(/qqq/g,this.q);
        value = value.replace(/rrr/g,this.t);
        value = value.replace(/sss/g,this.s);
        value = value.replace(/ttt/g,this.t);
        value = value.replace(/www/g,this.w);
        value = value.replace(/iii/g,this.i);
        value = value.replace(/jjj/g,this.j);
        value = value.replace(/=>/g, "\\(\\rightarrow\\)");
        value = value.replace(/\+ -/g,"- ");
        value = value.replace(/- \+/g,"- ");
        value = value.replace(/-\+/g,"- ");
        value = value.replace(/\+-/g,"-");
        value = value.replace(/--/g,"+");
        value = value.replace(/- -/g,"+ ");
        value = value.replace(/1x/g,"x");
        value = value.replace(/1y/g,"y");
        return value;
    }

    SubValues(stringToSub){
        let value = this.HalfSubValues(stringToSub);
        this.subQuestions.forEach(element => {
            element.FindAnswer();
        });
        value = value.replace(/finalAnswer/g,this.subQuestions[0].finalAnswer);
        if(this.subQuestions.length > 1) value = value.replace(/finalBnswer/g,this.subQuestions[1].finalAnswer);
        if(this.subQuestions.length > 2) value = value.replace(/finalCnswer/g,this.subQuestions[2].finalAnswer);
        //value = value.replace(/simplifiedAnswer/g,this.);
        return value;
    }

    MathJaxToMathJS(stringToSub){
        var value = stringToSub;
        value = value.replace(/{/g,"(");
        value = value.replace(/}/g,")");
        value = value.replace(/over/g," / ");
        value = value.replace(/ver/g," / ");
        value = value.replace(/times/g," * ");
        value = value.replace(/imes/g," * ");
        value = value.replace(/\\/g,"");
        //console.log(value);
        return value;
    }

    MathJSToMathJax(stringToSub){
        var value = stringToSub;
        value = value.replace(/\(/g,"{");
        value = value.replace(/\)/g,"}");
        value = value.replace(/\//g," /\\/over ");
        value = value.replace(/\*/g," /\\/times ");
        value = value.replace(/\\/g,"");
        return value;
    }

    FixAnswerText(){

    }

    SimplifiedAnswer(stringToSub){
        var value = stringToSub;
        var value1 = value.slice(1, value.indexOf("over")-1);
        value1 = math.evaluate(this.MathJaxToMathJS(this.SubValues(value1))).toString();
        value1 = this.MathJSToMathJax(value1);
        var value2 = value.slice(value.indexOf("over") + 4, value.length-1);
        value2 = this.Solve(value2);

        //var rex = new RegExp("\\\\");
        var finalValue = value1 + "\\" + "over " + value2;

        return finalValue;
    }

    GenerateAllValues(){
        this.NewValues();
        this.FixAnswerText();
        this.subQuestions.forEach(element => {
            element.NewValues();
            element.FixAnswerText();
        });
    }

    Contains(area){
        if (this.unit == area) return true;
        for (let i = 0; i < this.subQuestions.length; i++) {
            const element = this.subQuestions[i];
            if (element.unit == area) return true;
        }
        return false;
    }
}

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
//areas.push(new Area(
//    "3.2",
//    [1, 1, 1, 1],
//    0,
//    0
//));
//areas.push(new Area(
//    "4.7",
//    [0, 1, 0, 1],
//    0,
//    0
//));

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

console.log(areas);
//PushLocalAreas();


console.log(areas);

//console.log(areas[0].name);
//console.log(areas[0].unit + ": " + areas[0].accuracy + "accuracy");


//function DisplayQuestion(questionForm){
//    var documentsToSwitch = new Array();
//    documentsToSwitch.push(document.getElementById("pitch"));
//    document.getElementById("pitch").innerText = questionForm.pitch;
//    document.getElementById("a-question").innerText = questionForm.subQuestions[0].question;
//    document.getElementById("b-question").innerText = questionForm.subQuestions[1].question;
//    document.getElementById("c-question").innerText = questionForm.subQuestions[2].question;
//    questionForm.SubNewValues(documentsToSwitch);
//}

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



let questions = new Array();

//#region AP Related Rates Questions
function q1(){
    let subQs = new Array();
    subQs.push(new SubQuestion(
        "8.1",
        null,
        "(a) Find the average value of the radius of the funnel",
        "{{qqq \\over {ccc}} + {aaa^2 \\over {3*ccc}}}",
        "average value = \\({1 \\over {b-a}} \\times \\int_a^b{f(h) \\>dh}\\) <br>\\( = {1 \\over {aaa-0}} \\times \\int_0^aaa{\\left({{qqq + h^2} \\over ccc}\\right) \\>dh} \\) &nbsp; [1 point] <br>\\( = {{1 \\over aaa} \\times {1 \\over ccc}} \\times \\int_0^aaa{(qqq + h^2) \\>dh} \\) <br>\\( = {1\\over aaa \\times ccc} \\left[qqq(h) + {{(h)^3}\\over 3}\\right]_0^aaa\\) &nbsp; [1 point] <br> \\(= {1\\over aaa \\times ccc} \\left(qqq(aaa) + {{(aaa)^3}\\over 3}\\right) = finalAnswer\\) in &nbsp; [1 point]"
    ));
    subQs.push(new SubQuestion(
        "8.9",
        null,
        "(b) Find the volume of the funnel",
        "{\\pi \\over ccc^2} * ((aaa * qqq^2) + {aaa^5 \\over 5} + {{2*qqq*aaa^3} \\over 3})",
        "volume = \\(\\int_0^h{A(h) \\>dh}\\) <br> = \\(\\int_0^aaa{\\left(\\pi R(h)^2\\right) \\>dh}\\) <br> = \\(\\pi\\int_0^aaa{\\left({{qqq + h^2} \\over ccc}\\right)^2 \\>dh}\\) &nbsp; [1 point] <br> = \\({\\pi \\over{ccc^2}} \\int_0^aaa{\\left({qqq + h^2}\\right)^2 \\>dh}\\) <br> = \\({\\pi \\over{ccc^2}} \\int_0^aaa{\\left({qqq^2 + 2(qqq)h^2 + h^4}\\right) \\>dh}\\) <br> = \\({\\pi \\over{ccc^2}} \\left[{qqq^2h + {2(qqq)h^3\\over3} + {h^5\\over5}}\\right]_0^aaa\\) &nbsp; [1 point] <br> = \\({\\pi \\over{ccc^2}} \\left({qqq^2(aaa) + {2(qqq)(aaa)^3\\over3} + {(aaa)^5\\over5}}\\right) = finalBnswer\\) inches\\(^3\\) &nbsp; [1 point]"
    ));
    subQs.push(new SubQuestion(
        "4.5",
        "The funnel contains a liquid that is draining from the bottom. at the instant when the liquid is \\(h = d_d \\) inches, the radius of the surface of the liquid is decreasing at a rate of \\(1 \\over eee \\) inch per second.",
        "(c) At this instant, what is the rate of change of the height of the liquid with respect to time?",
        "{-ccc \\over {2 (eee \\times d_d)}}",
        "\\({dr \\over dt} = {2h\\overccc} \\left({dh\\over dt}\\right)\\rightarrow {dh \\over dt} = \\left({dr\\over dt}\\right){ccc\\over2h}\\) &nbsp; [2 points] <br> = \\(\\left(-1 \\over eee\\right){ccc\\over2(d_d)}\\) = \\(finalCnswer \\) in/sec &nbsp; [1 point]"
    ));
    let a = new QuestionForm(
        1, 
        "AP Calculus BC 2016 - Question 5",
        false,
        "Geometry",
        "The inside of a funnel of height aaa inches has circular cross-sections as shown in the image above. At height <var>h</var>, the radius of the funnel is given by \\(r={{qqq + h^2} \\over ccc}\\) where \\(0 \\le h \\le aaa \\)",
        null,
        subQs,
        "2016C-5"
    );
    return a;
}

function q2(){
    subQs = new Array();
    newQ = new SubQuestion(
        "3.2",
        null,
        "(a) Find \\({d^2y}\\over{dx^2}\\) in terms of <var>x</var> and <var>y</var>",
        "(www*(x)^(www-1))+((x^www) / -signppp)+(y / (ppp^2))",
        "\\(f''(x) = {wwwx^{(www-1)}} -sign {1\\over ppp} \\left(dy\\over dx\\right) = {wwwx^{(www-1)}} -sign {1\\over ppp} \\left(x^www+{y\\overppp}\\right) = {wwwx^q_q} -sign {{x^www} \\over ppp} +{y \\over {ppp^2}}\\)"
    );
    newQ.FixAnswerText = function (){
        var oneLessThanW = newQ.parentQuestion.w;
        oneLessThanW = parseInt(oneLessThanW)-1;
        oneLessThanW = oneLessThanW.toString();
        newQ.q = oneLessThanW;
    }
    newQ.FindAnswer = function (){
    }
    subQs.push(newQ);
    var complexQuestion = new SubQuestion(
        "5.4",
        "",
        "(b) let \\(y = f(x)\\) be the solution to a particular graph which passes through the point \\((n_n, d_d)\\). does the graph of \\(f\\) have a relative minimum, a relative maximum or neither at the point \\((n_n, d_d)\\)?",
        "0",
        null
    );
    complexQuestion.FixAnswerText = function (){
        //console.log("looking for anwer");
        var oneLessThanW = complexQuestion.parentQuestion.w;
        oneLessThanW = parseInt(oneLessThanW)-1;
        oneLessThanW = oneLessThanW.toString();
        complexQuestion.d = complexQuestion.Solve("--signppp*((n_n)^www)");
        var secondDerivative = complexQuestion.Solve("(www*(n_n)^" + oneLessThanW + ")+((n_n^www) / -signppp)+(d_d / (ppp^2))");
        console.log(secondDerivative);
        if (secondDerivative > 0){
            complexQuestion.answer = "minimum";
            complexQuestion.steps = "\\(f'(x) = (x)^www -sign {y \\over ppp} = 0\\) and \\(f''(x) = {wwwx^" + oneLessThanW + "} -sign {1\\over ppp} \\left(dy\\over dx\\right) = {wwwx^" + oneLessThanW + "} -sign {{x^www} \\over ppp} +{y \\over {ppp^2}}\\) <br> \\(f'(n_n) = (n_n)^www -sign {d_d \\over ppp} = 0\\) and \\(f''(n_n) = {www(n_n)^" + oneLessThanW + "} -sign {{n_n^www} \\over ppp} +{d_d \\over {ppp^2}} = " + secondDerivative.toString() + "\\) <br> since \\(f'(n_n) = 0\\) and \\(f''(n_n) = " + secondDerivative.toString() + " > 0\\), we know that the graph of \\(f\\) is concave up at \\(x = n_n\\), meaning that \\((n_n, d_d)\\) is a local minimum &nbsp; [2 points]";
        } else if (secondDerivative < 0){
            complexQuestion.answer = "maximum";
            complexQuestion.steps = "\\(f'(x) = (x)^www -sign {y \\over ppp} = 0\\) and \\(f''(x) = {wwwx^" + oneLessThanW + "} -sign {1\\over ppp} \\left(dy\\over dx\\right) = {wwwx^" + oneLessThanW + "} -sign {{x^www} \\over ppp} +{y \\over {ppp^2}}\\) <br> \\(f'(n_n) = (n_n)^www -sign {d_d \\over ppp} = 0\\) and \\(f''(n_n) = {www(n_n)^" + oneLessThanW + "} -sign {{n_n^www} \\over ppp} +{d_d \\over {ppp^2}} = " + secondDerivative.toString() + "\\) <br> since \\(f'(n_n) = 0\\) and \\(f''(n_n) = " + secondDerivative.toString() + " < 0\\), we know that the graph of \\(f\\) is concave down at \\(x = n_n\\), meaning that \\((n_n, d_d)\\) is a local maximum &nbsp; [2 points]";
        } else {
            complexQuestion.answer = "neither";
            complexQuestion.steps = "\\(f'(x) = (x)^www -sign {y \\over ppp} = 0\\) and \\(f''(x) = {wwwx^" + oneLessThanW + "} -sign {1\\over ppp} \\left(dy\\over dx\\right) = {wwwx^" + oneLessThanW + "} -sign {{x^www} \\over ppp} +{y \\over {ppp^2}}\\) <br> \\(f'(n_n) = (n_n)^www -sign {d_d \\over ppp} = 0\\) and \\(f''(n_n) = {www(n_n)^" + oneLessThanW + "} -sign {{n_n^www} \\over ppp} +{d_d \\over {ppp^2}} = " + secondDerivative.toString() + "\\) <br> since \\(f'(n_n) = 0\\) and \\(f''(n_n) = 0\\), we know that the graph of \\(f\\) is neither concave up nor concave down at \\(x = n_n\\), meaning that \\((n_n, d_d)\\) is not a local minimum or maximum &nbsp; [2 points]";
        }
        
    }
    complexQuestion.FindAnswer = function(){

    }
    subQs.push(complexQuestion);
    var newQuestion = new SubQuestion(
        "4.7",
        "",
        "(c) let \\(y = g(x)\\) be the particular solution to the given differential equation with \\(g(n_n)=f_f\\). find \\(\\mathop{lim}\\limits_{x\\rightarrown_n}  {{g(x)-f_f}\\over{e_e(x-n_n)^{2}}}\\).",
        "{{{qqq \\over {ccc}} + {aaa^2 \\over {3*ccc}}} \\over {2 \\times e_e}}",
        "\\(\\mathop{lim}\\limits_{x\\rightarrown_n}  {{g(x)-f_f}\\over{e_e(x-n_n)^{2}}}={f_f-f_f \\over e_e(n_n-n_n)^2} = {0\\over0}\\) <br> so, using l'Hopital's rule,  \\(\\mathop{lim}\\limits_{x\\rightarrown_n} {{g'(x)}\\over{2*e_e(x-n_n)}}={0\\over0}\\) <br> so, using l'Hopital's rule again, \\(\\mathop{lim}\\limits_{x\\rightarrown_n} {{g''(x)} \\over {2 \\times e_e}} = {{{qqq \\over {ccc}} + {aaa^2 \\over {3*ccc}}} \\over {2 \\times e_e}}\\) [2 points] <br> = \\(finalCnswer\\) &nbsp;[1 point]"
    );
    newQuestion.FixAnswerText =  function(){
        newQuestion.f = newQuestion.Solve("--signppp*((n_n)^www)");
    }
    subQs.push(newQuestion);
    subQs.push(new SubQuestion(
        "7.5",
        "",
        "(d) let \\(y = h(x)\\) be the particular solution to the given differential equation with \\(h(0)=c_c\\). Using Euler's method, starting at \\(x=0\\) with l_l steps of equal size, approximate \\(h(1)\\)",
        "0",
        "blah"
    ));
    let a = new QuestionForm(
        1, 
        "AP Calculus BC 2016 - Question 4",
        false,
        "Differential Equations",
        "Consider the differential equation \\({dy \\over dx } = x^www -sign {1\\overppp}y\\)",
        null,
        subQs,
        ""
    );
    console.log(a.subQuestions.length);
    return a;
}

function q3(){
let subQs = new Array();
let newQ = new SubQuestion(
    "3.2",
    null,
    "(a) Show that \\({{dy}\\over dx} = {bbby\\over wwwy^q_q-bbbx}\\)",
    "0",
    "\\(wwwy^{(www-1)}y' = bbb(y + xy')\\) &nbsp;[1 point] <br> \\((wwwy^q_q-bbbx)y' = bbby\\) <br> \\(y' = {bbby\\over wwwy^q_q-bbbx}\\)"
);
newQ.FixAnswerText = function() {
    var oneLessThanW = newQ.parentQuestion.w;
    oneLessThanW = parseInt(oneLessThanW)-1;
    oneLessThanW = oneLessThanW.toString();
    newQ.q = oneLessThanW;
}
subQs.push(newQ);
let newQuestion = new SubQuestion(
    "5.4",
    "",
    "(c) Show that there are no points \\( (x, y) \\) on the curve where the line tangent to the curve is horizontal",
    "0",
    "horizontal line\\(: y' = 0 \\rightarrow {bbby\\over wwwy^q_q-bbbx} = 0 \\rightarrow y = 0\\) &nbsp;[1 point] <br> but \\(y^www = ccc + bbbxy \\rightarrow 0^www = ccc + bbbx(0) \\rightarrow 0 = ccc\\) <br> which is not true, so there can never be a point where the y value is 0 and thus never a horizontal tangent [1 point]"
);
newQuestion.FixAnswerText = function () {
    var oneLessThanW = newQuestion.parentQuestion.w;
    oneLessThanW = parseInt(oneLessThanW)-1;
    oneLessThanW = oneLessThanW.toString();
    newQuestion.q = oneLessThanW;
}
subQs.push(newQuestion);
qqq = new SubQuestion(
    "4.5",
    "",
    "(d) Let \\(x\\) and \\(y\\) be functions of time \\(t\\) that are related by the equation \\(y^www = ccc + bbbxy\\). At time \\(t=aaa\\), the value of <var>y</var> is ccc and \\({dy\\over dt} = qqq\\). Find the value of \\({dx\\over dt}\\) at time \\(t=aaa\\)",
    "0",
    "When \\(y=aaa\\), \\((aaa)^www = ccc + bbbx(aaa)\\) so \\(x = {{aaa^www} - ccc \\over bbb(aaa)}=a_a\\) &nbsp;[1 point] <br> \\({dy\\over dt} = {dy\\over dx} * {dx\\over dt} = {bbby\\over wwwy^iii-bbbx}* {dx \\over dt}\\) &nbsp;[1 point] <br> At \\(t=aaa\\), &nbsp; \\(qqq = {bbb(ccc)\\over www(ccc)^iii-bbb(a_a)} * {dx \\over dt} = b_b * {dx \\over dt}\\) <br> \\({dx \\over dt} = {qqq \\over b_b} = w_w\\) &nbsp;[1 point]"
);
qqq.FixAnswerText = function () {
    var solved = qqq.Solve("{{{aaa^www} - ccc} \\over bbb(aaa)}");
    qqq.a = solved;
    solved = qqq.Solve("{{bbb(ccc)}\\over {www(ccc)^iii-bbb(a_a)}}");
    qqq.b = solved;
    solved = qqq.Solve("{qqq \\over b_b}");
    qqq.w = solved;
}
subQs.push(qqq);
let a = new QuestionForm(
    1, 
    "AP Calculus BC 2005 - Question 5",
    false,
    "Implicit Differentiation",
    "Consider the curve given by \\(y^www = ccc + bbbxy\\)",
    null,
    subQs,
    ""
);
return a;
}

function q4(){
    //not finished yet
    subQs = new Array();
    b = new SubQuestion(
        "4.5",
        "",
        "(a) find the rate of change of the volume of water in the barrel with respect to time when the height of the water is a_a feet. Indicate units of measure.",
        "\\pi * ccc^2 * ({-{1 \\over aaa}\\sqrt{a_a}})",
        "\\({dV \\over dt} = \\pi r^2 \\left(dh \\over dt \\right)\\) &nbsp; [1 point] <br> \\({\\left[dV \\over dt \\right]_{h=a_a}} = \\pi * ccc^2 \\left[dh \\over dt \\right]_{h=a_a}\\) <br> \\(= \\pi * ccc^2 \\left({-{1 \\over aaa}\\sqrt{a_a}}\\right)= e_e\\) feet\\(^3\\)/second &nbsp; [1 point]"
    );
    b.FixAnswerText = function() {
        b.e = b.Solve("\\pi * ccc^2 * ({-{1 \\over aaa}\\sqrt{a_a}})")
    }
    subQs.push(b);
    var complexQuestion = new SubQuestion(
        "5.3",
        "",
        "(b) when the height of the water is b_b feet, is the rate of change of the height of the water with respect to time increasing or decreasing? Explain your reasoning.",
        "0",
        ""
    );
    complexQuestion.FixAnswerText = function (){
        complexQuestion.e = complexQuestion.parentQuestion.a * 2;
        complexQuestion.g = complexQuestion.parentQuestion.a * complexQuestion.e;
        console.log("looking for anwer");
        var secondDerivative = complexQuestion.Solve("1 \\over (aaa * e_e)");
        //console.log(secondDerivative);
        if (secondDerivative > 0){
            complexQuestion.answer = "increasing";
            complexQuestion.steps = "\\({d^2h \\over dh^2} = -{1 \\over 2(aaa) \\sqrt{h}} * {dh \\over dt}\\) &nbsp; [1 point] <br> \\(= -{1 \\over e_e \\sqrt{h}} * {-{1\\over aaa} \\sqrt{h}}\\) &nbsp; [1 point] <br> \\(= {1 \\over e_e (aaa)}\\) <br> Because \\({d^2y \\over dy^2} = {1 \\over g_g} > 0\\) for \\(h > 0\\), the rate of change of the height is <b>increasing</b> when the height of the water is b_b feet. &nbsp; [1 point]"
        } else if (secondDerivative < 0){
            complexQuestion.answer = "decreasing";
            complexQuestion.f = "<br> Because \\({d^2y \\over dy^2} = {1 \\over g_g} < 0\\) for \\(h > 0\\), the rate of change of the height is decreasing when the height of the water is \\(b_b\\) feet."
        } else {
            complexQuestion.answer = "oh no oopsie";
        }
    }
    subQs.push(complexQuestion);
    subQs.push(new SubQuestion(
        "7.7",
        "",
        "(c) At time \\(t = 0\\) seconds, the height of the water is a_a feet. Use separation of variables to find an expression for \\(h\\) in terms of \\(t\\)",
        "0",
        "\\({dh \\over \\sqrt h } = - {1 \\over aaa} dt\\) &nbsp; [1 point] <br> \\(\\left \\int{dh \\over \\sqrt h } = \\int- {1 \\over aaa} dt\\)"
    ));
    let a = new QuestionForm(
        1,
        "AP Calculus BC 2019 - Question 4",
        false,
        "Geometry",
        "A cylindrical barrel with a diameter of eee feet contains collected rainwater, as shown in the figure above. The water drains out through a valve (not shown) at the bottom of the barrel. The rate of change of the height \\(h\\) of the water in the barrel with respect to time \\(t\\) is modeled by \\({dh \\over dt} = {-{1 \\over aaa}\\sqrt{h}}\\) where \\(h\\) is measured in feet and \\(t\\) is measured in seconds. (The volume \\(V\\) of a cylinder with radius \\(r\\) and height \\(h\\) is \\(V = \\pi r^2h\\).) ",
        null,
        subQs,
        "2019C-4"
    );
    a.FixAnswerText = function (){
        a.e = a.c * 2;
    }
    return a;
}

function q5(){
    //not finished yet
    subQs = new Array();
    subQs.push(new SubQuestion(
        "8.5",
        "",
        "(a) find the area of \\(R\\).",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "8.9",
        "",
        "(b) find the volume of the solid generated when \\(R\\) is rotated about the horizontal line \\(y = c_c\\).",
        "0",
        null,
    ));
    subQs.push(new SubQuestion(
        "8.9",
        "",
        "(c) write, but do not evaluate, an integral expression that can be used to find the volume of the solid generated when \\(R\\) is rotated about the y-axis.",
        "0",
        null
    ));
    let a = new QuestionForm(
        1,
        "AP Calculus AB 2006 - Question 1",
        true,
        "Integration",
        "Let \\(R\\) be the shaded region bounded by the graph of \\(y = ln \\;x\\) and the line \\(y = bbbx-aaa\\), as shown above.",
        null,
        subQs,
        "2006B-1"
    );
    return a;
}

function q6(){
    //not finished yet
    subQs = new Array();
    subQs.push(new SubQuestion(
        "3.2",
        "",
        "(a) evaluate \\({dy \\over dx}\\) and \\({d^2y \\over dx^2}\\) at \\((-ddd,-eee)\\) [use a comma in between your two answers]",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "5.4",
        "",
        "(b) Is it possible for the <var>x</var>-axis to be tangent to the graph of \\(f\\) at some point? Explain why or why not.",
        "0",
        null,
    ));
    subQs.push(new SubQuestion(
        "10.11",
        "",
        "(c) find the second-degree Taylor polynomial for \\(f\\) about \\(x = -ddd\\)",
        "0",
        null
    ));
    let q = new SubQuestion(
        "7.5",
        "",
        "(d) use Euler's method, starting at \\(x = -ddd\\) with two steps of equal size, to approximate \\(f(-q_q)\\).",
        "0",
        null
    );
    subQs.push(q);
    q.FixAnswerText = function (){
        var oneLessThanD = q.parentQuestion.d;
        oneLessThanD = parseInt(oneLessThanD)-1;
        oneLessThanD = oneLessThanD.toString();
        q.q = oneLessThanD;
    }
    let a = new QuestionForm(
        1,
        "AP Calculus BC 2006 - Question 5",
        true,
        "Differential Equations",
        "Consider the differential equation \\({dy \\over dx} = aaax^www--sign{ccc \\over y-bbb}\\) for \\(y \\ne bbb\\). Let \\(y = f(x)\\) be the particular solution to this differential equation with the initial condition \\(f(-ddd)=-eee\\).",
        null,
        subQs,
        ""
    );
    return a;
}

function q7(){
    //not finished yet
    subQs = new Array();
    subQs.push(new SubQuestion(
        "8.5",
        "",
        "(a) find the area of \\(R\\).",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "8.7",
        "",
        "(b) region \\(R\\) is the base of a solid. For the solid, each cross section perpendicular to the <var>x</var>-axis is a square. What is the volume of the solid (in units)?",
        "0",
        null,
    ));
    subQs.push(new SubQuestion(
        "8.5",
        "",
        "(c) the horizontal line \\(y = k\\) divides \\(R\\) into two regions of equal area. Find the value of k.",
        "0",
        null
    ));
    let a = new QuestionForm(
        1,
        "AP Calculus AB 2012 - Question 2",
        true,
        "Integration",
        "Let \\(R\\) be the region in the first quadrant bounded by the <var>x</var>-axis and the graphs of \\(y = ln \\;x\\) and \\(y = 5 - aaax\\), as shown in the figure above",
        null,
        subQs,
        "2012B-2"
    );
    return a;
}

function q8(){
    //not finished yet
    subQs = new Array();
    subQs.push(new SubQuestion(
        "2.1",
        "",
        "(a) find the average rate of change of \\(A(t)\\) over the interval \\(0 \\le t \\le aaa0\\). Indicate units of measure.",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "2.7",
        "",
        "(b) find the value of \\(A'(bbb)\\). Using correct units, interpret the meaning of the value in the context of the problem.",
        "0",
        null,
    ));
    subQs.push(new SubQuestion(
        "8.1",
        "",
        "(c) find the time \\(t\\) for which the amount of www in the bin is equal to the average amount of www in the bin over the interval \\(0 \\le t \\le aaa0\\).",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "4.6",
        "",
        "(d) for \\(t > aaa\\), the linear approximation to \\(A\\) at \\(t = aaa\\) is a better model for the amount of www remaining in the bin. Use \\(L(t)\\) to predict the time at which there will be 0.c_c pounds of www remaining in the bin. Show the work that leads to your answer.",
        "0",
        null
    ));
    let a = new QuestionForm(
        1,
        "AP Calculus AB 2014 - Question 1",
        true,
        "Applications of Derivatives",
        "www are placed in a bin, where they decompose. For \\(0 \\le t \\le aaa0\\), the amount of www remaining in the bin is modeled by \\(A(t) = ccc(ddd)^t\\).",
        null,
        subQs,
        ""
    );
    a.FixAnswerText = function (){
        var tingz = ["grass clippings", "potatoes", "mangoes", "banana peels", "rocks", "flowers"];
        var num = Math.floor(Math.random()*tingz.length);
        a.w = tingz[num];
        console.log("victory");
        a.b = a.a*5;
        a.c = Math.floor(Math.random()*10000)/1000;
        a.d = Math.floor(Math.random()*1000)/1000;
    }
    return a;
}

function q9(){
    //not finished yet
    subQs = new Array();
    subQs.push(new SubQuestion(
        "2.7",
        "",
        "(a) find \\(G'(rrr)\\). Using correct units, interpret your answer in the context of the problem.",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "8.3",
        "",
        "(b) find the total amount of unprocessed www that arrives at the plant during the hours of operation on this workday.",
        "0",
        null,
    ));
    subQs.push(new SubQuestion(
        "2.7",
        "",
        "(c) is the amount of unprocessed gravel at the plant increasing or decreasing at time \\(t = rrr\\) hours? Show the work that leads to your answer.",
        "0",
        null
    ));
    subQs.push(new SubQuestion(
        "5.5",
        "",
        "(d) what is the maximum amount of unprocessed gravel at the plant during the hours of operation on this workday? Justify your answer.",
        "0",
        null
    ));
    let a = new QuestionForm(
        1,
        "AP Calculus AB 2013 - Question 1",
        true,
        "Applications of Integrals",
        "On a certian workday, the rate, in tons per hour, at which unprocessed www arrives at a www processing plant is modeled by \\(G(t) = ddd0 + bbb \\qqq\\left({t^2 \\over ccc}\\right)\\), where \\(t\\) is measured in hours and \\(0 < t < aaa\\). At the beginning of the work day \\((t = 0)\\), the plant has ppp00 tons of processed gravel. During the hours of operation, \\(0 < t < aaa\\), the plant processes gravel at a constant rate of fff0 tons per hour.",
        null,
        subQs,
        ""
    );
    a.FixAnswerText = function (){
        a.w = Random(["gravel", "water", "juice"]);
        a.b = a.d*5;
        a.q = Random(["cos", "sin"]);
        a.c = a.c * 2;
        a.f = (parseInt(a.d)+1).toString();
    }
    return a;
}

//Completely finished
questions.push(q1());
questions.push(q2());

//Largely finished
questions.push(q3());


//Working on

if (false){
    questions.push(q4());
    questions.push(q5());
    //Shell only
    questions.push(q6());
    questions.push(q7());
    questions.push(q8());
    questions.push(q9());
}

//#endregion


//#region IB Related Rates Questions
function qq1(){
    subQs = new Array();
    var complexQuestion = new SubQuestion(
        "4.5",
        "",
        "(a) find an expression for the volume of water \\(V(m^3)\\) in the trough in terms of \\(\\theta\\)",
        "0",
        null
    );
    complexQuestion.FixAnswerText = function (){
        console.log("looking for anwer");
        var secondDerivative = complexQuestion.Solve("(2*ccc)+((c_c^w_w) / -signp_p)+(d_d / (p_p^2))");
        //console.log(secondDerivative);
        if (secondDerivative > 0){
            complexQuestion.answerFormula = "minimum";
        } else if (secondDerivative < 0){
            complexQuestion.answerFormula = "maximum";
        } else {
            complexQuestion.answerFormula = "neither";
        }
    }
    complexQuestion.FindAnswer = function(){

    }
    subQs.push(complexQuestion);
    subQs.push(new SubQuestion(
        "3.2",
        "The volume of water is increasing at a constant rate of \\(0.000b_b {m^3}s^{-1}\\)",
        "(b) calculate \\({d\\theta}\\over{dt}\\) when \\(\\theta = {\\pi \\over w_w}\\)",
        "0",
        null,
    ));
    let a = new QuestionForm(
        2,
        "IB Analysis HL 2017 | Paper 2 - Question 8",
        false,
        "Differential Equations",
        "A water trough which is www0 metres long has a uniform cross-section in the shape of a semicircle with radius 0.aaa metres. It is partly filled with water as shown in the following diagram of the cross-section. The centre of the circle is O and the angle KOL is \\(\\theta\\) radians.",
        null,
        subQs,
        "2017H2-8"
    );
    return a;
}

if (false){
    questions.push(qq1());
}
//#endregion


//#region 
function qqq1(){
    subQs = new Array();
    var complexQuestion = new SubQuestion(
        "4.5",
        "",
        "(a) find an expression for the volume of water \\(V(m^3)\\) in the trough in terms of \\(\\theta\\)",
        "0",
        null
    );
    complexQuestion.FixAnswerText = function (){
        console.log("looking for anwer");
        var secondDerivative = complexQuestion.Solve("(2*ccc)+((c_c^w_w) / -signp_p)+(d_d / (p_p^2))");
        //console.log(secondDerivative);
        if (secondDerivative > 0){
            complexQuestion.answerFormula = "minimum";
        } else if (secondDerivative < 0){
            complexQuestion.answerFormula = "maximum";
        } else {
            complexQuestion.answerFormula = "neither";
        }
    }
    complexQuestion.FindAnswer = function(){

    }
    subQs.push(complexQuestion);
    subQs.push(new SubQuestion(
        "3.2",
        "The volume of water is increasing at a constant rate of \\(0.000b_b {m^3}s^{-1}\\)",
        "(b) calculate \\({d\\theta}\\over{dt}\\) when \\(\\theta = {\\pi \\over w_w}\\)",
        "0",
        null,
    ));
    let a = new QuestionForm(
        2,
        "IB Analysis HL 2017 | Paper 2 - Question 8",
        false,
        "Differential Equations",
        "A water trough which is www0 metres long has a uniform cross-section in the shape of a semicircle with radius 0.aaa metres. It is partly filled with water as shown in the following diagram of the cross-section. The centre of the circle is O and the angle KOL is \\(\\theta\\) radians.",
        null,
        subQs,
        "2017H2-8"
    );
    return a;
}

//#endregion



console.log(questions[0].Contains("8.1"))
//ShowNewQuestion(questions[i]);

NextQuestion();

ShowNewQuestion(questions[0]);



