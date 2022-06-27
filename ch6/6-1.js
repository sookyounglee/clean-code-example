export function printOwing(invoice) {
  // 01. 배너 출력
  printBanner();

  // 02. 합산
  const outstanding = calculateOutstanding(invoice);

  // 03. 마감일 계산
  calculateDueDate(invoice);

  // 04. 화면 출력
  displayInvoice(invoice, outstanding);
}

function printBanner() {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, value) => sum + value.amount, 0);
}

function calculateDueDate(invoice) {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
}

function displayInvoice(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};

printOwing(invoice);
