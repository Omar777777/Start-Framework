import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  hiddenModal: boolean = true;

  Ishidden(): void {
    this.hiddenModal = !this.hiddenModal;
    console.log(this.hiddenModal);
  }


  stopClickPropagation(e: MouseEvent) {
    e.stopPropagation();
  }

  
}
