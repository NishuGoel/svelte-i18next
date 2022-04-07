
describe('module', () => {
  it('should export createI18nStore', async () => {
    const module = await import('./index')

    expect(module).toHaveProperty('createI18nStore')
  })
})
