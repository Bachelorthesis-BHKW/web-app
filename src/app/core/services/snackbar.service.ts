import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  static snackBarTime = 3000;
  constructor(private snackBar: MatSnackBar) {}

  public open(text: string) {
    this.snackBar.open(text, undefined, {
      duration: SnackbarService.snackBarTime,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
