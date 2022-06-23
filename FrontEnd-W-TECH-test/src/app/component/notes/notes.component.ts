import { Component, OnInit } from '@angular/core';
import {Note} from '../../models/note-component/note';
import { NotesService } from 'src/app/services/notes.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  selectedNote: Note = new Note()

  notes: Note[] = [];
  isEdit = false;

  constructor(private notesService: NotesService, private notifications: NotificationsService) { }

  ngOnInit(): void {
    this.getNotes()
  }

  /**
   * Aquí recibimos una nota y la enviamos al servicio que se conecta con la API
   */
  saveNote() {
    if(!this.isEdit){
      this.notesService.saveNote(this.selectedNote).subscribe({
        complete: () => {
            this.onSuccess("Se ha ingresado un nota correctamente")
            this.selectedNote = new Note()
          }, // completeHandler
        error: (err) => { this.onError("No se pudo guardar la nota. Error: " + err.name)},    // errorHandler 
        next: (note) =>{  this.notes.push(note) }    // nextHandler
    });
    }else{
      this.updateNote(this.selectedNote);
    }
    
  }

  /**
   * Esta función obtiene las notas por medio del servicio que hace la solicitud a la API
   */

  getNotes() {
    this.notesService.getNotes().subscribe({
      complete: () => { }, // completeHandler
      error: (err) => { this.onError("No se pudo obtener las notas. Err: " +  err.name) },    // errorHandler 
      next: (notes) => { this.notes = notes }    // nextHandler
  });
  }

 /**
  * Por medio de su parametro accedemos al id necesario para envia a la API y remueva el elemento
  * @param note el elemento note que se ha seleccionado por la interfaz de usuario
  */
  deleteNote(note: Note){
    this.notesService.deleteNote(note._id).subscribe({
      complete: () => { this.onSuccess("Se ha eliminado la nota correctamente") }, // completeHandler
      error: (err) => { this.onError("No se pudo elinar la nota. Error: " + err.name) },    // errorHandler 
      next: (note) => { this.notes = this.notes.filter((current) => current._id !== note._id) }    // nextHandler
  });
  }

  /**
   * Esta función esta como un mecanismo que detecta la intención del usuario de editar una nota
   * @param note el elemento que se desea editar
   */
  openForEdit(note: Note){
    this.selectedNote = note;
    this.isEdit = true;
  }

    /**
     * Es la encargada de recibir la nota actualizada y enviarla al servicio de la API
     * @param note la nota actualizada
     */
  updateNote(note: Note){
    this.notesService.updateNote(note).subscribe({
      complete: () => { this.onSuccess("Se ha actualizado la nota correctamente")}, // completeHandler
      error: (err) => { this.onError("No se pudo actualizar la nota. Error: " + err.name) },    // errorHandler 
      next: () => { this.selectedNote = new Note() 
         this.isEdit = false }    // nextHandler
  });
  
  }

  /**Estas funciones hacen parte de servicio de notificaciones de angular2-notifications */
  onSuccess(message: any){
    this.notifications.success('Completado', message, {
      postition: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgress: true
    });
  }

  onError(message: any){
    this.notifications.error('Error', message, {
      postition: ['bottom', 'right'],
      timeOut: 4000,
      animate: 'fade',
      showProgress: true
    });
  }

  onRemove(message: any){
    this.notifications.warn('Eliminación', message, {
      postition: ['bottom', 'right'],
      timeOut: 2000,
      animate: 'fade',
      showProgress: true
    });
  }
}
