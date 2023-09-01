export const mock = [
  {
    slug: 'how-to-solve-permission-to-x-denied-to-github-actions-bot',
    tags: [
      {
        _id: 'cd641633-63e0-4f7d-9fb2-07a1249edf83',
        name: 'Github Actions',
        slug: 'github-actions',
      },
      {
        _id: '59d9aa4e-5bf5-4ff5-9ee7-f1adace54f29',
        name: 'CI/CD',
        slug: 'ci-cd',
      },
    ],
    _id: 'a9962fa4-e40d-4c6d-817e-42e23b2640bd',
    publishedAt: '2023-08-14',
    title: 'How to solve "Permission to x denied to github-actions[bot]"',
    language: 'en',
    content: [
      {
        _key: 'f863da5e2bb9',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'When setting up automation via Github Actions, try to use ',
            _key: '698e9776bcc00',
          },
          {
            text: 'secrets.GITHUB_TOKEN',
            _key: 'ebfeb418d065',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            text: ' might end up throwing the following error message:',
            _key: '3c39248e2e5e',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '4e6a52e290bf',
        code: 'Permission to "x" denied to github-actions[bot].',
        showLineNumbers: false,
        _type: 'code',
        markDefs: null,
        language: 'plaintext',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '93a5eef9fdef',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'We must enable an option in the project settings to make this work.',
            _key: '77ed5247bf27',
          },
        ],
      },
      {
        style: 'normal',
        _key: 'aaced4b1f1aa',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Go to your project ',
            _key: '6215a0bfb9a9',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Settings',
            _key: '8b347fb739ff',
          },
          {
            _type: 'span',
            marks: [],
            text: ', under the ',
            _key: '7e81a4f9e39f',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Actions',
            _key: '0c58565bf1ee',
          },
          {
            _type: 'span',
            marks: [],
            text: ' collapsible, click on ',
            _key: '27a92eab0d33',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'General',
            _key: '10227aa8d548',
          },
          { _type: 'span', marks: [], text: '.', _key: '7b6385fe71bf' },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Then, scroll down until you find ',
            _key: 'b16d0c16fb29',
          },
          {
            _key: 'af5245a97098',
            _type: 'span',
            marks: ['highlight'],
            text: 'Workflow permissions',
          },
          {
            _type: 'span',
            marks: [],
            text: ' and mark the option ',
            _key: 'c23dc4d04f68',
          },
          {
            text: 'Read and write permissions',
            _key: '3276396213bb',
            _type: 'span',
            marks: ['highlight'],
          },
          { marks: [], text: '.', _key: '9a11d5bf8cd6', _type: 'span' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '53d3eb2938af',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Hit the ',
            _key: 'b42c26f99cda',
          },
          {
            _key: '84988dd65c98',
            _type: 'span',
            marks: ['strong'],
            text: 'save',
          },
          {
            text: ' button and rerun your pipeline.',
            _key: '9213b72b503b',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '7f677e38a756',
      },
      {
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-8b5476684f1dfe262c1d8c0abe8b9fca7124311a-1220x1381-png',
            _type: 'reference',
          },
        },
        _type: 'detailedImage',
        alt: 'fix GitHub bot permission',
        caption: 'fix GitHub bot permission',
        _key: '7ebc29efa639',
        markDefs: null,
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In case your action needs to create a pull request, you also will need to enable the option ',
            _key: '16654ff14fa3',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Allow GitHub Actions to create and approve pull requests',
            _key: 'c36228e5c160',
          },
          {
            _type: 'span',
            marks: [],
            text: ". Otherwise, you'll face the following error:",
            _key: '1bebacbffaf5',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b6c056974ba9',
        markDefs: [],
      },
      {
        showLineNumbers: false,
        _type: 'code',
        markDefs: null,
        language: 'plaintext',
        _key: '4efed0adc355',
        code: 'Error: HttpError: GitHub Actions is not permitted to create or approve pull requests.\nError: GitHub Actions is not permitted to create or approve pull requests.',
      },
      { _type: 'divider', hr: true, _key: '2830aff0a074', markDefs: null },
      {
        children: [
          {
            text: 'Resources',
            _key: 'f8327beb7793',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: 'fdf4476f2c46',
        markDefs: [],
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _key: '9462ea88c97f',
            blank: true,
            _type: 'link',
            href: 'https://www.youtube.com/watch?v=0pRSFaQYr50\u0026ab_channel=SaadAbdurRazzaq',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['9462ea88c97f'],
            text: 'https://www.youtube.com/watch?v=0pRSFaQYr50\u0026ab_channel=SaadAbdurRazzaq',
            _key: '0fdfd1bde2050',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'bb6f56ea4c91',
      },
    ],
  },
  {
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'd52f2b4dffff',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Date manipulation is quite tricky in JavaScript.',
            _key: 'cfc7d68734dc',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Every time I need to do that, I use a library called DayJS to ease those operations.',
            _key: '529ea6727de7',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f85388bc2104',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "It's tiny, flexible, and has many nice plugins, localization, duration, and more.",
            _key: '1868505e245e',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'baf92f6ec07e',
      },
      {
        style: 'normal',
        _key: '40d35f2afed8',
        markDefs: [],
        children: [
          {
            text: 'Today I had to solve the following problem:',
            _key: '67d18fc81ec7',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
      },
      {
        _key: '64b4a22218e4',
        markDefs: [],
        children: [
          {
            text: '"given the \'2023-07-10\' date, how do I get the next following Friday?"',
            _key: 'ca849b59b574',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'blockquote',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It seems easy, but it has some complexity on that.',
            _key: '32fccd95ab48',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0b3538554e08',
        markDefs: [],
      },
      {
        _key: '9bd89966c55f',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "I found there's a plugin in DayJS called Weekday.",
            _key: '83c690762a5b',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        content: [
          {
            style: 'normal',
            _key: 'a868ddf30228',
            markDefs: [],
            children: [
              {
                _type: 'span',
                marks: [],
                text: 'Gets or sets the day of the week according to the locale.',
                _key: 'a1a33f6533f1',
              },
            ],
            _type: 'block',
          },
          {
            _key: '0201a0ed934f',
            markDefs: [],
            children: [
              {
                _type: 'span',
                marks: [],
                text: 'If the locale assigns Sunday as the first day of the week, ',
                _key: 'f5c07ed2c5cc',
              },
              {
                _type: 'span',
                marks: ['highlight'],
                text: 'dayjs().weekday(0)',
                _key: '7cb063dfc46e',
              },
              {
                _type: 'span',
                marks: [],
                text: ' will be Sunday. If Monday is the first day of the week, ',
                _key: '59f817db48d7',
              },
              {
                marks: ['highlight'],
                text: 'dayjs().weekday(0)',
                _key: '248d5279803d',
                _type: 'span',
              },
              {
                text: ' will be Monday.',
                _key: 'f3574e9ff56b',
                _type: 'span',
                marks: [],
              },
            ],
            _type: 'block',
            style: 'normal',
          },
        ],
        markDefs: null,
        _type: 'callout',
        _key: '896170a40bba',
        type: 'info',
      },
      {
        _key: '0f2710679625',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'So, all I needed to do was add this plugin to my ',
            _key: '49aea16f7d55',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'dayjs',
            _key: '1cce4b92ab00',
          },
          {
            _type: 'span',
            marks: [],
            text: ' function and, from that date specifically, get the "Friday weekday" and then format it:',
            _key: '4ba747c64dd6',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        showLineNumbers: true,
        _type: 'code',
        language: 'ts',
        _key: 'd6b5f3770e5a',
        highlightedLines: '2,4,9',
        code: 'import dayjs from "dayjs";\nimport weekOfYearPlugin from "dayjs/plugin/weekOfYear";\n\ndayjs.extend(weekOfYearPlugin);\n\nconst date = dayjs("2023-07-10");\nconsole.log(date.format("LLLL")); // Monday, July 10, 2023 12:00 AM\n\nconst nextFriday = date.weekday(5);\nconsole.log(nextFriday.format("LLLL")); // Friday, July 14, 2023 12:00 AM\n',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '6aadc2b1dff3',
        markDefs: [],
        children: [
          {
            text: 'The only thing we must be aware of is the first day of the week.',
            _key: '8c943e3b9e18',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            text: 'If the first day and our date is ',
            _key: 'f4b68387ebde',
            _type: 'span',
            marks: [],
          },
          {
            text: 'Sunday',
            _key: 'bdd85cfdfb35',
            _type: 'span',
            marks: ['em'],
          },
          { text: ', ', _key: '860379ed55ba', _type: 'span', marks: [] },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'weekday(5)',
            _key: '245f30860413',
          },
          {
            marks: [],
            text: ' will be the next Friday.',
            _key: '01192d8aca9c',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '01f43f97d7e7',
      },
      {
        style: 'normal',
        _key: '77fed20b470b',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'If the first day is Monday and our date is ',
            _key: '61906a713209',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['em'],
            text: 'Sunday',
            _key: '45bc381a827c',
          },
          { text: ', ', _key: '051db47ab408', _type: 'span', marks: [] },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'weekday(5)',
            _key: '104cf90ca3ab',
          },
          {
            _key: '05eb1a5b905e',
            _type: 'span',
            marks: [],
            text: ' will be the past Friday.',
          },
        ],
        _type: 'block',
      },
      { _type: 'divider', hr: true, _key: 'd8d90330ea7c', markDefs: null },
      {
        _type: 'block',
        style: 'h2',
        _key: 'ada5de29bb78',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'References',
            _key: 'aa4a65fde9f7',
          },
        ],
      },
      {
        style: 'normal',
        _key: 'e8adc5abd8f1',
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://day.js.org',
            _key: 'abebf320f349',
            blank: true,
          },
        ],
        children: [
          {
            marks: ['abebf320f349'],
            text: 'https://day.js.org',
            _key: 'da046352f6cf',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'a7ef65cc7bd4',
        listItem: 'bullet',
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://day.js.org/docs/en/plugin/weekday',
            _key: '792fc0e82d17',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['792fc0e82d17'],
            text: 'https://day.js.org/docs/en/plugin/weekday',
            _key: '4db269cf50a5',
          },
        ],
      },
    ],
    slug: 'how-to-get-the-next-x-day-using-dayjs',
    tags: [
      {
        _id: '36480ba3-a637-4196-96c5-bd382be0d64c',
        name: 'Date',
        slug: 'date',
      },
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        _id: '69510833-44bb-4991-9c07-3c87b03091c4',
        name: 'DayJS',
        slug: 'dayjs',
      },
    ],
    _id: '22a228bb-5654-4e4e-82d3-4640b22d14c0',
    publishedAt: '2023-07-13',
    title: 'How to get the next X day using DayJS',
  },
  {
    language: 'en',
    content: [
      {
        _key: 'e11e238d93da',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Today I learned how to add types for ',
            _key: '7b980ece5ccb',
            _type: 'span',
          },
          {
            text: 'Astro.locals',
            _key: '27e7a1ee44ee',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' global variable.',
            _key: '313f35753a4a',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'a62cc8f42b74',
        markDefs: [
          {
            _key: '88780be96520',
            blank: true,
            _type: 'link',
            href: 'https://docs.astro.build/en/guides/middleware/',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "If you're using ",
            _key: '005c79f5f303',
          },
          {
            _type: 'span',
            marks: ['88780be96520'],
            text: "Astro's middleware",
            _key: '4100bfba6c0f',
          },
          {
            _type: 'span',
            marks: [],
            text: ' with TypeScript and mutating this object, you might end up having TS issues like:',
            _key: 'f8beb9ef3ab1',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: null,
        language: 'plaintext',
        _key: 'dd03a0e3178b',
        code: "Property 'X' does not exist on type 'Locals'.",
        showLineNumbers: false,
        _type: 'code',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '4458eaac17e7',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "So here's what you should do in this case.",
            _key: 'fbb81aa07b7e',
          },
        ],
      },
      {
        _key: '9fb42617cdfa',
        markDefs: [],
        children: [
          {
            text: 'Inside the src folder, add a ',
            _key: 'ab3a044ca9d6',
            _type: 'span',
            marks: [],
          },
          {
            text: '.env.d.ts',
            _key: '2a085c9c6447',
            _type: 'span',
            marks: ['highlight'],
          },
          { _type: 'span', marks: [], text: ' file.', _key: 'af8a86099796' },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '68871707b423',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "Then, you'll add the following code:",
            _key: '133a12fe6ca5',
            _type: 'span',
          },
        ],
      },
      {
        _type: 'code',
        language: 'ts',
        _key: '2a25029aeb24',
        code: 'declare namespace App {\n  interface Locals {\n   // add props here\n  }\n}\n',
        filename: 'src/env.d.ts',
        showLineNumbers: true,
        markDefs: null,
      },
      {
        style: 'normal',
        _key: 'e5b6cdb7bd06',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'To have a consistent type inference and run time, ensure that your middleware matches exactly the type you expect.',
            _key: '00d2dfcce105',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: '86294c8a1afe',
        markDefs: [
          {
            href: 'https://stackblitz.com/edit/withastro-astro-tvzw7p?file=src%2Fenv.d.ts',
            _key: 'a6bed5f146d6',
            blank: true,
            _type: 'link',
          },
        ],
        children: [
          {
            marks: ['a6bed5f146d6'],
            text: 'Check out the sandbox with a demo.',
            _key: 'fb32a81e90e6',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
    ],
    slug: 'how-to-type-astro-middleware-locals',
    tags: [
      {
        _id: '7ebd6632-8489-487e-91e7-9f5e6098fa08',
        name: 'AstroJS',
        slug: 'astro-js',
      },
      {
        _id: '8e9ad038-1c40-48d7-8d1e-ec03bbc0a9a4',
        name: 'Web',
        slug: 'web',
      },
      {
        _id: '80894f20-0222-4e49-ade0-69cb07b19a20',
        name: 'Development',
        slug: 'development',
      },
    ],
    _id: 'ed70202e-5afc-4051-803a-f27f8a1814be',
    publishedAt: '2023-07-07',
    title: 'How to type Astro middleware locals',
  },
  {
    tags: [
      {
        _id: '49a5351f-f64c-4cf6-a9cd-17730ebe922a',
        name: 'Svelte',
        slug: 'svelte',
      },
      {
        _id: 'e8abb091-fb72-4a01-805c-de3e4dc21a6a',
        name: 'PostCSS',
        slug: 'postcss',
      },
      {
        _id: '4ef892b8-ce72-4d22-99a1-ed3b88ea886e',
        name: 'TailwindCSS',
        slug: 'tailwind-css',
      },
    ],
    _id: '2a071250-012e-4297-974d-b248d3f69b3b',
    publishedAt: '2023-05-07',
    title:
      'How to fix "Semicolon or block is expected" using Tailwind with Svelte',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: '9140316b7bf6',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Tailwind and Svelte work pretty well together.',
            _key: '0aea679fda0c',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'We can either define the classes as ',
            _key: 'b6ebf6f3dcba',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'class',
            _key: 'b940312a2731',
          },
          {
            _key: '7a2607dab1f0',
            _type: 'span',
            marks: [],
            text: ' or use the PostCSS directive ',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '@apply',
            _key: 'e9ac7ea575a2',
          },
          {
            marks: [],
            text: ' to add styles:',
            _key: 'bba1f053ee24',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '85de29f16786',
      },
      {
        markDefs: null,
        code: '\u003cbutton class="bg-gray-800"\u003eClick here\u003c/button\u003e\n\n\u003cstyle lang="postcss"\u003e\n  button {\n    @apply text-sm;\n  }\n\u003c/style\u003e',
        showLineNumbers: true,
        _type: 'code',
        language: 'svelte',
        _key: '1c598540df38',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The problem is that even marking the style tag language to postcss (so we can have better syntax highlighting, when we use Tailwind modifiers, such as ',
            _key: '64e548af468a',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'dark',
            _key: '8fae03e27f49',
          },
          { _type: 'span', marks: [], text: ', ', _key: '69dd9e8ce4d1' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'hover',
            _key: '62e5f5058e93',
          },
          { marks: [], text: ', ', _key: '13ffa5458190', _type: 'span' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'focus',
            _key: '7888aa628652',
          },
          {
            _type: 'span',
            marks: [],
            text: ", etc., we'll get an error:",
            _key: '62135725f045',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'df24563d9a44',
      },
      {
        showLineNumbers: false,
        _type: 'code',
        language: 'plaintext',
        _key: 'af1ae0024c10',
        code: 'Semicolon or block is expected\n\nIf you expect this syntax to work, here are some suggestions: \nIf you use less/SCSS with `svelte-preprocess`, did you add `lang="scss"`/`lang="less"` to your `style` tag? If you use SCSS, it may be necessary to add the path to your NODE runtime to the setting `svelte.language-server.runtime`, or use `sass` instead of `node-sass`. \nDid you setup a `svelte.config.js`? \nSee https://github.com/sveltejs/language-tools/tree/master/docs#using-with-preprocessors for more info.svelte(css-syntax-error)',
        markDefs: null,
      },
      {
        _key: '33ff50f414f8',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'To fix this problem, we have to do two things:',
            _key: 'e3c85f51f5cc',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f740bba73a33',
        markDefs: [],
        children: [
          {
            marks: [],
            text: '1. Install ',
            _key: '10fa71972a66',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'postcss-load-config',
            _key: '4f3b27429581',
          },
          { _type: 'span', marks: [], text: ':', _key: '6c5d08d7cbff' },
        ],
      },
      {
        _type: 'code',
        markDefs: null,
        language: 'bash',
        _key: '27a1a830d508',
        code: 'npm install -D postcss-load-config',
        showLineNumbers: true,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This will ensure that our ',
            _key: '7d8886c5afb0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'postcss.config.cjs',
            _key: '7bd589052085',
          },
          {
            text: ' will be properly loaded.',
            _key: '0520a9749054',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '05a52f09f303',
      },
      {
        _key: '5f49f73a9eef',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: '2. Mark postcss to "true" on svelte config:',
            _key: 'c19e17125ecf',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'code',
        language: 'js',
        markDefs: null,
        _key: '091a2394b9d9',
        highlightedLines: '7',
        code: 'import preprocess from "svelte-preprocess";\n\n/** @type {import(\'@sveltejs/kit\').Config} */\nconst config = {\n  preprocess: [\n    preprocess({\n      postcss: true,\n    }),\n  ],\n  // ...rest of the config\n};\n\nexport default config;\n',
        filename: 'svelte.config.js',
        showLineNumbers: true,
      },
      {
        _key: 'd18b897b8877',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'After doing that, the errors should be gone.',
            _key: '0d9b39623a97',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      { _type: 'divider', hr: true, _key: '7b616b65bdd8', markDefs: null },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'References',
            _key: '532e81c39af3',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: '3a877d736ec5',
        markDefs: [],
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'bb5965f5c497',
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'd277e0fc4cc3',
            blank: true,
            _type: 'link',
            href: 'https://stackoverflow.com/a/67766798/4781051',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['d277e0fc4cc3'],
            text: 'https://stackoverflow.com/a/67766798/4781051',
            _key: '5774b1ea593a0',
          },
        ],
      },
    ],
    slug: 'fix-semicolon-or-block-is-expected-using-tailwind-with-svelte',
  },
  {
    publishedAt: '2023-04-24',
    title: 'How to fix "digital envelope routines::unsupported" error in Node',
    language: 'en',
    content: [
      {
        _key: '2ca04497f1ec',
        markDefs: [],
        children: [
          {
            _key: 'f1a60a103492',
            _type: 'span',
            marks: [],
            text: "Node 16 support will end on 11-Set-2023, but we all know how hard it's to have a large community and legacy projects up-to-date, so it's normal to have some compatibility issues.",
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'After trying to run an old Vuepress (v1.9.9) site on Node 18, I got the following error:',
            _key: 'bd42520d33ea',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'ceadab957816',
        markDefs: [],
      },
      {
        code: "node:internal/crypto/hash:71\n  this[kHandle] = new _Hash(algorithm, xofLen);\n                  ^\n\nError: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:71:19)\n    at Object.createHash (node:crypto:133:10)\n    at module.exports (/Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/util/createHash.js:135:53)\n    at NormalModule._initBuildHash (/Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:417:16)\n    at handleParseError (/Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:471:10)\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:503:5\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/webpack@4.46.0/node_modules/webpack/lib/NormalModule.js:358:12\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/Users/raulmelo/development/taco-api/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at Array.\u003canonymous\u003e (/Users/raulmelo/development/taco-api/node_modules/.pnpm/loader-runner@2.4.0/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/Users/raulmelo/development/taco-api/node_modules/.pnpm/enhanced-resolve@4.5.0/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/enhanced-resolve@4.5.0/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\n    at /Users/raulmelo/development/taco-api/node_modules/.pnpm/graceful-fs@4.2.11/node_modules/graceful-fs/graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3) {\n  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],\n  library: 'digital envelope routines',\n  reason: 'unsupported',\n  code: 'ERR_OSSL_EVP_UNSUPPORTED'\n}\n\nNode.js v18.15.0",
        showLineNumbers: false,
        markDefs: null,
        _type: 'code',
        language: 'plaintext',
        _key: 'd8ce3bc7ac9e',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'ccd1f3ce1ee2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Vuepress in that version still uses Webpack, which has this compatibility problem.',
            _key: '71d4cdf060f1',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'So, as a workaround, instead of running:',
            _key: '6c2e6727a2c1',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9082bdff392e',
      },
      {
        _type: 'code',
        markDefs: null,
        language: 'bash',
        _key: 'a20a51aa3c01',
        code: 'vuepress dev documentation',
        showLineNumbers: false,
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: '... I have to run:',
            _key: '232b709d6009',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a2665df0d614',
        markDefs: [],
      },
      {
        showLineNumbers: false,
        _type: 'code',
        language: 'bash',
        _key: 'a47ea558977b',
        code: 'NODE_OPTIONS=--openssl-legacy-provider vuepress dev documentation',
        markDefs: null,
      },
      { _type: 'divider', hr: true, _key: 'ff10d0b1e22f', markDefs: null },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'References',
            _key: '15a8969fb0ea',
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: '71c1e8a91a42',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '4e6050624ff6',
        listItem: 'bullet',
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://stackoverflow.com/a/69699772/4781051',
            _key: '17fe628f2ff3',
          },
        ],
        children: [
          {
            text: 'https://stackoverflow.com/a/69699772/4781051',
            _key: '97beea2454040',
            _type: 'span',
            marks: ['17fe628f2ff3'],
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '481fddaa1e3d',
        listItem: 'bullet',
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://github.com/webpack/webpack/issues/14532#issuecomment-947012063',
            _key: '8a5fc34fdb4e',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['8a5fc34fdb4e'],
            text: 'https://github.com/webpack/webpack/issues/14532#issuecomment-947012063',
            _key: 'ca9713f1e0d30',
          },
        ],
      },
    ],
    slug: 'how-to-fix-digital-envelope-routines-unsupported-error-in-node',
    tags: [
      {
        _id: 'f2195d82-a1bd-456e-b572-770e49fde62d',
        name: 'Webpack',
        slug: 'webpack',
      },
      {
        _id: '45e449ee-0238-4ac1-8077-be5b6eadad55',
        name: 'NodeJS',
        slug: 'node-js',
      },
    ],
    _id: 'c136935a-f62d-4e3a-abc0-7beb33a156e8',
  },
  {
    tags: [
      {
        _id: 'f53bb0c3-f0c2-4a38-acd3-0491425a8354',
        name: 'VSCode',
        slug: 'vscode',
      },
    ],
    _id: '6168e9b4-39ce-45ec-bd3b-0544a0b6df75',
    publishedAt: '2023-04-08',
    title: 'VSCode finally has a "Warn Before Quitting" option',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: '1e52c31e0a78',
        markDefs: [],
        children: [
          {
            _key: 'f88cfbbee003',
            _type: 'span',
            marks: [],
            text: 'When I started using VSCode in 2018, we had no option for being warned before quitting the terminal.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '469d84b1b745',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This was extremely annoying when we accidentally pressed ',
            _key: '5ce163a76853',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'cmd + Q',
            _key: '6894e8fac460',
          },
          { _type: 'span', marks: [], text: ' or ', _key: '5e0e5b3c1641' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'cmd + W',
            _key: 'fec62b0877e4',
          },
          {
            _key: 'd4acf0f672a7',
            _type: 'span',
            marks: [],
            text: ' and instantly closed the code editor.',
          },
        ],
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I found an extension called "Quit Control for VSCode" that implemented this control, which I have been using until today.',
            _key: '405153771c17',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6d2132f20f40',
        markDefs: [],
      },
      {
        caption: 'Quit Control for VSCode extension',
        _key: 'f4fe7c1adad8',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-92fc3b48103074a73ccbb45628f0d7b9f473fce2-2206x620-png',
          },
        },
        customWidth: 600,
        _type: 'detailedImage',
        alt: 'Quit Control for VSCode extension',
        markDefs: null,
      },
      {
        children: [
          {
            text: 'But "Today I Learned" that VSCode had implemented that feature in 2022 (took longer than I expected 🤷‍♂️).',
            _key: '05cbdc37f2c1',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '044411ab3520',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '99c85b6bcd0f',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'To enable it, open your user settings, search for ',
            _key: '6d8c0a05266f',
          },
          {
            marks: ['highlight'],
            text: 'confirm before close',
            _key: 'ba85e0b4f2bb',
            _type: 'span',
          },
          {
            text: ', and mark it as ',
            _key: 'bc7309f2a58e',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'always',
            _key: '8d862c70dbad',
          },
          { _type: 'span', marks: [], text: '.', _key: 'ec2f94c5c608' },
        ],
      },
      {
        _key: '0845c8af7603',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-6070af61cd8ffb7473867a881a6b03e48893d930-1790x608-png',
          },
        },
        customWidth: 600,
        _type: 'detailedImage',
        markDefs: null,
        alt: 'Settings to enable confirm before close',
        caption: 'Settings to enable confirm before close',
      },
      {
        style: 'normal',
        _key: 'aca967d89df7',
        markDefs: [],
        children: [
          {
            _key: '4a39337fc9e3',
            _type: 'span',
            marks: [],
            text: 'Now, if you try quite VSCode, a native pop-up will appears like this:',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: null,
        _type: 'detailedImage',
        alt: 'VSCode Quite confirmation',
        caption: 'VSCode Quite confirmation',
        _key: '11c3b2e5ad57',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-d20d0397163653055e0a83263c22333bcb88e36f-558x528-png',
            _type: 'reference',
          },
        },
        customWidth: 250,
      },
      { _type: 'divider', hr: true, _key: 'f28a5bae4646', markDefs: null },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'References',
            _key: '8d026d9ede55',
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: '565fabf55466',
      },
      {
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://github.com/microsoft/vscode/issues/14710#issuecomment-1096294540',
            _key: 'fd78777865a8',
          },
        ],
        children: [
          {
            text: 'VSCode announcement',
            _key: 'b54135079e22',
            _type: 'span',
            marks: ['fd78777865a8'],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '3ec6322c3d1f',
        listItem: 'bullet',
      },
      {
        _key: '9086f9df43c8',
        listItem: 'bullet',
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=artdiniz.quitcontrol-vscode',
            _key: '69c31e60c430',
          },
        ],
        children: [
          {
            text: 'Quit Control for VSCode extension',
            _key: '100d75585d57',
            _type: 'span',
            marks: ['69c31e60c430'],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
    ],
    slug: 'vscode-finally-has-a-warn-before-quitting-option',
  },
  {
    title: 'How to highlight a quoted text on GitHub Markdown',
    language: 'en',
    content: [
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It seems to be a beta/recent feature on Github, but today I learned we could highlight a blockquote by adding its "types" in the first line:',
            _key: '00f48bb36c570',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a701025df092',
        markDefs: [],
      },
      {
        highlightedLines: '1,5',
        code: '\u003e **Note**\n\u003e This is a note\n\n\n\u003e **Warning**\n\u003e This is a warning',
        _type: 'code',
        language: 'md',
        _key: '47e819213cc5',
        markDefs: null,
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This input will produce the following output:',
            _key: '3df0c422bf32',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0e2be11949c6',
        markDefs: [],
      },
      {
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-a63b8d8ebc3766822ec3afff0ce147c78e814e28-153x128-png',
          },
        },
        _type: 'detailedImage',
        caption: 'Highlight blockquote',
        _key: '52daf39ec8c1',
        markDefs: null,
      },
      {
        style: 'normal',
        _key: '3597feaf44f5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This might work in every single place as you can write markdown such as ',
            _key: '248ae74575b8',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'READMEs',
            _key: '0d76aaba0cdd',
          },
          { marks: [], text: ', ', _key: '7f6b5bb29ac8', _type: 'span' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.md',
            _key: 'd4b371fe00e0',
          },
          {
            _type: 'span',
            marks: [],
            text: ' files (that will be rendered in the GitHub platform), comments, etc.',
            _key: 'fec5e43b952c',
          },
        ],
        _type: 'block',
      },
      { _type: 'divider', hr: true, _key: '867e61e4488d', markDefs: null },
      {
        _key: '0b96b2e6c3fe',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: '39388e58710f',
          },
        ],
        _type: 'block',
        style: 'h2',
      },
      {
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://github.com/community/community/discussions/16925',
            _key: '6fa42ebc3783',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['6fa42ebc3783'],
            text: 'https://github.com/community/community/discussions/16925',
            _key: '8fdabac6ca960',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '92d62a890799',
        listItem: 'bullet',
      },
    ],
    slug: 'how-to-highlight-a-quoted-text-on-github-markdown',
    tags: [
      {
        _id: 'c45e8b72-2e27-4652-bae2-16e6ce975394',
        name: 'GitHub',
        slug: 'github',
      },
      {
        _id: 'b76802c0-939a-49f8-a805-bf997ffe1428',
        name: 'Markdown',
        slug: 'markdown',
      },
    ],
    _id: '7c180e16-220b-4e8a-b065-ffee782dca03',
    publishedAt: '2023-01-09',
  },
  {
    _id: 'f435d944-a359-409f-8ec1-6ee8a56d00d8',
    publishedAt: '2022-12-12',
    title: 'How to easily add a property to a function in TS code',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "In React world, there's a famous pattern for components libraries while exporting components with subcomponents bound, for example:",
            _key: '63ea101224e5',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'af0cf8f6c27b',
      },
      {
        code: 'import { Menu } from "@company/components";\n\nexport function App() {\n  return (\n    \u003cdiv\u003e\n      \u003cMenu\u003e\n        \u003cMenu.Item\u003eItem 1\u003c/Menu.Item\u003e\n        \u003cMenu.Item\u003eItem 1\u003c/Menu.Item\u003e\n      \u003c/Menu\u003e\n    \u003c/div\u003e\n  );\n}\n',
        _type: 'code',
        language: 'js',
        _key: '4557f8ff8f55',
        highlightedLines: '6-9',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'As you can see, Menu is a component that can be used and invoked, and it has a component called `Item` inside it that can also be invoked.',
            _key: 'a5e404666b5c',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '11041dff2366',
      },
      {
        _key: '1b5d74182d24',
        markDefs: [],
        children: [
          {
            _key: '87455832500b',
            _type: 'span',
            marks: [],
            text: 'There\'s an old common sense that "everything in JavaScript is an object", which is not 100% accurate (because of what is the primitives), but most of the time is true.',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'So, to achieve such a thing, we would have a code like this:',
            _key: '8e358c920a19',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'd793beba0a25',
        markDefs: [],
      },
      {
        code: '// Declare the Menu Component and export it\nexport function Menu({ children }) {\n  return \u003cul className="menu"\u003e{children}\u003c/ul\u003e;\n}\n\n// Declare the MenuItem Component\nfunction MenuItem({ children }) {\n  return \u003cli className="menu-item"\u003e{children}\u003c/li\u003e;\n}\n\n// Assign the MenuItem Component to the Menu Component\nMenu.MenuItem = MenuItem;',
        filename: 'Menu.jsx',
        _type: 'code',
        language: 'js',
        _key: '9bf2c2ea515b',
        markDefs: null,
      },
      {
        _key: 'a6d2841b8b93',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Now you can use the ',
            _key: '618b29af556c',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Menu',
            _key: '0da63782adcb',
          },
          {
            _type: 'span',
            marks: [],
            text: ' component as shown in the first example.',
            _key: '712853558d75',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In old TypeScript versions (also depending on your config), you might have problems where TS says, "MenuItem is not present on Menu".',
            _key: '3f1f871f72fe',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6274f48b6d1a',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'To solve this problem, you could use the native method ',
            _key: '06c506982c09',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Object.assign',
            _key: '90e92a1a4196',
          },
          { _type: 'span', marks: [], text: ':', _key: '0a3178b3af21' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '2a43598c0d57',
        markDefs: [],
      },
      {
        code: 'import React from "react";\n\nfunction BaseMenu({ children }: { children: React.ReactNode }) {\n  return \u003cul className="menu"\u003e{children}\u003c/ul\u003e;\n}\n\nfunction MenuItem({ children }: { children: React.ReactNode }) {\n  return \u003cli className="menu-item"\u003e{children}\u003c/li\u003e;\n}\n\nexport const Menu = Object.assign(BaseMenu, { MenuItem });\n',
        filename: 'Menu.tsx',
        _type: 'code',
        language: 'ts',
        _key: '5da7ed084f19',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'fef30c0289a2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "By doing this, TS will understand that we're binding ",
            _key: '4472b88d49c0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'MenuItem',
            _key: '88f22fec0ff0',
          },
          {
            _type: 'span',
            marks: [],
            text: ' within the ',
            _key: '235f1a36d82c',
          },
          {
            text: 'Menu',
            _key: '429cff6f29e1',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _key: '52beeef73466',
            _type: 'span',
            marks: [],
            text: ' component, and the type inference will work just fine.',
          },
        ],
      },
    ],
    slug: 'how-to-easily-add-a-property-to-a-function-in-ts-code',
    tags: [
      {
        _id: 'b22abac4-e3f7-4090-b166-3788ccab412f',
        name: 'TypeScript',
        slug: 'typescript',
      },
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        _id: '74b310cb-3614-43e8-8922-cfff89902346',
        name: 'React',
        slug: 'react',
      },
    ],
  },
  {
    slug: 'how-to-fix-resolve-alias-problem-in-vite-js',
    tags: [
      {
        _id: 'd24224b1-1c47-4c30-85a9-5f84dce8aad3',
        name: 'Vite',
        slug: 'vite',
      },
      {
        _id: 'b22abac4-e3f7-4090-b166-3788ccab412f',
        name: 'TypeScript',
        slug: 'typescript',
      },
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        _id: 'fbdf4642-4a9b-4feb-93ca-64e57f8bb9f6',
        name: 'Software Development',
        slug: 'software-development',
      },
    ],
    _id: '8faaabf1-e56c-40e5-88c2-a43e57620be9',
    publishedAt: '2022-07-16',
    title: 'How to fix "resolve.alias" problem in Vite.js',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I've decided to migrate the building of one of my packages from ",
            _key: '8fcf7d24ed09',
          },
          {
            text: 'esbuild',
            _key: 'cb79ebae1cba',
            _type: 'span',
            marks: ['highlight'],
          },
          { _type: 'span', marks: [], text: ' o use ', _key: '9ad5b99b8779' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'vite',
            _key: '27c753c4d2c4',
          },
          { _type: 'span', marks: [], text: '.', _key: '48e08f0cd8cb' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0cc7cad64520',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'My driver was mainly because I had both installed into my repository, and because they were doing the same thing (building packages), I wanted to stick with a single one.',
            _key: '724cbee1482e0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6cc7e509ddad',
      },
      {
        style: 'normal',
        _key: '6e1cc8719ebb',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Also, Vite.js is getting more and more traction among the community due to its power, simplicity, and stable API, but that's not the subject here.",
            _key: '28896536ef7a0',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            text: 'My package is just a collection of small functions written in TS. From there, I need to parse it to both ES Modules and CommonJS.',
            _key: '39461544e9cc',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '70e5aa5ffb48',
      },
      {
        _key: '7e22ce34c926',
        markDefs: [],
        children: [
          {
            _key: '29ccd1329521',
            _type: 'span',
            marks: [],
            text: 'So, I had a very simple ',
          },
          {
            _key: 'e6ead22e2b90',
            _type: 'span',
            marks: ['highlight'],
            text: 'vite.config.ts',
          },
          { _type: 'span', marks: [], text: ':', _key: 'd1cb2ca8a66c' },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '2c734635ac0e',
        code: 'import path from "path";\nimport { defineConfig } from "vite";\n\nfunction isExternal(id: string) {\n  return !id.startsWith(".") \u0026\u0026 !path.isAbsolute(id);\n}\n\nexport default defineConfig(() =\u003e ({\n  resolve: {\n    alias: {\n      \'~/config\': path.resolve(__dirname, \'./src/config/\'),\n      \'~/utils\': path.resolve(__dirname, \'./src/utils/index.ts\'),\n    },\n  },\n  build: {\n    outDir: "dist",\n    sourcemap: true,\n    lib: {\n      fileName: "core",\n      entry: path.resolve(__dirname, "src/index.ts"),\n      formats: ["es", "cjs"],\n    },\n    rollupOptions: {\n      external: isExternal,\n    },\n  },\n}));\n',
        filename: 'vite.config.ts',
        _type: 'code',
        markDefs: null,
        language: 'ts',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'That worked just fine. While running ',
            _key: 'c768f8d0442e',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'pnpm exec vite build',
            _key: '0db53e815678',
          },
          {
            _key: '34f4a1bca5ee',
            _type: 'span',
            marks: [],
            text: ', my package was built successfully.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0b979c9f854d',
        markDefs: [],
      },
      {
        _key: '7af5bb80ab3e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The problem was when I tried to import in my website. I got the following message:',
            _key: '5ed299d5059c',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: "Cannot find package '~' imported from /Users/raulmelo/development/raulmelo-studio/packages/core/dist/scripts.js",
        _type: 'code',
        _key: 'd522a318e174',
        markDefs: null,
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I straight jumped into the dist files and noted something weird: the aliases were not being resolved:',
            _key: 'e4c8870449c7',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '66e51c7d91d1',
        markDefs: [],
      },
      {
        markDefs: null,
        language: 'js',
        _key: 'f5e51429b00c',
        code: 'import { client as s, sanityConfig as h } from "~/config";\nimport { SUPPORTED_LANGUAGES as p } from "~/config/languages";\n// ...',
        filename: 'dist/core.js',
        _type: 'code',
      },
      {
        children: [
          {
            marks: [],
            text: 'That was weird because I had explicitly declared the ',
            _key: 'e9029e6d4f91',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'resolve.alias',
            _key: 'b17ed6352d27',
          },
          {
            _type: 'span',
            marks: [],
            text: ' property that was meant to solve this.',
            _key: '3f4966a07443',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8ccf7efd8b7a',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'b5c9e334c69c',
        markDefs: [],
        children: [
          {
            _key: 'a90e5dc09ffe',
            _type: 'span',
            marks: [],
            text: 'After a few hours of debugging, I realized that my function ',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'isExternal',
            _key: 'e87f86cee259',
          },
          {
            text: ' was responsible for causing the bug.',
            _key: 'a7623dd4d95b',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        style: 'normal',
        _key: '38ddaa448260',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "This function is a tiny utility that we pass to Rollup (used by Vite) to decide if the code should be included in the code or if it should be handled as an external dependency, and you might have guessed, it's executed for every single import your have in your code.",
            _key: 'b72af53e5b79',
          },
        ],
        _type: 'block',
      },
      {
        code: '// ...\n\nfunction isExternal(id: string) {\n  return !id.startsWith(".") \u0026\u0026 !path.isAbsolute(id);\n}\n\n// ...',
        filename: 'vite.config.ts',
        _type: 'code',
        language: 'ts',
        _key: 'fd0aaed5467d',
        markDefs: null,
      },
      {
        style: 'normal',
        _key: '31e42aef5290',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'The first condition will check if the import does not starts with ',
            _key: '1fcbd726ba3a',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.',
            _key: '1512b754da40',
          },
          {
            _type: 'span',
            marks: [],
            text: ' (e.g., ',
            _key: '98d2aedc5704',
          },
          {
            text: "import foo from './bar'",
            _key: 'c3da643815fc',
            _type: 'span',
            marks: ['highlight'],
          },
          { marks: [], text: ').', _key: 'e6bbf466a32e', _type: 'span' },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: '0ccedbfc53ec',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "The second condition will check if it isn't an absolute path (this is more for the internals.",
            _key: 'b4aec6461c6a',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'But then, it was missing a condition to check my aliases.',
            _key: 'fb36ce57fe68',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e2c41d55c132',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '51988bf2bd11',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'When this function hits something like ',
            _key: 'ac0cb3a70e94',
          },
          {
            text: '~/config',
            _key: 'bfc32bd2504c',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ', none of these conditions were satisfied (',
            _key: 'ff2c9e65b290',
          },
          {
            marks: ['highlight'],
            text: 'true \u0026\u0026 true',
            _key: 'c552a7f7f38e',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: '), leading Rollup to consider this import as ',
            _key: '8527fd718eb7',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'external',
            _key: '362c064af012',
          },
          { marks: [], text: '.', _key: '8087a00a0337', _type: 'span' },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'ca104421745e',
            _type: 'span',
            marks: [],
            text: 'My fix was adding another condition:',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b450e9625ff0',
      },
      {
        _type: 'code',
        language: 'ts',
        _key: 'b18c6ee24f82',
        markDefs: null,
        code: '// ...\n\nfunction isExternal(id: string) {\n  return !id.startsWith(".") \u0026\u0026 !path.isAbsolute(id) \u0026\u0026 !id.startsWith(\'~/\');\n}\n\n// ...',
        filename: 'vite.config.ts',
      },
      {
        _key: '47b072cfa364',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "Now, it'll define if it's an external dependency, if it does not start with ",
            _key: '060d703558080',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.',
            _key: '644131835c16',
          },
          {
            _type: 'span',
            marks: [],
            text: ', is not an absolute path, and does not start with ',
            _key: 'c0132ea08b7e',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '~/',
            _key: 'a9a1afacdbd2',
          },
          {
            text: ', resulting in my aliased imports being correctly imported to the final bundle.',
            _key: 'dba6a5c0c52b',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      { _type: 'divider', hr: true, _key: 'e601a4012828', markDefs: null },
      {
        _key: '024060fe652d',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Conclusion',
            _key: '2f2bc23c3b42',
          },
        ],
        _type: 'block',
        style: 'h2',
      },
      {
        markDefs: [],
        children: [
          {
            text: "It's tough to solve problems like this, mainly because you don't know what's influencing what is under the hood.",
            _key: 'f950e8bf54440',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '098abf8d8f29',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'My advice is always to create another repository and reproduce the same behavior but in a smaller size. Always give baby steps until you either find a bug or realize that you were doing something wrong.',
            _key: '5d143382013f0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'ba4b311be1cf',
      },
      { _type: 'divider', hr: true, _key: 'a5062f1c899d', markDefs: null },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'References',
            _key: '88bd30170b55',
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: '33116149673a',
      },
      {
        children: [
          {
            marks: ['068dbb0d879e'],
            text: 'https://vitejs.dev/config/shared-options.html#resolve-alias',
            _key: '776cc2e20563',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '0733936db08f',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://vitejs.dev/config/shared-options.html#resolve-alias',
            _key: '068dbb0d879e',
          },
        ],
      },
      {
        style: 'normal',
        _key: '3387e8164d5a',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://vitejs.dev/config/build-options.html#build-rollupoptions',
            _key: 'fa4ce4cd64a3',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['fa4ce4cd64a3'],
            text: 'https://vitejs.dev/config/build-options.html#build-rollupoptions',
            _key: '1c8bc4c63676',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        _key: 'e3ec51011f2a',
        listItem: 'bullet',
        markDefs: [
          { _type: 'internalLink', _key: '3bb78fbd2c23', itemMeta: null },
          { blank: false, _type: 'link', _key: 'ee001a8f8463' },
        ],
        children: [
          {
            marks: ['ee001a8f8463'],
            text: 'https://rollupjs.org/guide/en/#external',
            _key: '15a5805066a1',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
    ],
  },
  {
    _id: 'aa226b60-8141-43ad-99bb-83bb1b0738fa',
    publishedAt: '2022-04-22',
    title: 'We can prevent elements to be selected using CSS',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Sometimes it might be handy when you have text that could be selected and copied by the user to prevent certain elements from being copied.',
            _key: '9f15990523e70',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9674c4ffe6f4',
      },
      {
        _key: '83e8f7073fc3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I've realized that we can simply do that by using the CSS property ",
            _key: '7be2d116d45d0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'user-select: none',
            _key: 'f90af2a23192',
          },
          { marks: [], text: ':', _key: 'd06735f4aa79', _type: 'span' },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '1fb30da6185e',
        markDefs: null,
        code: 'span {\n  user-select: none;\n}\n',
        _type: 'code',
        language: 'css',
      },
      {
        _key: '4c21c960e446',
        height: 200,
        _type: 'codePen',
        directUrl: 'https://codepen.io/raulfdm/pen/VwyNYJG',
        markDefs: null,
      },
      {
        style: 'h3',
        _key: 'e57564fb13ab',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Reference',
            _key: '0f7b98ef9d5b0',
          },
        ],
        _type: 'block',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting',
            _key: '03f83ef6134d',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['03f83ef6134d'],
            text: 'https://stackoverflow.com/questions/826782/how-to-disable-text-selection-highlighting',
            _key: '512abc6502310',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'd21bdd236059',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
            _key: 'a546482d9e52',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['a546482d9e52'],
            text: 'https://developer.mozilla.org/en-US/docs/Web/CSS/user-select',
            _key: '187aff1d3f1e0',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'ba86ca51f7eb',
      },
    ],
    slug: 'we-can-prevent-elements-to-be-selected-using-css',
    tags: [
      {
        _id: 'fdbf282e-68a9-4fae-bc74-eeddd0c38290',
        name: 'CSS',
        slug: 'css',
      },
    ],
  },
  {
    title: 'How To enforce Word Wrap for a language in VSCode',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: '03e1406cc74c',
        markDefs: [],
        children: [
          {
            text: 'Every time I open a ',
            _key: '737f5cce54b00',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.md',
            _key: '961211e7831d',
          },
          {
            _key: 'd2f87acb4112',
            _type: 'span',
            marks: [],
            text: ' file, it\'s set up by default to "Word Wrap" the content.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '1edf051ff73b',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I don't have anything set up in my preferences, so maybe one of my markdown plugins enables that for me automatically.",
            _key: 'a17aada3a024',
          },
        ],
      },
      {
        children: [
          {
            marks: [],
            text: 'However, when I open a ',
            _key: 'cc8c3ab33727',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.mdx',
            _key: '443ca4075679',
          },
          {
            _type: 'span',
            marks: [],
            text: " file isn't enabled by default.",
            _key: '9ee1c9fa386a',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'dc4d66b50ad4',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '982ced5d6645',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'After turning word wrap a dozen times, I got fed up and decided to fix that once and for all.',
            _key: '8821be5b8afe',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'We need to go into our settings by hitting ',
            _key: 'a50652c96b37',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'cmd + shift + p',
            _key: '505d47ef1dba',
          },
          {
            _key: 'e0aa5e389d9d',
            _type: 'span',
            marks: [],
            text: ' (or ctrl in Windows/Linux environment) and type ',
          },
          {
            marks: ['highlight'],
            text: 'Preferences',
            _key: '9f76b3f6695f',
            _type: 'span',
          },
          { _key: 'cb56f9a2cb19', _type: 'span', marks: [], text: '.' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '507e3f0cd68f',
      },
      {
        style: 'normal',
        _key: '7c9ab992701f',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Then, we click to open it as ',
            _key: 'a4e5c2c4a9e6',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'json',
            _key: 'b21ebee52a12',
          },
          { marks: [], text: '.', _key: '23ec629d2bdf', _type: 'span' },
        ],
        _type: 'block',
      },
      {
        _key: 'c169b0708e56',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This file will contain any customization you do to your VSCode.',
            _key: '5da324faa16a',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '72b887b2d641',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "If we add the options at the root level, they'll be applied to every file from every extension.",
            _key: '2f453abd721b',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '88ee2bbbfa51',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'For having global configs tweaked for specific languages, we can add the language like this:',
            _key: 'bb43df3403d8',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: '{\n  // Global configs\n  "[mdx]": {\n    // add overrides\n  }\n}\n',
        markDefs: null,
        _type: 'code',
        language: 'json',
        _key: 'fe68a5691b74',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Then, the configuration related to the Word Wrap is named by ',
            _key: '04a1e94f92d30',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'editor.wordWrap',
            _key: '669e8ba34902',
          },
          {
            marks: [],
            text: '. We have to configure that to be constantly ',
            _key: '9683abe0a5d5',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'on',
            _key: '80c40e7b38eb',
          },
          { _type: 'span', marks: [], text: ':', _key: 'e3e8130402b8' },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f650b1fa74e4',
      },
      {
        _key: 'a35a634ee3cc',
        code: '{\n  // Global configs\n  "[mdx]": {\n    "editor.wordWrap": "on"\n  }\n}\n',
        _type: 'code',
        language: 'json',
        markDefs: null,
      },
    ],
    slug: 'how-to-enforce-word-wrap-for-a-language-in-vscode',
    tags: [
      {
        _id: 'f53bb0c3-f0c2-4a38-acd3-0491425a8354',
        name: 'VSCode',
        slug: 'vscode',
      },
    ],
    _id: 'f247ee85-73f9-4568-97be-b60ad0e4ef9b',
    publishedAt: '2022-04-20',
  },
  {
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'efa702702a62',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I found a CLI called ',
            _key: 'e31d9a1998d3',
          },
          {
            marks: ['highlight'],
            text: 'npkill',
            _key: 'aa7397ef8d60',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' that, when you call it, searches for all ',
            _key: '47d11fce7e1d',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'node_modules',
            _key: '4e8bfea0e811',
          },
          {
            _type: 'span',
            marks: [],
            text: ' folders (even ',
            _key: 'd0e3e9a421f6',
          },
          {
            _type: 'span',
            marks: ['em'],
            text: 'nested',
            _key: 'be3110046e0a',
          },
          {
            _type: 'span',
            marks: [],
            text: ') so you can easily delete it.',
            _key: '884516ca48ff',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _key: 'cdcfcbceb170',
            _type: 'span',
            marks: [],
            text: 'Of course, we could do that via ',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'rm',
            _key: '23e64886a2bc',
          },
          {
            _type: 'span',
            marks: [],
            text: ', but the beauty of this cli is that it shows all ',
            _key: 'f6d2c74e587c',
          },
          {
            _key: 'e32d807bf57c',
            _type: 'span',
            marks: ['highlight'],
            text: 'node_modules',
          },
          {
            _type: 'span',
            marks: [],
            text: ' found, each ones size, and you can select which one would be deleted:',
            _key: '0a6ffa49cf36',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '354156ec4c4a',
      },
      {
        _type: 'gif',
        caption: 'npkill in action',
        _key: '349fe9336cd3',
        markDefs: null,
        src: 'https://camo.githubusercontent.com/fa9316e334b14a26e8c8f5b7777e70cca137a6f21b5e160c2b4df9fcdd730308/68747470733a2f2f6e706b696c6c2e6a732e6f72672f696d672f6e706b696c6c2d64656d6f2d302e332e302e676966',
      },
      { _key: '4e9142a58ab5', _type: 'divider', hr: true, markDefs: null },
      {
        _key: '32b41eba5814',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'a962c340266f',
          },
        ],
        _type: 'block',
        style: 'h3',
      },
      {
        style: 'normal',
        _key: '87a5a6fb5cbd',
        listItem: 'bullet',
        markDefs: [
          {
            blank: true,
            _type: 'link',
            href: 'https://www.npmjs.com/package/npkill',
            _key: '9256a2434a04',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['9256a2434a04'],
            text: 'https://www.npmjs.com/package/npkill',
            _key: '5faeb4a033d3',
          },
        ],
        level: 1,
        _type: 'block',
      },
    ],
    slug: 'npm-package-that-helps-delete-node-modules',
    tags: [
      {
        _id: '5ffbd6df-9b81-44af-b3e7-8283e53c990d',
        name: 'CLI',
        slug: 'cli',
      },
      {
        _id: '45e449ee-0238-4ac1-8077-be5b6eadad55',
        name: 'NodeJS',
        slug: 'node-js',
      },
    ],
    _id: 'cffcda83-dbcc-4b2c-af31-cfdedbb6b68d',
    publishedAt: '2022-02-26',
    title: 'There is an npm package that helps delete node_modules',
  },
  {
    content: [
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I've slowly started to replace Yarn/npm with pnpm whenever I can.",
            _key: 'becfbef8f9e30',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b8a4ab92a893',
        markDefs: [],
      },
      {
        _key: '21c86f44871a',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Despite using it in projects (which is not always that easy), I've decided to start using it for global packages (where I have some control).",
            _key: '2bbee2ab6856',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "However, like npm or Yarn, it doesn't work out-of-the-box when you're using a particular node installation like I use ",
            _key: '154d9adda35c',
          },
          {
            marks: ['highlight'],
            text: 'asdf',
            _key: '2e2618a2a489',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ' to control my runtime versions.',
            _key: 'd5dc8b5c33d5',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '579e243f071b',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '29f4389a2739',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "For installing global packages, it's the same as we know:",
            _key: '7223a9784249',
          },
        ],
      },
      {
        language: 'bash',
        _key: 'e9a0517447db',
        code: 'pnpm add --global live-server',
        _type: 'code',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'c42b42197111',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'This should invoke the binary automatically, but instead, I got:',
            _key: '8d2cc7273d27',
            _type: 'span',
          },
        ],
      },
      {
        code: 'zsh: command not found: live-server',
        _type: 'code',
        language: 'plaintext',
        _key: 'f1788e6e406b',
        markDefs: null,
      },
      {
        _key: '0d2d9c46f13f',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I remember I had this problem before with npm, and the solution was adding in my PATH the location npm's binaries.",
            _key: 'f88c26f35b04',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '5d536ce5ef61',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'To know that, pnpm give us a command ',
            _key: 'a644d684dc03',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'pnpm bin --global',
            _key: 'f5be21939c52',
          },
          { _type: 'span', marks: [], text: ':', _key: '48fc4e3dae76' },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'a2ad8143704c',
        code: '~ » pnpm bin --global\n/Users/raulmelo/.asdf/plugins/nodejs/shims',
        _type: 'code',
        language: 'plaintext',
        markDefs: null,
      },
      {
        _key: 'cfb8d7e4ec01',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'So all I needed was to concatenate the result of this command in whatever my $PATH already is in my ',
            _key: '85cc1600df5c',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '~/.zshrc',
            _key: '974b4e393c0c',
          },
          {
            _type: 'span',
            marks: [],
            text: ' configuration:',
            _key: '17ba03b82373',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: null,
        _type: 'code',
        language: 'bash',
        _key: '53025054d317',
        code: 'export PATH=$(pnpm bin --global):$PATH',
      },
      {
        style: 'normal',
        _key: '0651df5a5899',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Then, after reloading my terminal session with ',
            _key: '627a31b4309b',
          },
          {
            text: 'source ~/.zshrc',
            _key: '1c866fa6eaed',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' or opening another tab, I can call all binaries installed via pnpm.',
            _key: '35bf847f571a',
          },
        ],
        _type: 'block',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Obs.: this also works for NPM; you only have to replace the pnpm command with ',
            _key: '0de451259b78',
          },
          {
            marks: ['highlight'],
            text: '$(npm bin -g)',
            _key: 'a589a0dd9811',
            _type: 'span',
          },
          { _type: 'span', marks: [], text: '.', _key: '8b876b385446' },
        ],
        _type: 'block',
        style: 'blockquote',
        _key: '1b8fc0b3ac61',
        markDefs: [],
      },
      { _type: 'divider', hr: true, _key: '8f32d43f4492', markDefs: null },
      {
        _type: 'block',
        style: 'h3',
        _key: 'd4fbda330a04',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: '6e3b1cf77627',
          },
        ],
      },
      {
        _key: '5b63c4e77fe7',
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://pnpm.io/cli/bin',
            _key: '20f8f7dc3ebd',
          },
        ],
        children: [
          {
            _key: '9cb99056f1aa',
            _type: 'span',
            marks: ['20f8f7dc3ebd'],
            text: 'https://pnpm.io/cli/bin',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'afe004b0d4c4',
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://docs.npmjs.com/cli/v7/commands/npm-bin',
            _key: 'cc2636fc5d0c',
          },
        ],
        children: [
          {
            _key: '8891b203b7a6',
            _type: 'span',
            marks: ['cc2636fc5d0c'],
            text: 'https://docs.npmjs.com/cli/v7/commands/npm-bin',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally',
            _key: '08788fd00e09',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['08788fd00e09'],
            text: 'https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally',
            _key: '339247bb2798',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '9f1f25f18a01',
      },
    ],
    slug: 'how-to-fix-command-not-found-for-global-pnpm-packages',
    tags: [
      {
        _id: 'a98ba9c8-b2ec-4fdd-a47d-80714402d9b4',
        name: 'pnpm',
        slug: 'pnpm',
      },
      {
        _id: '80894f20-0222-4e49-ade0-69cb07b19a20',
        name: 'Development',
        slug: 'development',
      },
      {
        _id: '92be336e-3b55-40df-93e7-7942428bd8b9',
        name: 'Package Manager',
        slug: 'package-manager',
      },
      {
        _id: 'bc830fb7-648d-4de4-9c35-317792706558',
        name: 'npm',
        slug: 'npm',
      },
    ],
    _id: '7134a5d5-1c99-45c4-af41-1e52971a8951',
    publishedAt: '2021-11-16',
    title: 'How to fix "command not found" for global pnpm packages',
    language: 'en',
  },
  {
    title: 'How to spread all arguments in a .sh script',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: '36b8d126f4f5',
        markDefs: [
          {
            _type: 'internalLink',
            _key: '9e1bc038dec4',
            item: {
              _ref: '80be37b1-a1d9-4931-975b-1cf4640f7f7d',
              _type: 'reference',
            },
            itemMeta: {
              slug: 'how-to-have-better-npm-scripts',
              _type: 'post',
            },
          },
        ],
        children: [
          {
            marks: [],
            text: "After I've learned how to use ",
            _key: '4bb84b89b4e80',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['9e1bc038dec4'],
            text: 'scripty',
            _key: 'bc49395b5466',
          },
          {
            text: ', having basic ',
            _key: '39b8ef1431c0',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.sh',
            _key: '161b9d046d9e',
          },
          {
            _key: 'da5a5b801a6e',
            _type: 'span',
            marks: [],
            text: ' is part of my workflow even not being a shell scripting expert.',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Since scripty does not pass down the CLI arguments to my scripts:',
            _key: '584772d07a1f',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1e005290ca02',
      },
      {
        markDefs: null,
        code: '# Consider building a build.sh script\nyarn build --scope=mdx-prism-2',
        _type: 'code',
        language: 'bash',
        _key: '281febf75790',
      },
      {
        _key: 'bf51dbc83903',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I have to do it manually:',
            _key: 'ba90385283b2',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'bash',
        _key: 'e6f83fa43abf',
        code: 'lerna build $1',
        filename: 'scripts/build.sh',
        _type: 'code',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f5953105efbf',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '$1',
            _key: '14ed0c2e9e69',
          },
          {
            _type: 'span',
            marks: [],
            text: ' is the first argument I passed in the previous command, in that case, ',
            _key: '9bf80e9ff5f5',
          },
          {
            _key: '5e784c65a6a9',
            _type: 'span',
            marks: ['highlight'],
            text: '--scope=mdx-prism-2',
          },
          { _type: 'span', marks: [], text: '.', _key: '0c1fb16e5618' },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'But if I need to pass more params like:',
            _key: '24c33f9f9e13',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '01a6dcf55bf7',
      },
      {
        _key: 'eb302c729bdf',
        markDefs: null,
        code: 'yarn build --scope=mdx-prism-2 --scope=@raulfdm/core --scope=@raulmelo/styles',
        _type: 'code',
        language: 'bash',
      },
      {
        style: 'normal',
        _key: '230f2c3a1211',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Instead of doing:',
            _key: '612e45a5da57',
          },
        ],
        _type: 'block',
      },
      {
        _key: 'a7fecce7ab33',
        code: 'lerna build $1 $2 $3',
        filename: 'scripts/build.sh',
        _type: 'code',
        language: 'bash',
        markDefs: null,
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I learned that I could simply spread all arguments with ',
            _key: '6c1dd51f0665',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '$@',
            _key: '90ad2520b2f4',
          },
          { marks: [], text: ':', _key: '84d56d1d0c5a', _type: 'span' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '93e272e01e32',
        markDefs: [],
      },
      {
        _key: '064538f4ec63',
        markDefs: null,
        code: 'lerna build $@',
        filename: 'scripts/build.sh',
        _type: 'code',
        language: 'bash',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'And now I no longer have to worry about how many params my script supports because all will be spread!',
            _key: '16e906ac10e0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a4044ec9f70a',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Resource',
            _key: '4060cad5161e',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: 'e2010b660e7f',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'd267888a3e1d',
        listItem: 'bullet',
        markDefs: [
          {
            _key: '8c5b7a45f24a',
            blank: false,
            _type: 'link',
            href: 'https://stackoverflow.com/a/3816747',
          },
        ],
        children: [
          {
            _key: 'bb6e0f07a616',
            _type: 'span',
            marks: ['8c5b7a45f24a'],
            text: 'https://stackoverflow.com/a/3816747',
          },
        ],
      },
    ],
    slug: 'how-to-spread-all-arguments-in-a-sh-script',
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        _id: '80894f20-0222-4e49-ade0-69cb07b19a20',
        name: 'Development',
        slug: 'development',
      },
      {
        _id: '88ba0559-7d93-4c16-98b6-8ddf21ce4a07',
        name: 'Shell',
        slug: 'shell',
      },
    ],
    _id: 'd4bb6501-ea2a-4832-bf5a-e01ac640c2fa',
    publishedAt: '2021-09-18',
  },
  {
    slug: 'chrome-devtools-selected-element-alias',
    tags: [
      {
        _id: '3a82ffa7-c133-48f1-99e0-d9fe3a9b8cb5',
        name: 'Chrome',
        slug: 'chrome',
      },
      {
        _id: '25f64a59-a545-4adf-9334-2d3fc05b3b13',
        name: 'DevTools',
        slug: 'dev-tools',
      },
      {
        _id: '7f37787c-1e19-4c8c-99a2-89eae7771b2c',
        name: 'Tips and Tricks',
        slug: 'tips-and-tricks',
      },
    ],
    _id: 'b0de43b8-7fbd-49d4-a683-61890ae32acf',
    publishedAt: '2021-09-03',
    title:
      'When you select an element on Chrome dev tools element inspector, an alias to it is automatically created',
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: '1a549991c7a9',
        markDefs: [],
        children: [
          {
            _key: '5f24e678b7c30',
            _type: 'span',
            marks: [],
            text: 'Chrome Devtools has a lot of nice tricks and learns them all might take some time.',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '074ce7524211',
            _type: 'span',
            marks: [],
            text: 'Today I learn that when we select an element in the element inspector, an alias is automatically created to it so you can easily access it via console.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '831f08ecec7f',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: "All you need to do is open your element inspector, click in the element you want to have access and you'll see it's marked with a ",
            _key: 'edc1d606696f',
          },
          {
            _key: '0e92c0c38e9b',
            _type: 'span',
            marks: ['highlight'],
            text: '== $0',
          },
          { _key: '76bed3a2b447', _type: 'span', marks: [], text: ' flag.' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '24025dbf9b0a',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'From there, you can write in the console ',
            _key: 'ebab088c024d',
          },
          {
            text: '$0',
            _key: '02b7b88f7c6e',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: " and you'll have access to the element you've previously selected.",
            _key: 'ea3c65eca909',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '94da24b4aade',
      },
      {
        caption: 'Element marked with $0 alias',
        _key: '8e237bfe5d51',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-560548cd5561935591ea839b052d8e0153f9e3f4-631x364-png',
            _type: 'reference',
          },
        },
        _type: 'detailedImage',
        markDefs: null,
      },
      {
        caption: 'Accessing $0 from the console',
        _key: '469d66f97160',
        markDefs: null,
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-896496df7c7ce33c0fadc3c0dc1351baae4f9e87-626x296-png',
            _type: 'reference',
          },
        },
        _type: 'detailedImage',
      },
      {
        _type: 'block',
        style: 'blockquote',
        _key: '5411bae7d3ee',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "It's important to note that it ONLY works in the console. You CANNOT use that alias inside a script.",
            _key: '87bcf317b36a',
          },
        ],
      },
      {
        style: 'h3',
        _key: 'bc1d50153ace',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: '81e9b12c8a84',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: '186dbe7e02eb',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://developer.chrome.com/docs/devtools/console/utilities/#recent-many',
            _key: '025d826ae0f5',
          },
        ],
        children: [
          {
            _key: '202257645abc',
            _type: 'span',
            marks: ['025d826ae0f5'],
            text: 'https://developer.chrome.com/docs/devtools/console/utilities/#recent-many',
          },
          { _key: '0aef3b6105b9', _type: 'span', marks: [], text: '\n\n' },
        ],
        level: 1,
        _type: 'block',
      },
    ],
  },
  {
    publishedAt: '2021-08-28',
    title: 'How to transfer a file between Windows and WSL',
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: 'ca10dd34c68a',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'While using WSL (Windows Subsystem for Linux) on Windows 10 (or 11), we might want to move a file we just downloaded and move to our Linux environment.',
            _key: '98e0766fdae60',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: '9f7981341fda',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I remember when I first installed it (about 1 year ago) this task were easier: we could simple have access to all files but now, it seems MS team have made this a bit difficult by "mounting" the subsystem in a hard drive unit and locking it with permissions.',
            _key: '08e81e4d0e25',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'd44d7c37e713',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Anyhow, I've found that inside WSL, we have our hard drivers mount inside a folder called ",
            _key: '4231a3a9180e',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '/mnt',
            _key: 'a7834b412512',
          },
          { _type: 'span', marks: [], text: ':', _key: '362f26130ee4' },
        ],
        _type: 'block',
      },
      {
        code: 'ls /mnt\n# c  d  wsl',
        _type: 'code',
        language: 'bash',
        _key: '405f9cdcc9b9',
        markDefs: null,
      },
      {
        _key: 'ba87bbaadb5a',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'c',
            _key: '3e1cccfdea3b',
          },
          { _type: 'span', marks: [], text: ' and ', _key: 'd2b223cccf97' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'd',
            _key: '35fe953be4af',
          },
          {
            _key: '79837b2a7d9f',
            _type: 'span',
            marks: [],
            text: ' are my HDs.',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '68419dfcc50d',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'In other words, I can copy something from my `Download` folder on Winders by simply access it from my WSL:',
            _key: '1738533aa763',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: null,
        language: 'bash',
        _key: 'de53784ae73e',
        code: 'cp /mnt/c/Users/Raul/Downloads/a-file.zip ~/',
        _type: 'code',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '78ae59c1c54e',
            _type: 'span',
            marks: [],
            text: 'Resources',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: 'ea73f6f19296',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '47ffd7104ef1',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://ridicurious.com/2018/10/18/2-ways-to-copy-files-from-windows-10-to-windows-sub-system-for-linux/',
            _key: '8b5bce750e87',
          },
        ],
        children: [
          {
            marks: ['8b5bce750e87'],
            text: 'https://ridicurious.com/2018/10/18/2-ways-to-copy-files-from-windows-10-to-windows-sub-system-for-linux/',
            _key: '61b9c628a83a',
            _type: 'span',
          },
        ],
        level: 1,
      },
    ],
    slug: 'how-to-transfer-a-file-between-windows-and-wsl',
    tags: [
      {
        _id: '80894f20-0222-4e49-ade0-69cb07b19a20',
        name: 'Development',
        slug: 'development',
      },
      {
        _id: '4fb032e5-6228-4e32-899c-dc0b723ec142',
        name: 'Linux',
        slug: 'linux',
      },
      {
        _id: '726acdc2-0cd4-48df-a0f1-2b46a7a00744',
        name: 'Windows',
        slug: 'windows',
      },
      {
        _id: 'ba0d966f-c742-4e52-b176-01e096d1f33f',
        name: 'WSL',
        slug: 'wsl',
      },
    ],
    _id: '4ff32808-6645-4dd4-9c01-467bbe2295dc',
  },
  {
    publishedAt: '2021-08-07',
    title: 'How to fix css lint when writing Tailwind inside Svelte style tag',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'e071a964df7d',
        markDefs: [],
        children: [
          {
            _key: '7e3e9243de400',
            _type: 'span',
            marks: [],
            text: 'Tailwind allow us to write the following CSS code:',
          },
        ],
      },
      {
        code: '  .overlay {\n    @apply absolute left-0 right-0 bottom-0 bg-black bg-opacity-75;\n    top: var(--nav-height);\n  }',
        _type: 'code',
        language: 'css',
        markDefs: null,
        _key: '62259d6fe15e',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The problem is that ',
            _key: 'b875f5d981f2',
          },
          {
            text: '@apply',
            _key: 'fd61585945a1',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            marks: [],
            text: " isn't a CSS feature. Which means while writing a Svelte component which have such feature:",
            _key: '1f6f4584f286',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1b1ab82a881f',
      },
      {
        _type: 'code',
        language: 'svelte',
        _key: 'ff55c2863526',
        code: '\u003cdiv class="overlay" /\u003e\n\n\u003cstyle\u003e\n  .overlay {\n    @apply absolute left-0 right-0 bottom-0 bg-black bg-opacity-75;\n    top: var(--nav-height);\n  }\n\u003c/style\u003e',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "You'll get a bunch of errors like: `semi-colon expected css(css-semicolonexpected)`.",
            _key: '704da02cce4d',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '477f52d72c22',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "To fix that all you need to do is specifying the language you're writing the style, in our case, postcss:",
            _key: '875e8c720c8d',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8fe5f2cda486',
      },
      {
        language: 'svelte',
        _key: 'c1d0814e3421',
        markDefs: null,
        code: '\u003cdiv class="overlay" /\u003e\n\n\u003cstyle lang="postcss"\u003e\n  .overlay {\n    @apply absolute left-0 right-0 bottom-0 bg-black bg-opacity-75;\n    top: var(--nav-height);\n  }\n\u003c/style\u003e',
        _type: 'code',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '689a74fc303c',
            _type: 'span',
            marks: [],
            text: 'And the error is gone!',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b3e1ad98d321',
      },
    ],
    slug: 'how-to-fix-css-lint-when-writing-tailwind-inside-svelte-style-tag',
    tags: [
      {
        _id: '4ef892b8-ce72-4d22-99a1-ed3b88ea886e',
        name: 'TailwindCSS',
        slug: 'tailwind-css',
      },
      {
        _id: '49a5351f-f64c-4cf6-a9cd-17730ebe922a',
        name: 'Svelte',
        slug: 'svelte',
      },
    ],
    _id: '57785f38-d577-4d35-ab62-2d036ce41b21',
  },
  {
    _id: '59a5d24a-d26d-4895-ae42-4fc191f3de95',
    publishedAt: '2021-07-17',
    title:
      "The promise's .then() method accepts an error callback as second param",
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'After years writing promises, today I learned that we can pass a callback to be called "on rejection" as a second parameter to the ',
            _key: '153ca2100a580',
          },
          {
            text: '.then()',
            _key: 'f9b00e0a7faf',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _key: '7651a2e0d10b',
            _type: 'span',
            marks: [],
            text: ' method:',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0a05994513b7',
      },
      {
        language: 'js',
        markDefs: null,
        _key: '3ad208e2226c',
        code: "const myPromise = () =\u003e\n  new Promise((resolve, reject) =\u003e {\n    reject('something went wrong');\n  });\n\nmyPromise()\n  .then(console.log, (error) =\u003e {\n    console.log('inside the then error callback', error);\n  });",
        _type: 'code',
      },
      {
        children: [
          {
            text: 'This can be useful when we want to chain multiple "then" and do something if it fails I can add a very specific handler that intercepts this error, do something and either allow to continue the flow (it goes to the next ',
            _key: '37f816dde517',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.then()',
            _key: 'e495b018a763',
          },
          {
            text: ' on success) or re-throw:',
            _key: '09e613af4566',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '7d0779ba4864',
        markDefs: [],
      },
      {
        code: "const myPromise = () =\u003e\n  new Promise((resolve, reject) =\u003e {\n    reject('Something went wrong');\n  });\n\nconst firstThenHandlers = {\n  onSuccess(){\n    console.log('First then: success');\n  },\n  onError(err){\n    console.log('First then: error', err);\n  }\n}\n\nconst secondThenHandlers = {\n  onSuccess(){\n    console.log('Second then: success');\n  },\n  onError(err){\n    console.log('Second then: error', err);\n  }\n}\n\nmyPromise()\n  .then(firstThenHandlers.onSuccess, firstThenHandlers.onError)\n  //becase I'm not re-throwing the error, the error won't reach `.catch` method\n  .then(secondThenHandlers.onSuccess, secondThenHandlers.onError)\n  .catch((error) =\u003e {    // never reached\n    console.log('Catch callback: ', error);\n  });",
        markDefs: null,
        _type: 'code',
        language: 'js',
        _key: '262f47fc54e0',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "The curious fact is that since I'm intercepting the error with this callback, whatever I return from the ",
            _key: '31fb7e03671b',
          },
          {
            marks: ['highlight'],
            text: 'firstThenHandlers.onError',
            _key: '557d218402e8',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: [],
            text: ', will be passed to ',
            _key: '8f2106e8f2b0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'secondThenHandlers.onSuccess',
            _key: '7a5bbcdcaa50',
          },
          {
            _type: 'span',
            marks: [],
            text: ', which can be the error itself or a fallback response.',
            _key: '047a8701a5e9',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '1e02d7f8e58c',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The possibilities are many. I think it worth a blog post in the future about this.',
            _key: '5a5ebd49696b',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '92d1e471de0e',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Resources',
            _key: 'fb61b98d85db',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: '582fae62a8b8',
      },
      {
        style: 'normal',
        _key: '12c8529915f9',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises',
            _key: '2c0c1c3eaf88',
          },
        ],
        children: [
          {
            text: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises',
            _key: '33f647b59604',
            _type: 'span',
            marks: ['2c0c1c3eaf88'],
          },
        ],
        level: 1,
        _type: 'block',
      },
    ],
    slug: 'the-promise-then-method-accepts-an-error-callback-as-second-param',
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
    ],
  },
  {
    publishedAt: '2021-07-15',
    title: 'How to prevent unnecessary Vercel builds',
    language: 'en',
    content: [
      {
        _key: '68ca6df8afa3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "The website you're reading this post is part of a TS monorepo.",
            _key: '5a1ba8f436d40',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I won't dive much into the details of it but I have inside the same repo:",
            _key: 'b6972fba578e',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'df0a51fda2ca',
      },
      {
        children: [
          {
            text: 'CMS that runs on ',
            _key: '42b3a85571e3',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Heroku',
            _key: 'd1905aef3af9',
          },
          { _type: 'span', marks: [], text: ';', _key: '877b4cefb1f8' },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'bc23343a8496',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'A public package for handling MDX via rehype;',
            _key: '883dc9dcd9f1',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '8d6be95c1101',
        listItem: 'bullet',
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '543936c0687b',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'lambda functions that run on ',
            _key: '8a795b02294c',
          },
          {
            marks: ['strong'],
            text: 'Netlify',
            _key: '4d774dfc0e90',
            _type: 'span',
          },
          { _type: 'span', marks: [], text: ';', _key: '0e67d172ea83' },
        ],
      },
      {
        style: 'normal',
        _key: '4109ce505d41',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This website that runs on ',
            _key: 'd90e689b0c9b',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'Vercel.',
            _key: '25de86b30b3d',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        children: [
          {
            text: 'One thing that bothers me a lot is is when I change something in a ',
            _key: '821805077054',
            _type: 'span',
            marks: [],
          },
          {
            _key: '9c7772960d59',
            _type: 'span',
            marks: ['highlight'],
            text: 'lambdas',
          },
          {
            text: ' project which is not related to my website but since my website is connected via git at Vercel, it triggers a build pipeline.',
            _key: 'bd09570b1537',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '27cb76611601',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f99b7f64e45f',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "But then, I've realized that Vercel offers an option to decide what can cause a build trigger.",
            _key: 'fccbb618bf96',
            _type: 'span',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        _key: 'ea2f5f40de65',
        markDefs: [],
        children: [
          {
            text: 'Settings: Ignore Build Step',
            _key: '957c9feb43ee',
            _type: 'span',
            marks: [],
          },
        ],
      },
      {
        style: 'normal',
        _key: '78cc35cb116e',
        markDefs: [],
        children: [
          { _type: 'span', marks: [], text: 'Under ', _key: '01e1287dc4d5' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Your project \u003e Settings \u003e Git',
            _key: '48485e153740',
          },
          {
            _type: 'span',
            marks: [],
            text: ', we can find an option called ',
            _key: '1e732236c0b6',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Ignore Build Step',
            _key: '26c8357a2255',
          },
          { _type: 'span', marks: [], text: '.', _key: '097104adf184' },
        ],
        _type: 'block',
      },
      {
        _type: 'detailedImage',
        caption: "Git settings at Vercel's project config",
        markDefs: null,
        _key: 'b790c5871261',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-3a2f15f3589933efff83f9fc9442f1530548eaff-1035x455-png',
            _type: 'reference',
          },
        },
      },
      {
        children: [
          {
            marks: [],
            text: "It's a single input field where we can specify a custom ",
            _key: 'f8704fca9e3e',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'git diff',
            _key: 'acfab2e211e1',
          },
          {
            _type: 'span',
            marks: [],
            text: ' command.',
            _key: '4bfca75bbad3',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'f78130ba0a72',
        markDefs: [],
      },
      {
        _key: 'da441193c422',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Based on the input placeholder, it seems Vercel uses the following command to decide rather if something has changed or not:',
            _key: '857440497bcd',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        language: 'bash',
        _key: 'b67d50ad362e',
        markDefs: null,
        code: 'git diff --quiet HEAD^ HEAD ./',
        _type: 'code',
      },
      {
        _key: '03eef29a91c9',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I'm not a git specialist but I was pretty sure we could ignore certain files on that. Doing some search of how to ignore folders/files using `git diff` and it's simple.",
            _key: 'a26a5464fe09',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        style: 'normal',
        _key: 'ff294693f808',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'At the end of the same command Vercel uses, we can add ',
            _key: 'fb939609c594',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: ':(exclude)\u003cpath-to-folder-to-exclude',
            _key: '170cd345e280',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: null,
        code: "git diff --quiet HEAD^ HEAD ./ ':(exclude)apps/lambdas'",
        _type: 'code',
        language: 'bash',
        _key: '1451430ff769',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '6f2460746e13',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "And that's it.",
            _key: '2f463fd1139f',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Tip: We can also concatenate more folders by adding the same expression after each other like ',
            _key: 'eac1fff494bc',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: "'(exclude)apps/lambdas' '(exclude)apps/cms' ...",
            _key: 'b356085e378a',
          },
        ],
        _type: 'block',
        style: 'blockquote',
        _key: 'ff4a614dde8b',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '5320c98c99f7',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Now, every time I open a PR to fix something in my ',
            _key: 'b8b67814918d',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'lambdas',
            _key: '96f007dd41cc',
          },
          {
            _type: 'span',
            marks: [],
            text: " code, Vercel will creates a build for that but it'll cancel it right after.",
            _key: 'c5ffdcf67552',
          },
        ],
      },
      {
        children: [
          {
            marks: [],
            text: 'Other useful way is by just specifying the folder you want to listen for changes:',
            _key: 'd7e2c16b3b78',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'fdee10a416f8',
        markDefs: [],
      },
      {
        _type: 'code',
        language: 'bash',
        _key: '993ead6f09ac',
        code: 'git diff --quiet HEAD^ HEAD ./apps/website',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: "The downside is that if something has changed on root level (like global packages) it won't also trigger the build, however this could be solved by combining linting/building via Github Actions or any other CI pipeline.",
            _key: '57a9b06c0743',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '7f753cb7ca02',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'fb16722a072b',
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: '9edbeb11a0c7',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'a10b5447b601',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel',
            _key: '0e30aa034a95',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['0e30aa034a95'],
            text: 'https://vercel.com/support/articles/how-do-i-use-the-ignored-build-step-field-on-vercel',
            _key: 'bece13b8643e',
          },
        ],
        level: 1,
      },
      {
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://stackoverflow.com/questions/4380945/exclude-a-directory-from-git-diff',
            _key: '6efb6f531eef',
          },
        ],
        children: [
          {
            text: 'https://stackoverflow.com/questions/4380945/exclude-a-directory-from-git-diff',
            _key: 'd631a8dda443',
            _type: 'span',
            marks: ['6efb6f531eef'],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '78f03acedc09',
        listItem: 'bullet',
      },
      {
        children: [
          {
            _type: 'span',
            marks: ['5fe1a3edb93f'],
            text: 'https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---word-diff-regexltregexgt',
            _key: 'f542d450b6ca',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '500d5119dcd7',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---word-diff-regexltregexgt',
            _key: '5fe1a3edb93f',
          },
        ],
      },
      {
        children: [
          {
            marks: ['ad4467e75813'],
            text: 'https://gist.github.com/iodic/7daa1667140b1649ded747963a1303d9',
            _key: '60f6826d59c4',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'c3ce6e6bbfbf',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://gist.github.com/iodic/7daa1667140b1649ded747963a1303d9',
            _key: 'ad4467e75813',
          },
        ],
      },
    ],
    slug: 'how-to-prevent-unnecessary-vercel-builds',
    tags: [
      {
        _id: '59d9aa4e-5bf5-4ff5-9ee7-f1adace54f29',
        name: 'CI/CD',
        slug: 'ci-cd',
      },
      {
        _id: '921393b3-8274-4de9-9424-2a3587d0cc60',
        name: 'Deploy',
        slug: 'deploy',
      },
      {
        _id: 'c6918e60-b700-4eb9-9955-07fa201c8c89',
        name: 'Git',
        slug: 'git',
      },
      {
        _id: 'aacf8486-35aa-41ea-be2d-fecdba15e9fa',
        name: 'Vercel',
        slug: 'vercel',
      },
    ],
    _id: '63fd4aa2-8f67-436d-98ff-0f6b57888f34',
  },
  {
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: '254b7a327b68',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In the terminal, if we type the command ',
            _key: 'd96d89cb7dde0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'cal',
            _key: '558e2d0417cc',
          },
          {
            _type: 'span',
            marks: [],
            text: ', it prints the calendar of the current month.',
            _key: 'b8059b989afe',
          },
        ],
      },
      {
        _type: 'tweet',
        _key: '03284aa7ebe8',
        tweetId: '1402120767878336520',
        markDefs: null,
      },
    ],
    slug: 'calendar-preview-on-macos-terminal',
    tags: [
      {
        _id: '2d30c13a-20ce-4a4d-9b8c-36a14798bf43',
        name: 'macOS',
        slug: 'mac-os',
      },
      {
        _id: '11f2128a-81f9-47eb-8800-34b377de704b',
        name: 'Terminal',
        slug: 'terminal',
      },
    ],
    _id: '0f4c2465-2207-427e-8ef8-16916e1e5161',
    publishedAt: '2021-06-08',
    title: 'We can quickly see a calendar preview on macOS terminal',
    language: 'en',
  },
  {
    _id: '672957f8-f11a-4607-b2a8-6380a76cb913',
    publishedAt: '2021-06-08',
    title: 'How to easily identify unhandled rejections in NodeJS',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _key: '1329872746920',
            _type: 'span',
            marks: [],
            text: 'In the current setup of my work, when we have a not handled rejection in a promise, instead of throwing an error it just throws a warning message.',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'b5c0076dbb1a',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'But the problem is that this message does not contain a stack trace that points us to where this is happening. Consequently, when we run our unit tests (around 2k files) concurrently, the warning message shows up in the middle of random tests, making it hard to find where the problem is.',
            _key: '7d3cc23718fd',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '4fb908ff000c',
      },
      {
        style: 'normal',
        _key: '81afd04fe0a6',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Luckily I've found a NodeJS option called ",
            _key: 'b3ac94e2b36e',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '--unhandled-rejections',
            _key: 'b84e79596403',
          },
          {
            _key: 'f92f6713115f',
            _type: 'span',
            marks: [],
            text: ' which allows us to force a runtime error at the moment where this error happens.',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'c0d36ec06626',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Since I don't run ",
            _key: 'a2a5623a3bfa',
          },
          {
            text: 'node',
            _key: '1f77981b5694',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' binary directly, I needed to pass this via environment variable:',
            _key: '632c912acafd',
          },
        ],
        _type: 'block',
      },
      {
        code: 'NODE_OPTIONS=--unhandled-rejections=strict npm run test',
        _type: 'code',
        language: 'bash',
        _key: 'b3b8d2c96792',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'By running our tests with this Node option, now an error is raised in the exact point where the promise was failing.',
            _key: 'a3dc7cc8aef0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '8911cdb50b13',
      },
      {
        children: [
          {
            text: 'Resources',
            _key: '3afc2145ebe2',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: '96ffae0186a8',
        markDefs: [],
      },
      {
        children: [
          {
            marks: ['f90048a89ed3'],
            text: 'https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode',
            _key: '5f3b3d568af4',
            _type: 'span',
          },
          { _type: 'span', marks: [], text: '\n', _key: 'da636fea0082' },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'ef8a0c0e3ba6',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode',
            _key: 'f90048a89ed3',
          },
        ],
      },
    ],
    slug: 'how-to-easily-identify-unhandled-rejections-in-node-js',
    tags: [
      {
        _id: '80894f20-0222-4e49-ade0-69cb07b19a20',
        name: 'Development',
        slug: 'development',
      },
      {
        _id: '45e449ee-0238-4ac1-8077-be5b6eadad55',
        name: 'NodeJS',
        slug: 'node-js',
      },
    ],
  },
  {
    slug: 'how-to-set-a-global-gitignore',
    tags: [
      {
        _id: 'c6918e60-b700-4eb9-9955-07fa201c8c89',
        name: 'Git',
        slug: 'git',
      },
    ],
    _id: 'fe74df24-d766-4c11-b3a4-cc1bca6e0e94',
    publishedAt: '2021-05-26',
    title: 'How to set a global .gitignore',
    language: 'en',
    content: [
      {
        _key: '74d16d1bfba2',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Let's say you want to have a folder or a file for EVERY project but you don't want to commit it.",
            _key: '07a7e6ff64060',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'a5f551f020de',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'For me, these are 2 things:',
            _key: '08d6adc60e9a',
          },
        ],
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://asdf-vm.com/#/',
            _key: '3f4ee907cfe4',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.tool-version',
            _key: 'd3356e61b021',
          },
          {
            _type: 'span',
            marks: [],
            text: ' - file from ',
            _key: '74ee3ccd6c92',
          },
          {
            _type: 'span',
            marks: ['3f4ee907cfe4'],
            text: 'asdf',
            _key: '903fb85a8e78',
          },
          {
            text: ' which species the node version for the current project (e.g. nodejs 12.13.1)',
            _key: '656688a6a823',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '91693c46bb30',
      },
      {
        style: 'normal',
        _key: '761404fadcd1',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://marketplace.visualstudio.com/items?itemName=xyz.local-history',
            _key: 'bd23d1f28f5b',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.history/',
            _key: 'f4042e99d50b',
          },
          {
            _key: '944966f20ae7',
            _type: 'span',
            marks: [],
            text: ' - folder generated by the ',
          },
          {
            _key: '1f2b9b6f84b5',
            _type: 'span',
            marks: ['bd23d1f28f5b'],
            text: 'Local History',
          },
          {
            _type: 'span',
            marks: [],
            text: " extension for VSCode where it generates a copy of a file so I'm able to rollback if I need",
            _key: '34277240ec04',
          },
        ],
        level: 1,
        _type: 'block',
      },
      {
        _key: '19eb159e23f3',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'All I need to do to avoid adding those 2 entries everywhere is:',
            _key: 'e79ac4d35f52',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'ccb40cddbd0a',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Create and open a gitignore file in my user root dir:',
            _key: '46e513096a72',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: 'be7a30e34f3a',
        code: 'code ~/.gitignore',
        _type: 'code',
        language: 'bash',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Add the content I want:',
            _key: 'c1c8dfc6e11f',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'efa60606a3f4',
      },
      {
        code: '.tool-versions\n.history/',
        _type: 'code',
        _key: 'db2963077b34',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f624847a5fa1',
        markDefs: [],
        children: [
          {
            _key: '900a6af2bbca',
            _type: 'span',
            marks: [],
            text: 'Set it in global config:',
          },
        ],
      },
      {
        code: 'git config --global core.excludesfile ~/.gitignore',
        _type: 'code',
        language: 'bash',
        _key: 'c0b94215251c',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: "And that's it. For every project I have git, it will never suggest to commit these two entries:",
            _key: '192be3a9f75e',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '006cb4e4a44b',
      },
      {
        markDefs: [],
        children: [
          {
            _key: '117f1dc2162e',
            _type: 'span',
            marks: [],
            text: 'Resources',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: 'c4bad1e12733',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _key: '517aceca4be3',
            blank: false,
            _type: 'link',
            href: 'https://gist.github.com/subfuzion/db7f57fff2fb6998a16c',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['517aceca4be3'],
            text: 'https://gist.github.com/subfuzion/db7f57fff2fb6998a16c',
            _key: '5935f7a80f71',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'f491cbc4c7f6',
      },
    ],
  },
  {
    _id: '1cced720-582b-48b4-baeb-2ed8e40648d9',
    publishedAt: '2021-05-15',
    title: 'How to ignore a string if contains certain match using RegExp',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'In my CMS, I wanted to disallow any string which contains double quote ',
            _key: '481883a1ee5d0',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '"',
            _key: '894af8d49ca5',
          },
          {
            _type: 'span',
            marks: [],
            text: ' for certain fields.',
            _key: '6d4de9ac33a4',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '0af8b38fa071',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Luckily it allows me pass a Regex to valid it. To do that I needed to:',
            _key: 'b66fb9001137',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5fcbebbf60ae',
      },
      {
        code: '^((?!").)*$',
        _type: 'code',
        language: 'regex',
        _key: '835332a969d3',
        markDefs: null,
      },
      {
        children: [
          { _key: '15fc8ff8de6f', _type: 'span', marks: [], text: 'where:' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '67815a5c29dc',
        markDefs: [],
      },
      {
        children: [
          {
            _key: 'fa3961f0650a',
            _type: 'span',
            marks: ['highlight'],
            text: '^',
          },
          {
            _type: 'span',
            marks: [],
            text: ' matches the begining of the string;',
            _key: 'dbcb8eee7a1d',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '62721d0b5a89',
        listItem: 'bullet',
        markDefs: [],
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '0790960986fa',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: '$',
            _key: '5467993bac7f',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' matches the end of the the string;',
            _key: '0d73c8d2acaf',
          },
        ],
        level: 1,
      },
      {
        _key: '0d52b2e3cc10',
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '(?!")',
            _key: 'fb59403d0589',
          },
          {
            _type: 'span',
            marks: [],
            text: " is a negative lookahead, in other words, it matches double quotes but negate it (don't pick up);",
            _key: '80e61d5b4314',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '( .)*',
            _key: '845a8ca5fe4a',
          },
          {
            _type: 'span',
            marks: [],
            text: ' matches everything else except the previous match (double quote)',
            _key: 'f6cf1269203b',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'd0b86d752e0e',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "So if I type double quote in my field, it won't allow me because the regex returns false:",
            _key: '4f2d47eeed63',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '017f7d10c280',
      },
      {
        _key: 'ccdfb4939d3e',
        code: 'var first = \'hey you\';\nvar second = \'what can I do "for you"\';\n\nvar regex = /^((?!").)*$/gim;\n\nconsole.log(first.match(regex)); // ["hey you"]\nconsole.log(second.match(regex)); // null \u003c- not valid',
        _type: 'code',
        language: 'js',
        markDefs: null,
      },
    ],
    slug: 'how-to-ignore-string-if-contains-certain-match-using-regex',
    tags: [
      {
        _id: '4b838cdc-1b16-49a2-b45b-29277f8cf374',
        name: 'RegExp',
        slug: 'regex',
      },
    ],
  },
  {
    content: [
      {
        style: 'normal',
        _key: '74ae474b2bb5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'For scripting purposes we might want to listen for any page update, like a node updated with an API content or something.',
            _key: '945faa73f6980',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: 'c20acf3440e5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'For that we could use MutationObserver API',
            _key: '8fc85dbc13ba',
          },
        ],
        _type: 'block',
      },
      {
        _key: '624ddc649eaf',
        markDefs: null,
        code: '// The element we want to listen\nconst targetNode = document.querySelector("body");\n\n// Options for the observer (which mutations to observe)\nconst config = { attributes: true, childList: true, subtree: true };\n\n// Callback function to execute when mutations are observed\nconst callback = function (mutationsList, observer) {\n  // Use traditional \'for loops\' for IE 11\n  for (const mutation of mutationsList) {\n    if (mutation.type === "childList") {\n      console.log("A child node has been added or removed.");\n    } else if (mutation.type === "attributes") {\n      console.log("The " + mutation.attributeName + " attribute was modified.");\n    }\n  }\n};\n\n// Create an observer instance linked to the callback function\nconst observer = new MutationObserver(callback);\n\n// Start observing the target node for configured mutations\nobserver.observe(targetNode, config);',
        _type: 'code',
        language: 'js',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f12e5dcccb1e',
        markDefs: [],
        children: [
          {
            _key: '3cdc6b5a3948',
            _type: 'span',
            marks: [],
            text: "With this simple snippet, every time an element has been added or removed or some attribute has changed, it'll console, but of course we could trigger other actions.",
          },
        ],
      },
      {
        _type: 'block',
        style: 'h3',
        _key: '683dd86bcf08',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'fe3ea5f3cb4e',
          },
        ],
      },
      {
        _key: '4488ad65188e',
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'fceadc8e8db4',
            blank: false,
            _type: 'link',
            href: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['fceadc8e8db4'],
            text: 'https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver',
            _key: '4b9053d8b161',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
    ],
    slug: 'how-to-listen-for-any-dom-update',
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        _id: '8e9ad038-1c40-48d7-8d1e-ec03bbc0a9a4',
        name: 'Web',
        slug: 'web',
      },
      {
        _id: '36613ee7-72b4-46eb-a190-4b8d4e8343c7',
        name: 'Observables',
        slug: 'observables',
      },
    ],
    _id: 'f57ed91b-9d40-4a70-92a4-b8690546aa64',
    publishedAt: '2021-05-11',
    title: 'How to listen for any DOM update',
    language: 'en',
  },
  {
    title: 'How to filter everything after a word using regex',
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: '30f043107db9',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Given the follow string:',
            _key: 'c262257846cd0',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'code',
        _key: '87c42aabc0c0',
        code: '/home/raulmelo/development/raulmelo-studio/node_modules/esbuild/lib/main.js',
        markDefs: null,
      },
      {
        style: 'normal',
        _key: '5f3fa1da2d4c',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'I wanted to remove EVERYTHING right after the world ',
            _key: '76526bf02d9e',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'esbuild',
            _key: '28b6be9db230',
          },
          { text: '.', _key: 'f8477d0056b0', _type: 'span', marks: [] },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'I could go with ',
            _key: '3452175f235d',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: "replace('/lib/main.js', '')",
            _key: '568c4f69b5a5',
          },
          {
            _type: 'span',
            marks: [],
            text: ' but this is not future proof. What if in the future it changes to ',
            _key: 'e21f3acd6ac5',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '/lib/index.js',
            _key: '9f0374f4419e',
          },
          { _type: 'span', marks: [], text: '?', _key: 'cdf2debf5283' },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a9fafda87618',
      },
      {
        style: 'normal',
        _key: '208173ca9519',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'So I came up with a regex to do that:',
            _key: '6989b753ea84',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: null,
        code: '/(?\u003c=esbuild).*$/',
        _type: 'code',
        language: 'regex',
        _key: '04d8770f5ead',
      },
      {
        _key: '6694fa51103a',
        markDefs: [],
        children: [
          { _type: 'span', marks: [], text: 'Where:', _key: '3125f3bff750' },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '(?\u003c=esbuild)',
            _key: '5bcc38c04c8f',
          },
          {
            text: ' - is a positive lookbehind. In other words, it needs to contains this group (esbuild) before the match I want to;',
            _key: '5ff5d2d0c5a4',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '665199a95304',
        listItem: 'bullet',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['highlight'],
            text: '.*',
            _key: '7456860b95bd',
          },
          {
            _type: 'span',
            marks: [],
            text: ' - every single character;',
            _key: 'c0c206d2aa4b',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '3ea7d46d2d3c',
        listItem: 'bullet',
      },
      {
        listItem: 'bullet',
        markDefs: [],
        children: [
          {
            text: '$',
            _key: 'c9e648b68c77',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            text: ' - assert possition at the end of a line',
            _key: '67a6e28cb63b',
            _type: 'span',
            marks: [],
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'bb4e1a881f17',
      },
      {
        image: {
          asset: {
            _ref: 'image-43b2ac005ff043d0d69797e67d51b47e58de2d8e-994x174-png',
            _type: 'reference',
          },
          _type: 'image',
        },
        _type: 'detailedImage',
        _key: 'ac753ed765b5',
        markDefs: null,
      },
    ],
    slug: 'how-to-filter-everything-after-a-word-using-regex',
    tags: [
      {
        _id: '4b838cdc-1b16-49a2-b45b-29277f8cf374',
        name: 'RegExp',
        slug: 'regex',
      },
    ],
    _id: 'd7b9fa8b-5072-40ea-898c-93b6b037a6ae',
    publishedAt: '2021-05-08',
  },
  {
    _id: 'a631b420-5408-4e1a-80b4-3ab7eb94144a',
    publishedAt: '2021-05-04',
    title: 'How to get only draft content on Strapi',
    language: 'en',
    content: [
      {
        code: 'query Tils {\n  tils(where: { _publicationState: "preview", published_at_null: true }) {\n    id\n  }\n}',
        _type: 'code',
        language: 'graphql',
        _key: 'a3757f453bf3',
        markDefs: null,
      },
      {
        style: 'normal',
        _key: '73b5eec55458',
        markDefs: [],
        children: [
          {
            _key: '91d1a97875fb',
            _type: 'span',
            marks: [],
            text: 'Or via RestAPI',
          },
        ],
        _type: 'block',
      },
      {
        code: 'http://localhost:1337/tils?_publicationState=preview\u0026published_at_null=true',
        _type: 'code',
        _key: 'd34f209e407b',
        markDefs: null,
      },
    ],
    slug: 'how-to-get-only-draft-content-on-strapi',
    tags: [
      {
        _id: '35f8817b-73f7-4b81-b477-07402d6d9024',
        name: 'Strapi',
        slug: 'strapi',
      },
    ],
  },
  {
    publishedAt: '2021-05-03',
    title: "There's a website that shaming HTML bad practices",
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: '4a4b0606425e',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://www.htmhell.dev/',
            _key: '1658b4b93451',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The site is called ',
            _key: 'c0c5bac243be0',
          },
          {
            _type: 'span',
            marks: ['1658b4b93451'],
            text: 'HTMHell',
            _key: 'fe91d96089b8',
          },
          {
            _type: 'span',
            marks: [],
            text: ' and aggregates a bunch of bad practices while writing HTML markup.',
            _key: 'e4ec589a25f2',
          },
        ],
        _type: 'block',
      },
      {
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-68e7934c755a916affe56fb1a2c0772e03715d86-1102x1054-png',
            _type: 'reference',
          },
        },
        _type: 'detailedImage',
        caption: 'HTMLHell website',
        _key: 'cdf62395ee2e',
        markDefs: null,
      },
      {
        children: [
          {
            text: "The positive aspect of this website is that it shows what's wrong, why is wrong, and also the correct way of doing that based on trustworthy resources.",
            _key: '7c05a817d1e5',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '06d4e46dd25a',
        markDefs: [],
      },
      {
        children: [
          {
            text: "Also, since it's open-source, people can contribute which their finds.",
            _key: '52d71f89e675',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a24bf7ba79ac',
        markDefs: [],
      },
    ],
    slug: 'a-website-that-shaming-html-bad-practices',
    tags: [
      {
        _id: '8663158c-9f89-4969-8194-00df79fa91a1',
        name: 'HTML',
        slug: 'html',
      },
      {
        _id: '8e9ad038-1c40-48d7-8d1e-ec03bbc0a9a4',
        name: 'Web',
        slug: 'web',
      },
    ],
    _id: '25d558e1-3f13-4385-ba86-722dc2225a55',
  },
  {
    _id: '90356044-19eb-4867-a192-b3f8e1be4c86',
    publishedAt: '2021-04-30',
    title: 'A anchor tag without "href" is not focusable',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "If you're trying to test your website tab navigation and the link (anchor tag) is not being focused, it might be the case it's missing ",
            _key: '1b79578785430',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'href',
            _key: '20376ecfc5ca',
          },
          {
            _type: 'span',
            marks: [],
            text: ' attribute:',
            _key: 'e4b8cdfcc8f0',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '20d921c52463',
      },
      {
        markDefs: null,
        code: '\u003ca\u003eI\'m not focusable\u003c/a\u003e\n\n\u003ca href="/"\u003eI\'m focusable\u003c/a\u003e',
        _type: 'code',
        language: 'html',
        _key: 'e687690aac72',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '162c49c52177',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In fact, they also have visually different style:',
            _key: 'b1293c5c78bc',
          },
        ],
      },
      {
        caption: 'Anchor tag with and without href',
        _key: '17bb8464ee1b',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-7ed825ba95fa41beb7cb5695727732114d8ae193-540x174-png',
            _type: 'reference',
          },
        },
        markDefs: null,
        _type: 'detailedImage',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "But this can be a bit tricky when you're using global styles to normalize all anchor styles, no matter its state.",
            _key: 'd70714415abc',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '503afc512b81',
      },
    ],
    slug: 'anchor-tag-without-href-is-not-focusable',
    tags: [
      {
        _id: '8663158c-9f89-4969-8194-00df79fa91a1',
        name: 'HTML',
        slug: 'html',
      },
      {
        _id: '8e9ad038-1c40-48d7-8d1e-ec03bbc0a9a4',
        name: 'Web',
        slug: 'web',
      },
      {
        _id: 'fdbf282e-68a9-4fae-bc74-eeddd0c38290',
        name: 'CSS',
        slug: 'css',
      },
    ],
  },
  {
    publishedAt: '2021-04-28',
    title: 'How to easy fix iTerm2 text navigation (cmd+arrow)',
    language: 'en',
    content: [
      {
        _key: '316151336cc5',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'One thing which bug my mind is the default way to text navigate in iTerm2.',
            _key: 'aefe68bf88720',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            marks: [],
            text: 'When you press ',
            _key: '6f4519b8a64b',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'cmd+arrow-left',
            _key: 'fa101a08a388',
          },
          { _type: 'span', marks: [], text: ' or ', _key: '289fd7e8c305' },
          {
            _key: '374303c9d260',
            _type: 'span',
            marks: ['highlight'],
            text: 'option+arrow left',
          },
          {
            marks: [],
            text: ' for instance it, it throw ',
            _key: '1f9c9683b849',
            _type: 'span',
          },
          {
            _key: 'f5dac4b1e402',
            _type: 'span',
            marks: ['highlight'],
            text: '[D',
          },
          { _key: 'bf3e4f94ef28', _type: 'span', marks: [], text: ' key.' },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'dfcfd564c4e7',
        markDefs: [],
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: "In the best I used to replace what key it send to be able to walk through words. However I've found a better way of doing that.",
            _key: '2279086ea562',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '44536829df81',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '4f59a388fc07',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Just open iTerm2, ',
            _key: '509f9f726796',
            _type: 'span',
          },
          {
            _key: '68f553937519',
            _type: 'span',
            marks: ['highlight'],
            text: 'Profiles -\u003e Edit Profiles -\u003e Keys',
          },
          {
            _type: 'span',
            marks: [],
            text: '. Then you click on ',
            _key: '9d1110f30946',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Presets',
            _key: '028d70a40c3b',
          },
          {
            _type: 'span',
            marks: [],
            text: ' and select: ',
            _key: '297b90bf57ca',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Natural Text Editing',
            _key: '114cec652486',
          },
          { _type: 'span', marks: [], text: '.', _key: 'ad2f5e2627a4' },
        ],
        _type: 'block',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '3940d4b3f4ab',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Now we can have the same behavior as we have in other apps.',
            _key: '5e9a8be32b02',
            _type: 'span',
          },
        ],
      },
      { hr: true, _key: 'f56d429eec46', _type: 'divider', markDefs: null },
      {
        markDefs: [],
        children: [
          {
            _key: 'c4b90754da9d',
            _type: 'span',
            marks: [],
            text: 'Resource',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: '457f5e34cb7e',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://apple.stackexchange.com/a/218639',
            _key: '0b7e80ec1a59',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['0b7e80ec1a59'],
            text: 'https://apple.stackexchange.com/a/218639',
            _key: '9f78955fd150',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '6080f83aa828',
      },
    ],
    slug: 'how-to-easy-fix-iterm2-text-navigation',
    tags: [
      {
        _id: '11f2128a-81f9-47eb-8800-34b377de704b',
        name: 'Terminal',
        slug: 'terminal',
      },
      {
        _id: '7a080e13-b07f-4f94-9397-ca08b30c238f',
        name: 'iTerm2',
        slug: 'iterm2',
      },
      {
        _id: '2d30c13a-20ce-4a4d-9b8c-36a14798bf43',
        name: 'macOS',
        slug: 'mac-os',
      },
      {
        _id: '80894f20-0222-4e49-ade0-69cb07b19a20',
        name: 'Development',
        slug: 'development',
      },
    ],
    _id: 'ef10a2e6-9f05-4b9a-b6ed-e0af736bf0d9',
  },
  {
    _id: '78597527-bebc-4822-969b-5e7a758286e2',
    publishedAt: '2021-04-25',
    title: 'We can choose the suggestion order in VSCode',
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: 'ee91eaa9aaa6',
        markDefs: [],
        children: [
          {
            _key: '9b9c9e7945470',
            _type: 'span',
            marks: [],
            text: 'One thing that always annoyed me is that the suggestions in VSCode always showed up the snippets first and then the methods, properties, etc.:',
          },
        ],
        _type: 'block',
      },
      {
        _type: 'detailedImage',
        alt: 'VSCODE with snippets first',
        caption: 'Snippets on top',
        _key: '7ba47aed253c',
        image: {
          asset: {
            _ref: 'image-bbe487ba60ecd0067cb971eecfe3d691ae221420-521x277-png',
            _type: 'reference',
          },
          _type: 'image',
        },
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Today I've learned we can customize where to show the snippets. To do that you can go to ",
            _key: 'ba2f82e6a821',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Preferences: Open User Settings',
            _key: '7d6659383d01',
          },
          {
            text: ', search for ',
            _key: '7216d7df6f5c',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'suggestions',
            _key: '4ea1ed65ad4d',
          },
          {
            _type: 'span',
            marks: [],
            text: ' and go to the option ',
            _key: 'a5832b06bae5',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Editor: Snippet Suggestion',
            _key: '67f64abbd787',
          },
          { _type: 'span', marks: [], text: '.', _key: '619c9b8b3418' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '72ae2af679f6',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'There you can choose the order, which in my case was ',
            _key: '4abf34cc60dc',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'top',
            _key: 'da55e3e8c73d',
          },
          {
            _type: 'span',
            marks: [],
            text: ' and now will be ',
            _key: 'c0dc466c608a',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'inline',
            _key: '140ecde056c4',
          },
          { _key: '3d41231d46cc', _type: 'span', marks: [], text: ':' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5e069180cb22',
      },
      {
        _key: 'd3df3875f12a',
        image: {
          asset: {
            _ref: 'image-f876b332a8e7386c100eb48a4a6ecb599b3f4bb5-511x278-png',
            _type: 'reference',
          },
          _type: 'image',
        },
        _type: 'detailedImage',
        alt: 'VSCode showing snippets at the bottom',
        caption: 'Snippets at bottom',
        markDefs: null,
      },
    ],
    slug: 'choose-the-suggestion-order-in-vscode',
    tags: [
      {
        _id: 'f53bb0c3-f0c2-4a38-acd3-0491425a8354',
        name: 'VSCode',
        slug: 'vscode',
      },
    ],
  },
  {
    _id: '9715b906-54c1-43e4-b895-e18a07a95d6f',
    publishedAt: '2021-04-19',
    title: 'How to format Rust code "on save" in VSCode',
    language: 'en',
    content: [
      {
        _key: '9a18d1abf3ba',
        markDefs: [],
        children: [
          {
            text: 'For some reason, when we install Rust VSCODE extension the formatter does not work by default.To do that I we need to enforce the formatter via ',
            _key: '5cbe693204ee0',
            _type: 'span',
            marks: [],
          },
          {
            _key: '8f5e0e1841ef',
            _type: 'span',
            marks: ['highlight'],
            text: 'settings.json',
          },
          {
            _type: 'span',
            marks: [],
            text: ' (or User preference):',
            _key: '1c3dd56e151c',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        filename: 'settings.json',
        _type: 'code',
        language: 'json',
        _key: '251341094e44',
        code: '{\n    "[rust]": {\n        "editor.defaultFormatter": "rust-lang.rust", // Makes the magic\n        "editor.formatOnSave": true // Optional\n    },\n}',
        markDefs: null,
      },
    ],
    slug: 'how-to-format-rust-code-on-save-in-vscode',
    tags: [
      {
        _id: '34868430-6363-407e-8c1f-909a81af3046',
        name: 'Rust',
        slug: 'rust',
      },
      {
        _id: 'f53bb0c3-f0c2-4a38-acd3-0491425a8354',
        name: 'VSCode',
        slug: 'vscode',
      },
    ],
  },
  {
    slug: 'how-to-run-cargo-in-a-nested-folder',
    tags: [
      {
        _id: '34868430-6363-407e-8c1f-909a81af3046',
        name: 'Rust',
        slug: 'rust',
      },
      {
        _id: 'b117cc9b-4833-4085-acef-f1fdf99a3d46',
        name: 'Cargo',
        slug: 'cargo',
      },
    ],
    _id: '60ba50b6-2ad6-4d2d-82c9-6bbaeaac5742',
    publishedAt: '2021-04-18',
    title: 'How to run Cargo in a nested folder',
    language: 'en',
    content: [
      {
        _key: '0a12f9eefbb8',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "Let's say you have the following folder structure:",
            _key: '630e40e4cb9d0',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '859525b730a6',
        code: '.\n├── exercise\n└── variables\n    ├── Cargo.lock\n    ├── Cargo.toml\n    └── src\n        └── main.rs',
        _type: 'code',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '038a4bcb4b09',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "You're in root level and wants to run Cargo for ",
            _key: '8e2f29fa0ff3',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'variables',
            _key: '16187d48726c',
          },
          {
            _type: 'span',
            marks: [],
            text: ' folder. All you need to do is specifying ',
            _key: 'e3f9194cdb9c',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '--manifest-path',
            _key: '42567ce21a43',
          },
          { _type: 'span', marks: [], text: ':', _key: '7a68dbe3c7f5' },
        ],
      },
      {
        _type: 'code',
        language: 'bash',
        _key: 'bbc1133935ca',
        code: 'cargo run --manifest-path variables/Cargo.toml',
        markDefs: null,
      },
    ],
  },
  {
    _id: 'e7dca4a1-7862-4352-bc33-0153a5ae844c',
    publishedAt: '2021-04-10',
    title: 'How to delete all local and remote tags from a Github Repo',
    language: 'en',
    content: [
      {
        children: [
          {
            marks: ['strong'],
            text: 'BE CAREFUL',
            _key: 'dcc2c8e7b57d',
            _type: 'span',
          },
          {
            text: " : by doing this you'll completely erase ALL existing tags.",
            _key: 'a237f7007998',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'blockquote',
        _key: '804829ac2b47',
        markDefs: [],
      },
      {
        style: 'normal',
        _key: '34e06eb389b9',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'We can simply run the following commands:',
            _key: 'a000ee7aba88',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: null,
        code: '#Delete local tags.\ngit tag -l | xargs git tag -d\n#Fetch remote tags.\ngit fetch\n#Delete remote tags.\ngit tag -l | xargs git push --delete origin\n#Delete local tasg.\ngit tag -l | xargs git tag -d',
        _type: 'code',
        language: 'bash',
        _key: 'b1f9fe701dee',
      },
    ],
    slug: 'how-to-delete-all-local-and-remote-tags-from-a-github-repo',
    tags: [
      {
        _id: 'c6918e60-b700-4eb9-9955-07fa201c8c89',
        name: 'Git',
        slug: 'git',
      },
    ],
  },
  {
    _id: 'd9b064cc-dc3d-4a61-a767-d20eb85bd28f',
    publishedAt: '2021-04-05',
    title: 'There is a website which generates typography scale',
    language: 'en',
    content: [
      {
        markDefs: [
          {
            href: 'https://type-scale.com/',
            _key: 'b114b64bb6db',
            blank: false,
            _type: 'link',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'The site is ',
            _key: 'e9dad5dd31510',
          },
          {
            _type: 'span',
            marks: ['b114b64bb6db', 'highlight'],
            text: 'https://type-scale.com/',
            _key: '1a12143e348f',
          },
          { _type: 'span', marks: [], text: '.', _key: '1ec251337496' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '36142ebd2d2d',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'It basically allow us creating great typography scale system using different scale rules:',
            _key: '159eac4312ad',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'cfa165f74a80',
        markDefs: [],
      },
      {
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-bb820a16f8564f6dbde477f1253e2d63c51b4456-1197x822-png',
            _type: 'reference',
          },
        },
        _type: 'detailedImage',
        _key: '1bee2cd9c294',
        markDefs: null,
      },
      {
        children: [
          { _type: 'span', marks: [], text: '\n', _key: '0e60287a7132' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3db45110db78',
        markDefs: [],
      },
    ],
    slug: 'there-is-a-website-which-generates-typography-scale',
    tags: [
      {
        _id: 'fdbf282e-68a9-4fae-bc74-eeddd0c38290',
        name: 'CSS',
        slug: 'css',
      },
      {
        _id: '8b484850-323b-433b-80dc-931c44cde897',
        name: 'Typography',
        slug: 'typography',
      },
    ],
  },
  {
    publishedAt: '2021-04-03',
    title:
      "There's a website that offers diverse mock profile picture for free",
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: '5c3ddb997061',
        markDefs: [],
        children: [
          {
            _key: '84daefdc58610',
            _type: 'span',
            marks: [],
            text: 'While developing or design an application we might want to use some placeholder images until we have the final assets.',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://diverseui.com/',
            _key: '2128e55adb35',
          },
        ],
        children: [
          {
            text: 'To make our product more diverse from scratch, we can use a website called ',
            _key: '0aba7363c1e2',
            _type: 'span',
            marks: [],
          },
          {
            text: 'Diverse UI',
            _key: '88feab3459c5',
            _type: 'span',
            marks: ['2128e55adb35'],
          },
          { _type: 'span', marks: [], text: ':', _key: 'aa4d12f67b6b' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3d75196f2f53',
      },
      {
        _type: 'detailedImage',
        markDefs: null,
        caption: 'DiverseUI home page',
        _key: '1277511ec21e',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-ae67d673f1284c1add69e78756e9dcdaa2561eb4-1081x722-png',
            _type: 'reference',
          },
        },
      },
      {
        markDefs: [],
        children: [
          {
            _key: '3f4010b0008b',
            _type: 'span',
            marks: [],
            text: 'Resources',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: 'deee883533a2',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'b304a62a9536',
            blank: false,
            _type: 'link',
            href: 'https://diverseui.com/',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['b304a62a9536'],
            text: 'https://diverseui.com/',
            _key: '11322fd148db',
          },
          { _type: 'span', marks: [], text: '\n', _key: 'd6b2940cc73c' },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '3b37214f0663',
      },
    ],
    slug: 'website-that-offers-diverse-mock-profile-picture-for-free',
    tags: [
      {
        _id: '662fd958-8559-4a5f-8b05-e02e91829b66',
        name: 'Design',
        slug: 'design',
      },
      {
        _id: '4a41f8ac-a65f-4965-8385-8ae73128d315',
        name: 'Assets',
        slug: 'assets',
      },
    ],
    _id: '6af6b591-0136-4b0d-bb00-4f03bf06b56e',
  },
  {
    content: [
      {
        style: 'normal',
        _key: 'd731a7ae4a1a',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'I saw this recommend while doing a design course.',
            _key: 'ca5efc00d49e0',
            _type: 'span',
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'When we want clickable icons, a minimum size it should have (according to Google) is ',
            _key: 'c6870a0ead45',
          },
          {
            marks: ['highlight'],
            text: '24px',
            _key: '577a6f5a0a2a',
            _type: 'span',
          },
          { _type: 'span', marks: [], text: ' x ', _key: 'c5690d7b1c48' },
          {
            _key: '1d433ab29e50',
            _type: 'span',
            marks: ['highlight'],
            text: '24px',
          },
          {
            marks: [],
            text: ' to be comfortable for user click using its finger.',
            _key: 'ccbf65df717c',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e789c1b292c7',
      },
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'ab8df27a56fc',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: 'a511ac0e78c8',
        markDefs: [],
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes',
            _key: 'c600b41a0625',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['c600b41a0625'],
            text: 'https://material.io/design/iconography/system-icons.html#grid-and-keyline-shapes',
            _key: 'a0a48dbbad36',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '423dc17e97a0',
      },
    ],
    slug: 'minimum-size-for-an-icon-be-clicklable',
    tags: [
      {
        _id: '8e9ad038-1c40-48d7-8d1e-ec03bbc0a9a4',
        name: 'Web',
        slug: 'web',
      },
      {
        _id: '81dead31-a517-404a-aa4b-78f6f974ec5f',
        name: 'Icons',
        slug: 'icons',
      },
      {
        _id: '662fd958-8559-4a5f-8b05-e02e91829b66',
        name: 'Design',
        slug: 'design',
      },
    ],
    _id: '7d09ce2a-4b28-4dc6-9f96-b3063b7ed7ad',
    publishedAt: '2021-04-03',
    title:
      'According to Google, the minimum size for an icon be clicklable is 24x24',
    language: 'en',
  },
  {
    tags: [
      {
        _id: 'cd641633-63e0-4f7d-9fb2-07a1249edf83',
        name: 'Github Actions',
        slug: 'github-actions',
      },
      {
        _id: '96f6acec-77a2-4940-b09d-51bb6d036f53',
        name: 'Tooling',
        slug: 'tooling',
      },
      {
        _id: '0eb27c7e-94ee-4d1c-879a-a72b6df9c34c',
        name: 'Lerna',
        slug: 'lerna',
      },
    ],
    _id: '1d26a119-2d41-4e45-ab04-374f8b8843be',
    publishedAt: '2021-03-28',
    title:
      'When publishing npm packages with lerna through GH actions, we need more params to checkout',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'normal',
        _key: 'd278e065f1ed',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Publishing things via pipelines are not a trivial task.',
            _key: 'cfd03483f1070',
            _type: 'span',
          },
        ],
      },
      {
        style: 'normal',
        _key: 'a62104195173',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://github.com/lerna/lerna/issues/2542',
            _key: '0cdd73f92576',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I've found myself struggling to publish my packages in a lerna repo via Github Actions until I find ",
            _key: '0710f81b12e7',
          },
          {
            _type: 'span',
            marks: ['0cdd73f92576'],
            text: 'this FYI post',
            _key: '5250ed656d82',
          },
          { text: '.', _key: '9d47100a6258', _type: 'span', marks: [] },
        ],
        _type: 'block',
      },
      {
        _key: 'c5667453da46',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'In a nutshell, because we always use ',
            _key: '9ed5ee01715b',
          },
          {
            text: 'actions/checkout',
            _key: '3bc956d35262',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' and by default it brings the latest commit, e need to pass a param which says "bring ALL commits".',
            _key: '650bf1c502da',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        _key: '006abd7aa7de',
        markDefs: [],
        children: [
          {
            text: "This is important because lerna (when combined with conventional commits), uses our commit messages to determine what needs to be published or not and also generate release notes, etc. In other words, let's say you have squashed 4 commits and the latest isn't about your packages. Because of the ",
            _key: '1b409f90a0d3',
            _type: 'span',
            marks: [],
          },
          {
            text: 'actions/checkout',
            _key: 'df89f57e9d81',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: " behaviour, lerna will only get that and understand there's nothing to be published.",
            _key: '14503618c416',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        children: [
          {
            text: 'To fix that we need to add a ',
            _key: 'b7a9c6994f3e',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'fetch-depth: "0"',
            _key: 'ae0971c4fd25',
          },
          {
            _type: 'span',
            marks: [],
            text: ' param to the checkout step:',
            _key: 'c464fc742831',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '73a497fbec20',
        markDefs: [],
      },
      {
        _type: 'code',
        markDefs: null,
        language: 'yaml',
        _key: '2074faa6b5dc',
        highlightedLines: '5,8',
        code: 'steps:\n  - uses: actions/checkout@v2\n      with:\n        # pulls all commits (needed for lerna / semantic release to correctly version)\n        fetch-depth: "0"\n\n  # pulls all tags (needed for lerna / semantic release to correctly version)\n  - run: git fetch --depth=1 origin +refs/tags/*:refs/tags/*',
      },
      {
        style: 'h3',
        _key: 'a8fa68e3c322',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: '649d71624753',
          },
        ],
        _type: 'block',
      },
      {
        style: 'normal',
        _key: '1097982a2bc9',
        listItem: 'bullet',
        markDefs: [
          {
            _key: 'f931206311d6',
            blank: false,
            _type: 'link',
            href: 'https://github.com/lerna/lerna/issues/2542',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['f931206311d6'],
            text: 'https://github.com/lerna/lerna/issues/2542',
            _key: 'dac8534db58b',
          },
        ],
        level: 1,
        _type: 'block',
      },
    ],
    slug: 'when-publishing-npm-packages-with-lerna-through-gh-actions-we-need-more-params-to-checkout',
  },
  {
    title:
      'We can decorate an export with @internal to prevent unnecessary d.ts types',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "While creating a JS lib using TypeScript, it's common we want to generate ",
            _key: 'a798a84d06a60',
          },
          {
            text: '.d.ts',
            _key: '92011cb26cd3',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _key: '8113acfb29c3',
            _type: 'span',
            marks: [],
            text: ' files (types).',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '384eef82fee7',
      },
      {
        _key: 'b773b6835ca9',
        markDefs: [],
        children: [
          {
            marks: [],
            text: "But let's say you export something for testing purposes but it's totally internal usage and the type for that should not be created. To solve that we can use an option in tsconfig called ",
            _key: 'add2bfa4c2f1',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'stripInternal',
            _key: 'c23679af941f',
          },
          {
            _type: 'span',
            marks: [],
            text: ' combined with ',
            _key: 'b41240e50107',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '@internal',
            _key: '19442c005a00',
          },
          {
            _key: '54a94fbc32fd',
            _type: 'span',
            marks: [],
            text: ' JSDocs:',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        markDefs: null,
        code: '  {\n    "compileOptions": {\n        // ... your config\n        "stripInternal": true\n    }\n  }',
        filename: 'tsconfig.json',
        _type: 'code',
        language: 'json',
        _key: 'efb9e061b70c',
      },
      {
        language: 'ts',
        _key: '32b9b6c27c46',
        highlightedLines: '3',
        code: '/**\n * Days available in a week\n * @internal\n */\nexport const daysInAWeek = 7;\n\n/**\n  * Calculate how much someone earns in a week \n  */\nexport function weeklySalary(dayRate: number) {\n  return daysInAWeek * dayRate;',
        markDefs: null,
        filename: 'main.ts',
        _type: 'code',
      },
      {
        filename: 'dist/main.d.ts',
        markDefs: null,
        _type: 'code',
        language: 'ts',
        _key: '0b2b8a30dd5a',
        code: '/** Calculate how much someone earns in a week */\nexport declare function weeklySalary(dayRate: number): number;',
      },
      {
        style: 'h3',
        _key: '297b5e86fc1c',
        markDefs: [],
        children: [
          {
            _key: '5cdb527c018a',
            _type: 'span',
            marks: [],
            text: 'Resources',
          },
        ],
        _type: 'block',
      },
      {
        _key: '24c0e56fa713',
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://www.typescriptlang.org/tsconfig#stripInternal',
            _key: '925a9e8c1d40',
            blank: false,
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['925a9e8c1d40'],
            text: 'https://www.typescriptlang.org/tsconfig#stripInternal',
            _key: 'b74147e9f6b3',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
      },
    ],
    slug: 'we-can-decorate-an-export-with-internal-to-prevent-unnecessary-typesa',
    tags: [
      {
        _id: 'b22abac4-e3f7-4090-b166-3788ccab412f',
        name: 'TypeScript',
        slug: 'typescript',
      },
    ],
    _id: '4d6b22c7-269d-4e57-b460-909df981d970',
    publishedAt: '2021-03-09',
  },
  {
    _id: '470dc070-e2f9-4c93-8d52-9af8a6e0e259',
    publishedAt: '2021-02-05',
    title: 'How to disable IPV6 on Ubuntu',
    language: 'en',
    content: [
      {
        _type: 'block',
        style: 'h2',
        _key: '36db8c107862',
        markDefs: [],
        children: [
          {
            _key: 'b8eeb1aa7d90',
            _type: 'span',
            marks: [],
            text: 'For the current session',
          },
        ],
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'First, we need to run ',
            _key: 'c2b878978958',
          },
          {
            _key: 'b960ca8a9f19',
            _type: 'span',
            marks: ['highlight'],
            text: 'ip a',
          },
          {
            marks: [],
            text: ' and check if we have a IPV6 running:',
            _key: '225d241480e3',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'c47194b15be5',
      },
      {
        caption: '"ip a" command',
        _key: '53f23328e9cc',
        image: {
          _type: 'image',
          asset: {
            _ref: 'image-733d849a80296b3aadb253170e42a116d573831e-800x517-png',
            _type: 'reference',
          },
        },
        _type: 'detailedImage',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'If so, we can disable it by running:',
            _key: '3aaa39b01de8',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '457ec2f022f8',
      },
      {
        _type: 'code',
        language: 'bash',
        _key: '3799f2c8714a',
        code: 'sudo sysctl -w net.ipv6.conf.all.disable_ipv6=1\nsudo sysctl -w net.ipv6.conf.default.disable_ipv6=1\nsudo sysctl -w net.ipv6.conf.lo.disable_ipv6=1',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'Now we can ',
            _key: 'd183f619c9fa',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'ip a',
            _key: 'd6faf2eb5bad',
          },
          {
            _key: '687e318a82a8',
            _type: 'span',
            marks: [],
            text: ' over again and see if ',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'inet6',
            _key: '31629fab3611',
          },
          {
            marks: [],
            text: ' has been gone away.',
            _key: '0c255777889b',
            _type: 'span',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '33d1dd6abc39',
      },
      {
        style: 'blockquote',
        _key: 'dab49e535a48',
        markDefs: [],
        children: [
          {
            _key: '4758616e2e0d',
            _type: 'span',
            marks: [],
            text: "When you restart your PC it'll be back.",
          },
        ],
        _type: 'block',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Permanently',
            _key: '7544cb07d525',
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: '2a6ee7f97ba7',
      },
      {
        style: 'normal',
        _key: '6ae76183f154',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'To do that permanently, we have to open our ',
            _key: '1ab009401e7f',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '/etc/sysctl.conf',
            _key: '21fe4bc74118',
          },
          {
            _type: 'span',
            marks: [],
            text: " and set the same values we've ran in the previous section:",
            _key: '032655e99965',
          },
        ],
        _type: 'block',
      },
      {
        code: 'net.ipv6.conf.all.disable_ipv6=1\nnet.ipv6.conf.default.disable_ipv6=1\nnet.ipv6.conf.lo.disable_ipv6=1\n',
        _type: 'code',
        _key: 'edd2195367ee',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            text: 'Then we run ',
            _key: '0c978bcb645a',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'sudo sysctl -p',
            _key: '3d283fcc067a',
          },
          {
            _type: 'span',
            marks: [],
            text: ' to take effect.',
            _key: '34e910904e83',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '7f5a4d65b8a1',
      },
      {
        _type: 'block',
        style: 'h2',
        _key: '33d589a57024',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Forcing update sysctl on reboot',
            _key: 'c9367671cde5',
          },
        ],
      },
      {
        style: 'normal',
        _key: '8a24367fe367',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'If rebooting it does not work, create a ',
            _key: 'fa64d3bb828d',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '/etc/rc.local',
            _key: '90b9753948e8',
          },
          {
            _type: 'span',
            marks: [],
            text: ' file and paste the following snippet:',
            _key: '23c00b37b178',
          },
        ],
        _type: 'block',
      },
      {
        code: '#!/bin/bash\n\n/etc/sysctl.d\n/etc/init.d/procps restart\n\nexit 0',
        filename: '/etc/rc.local',
        _type: 'code',
        language: 'bash',
        markDefs: null,
        _key: '6721b453ba06',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Now, make it executable with:',
            _key: 'babc52f342c6',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'e262e69918ea',
      },
      {
        code: 'sudo chmod 755 /etc/rc.local',
        _type: 'code',
        language: 'bash',
        _key: '2b187be00290',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'This will manually (during the boot) refresh our ',
            _key: '31f6f5b6daa8',
          },
          {
            text: 'sysctl',
            _key: '64408ed76353',
            _type: 'span',
            marks: ['highlight'],
          },
          {
            _type: 'span',
            marks: [],
            text: ' config.',
            _key: 'a097a5f51305',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'c1ae3629ec87',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Re-enabling IPV6',
            _key: 'e2d567891b79',
          },
        ],
        _type: 'block',
        style: 'h2',
        _key: '744585c33c83',
      },
      {
        style: 'normal',
        _key: '943ca31a65a5',
        markDefs: [],
        children: [
          {
            marks: [],
            text: 'To undo all of that, we need to remove the ',
            _key: '59d146567d07',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '/etc/rc.local',
            _key: 'b6508faf2d2f',
          },
          {
            marks: [],
            text: " file we've created and also remove the instructions we've added at ",
            _key: '9a8db9257f5a',
            _type: 'span',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '/etc/sysctl.config',
            _key: 'cbf119ebb675',
          },
          { _key: 'd1234a0782f5', _type: 'span', marks: [], text: '.' },
        ],
        _type: 'block',
      },
      {
        _type: 'block',
        style: 'h2',
        _key: 'a55123a1efca',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'f8230153ed56',
          },
        ],
      },
      {
        children: [
          {
            _type: 'span',
            marks: ['8e2f26cd1d1d'],
            text: 'https://itsfoss.com/disable-ipv6-ubuntu-linux/',
            _key: '2a66f7931f4e',
          },
          { marks: [], text: '\n', _key: '9ba45b74f77f', _type: 'span' },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '0889a76f773a',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://itsfoss.com/disable-ipv6-ubuntu-linux/',
            _key: '8e2f26cd1d1d',
          },
        ],
      },
    ],
    slug: 'how-to-disable-ipv-6-on-ubuntu',
    tags: [
      {
        _id: '4fb032e5-6228-4e32-899c-dc0b723ec142',
        name: 'Linux',
        slug: 'linux',
      },
      {
        _id: '78300660-d38c-4992-9f37-5d9f9451e77b',
        name: 'Ubuntu',
        slug: 'ubuntu',
      },
    ],
  },
  {
    content: [
      {
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'When we decorate a function variable, class or anything with ',
            _key: 'ad6442f511ee0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '@deprecated',
            _key: '9258784c1b26',
          },
          {
            _type: 'span',
            marks: [],
            text: '. By doing that, VSCode will understand and show it with a ',
            _key: 'df917a435c66',
          },
          {
            text: 'strikethrough',
            _key: 'e51e741327af',
            _type: 'span',
            marks: ['strikethrough'],
          },
          { _type: 'span', marks: [], text: ' style:', _key: '7a7feda4cd2e' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '5b0d2c61bc5e',
        markDefs: [],
      },
      {
        code: '/**\n * @deprecated This method is deprecated. Please `render` instead\n */\nfunction oldRender(){}\n\nfunction render(){}\n\nconst TestLib = {\n  oldRender,\n  render\n};\n\nTestLib.oldRender(); // \u003cstrikethrough and deprecate message',
        _type: 'code',
        markDefs: null,
        language: 'js',
        _key: '7c0cb0d176ac',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'And it looks like this:',
            _key: '723b143084a9',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'eff3ef4ee741',
      },
      {
        _key: 'cff3e9ae1bd3',
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: 'image-6d5f7d2c1833668b005329479a67c16f4564d2d6-638x286-png',
          },
        },
        _type: 'detailedImage',
        caption: '@deprecated style',
        markDefs: null,
      },
      {
        children: [
          {
            _key: '83341f6c6123',
            _type: 'span',
            marks: [],
            text: 'Resources',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: 'c963e3373408',
        markDefs: [],
      },
      {
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '0d36d11dcfd7',
        listItem: 'bullet',
        markDefs: [
          {
            href: 'https://jsdoc.app/tags-deprecated.html',
            _key: '32069530eb75',
            blank: false,
            _type: 'link',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['32069530eb75'],
            text: 'https://jsdoc.app/tags-deprecated.html',
            _key: '6aaeabfde899',
          },
        ],
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _key: '21ce821b71a4',
            blank: false,
            _type: 'link',
            href: 'https://code.visualstudio.com/updates/v1_49#_deprecated-tag-support-for-javascript-and-typescript',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['21ce821b71a4'],
            text: 'https://code.visualstudio.com/updates/v1_49#_deprecated-tag-support-for-javascript-and-typescript',
            _key: 'e098e5dd4b75',
          },
          { _type: 'span', marks: [], text: '\n', _key: '375783cb48cd' },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'd8fc128a761a',
      },
    ],
    slug: 'use-jsdocs-visual-indication-on-vs-code-deprecate',
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
      {
        _id: 'f53bb0c3-f0c2-4a38-acd3-0491425a8354',
        name: 'VSCode',
        slug: 'vscode',
      },
    ],
    _id: 'cb2f6f5b-9358-456a-94c0-bcb753e2cde3',
    publishedAt: '2021-01-25',
    title:
      'We can use JSDocs to have a visual indication on VSCode something is deprecated',
    language: 'en',
  },
  {
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
    ],
    _id: '3e1db178-e9b2-4cb1-8822-b3b608c1b1c1',
    publishedAt: '2021-01-18',
    title:
      'Using tilde (~) in a dependency version on package.json specifies a patch or minor range to be installed',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'When we define a version with ',
            _key: '9cc97146422f0',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'Tilde range (~)',
            _key: '2f456394c54e',
          },
          {
            _type: 'span',
            marks: [],
            text: ', it only gets a version from either the specified minor or patch version. For example:',
            _key: '1e10010bcd97',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '3a85979c4e21',
      },
      {
        _key: '0bce59f42333',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong', 'em'],
            text: '"I want to install any minor from version 9.1 of this dependency"',
            _key: '0a46565b342a',
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: '{\n  "dependencies": {\n    "my-dependency": "~9.1"\n  }\n}',
        filename: 'package.json',
        _type: 'code',
        language: 'json',
        _key: '00d877580d8a',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            text: "So it'll be installed always the latest patch version of ",
            _key: 'baf88484c8bb',
            _type: 'span',
            marks: [],
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '9.1.x',
            _key: 'af2d6acc427a',
          },
          { marks: [], text: ' of ', _key: '4611a2c9edc1', _type: 'span' },
          {
            marks: ['highlight'],
            text: 'my-dependency',
            _key: 'fcc18025e0c2',
            _type: 'span',
          },
          { _type: 'span', marks: [], text: '.', _key: '169588314116' },
        ],
        _type: 'block',
        style: 'normal',
        _key: '6489057e2dfe',
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: ['strong', 'em'],
            text: '"I want to install always the latest version `9` of my-dependency"',
            _key: '580f252a005d',
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: '9c6d8d09f76b',
      },
      {
        _key: '96a037c7ffa3',
        code: '{\n  "dependencies": {\n    "my-dependency": "~9"\n  }\n}',
        filename: 'package.json',
        _type: 'code',
        language: 'json',
        markDefs: null,
      },
      {
        _type: 'block',
        style: 'normal',
        _key: '4e8ea8dd10b5',
        markDefs: [],
        children: [
          {
            _key: 'c43d54b6c047',
            _type: 'span',
            marks: [],
            text: "Then it'll install the latest version ",
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '9.x.x',
            _key: '050ffe205e6b',
          },
          { _key: 'a8e7190852b6', _type: 'span', marks: [], text: ' (e.g ' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '9.3.19',
            _key: 'c68a3ee34323',
          },
          {
            text: ') of this dependency. Always under than ',
            _key: 'd1a988abafff',
            _type: 'span',
            marks: [],
          },
          {
            _key: 'fd5bbcda634c',
            _type: 'span',
            marks: ['highlight'],
            text: '10',
          },
          {
            _type: 'span',
            marks: [],
            text: ' but greater than ',
            _key: '5961fd4afa40',
          },
          {
            _type: 'span',
            marks: ['highlight'],
            text: '8',
            _key: 'f2e9fe7ba3ed',
          },
          { marks: [], text: '.', _key: '1fb89fb88d61', _type: 'span' },
        ],
      },
      {
        _key: 'cae40566335e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'e4b76d6058ac',
          },
        ],
        _type: 'block',
        style: 'h3',
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://docs.npmjs.com/cli/v7/using-npm/semver#tilde-ranges-123-12-1',
            _key: 'f775b3760bcb',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['f775b3760bcb'],
            text: 'https://docs.npmjs.com/cli/v7/using-npm/semver#tilde-ranges-123-12-1',
            _key: '9fe6143f3a0b',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'ac2b75dc1bdc',
      },
    ],
    slug: 'using-tilde-dependency-version-package-json-specifies-patch-or-minor-range',
  },
  {
    language: 'en',
    content: [
      {
        style: 'normal',
        _key: 'ac2bc71a597e',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: "I've never realized that everything we pass from the 3thrd + n via setTimeout is actually passed to the callback function:",
            _key: 'd1e432242b0c0',
          },
        ],
        _type: 'block',
      },
      {
        code: "function checkParams(...args){\n  console.log(args); //\u003e ['b', true, 4]\n}\n\nsetTimeout(checkParams, 200, /* From here til the end will be passed*/ 'b', true, 4);",
        _type: 'code',
        language: 'js',
        _key: '39539c606c6e',
        markDefs: null,
      },
      {
        _key: 'e3860bbf8a6b',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resource',
            _key: '660b75bcecd2',
          },
        ],
        _type: 'block',
        style: 'h3',
      },
      {
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#parameters',
            _key: '90a9abcaf72c',
          },
        ],
        children: [
          {
            marks: ['90a9abcaf72c'],
            text: 'https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout#parameters',
            _key: '25cab5d10660',
            _type: 'span',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: 'a460dab3c714',
        listItem: 'bullet',
      },
    ],
    slug: 'settimeout-3thrd-argument-is-passed-to-the-callback',
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
    ],
    _id: 'e3a720d9-0f6b-4e17-a499-e4728933c5e1',
    publishedAt: '2021-01-13',
    title: 'In setTimeout, the 3thrd+n argument is passed to the callback',
  },
  {
    slug: 'how-to-prove-that-arrow-function-does-not-have-this',
    tags: [
      {
        _id: '74087cc8-2774-4aa6-b39d-15f12e457351',
        name: 'JavaScript',
        slug: 'javascript',
      },
    ],
    _id: '2c016258-fb3f-45c4-b0a7-ab2a6848c2ae',
    publishedAt: '2021-01-12',
    title: 'How to prove that arrow function does not have "this"',
    language: 'en',
    content: [
      {
        markDefs: [],
        children: [
          {
            text: 'Arrow function has not its own scope. Instead it resolves it lexically which means that "it has access to whatever exists in the place where it\'s been created".',
            _key: '0872c15d7cb60',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
        _key: 'a1dea62e2422',
      },
      {
        style: 'normal',
        _key: 'be0276332e74',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Keep this in mind, it\'s not like "the this of arrow function is lexical". Actually it\'s "arrow function ',
            _key: '106e1742da93',
          },
          {
            _type: 'span',
            marks: ['strong'],
            text: 'DOES NOT',
            _key: 'de44a2b2d186',
          },
          {
            _key: '475cb4f275b7',
            _type: 'span',
            marks: [],
            text: ' have this".',
          },
        ],
        _type: 'block',
      },
      {
        _key: 'acc5080511c0',
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'To prove that you can try to call an arrow function with ',
            _key: 'a7640224174b',
          },
          {
            _key: '97998d23e00c',
            _type: 'span',
            marks: ['highlight'],
            text: 'call()',
          },
          { _type: 'span', marks: [], text: ', ', _key: '7e4fed2ac305' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'apply()',
            _key: 'bb11e7d452b8',
          },
          { _type: 'span', marks: [], text: ', or ', _key: '8f75a07df5be' },
          {
            _type: 'span',
            marks: ['highlight'],
            text: 'bind()',
            _key: '416f98a634ad',
          },
          {
            text: " and it'll throw an error saying that.",
            _key: '946d52a934ee',
            _type: 'span',
            marks: [],
          },
        ],
        _type: 'block',
        style: 'normal',
      },
      {
        code: 'var obj = {\n  num: 100,\n};\n\nvar addFun = function (a, b, c) {\n  return this.num + a + b + c;\n};\nconsole.log(addFun.call(obj, 1,2,3)); // 106\n\nvar addArrow = (a, b, c) =\u003e this.num + a + b + c;\nconsole.log(addArrow.call(obj, 1,2,3)); //\u003e NaN (because "this"" is undefined',
        _type: 'code',
        language: 'js',
        _key: 'f231e10c6814',
        markDefs: null,
      },
      {
        markDefs: [],
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'Resources',
            _key: 'd00b4fa06a60',
          },
        ],
        _type: 'block',
        style: 'h3',
        _key: '8d33e0e13f6c',
      },
      {
        _type: 'block',
        style: 'normal',
        _key: 'f39eeb71b7cd',
        listItem: 'bullet',
        markDefs: [
          {
            blank: false,
            _type: 'link',
            href: 'https://tc39.es/ecma262/#sec-arrow-function-definitions-runtime-semantics-namedevaluation',
            _key: '28e0608640d9',
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['28e0608640d9'],
            text: 'https://tc39.es/ecma262/#sec-arrow-function-definitions-runtime-semantics-namedevaluation',
            _key: '30e4c18c6d11',
          },
        ],
        level: 1,
      },
      {
        listItem: 'bullet',
        markDefs: [
          {
            _type: 'link',
            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
            _key: '3a576b292e45',
            blank: false,
          },
        ],
        children: [
          {
            _type: 'span',
            marks: ['3a576b292e45'],
            text: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions',
            _key: '6eb85fcd88c5',
          },
        ],
        level: 1,
        _type: 'block',
        style: 'normal',
        _key: '17e355662850',
      },
    ],
  },
];
