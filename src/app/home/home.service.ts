import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ENVIRONNEMENT } from '../../assets/env/environnement';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private http = inject(HttpClient);
  private data$(): Observable<{title: string, content: string}> {
    return this.http.get<{title: string, content: string}>(`${ENVIRONNEMENT.backend.url}/api/home-page`)
      .pipe(map( (res: any) => ({
        title: res.data.attributes.title,
        content: res.data.attributes.content
      })))
  }

  data = toSignal(this.data$(), {initialValue: {title: 'N/A', content: 'N/A'}});
}
