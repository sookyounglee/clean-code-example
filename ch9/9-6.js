const STANDARD_GRAVITY = 9.81;

function potentialEnergy(mass, height) {
  // 의미없는 숫자를 적는것은 지양하도록 한다.
  // 의미를 부여할 수 있는 상수로 정의해서 사용하도록 한다.
  return mass * STANDARD_GRAVITY * height;
}
