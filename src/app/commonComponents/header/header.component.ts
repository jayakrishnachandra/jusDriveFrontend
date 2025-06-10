

import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoImageComponent } from "../logo-image/logo-image.component";
import { AvatarImageComponent } from "../avatar-image/avatar-image.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LogoImageComponent, AvatarImageComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    // Use a guard in case window isn't defined
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
    }
  }
}



