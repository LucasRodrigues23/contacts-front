import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

:root {
  --color-primary: #4B0082;
  --color-primary50: #8A2BE2;
  --color-grey4: #000000;
  --color-grey3: #333333;
  --color-grey2: #828282;
  --color-grey1: #E0E0E0;
  --color-grey0: #F5F5F5;
  --color-warning: #E60000;   
}
body,html{
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
    width: 100vw;
    height: 100vh;
}
body {
    font-family: 'Roboto Mono', monospace;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background: rgb(45,45,45);
    background: linear-gradient(180deg, rgba(65,65,65,1) 0%, rgba(45,45,45,1) 100%);
}

button {
    cursor: pointer;
}
ul, ol, li{
    list-style: none;
}

`