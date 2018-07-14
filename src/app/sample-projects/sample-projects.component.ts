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
  columnsToDisplay = ['Name', 'Technologies', 'Status', 'URL', 'Source'];
  expandedElement: PeriodicElement;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('folder', sanitizer.bypassSecurityTrustResourceUrl('assets/folder.svg'));
    iconRegistry.addSvgIcon('github', sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg'));
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
    URL: 'www.artropy.net',
    Technologies: `Angular 6, Angular Material, Apollo, CSS Grid, CSS FlexBox, Media Queries, SASS TypeScript, GraphQL`,
    description: `Progressive Web Application, Artist Content Creation Platform aimmed at helping artists profit and spread
    their artwork around the world.`
  }, {
    position: 2,
    Name: 'Gorcery List',
    weight: 4.0026,
    Source: 'Open Source',
    Status: 'Past Project',
    URL: 'https://pdms-grocery-list.azurewebsites.net',
    Technologies: ``,
    description: `Helium is a chemical element with Source He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    Name: 'CSS Grid Example',
    weight: 6.941,
    Source: 'Open Source',
    Status: 'Under Development',
    URL: '',
    Technologies: ``,
    description: `Lithium is a chemical element with Source Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    Name: 'Angular2+ Lazy Loading',
    weight: 9.0122,
    Source: 'Open Source',
    Status: 'Under Development',
    URL: '',
    Technologies: ``,
    description: `Beryllium is a chemical element with Source Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    Name: 'Smart Material, Receiving & Tracking',
    weight: 10.811,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: '',
    Technologies: ``,
    description: `Boron is a chemical element with Source B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    Name: 'A.L.I.S Check List',
    weight: 12.0107,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: '',
    Technologies: ``,
    description: `Carbon is a chemical element with Source C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    Name: 'Whiteboard',
    weight: 14.0067,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: '',
    Technologies: ``,
    description: `Nitrogen is a chemical element with Source N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    Name: 'Operation Excellence Teams',
    weight: 15.9994,
    Source: 'Proprietary',
    Status: 'Past Project',
    URL: '',
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
    URL: '',
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
    URL: '',
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
    URL: '',
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
    URL: '',
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
    URL: '',
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
    URL: '',
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
    URL: '',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 14,
    Name: 'Project Carrot',
    weight: 20.1797,
    Source: 'Private',
    Status: 'System Design Phase',
    URL: '',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 15,
    Name: 'SKAAE',
    weight: 20.1797,
    Source: 'Open Source',
    Status: 'Design Phase',
    URL: '',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
  {
    position: 16,
    Name: 'Portfolio',
    weight: 20.1797,
    Source: 'Open Source',
    Status: 'Past Project',
    URL: 'www.smoreira.org',
    Technologies: ``,
    description: `Neon is a chemical element with Source Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
