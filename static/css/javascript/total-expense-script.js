//Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  var totalExpenseInputBox = document.getElementById("total-expense-box");
  sessionStorage.setItem("totalExpense", totalExpenseInputBox);
  totalExpenseInputBox.addEventListener(
    "change",
    handleTotalExpenseInputChange
  );

  var savedValue = sessionStorage.getItem("totalExpense");
  if (savedValue) {
    totalExpenseInputBox.value = savedValue;
  }
});

//Actual Functionality
function handleTotalExpenseInputChange() {
  var totalExpenseInputBox = document.getElementById("total-expense-box");
  var input = totalExpenseInputBox.value;
  console.log(input);
  sessionStorage.setItem("totalExpense", input);
}
