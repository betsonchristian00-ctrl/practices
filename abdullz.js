function showPage(pageNumber){

let pages=document.querySelectorAll(".page");

pages.forEach(function(page){
page.classList.remove("active");
});

document.getElementById("page"+pageNumber).classList.add("active");

}

function nextPage(pageNumber){

showPage(pageNumber);

}

function previousPage(pageNumber){

showPage(pageNumber);

}

function bookRoom(){

showPage(5);

}

</script>

</body>
</html>
