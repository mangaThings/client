function fetchAllMangas(){
  $.ajax({
    method: 'get',
    url: 'http://localhost:3000/mangas'
  })
  .then(data => {
    let mangas = data.results
    mangas.forEach(el => {
      let card = `   
      <div class="col-md-3 mt-5">
      <input type="hidden" id="title-${el.mal_id}" value="${el.title}">
      <input type="hidden" id="sinposis-${el.mal_id}" value="${el.synopsis}">
      <input type="hidden" id="image-${el.mal_id}" value="${el.image_url}">
      <input type="hidden" id="volumes-${el.mal_id}" value="${el.volumes}">
      <input type="hidden" id="id-${el.mal_id}" value="${el.mal_id}">
      <input type="hidden" id="chapters-${el.mal_id}" value="${el.chapters}">
        <div class="card" onclick='getDetail(${el.mal_id})'>
          <div style="width:100%; padding-top:100%; position:relative">
            <img
              src="${el.image_url}"
              class="fit"
              alt="card image"
            />
          </div>
          <div class="card-body" style="height: 120px">
            <p>
              <b>${el.title}</b>
            </p>
            <div class="summary">${el.synopsis}</div>
          </div>
        </div>

      </div>`
      $('#row-cards').append(card)
    })
  })
  .catch(err =>{
    console.log(err);
  })
}

function getDetail(id) {
  $('#content-mangas-dash').hide()
  console.log(id)
  let title = $(`#title-${id}`).val()
  let sinposis = $(`#sinopsis-${id}`).val()
  let image = $(`#image-${id}`).val()
  let volumes = $(`#volumes-${id}`).val()
  let chapters = $(`#chapters-${id}`).val()

  console.log(title)
  // ${el.title},${el.synopsis}, ${el.image_url}, ${el.volumes}, ${el.mal_id}, ${el.chapters}
  let html = `
  <div class="detail-manga">
    <div class="information">
        <img src="./assets/grey.jpg" height="200px" alt="" srcset="">
        <div class="descriptive">
          <h1>title</h1>
          <h4>sinopsis</h4>
          <h5>volumes</h5>
          <h5>chapters</h5>
        </div>
      </div>
      <div class="showComments">
        <h1>Our Member Opinions</h1>
        <div class="scrolldown">
          <div class="get-comments"></div>
        </div>
        <div class="diboxin">
          <h2>Tell your opinion</h2>
          <div class="create-opinion">
            <input type="text" name="" id="createOp">
            <button class="btn btn-warning" style="width:15%; height: '40px';" onclick="createOpinion(${id})">Submit</button>
          </div>
        </div>
        <div class="toggle-chart">

        </div>
      </div>
    </div>
  `
  $('#home-page').append(html)
  fetchComments(id)
  // $("#manga-dashboard").hide()
}
function fetchComments(id){
$.ajax({
    method: 'get',
    url: 'http://localhost:3000/comments/'+ id
})
    .then(result => {
         result.comments.forEach(el =>{
           $('.get-comments').append(`
          <div class="one-comment"> 
            <div class="oneline">
              <h4>${el.comment}</h4>
              <p>${el.createdAt}</p>
            </div>
              <p>${el.user}</p>
          </div>
           `)
         })
    })
    .catch(err =>{
      console.log(next);
    })
}