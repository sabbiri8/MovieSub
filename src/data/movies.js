const data = [
  {
    id: 1,
    cover: "/assets/movie-covers/avatar.png",
    title: "Avatar",
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting an alien civilization.",
    genre: "Action, Adventure, Fantasy",
    rating: 2,
    price: 11.99,
  },
  {
    id: 2,
    cover: "/assets/movie-covers/iron-man.png",
    title: "Iron Man",
    description:
      "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    genre: "Action, Adventure, Sci-Fi",
    rating: 3.5,
    price: 10.99,
  },
  {
    id: 3,
    cover: "/assets/movie-covers/marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Drama, Romance",
    rating: 5,
    price: 9.99,
  },
  {
    id: 4,
    cover: "/assets/movie-covers/once-in-ho.jpg",
    title: "Once in Ho",
    description:
      "A dramatic story set in the heart of Ho, exploring the lives of its unique residents.",
    genre: "Drama",
    rating: 4.2,
    price: 8.99,
  },
  {
    id: 5,
    cover: "/assets/movie-covers/pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action, Comedy, Crime",
    rating: 6.4,
    price: 7.99,
  },
  {
    id: 6,
    cover: "/assets/movie-covers/parasite.jpg",
    title: "Parasite",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    genre: "Comedy, Drama, Thriller",
    rating: 8.6,
    price: 13.99,
  },
];

function getAllMovies() {
  return data
}

export {getAllMovies}



// function getImgUrl(name) {
//     return new URL(`../assets/movie-covers/${name}`, import.meta.url).href
//  }

//  export {getImgUrl};
//different page 
