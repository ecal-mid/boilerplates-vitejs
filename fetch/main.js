async function getJson(path) {
  const resp = await fetch(path)
  if (!resp.ok) throw new Error(`${resp.statusText} "${path}"`)

  const data = await resp.json()
  return data
}

getJson('/test.json')
  .then(data => console.log(data))
  .catch(err => console.log(err))