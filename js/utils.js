function isIterable(obj) {
  return typeof obj[Symbol.iterator] === 'function';
}

function toArrayIfNot(obj){
    if (obj == null) {
        return ['null'];
    }
    let isArray = Array.isArray(obj);
    let hasIterable = isIterable(obj);
    if(isArray){
        
    }else if(hasIterable){
        obj = Array.from(obj);
        
    }else{
        obj = [obj];
    }
    return obj;
}


