# W-TECH-TEST
Este repositorios consta de dos proyectos. uno de fontend y backend correspondientes a una prueba técnica

# Api Nodejs

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT                           | Puerto de servidor                  |                                                |
|API_WTECH_MONGODB_HOST         | Host de base de datos mongoDB       |                                                |
|API_WTECH_MONGODB_PORT         | Puerto donde corre mongoDB          |                                                |
|API_WTECH_MONGODB_NAME         | Nombre de base de datos a usar      |                                                |

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0^
- Install MongoDB version 5.0.8


# Getting started
- Clone the repository
```
git clone https://github.com/jehernandezv/W-TECH-TEST.git
```
- Install dependencies
```
cd ApiHobbiesW-TECH
npm install
```
- Build and run the project
```
npm run start
npm run dev
```
  Navigate to `http://localhost:4000` or default `http://localhost:3000`


## Testing

```
"jest": "^28.1.1",
"supertest": "^6.2.3"
```
### Running tests using NPM Scripts
````
npm run test
````

# Postman
## Specification

```
{
	"info": {
		"_postman_id": "e4a2ef17-f646-4c02-96e8-5f95f2488938",
		"name": "W-TECH",
		"description": "Esta documentación hace referencia al backend establecido por la prueba técnica para la empresa W-TECH.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "19931251"
	},
	"item": [
		{
			"name": "Notes",
			"item": [
				{
					"name": "EnumNotes",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:4000/note/all",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"note",
								"all"
							]
						},
						"description": "Esta ruta es la encargada de listar las notas guardas en base de datos, esta retorna un arreglo de objetos Json de tipo nota."
					},
					"response": [
						{
							"name": "EnumNotes",
							"originalRequest": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"note\": \"Los años biciestos tienen menos dias\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:4000/note/all",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"note",
										"all"
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "[\r\n    {\r\n        \"_id\": \"62b3f16fcbc336bd79ee554d\",\r\n        \"note\": \"asdasdffffasdasd\",\r\n        \"createdAt\": \"2022-06-23T04:51:59.931Z\",\r\n        \"updatedAt\": \"2022-06-23T04:52:15.393Z\",\r\n        \"__v\": 0\r\n    },\r\n    {\r\n        \"_id\": \"62b3f183cbc336bd79ee5551\",\r\n        \"note\": \"asdsdf\",\r\n        \"createdAt\": \"2022-06-23T04:52:19.218Z\",\r\n        \"updatedAt\": \"2022-06-23T13:24:38.782Z\",\r\n        \"__v\": 0\r\n    },\r\n    {\r\n        \"_id\": \"62b3f8f348fcb40fc0f7c55e\",\r\n        \"note\": \"hola afsdcvsvsdfsd\",\r\n        \"createdAt\": \"2022-06-23T05:24:03.593Z\",\r\n        \"updatedAt\": \"2022-06-23T13:24:21.009Z\",\r\n        \"__v\": 0\r\n    },\r\n    {\r\n        \"_id\": \"62b4698b88ea2617283ae071\",\r\n        \"note\": \"sdfsdf\",\r\n        \"createdAt\": \"2022-06-23T13:24:27.207Z\",\r\n        \"updatedAt\": \"2022-06-23T13:24:27.207Z\",\r\n        \"__v\": 0\r\n    },\r\n    {\r\n        \"_id\": \"62b4698f88ea2617283ae073\",\r\n        \"note\": \"sdf\",\r\n        \"createdAt\": \"2022-06-23T13:24:31.410Z\",\r\n        \"updatedAt\": \"2022-06-23T13:24:31.410Z\",\r\n        \"__v\": 0\r\n    }\r\n]"
						}
					]
				},
				{
					"name": "AddNote",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"note\": \"Los años biciestos tienen menos dias\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/note/add",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"note",
								"add"
							]
						},
						"description": "Esta ruta es usada para agregar notas en el servicios backend. Se envía un objeto de tipo Json por medio del body de la petición.\n\nSu retorno es el documento nota devuelto de la base de datos"
					},
					"response": [
						{
							"name": "AddNote",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"note\": \"dfsdfsdf\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:4000/note/add",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"note",
										"add"
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n    \"note\": \"Los años biciestos tienen menos dias\",\r\n    \"_id\": \"62b4745488ea2617283ae0ab\",\r\n    \"createdAt\": \"2022-06-23T14:10:28.134Z\",\r\n    \"updatedAt\": \"2022-06-23T14:10:28.134Z\",\r\n    \"__v\": 0\r\n}"
						}
					]
				},
				{
					"name": "EditNote",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"note\":\"esta es una nota de prueba\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:4000/note/edit/62b3f16fcbc336bd79ee554d",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"note",
								"edit",
								"62b3f16fcbc336bd79ee554d"
							]
						},
						"description": "Esta ruta especifica la actualización de un elemento nota, se dividen en dos partes:\n\n*   Un parámetro que es enviado por la url definido como id, el cual hace referencia al id de la nota a cambiar\n*   Un body de tipo Json con los campos a cambiar\n    \n\nSu retorno es un documento Json de tipo nota original, es decir el anterior a ser actualizado."
					},
					"response": [
						{
							"name": "EditNote",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"note\":\"esto es una cambio\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:4000/note/edit/62b3f16fcbc336bd79ee554d",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"note",
										"edit",
										"62b3f16fcbc336bd79ee554d"
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n    \"_id\": \"62b3f16fcbc336bd79ee554d\",\r\n    \"note\": \"asdasdffffasdasd\",\r\n    \"createdAt\": \"2022-06-23T04:51:59.931Z\",\r\n    \"updatedAt\": \"2022-06-23T04:52:15.393Z\",\r\n    \"__v\": 0\r\n}"
						}
					]
				},
				{
					"name": "DeleteNote",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "http://localhost:4000/note/delete/62b3f16fcbc336bd79ee554d",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"note",
								"delete",
								"62b3f16fcbc336bd79ee554d"
							]
						},
						"description": "StartFragment\n\nEsta ruta especifica la eliminación de un elemento nota, el cual consta de un parámetro que es enviado por la url definido como id, el cual hace referencia al id de la nota a eliminar.\n\nDicha petición retorna el objeto eliminado"
					},
					"response": [
						{
							"name": "DeleteNote",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"url": {
									"raw": "http://localhost:4000/note/delete/62b3f8f348fcb40fc0f7c55e",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"note",
										"delete",
										"62b3f8f348fcb40fc0f7c55e"
									]
								}
							},
							"_postman_previewlanguage": null,
							"header": null,
							"cookie": [],
							"body": "{\r\n    \"_id\": \"62b3f8f348fcb40fc0f7c55e\",\r\n    \"note\": \"hola afsdcvsvsdfsd\",\r\n    \"createdAt\": \"2022-06-23T05:24:03.593Z\",\r\n    \"updatedAt\": \"2022-06-23T13:24:21.009Z\",\r\n    \"__v\": 0\r\n}"
						}
					]
				}
			],
			"description": "Esta colección se refiere al manejo de los recursos de tipo nota"
		}
	]
}
```

# FrontEnd

Edta seccion corresponde al aplicativo front de la prueba tecnica solicitada

# Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|API_URL                        | Ruta Api - file environment.ts      |                                                |


# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0^
- Install Angular version 13.0.0^


# Getting started
- Clone the repository
```
git clone https://github.com/jehernandezv/W-TECH-TEST.git
```
- Install dependencies
```
cd FrontEnd-W-TECH-test
npm install
```
- Build and run the project
```
ng serve
```
  Navigate to `http://localhost:4200`
