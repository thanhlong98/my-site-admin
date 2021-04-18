export interface IMenuDataChild {
  title: string
  icon?: string
  dest: string
}

export interface IMenuData {
  title: string
  dest: string
  icon?: string
  childs?: IMenuDataChild[]
}
