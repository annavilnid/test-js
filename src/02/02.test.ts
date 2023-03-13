import {changeEpam, upgradeBook, upgradeBooks, upgradeCompanies, upgradeLaptop} from "./02";

export type companiesType = {
  id: number
  name: string
}

export type userType = {
  name: string,
  location: {
    country: string,
    city: string,
  }
  laptop: {
    type: string,
  }
  companies: Array<companiesType>,
};

export type booksType = {books: Array<string>}


let user = {
  name: "Anna",
  location: {
    country: "Montenegro",
    city: "Bar",
  },
  laptop: {
    type: "MacBook",
  },
  books: ["html", "css", "js"],
  companies: [{id: 1, name: "епам"}, {id: 2, name: "it-incubator"}]
}



beforeEach(()=> {
  user = {
    name: "Anna",
    location: {
      country: "Montenegro",
      city: "Bar",
    },
    laptop: {
      type: "MacBook",
    },
    books: ["html", "css", "js"],
    companies: [{id: 1, name: "епам"}, {id: 2, name: "it-incubator"}]
  }


})

test('Upgrade laptop to MacBook', () => {
  const upgradeLaptopUser = upgradeLaptop(user);

  expect(user).not.toBe(upgradeLaptopUser);
  expect(upgradeLaptopUser.laptop).toEqual({type: "MacBookPro"});
  expect(user.location).toBe(upgradeLaptopUser.location);
  expect(user.laptop).toEqual({type: "MacBook"});
})

test('Upgrade Books', () => {
  const upgradeBooksUser = upgradeBooks(user, ['TypeScript', 'Redux']);

  expect(user).not.toBe(upgradeBooksUser);
  expect(upgradeBooksUser.books.length).toBe(5);
  expect(upgradeBooksUser.books[3]).toBe("TypeScript");
  expect(upgradeBooksUser.books[4]).toBe("Redux");
})

test('Upgrade js books', () => {
  const upgradeBooksUser = upgradeBook(user);

  expect(user).not.toBe(upgradeBooksUser);
  expect(upgradeBooksUser.books.length).toBe(3);
  expect(upgradeBooksUser.books[2]).toBe("ts");
})

test('Upgrade companies', () => {
  let companie = {id: 3, name: "google"}
  const upgradeCompaniesUser = upgradeCompanies(user, companie);

  expect(user).not.toBe(upgradeCompaniesUser);
  expect(upgradeCompaniesUser.companies.length).toBe(3);
  expect(user.companies.length).toBe(2);
  expect(upgradeCompaniesUser.companies[2].name).toBe("google");
})

test('Upgrade companies', () => {
  let companie = {id: 3, name: "google"}
  const upgradeCompaniesUser = upgradeCompanies(user, companie);

  expect(user).not.toBe(upgradeCompaniesUser);
  expect(upgradeCompaniesUser.companies.length).toBe(3);
  expect(user.companies.length).toBe(2);
  expect(upgradeCompaniesUser.companies[2].name).toBe("google");
})

test('Change epam', () => {
  const changeEpamUser = changeEpam(user);

  expect(user).not.toBe(changeEpam);
  expect(changeEpamUser.companies[0].name).toBe('epam');
  expect(user.companies[0].name).toBe('епам');
})

