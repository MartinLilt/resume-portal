function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;t.register("6uLgj",(function(n,o){var i;i=n.exports,Object.defineProperty(i,"__esModule",{value:!0,configurable:!0}),e(n.exports,"default",(()=>t("h0rd6").default));t("h0rd6")})),t.register("h0rd6",(function(n,o){e(n.exports,"default",(()=>s));var i=t("iM5HV"),l=t("bToCu"),a=t("luDwY"),r=t("e6K88");var s=({toggleModal:e,modalContent:t})=>{const n=t===a.modalType.menu,o=n?a.modalLinks.info:a.modalLinks.contacts;return(0,i.jsx)(l.ModalBox,{children:(0,i.jsxs)(l.ModalContainer,{children:[(0,i.jsxs)(l.ModalTitle,{children:[(0,i.jsx)("h3",{children:n?"More info":"Contacts"}),(0,i.jsx)("button",{title:`Click to close ${n?"menu":"contacts"}.`,onClick:()=>e(null),children:(0,i.jsx)(r.default,{})}),(0,i.jsx)("button",{title:`Click to close ${n?"menu":"contacts"}.`,onClick:()=>e(null),children:(0,i.jsx)(r.default,{})})]}),(0,i.jsx)(l.ModalList,{children:o.map(((e,t)=>(0,i.jsx)(l.ModalSentence,{children:(0,i.jsx)(l.ModalLink,{href:e.href,target:"_blank",rel:"noopener noreferrer",title:`Click to contact me on ${e.title}.`,children:e.title})},t)))})]})})}})),t.register("bToCu",(function(n,o){e(n.exports,"ModalBox",(()=>r)),e(n.exports,"ModalContainer",(()=>s)),e(n.exports,"ModalTitle",(()=>d)),e(n.exports,"ModalList",(()=>c)),e(n.exports,"ModalSentence",(()=>u)),e(n.exports,"ModalLink",(()=>f));var i=t("9k1es"),l=t("hVi7Y"),a=t("75ZqI");const r=i.default.div`
  background: ${l.varStyle.backgrounds.accent};
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 99999;
`,s=(0,i.default)(a.DivContainer)``,d=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,c=i.default.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`,u=i.default.li`
  background: ${l.varStyle.backgrounds.main};
  display: flex;

  &:not(:last-child) {
    margin: 0 0 20px 0;
  }

  &::after {
    content: '';
    background: ${l.varStyle.backgrounds.white};
    width: 15px;
    display: flex;
  }
`,f=i.default.a`
  padding: 25px 0 0 0;
  width: 100%;

  text-decoration: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: uppercase;
  color: ${l.varStyle.colors.white};
`})),t.register("luDwY",(function(t,n){e(t.exports,"links",(()=>o)),e(t.exports,"modalLinks",(()=>i)),e(t.exports,"modalType",(()=>l));const o=[{name:"linkedin",href:"https://www.linkedin.com/in/martin-liminovic-44046b21a/"},{name:"github",href:"https://github.com/MartinLilt"},{name:"instagram",href:"https://www.instagram.com/limi.amm/"},{name:"upwork",href:"https://www.upwork.com/"}],i={contacts:[{title:"whatsapp",href:"https://wa.me/message/6H4GYDA6KLTND1"},{title:"telegram",href:"https://t.me/limi_amm"},{title:"reddit",href:"https://www.reddit.com/u/amaliik?utm_medium=android_app&utm_source=share"},{title:"mail",href:"mailto:liminovi@gmail.com"}],info:[]},l={menu:"modal-menu",contact:"modal-contact"}})),t.register("e6K88",(function(n,o){e(n.exports,"default",(()=>l));var i=t("iM5HV");t("fYo6y");var l=e=>(0,i.jsx)("svg",{viewBox:"0 0 60 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M60 0 34.202 25h-8.32L0 0h9.076l21.176 20.536L51.597 0H60Z"})})}));