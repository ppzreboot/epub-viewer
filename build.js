// @ts-check
import { build, analyzeMetafile, context } from 'esbuild'

const is_dev = process.argv[2] === 'dev'

if (is_dev) {
  const ctx = await context({
    entryPoints: ['./app/main.ts'],
    bundle: true,
    outfile: './public/dist/main.js',
    logLevel: 'debug',
    format: 'esm',
  })
  await ctx.watch()
  await ctx.serve({
    servedir: 'public'
  })
} else {
  const res = await build({
    entryPoints: ['./app/main.ts'],
    bundle: true,
    outfile: './public/dist/main.js',
    logLevel: 'debug',
    format: 'esm',

    metafile: true,
    minify: true,
    treeShaking: true,
  })
  console.log(
    await analyzeMetafile(res.metafile, { verbose: true })
  )
}
