// 예제 1
class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return (this._discountedTotal += this._discount);
  }
  // 불필요하게 다른 기능을 넣어서는 안된다.
  set discount(value) {
    this._discount = this._discount - value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, value) => sum + value, 0);
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
