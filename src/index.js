/**
 * Imports
 */

import rlogger from 'redux-logger'

/**
 * logger
 */

function logger (options) {
  let l = rlogger(options)
  let dispatch
  return function (action, next, getState) {
    if (!dispatch) {
      dispatch = l({getState})(action => next())
    }
    return dispatch(action)
  }
}

/**
 * Exports
 */

export default logger
