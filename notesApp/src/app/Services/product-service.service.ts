import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Notes } from '../Models/Notes';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  noteList: AngularFireList<any>
  selectName:Notes = new Notes();

  constructor( private firebase: AngularFireDatabase ) { }

  getNotes()
  {
    return this.noteList = this.firebase.list('Notes');
  }

  insertNotes(notes: Notes)
  {
    this.noteList.push({
      title: notes.title,
      description: notes.description,
      categoria: notes.categoria
    });
  }

  updateNotes(notes: Notes)
  {
    this.noteList.update(notes.$key, {
      title: notes.title,
      description: notes.description,
      categoria: notes.categoria
    });
  }

  deleteNotes($key: string)
  {
    this.noteList.remove($key);
  }

}
