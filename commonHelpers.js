import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const r={datePicker:document.querySelector("#datetime-picker"),btnStart:document.querySelector("[data-start]"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),timer:document.querySelector(".timer")};let c,a;r.btnStart.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];a=e,e<=Date.now()&&(m.show({message:"Please choose a date in the future"}),r.btnStart.disabled=!0)}};l("#datetime-picker",S);r.datePicker.addEventListener("click",()=>{r.btnStart.disabled=!1});r.btnStart.addEventListener("click",()=>{c=setInterval(()=>{const t=Date.now(),e=a-t,o=h(e),n=f(o);r.timer.textContent=n,r.btnStart.disabled=!0},1e3),setTimeout(()=>{clearInterval(c)},a-Date.now())});function f({days:t,hours:e,minutes:o,seconds:n}){return t=t.toString().padStart(2,"0"),e=e.toString().padStart(2,"0"),o=o.toString().padStart(2,"0"),n=n.toString().padStart(2,"0"),`${t}:${e}:${o}:${n}`}function h(t){const i=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:d,minutes:s,seconds:u}}
//# sourceMappingURL=commonHelpers.js.map
