interface PostData {
  id: number;
  name: string;
  content: string
}

export type {PostData}

export const postsData:PostData[] = [
  {
    id: 1,
    name: "reactエンジニア",
    content: "寒くなってきました",
  },
  {
    id: 2,
    name: "phpエンジニア",
    content: "こんにちは",
  },
  {
    id: 3,
    name: "rubyエンジニア",
    content: "喉乾いた",
  },
  {
    id: 4,
    name: "フルスタックエンジニア",
    content: "もう少しで休日",
  },
];