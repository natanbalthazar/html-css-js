// Lista dos Filmes que iremos puxar: https://developer.themoviedb.org/reference/movie-popular-list

// Mock Dataset:
// const data = {
//   page: 1,
//   results: [
//     {
//       adult: false,
//       backdrop_path: "/m2mzlsJjE3UAqeUB5fLUkpWg4Iq.jpg",
//       genre_ids: [53, 878],
//       id: 1165067,
//       original_language: "en",
//       original_title: "Cosmic Chaos",
//       overview:
//         "Battles in virtual reality, survival in a post-apocalyptic wasteland, a Soviet spaceship giving a distress signal - Fantastic stories created with advanced special effects and passion.",
//       popularity: 573.0464,
//       poster_path: "/mClzWv7gBqgXfjZXp49Enyoex1v.jpg",
//       release_date: "2023-08-03",
//       title: "Cosmic Chaos",
//       video: false,
//       vote_average: 5.136,
//       vote_count: 11,
//     },
//     {
//       adult: false,
//       backdrop_path: "/gsQJOfeW45KLiQeEIsom94QPQwb.jpg",
//       genre_ids: [28, 53],
//       id: 1125899,
//       original_language: "en",
//       original_title: "Cleaner",
//       overview:
//         "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.",
//       popularity: 572.5151,
//       poster_path: "/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg",
//       release_date: "2025-02-19",
//       title: "Cleaner",
//       video: false,
//       vote_average: 6.5,
//       vote_count: 98,
//     },
//     {
//       adult: false,
//       backdrop_path: "/ibF5XVxTzf1ayzZrmiJqgeQ39Qk.jpg",
//       genre_ids: [28, 10752],
//       id: 1373723,
//       original_language: "en",
//       original_title: "The Codes of War",
//       overview:
//         "War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.",
//       popularity: 422.4411,
//       poster_path: "/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg",
//       release_date: "2025-03-20",
//       title: "The Codes of War",
//       video: false,
//       vote_average: 7.938,
//       vote_count: 8,
//     },
//     {
//       adult: false,
//       backdrop_path: "/8eifdha9GQeZAkexgtD45546XKx.jpg",
//       genre_ids: [28, 53, 878],
//       id: 822119,
//       original_language: "en",
//       original_title: "Captain America: Brave New World",
//       overview:
//         "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
//       popularity: 421.1844,
//       poster_path: "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
//       release_date: "2025-02-12",
//       title: "Captain America: Brave New World",
//       video: false,
//       vote_average: 6.11,
//       vote_count: 1129,
//     },
//     {
//       adult: false,
//       backdrop_path: "/u7j9GwAzEuDmYikzhMDWC9kCAiG.jpg",
//       genre_ids: [10751, 14],
//       id: 447273,
//       original_language: "en",
//       original_title: "Snow White",
//       overview:
//         "Princess Snow White flees the castle when the Evil Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young thief named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom in the process...",
//       popularity: 278.4259,
//       poster_path: "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
//       release_date: "2025-03-19",
//       title: "Snow White",
//       video: false,
//       vote_average: 4.5,
//       vote_count: 381,
//     },
//     {
//       adult: false,
//       backdrop_path: "/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg",
//       genre_ids: [16, 12, 10751, 35],
//       id: 1241982,
//       original_language: "en",
//       original_title: "Moana 2",
//       overview:
//         "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
//       popularity: 213.7975,
//       poster_path: "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
//       release_date: "2024-11-21",
//       title: "Moana 2",
//       video: false,
//       vote_average: 7.116,
//       vote_count: 2081,
//     },
//     {
//       adult: false,
//       backdrop_path: "/1w8kutrRucTd3wlYyu5QlUDMiG1.jpg",
//       genre_ids: [12, 10751, 16],
//       id: 762509,
//       original_language: "en",
//       original_title: "Mufasa: The Lion King",
//       overview:
//         "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
//       popularity: 214.9983,
//       poster_path: "/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
//       release_date: "2024-12-18",
//       title: "Mufasa: The Lion King",
//       video: false,
//       vote_average: 7.45,
//       vote_count: 1766,
//     },
//     {
//       adult: false,
//       backdrop_path: "/e807jDKiFcntZS32ze88X6I96OD.jpg",
//       genre_ids: [16, 28],
//       id: 1297763,
//       original_language: "ja",
//       original_title: "ニンジャバットマン対ヤクザリーグ",
//       overview:
//         "The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!",
//       popularity: 210.1604,
//       poster_path: "/sVVT6GYFErVv0Lcc9NvqCu0iOxO.jpg",
//       release_date: "2025-03-17",
//       title: "Batman Ninja vs. Yakuza League",
//       video: false,
//       vote_average: 6.7,
//       vote_count: 78,
//     },
//     {
//       adult: false,
//       backdrop_path: "/19pr5CzgsBYs67FAJvke8GQxN4g.jpg",
//       genre_ids: [27],
//       id: 1301650,
//       original_language: "mn",
//       original_title: "Z Zone",
//       overview:
//         "In a remote corner of the world, a group of troubled youths finds themselves whisked away to a mysterious military base after a series of misbehaviors. Expecting little more than a stern reprimand, they are instead thrust into a world of secrets and shadows.  In a desperate bid for freedom, they must unravel the mysteries of the base and confront the sinister forces that lurk in the shadows. But with time running out and danger lurking around every corner, the odds of survival grow slimmer by the minute.  Courage, strength, and sacrifice, would they finally escape the clutches of the base and emerge from the darkness into the light?",
//       popularity: 204.5005,
//       poster_path: "/s6kFtdxfTC4xR8yDGbIjTgGEcFI.jpg",
//       release_date: "2025-02-07",
//       title: "Z Zone",
//       video: false,
//       vote_average: 7.308,
//       vote_count: 13,
//     },
//     {
//       adult: false,
//       backdrop_path: "/xkjWiRQtrenqGRWO2Enry2JIl4d.jpg",
//       genre_ids: [27],
//       id: 1388366,
//       original_language: "en",
//       original_title: "Popeye the Slayer Man",
//       overview:
//         'A curious group of friends sneak into an abandoned spinach canning factory to film a documentary on the legend of the "Sailor Man," who is said to haunt the factory and local docks.',
//       popularity: 203.1314,
//       poster_path: "/nVwu3mN7hr1yF467pGct3yQFM41.jpg",
//       release_date: "2025-03-21",
//       title: "Popeye the Slayer Man",
//       video: false,
//       vote_average: 5.7,
//       vote_count: 20,
//     },
//     {
//       adult: false,
//       backdrop_path: "/deUWVEgNh2IGjShyymZhaYP40ye.jpg",
//       genre_ids: [28, 12, 53],
//       id: 1356039,
//       original_language: "es",
//       original_title: "Contraataque",
//       overview:
//         "When a hostage rescue mission creates a new enemy, Capt. Guerrero and his elite soldiers must face an ambush by a criminal group.",
//       popularity: 180.8217,
//       poster_path: "/lI2uFlSEkwXKljqiry7coaJ6wIS.jpg",
//       release_date: "2025-02-27",
//       title: "Counterattack",
//       video: false,
//       vote_average: 8.442,
//       vote_count: 558,
//     },
//     {
//       adult: false,
//       backdrop_path: "/3xN4vNPWBSVDsiiOzL5sB95Sa1J.jpg",
//       genre_ids: [53, 9648],
//       id: 257094,
//       original_language: "en",
//       original_title: "Holland",
//       overview:
//         "Nancy is a teacher whose life with her husband in Holland, Michigan, tumbles into a twisted tale when she and her colleague become suspicious of a secret.",
//       popularity: 170.1748,
//       poster_path: "/39jIr3A4ScUeGxFdMeARYKNxTgU.jpg",
//       release_date: "2025-03-27",
//       title: "Holland",
//       video: false,
//       vote_average: 5.8,
//       vote_count: 41,
//     },
//     {
//       adult: false,
//       backdrop_path: "/is9bmV6uYXu7LjZGJczxrjJDlv8.jpg",
//       genre_ids: [28, 12],
//       id: 1229730,
//       original_language: "fr",
//       original_title: "Carjackers",
//       overview:
//         "By day, they're invisible—valets, hostesses, and bartenders at a luxury hotel. By night, they're the Carjackers, a crew of skilled drivers who track and rob wealthy clients on the road. As they plan their ultimate heist, the hotel director hires a ruthless hitman, to stop them at all costs. With danger closing in, can Nora, Zoe, Steve, and Prestance pull off their biggest score yet?",
//       popularity: 165.7281,
//       poster_path: "/mtYwRRc7fKt16o0qZJxmBptcdzT.jpg",
//       release_date: "2025-03-27",
//       title: "Carjackers",
//       video: false,
//       vote_average: 6.6,
//       vote_count: 7,
//     },
//     {
//       adult: false,
//       backdrop_path: "/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg",
//       genre_ids: [28, 80, 53],
//       id: 1197306,
//       original_language: "en",
//       original_title: "A Working Man",
//       overview:
//         "Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined.",
//       popularity: 158.6079,
//       poster_path: "/6FRFIogh3zFnVWn7Z6zcYnIbRcX.jpg",
//       release_date: "2025-03-26",
//       title: "A Working Man",
//       video: false,
//       vote_average: 6.8,
//       vote_count: 34,
//     },
//     {
//       adult: false,
//       backdrop_path: "/AtciHGgpOU7ngsVhXbS2S5Spdlv.jpg",
//       genre_ids: [28, 35],
//       id: 1077782,
//       original_language: "en",
//       original_title: "Old Guy",
//       overview:
//         "Stuck at a dead end but vying for the love of spunky club manager Anata, aging contract killer Danny Dolinski is thrilled when The Company pulls him back in the field, but only to train Gen Z newcomer Wihlborg, a prodigy assassin with an attitude.",
//       popularity: 140.9969,
//       poster_path: "/ulVVfNY8bmy1RbHfY4zi3fOwGzh.jpg",
//       release_date: "2024-12-13",
//       title: "Old Guy",
//       video: false,
//       vote_average: 5.612,
//       vote_count: 58,
//     },
//     {
//       adult: false,
//       backdrop_path: "/gFFqWsjLjRfipKzlzaYPD097FNC.jpg",
//       genre_ids: [28, 80, 53],
//       id: 1126166,
//       original_language: "en",
//       original_title: "Flight Risk",
//       overview:
//         "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
//       popularity: 147.8383,
//       poster_path: "/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
//       release_date: "2025-01-22",
//       title: "Flight Risk",
//       video: false,
//       vote_average: 6.1,
//       vote_count: 545,
//     },
//     {
//       adult: false,
//       backdrop_path: "/mhKQ5ntqlXyck0TWh1pCpn42aAx.jpg",
//       genre_ids: [28, 80, 53],
//       id: 1217379,
//       original_language: "en",
//       original_title: "Hellhound",
//       overview:
//         "Ready to leave his profession behind, Loreno, an assassin, lends help to an old friend, Cetan, and taking one last job in Thailand seeking out a local kingpin. A lapse in judgment means Loreno crosses paths with old colleague Paul.",
//       popularity: 128.5324,
//       poster_path: "/h1BtcTEk0pbe9XhbxrAp2oLKoWb.jpg",
//       release_date: "2024-06-20",
//       title: "Hellhound",
//       video: false,
//       vote_average: 6.569,
//       vote_count: 29,
//     },
//     {
//       adult: false,
//       backdrop_path: "/2n7lYEeIbucsEQCswRcVB6ZYmMP.jpg",
//       genre_ids: [878, 12, 28],
//       id: 777443,
//       original_language: "en",
//       original_title: "The Electric State",
//       overview:
//         "An orphaned teen hits the road with a mysterious robot to find her long-lost brother, teaming up with a smuggler and his wisecracking sidekick.",
//       popularity: 141.7648,
//       poster_path: "/1TZ9Er1xEAKizzKKqYVgJIhNkN2.jpg",
//       release_date: "2025-03-07",
//       title: "The Electric State",
//       video: false,
//       vote_average: 6.607,
//       vote_count: 816,
//     },
//     {
//       adult: false,
//       backdrop_path: "/hD2SN5bbqxk0kcRmsATJkXObgnZ.jpg",
//       genre_ids: [28, 80, 14, 53],
//       id: 1405338,
//       original_language: "ja",
//       original_title: "Demon City 鬼ゴロシ",
//       overview:
//         'Framed for his family\'s murder and left for dead, an ex-hitman will stop at nothing to exact revenge on the masked "demons" who have taken over his city.',
//       popularity: 129.1596,
//       poster_path: "/g5PqsFFrayyRL1Ldgib2lMYuJXg.jpg",
//       release_date: "2025-02-26",
//       title: "Demon City",
//       video: false,
//       vote_average: 6.9,
//       vote_count: 176,
//     },
//     {
//       adult: false,
//       backdrop_path: "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
//       genre_ids: [28, 878, 35, 10751, 12, 14],
//       id: 939243,
//       original_language: "en",
//       original_title: "Sonic the Hedgehog 3",
//       overview:
//         "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
//       popularity: 142.4798,
//       poster_path: "/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
//       release_date: "2024-12-19",
//       title: "Sonic the Hedgehog 3",
//       video: false,
//       vote_average: 7.8,
//       vote_count: 2286,
//     },
//   ],
//   total_pages: 49444,
//   total_results: 988865,
// };

