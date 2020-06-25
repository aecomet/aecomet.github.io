/**
 * 仮装DOMの差分検知用
 */
export default {
  /** 差分なし */
  None: 0,
  /** nodeの型が違う */
  Type: 1,
  /** テキストノードが違う */
  Text: 2,
  /** ノード名(タグ名)が違う */
  Node: 3,
  /** inputのvalueが違う */
  Value: 4,
  /** 属性が違う */
  Attr: 5
} as const;
