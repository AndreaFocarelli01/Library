import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { book_service_token, BookServiceI } from '../../bookI.service';
import { BookService } from '../book.service';
import { Book } from '../../../model/book.model';

@Component({
  selector: 'app-edit',
  standalone: true,
  providers: [{ provide: book_service_token, useClass: BookService }],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  book!: Book;
  isbn!: string;
  form!: FormGroup;

  //injection del servizio richiesto
  private bookService = inject<BookServiceI>(book_service_token);

  constructor(private router: Router, private route: ActivatedRoute) { }


  submit() {
    this.bookService.updateBook(this.form.value).subscribe(
      (res: any) => {
        this.router.navigateByUrl('book/index');
        console.log("inserimento avvenuto correttamente");
      }
    )
  }
  ngOnInit(): void {
    this.isbn = this.route.snapshot.params['isbn'];

    this.bookService.getBooksByISBN(this.isbn).subscribe(
      (data) => {
        this.book = data;
        console.log("recupero dati avvenuto correttamente");
      }
    );

    this.form = new FormGroup({
      //crazione di ogni campo all'interno della form
      //ogni campo deve essere uguale a quello che abbiamo sul DB 
      isbn: new FormControl(''),
      title: new FormControl(''),
      genre: new FormControl(''),
      published: new FormControl(false)
    });
  }
}
