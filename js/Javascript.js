function validar(){
	var nombre, apellidos, correo, comentario, verificacion;
	nombre = document.getElementById('nombre').value;
	apellidos = document.getElementById('apellidos').value;
	correo = document.getElementById('correo').value;
	comentario = document.getElementById('comentario').value;
 
	verificacion = /\w+@\w+\.+[a-z]/;

	msj1 = 'The fields cannot be empty!';
	msj2 = 'The Name is too long  1';
	msj3 = 'The Lastname is too long';
	msj6 = 'The email is very long';
	msj7 = 'The email is not valid';
	msj8 = 'Message sent successfully!';

	/* Danger Alert */
	function addDivAlert(msjAlert){
		var msjDiv = document.getElementById("msj");
		var miMsj = document.createElement("div"); 
		miMsj.setAttribute("class","col-12 mb-0 alert alert-danger alert-dismissible fade show msj-danger");
		miMsj.setAttribute("role","alert");
		miMsj.innerHTML = '<i class="fas fa-exclamation-circle pr-2"></i> ' + msjAlert + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		msjDiv.appendChild(miMsj);	

		/*Tiempo en que se muestra y se remueve el alert */
		setTimeout(function() {
			$(".msj-danger").fadeOut(1500);
			miMsj.remove();
		},3000);
	}

	/*Success Alert*/
	function addDivSuccess(msjAlert){
		var msjDiv = document.getElementById("msj");
		var miMsj = document.createElement("div"); 
		miMsj.setAttribute("class","col-12 mb-0 alert alert-warning alert-dismissible fade show msj-success");
		miMsj.setAttribute("role","alert");
		miMsj.innerHTML = '<i class="fas fa-exclamation-circle pr-2"></i> ' + msjAlert + ' <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		msjDiv.appendChild(miMsj);	

		/*Aqui la idea es borrar lo que se coloco en los campos, falta textarea y checkbox porque no se manejan igual */
		document.getElementById('nombre').value = "";
		document.getElementById('apellidos').value = "";
		document.getElementById('correo').value = "";
		document.getElementById('comentario').value = "";

		/*Tiempo en que se muestra y se remueve el alert */
		setTimeout(function() {
			$(".msj-danger").fadeOut(1500);
			miMsj.remove();
		},3000);
	}

	if(nombre === "" || apellidos === "" || correo === "" || comentario === ""){
		addDivAlert(msj1);
		return false;
	}else if (nombre.length>40){
		addDivAlert(msj2);
		return false;
	}else if (apellidos.length>45){
		addDivAlert(msj3);
		return false;
	}else if (correo.length>100){
		addDivAlert(msj6);
		return false;
	}else if (!verificacion.test(correo)){
		addDivAlert(msj7);
		return false;
	}else{
		addDivSuccess(msj8);
		return false;
	}
 }
