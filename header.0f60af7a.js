function e(e,i,n,d){Object.defineProperty(e,i,{get:n,set:d,enumerable:!0,configurable:!0})}var i=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;i.register("75ZqI",(function(n,d){e(n.exports,"SectionContainer",(()=>o)),e(n.exports,"HeaderContainer",(()=>p)),e(n.exports,"DivContainer",(()=>r)),e(n.exports,"FooterContainer",(()=>l));var t=i("9k1es");const a=t.css`
  max-width: 100%;
  padding: 0 20px 80px 20px;

  @media screen and (min-width: 768px) {
    width: 708px;
    padding-right: 30px;
    padding-left: 30px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1366px) {
    width: 1306px;
  }
`,o=t.default.section`
  ${a}
`,p=t.default.header`
  ${a}
`,r=t.default.div`
  ${a}
`,l=t.default.div`
  ${a}
  padding: 80px 20px 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`}));