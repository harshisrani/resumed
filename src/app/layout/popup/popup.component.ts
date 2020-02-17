import { Component, ElementRef, Input, OnInit, OnDestroy } from "@angular/core";
import { PopupService } from "../../service/popup-service/popup.service";

@Component({
  selector: "cv-popup",
  template:  `<ng-content></ng-content>`
})
export class PopupComponent implements OnInit, OnDestroy {
  @Input() id: string;
  private element: any;
  constructor(private popupService: PopupService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let popup = this;

    // ensure id attribute exists
    if (!this.id) {
      console.error("popup must have an id");
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // close popup on background click
    this.element.addEventListener("click", function(e: any) {
      if (e.target.className === 'cv-popup') {
        popup.close();
      }
    });

    // add self (this popup instance) to the popup service so it's accessible from controllers
    this.popupService.add(this);
  }

  // remove self from popup service when directive is destroyed
  ngOnDestroy(): void {
    this.popupService.remove(this.id);
    this.element.remove();
  }

  // open popup
  open(): void {
    this.element.style.display = "block";
    document.body.classList.add("cv-popup-open");
  }

  // close popup
  close(): void {
    this.element.style.display = "none";
    document.body.classList.remove("cv-popup-open");
  }
}