// Conectando com a API:
// Sempre que eu precisar me conectar com outras fontes, ou seja, o tempo de conexão,
// eu uso uma função assíncrona.
// Pega as sugestões de filmes
async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMWI3ZjMzMWQyYzYwNzhkMDk2ODYyN2FiYzQxOCIsIm5iZiI6MTc0MzI2MTIzMy4wMTUsInN1YiI6IjY3ZTgwZTMxYTNkOGNjOTI4ZTY3Y2FmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TbKKfYRfAMrCfWhVIOVsn9CxHaZ1DIWm_sP9vlJaPY'
    }
  };

  try {
    // const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    //   .then(res => res.json())
    // ou utilizando o retorno direto:
    return fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(res => res.json())
  } catch (error) {
    console.log(error);
  }
}


// Informação de um filme especifico: https://developer.themoviedb.org/reference/movie-details
// Utilizamos o assíncrono quando estamos saindo do nosso APP e estamos buscando info em outro lugar.
// A ideia aqui é esperar a resposta, ou seja, algo assíncrono que não acontece na hora
async function getMoreInformation(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMWI3ZjMzMWQyYzYwNzhkMDk2ODYyN2FiYzQxOCIsIm5iZiI6MTc0MzI2MTIzMy4wMTUsInN1YiI6IjY3ZTgwZTMxYTNkOGNjOTI4ZTY3Y2FmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TbKKfYRfAMrCfWhVIOVsn9CxHaZ1DIWm_sP9vlJaPY'
    }
  };
  try {
    const result = await
      fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US', options)
        .then(res => res.json())

    return result
  } catch (error) {
    console.log(error)
  }
}

