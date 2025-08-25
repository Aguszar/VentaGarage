function producto(nombre, precio, descripcion){

}
categorias = [herramientas]
function categoria(nombre, index) {
    productos = document.getElementById("productos")
    productos.innerHTML = ""
    productos.innerHTML += "<br><h2>"+nombre+"</h2>"
    for (let index = 0; index < herramientas.length; index++) {
        prod = "<div class='producto'>"
        prod +="<img src='imagenes/herramientas/Soldadora.jpg' alt=''>"
        prod +="<h3>Precio: $70.000</h3>"
        prod +="<p>Descripcion del producto</p></div>"
        productos.innerHTML += prod
        
    }
}