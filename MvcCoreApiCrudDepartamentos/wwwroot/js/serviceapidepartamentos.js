﻿let url = "https://apicoredepartamentosjjlm2025.azurewebsites.net/";

function getDepartamentosAsync(callBack) {
	let request = "api/departamentos";
	$.ajax({
		url: url + request,
		type: "GET",
		dataType: "json",
		success: function (data) {
			console.log(data);
			callBack(data);
		}
	})
}

function convertDeptToJson(id, nombre, localidad) {
	let dept = new Object();
	dept.idDepartamento = id;
	dept.nombre = nombre;
	dept.localidad = localidad;
	var json = JSON.stringify(dept);
	return json;
}

function insertDepartamentoAsync(id, nombre, localidad, callBack) {
	let json = convertDeptToJson(id, nombre, localidad);
	var request = "api/departamentos";
	$.ajax({
		url: url + request,
		type: "POST",
		data: json,
		contentType: "application/json",
		success: function () {
			callBack();
		}
	})
}

function updateDepartamentoAsync(id, nombre, localidad, callBack) {
	let dept = new Object();
	dept.idDepartamento = id;
	dept.nombre = nombre;
	dept.localidad = localidad;

	var json = JSON.stringify(dept);
	var request = "api/departamentos";
	$.ajax({
		url: url + request,
		type: "PUT",
		data: json,
		contentType: "application/json",
		success: function () {
			callBack();
		}
	})
}

function deleteDepartamentoAsync(id, callBack) {
	let request = "api/departamentos/" + id;
	$.ajax({
		url: url + request,
		type: "DELETE",
		success: function () {
			callBack();
		}
	})
}

// function myFunctionAsync(callBack) {
// 	//SE REALIZAN TODAS LAS ACCIONES QUE DESEEMOS
// 	//CUANDO HEMOS FINALIZADO Y DESEAMOS VOLVER
// 	//UTILIZAMOS callBack
// 	callBack(parametros);
// }
