import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  resume: Resume = {
    id: 1,
    created: "2019-07-19 00:00:00",
    updated: "2021-09-29 00:00:00",
    firstName: "Ross",
    lastName: "Bryson",
    email: "ross@brysontech.com",
    headerImage: "",
    profileImage: "assets/images/profile-2020.jpg",
    techStack:[
      {
        name: "Programming Languages",
        image: "assets/images/card-code.jpg",
        technologies: [
          {
            name: "HTML, CSS, & JavaScript",
            prefix: "fab",
            icon: "html5",
            years: 15
          },
          {
            name: "MySQL & SQL Server",
            prefix: "fas",
            icon: "database",
            years: 15
          },
          {
            name: "PHP",
            prefix: "fab",
            icon: "php",
            years: 8
          },
          {
            name: "Coldfusion & Lucee",
            prefix: "fab",
            icon: "adobe",
            years: 4
          },
          {
            name: "C#",
            prefix: "fab",
            icon: "microsoft",
            years: 3
          },
          {
            name: "MongoDB",
            prefix: "fas",
            icon: "database",
            years: 1
          }
        ]
      },
      {
        name: "Frameworks",
        image: "assets/images/card-software.jpg",
        technologies: [
          {
            name: "jQuery",
            prefix: "fab",
            icon: "js",
            years: 14
          },
          {
            name: "Bootstrap",
            prefix: "fab",
            icon: "bootstrap",
            years: 8
          },
          {
            name: "Angular",
            prefix: "fab",
            icon: "angular",
            years: 4
          },
          {
            name: "Symfony",
            prefix: "fab",
            icon: "symfony",
            years: 4
          },
          {
            name: "NodeJS",
            prefix: "fab",
            icon: "node-js",
            years: 2
          }
        ]
      },
      {
        name: "Software",
        image: "assets/images/card-framework.jpg",
        technologies: [
          {
            name: "Apache HTTP",
            prefix: "fas",
            icon: "server",
            years: 15
          },
          {
            name: "Micorsoft IIS",
            prefix: "fab",
            icon: "microsoft",
            years: 14
          },
          {
            name: "NGINX",
            prefix: "fas",
            icon: "server",
            years: 9
          },
          {
            name: "Photoshop & GIMP",
            prefix: "fab",
            icon: "adobe",
            years: 9
          },
          {
            name: "Blender",
            prefix: "fas",
            icon: "cube",
            years: 2
          },
          {
            name: "Unity 3D",
            prefix: "fab",
            icon: "unity",
            years: 2
          }
        ]
      }
    ]
  }
  constructor() { }
}

export interface Resume{
  id: number;
  created:  string;
  updated: string;
  firstName: string;
  lastName: string;
  email: string;
  headerImage: string;
  profileImage: string;
  techStack: Category[];
}

export interface Category{
  name: string;
  image: string;
  technologies: Technology[];
}

export interface Technology{
  name: string;
  prefix: string;
  icon: string;
  years: number;
}