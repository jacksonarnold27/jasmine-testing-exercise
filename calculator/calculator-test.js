let easyValues = {
  amount: 10000, rate: 6, years: 10
};
let practiceValues = {
  amount: 243621, rate: 11, years: 27
};
let zeroValues = {
  amount: 0, rate: 0, years: 0
};
let negativeValues = {
  amount: -10, rate: -1, years: -6
};
it('should handle zero and negative inputs correctly', function() {
  expect(calculateMonthlyPayment(zeroValues)).toEqual('NaN');
  expect(calculateMonthlyPayment(negativeValues)).not.toBeInstanceOf(Number);
})
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(easyValues)).toEqual('111.02');
  expect(calculateMonthlyPayment(practiceValues)).toEqual('2355.69');
});
it('should return a string', () => {
  expect(calculateMonthlyPayment(practiceValues)).toBeInstanceOf(String);
  expect(calculateMonthlyPayment(easyValues)).toBeInstanceOf(String);
  expect(calculateMonthlyPayment(zeroValues)).toBeInstanceOf(String);
});
it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(practiceValues).split('.')[1].length).toEqual(2);
  expect(calculateMonthlyPayment(easyValues).split('.')[1].length).toEqual(2);
});

/// etc
