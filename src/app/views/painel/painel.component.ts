import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-painel',
  standalone: true,
  imports: [MatButtonModule, MatTabsModule, MatToolbarModule, RouterModule, RouterOutlet, MatCommonModule, MatMenuModule],
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})


export class PainelComponent {

}