// Informação do Trailer: https://developer.themoviedb.org/reference/movie-videos

// Ação de clicar no botão do Trailer
// target -> aonde estamos clicando (ou seja, distinção entre o icon e texto);
// currentTarget -> Sempre será o botão
// console.log(e.currentTarget.dataset);
async function watch(e) {
  const filmId = e.currentTarget.dataset.id
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2NlMWI3ZjMzMWQyYzYwNzhkMDk2ODYyN2FiYzQxOCIsIm5iZiI6MTc0MzI2MTIzMy4wMTUsInN1YiI6IjY3ZTgwZTMxYTNkOGNjOTI4ZTY3Y2FmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TbKKfYRfAMrCfWhVIOVsn9CxHaZ1DIWm_sP9vlJaPY'
    }
  };
  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${filmId}/videos?language=en-US`, options)
      .then(res => res.json())

    const { results } = data
    const youtubeVideo = results.find(video => video.type === 'Trailer')

    window.open(`https://youtube.com/watch?v=${youtubeVideo.key}`, 'blank')

  } catch (error) {
    alert('O Trailer que você deseja ver, não foi encontrado. Por favor, selecione outro filme.');
  }
}

function selectThree(results) {
  const random = () => Math.floor(Math.random() * results.length);

  const selectVideos = new Set();
  while (selectVideos.size <= 2) {
    selectVideos.add(results[random()].id);
  }

  // Desestruturado, pois manda um array com 3 ids
  return [...selectVideos];
}

