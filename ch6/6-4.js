// 한눈에도 파악하기 쉬운 경우 굳이 변수로 만들 필요는 없다.
export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
