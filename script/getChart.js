$(document).ready(function (_) {
  $.ajax({
    method: 'get',
    url: 'http://localhost:3000/comments/4127'
  })
  .done(comments => {
    let data = comments.comments
    let positive = 0
    let negative = 0
    let netral = 0
    data.forEach(comment => {
      switch (comment.sentiment) {
        case 'positive':
          positive++
          break;
        case 'negative':
          negative++
          break;
        case 'netral':
          netral++
          break;
      }
    });
    $('.image-chart').append(`
      <img src="https://quickchart.io/chart?c=
        {
          type:'doughnut',
          data:{
            labels:[
              'positive',
              'negative',
              'netral'
            ],
            datasets:[
              {
                data:[${positive?positive:''},${negative?negative:''},${netral?netral:''}]
              }
            ]
          }
        }
      ", style="width: 50%"> 
    `)
  })
  .fail()
})