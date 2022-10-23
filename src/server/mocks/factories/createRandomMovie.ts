import { faker } from '@faker-js/faker'
import format from 'date-fns/format'
import { movie as movieType } from '~/types/movie'

const posterPaths = ['sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg']

const backdropPaths = ['sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg']

function createRandomMovie(): movieType {
  return {
    id: faker.datatype.number({ min: 10000, max: 99999 }),
    adult: faker.datatype.boolean(),
    backdrop_path: faker.helpers.arrayElement(backdropPaths),
    genre_ids: faker.helpers.uniqueArray(faker.datatype.number, 2),
    original_language: faker.random.locale(),
    original_title: faker.lorem.words(3),
    overview: faker.lorem.paragraph(4),
    popularity: faker.datatype.float({ max: 100, precision: 0.001 }),
    poster_path: faker.helpers.arrayElement(posterPaths),
    release_date: format(faker.date.birthdate({ min: 1900, max: 2030, mode: 'year' }), 'YYYY-mm-dd'),
    title: faker.lorem.words(3),
    video: faker.datatype.boolean(),
    vote_average: faker.datatype.float({ max: 10, precision: 0.1 }),
    vote_count: faker.datatype.number(),
  }
}

export const movie = createRandomMovie()
