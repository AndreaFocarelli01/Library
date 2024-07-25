import { Component, inject, OnInit } from '@angular/core';
import { book_service_token, BookServiceI } from '../../bookI.service';
import { BookService } from '../book.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  providers: [{ provide: book_service_token, useClass: BookService }],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit {

  private router: Router = new Router();


  form!: FormGroup;

  private bookService = inject<BookServiceI>(book_service_token);

  submit() {
    console.log(this.form.value)
    this.bookService.saveBook(this.form.value).subscribe(
      (res: any) => {
        console.log("inserimento nuovo libro avvenuto correttamente");
        this.router.navigateByUrl('/book/index');
      }
    )
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      isbn: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      genre: new FormControl('', Validators.required),
      published: new FormControl(false, Validators.required)
    });
  }
}
