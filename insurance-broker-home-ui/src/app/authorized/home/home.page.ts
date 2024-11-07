import { Component, Renderer2 } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title!: string;
  initials!: string;

  constructor(
    private userService: UserService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.title = this.userService.getTitle();
    this.initials = this.getInitials(this.title);
  }

  getInitials(title: string): string {
    const names = title.split(' ');
    const firstInitial = names[0] ? names[0][0] : '';
    const secondInitial = names[1] ? names[1][0] : '';
    return (firstInitial + secondInitial).toUpperCase();
  }

  toggleDarkTheme(shouldEnable: boolean) {
    const body = document.querySelector('body');
    if (body) {
      this.renderer[shouldEnable ? 'addClass' : 'removeClass'](body, 'dark');
    }
  }

}
