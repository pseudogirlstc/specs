import { defineSchema, Pure } from '@japan-d2/schema'
import { hasLang } from './has-lang'
import { image } from './image'
import { page } from './page'

export const character = defineSchema()
  .array('names', 'object', hasLang.string('name', {
    description: 'Internationalized character name',
    examples: [
      'uneco',
      'うーねこ',
    ],
    minLength: 1,
    maxLength: 32,
  }), {
    description: 'Internationalized character names',
    minItems: 1,
  })
  .object('images', (
    defineSchema()
      .object('portrait', image, {
        description: 'A character image with the frame above the chest.',
      })
      .object('appearance', image, {
        description: 'A character image that can look the whole body.',
        optional: true,
      })
  ))
  .array('webpages', 'object', page, {
    description: 'webpage hosted on https under the domain',
    minItems: 1,
    optional: true,
  })
  .boolean('identical', {
    description: 'Whether the owner and character share an identity',
  })

export type Character = Pure<typeof character>
