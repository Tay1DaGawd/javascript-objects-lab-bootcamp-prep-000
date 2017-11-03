var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  return Object.assign({}, obj, {prop2: 2 })
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  var obj = { prop: 1 }
  obj['prop2'] = 2
  return obj
}
function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = deleteFromObjectByKey(obj, 'prop')
  Object.assign({}, obj)
  delete obj.prop
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  delete obj.prop
  return obj
}
