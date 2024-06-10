let header = document.querySelector('#intro');
let anim = [
    { t: "~ ~", ms: 500 },
    { t: "~_~", ms: 500 },
    { t: "~ ~", ms: 500 },
    { t: "~_~", ms: 500 },
    { t: "~H_~", ms: 250 },
    { t: "~HI_~", ms: 250 },
    { t: "~HIM_~", ms: 250 },
    { t: "~HIMA_~", ms: 250 },
    { t: "~HIMAR_~", ms: 250 },
    { t: "~HIMARI_~", ms: 250 },
    { t: "~HIMARI-_~", ms: 250 },
    { t: "~HIMARI-C_~", ms: 250 },
    { t: "~HIMARI-CH_~", ms: 250 },
    { t: "~HIMARI-CHA_~", ms: 250 },
    { t: "~HIMARI-CHAN_~", ms: 500 },
    { t: "~HIMARI-CHAN ~", ms: 500 },
    { t: "~HIMARI-CHAN_~", ms: 500 },
    { t: "~HIMARI-CHAN ~", ms: 500 },
    { t: "~HIMARI-CHAN_~", ms: 500 },
    { t: "~HIMARI-CHAN~", ms: 500 },

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