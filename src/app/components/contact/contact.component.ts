import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  preventDefaultOfButton(e: MouseEvent) {
    e.preventDefault();
    
  }


  isTyping1 = false;
  onInput1(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isTyping1 = inputElement.value.length > 0;
  }


   isTyping2 = false;
  onInput2(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isTyping2 = inputElement.value.length > 0;
  }

   isTyping3 = false;
  onInput3(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isTyping3 = inputElement.value.length > 0;
  }

    isTyping4 = false;
  onInput4(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.isTyping4 = inputElement.value.length > 0;
  }


}
