import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'ngx-sbz-type-delete',
  template: `
    <div>
      <span #textElement class="text"></span>
      <span #blinkElement class="text blink"></span>
    </div>
  `,
  styles: ['.blink {\n' +
  '  border-right-style: solid;\n' +
  '  animation: 1s blink infinite;\n' +
  '}\n' +
  '\n' +
  '@keyframes blink {\n' +
  '  to {\n' +
  '    opacity: .0;\n' +
  '  }\n' +
  '}']
})
export class InfiniteTypeDeleteComponent implements AfterViewInit {
  @ViewChild('textElement') textElement: ElementRef;
  @ViewChild('blinkElement') blinkElement: ElementRef;

  @Input() wordArray: string[] = ['You Can...', 'Write Anything You want...', 'SBZ 🍻 Enjoy 🍸🍻🍺🍷🍹'];
  @Input() textColor = 'black';
  @Input() fontSize = '20px';
  @Input() blinkWidth = '2px';
  @Input() typingSpeedMilliseconds = 300;
  @Input() deleteSpeedMilliseconds = 300;

  private wordArrayCounter = 0;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.initVariables();
    this.typingEffect();
  }

  private initVariables(): void {
    this.renderer.setStyle(this.textElement.nativeElement, 'color', this.textColor);
    this.renderer.setStyle(this.textElement.nativeElement, 'font-size', this.fontSize);
    this.renderer.setStyle(this.textElement.nativeElement, 'padding', '0.1em');

    this.renderer.setStyle(this.blinkElement.nativeElement, 'border-right-width', this.blinkWidth);
    this.renderer.setStyle(this.blinkElement.nativeElement, 'border-right-color', this.textColor);
    this.renderer.setStyle(this.blinkElement.nativeElement, 'font-size', this.fontSize);
  }

  private typingEffect(): void {
    const word = this.wordArray[this.wordArrayCounter].split('');
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return false;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.wordArrayCounter].split('');
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join('');
      } else {
        this.wordArrayCounter = this.wordArray.length > this.wordArrayCounter + 1 ? this.wordArrayCounter++ : 0;
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
    };
    loopDeleting();
  }
}
