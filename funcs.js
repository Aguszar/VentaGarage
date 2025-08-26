function producto(nombre, precio, descripcion){

}
categorias = [herramientas, muebles, bazar]

function categoria(nombre, index) {
    productos = document.getElementById("productos")
    productos.innerHTML = ""
    productos.innerHTML += "<br><br><br><h2>"+nombre+"</h2>"
    cat = categorias[index]
    for (let i = 0; i < cat.length; i++) {
        prod = "<div class='producto'>"
        prod += "<h3>"+cat[i][0]+"</h3>"
        prod +="<img src='imagenes/"+cat[i][3]+"' alt='fallo carga de imagen'>"
        prod +="<h4>Precio: "+cat[i][1]+"</h4>"
        prod +="<p>"+cat[i][2]+"</p></div>"
        productos.innerHTML += prod       
    }
}