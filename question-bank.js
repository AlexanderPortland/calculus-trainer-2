let questions = new Array();

//#region AP Related Rates Questions
function sixteenBCfive(){
    let subQs = new Array();
    subQs.push(new SubQuestion(
        "8.1",
        null,
        "(a) Find the average value of the radius of the funnel.",
        "{{qqq \\over {ccc}} + {aaa^2 \\over {3*ccc}}}",
        `\\begin{align*} \\text{average value } & = {1 \\over {b-a}} \\times \\int_a^b{f(h) \\>dh} \\\\
        & = {1 \\over {aaa-0}} \\times \\int_0^aaa{\\left({{qqq + h^2} \\over ccc}\\right) \\>dh} &&\\text{[1 point]} \\hspace{50cm} \\\\
        & = {{1 \\over aaa} \\times {1 \\over ccc}} \\times \\int_0^aaa{(qqq + h^2) \\>dh} \\\\
        & = {1\\over aaa \\times ccc} \\left[qqq(h) + {{(h)^3}\\over 3}\\right]_0^aaa &&\\text{[1 point]} \\\\
        & = {1\\over aaa \\times ccc} \\left(qqq(aaa) + {{(aaa)^3}\\over 3}\\right) = finalAnswer &&\\text{[1 point]} \\end{align*}`
    ));
    subQs.push(new SubQuestion(
        "8.9",
        null,
        "(b) Find the volume of the funnel.",
        "{\\pi \\over ccc^2} * ((aaa * qqq^2) + {aaa^5 \\over 5} + {{2*qqq*aaa^3} \\over 3})",
        `\\begin{align*} \\text{volume } & = \\int_0^h{A(h) \\>dh} = \\int_0^aaa{\\left(\\pi R(h)^2\\right) \\>dh} \\\\
        & = \\pi\\int_0^aaa{\\left({{qqq + h^2} \\over ccc}\\right)^2 \\>dh} &&\\text{[1 point]} \\hspace{50cm} \\\\
        & = {\\pi \\over{ccc^2}} \\int_0^aaa{\\left({qqq + h^2}\\right)^2 \\>dh} \\\\
        & = {\\pi \\over{ccc^2}} \\int_0^aaa{\\left({qqq^2 + 2(qqq)h^2 + h^4}\\right) \\>dh} \\\\
        & = {\\pi \\over{ccc^2}} \\left[{qqq^2h + {2(qqq)h^3\\over3} + {h^5\\over5}}\\right]_0^aaa &&\\text{[1 point]} \\\\
        & = {\\pi \\over{ccc^2}} \\left({qqq^2(aaa) + {2(qqq)(aaa)^3\\over3} + {(aaa)^5\\over5}}\\right) = finalBnswer \\text{ inches}^3 &&\\text{[1 point]} \\end{align*}`
    ));
    subQs.push(new SubQuestion(
        "4.5",
        "The funnel contains a liquid that is draining from the bottom. at the instant when the liquid is \\(h = d_d \\) inches, the radius of the surface of the liquid is decreasing at a rate of \\(1 \\over eee \\) inch per second.",
        "(c) At this instant, what is the rate of change of the height of the liquid with respect to time?",
        "{-ccc \\over {2 (eee \\times d_d)}}",
        `\\begin{align*} {dr \\over dt} = {2h\\overccc} \\left({dh\\over dt}\\right)\\rightarrow {dh \\over dt} & = \\left({dr\\over dt}\\right){ccc\\over2h} &&\\text{[2 points]} \\hspace{50cm} \\\\
        & = \\left(-1 \\over eee\\right){ccc\\over2(d_d)} = finalCnswer \\text{ in/sec} &&\\text{[1 point]} \\end{align*}`
    ));
    let a = new QuestionForm(
        1, 
        "AP Calculus BC 2016 - Question 5",
        false,
        "Geometry",
        "The inside of a funnel of height aaa inches has circular cross-sections as shown in the image above. At height <var>h</var>, the radius of the funnel is given by \\(r={{qqq + h^2} \\over ccc}\\) where \\(0 \\le h \\le aaa \\).",
        null,
        subQs,
        "2016C-5"
    );
    return a;
}

