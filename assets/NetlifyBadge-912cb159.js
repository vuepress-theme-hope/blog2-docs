import{u as l,C as s}from"./app-63c31c85.js";import{c as o,j as t}from"./framework-58e4e69c.js";const n=o({name:"NetlifyBadge",props:{alt:{type:String,default:"Deploys by Netlify"}},setup(e){const{isDarkmode:a}=l();return()=>t(s,()=>t("a",{href:"https://www.netlify.com",target:"_blank"},t("img",{src:`https://www.netlify.com/img/global/badges/netlify-${a.value?"dark":"light"}.svg`,alt:e.alt})))}});export{n as N};
