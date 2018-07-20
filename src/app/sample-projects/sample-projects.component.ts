import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-sample-projects',
  templateUrl: './sample-projects.component.html',
  styleUrls: ['./sample-projects.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SampleProjectsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Name', 'Status', 'URL', 'Source'];
  expandedElement: PeriodicElement;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('folder', sanitizer.bypassSecurityTrustResourceUrl('assets/folder.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
    iconRegistry.addSvgIcon('warning', sanitizer.bypassSecurityTrustResourceUrl('assets/warning.svg'));
  }

  ngOnInit() {
  }

}
export interface PeriodicElement {
  Name: string;
  position: number;
  weight: number;
  Source: string;
  Status: string;
  URL: string;
  description: string;
  Technologies: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    Name: 'Artropy',
    weight: 1.0079,
    Source: 'Private',
    Status: 'Under Development',
    URL: 'https://artropy-dev-1.azurewebsites.net/',
    Technologies: `Angular 6, Angular Material, Apollo, CSS Grid, CSS FlexBox, Media Queries, SASS TypeScript, GraphQL`,
    description: `Progressive Web Application, Artist Content Creation Platform aimmed at helping artists profit and spread
    their artwork around the world. Intently following the progressive web application principles`
  }, {
    position: 2,
    Name: 'Gorcery List',
    weight: 4.0026,
    Source: 'Open Source',
    Status: 'Past Project',
    URL: 'https://pdms-grocery-list.azurewebsites.net',
    Technologies: ``,
    description: `Assetment Application using technologies: AngularJS 1.5, TypeScript, Bootstrap, Less.`
  }, {
    position: 5,
    Name: 'Smart Material, Receiving & Tracking',
    weight: 10.811,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Application created for the receiving department. Using technologies like Angular 1.4.5, PHP, JQUERY, Bootstrap3, PL/SQL`
  }, {
    position: 6,
    Name: 'A.L.I.S Check List',
    weight: 12.0107,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Application created for the receiving department. Using technologies like Angular 1.4.5, PHP, JQUERY, JQUERY Datatables,
     Bootstrap3, PL/SQL`
  }, {
    position: 7,
    Name: 'Whiteboard',
    weight: 14.0067,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Nitrogen is a chemical element with Source N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    Name: 'Operation Excellence Teams',
    weight: 15.9994,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Oxygen is a chemical element with Source O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    Name: 'Monthly Operations Review',
    weight: 18.9984,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Fluorine is a chemical element with Source F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    Name: 'TMIS',
    weight: 20.1797,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 11,
    Name: 'Humidity Dashboard',
    weight: 20.1797,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 12,
    Name: 'ShareSpace Landing Page',
    weight: 20.1797,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 13,
    Name: 'Part Install Tool',
    weight: 20.1797,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 14,
    Name: 'ADIS',
    weight: 20.1797,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: 'n/a',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 14,
    Name: 'JavaScript 30',
    weight: 20.1797,
    Source: 'Open Source',
    Status: 'Under Development',
    URL: 'n/a',
    Technologies: ``,
    description: `Educational Project exploring and reinforcing Vanilla JavaScript ES5/ES6 skills`
  },
  {
    position: 14,
    Name: 'Project Carrot',
    weight: 20.1797,
    Source: 'Private',
    Status: 'System Design Phase',
    URL: 'n/a',
    Technologies: ``,
    description: `Streaming project following progressive web application principles. Using technologies such as Angular, Angular Material
    CSS3 Grid, TypeScript, VSTS etc. This project has a heavy reliance on Azure Media platform for streaming.`
  },
  {
    position: 15,
    Name: 'SKAAE',
    weight: 20.1797,
    Source: 'Open Source',
    Status: 'Design Phase',
    URL: 'n/a',
    Technologies: ``,
    description: `Angular Elements Library. Currenlty under research and development, intended to be open source.`
  },
  {
    position: 16,
    Name: 'Portfolio',
    weight: 20.1797,
    Source: 'Open Source',
    Status: 'Past Project',
    URL: 'https://smoreira1.github.io',
    Technologies: ``,
    description: `Created in Angular 6, Angular Material, purpose to have a friendly way to show professional information of 
    Stephen Moreira`
  },
];
