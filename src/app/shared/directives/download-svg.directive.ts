import { Directive, ElementRef, HostListener } from '@angular/core';
import { BadgeComponent } from '../components/badge/badge.component';

@Directive({
  selector: 'svg[downloadSvg],app-badge[downloadSvg]',
  host: {
    class: 'hoverDownload',
  },
})
export class DownloadSvgDirective {
  constructor(private element: ElementRef<SVGElement | BadgeComponent>) {}
  
  @HostListener('click', ['$event'])
  onClick() {
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    let elem = this.element.nativeElement;
    if ((elem as any).tagName !== 'SVG') {
      elem = (elem as any).childNodes[0] || elem;
    }
    const name = (elem as SVGElement).textContent
      ?.replace(/[ ]+/g, '')
      .substring(0, 30);
    a.href = `data:image/svg+xml;charset=utf-8,${
      (elem as SVGElement).outerHTML
    }`;
    a.download = `${name || 'download'}.svg`;
    a.dispatchEvent(e);
  }
}
