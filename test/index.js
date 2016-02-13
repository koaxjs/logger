/**
 * Imports
 */

import test from 'tape'
import logger from '../src'
import koax from 'koax'
import store from '@koax/store'

/**
 * Tests
 */

test('should work', (t) => {
  let app = koax()
  app.use(logger())
  store(increment, 0, app)

  function increment (state = 0, action) {
    if (action.type === 'INCREMENT') {
      return ++state
    }
  }

  app({type: 'INCREMENT'})
  t.end()
})
