const sendData = (text) => {
  return {
    type: 'TEST_ACTION',
    payload: text
  }
}

export default sendData;