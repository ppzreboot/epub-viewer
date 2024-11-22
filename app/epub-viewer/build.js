// @ts-check
import { build, analyzeMetafile, context } from 'esbuild'

// @ts-ignore
const is_dev = process.argv[2] === 'dev'

if (is_dev) {
  const ctx = await context({
    entryPoints: ['main/index.ts', 'service-worker/index.ts'],
    bundle: true,
    outdir: 'asset/script',
    logLevel: 'debug',
    format: 'esm',
  })
  await ctx.watch()
  await ctx.serve({
    servedir: 'asset',
  })
} else {
  const res = await build({
    entryPoints: ['main/index.ts', 'service-worker/index.ts'],
    bundle: true,
    outdir: 'asset/script',
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
