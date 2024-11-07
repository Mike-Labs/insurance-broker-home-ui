import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private title: string = 'John Doe';

  constructor() { }

  getTitle(): string {
    return this.title;
  }

  setTitle(newTitle: string): void {
    this.title = newTitle;
  }
}
