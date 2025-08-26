function producto(nombre, precio, descripcion){

}
categorias = [herramientas, muebles, bazar]

function categoria(nombre, index) {
    productos = document.getElementById("productos")
    productos.innerHTML = ""
    productos.innerHTML += "<br><br><br><h2>"+nombre+"</h2>"
    cat = categorias[index]
    for (let i = 0; i < cat.length; i++) {
        if(cat[i][0]){// si fue vendido, tiene un cartel de vendido
            prod ="<div class='producto_vendido'>"
        }else{
            prod = "<div class='producto'>"
        }
        
        prod += "<h3>"+cat[i][1]+"</h3>"
        prod +="<img src='imagenes/"+cat[i][4]+"' alt='fallo carga de imagen'>"
        prod +="<h4>Precio: "+cat[i][2]+"</h4>"
        if(cat[i][0]){// si fue vendido, tiene un cartel de vendido
            prod +="<p style='color:red; font-weight: bold;'>Vendido</p></div>"            
        }else{
            prod +="<p>"+cat[i][3]+"</p></div>"
        }
        
        productos.innerHTML += prod 
    }
}