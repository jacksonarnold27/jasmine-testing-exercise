describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create and append a new tr on updateServerTable()', () => {
    submitServerInfo();
    expect(serverTbody.length).not.toEqual(0);
  });

  it("shouldn't add an empty input to the table on submitServerInfo()", () => {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });
  
  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });
});
