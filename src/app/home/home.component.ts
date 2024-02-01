import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private homeService = inject(HomeService);
  data = this.homeService.data;
}
