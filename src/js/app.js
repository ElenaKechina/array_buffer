class ArrayBufferConverter {
  constructor() {
    this.arrayBuffer = null;
  }

  load(arrayBuffer) {
    this.arrayBuffer = new ArrayBuffer(arrayBuffer.byteLength);
    this.arrayBuffer = arrayBuffer;
  }

  toString() {
    let resultString = '';
    const bufferView = new Uint16Array(this.arrayBuffer);

    bufferView.forEach((char) => {
      resultString += String.fromCodePoint(char);
    });

    return resultString;
  }
}

export default ArrayBufferConverter;
