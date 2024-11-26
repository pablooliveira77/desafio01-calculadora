import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }
   
   body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      color: #333;
   }
   
   html, body, #root {
      height: 100%;
   }
   
   button {
      cursor: pointer;
   }
   `;