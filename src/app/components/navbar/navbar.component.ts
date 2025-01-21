import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isscrolling: boolean = false;
  @HostListener("document:scroll")
  onscrollnavbar() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.isscrolling = true;
    } else {
      this.isscrolling = false;
    }
    
  }

}
