import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-font-picker',
  templateUrl: './font-picker.component.html',
  styleUrls: ['./font-picker.component.sass'],
})
export class FontPickerComponent implements OnInit {
  fonts: string[] = [];
  activeFont: string = '';

  constructor(private http: HttpClient, private ds: DataService) {}
  ngOnInit(): void {
    this.http.get('./assets/fonts.json').subscribe(
      (fonts) => (this.fonts = fonts as string[]) //.map((f) => ({ name: f })))
    );

    this.ds.fontFamily
      .pipe(first())
      .subscribe((font) => (this.activeFont = font));
  }

  onFontChange(fontFamily: string) {
    this.ds.setFontFamily(fontFamily);
  }
}
