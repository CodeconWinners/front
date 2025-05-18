export const sanetizeText = (text: string) => {
  return text.replace(/<[^>]*>/g, '').trim()
}