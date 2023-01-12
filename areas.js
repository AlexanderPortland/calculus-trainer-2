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

var allAreas = [
    ["2.1", "Average Rate of Change", "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions/x2f8bb11595b61c86:average-rate-of-change/v/introduction-to-average-rate-of-change"],
    ["2.7", "Complex Derivative Rules", ""],
    ["3.2", "Implicit Differentiation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new/ab-3-2/v/implicit-differentiation-1"],
    ["4.5", "Related Rates", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-4/v/rates-of-change-between-radius-and-area-of-circle"],
    ["4.6", "Linear Approximation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-6/v/linear-approximation-example"],
    ["4.7", "L'Hopital's Rule", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-contextual-applications-new/ab-4-7/v/introduction-to-l-hopital-s-rule"],
    ["5.4", "Determining Local Extrema", "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new/ab-5-2/v/finding-critical-numbers"],
    ["5.5", "Determining Global Extrema", ""],
    ["7.5", "Euler's Method", "https://www.khanacademy.org/math/ap-calculus-bc/bc-differential-equations-new/bc-7-5/v/eulers-method"],
    ["7.7", "Solving Differential Equations", "https://www.khanacademy.org/math/ap-calculus-ab/ab-differential-equations-new/ab-7-7/v/finding-constant-of-integration-rational"],
    ["8.1", "Average Value", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-1/v/average-function-value-closed-interval"],
    ["8.5", "Area Between Curves", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-4/v/area-between-curves"],
    ["8.7", "Volumes with Cross Sections", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-7/v/volume-with-cross-sections-intro"],
    ["8.9", "Volumes of Rotation", "https://www.khanacademy.org/math/ap-calculus-ab/ab-applications-of-integration-new/ab-8-9/v/disk-method-around-<var>x</var>-axis"],
    ["10.11", "Taylor Polynomials", "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new/bc-10-11/v/maclaurin-and-taylor-series-intuition"]
];

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
}

function RecentScore(area){
    var score = 0;
    for (let i = 0; i < area.pastQuestions.length; i++) {
        score += area.pastQuestions[i];
    }
    if (area.pastQuestions.length > 0) score = score / area.pastQuestions.length;
    else score = 0;
    return score;
}

function TotalScore(area){
    var score = area.correct;
    if (area.pastQuestions.length > 0) score = score / area.pastQuestions.length;
    else score = -1;
    return score;
}

function SortAreas(){
    var oldArray = new Array();
    oldArray = areas;
    //console.log(areas);
    var newArray = new Array();
    while (oldArray.length > 0){
        var max = 0;
        for (let i = 1; i < areas.length; i++) {
            //if (RecentScore(areas[i]) > RecentScore(areas[max])) max = i;
            if (TotalScore(areas[i]) > TotalScore(areas[max])) max = i;
        }
        newArray.push(areas[max]);
        oldArray.splice(max, 1);
        console.log(areas);
    }
    areas = newArray;
}

let areas = new Array();

function FetchLocalAreas(){
    areas = new Array();
    if (localStorage.getItem("areas_unit") != null){
        var units = localStorage.getItem("areas_unit").split(',');
        var pastQuestions = localStorage.getItem("areas_pastQuestions").split(',');
        var totalAnswered = localStorage.getItem("areas_totalAnswered").split(',');
        var correct = localStorage.getItem("areas_correct").split(',');


        console.log("success" + units.length);
        for (let i = 0; i < units.length; i++) {
            const element = units[i];
            area = new Area(
                units[i],
                JSON.parse(pastQuestions[i].replace(/-/g, ",")),
                JSON.parse(totalAnswered[i]),
                JSON.parse(correct[i])
            );
            //area.name = NameOf(area.unit);
            areas.push(area);
            
        }
    }
}

FetchLocalAreas();
SortAreas();
console.log(areas);

var listElement = document.getElementById("listElement");

for (let i = 0; i < areas.length; i++) {
    listItem = document.createElement('li');
    var element = areas[i];
    
    var sum = 0;
    for (let i = 0; i < element.pastQuestions.length; i++) {
        sum+= element.pastQuestions[i];
    }
    if (element.pastQuestions.length > 0) var recentAccuracy = Math.round(100 * sum / element.pastQuestions.length) + "%";
    else var recentAccuracy = "~~%"

    if (element.totalAnswered > 0) var accuracy = Math.round(element.correct * 100 / element.totalAnswered) + "%";
    else var accuracy = "~~%";

    listItem.innerHTML = element.unit + "<b> " + element.name + "</a></b> | " + " accuracy:  " + accuracy + " overall, " + recentAccuracy + " recently " + "<div class = \"leftFloat\">(<a href=\"learn.html\" id=\"" + element.unit + "-practice\">Practice</a>, <a href = \"" + element.externalLinks + "\" target = \"_blank\">Learn More</a>)</div>";
    listElement.appendChild(listItem);
    console.log("looking at \"" + element.unit + "-practice\"");
    document.getElementById(element.unit + "-practice").onclick = function (){
        var b = areas[i].unit;
        localStorage.setItem("defaultVal", b);
        console.log("stored " + b + "as default val");
    }
    console.log("told it to set" + areas[i].unit + "as default");
}
