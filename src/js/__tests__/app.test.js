import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

describe('Class ArrayBufferConverter:', () => {
  test('should add object', () => {
    const converter = new ArrayBufferConverter();

    converter.load(getBuffer());

    expect(converter.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });
});
