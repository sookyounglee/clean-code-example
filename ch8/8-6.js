// 예제 1 (비슷한것끼리는 최대한 가까운곳에 위치하도록해서 코드를 읽을때 흐름이 깨지지 않도록 한다.)
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
