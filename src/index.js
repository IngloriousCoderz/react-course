import './HooksApp'

async function dynamicImport() {
  const { default: greet, PI } = await import('./module')
  greet()
  console.warn(PI)
}

dynamicImport()
