import { Component, OnInit } from '@angular/core';
import { Hobbie } from 'src/app/models/hobbies-component/hobbie';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: Hobbie[] = [
    new Hobbie("Jardineria", "La jardinería es otro hobby excelente. Gracias a ella desarrollas la paciencia y aprendes a ser cuidadoso con los detalles y a manejar varios proyectos simultáneos.", "https://media.istockphoto.com/photos/woman-weeding-in-the-garden-picture-id1314727519?s=612x612"),
    new Hobbie("Tocar Guitarra", "Me gusta escuchar canciones en la radio y replicarlas con mi guitarra", "https://media.istockphoto.com/photos/the-musicians-are-checking-the-sound-of-the-guitar-and-trying-to-play-picture-id1319479593?s=612x612"),
    new Hobbie("Pintura","Otro hobby que potencia la creatividad. Además, es una forma de expresión que nos permite plasmar sobre un lienzo todo cuanto llevamos dentro, descubriendo objetivos de nuestra vida que podrían de otra forma permanecer ocultos.","https://image.shutterstock.com/image-illustration/oil-painting-brooklyn-bridge-new-600w-1798789597.jpg"),
    new Hobbie("Baile", "Otra forma de moverse y mantener el cuerpo en movimiento es el baile. Además, en este caso se añade la creatividad y la necesidad de potenciar la disciplina y la memoria para conocer los pasos de cada tipo de danza. Y, por supuesto, también mejora la coordinación mental y física.", "https://media.istockphoto.com/photos/hispanic-man-dancing-and-enjoying-a-leisure-day-picture-id1304014053?s=612x612"),
    new Hobbie("Escuchar música","La música es una de las artes más antiguas y que más influencia ha tenido a lo largo de la historia. Desde cánticos rituales a melodías inspiradoras, siempre ha tenido cierta magia que nos acompaña en nuestros momentos más alegres y más tristes y nos ayuda a sentir emociones. Pop, rock, jazz, heavy metal, música clásica… las posibilidades son prácticamente ilimitadas.", "https://media.istockphoto.com/photos/woman-relaxing-and-listening-to-music-picture-id901211936?s=612x612"),
    new Hobbie("Ver Series o ir a Cine", "Una forma de matar el tiempo es mediante la visualización de películas o series, sean del género que sean. Se trata de una actividad que puedes hacer con otras personas o bien tu solo, y puede ayudarte ademas a ver diferentes visiones de la realidad.","https://media.istockphoto.com/photos/young-woman-watching-movies-in-home-theater-picture-id1143251776?s=612x612")
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
