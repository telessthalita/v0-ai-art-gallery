export interface Image {
  id: number
  name: string
  url: string // Changed from image_url to url
  model: string
  date?: string // Changed from created_at to date
}
