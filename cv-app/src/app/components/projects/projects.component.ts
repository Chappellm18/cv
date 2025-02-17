import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projects {
  name: string;
  imageUrl: string;
  description: string;
  githubLink: string;
  lastUpdated: Date; // Find a github API and link the repo and the data

}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Projects[] = [
    {name: 'Test', imageUrl: '', description: 'Testing', githubLink: '', lastUpdated: new Date()}
  ]
}
