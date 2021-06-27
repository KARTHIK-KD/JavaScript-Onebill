// Movies

const API_KEY ='31c9cb4935c273d792e6a69a57a44f19';
const URL = 'https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key='+API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const main = document.getElementById("main");
Movies(URL);
function Movies(url){
    fetch(url)
    .then(MyResponse => MyResponse.json())
    .then(json=> {
        console.log(json);
        DisplayMovies(json.results);
    })    
}
function DisplayMovies(info){
    main.innerHTML = '';

    info.forEach(ele=> {
        const {titles,poster_path, vote_average, overview} = ele;
            const m= document.createElement('div');
            m.classList.add('movie');
            m.innerHTML = `
                <table>
                    <tr>
                        <td>
                            <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/600x600" }" alt="${titles}" width="200" height="200">
                        </td>
                        <td>
                            <h2>Movie Rating</h3>
                            <span style ="color:red">${vote_average}</span>
                             </div>
                        </td>
                        <td></td><td></td>
                        <td>
                            <div class="overview">
                            <h2>Overview</h2>
                            ${overview}
                             <br/> 
                            </div>
                        </td>
                    </tr>
                </table>
            `
            main.appendChild(m);
    });
}
