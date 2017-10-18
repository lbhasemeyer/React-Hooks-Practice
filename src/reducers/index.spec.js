//TESTS
import counter from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', () => {
      var result = counter(undefined, {});
      expect(result['clicked']).toBe(0)      
      expect(result['unicorns']).toBe(0)       
    })

    it('should handle INCREMENT action', () => {
      var result = counter({clicked: 1, unicorns: 0}, { type: 'INCREMENT-COUNTER' });
      expect(result['clicked']).toBe(2)      
      expect(result['unicorns']).toBe(0) 
    })

    it('should handle DECREMENT action', () => {
      var result = counter({clicked: 1, unicorns: 0}, { type: 'DECREMENT-COUNTER' });
      expect(result['clicked']).toBe(0)      
      expect(result['unicorns']).toBe(0) 
    })

    it('should ignore unknown actions', () => {
      var result = counter({clicked: 1, unicorns: 0}, { type: 'unknown' });
      expect(result['clicked']).toBe(1)      
      expect(result['unicorns']).toBe(0) 
    })
  })
})
