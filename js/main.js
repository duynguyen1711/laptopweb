function search(){
    var k =document.getElementById('kw');
    if(k != null){
        k= k.value

        var items=document.querySelectorAll("div.content-item > a")
        for (var i=0;i<=items.length;i++){
            var name=items[i].getElementsByClassName("content-item-name")[0].innerText;
            
            if(name.toLowerCase().indexOf(k)>=0){
                // items[i].parentElement.style.height="360px";
                items[i].parentElement.style.display="inline-block";
            }
            else
                items[i].parentElement.style.display="none";
        }
    }
}