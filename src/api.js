import faker from 'faker';

// TODO Mock books, remove after we have the api
const BOOKS = [
  ...new Array(50).fill(null).map((val, index) => ({
    title: faker.lorem.words(2),
    writer: `${faker.name.firstName()} ${faker.name.lastName()}`,
    year: Math.floor(Math.random() * (2021 - 1980 + 1) + 1980),
    description: faker.lorem.sentences(5),
    avatar: faker.image.image(),
    id: index,
  })),
];

export const getBooks = (searchString = '') => {
  if (searchString) {
    return BOOKS.filter(
      ({ title, writer, year }) =>
        title.toLowerCase().includes(searchString.trim().toLowerCase()) ||
        writer.toLowerCase().includes(searchString.trim().toLowerCase()) ||
        year === Number(searchString)
    );
  }

  return BOOKS;
};
