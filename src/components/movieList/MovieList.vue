<template>
  <MovieRow v-for="movie in list" :key="movie.id" :movie="movie" />
</template>

<script>
export default {
  name: 'MovieList',
  data() {
    return {
      list: [
        {
          adult: false,
          backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
          genre_ids: [28, 878, 12],
          id: 27205,
          original_language: 'en',
          original_title: 'Inception',
          overview:
            'Cobb, a skilled thief who commits corporate espionage by infiltrating the' +
            ' subconscious of his targets is offered a chance to regain his old life' +
            ' as payment for a task considered to be impossible: "inception", the' +
            " implantation of another person's idea into a target's subconscious.",
          popularity: 94.242,
          poster_path: '/8IB2e4r4oVhHnANbnm7O3Tj6tF8.jpg',
          release_date: '2010-07-15',
          title: 'Inception',
          video: false,
          vote_average: 8.4,
          vote_count: 32416,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [16, 28, 53, 878],
          id: 64956,
          original_language: 'en',
          original_title: 'Inception: The Cobol Job',
          overview:
            'The Cobol Job is a fourteen-minute animated prequel to Christopher Nolan’s' +
            " award-winning movie: Inception, detailing the heist on Mr. Kaneda's mind" +
            ' by Nash, Cobb, Arthur, and several Cobol Engineering thugs.',
          popularity: 6.832,
          poster_path: '/sNxqwtyHMNQwKWoFYDqcYTui5Ok.jpg',
          release_date: '2010-12-07',
          title: 'Inception: The Cobol Job',
          video: false,
          vote_average: 7.3,
          vote_count: 285,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [],
          id: 250845,
          original_language: 'en',
          original_title: 'WWA The Inception',
          overview:
            'The first World Wrestling Allstars pay per view, live from Sydney, Australia! ' +
            'A tournament titled "7 Deadly Sins", each round having a stipulation match, ' +
            'the winner will be crowned the first ever WWA Heavyweight Champion! Wrestlers ' +
            'such as Jeff Jarrett, Road Dogg, Jerry Lawler all compete in the tournament, ' +
            'with the WWA Commissioner, Bret Hart not too far away to make sure nothing ' +
            'gets to far out of hand!',
          popularity: 1.611,
          poster_path: null,
          release_date: '2001-10-26',
          title: 'WWA The Inception',
          video: true,
          vote_average: 3.1,
          vote_count: 5,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [35],
          id: 542438,
          original_language: 'en',
          original_title: 'Bikini Inception',
          overview:
            'Two flunky Janitors in an Arctic Lab perform unauthorized experiments transporting them ' +
            'to a beach dream world in Malibu California w/50 beautiful young girls and a female' +
            " Brazilian PhD Student wearing only a bra and panties. A '67 Muscle car races chases" +
            ' horses guns fights surfing, sumo wrestler, wolf monster, underwater scenes tons of ' +
            'gorgeous models. Sexy sci-fi fun.',
          popularity: 1.169,
          poster_path: '/mNASlEOFX2c9upxaSbgeKFvIr1L.jpg',
          release_date: '2015-05-19',
          title: 'Bikini Inception',
          video: false,
          vote_average: 7,
          vote_count: 1,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [10402],
          id: 973484,
          original_language: 'en',
          original_title: 'Inception: Music from the Motion Picture',
          overview:
            'The Special Features Blu-ray disc contains a lossless DTS-HD MA 5.1 surround mix of' +
            ' the Inception soundtrack.',
          popularity: 0.972,
          poster_path: '/7uM4DyRVAcgagvhZoWrkrqMPbqV.jpg',
          release_date: '2010-12-07',
          title: 'Inception: Music from the Motion Picture',
          video: true,
          vote_average: 0,
          vote_count: 0,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [],
          id: 957443,
          original_language: 'en',
          original_title: 'Inception: Jump Right Into the Action',
          overview:
            'Inception: Making of. Join filmmaker Christopher Nolan and his cast and crew as they ' +
            'reveal the secrets of Inception, its development, characters, performances, story ' +
            'and jaw-dropping special effects in this solid 14-segments piece.',
          popularity: 0.6,
          poster_path: null,
          release_date: '',
          title: 'Inception: Jump Right Into the Action',
          video: true,
          vote_average: 0,
          vote_count: 0,
        },
        {
          adult: false,
          backdrop_path: '/JeGkRdNsOuMrgwBdtB0hp763MU.jpg',
          genre_ids: [18, 53],
          id: 613092,
          original_language: 'es',
          original_title: 'El crack cero',
          overview:
            'Madrid, Spain, 1975; shortly after the end of the Franco dictatorship. Six months ' +
            'after the mysterious death of his lover, a prestigious tailor, a married woman ' +
            'visits the office of the young Germán Areta, a former police officer turned ' +
            'private detective, to request his professional services.',
          popularity: 3.417,
          poster_path: '/kzgPu2CMxBr4YZZxC1Off4cUfR9.jpg',
          release_date: '2019-10-04',
          title: 'The Crack: Inception',
          video: false,
          vote_average: 7,
          vote_count: 28,
        },
        {
          adult: false,
          backdrop_path: '/vYJRSrZmUcL7FPhOeCk3n6rFRRp.jpg',
          genre_ids: [18, 9648],
          id: 846190,
          original_language: 'fa',
          original_title: 'Aghaz',
          overview:
            'Young man (Erfan) wants to do something important,It has a lot of risk for him But he' +
            ' must make a decision,Though everyone around them opposes doing so,The boy decides that...',
          popularity: 0.6,
          poster_path: '/jYxQqa3ZaXhhG89YEUZkxUfKFdm.jpg',
          release_date: '2014-02-12',
          title: 'Inception',
          video: false,
          vote_average: 10,
          vote_count: 2,
        },
        {
          adult: false,
          backdrop_path: null,
          genre_ids: [],
          id: 350632,
          original_language: 'en',
          original_title: 'Nātyārambham',
          overview:
            'On certain Adavus: the basic steps in Bharatanatyam. The first part covers Tatta ' +
            'Adavu, Natta Adavu, Visharu Adavu , Tatti Metti Adavu and Teermanam Adavu.',
          popularity: 0.6,
          poster_path: null,
          title: 'The Inception of Dramatic Representation',
          video: true,
          vote_average: 5.8,
          vote_count: 3,
        },
      ],
    }
  },
}
</script>

<style scoped></style>
