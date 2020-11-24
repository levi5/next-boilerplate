import GlobalStyle from '../src/styles/global.ts';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story)=>(
    <>
    <GlobalStyle/>
    <Story/>
    </>
  )
]