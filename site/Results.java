
$(document).ready(function() {
    // When an item has been clicked on
    $(document).on('click','.listItem',function (e){
        $("#middleEditBtn").show();
        if (isEditing) {return;}
        var id = e.currentTarget.id;
        var item = itemForID(id);
        setCurrentItem(item);
    });

    // Sorting selection
    $('#sortSelect').change(function (e){
        var id = $(this).val();
        if (id=="Alphabetically") {
            currentSort = abcSort;
        }else if (id=="Project") {
            currentSort = projectSort;
        }else if (id=="Priority") {
            currentSort = prioritySort;
        }else if (id=="Date") {
            currentSort = dateSort;
        }else{
            console.log("Unrecognized sort id:"+id);
        }
        populateLeft(leftList.sort(currentSort));
    });
}


