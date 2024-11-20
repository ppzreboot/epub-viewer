import { build, analyzeMetafile, context } from 'esbuild'

// const ctx = await context({
//   entryPoints: ['./src/main.ts'],
//   bundle: true,
//   metafile: true,
//   outfile: './public/dist/main.js',
//   logLevel: 'debug',
// })

// await ctx.serve({
//   servedir: 'public'
// })

const res = await build({
  entryPoints: ['./src/main.ts'],
  bundle: true,
  metafile: true,
  outfile: './public/dist/main.js',
  logLevel: 'debug',
  minify: true,
  treeShaking: true,
})

console.log(
  await analyzeMetafile(res.metafile, { verbose: true })
)
