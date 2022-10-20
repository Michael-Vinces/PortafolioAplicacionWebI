var Producto_alimenticio = new Object();          
Producto_alimenticio.nombre = "Encebollado Grande";     
Producto_alimenticio.precio = "$2.50";
Producto_alimenticio.codigo = "LIQ_0045";     
 
                
var Almacen = new Array (Producto_alimenticio.nombre,
    Producto_alimenticio.precio, Producto_alimenticio.codigo)  
imprimeDatos(Almacen);
            
function imprimeDatos(Array){                        
    for(i=0; i < Array.length; i++){  
        if(i==0){
            document.write(" <center><h1> "+ Array[i] + " </h1></center><hr>");
            document.write("<h3> Detalle del Producto: </h3>");
        }
        if(i==1){
            document.write("<strong>Precio Unitario:</strong> "+Array[i] + " </br>");
        }  
        if(i==2){
            document.write("<strong>Código: </strong>"+Array[i] + " </br>");
        }                  
    }             
}  