function minuteToHourMinutesSeconds(minutes) {
  const date = new Date(null)
  date.setMinutes(minutes)
  return date.toISOString().slice(11, 19)
}

async function start() {
  // Pegar sugestões dos Filmes da API
  // Para o mockado:
  // const results = data.results;
  // Pegando pela api (desestruturado no data, pegando os results): 
  const { results } = await getMovies()

  // Pegar 3 filmes de forma randômica
  const selectedMovies = selectThree(results)
    // Pegar informações especificas de cada um dos 3 filmes
    .map(async movie => {
      const movieInformation = await getMoreInformation(movie)

      // Organizar os dados que iremos pegar
      const props = {
        id: movieInformation.id,
        title: movieInformation.title,
        starsRating: Number(movieInformation.vote_average).toFixed(1),
        imagePoster: movieInformation.poster_path,
        filmTime: minuteToHourMinutesSeconds(movieInformation.runtime),
        filmYear: movieInformation.release_date.slice(0, 4),
      }
      return createMovieLayout(props)
    })

  const selectMoviesRandom = await Promise.all(selectedMovies);

  // Substituir o conteúdos dos filmes no HTML
  document.querySelector('.movies').innerHTML = selectMoviesRandom.join("")
}

// Função que vai retornar uma string com base nos parâmetros que estamos passando
function createMovieLayout({
  id,
  title,
  starsRating,
  imagePoster,
  filmTime,
  filmYear,
}) {
  return `
    <article class="movie">
      <div class="title">
        <span title="${title}">${title}</span>
        <p>
          <span class="material-symbols-outlined"> star_half </span>
          ${starsRating}
        </p>
      </div>

      <div class="poster">
        <img src="https://image.tmdb.org/t/p/w500${imagePoster}" alt="Poster do filme ${title}" />
      </div>

      <div class="info">
        <div class="duration">
          <span class="material-symbols-outlined"> schedule </span>
          <span>${filmTime}</span>
        </div>

        <div class="year">
          <span class="material-symbols-outlined"> calendar_today </span>
          <span>${filmYear}</span>
        </div>
      </div>

      <button type="button" onclick="watch(event)" data-id="${id}">
        <span class="material-symbols-outlined"> play_arrow </span>
        <span> Assistir o Trailer</span>
      </button>
    </article>
  `;
}

start()
