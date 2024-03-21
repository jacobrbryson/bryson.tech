import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  resume: Resume = {
    id: 1,
    created: "2019-07-19 00:00:00",
    updated: "2023-02-03 00:00:00",
    firstName: "Ross",
    lastName: "Bryson",
    email: environment.email,
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
            years: 17
          },
          {
            name: "MySQL & SQL Server",
            prefix: "fas",
            icon: "database",
            years: 17
          },
          {
            name: "PHP",
            prefix: "fab",
            icon: "php",
            years: 8
          },
          {
            name: "Coldfusion & Lucee",
            prefix: "fas",
            icon: "code",
            years: 4
          },
          {
            name: "C#",
            prefix: "fab",
            icon: "microsoft",
            years: 4
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
            years: 9
          },
          {
            name: "Angular",
            prefix: "fab",
            icon: "angular",
            years: 5
          },
          {
            name: "Node.js",
            prefix: "fab",
            icon: "node-js",
            years: 4
          },
          {
            name: "Wordpress",
            prefix: "fab",
            icon: "wordpress",
            years: 4
          },
          {
            name: "Symfony",
            prefix: "fab",
            icon: "symfony",
            years: 4
          },
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
            years: 17
          },
          {
            name: "Microsoft IIS",
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
            prefix: "fas",
            icon: "images",
            years: 9
          },
          {
            name: "Blender",
            prefix: "fas",
            icon: "cube",
            years: 3
          },
          {
            name: "Unity 3D",
            prefix: "fab",
            icon: "unity",
            years: 4
          }
        ]
      }
    ],
    employments:[
      {
        collapse: false,
        image: "assets/images/kit.jpg",
        logo: "assets/images/kit_logo.png",
        name: "Kincaid IT",
        position: "Director of Development ‐ Sept 2020 - March 2024",
        activities:[
          {
            name: "Admin+",
            link: "https://kincaidit.com/admin-plus/",
            entries: [
              {
                item: "Lead a team of 9 developers that design, deploy, and maintain <a href='https://kincaidit.com/admin-plus/' target='_blank'>Admin+</a>",
                subItems: []
              },
              {
                item: "Admin+ has a growing customer base with the largest organization consisting of 300,000 students",
                subItems: []
              },
              {
                item: "Admin+ has an Angular 15 front-end and is built on top of our 'KIT Central Solution' - which consists of 20 Node.js state-less microservices",
                subItems: []
              },
              {
                item: "Because Kincaid IT is a Google Partner, the application runs 100% in Google Cloud Platform services such as:",
                subItems: [{
                  item: "Source Repositories",
                  subItems: []
                },{
                  item: "Cloud Build",
                  subItems: []
                },
                {
                  item: "Cloud Run",
                  subItems: []
                },{
                  item: "Cloud Schedular",
                  subItems: []
                },
                {
                  item: "SQL",
                  subItems: []
                },
                {
                  item: "Cloud Storage",
                  subItems: []
                },
                {
                  item: "Network Services",
                  subItems: []
                }]
              },
              {
                item: "Admin+ processes hundreds of millions of http requests a day: back-end microservices are configured for automatic instance scaling to process the data as efficiently as possible",
                subItems: []
              },
            ]
          },
          {
            name: "Grow with Google",
            link: "https://grow.google/",
            entries: [
              {
                item: "Designed, Deployed, and continue to manage interfaces between Google, Kincaid IT, GG4L, Coursera, and Hubspot",
                subItems: []
              },
              {
                item: "These integrations are built on NodeJS and integrate with the following APIs:",
                subItems: [
                  {
                    item: "Google Drive",
                    subItems: []
                  },
                  {
                    item: "Hubspot",
                    subItems: []
                  },
                  {
                    item: "Kincaid IT Custom APIs",
                    subItems: []
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        collapse: true,
        image: "assets/images/lssd.jpg",
        logo: "assets/images/lssd_logo.png",
        name: "Lee's Summit School District",
        position: "Web Developer ‐ Nov. 2017 - Sept 2020",
        activities:[
          {
            name: "PaymentCentral",
            link: "https://paymentcentral.lsr7.org/",
            entries: [
              {
                item: "A payment processing application that processes student fees and includes an online store.  The application processes $1.2 million in sales annually.",
                subItems: []
              }
            ]
          },
          {
            name: "eApply",
            link: "https://app.lsr7.org/eApply",
            entries: [
              {
                item: "This piece of software provides a centralized portal for students, employees, and the public to apply for various activities that the district offers.",
                subItems: []
              }
            ]
          },
          {
            name: "EventTracker",
            link: "#",
            entries: [
              {
                item: "This application allows buildings to set up events (for instance: dances or presenations) that staff and students can check into using their Employee/Student ID.  The system offers various levels of security.  It also includes an unattended kiosk mode, as well as an attended mode for looking up attendees.",
                subItems: []
              }
            ]
          },
          {
            name: "eScheduler",
            link: "https://app.lsr7.org/eScheduler",
            entries: [
              {
                item: "A scheduling tool that integrates with the district's current Student Information System that allows for parents to easily schedule parent/teacher conferences.  This tool is also useful for scheduling exam times an other activities.",
                subItems: []
              }
            ]
          },
          {
            name: "Off Campus Attendance Tracking",
            link: "#",
            entries: [
              {
                item: "A light weight application that allows students, using Google oAuth2, to sign in to a portal that captures their attendance.  The application uses the offsite location's IP address to verify the student's attendance. The associated reporting tools cross reference to student's attendance data with their course schedule in the district's Student Information System to show the administrators the attendance data.",
                subItems: []
              }
            ]
          },
          {
            name: "ContactUs",
            link: "https://contact.lsr7.org/?main",
            entries: [
              {
                item: "This utility creates a contact us form based on the department(s) that a member of the Lee's Summit community would like to contact. The data is organized and sent to the respective parties. Parties can be administered from within the application. Depending on the type of contact, the application decides if the communication should be anonymous and handles that information accordingly. ",
                subItems: []
              }
            ]
          },
          {
            name: "MyLSR7/SSO",
            link: "https://app.lsr7.org/mylsr7/",
            entries: [
              {
                item: "Primarily using Google's oAuth2, this application creates a more secure, fluid, and single signon for authentication. The application provides a central user account management area for staff, student, third party, and public accounts. The process integrates with LDAP, Google oAuth2, and the district's other user management services.",
                subItems: []
              }
            ]
          }
        ]
      },
      {
        collapse: true,
        image: "assets/images/heels.jpg",
        logo: "assets/images/heelscom_logo.png",
        name: "Heels.com",
        position: "Web Developer ‐ May 2015 - May 2018",
        activities:[
          {
            name: "API Intragtion Management",
            link: "#",
            entries: [
              {
                item: "Integrate, Update, and Maintain Third Party API Connections:",
                subItems: [
                  {
                    item: "Amazon.com",
                    subItems: []
                  },
                  {
                    item: "Jet.com",
                    subItems: []
                  },
                  {
                    item: "Paypal.com",
                    subItems: []
                  },
                  {
                    item: "Google.com",
                    subItems: []
                  },
                  {
                    item: "Cybersource.com",
                    subItems: []
                  }
                ]
              }
            ]
          },
          {
            name: "Web Developer Duties",
            link: "https://heels.com/",
            entries: [
              {
                item: "Debug and optimize site functionality",
                subItems: []
              },
              {
                item: "Develop automated systems for commerce, reporting, and third party integration",
                subItems: []
              },
              {
                item: "Facilitate social media integration like building out a shoppable instagram feed",
                subItems: []
              },
              {
                item: "Build company transactional emails, monitor click rates, conversions, and contact loss rates",
                subItems: []
              },
              {
                item: "Develop strategies for gaining new leads",
                subItems: []
              },
              {
                item: "Assist marketing team in the development and deployment of new campaigns",
                subItems: []
              },
              {
                item: "Perform many helpdesk duties including but not limited to desktop support and networking",
                subItems: []
              }
            ]
          },
        ]
      },
      {
        collapse: true,
        image: "assets/images/bbb.jpg",
        logo: "assets/images/bbb_logo.png",
        name: "Burkett Burkett & Burkett",
        position: "IT Specialist ‐ Dec. 2012 - Sept. 2014",
        activities:[
          {
            name: "Duties",
            link: "https://burkettcpas.com/",
            entries: [
              {
                item: "Managed the firm’s helpdesk, supporting over 50 end‐user's at two sites",
                subItems: []
              },
              {
                item: "Oversaw the firm’s terminal, gateway, and production servers",
                subItems: []
              },
              {
                item: "Converted over 20 physical servers to virtual machines (Hyper‐V)",
                subItems: []
              },
              {
                item: "Implemented and managed much of the firm’s disaster recovery practices",
                subItems: []
              },
              {
                item: "Managed replication of virtual machines between sites",
                subItems: []
              },
              {
                item: "Supported desktops, Surfaces, iPads, and end‐user’s personal devices as well as back‐of‐the‐house hardware such as routers, switches, servers, and cabling",
                subItems: []
              },
              {
                item: "Scheduled outages for application maintenance, oversaw application upgrades and maintenance",
                subItems: []
              },
              {
                item: "Responsible for the firm’s data backups, both tape and disk",
                subItems: []
              },
              {
                item: "Responsible for troubleshooting applications within the firm to correct and report bugs within applications",
                subItems: []
              }
            ]
          }
        ]
      },
      {
        collapse: true,
        image: "assets/images/bt.jpg",
        logo: "assets/images/bt_logo.png",
        name: "Brysontech LLC",
        position: "Web Developer ‐ Sept. 2011 - Dec. 2012",
        activities:[
          {
            name: "Duties",
            link: "https://www.brysontech.com/",
            entries: [
              {
                item: "Provided custom technology support to various customers including community centers, offices, churches, and individuals",
                subItems: []
              },
              {
                item: "Built physical and digital networks designed to be robust and easy to use for clients",
                subItems: []
              },
              {
                item: "Designed, built, and maintained numerous database driven websites",
                subItems: []
              }
            ]
          }
        ]
      },
      {
        collapse: true,
        image: "assets/images/uscl.jpg",
        logo: "assets/images/uscl_logo.png",
        name: "University of South Carolina",
        position: "IT Coordinator ‐ Mar. 2008 - Sept. 2011",
        activities:[
          {
            name: "Duties",
            link: "https://sc.edu/about/system_and_campuses/lancaster/index.php",
            entries: [
              {
                item: "Provided desktop support for approximately 1800 students and over 100 faculty and staff",
                subItems: []
              },
              {
                item: "Administered campus systems, including email, Active Directory, antivirus, WSUS, third party applications, and software updates",
                subItems: []
              },
              {
                item: "Tested software compatibility for, and directed the campus‐wide migration to Windows 7",
                subItems: []
              },
              {
                item: "Scripted batch files used for remote software deployment within Active Directory Domain",
                subItems: []
              },
              {
                item: "Created technical policies for campus management of images, software organization, and wireless network monitoring",
                subItems: []
              },
              {
                item: "Taught TSTM 342 ‐ Introduction to Desktop Hardware",
                subItems: []
              },
              {
                item: "Managed a staff of two technicians",
                subItems: []
              },
              {
                item: "Tested and ensured new software met campus quality and security standards, including HIPAA and FERPA compliance",
                subItems: []
              },
              {
                item: "Developed numerous tools and applications to support campus activities",
                subItems: []
              }
            ]
          }
        ]
      }
    ],
    personalProjects:[
      {
        url:"https://orcwood.com/",
        name:"Orcwood Gaming",
        description:`A small gaming studio started by my sister and me whose primary focus is games developed in Unity.
        Several friends have joined/contributed over the years and we have a handful of games. 
        I designed, host, and manage the website as well as contributed to all the games listed.`,
        favicon:"https://orcwood.com/assets/logo-og-games.png",
        technologies:[
          {
            name: "Ionic (Angular)",
            prefix: "fab",
            icon: "angular"
          }
        ]
      },
      {
        url:"https://loudounemptybowls.org/",
        name:"Loudoun Empty Bowls",
        description:`A non-profit with a mission to bring together artists and community to help end food insecurity in Loudoun County, Virginia.
        I host and support this Wordpress website. Additionally, I wrote a custom app that integrates with the orders table for the the organizations annual charity event. This app was originally designed to meet the organizations unique needs during covid, however it has become a valuable tool the organization continues to use to support their annual fundraiser.`,
        favicon:"https://www.loudounemptybowls.org/wp-content/uploads/2018/05/cropped-LEB-Basic-Bowl2-1-1-32x32.png",
        technologies:[{
          name: "Wordpress (PHP)",
          prefix: "fab",
          icon: "wordpress",
        },
        {
          name: "MySQL",
          prefix: "fas",
          icon: "database",
        },
        {
          name: "Node.js",
          prefix: "fab",
          icon: "node-js",
        },
      ]
      }
    ],
    education: [
      {
        image: "assets/images/Gamecocks-logo.png",
        name: "University of South Carolina",
        certification: "Information and Technologies Management",
        type: " Bachelor’s of Science",
        location: "Columbia, South Carolina",
        date: "2003 - 2007"
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
  employments: Employment[];
  personalProjects: PersonalProject[];
  education: Education[];
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
  years?: number;
}

export interface Employment{
  image: string;
  logo: string;
  name: string;
  position: string;
  activities: Activity[];
  collapse:boolean;
}

export interface Activity{
  name: string;
  link: string;
  entries: Entry[];
}

export interface Entry{
  item: string;
  subItems: Entry[];
}

export interface Education{
  image: string;
  name: string;
  certification: string;
  type: string;
  location: string;
  date: string;
}

export interface PersonalProject{
  url:string;
  name:string;
  description:string;
  favicon:string;
  technologies:Technology[];
}