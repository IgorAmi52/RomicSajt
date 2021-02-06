import {
  trigger,
  query,
  style,
  state,
  transition,
  group,
  animate,
  animateChild,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition(
    'HomePage => AboutPage, SongListPage => HomePage, SongListPage => AboutPage',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '-100%' }))]),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
  transition(
    'HomePage => SongListPage, AboutPage => HomePage, AboutPage => SongListPage',
    [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ]),
      query(':enter', [style({ left: '-100%' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
        query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
      ]),
      query(':enter', animateChild()),
    ]
  ),
]);
