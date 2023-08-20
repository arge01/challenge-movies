import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Dashboard',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/movies.svg',
          label: 'Movies ',
          route: '/movies',
          children: [
            {
              label: 'New',
              route: '/dashboard/movies/new',
            },
            {
              label: 'List',
              route: '/dashboard/movies/list',
            },
          ],
        },
        {
          icon: 'assets/icons/outline/directors.svg',
          label: 'Directors ',
          route: '/directors',
          children: [
            {
              label: 'New',
              route: '/dashboard/directors/new',
            },
            {
              label: 'List',
              route: '/dashboard/directors/list',
            },
          ],
        },
      ],
    },
  ];
}
