export type AppName = 'About' | 'Settings' | 'Stats' | 'Music' | 'Message'

export interface DesktopApp {
  name: AppName
  icon_img: string
  isOpen: boolean
  x_axis: number
  y_axis: number
  z_index?: number
}
