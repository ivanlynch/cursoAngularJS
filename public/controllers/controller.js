//Declaramos el nombre del modulo!
angular.module("AppCtrl", [])

    //declaramos el primer controlador
    .controller("ControlAppCtrl", function($scope) {
        /* $scope sirve para decir cual es el alcance del controlador */
        $scope.nombre = "Iván Lynch";

        //Estoy declarando un objeto vacio.
        $scope.nuevoComentario = {};

        //Declaramos un array de objetos JSON
        $scope.comentarios = [
            {
                comentario: "Este es un comentario",
                username: "Este es un usuario"
            },
            {
                comentario: "Este es otro comentario",
                username: "Este es otro usuario"
            }
        ];
        //Declaramos la funcion para agregar comentarios.
        $scope.agregarComentario = function(){

            //Agregamos un documento al array comentarios
            $scope.comentarios.push($scope.nuevoComentario);

            //reiniciamos el objeto
            $scope.nuevoComentario = {};
        }
    });