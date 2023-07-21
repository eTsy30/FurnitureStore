export async function action() {
  console.log('action')
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
