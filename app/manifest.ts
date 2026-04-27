import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lucas Moreno - Portfolio',
    short_name: 'Lucas Moreno',
    description: 'Senior Full Stack Developer especializado em React, Node.js, NestJS e arquitetura de software',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F7F4',
    theme_color: '#6B8E23',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
    ],
  }
}
