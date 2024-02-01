import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  private data$(): Observable<{content: string}> {
    return this.http.get<{content: string}>('http://localhost:1337/api/contact-page')
      .pipe(map( (res: any) => ({
        content: res.data.attributes.content
      })))
  }

  data = toSignal(this.data$(), {initialValue: {content: 'N/A'}});
}
