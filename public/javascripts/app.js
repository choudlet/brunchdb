$(() => {
  $('.deletebutton').click((event)=>{
    event.preventDefault();
    var id = event.currentTarget.dataset.id;
    console.log(id);
    $.ajax({
      url: `http://localhost:3000/viewsingle/${id}`,
      method: 'delete',
      success: function() {
        console.log("Yay!");
        location.href = '/viewall';
      }
    });
  });

});
