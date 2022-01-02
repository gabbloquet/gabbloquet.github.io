import { imageWidthFix } from './blog.service'

describe('Blog service', () => {
  it('should return content preceded by style fix', () => {
    const styleFix = `
  <style>
    p > img {
      max-height: 20em;
    }
    @media screen and (max-width: 800px) {
      p > img {
        width: 100%;
      }
    }
  </style>`
    const article = '# Exemple of title in article'

    const expectedValue = `${styleFix}
    
    ${article}`

    expect(imageWidthFix(article)).toBe(expectedValue)
  })
})
