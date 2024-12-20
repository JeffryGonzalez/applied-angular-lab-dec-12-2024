import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BookStore } from '../services/books.store';
import { SorterComponent } from '../components/sorter.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SorterComponent, RouterLink],
  template: ` @if (store.books()) {
    <app-book-sorter />
    <div class="grid grid-cols-4 gap-8 h-svh overflow-auto">
      @for (book of store.books(); track book.id) {
        <div class="card bg-base-100  shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-green-600">
              <a [routerLink]="['..', 'details', book.id]" class="hover:link">{{
                book.title
              }}</a>
            </h2>
            <p>{{ book.title }} is by {{ book.author }}.</p>
            <p>It was released in {{ book.year }} by {{ book.author }}</p>
          </div>
        </div>
      }
    </div>
  }`,
  styles: ``,
})
export class ListComponent {
  store = inject(BookStore);
}
