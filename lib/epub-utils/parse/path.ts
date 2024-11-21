export
const join_path = (base: string, appender: string) => {
  if (appender.startsWith('/')) // absolute path
    return appender

  let back_num = 0
  while(appender.startsWith('../')) {
    back_num ++
    appender = appender.slice(3)
  }

  let bases = base.split('/')
  if (back_num)
    bases = bases.slice(0, -back_num)
  return [...bases, ...appender.split('/')]
    .filter(item => item)
    .join('/')
}
