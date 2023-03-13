import {booksType, companiesType, userType} from "./02.test";

export function upgradeLaptop(user: userType & booksType) {
  return {
    ...user,
    laptop: {
      ...user.laptop, type: "MacBookPro"
    }
  }
}

export function upgradeBooks(user: userType & booksType, books: Array<string>) {
  return {
    ...user,
    books: [...user.books.concat(books)]
  }
}

export function upgradeBook(user: userType & booksType) {
  return {
    ...user,
    books: user.books.map(b => b === 'js' ? 'ts' : b)
  }
}

export function upgradeCompanies(user: userType & booksType, companie: companiesType) {
  return {
    ...user,
    companies: [...user.companies, companie]
  }
}

export function changeEpam(user:  userType & booksType) {
  return {
    ...user,
    companies: user.companies.map(c => c.name === 'епам' ? {...c, name: 'epam'} : c)
  }
}