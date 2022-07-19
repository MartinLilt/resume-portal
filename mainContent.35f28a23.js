function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;t.register("6XVr6",(function(i,n){var a;a=i.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),e(i.exports,"default",(()=>t("f8gi4").default));t("f8gi4")})),t.register("f8gi4",(function(i,n){e(i.exports,"default",(()=>c));var a=t("iM5HV"),r=t("enwbC"),o=t("75ZqI"),s=t("hVi7Y");t("jr2It");var l=t("81rTd"),d=t("e6K88");var c=()=>(0,a.jsx)("main",{children:(0,a.jsxs)(o.SectionContainer,{children:[(0,a.jsxs)(r.MainList,{title:"I'm Martin. - Nice to meet you!",children:[(0,a.jsx)(r.MainSentence,{children:(0,a.jsx)(r.MainDefaultText,{children:"Hi"})}),(0,a.jsx)(r.MainSentence,{children:(0,a.jsx)(r.MainDefaultText,{size:"75px",color:s.varStyle.colors.accent,children:"I'm"})}),(0,a.jsx)(r.MainSentence,{children:(0,a.jsx)(r.MainDefaultText,{children:"Martin"})}),(0,a.jsxs)(r.MainSentence,{children:[(0,a.jsx)(r.MainDefaultText,{size:"20px",children:"Your web developer"}),(0,a.jsx)(r.MainSupEl,{})]})]}),(0,a.jsx)(r.MainSvg,{title:"Scroll below to see more!",children:(0,a.jsx)(d.default,{fill:s.varStyle.colors.accent})}),(0,a.jsx)(l.default,{})]})})})),t.register("enwbC",(function(i,n){e(i.exports,"MainList",(()=>o)),e(i.exports,"MainSentence",(()=>s)),e(i.exports,"MainDefaultText",(()=>l)),e(i.exports,"MainSupEl",(()=>d)),e(i.exports,"MainSvg",(()=>c));var a=t("9k1es"),r=t("hVi7Y");const o=a.default.ul`
  &::before {
    content: '';
    display: flex;
    background: ${r.varStyle.backgrounds.accent};
    clip-path: polygon(0 0, 100% 0%, 97% 100%, 0% 100%);
    width: 100px;
    height: 15px;
  }

  margin: 0 0 40px 0;
  padding: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,s=a.default.li`
  position: relative;
  list-style: none;
  height: 70px;
  display: flex;

  &:last-child {
    margin: 0 0 40px 0;
  }

  &::after {
    content: '';
    display: flex;
    background: ${r.varStyle.backgrounds.opacity.low};
    box-shadow: ${r.varStyle.shadows.inset};
    height: inherit;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,l=a.default.p`
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: ${e=>e.size||"55px"};
  line-height: 67px;
  text-transform: uppercase;
  color: ${e=>e.color||r.varStyle.colors.white};
  margin: 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,d=a.default.span`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: ${r.varStyle.backgrounds.accent};
  width: 85px;
  height: 15px;

  &::after {
    content: '';
    background: #ffffff;
    width: 130%;
    position: absolute;
    left: 100px;
    height: 3px;
  }
`,c=a.default.span`
  display: block;
  margin: 0 auto 40px auto;
  width: 60px;
  height: 60px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`})),t.register("hVi7Y",(function(t,i){e(t.exports,"varStyle",(()=>n));const n={backgrounds:{accent:"#ffc206",main:"#1d1d1d",white:"#ffffff",opacity:{low:"rgba(255,255,255,0.25)",medium:"rgba(255,255,255,0.35)"}},colors:{accent:"#ffc206",white:"#ffffff",dark:"#000000"},shadows:{inset:"inset 0px 4px 15px rgb(0 0 0 / 35%)"}}})),t.register("jr2It",(function(i,n){e(i.exports,"default",(()=>t("81rTd").default));t("81rTd")})),t.register("81rTd",(function(i,n){e(i.exports,"default",(()=>s));var a=t("iM5HV"),r=t("luDwY"),o=t("b2XTL");var s=()=>(0,a.jsx)(o.ItemMainList,{children:r.links.map(((e,t)=>(0,a.jsx)(o.ItemMainSentence,{title:`Click to open my ${e.name} profile.`,children:(0,a.jsxs)(o.ItemMainLink,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsx)(o.ItemMainBox,{}),(0,a.jsxs)(o.ItemMainText,{children:["Follow me on ",e.name]})]})},t)))})})),t.register("luDwY",(function(t,i){e(t.exports,"links",(()=>n)),e(t.exports,"modalLinks",(()=>a)),e(t.exports,"modalType",(()=>r));const n=[{name:"linkedin",href:"https://www.linkedin.com/in/martin-liminovic-44046b21a/"},{name:"github",href:"https://github.com/MartinLilt"},{name:"instagram",href:"https://www.instagram.com/limi.amm/"},{name:"upwork",href:"https://www.upwork.com/"}],a={contacts:[{title:"whatsapp",href:"https://wa.me/message/6H4GYDA6KLTND1"},{title:"telegram",href:"https://t.me/limi_amm"},{title:"reddit",href:"https://www.reddit.com/u/amaliik?utm_medium=android_app&utm_source=share"},{title:"mail",href:"mailto:liminovi@gmail.com"}],info:[]},r={menu:"modal-menu",contact:"modal-contact"}})),t.register("b2XTL",(function(i,n){e(i.exports,"ItemMainList",(()=>o)),e(i.exports,"ItemMainSentence",(()=>s)),e(i.exports,"ItemMainLink",(()=>l)),e(i.exports,"ItemMainBox",(()=>d)),e(i.exports,"ItemMainText",(()=>c));var a=t("9k1es"),r=t("hVi7Y");const o=a.default.ul`
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,s=a.default.li`
  list-style: none;
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 40px 0;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,l=a.default.a`
  text-decoration: none;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,d=a.default.div`
  display: flex;
  height: 120px;
  background: ${r.varStyle.backgrounds.opacity.low};
  box-shadow: ${r.varStyle.shadows.inset};

  &::before {
    content: '';
    width: 15px;
    height: 100%;
    background: ${r.varStyle.backgrounds.accent};
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`,c=a.default.p`
  height: 35px;
  display: flex;
  margin: 0;
  align-items: flex-end;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${r.varStyle.colors.accent};

  &::after {
    content: '';
    position: absolute;
    display: flex;
    background: ${r.varStyle.backgrounds.opacity.low};
    box-shadow: ${r.varStyle.shadows.inset};
    height: inherit;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1366px) {
  }
`})),t.register("e6K88",(function(i,n){e(i.exports,"default",(()=>r));var a=t("iM5HV");t("fYo6y");var r=e=>(0,a.jsx)("svg",{viewBox:"0 0 60 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,a.jsx)("path",{d:"M60 0 34.202 25h-8.32L0 0h9.076l21.176 20.536L51.597 0H60Z"})})}));