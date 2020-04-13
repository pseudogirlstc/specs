import { assertValid } from '@japan-d2/schema'
import { Domain, domain } from '../src/schema'

const uneco: Domain = {
  version: '2020-04-14',
  name: 'u-ne.co',
  owner: {
    email: 'aoki@u-ne.co',
    names: [
      {
        lang: 'en',
        name: 'uneco',
      },
      {
        lang: 'ja',
        name: 'うーねこ',
      },
    ],
  },
  webpages: [
    {
      lang: 'en',
      path: '/',
      title: 'uneco\'s homepage',
    },
    {
      lang: 'ja',
      path: '/',
      title: 'うーねこ 公式サイト',
    },
  ],
  characters: [
    {
      identical: true,
      names: [
        {
          lang: 'en',
          name: 'uneco',
        },
        {
          lang: 'ja',
          name: 'うーねこ',
        },
      ],
      images: {
        portrait: {
          path: '/static/media/uneco_horizontal.ead7ab99.png',
        },
        appearance: {
          path: '/static/media/uneco_stand.947c0fcc.png',
        },
      },
    },
  ],
}

assertValid(uneco, domain)
