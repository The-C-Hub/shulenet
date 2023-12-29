import { extractTokenFromHeader } from '@common/token/extract-token';

describe('Token functions tests', () => {
  describe('Extract Token function', () => {
    describe('When a valid authorization header is submitted', () => {
      it('Then extract bearer token from header', () => {
        const validRequestHeader = { authorization: 'Bearer aValidJwtToken' };
        const extractedToken = extractTokenFromHeader(validRequestHeader);
        const expectedToken = 'aValidJwtToken';
        expect(extractedToken).toEqual(expectedToken);
      });
    });

    describe('When an invalid request header is submitted', () => {
      it('Then authorization bearer token will be undefined', () => {
        const invalidRequestHeader = { authorization: 'anInvalidJwtToken' };
        const extractedToken = extractTokenFromHeader(invalidRequestHeader);
        expect(extractedToken).toBe(undefined);
      });
    });
  });
});
