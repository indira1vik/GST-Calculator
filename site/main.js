const billInput = document.getElementById("bill-amount")
const gstInput = document.getElementById("gst-percent")
const finalValue = document.getElementById("final-amount")
const CalcGstTotal = () => {
    const bill = Number(billInput.value)
    const g = Number(gstInput.value)
    gst = g/100
    const totalAmount = (gst*bill) + bill
    finalValue.innerText = `Rs. ${totalAmount.toLocaleString('en-US')}`
}