'use strict';

var testCases = process.browser ? [{
  testName: 'client.assignUserID({userID, cluster}, cb)',
  object: 'client',
  methodName: 'assignUserID',
  callArguments: [{userID: 'hi', cluster: 'the big one'}],
  action: 'write',
  expectedRequest: {
    method: 'POST',
    body: {cluster: 'the big one'},
    URL: {pathname: '/1/clusters/mapping', query: {'x-algolia-user-id': 'hi'}}
  }
}] : [{
  testName: 'client.assignUserID({userID, cluster}, cb)',
  object: 'client',
  methodName: 'assignUserID',
  callArguments: [{userID: 'hi', cluster: 'the big one'}],
  action: 'write',
  expectedRequest: {
    method: 'POST',
    body: {cluster: 'the big one'},
    URL: {pathname: '/1/clusters/mapping'},
    headers: {'x-algolia-user-id': 'hi'}
  }
}];

module.exports = testCases;
