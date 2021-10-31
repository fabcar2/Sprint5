    $("#cargar").click(function(){
         
        })


         $(function(){
            $("#cargar").click(function(){
                var endpoint="http://localhost:8080/estudiante"
                //realiza la solicitud GET al endpoint
                $.get(endpoint,function(datos){
                    var i;
                    $("#cuerpotabla").html("");    
                    for(i=0;i<datos.length;i++){
                        var linea=`<tr><td>`+datos[i].id+`</td>
                            <td>`+datos[i].nombres+`</td>
                            <td>`+datos[i].apellidos+`</td>
                            <td>`+datos[i].telefono+`</td>
                            <td>`+datos[i].correo+`</td>
                            <td>`+datos[i].edad+`</td></tr>`;
                        $("#cuerpotabla").append(linea)    
                    }
                })
            })
        })

        $(function(){
            $("#buscar").click(function(){
                var id=$("#idestudiante").val();
                
                var endpoint="http://localhost:8080/estudiante/"+id;

                $.get(endpoint,function(estudiante){
                    $("#cuerpotabla").html("");

                    var linea=`<tr><td>`+estudiante.id+`</td>
                        <td>`+estudiante.nombres+`</td>
                        <td>`+estudiante.apellidos+`</td>
                        <td>`+estudiante.telefono+`</td>
                        <td>`+estudiante.correo+`</td>
                        <td>`+estudiante.edad+`</td></tr>`;
                    $("#cuerpotabla").append(linea)


                })


            })


        })