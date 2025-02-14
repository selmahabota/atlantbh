export class BasePage{
    fill_Input_Field(selector, input){
        selector.should('be.visible')
            .clear()
            .type(input)
            .should('have.value', input)
    }

    click_on_button(selector){
        selector.should('be.visible')
            .click()
    }
}
export const basePage = new BasePage()