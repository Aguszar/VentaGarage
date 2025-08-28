function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function performTaskWithDelay() {
  console.log("Task started");
  await wait(3000); // Wait for 3 seconds
  console.log("Task resumed after delay");
}

categorias = [herramientas, muebles, bazar, cocina]

async function categoria(nombre, index) {
    productos = document.getElementById("productos")
    productos.innerHTML = ""
    cat = categorias[index]
    for (let i = 0; i < cat.length; i++) {
        if(cat[i][0]==1){// si fue vendido, tiene un cartel de vendido
            prod ="<div class='producto_vendido'>"
        }if(cat[i][0]==3){// esta reservado
            prod = "<div class='producto_reservado'>"
        }if(cat[i][0]==0){
            prod = "<div class='producto'>"
        }
        
        prod += "<h3>"+cat[i][1]+"</h3>"
        prod +="<img src='imagenes/"+cat[i][4]+"' alt='fallo carga de imagen'>"
        prod +="<h4>Precio: "+cat[i][2]+"</h4>"

        if(cat[i][0]==1){// si fue vendido, tiene un cartel de vendido
            prod +="<p style='color:red; font-weight: bold;'>Vendido</p></div>"
        }if(cat[i][0]==3){// esta reservado
            prod +="<p style='color:yellow; font-weight: bold;'>Reservado</p></div>"
        }if(cat[i][0]==0){
            prod +="<p>"+cat[i][3]+"</p></div>"
        }
        
        productos.innerHTML += prod 
        await wait(300);
    }
}