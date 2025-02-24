import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Projects {
  title: string;
  company: string;
  technologies: string[];
  description: string;
  imageUrl: string;
  githubLink: string;
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
    {
      title: "License Plate Tolling",
      company: "The Revenue Markets",
      technologies: [".NET", "Angular", "Oracle", "REST APIs", "SOAP APIs", "NodeJS"],
      description: "Developed a modern license plate-based tolling system, integrating UI for image review and billing, and interfacing with NYS DMV services.",
      imageUrl: '',
      githubLink: ''
    },
    {
      title: "Azure DevOps Integration",
      company: "The Revenue Markets",
      technologies: [".NET", "TypeScript", "Azure"],
      description: "Led migration from Team Foundation Server to Azure DevOps, implemented CI/CD pipelines, and improved security with Azure Key Vault.",
      imageUrl: '',
      githubLink: 'asd'
    },
    {
      title: "Paesano's Pizzeria & Restaurant",
      company: "MJPC Solutions",
      technologies: ["Angular"],
      description: "Developed a responsive static website for a local restaurant, focusing on SEO, accessibility, and hosting via Netlify.",
      imageUrl: '',
      githubLink: ''
    },
    {
      title: "Vibration Test Bench",
      company: "Connection Technology Center",
      technologies: ["C#"],
      description: "Designed and implemented a semi-automated vibration test system, including real-time monitoring, database integration, and report generation.",
      imageUrl: '',
      githubLink: ''
    }
  ];
}
