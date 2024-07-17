const isProd = Boolean(import.meta.env.PROD)

export const site = {
  url: 'https://cheatsheet.hetplein-roleplay.nl',
  title: 'NextGen'
} as const

export const etc = {
  advertisedSheetCount: 12
} as const

export const disqus = {
  enabled: true,
  host: 'https://cheatsheet.hetplein-roleplay.nl'
} as const

export const googleAnalytics = {
  enabled: isProd,
  measurementId: 'G-0000000000'
} as const

export const github = {
  repositoryUrl: 'https://github.com/FreedomNXG/cheatsheet',
  branch: 'master'
} as const

export const urls = {
  newCheatsheetUrl: 'https://github.com/FreedomNXG'
} as const

export const carbon = {
  enabled: isProd
  // src: 'https://cdn.carbonads.com/carbon.js?serve=CE7IK5QM&placement=devhintsio'
  // src: 'https://pubsrv.devhints.io/carbon.js?serve=CE7IK5QM&placement=devhintsio'
} as const

export const categories = [
  'Analytics',
  'Ansible',
  'Apps',
  'C-like',
  'CLI',
  'CSS',
  'Databases',
  'Devops',
  'Elixir',
  'FiveM',
  'Git',
  'HTML',
  'Java & JVM',
  'JavaScript',
  'JavaScript libraries',
  'Jekyll',
  'Ledger',
  'Markup',
  'macOS',
  'Node.js',
  'PHP',
  'Python',
  'Rails',
  'React',
  'Ruby',
  'Ruby libraries',
  'Vim',
  'Fitness',
  'Others'
]

export const announcement = {
  id: '2024-07-17',
  title: `We gaan live`,
  body: [
    `Vanaf vandaag hebben we een Database met alle informatie over Development.`,
    ``,
    `Hulp Nodig stel gerust vragen op onze discord.`
  ].join('\n')
}
