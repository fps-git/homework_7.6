
let book1 = {
  title: "99 франков",
  description: "Книга «99 франков» представляет собой остроумную сатиру на рекламный бизнес, дерзкое разоблачение безумного и полного превратностей мира, в котором все презирают друг друга, где бездарно растрачиваются человеческие ресурсы...",
  cover: "cypress/e2e/books_test/content/1_99_franks/cover.jpg",
  bookFile: "cypress/e2e/books_test/content/1_99_franks/book.pdf",
  authors: "Фредерик Бегбедер"
}

let book2 = {
  title: "Зелёная миля",
  description: "«Зеленая миля» - роман самого выдающегося мастера хоррора Стивена Кинга, опубликованного в 1996 году.",
  cover: "cypress/e2e/books_test/content/2_green_mile/cover.jpg",
  bookFile: "cypress/e2e/books_test/content/2_green_mile/book.pdf",
  authors: "Стивен Кинг"
}

let book3 = {
  title: "Инферно",
  description: "Роман «Инферно» - шестой роман широко известного американского писателя Дэна Брауна, вышедший в продажу 14 мая 2014 года.",
  cover: "cypress/e2e/books_test/content/3_inferno/cover.jpg",
  bookFile: "cypress/e2e/books_test/content/3_inferno/book.pdf",
  authors: "Дэн Браун"
}


describe('books managing test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Books list').should('be.visible')
    cy.login('bropet@mail.ru', '123')
    cy.contains('Добро пожаловать').should('be.visible')

  })

  afterEach(() => {
    cy.contains('Log out').click()
  })

  it('Adding the books', () => {
    cy.addBooks(book1, true)
    cy.contains(book1.title).should('exist')

    cy.addBooks(book2, false)
    cy.contains(book2.title).should('exist')

    cy.addBooks(book3, false)
    cy.contains(book3.title).should('exist')
  })

  it('Delete from favorites', () => {
    cy.contains('Favorites').click()
    cy.contains(book1.title).should('exist')
    cy.contains('Delete from favorite').click()
    cy.contains(book1.title).should('not.exist')
  })

  it('Add to favorites', () => {
    cy.get('.card-title').last().should('contain', book3.title)
    cy.get('.btn-success').last().click()
    cy.contains('Favorites').click()
    cy.contains(book3.title).should('exist')
  })

  it('Open book from favorites', () => {
    cy.contains('Favorites').click()
    cy.contains(book3.title).should('exist')
    cy.get('a.mt-3').click()
    cy.contains('Dowload book').should('exist')
  })
})