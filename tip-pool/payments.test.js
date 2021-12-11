describe('Payments test', () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', () => {
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should not add an empty payment with submitPaymentInfo()', () => {
    billAmtInput.value = '';
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should update #paymentTable on appendPaymentTable()', () => {
    let curPayment = createCurPayment();
    console.log(curPayment);
    allPayments['payment1'] = curPayment;
    console.log(allPayments);
    appendPaymentTable(curPayment);
    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    console.log(curTdList);
    expect(curTdList.length).toEqual(4);
    expect(curTdList.innerHTML[0]).toEqual('$100');
    expect(curTdList.innerHTML[1]).toEqual('$20');
    expect(curTdList.innerHTML[2]).toEqual('%20');
    expect(curTdList.innerHTML[3]).toEqual('X');
  });
  it('should create a new payment on createCurPayment()', () => {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '20',
      tipPercent: 20,
    };

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should not create payment with empty input on createCurPayment()', () => {
    billAmtInput = '';
    tipAmtInput = '';
    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
  });

  afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
  });
})
