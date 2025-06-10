import { Component } from '@angular/core';
import { SidebarComponent } from "../commonComponents/sidebar/sidebar.component";
import { HeaderComponent } from "../commonComponents/header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../commonComponents/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
  imports: [SidebarComponent, HeaderComponent, CommonModule,
    RouterModule, FooterComponent]
})
export class MainLayoutComponent {}

