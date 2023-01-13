function randomFromVals(vals){
    n = (Math.floor(Math.random() * vals.length));
    return vals[n];
}
var basicFunctionNames = ["f", "g"]; //O
var basicConstantNames = ["k", "c"]; //N

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

        this.o = randomFromVals(basicFunctionNames);
        this.n = randomFromVals(basicConstantNames);

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
        value = value.replace(/o_o/g,this.o);
        value = value.replace(/n_n/g,this.n);
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
        this.o;
        this.n;
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
        this.i = (this.w - 1);
        this.j = (this.w - 2);

        this.o = randomFromVals(basicFunctionNames);
        this.n = randomFromVals(basicConstantNames);

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
        value = value.replace(/ooo/g,this.o);
        value = value.replace(/nnn/g,this.n);
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

var allAreas = [
    ["1.6", "Determining Limits", ""],
    //["2.1", "Average Rate of Change", "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:average-rate-of-change/v/introduction-to-average-rate-of-change"],
    ["2.9", "Complex Derivative Rules", ""],
    ["3.2", "Implicit Differentiation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-2/v/implicit-differentiation-1"],
    ["4.5", "Related Rates", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-4/v/rates-of-change-between-radius-and-area-of-circle"],
    //["4.6", "Linear Approximation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-6/v/linear-approximation-example"],
    ["4.7", "L'Hopital's Rule", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-7/v/introduction-to-l-hopital-s-rule"],
    ["5.3", "Determining If Function Is Increasing", ""],
    ["5.4", "Determining Local Extrema", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-2/v/finding-critical-numbers"],
    //["5.5", "Determining Global Extrema", ""],
    ["6.9", "Integrating Using Substitution", ""],
    ["7.5", "Euler's Method", "https://www.khanacademy.org/math/ap-calculus-bc/bc-differential-equations-new/bc-7-5/v/eulers-method"],
    //["7.7", "Solving Differential Equations", "https://www.khanacademy.org/math/ap-calculus-ab/ab-differential-equations-new/ab-7-7/v/finding-constant-of-integration-rational"],
    ["8.1", "Average Value", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-1/v/average-function-value-closed-interval"],
    //["8.5", "Area Between Curves", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-4/v/area-between-curves"],
    //["8.7", "Volumes with Cross Sections", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-7/v/volume-with-cross-sections-intro"],
    ["8.9", "Volumes of Rotation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-9/v/disk-method-around-<var>x</var>-axis"],
    //["10.11", "Taylor Polynomials", "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new/bc-10-11/v/maclaurin-and-taylor-series-intuition"]
];