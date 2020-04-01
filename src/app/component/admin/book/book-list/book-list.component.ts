import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Observable} from 'rxjs';
import {IBook} from '../IBook';
import {AppComponent} from '../../../../app.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];
  content: string;

  constructor(private bookService: BookService, private app: AppComponent) {
  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(next =>
      (this.bookList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

}
