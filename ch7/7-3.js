export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return "high" === this.priority || "rush" === this.priority;
  }
}

const orders = [
  new Order({ priority: "normal" }),
  new Order({ priority: "high" }),
  new Order({ priority: "rush" }),
];

// 외부에서 데이터 조작을 할 수 없도록 캡슐화하기
const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);
