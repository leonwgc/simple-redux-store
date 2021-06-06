'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var redux = require('redux');
var react = require('react');
var reactRedux = require('react-redux');

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Update = 'Update';
var initstate = {};

var app = function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initstate;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case Update:
      {
        return _objectSpread2(_objectSpread2({}, state), action.payload);
      }

    default:
      return _objectSpread2({}, state);
  }
};

var createRootReducer = function createRootReducer() {
  return redux.combineReducers({
    app: app
  });
};

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
var update = function update(dispatch) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return dispatch({
      type: Update,
      payload: data
    });
  };
};

function useUpdateStore() {
  var dispatch = reactRedux.useDispatch();
  return react.useCallback(function (payload) {
    update(dispatch)(_objectSpread2({}, payload));
  }, [dispatch]);
}

var composeEnhancers = redux.compose;

if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
  composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({
    trace: true
  });
}

var configureStore = function configureStore(preloadedState) {
  var store = redux.createStore(createRootReducer(), preloadedState, composeEnhancers(redux.applyMiddleware()));
  return store;
};

Object.defineProperty(exports, 'Provider', {
  enumerable: true,
  get: function () {
    return reactRedux.Provider;
  }
});
Object.defineProperty(exports, 'useSelector', {
  enumerable: true,
  get: function () {
    return reactRedux.useSelector;
  }
});
exports.configureStore = configureStore;
exports.default = configureStore;
exports.useUpdateStore = useUpdateStore;
