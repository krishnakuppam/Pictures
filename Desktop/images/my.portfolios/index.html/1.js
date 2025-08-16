const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income');
const expenseEl = document.getElementById('expense');
const transactionsEl = document.getElementById('transactions');
const form = document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const ctx = document.getElementById('chart').getContext('2d');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function updateValues() {
  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, val) => acc + val, 0);
  const income = amounts.filter(a => a > 0).reduce((acc, val) => acc + val, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, val) => acc + val, 0) * -1;

  balanceEl.textContent = total;
  incomeEl.textContent = income;
  expenseEl.textContent = expense;

  updateChart(income, expense);
}

function renderTransactions() {
  transactionsEl.innerHTML = '';
  transactions.forEach(t => {
    const li = document.createElement('li');
    li.classList.add(t.amount > 0 ? 'income' : 'expense');
    li.innerHTML = `
      ${t.text} <span>${t.amount}</span>
      <button onclick="removeTransaction(${t.id})">❌</button>
    `;
    transactionsEl.appendChild(li);
  });
}

function addTransaction(e) {
  e.preventDefault();
  if (text.value.trim() === '' || amount.value.trim() === '') return;

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  localStorage.setItem('transactions', JSON.stringify(transactions));

  renderTransactions();
  updateValues();

  text.value = '';
  amount.value = '';
}

function removeTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  localStorage.setItem('transactions', JSON.stringify(transactions));
  renderTransactions();
  updateValues();
}

let chart;
function updateChart(income, expense) {
  if (chart) chart.destroy();
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [income, expense],
        backgroundColor: ['#28a745', '#dc3545']
      }]
    }
  });
}

form.addEventListener('submit', addTransaction);

// Initial load
renderTransactions();
updateValues();
