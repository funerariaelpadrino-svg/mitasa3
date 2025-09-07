import { Component, inject, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { lastValueFrom } from 'rxjs';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IStockNegativo } from '../../app/core/interfaces/stock-negativo.interface';

@Component({
  selector: 'stock-negativo',
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './stock-negativo.component.html',
})
export class StockNegativoComponent implements OnInit {
  private readonly stockService = inject(StockService);
  stockNegativo: IStockNegativo[] = [];
  async ngOnInit() {
    try {
      this.stockNegativo = await lastValueFrom(
        this.stockService.getStockNegativo('01')
      );
    } catch (error) {}
  }
}
