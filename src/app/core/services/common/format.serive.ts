import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  formatDate(isoDate: string): string {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} - ${h}:${m}:${s}`;
  }

  formatMoney(money: number): string {
    return money.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND"
    });
  }
}
