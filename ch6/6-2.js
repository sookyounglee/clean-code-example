// 간단하게 실행 가능한 함수를 불필요하게 자를 필요는 없다.

// 함수 인라인 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// // 함수 인라인 예제 2
function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);

  return result;
}
