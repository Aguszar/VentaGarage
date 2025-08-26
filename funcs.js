function producto(nombre, precio, descripcion){

}
categorias = [herramientas]
function categoria(nombre, index) {
    productos = document.getElementById("productos")
    productos.innerHTML = ""
    productos.innerHTML += "<br><br><br><h2>"+nombre+"</h2>"
    for (let i = 0; i < categorias[index].length; i++) {
        prod = "<div class='producto'>"
        prod += "<h3>"+herramientas[i][0]+"</h3>"
        prod +="<img src='imagenes/"+herramientas[i][3]+"' alt='fallo carga de imagen'>"
        prod +="<h4>Precio: "+herramientas[i][1]+"</h4>"
        prod +="<p>"+herramientas[i][2]+"</p></div>"
        productos.innerHTML += prod       
    }
}