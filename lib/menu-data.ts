export type MenuItem = {
  name: string
  price: string
  tag?: string
  note?: string
}

export type MenuCategory = {
  id: string
  title: string
  subtitle?: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: "main",
    title: "메인메뉴",
    subtitle: "진한 닭육수로 끓여낸 시그니처",
    items: [
      { name: "닭칼국수", price: "9,000" },
      { name: "닭칼국수 (곱배기)", price: "9,500", tag: "인기" },
      { name: "삼계칼국수", price: "11,500" },
      { name: "닭곰탕", price: "9,500" },
      { name: "닭곰탕 (특)", price: "10,000" },
    ],
  },
  {
    id: "meal",
    title: "식사메뉴",
    subtitle: "기본 8,000원 · 추가 시 미니수육세트 변경 가능",
    items: [
      { name: "닭칼수육세트", price: "17,000" },
      { name: "한방수육", price: "23,000" },
      { name: "미니수육 (닭곰탕)", price: "11,000" },
      { name: "현풍왕족발 한접시", price: "25,000" },
    ],
  },
  {
    id: "summer",
    title: "여름메뉴",
    subtitle: "더위를 식히는 시원한 한 그릇",
    items: [
      { name: "김치말이냉국수", price: "9,000" },
      { name: "김치말이냉국수 (특집)", price: "10,000", tag: "특집" },
    ],
  },
  {
    id: "winter",
    title: "겨울메뉴",
    subtitle: "속을 데우는 따뜻한 국물",
    items: [{ name: "멸치칼국수", price: "8,500" }],
  },
  {
    id: "side",
    title: "사이드메뉴",
    subtitle: "함께하면 더 든든한 곁들임",
    items: [
      { name: "김치손만두", price: "5,000" },
      { name: "김치 (추가)", price: "1,000" },
    ],
  },
]

export const hours = [
  { days: "월 – 금", time: "11:00 – 21:00", lastOrder: "라스트오더 20:30" },
  { days: "토 – 일", time: "11:00 – 20:00", lastOrder: "라스트오더 19:30" },
]

export const contact = {
  name: "현풍닭칼국수 강남역삼점",
  slogan: "한 끼의 식사라도 건강을 생각하겠습니다",
  phone: "02-6954-2118",
  phoneHref: "tel:0269542118",
  address: "서울 강남구 테헤란로20길 19",
  addressNote: "강남역과 역삼역 사이",
}
