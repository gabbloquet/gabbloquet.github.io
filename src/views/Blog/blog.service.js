export const imageWidthFix = (content) => {
  return `
  <style>
    p > img {
      max-height: 20em;
    }
    @media screen and (max-width: 800px) {
      p > img {
        width: 100%;
      }
    }
  </style>
    
    ${content}`
}
