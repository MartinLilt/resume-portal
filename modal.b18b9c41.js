function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;t.register("6uLgj",(function(n,o){var i;i=n.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(()=>t("h0rd6").default));t("h0rd6")})),t.register("h0rd6",(function(n,o){e(n.exports,"default",(()=>s));var i=t("iM5HV"),a=t("bToCu"),l=t("luDwY"),r=t("e6K88");var s=({toggleModal:e,modalContent:t})=>{const n=t===l.modalType.menu,o=n?l.modalLinks.info:l.modalLinks.contacts;return(0,i.jsx)(a.ModalBox,{children:(0,i.jsxs)(a.ModalContainer,{children:[(0,i.jsxs)(a.ModalTitle,{children:[(0,i.jsx)("h3",{children:n?"More info":"Contacts"}),(0,i.jsx)("button",{title:`Click to close ${n?"menu":"contacts"}.`,onClick:()=>e(null),children:(0,i.jsx)(r.default,{})}),(0,i.jsx)("button",{title:`Click to close ${n?"menu":"contacts"}.`,onClick:()=>e(null),children:(0,i.jsx)(r.default,{})})]}),(0,i.jsx)(a.ModalList,{children:o.map(((e,t)=>(0,i.jsx)(a.ModalSentence,{children:(0,i.jsx)(a.ModalLink,{href:e.href,target:"_blank",rel:"noopener noreferrer",title:`Click to contact me on ${e.title}.`,children:e.title})},t)))})]})})}})),t.register("bToCu",(function(n,o){e(n.exports,"ModalBox",(()=>r)),e(n.exports,"ModalContainer",(()=>s)),e(n.exports,"ModalTitle",(()=>d)),e(n.exports,"ModalList",(()=>c)),e(n.exports,"ModalSentence",(()=>f)),e(n.exports,"ModalLink",(()=>u));var i=t("9k1es"),a=t("hVi7Y"),l=t("75ZqI");const r=i.default.div`
  background: ${a.varStyle.backgrounds.accent};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999;
`,s=(0,i.default)(l.DivContainer)``,d=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,c=i.default.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`,f=i.default.li`
  background: ${a.varStyle.backgrounds.main};
  display: flex;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }

  &::after {
    content: '';
    background: ${a.varStyle.backgrounds.white};
    width: 15px;
    display: flex;
  }
`,u=i.default.a`
  padding: 25px 0 0 0;
  width: 100%;

  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${a.varStyle.colors.white};
`})),t.register("hVi7Y",(function(t,n){e(t.exports,"varStyle",(()=>o));const o={backgrounds:{accent:"#ffc206",main:"#1d1d1d",white:"#ffffff",opacity:{low:"rgba(255,255,255,0.25)",medium:"rgba(255,255,255,0.35)"}},colors:{accent:"#ffc206",white:"#ffffff",dark:"#000000"},shadows:{inset:"inset 0px 4px 15px rgb(0 0 0 / 35%)"}}})),t.register("luDwY",(function(t,n){e(t.exports,"links",(()=>o)),e(t.exports,"modalLinks",(()=>i)),e(t.exports,"modalType",(()=>a));const o=[{name:"linkedin",href:"https://www.linkedin.com/in/martin-liminovic-44046b21a/"},{name:"github",href:"https://github.com/MartinLilt"},{name:"instagram",href:"https://www.instagram.com/limi.amm/"},{name:"upwork",href:"https://www.upwork.com/"}],i={contacts:[{title:"whatsapp",href:"https://wa.me/message/6H4GYDA6KLTND1"},{title:"telegram",href:"https://t.me/limi_amm"},{title:"reddit",href:"https://www.reddit.com/u/amaliik?utm_medium=android_app&utm_source=share"},{title:"mail",href:"mailto:liminovi@gmail.com"}],info:[]},a={menu:"modal-menu",contact:"modal-contact"}})),t.register("e6K88",(function(n,o){e(n.exports,"default",(()=>a));var i=t("iM5HV");t("fYo6y");var a=e=>(0,i.jsx)("svg",{viewBox:"0 0 60 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M60 0 34.202 25h-8.32L0 0h9.076l21.176 20.536L51.597 0H60Z"})})}));