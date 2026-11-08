var e=e=>e;function t(e){let t=e-1;return t*t*t+1}function n(e){return e<.5?4*e*e*e:.5*(2*e-2)**3+1}function r(t,{delay:n=0,duration:r=400,easing:i=e}={}){let a=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:i,css:e=>`opacity: ${e*a}`}}function i(e,{delay:n=0,duration:r=400,easing:i=t,start:a=0,opacity:o=0}={}){let s=getComputedStyle(e),c=+s.opacity,l=s.transform===`none`?``:s.transform,u=1-a,d=c*(1-o);return{delay:n,duration:r,easing:i,css:(e,t)=>`
			transform: ${l} scale(${1-u*t});
			opacity: ${c-d*t}
		`}}function a(e,{delay:t=0,speed:r,duration:i,easing:a=n}={}){let o=e.getTotalLength(),s=getComputedStyle(e);return s.strokeLinecap!==`butt`&&(o+=parseInt(s.strokeWidth)),i===void 0?i=r===void 0?800:o/r:typeof i==`function`&&(i=i(o)),{delay:t,duration:i,easing:a,css:(e,t)=>`
			stroke-dasharray: ${o};
			stroke-dashoffset: ${t*o};
		`}}export{r as n,i as r,a as t};