export function inNewEngland(state) {
  // 함수내부에서는 필요한 값만 받아서 처리할 수 있도록 한다.
  // 의존도를 낮추도록 한다.
  // aCustomer.address.state ==> state
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(state);
}
