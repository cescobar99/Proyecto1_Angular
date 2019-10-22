import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}} {{last_name}}!</h1>` ,
  styles: [`h1 { font-family: Lato; }`]
})

export class HelloComponent  {
  @Input() name: string;
  @Input() last_name: string;
}
