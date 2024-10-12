const Payment = require('../models/paymentModel');

module.exports.markAsPaid = async (req, res) => {
  try {
    const { paymentId } = req.params;
    const payment = await Payment.findById(paymentId);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });

    payment.status = 'paid';
    await payment.save();
    res.json({ message: 'Payment marked as paid', payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
