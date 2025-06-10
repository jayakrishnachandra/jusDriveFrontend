import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./commonComponents/sidebar/sidebar.component";
import { FooterComponent } from "./commonComponents/footer/footer.component";
import { HeaderComponent } from "./commonComponents/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jusDrive';
}
