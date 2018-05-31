'use strict';

var testCases = process.browser ? [{
  testName: 'client.removeUserID({userID, cluster}, cb)',
  object: 'client',
  methodName: 'removeUserID',
  callArguments: [{userID: 'hi'}],
  action: 'write',
  expectedRequest: {
    method: 'DELETE',
    body: undefined,
    URL: {pathname: '/1/clusters/mapping', query: {'x-algolia-user-id': 'hi'}}
  }
}] : [{
  testName: 'client.removeUserID({userID, cluster}, cb)',
  object: 'client',
  methodName: 'removeUserID',
  callArguments: [{userID: 'hi'}],
  action: 'write',
  expectedRequest: {
    method: 'DELETE',
    body: undefined,
    URL: {pathname: '/1/clusters/mapping'},
    headers: {'x-algolia-user-id': 'hi'}
  }
}];

module.exports = testCases;
