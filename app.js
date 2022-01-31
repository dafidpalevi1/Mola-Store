const search = () => {
    const searchbox = document.getElementById("seacrh-item").value.toUppurCase();
    const storeitems = document.getElementById("kategori")
    const product1 = document.querySelectorAll("product1")
    const pname = storeitems.getElementsByTagName("h5")

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h5')[0];

        if(match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product1[i].style.display = "";
            } else {
                product1[i].style.display = "none";
            }
        }
    }
}