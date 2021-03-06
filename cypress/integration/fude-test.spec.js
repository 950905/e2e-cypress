/// <reference types="cypress" />
// @ts-ignore
import channels from "../channels/fude-test.js";
import login from '../setLogin'

const {messages, steps} = channels
describe(messages.name, async () => {

  beforeEach(async () => {
    await login(messages.domain, messages.cookieType)
    cy.visit(messages.url)
  })

  it(messages.name, async () => {
    for (const opera of steps) {
      switch(opera.findType) {
        case 'xpath':
          await cy.xpath(opera.value, {timeout: 10000}).should('be.visible')
          break
        default:
          break
      }
      switch(opera.operation) {
        case 'click':
          await cy.xpath(opera.value).click()
          break
        case 'input':
          await cy.xpath(opera.value).type(opera.insertValue+'')
          break
        default:
          break
      }
    }
  })
})