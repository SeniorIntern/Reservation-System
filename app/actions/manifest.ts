export default function manifest() {
  return {
    name: 'Reservation System',
    short_name: 'AirBnb',
    theme_color: '#00095b',
    background_color: '#ffffff',
    description:
      'Welcome to the Official Reservation System website. Explore our range of properties and discover the latest offers.',
    screenshots: [
      {
        src: '/pwa-img/screenshots/ford-1280x720.png',
        sizes: '1280x720',
        type: 'image/jpg',
        form_factor: 'wide',
        label: 'Ford Naghi Landing Page'
      },
      {
        src: '/pwa-img/screenshots/landing-1280x720.png',
        sizes: '1280x720',
        type: 'image/jpg',
        form_factor: 'wide',
        label: 'Vehicle Landing Page'
      },
      {
        src: '/pwa-img/screenshots/ford-586x1041.jpg',
        sizes: '586x1041',
        type: 'image/jpg',
        form_factor: 'narrow',
        label: 'Ford Naghi Landing Page'
      },
      {
        src: '/pwa-img/screenshots/landing-586x1041.jpg',
        sizes: '586x1041',
        type: 'image/jpg',
        form_factor: 'narrow',
        label: 'Vehicle Landing Page'
      }
    ],
    icons: [
      {
        src: '/pwa-img/icons/ford-512x512.jpg',
        sizes: '512x512',
        type: 'image/jpg'
      },
      {
        src: '/pwa-img/icons/ford-192x192.jpg',
        sizes: '192x192',
        type: 'image/jpg'
      },
      {
        src: '/pwa-img/icons/ford-180x180.jpg',
        sizes: '180x180',
        type: 'image/jpg'
      },
      {
        src: '/pwa-img/icons/ford-64x64.jpg',
        sizes: '64x64',
        type: 'image/jpg'
      },
      {
        src: '/pwa-img/icons/ford-any-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/pwa-img/icons/ford-512x512.jpg',
        sizes: '512x512',
        type: 'image/jpg',
        purpose: 'maskable'
      }
    ],
    start_url: '/',
    display: 'standalone',
    related_applications: [
      {
        platform: 'webapp',
        url: 'https://reservation-system-seven.vercel.app/manifest.webmanifest'
      }
    ]
  };
}
