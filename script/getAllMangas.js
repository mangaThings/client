let baseUrl = 'http://localhost:3000'
function fetchData() {
    $.ajax({
        method: 'get',
        url: baseUrl + '/mangas'
    })
        .then(data => {
            // console.log(data.results)
            let mangas = data.results
            mangas.forEach(el => {
                console.log('/////////////');
                console.log(el.title)
                console.log(el.synopsis);
                console.log(el.mal_id, 'some id')
                console.log(el.score);
                console.log(el.image_url);//
                console.log(el.volumes)
                console.log(el.chapters)
                console.log(el.members);;
                let detail = {
                    hell: 'ooo',
                    login: 'belum'
                }
                let card = `
          <div class="col-md-4 spacingCard">
            <div class="card" style="width:20rem">
              <img src="${el.image_url}" alt="" class="card-img-top" height="300px">
              <div class="card-body">
                <h5 class="card-title">${el.title}</h5>
                <p class="card-text">${el.synopsis}</p>
                <button class="btn btn-warning show-more-btn" onclick="getDetail('${el.title}','${el.synopsis}', )">Show More</button>
                //
              </div>
            </div>
          </div>`
                $('.row.justify-content-center').append(card)
            })
        })
}
fetchData()
function getDetail(input) {
    console.log(input)
    $.ajax({
        method: 'get',
        url: baseUrl + '/mangas/' + input
    })
        .then(result => {
            console.log(result);
            //  console.log(result.data);
        })
    $("#manga-dashboard").hide()
}