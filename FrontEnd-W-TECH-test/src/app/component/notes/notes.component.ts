import { Component, OnInit } from '@angular/core';
import {Note} from '../../models/note/note';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  selectedNote: Note = new Note()

  notes: Note[] = [];
  page: number = 1;
  isEdit = false;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getNotes()
  }

  saveNote() {

    if(!this.isEdit){
      this.notesService.saveNote(this.selectedNote).subscribe({
        complete: () => {
            console.log('se agrego')
          }, // completeHandler
        error: (err) => { console.log(err)},    // errorHandler 
        next: (note) =>{  this.notes.push(note) }    // nextHandler
    });
    }else{
      this.updateNote(this.selectedNote);
    }
    
  }

  getNotes() {
    this.notesService.getNotes().subscribe({
      complete: () => { console.log(this.notes)}, // completeHandler
      error: (err) => { console.log(err) },    // errorHandler 
      next: (notes) => { this.notes = notes }    // nextHandler
  });
  }

  deleteNote(note: Note){
    this.notesService.deleteNote(note._id).subscribe({
      complete: () => { console.log('eliminado')}, // completeHandler
      error: (err) => { console.log(err) },    // errorHandler 
      next: (note) => { this.notes = this.notes.filter((current) => current._id !== note._id) }    // nextHandler
  });
  }

  openForEdit(note: Note){
    this.selectedNote = note;
    this.isEdit = true;
  }

  updateNote(note: Note){
    this.notesService.updateNote(note).subscribe({
      complete: () => { console.log('actualizado')}, // completeHandler
      error: (err) => { console.log(err) },    // errorHandler 
      next: (note) => { console.log('actualizado:' , note) }    // nextHandler
  });
  }

}
