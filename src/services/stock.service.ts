import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private readonly http = inject(HttpClient);
  private readonly url = environment.API_URL;

  constructor() {}

  getStockNegativo(codigoEmpresa: string) {
    return this.http.get<any[]>(
      this.url + '/informeStock/negativosConsolidado/' + codigoEmpresa
    );
  }
}
