// 声明 Item

interface Author {
  user_name: string,
  desc: string
}
export interface ItemProps {
  title: string,
  forward: string,
  author: Author,
  img_url: string,
  id: string,
  item_id: string,
  like_count: number
}
