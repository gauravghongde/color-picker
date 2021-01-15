import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() heading: string;
  @Input() color: string;
  @Output() event: EventEmitter<string> = new EventEmitter<string>();

  public show = false;
  public colorProfileFolderPath = "Color";
  public colorProfileFileConfig = "";
  public BASE_URL = "https://github.com/gauravghongde/social-icons/blob/master/SVG/"+this.colorProfileFolderPath+"/";
  public FILE_CONFIG = this.colorProfileFileConfig +".svg?raw=true";
  public defaultColors: string[] = [
    'Github', 
    // 'GitLab', 
    'Facebook', 
    'Instagram', 
    'Snapchat', 
    'Twitter', 
    'Google', 
    'Gmail', 
    'Medium',
    'Youtube', 
    // 'Blogger', 
    'Twitch', 
    'WhatsApp', 
    'Telegram', 
    'LinkedIN', 
    'Pinterest', 
    'Medium', 
    'Behance',
    'Dribbble', 
    'Quora', 
    'Reddit', 
    'Skype', 
    // 'StackOverflow', 
    'Wordpress', 
    'PayPal', 
    'Folio'
  ];

  constructor() {
  }

  /**
   * Change color from default colors
   * @param {string} color
   */
  public changeColor(color: string): void {
    this.color = color;
    this.event.emit(this.color);
    this.show = false;
  }


  /**
   * Change color from input
   * @param {string} color
   */
  public changeColorManual(color: string): void {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

    if (isValid) {
      this.color = color;
      this.event.emit(this.color);
    }
  }

  /**
   * Change status of visibility to color picker
   */
  public toggleColors(): void {
    this.show = !this.show;
  }

  public bwClicked(): void {
    this.BASE_URL = "https://github.com/gauravghongde/social-icons/blob/master/SVG/Black/";
    this.FILE_CONFIG = "_black.svg?raw=true";
    console.log(this.BASE_URL);
    console.log(this.FILE_CONFIG);
  }

  public colorClicked(): void {
    this.BASE_URL = "https://github.com/gauravghongde/social-icons/blob/master/SVG/Color/";
    this.FILE_CONFIG = ".svg?raw=true";
    console.log(this.BASE_URL);
    console.log(this.FILE_CONFIG);
  }
}