function sixteenBCfour(){
    subQs = new Array();
    newQ = new SubQuestion(
        "3.2",
        null,
        "(a) Find \\({d^2y}\\over{dx^2}\\) in terms of <var>x</var> and <var>y</var>.",
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
        "(b) Let \\(y = f(x)\\) be the solution to a particular graph which passes through the point \\((n_n, d_d)\\). does the graph of \\(f\\) have a relative minimum, a relative maximum or neither at the point \\((n_n, d_d)\\)?",
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
        "(c) Let \\(y = g(x)\\) be the particular solution to the given differential equation with \\(g(n_n)=f_f\\). find \\(\\mathop{lim}\\limits_{x\\rightarrown_n}  {{g(x)-f_f}\\over{e_e(x-n_n)^{2}}}\\).",
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
        "(d) Let \\(y = h(x)\\) be the particular solution to the given differential equation with \\(h(0)=c_c\\). Using Euler's method, starting at \\(x=0\\) with l_l steps of equal size, approximate \\(h(1)\\).",
        "0",
        "blah"
    ));
    let a = new QuestionForm(
        1, 
        "AP Calculus BC 2016 - Question 4",
        false,
        "Differential Equations",
        "Consider the differential equation \\({dy \\over dx } = x^www -sign {1\\overppp}y\\).",
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
        "(a) Find the rate of change of the volume of water in the barrel with respect to time when the height of the water is a_a feet. Indicate units of measure.",
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
        "(b) When the height of the water is b_b feet, is the rate of change of the height of the water with respect to time increasing or decreasing? Explain your reasoning (but don't type it in).",
        "1",
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
            //should never happen bc of question wording
            complexQuestion.f = "<br> Because \\({d^2y \\over dy^2} = {1 \\over g_g} < 0\\) for \\(h > 0\\), the rate of change of the height is decreasing when the height of the water is \\(b_b\\) feet."
            //complexQuestion.steps = "<br> Because \\({d^2y \\over dy^2} = {1 \\over g_g} < 0\\) for \\(h > 0\\), the rate of change of the height is decreasing when the height of the water is \\(b_b\\) feet."
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
        "\\({dh \\over \\sqrt h } = - {1 \\over aaa} dt\\) &nbsp; [1 point] <br> \\( \\int{dh \\over \\sqrt h} = \\int- {1 \\over aaa} dt\\) <br> \\( 2\\sqrt{h} = -{1 \\over aaa} t + C\\) &nbsp; [1 point] <br> \\( 2\\sqrt{a_a} = -{1 \\over aaa}\\left(0\\right) + C => C = 2\\sqrt{a_a}\\) &nbsp; [1 point] <br> \\( 2\\sqrt{h} = -{1 \\over aaa}t + 2\\sqrt{a_a}\\) <br> \\(h(t) = \\left(-{1 \\over 2*aaa}t + \\sqrt{a_a}\\right)^2\\) &nbsp; [1 point]"
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


function nineteenBCone(){
    //not finished yet
    subQs = new Array();
    b = new SubQuestion(
        "6.9",
        "",
        "(a) How many fish enter the lake over the ppp-hour period from midnight \\((t = 0)\\) to ppp A.M. \\((t = ppp)\\)? Give your answer to the nearest whole number.",
        "a_a",
        "\\(\\int_0^ppp{E(t) \\text{ } dt} = \\int_0^ppp\\left(www0 + 15 \\sin\\left(\\pi t \\over ttt\\right)\\right) dt\\) &nbsp; [1 point] <br> \\(\\int_0^ppp\\left.{E(t) \\text{ } dt} = www0x - {{ttt (15) \\cos\\left({\\pi x} \\over ttt\\right)} \\over \\pi}\\right\\rvert_0^ppp \\) <br> \\(= www0(ppp) - {{t_t \\cos\\left({ppp\\pi} \\over ttt\\right)} \\over \\pi} + {{t_t \\cos\\left(0\\right)} \\over \\pi} = e_e\\) &nbsp; [1 point] <br> To the nearest whole number, a_a fish enter the lake from midnight to ppp A.M."
    );
    b.FixAnswerText = function() {
        b.t = b.Solve("ttt * 15");
        b.w = b.Solve("www0 * 15");
        b.e = b.Solve("www0(ppp) - {{t_t \\cos({ppp\\pi} \\over ttt)} \\over \\pi} + {{t_t \\cos(0)} \\over \\pi}");
        b.a = Math.round(b.e);
    }
    subQs.push(b);
    var complexQuestion = new SubQuestion(
        "8.1",
        "",
        "(b) What is the average number of fish that leave the lake per hour over the ppp-hour period from midnight \\((t = 0)\\) to ppp A.M. \\((t = ppp)\\)?",
        "e_e",
        "\\({1\\over ppp - 0} \\int_0^ppp{L(t) \\text{ } dt} = {1\\over ppp - 0} \\int_0^ppp({aaa + 2^{0.qqqt}})dt = e_e\\) &nbsp; [1 point] <br> The average number of fish that leave the lake per hour from midnight to ppp A.M. is e_e fish per hour. &nbsp; [1 point]"
    );
    complexQuestion.FixAnswerText = function() {
        //b.e = b.Solve("{2^{0.qqqt} \\over {0.qqq * log(2, 2.718)}} + 4*ppp");
        //complexQuestion.e = complexQuestion.Solve("log(2, 2.718)");
        //complexQuestion.e = complexQuestion.Solve("(pow(2, 0.qqqt) / (0.qqq * log(2, 2.718)))");
        complexQuestion.e = complexQuestion.Solve("(pow(2, 0.qqq * ppp) / (0.qqq * log(2, 2.718)) + aaa*ppp - (1 / (0.qqq * log(2, 2.718)))) / ppp");
    }
    subQs.push(complexQuestion);
    subQs.push(new SubQuestion(
        "5.4",
        "",
        "(c) At what time \\(t\\) for \\(0 \\le t \\le jjj\\), is the greatest number of fish in the lake? Justify your answer.",
        "0",
        ""
    ));
    d = new SubQuestion(
        "5.3",
        "",
        "(d) Is the rate of change in the number of fish in the lake increasing or decreasing at ppp A.M. \\((t = ppp)\\)? Explain your reasoning.",
        "0",
        "\\(E'(ppp) - L'(ppp) = e_e - (r_r) = a_a n_n 0 \\) &nbsp; [1 point] <br> Because \\(E'(ppp) - L'(ppp) n_n 0 \\), the rate of change in the number of fish is b_b at time \\((t = ppp)\\) &nbsp; [1 point]"
    );
    d.FixAnswerText = function() {
        d.e = d.Solve("15 cos({\\pi ppp} \\over ttt) * \\pi / ttt");
        d.r = d.Solve("{2^{0.qqq * ppp} * log(2, 2.718) * 0.qqq}");
        console.log(d.j);
        d.a = d.Solve("e_e - r_r");
        d.n = "<";
        d.b = "decreasing";
        if (d.a > 0){
            d.n = ">";
            d.b = "increasing";
        }
        d.answer = d.b;
    }
    subQs.push(d);
    let a = new QuestionForm(
        1,
        "AP Calculus BC 2019 - Question 1",
        false,
        "Geometry",
        "Fish enter a lake at a rate modelled by the function \\(E\\) given by \\(E(t) = www0 + 15 \\sin\\left(\\pi t \\over ttt\\right)\\). Fish leave the lake at a rate modeled by the function \\(L\\) given by \\(L(t) = aaa + 2^{0.qqqt}\\). Both \\(E(t)\\) and \\(L(t)\\) are measured in fish per hour, and \\(t\\) is measured in hours since midnight \\((t = 0)\\).",
        null,
        subQs,
        ""
    );
    a.FixAnswerText = function (){
        a.j = parseInt(a.p) + Math.floor(Math.random() * 3) + 1;
        a.j = a.j.toString();
        a.t = 6;
        if (Math.random() > 0.5) a.t = 3;
        a.q = (Math.floor(Math.random() * 4) + 1).toString();
    }
    return a;
}

function nineteenBCfive(){
    //not finished yet
    subQs = new Array();
    a = new SubQuestion(
        "2.9",
        "",
        "(a) Find the value of \\(nnn\\), for \\(nnn > 0\\) such that the slope of the line tangent to the graph of \\(ooo\\) at \\(x=0\\) equals b_b.",
        "0",
        `\\begin{align*} & f'(x) = {-\\left(-2x - aaa \\right) \\over {\\left(x^2 - aaax + nnn\\right)^2}} &&\\text{[2 points]} \\hspace{50cm} \\\\
         & f'(0) = {aaa \\over nnn^2} = b_b \\rightarrow nnn^2 = {1 \\over t_t} \\rightarrow nnn = {1 \\over \\sqrt{t_t}} &&\\text{[1 point]} \\end{align*}`
    );
    a.FixAnswerText = function() {
        a.b = a.Solve("q_q * aaa");
        a.t = a.Solve("b_b / aaa");
    }
    subQs.push(a);

    c = new SubQuestion(
        "1.6",
        "",
        "(c) For \\(nnn = b_b\\), find the value of \\(\\int_0^{t_t}{f(x) \\>dx}\\) or show that it diverges.",
        "0",
        `\\begin{align*}\\int_0^{t_t}{{1 \\over {x^2 - aaax + b_b}}} \\>dx & = \\int_0^{t_t}{{1 \\over \\left(x - iii\\right)^2}} \\>dx  
        = \\int_0^{iii}{{1 \\over \\left(x - iii\\right)^2}} \\>dx + \\int_iii^{t_t}{{1 \\over \\left(x - iii\\right)^2}} \\>dx \\\\ 
        & = \\lim_{b\\to iii^-}\\int_0^{b}{{1 \\over \\left(x - iii\\right)^2}} \\>dx + \\lim_{b\\to iii^+}\\int_b^{t_t}{{1 \\over \\left(x - iii\\right)^2}} \\>dx &&\\text{[1 point]} \\hspace{50cm} \\\\
        & = \\lim_{b\\to iii^-}\\left(\\left.- {1 \\over x - iii} \\right\\rvert_{x=0}^{x=b}\\right) + \\lim_{b\\to iii^+}\\left(\\left.- {1 \\over x - iii} \\right\\rvert_{x=b}^{x=t_t}\\right) &&\\text{[1 point]} \\hspace{50cm} \\\\
        & = \\lim_{b\\to iii^-}\\left(- {1 \\over b - iii} - 1\\right) + \\lim_{b\\to iii^+}\\left(-1 + {1 \\over b - iii}\\right) \\end{align*}
        \\begin{align*}\\text{Because } \\lim_{b\\to iii^-}\\left(- {1 \\over b - iii}\\right) \\text{ does not exist, the interval diverges.} &&\\text{[1 point]} \\hspace{50cm} \\end{align*}`
    );
    c.FixAnswerText = function() {
        c.b = c.Solve("iii * iii");
        min = c.Solve("iii") + 1;
        c.t = (min + (Math.floor(Math.random() * 5) + min)).toString();
    }
    subQs.push(c);
    let f = new QuestionForm(
        1,
        "AP Calculus BC 2019 - Question 5",
        false,
        "Geometry",
        "Consider the family of functions \\(ooo(x) = {1 \\over {x^2 - aaax + nnn}}\\), where \\(nnn\\) is a constant.",
        null,
        subQs,
        ""
    );
    f.FixAnswerText = function (){
        f.i = (Math.floor(Math.random() * 5) + 1);
        f.a = (parseInt(f.i) * 2).toString();
        console.log(f.i + "i");
        console.log(f.a + "a");
        //f.b = (parseInt(a.a) * parseInt(a.q)).toString();
    }
    return f;
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
questions.push(sixteenBCfive());

//Mostly finished
//questions.push(nineteenBCone());
//questions.push(nineteenBCfive());
//questions.push(sixteenBCfour());


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

NextQuestion();

ShowNewQuestion(questions[0]);