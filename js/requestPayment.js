function requestPayment() {
    var paymentDetails = {
        total: {
            label: "Загальна сума",
            amount: { currency: "USD", value: "10.00" },
        },
    };

    var paymentOptions = {
        requestPayerName: true,
        requestPayerEmail: true,
        requestPayerPhone: true,
    };

    var paymentRequest = new PaymentRequest([paymentDetails], paymentOptions);

    paymentRequest
        .show()
        .then(function(paymentResponse) {
            // Обробка платежу і відправка на сервер
            paymentResponse.complete("success");
        })
        .catch(function(error) {
            console.error("Помилка оплати: ", error);
        });
}