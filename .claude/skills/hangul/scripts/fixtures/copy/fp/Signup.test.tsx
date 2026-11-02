// test files are skipped: their strings are fixtures, not UI
it('rejects the misspelling', () => expect(fix('확인 되요')).toBe('확인 돼요'));
