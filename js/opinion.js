function createOpinion(id){
    let comment = $('#createOp').val()
    console.log(comment)
    $.ajax({
        method : 'post',
        url : 'http://localhost:3000/comments/',
        data : {
            comment : comment,
            mangaId : id
        }
    })
    .then(result =>{
        Swal.fire({
            position: 'top-end',
            html: "<div style='color:#46b551'><h4>Success Create Opinion</h4></div>",
            showConfirmButton: false,
            height : '280px',
            width: '280px',
            timer: 1500
          })
        console.log(result.sentiment);
        $('#createOp').val('')
        $('.get-comments').empty()
        fetchComments(id)
    })
    .catch(err =>{
        console.log('errrorr');
        console.log(err);
    })
}