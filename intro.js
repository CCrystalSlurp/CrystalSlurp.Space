let header = document.querySelector('#intro');
let anim = [
    { t: "~ ~", ms: 500 },
    { t: "~_~", ms: 500 },
    { t: "~ ~", ms: 500 },
    { t: "~_~", ms: 500 },
    { t: "~C_~", ms: 250 },
    { t: "~CR_~", ms: 250 },
    { t: "~CRY_~", ms: 250 },
    { t: "~CRYS_~", ms: 250 },
    { t: "~CRYST_~", ms: 250 },
    { t: "~CRYSTA_~", ms: 250 },
    { t: "~CRYSTAL_~", ms: 250 },
    { t: "~CRYSTAL ~", ms: 250 },
    { t: "~CRYSTAL_~", ms: 500 },
    { t: "~CRYSTAL ~", ms: 500 },
    { t: "~CRYSTAL_~", ms: 500 },
    { t: "~CRYSTAL ~", ms: 500 },
    { t: "~CRYSTAL_~", ms: 500 },
    { t: "~CRYSTAL~", ms: 500 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
}
update();