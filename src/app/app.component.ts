import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockNegativoComponent } from '../pages/stock-negativo/stock-negativo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StockNegativoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mitasa3';
}
