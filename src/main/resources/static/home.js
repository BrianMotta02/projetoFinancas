document.addEventListener('DOMContentLoaded', () => {
    const addPaymentBtn = document.querySelector('.add-payment');
    const paymentSection = document.querySelector('.section:nth-child(2)');
    let paymentCount = 2;

    addPaymentBtn.addEventListener('click', () => {
        const newPaymentRow = document.createElement('div');
        newPaymentRow.className = 'payment-row';
        newPaymentRow.innerHTML = `
            <div class="form-group">
                <label>Espécie de pagamento *</label>
                <select>
                    <option>DINHEIRO</option>
                    <option>BOLETO BANCÁRIO</option>
                </select>
            </div>
            <div class="form-group">
                <label>Condição de pagamento *</label>
                <select>
                    <option>Selecione condição de pagamento</option>
                    <option>30 DIAS</option>
                </select>
            </div>
            <div class="form-group">
                <label>Valor R$ *</label>
                <input type="number" value="0.00" step="0.01">
            </div>
            <button class="remove-btn">✖</button>
        `;

        const removeBtn = newPaymentRow.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            newPaymentRow.remove();
        });

        paymentSection.insertBefore(newPaymentRow, addPaymentBtn);
        paymentCount++;
    });

    const removeBtns = document.querySelectorAll('.remove-btn');
    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            paymentCount--;
        });
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });
});