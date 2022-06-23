import { Component, OnInit } from '@angular/core';
import { Hobbie } from 'src/app/models/hobbies-component/hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: Hobbie[] = [
    new Hobbie("Jardineria", "La jardinería es otro hobby excelente. Gracias a ella desarrollas la paciencia y aprendes a ser cuidadoso con los detalles y a manejar varios proyectos simultáneos.", "https://image.shutterstock.com/image-photo/gardening-tools-utensils-on-lush-600w-475483222.jpg"),
    new Hobbie("Tocar Guitarra", "Me gusta escuchar canciones en la radio y replicarlas con mi guitarra", "https://image.shutterstock.com/image-photo/beautiful-girl-plays-acoustic-guitar-600w-1937872063.jpg"),
    new Hobbie("Pintura","Otro hobby que potencia la creatividad. Además, es una forma de expresión que nos permite plasmar sobre un lienzo todo cuanto llevamos dentro, descubriendo objetivos de nuestra vida que podrían de otra forma permanecer ocultos.","https://image.shutterstock.com/image-illustration/oil-painting-brooklyn-bridge-new-600w-1798789597.jpg"),
    new Hobbie("Baile", "Otra forma de moverse y mantener el cuerpo en movimiento es el baile. Además, en este caso se añade la creatividad y la necesidad de potenciar la disciplina y la memoria para conocer los pasos de cada tipo de danza. Y, por supuesto, también mejora la coordinación mental y física.", "https://image.shutterstock.com/image-photo/stylish-dancers-looking-each-other-600w-1603666288.jpg")
  ]

  hobbie: Hobbie = this.hobbies[0];

  constructor() { }

  ngOnInit(): void {
  }

  selectHobbie(){
     let hobbiesAux: Hobbie[] = this.hobbies.filter((current) => current != this.hobbie);
     let dishobies: Hobbie[] = hobbiesAux.sort(function() { return Math.random() - 0.5});
     this.hobbie = dishobies[0]
  }

}
