import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note-component/note';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  private apiURL = environment.API_URL

  constructor(private http: HttpClient) { }

  saveNote(item: Note): Observable<Note> {
    return this.http.post<Note>(this.apiURL + 'note/add', {
      "note":item.note
    });
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiURL + 'note/all');
  }

  deleteNote(id: Number): Observable<Note> {
    return this.http.delete<Note>(this.apiURL + 'note/delete/' + id);
  }

  updateNote(note: Note){
    return this.http.put<Node>(this.apiURL + 'note/edit/' + note._id, {"note": note.note })
  }

}
