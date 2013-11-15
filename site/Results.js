$(document).ready(function() {
    // When an item has been clicked on
    $(document).on('click','.row',function (e){
        alert(e.currentTarget().id);
    });

});


