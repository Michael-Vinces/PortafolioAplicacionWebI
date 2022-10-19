
        document.write("<body class=\"text-bg-secondary p-3\">");
        document.write("<title>Modificaciones del objeto Document</title>");
        document.write("<center><h1>SKALEMI ACADEMY</h1></center>");
        document.write("<center><p>El siguiente botón le permitirá abrir una ventana emergente.</p></center>");
        document.write("<center><input class=\"btn btn-success\" type=\"button\" value=\"Abrir Ventana Emergente\" onclick=\"nuevaventana()\"></center>");
        document.write("</body> ");
        function nuevaventana(){
        myWindow=window.open('', '','width=300, height=200');
        myWindow.document.write('<html>');
        
        myWindow.document.write('<head>');
        myWindow.document.write('<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi\" crossorigin=\"anonymous\">');
        myWindow.document.write('<title>Ventana Emergente</title>');     
        myWindow.document.write('</head>');
        myWindow.document.write('<body class=\"text-bg-secondary p-3\">');
        myWindow.document.write('Vinces Andrade Michael Leonardo<br>')
        myWindow.document.write('<br><input class=\"btn btn-danger\" type=button value=Cerrar ventana secundaria onclick=window.close()>');
        myWindow.document.write('</body>');
        myWindow.document.write('</html>');
        }