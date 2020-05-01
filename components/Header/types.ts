export interface NavItem {
  title: string
  to?: string
  exact?: boolean
  children?: (NavItem | null)[]
}
