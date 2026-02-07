import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { vulnerability } from '../../models/vulnerabilities';

@Component({
  selector: 'app-playground',
  imports: [CommonModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.css',
})
export class PlaygroundComponent {
  @Input() vulnerability?: vulnerability;
}
