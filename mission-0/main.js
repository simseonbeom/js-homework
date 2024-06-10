
const person = {
  name: 'Alice',
  age: 25,
  city: 'Wonderland'
};

// 1. obj가 객체인지 확인하기
// 2. key가 문자인지 확인하기
// 3. 해당 키 값을 가지고 있는지 확인하기


function isObject(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
}



function getValueAtObject(obj,key){

  if(typeof key !== 'string'){
    throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
  }
  
  if(isObject(obj)){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
      return obj[key];
    }
    else{
      throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`);
    }
  }
  else{
    throw new TypeError('getValueAtObject 함수의 첫 번째 인수는 객체 타입 이어야 합니다.');
  }
  
}



const nameList = ['김현주','심선범','안재명'];



// 1. arr 변수가 배열인지 확인하기
// 2. 0보다 크거나 같음 && 배열의 길이보다 작을 때

function getNumberAtArray(arr, index){

  if(Array.isArray(arr)){
    if(index >= 0 && index < arr.length){
      return arr[index];
    }
    else{
      throw new Error('배열에 없는 index입니다.');
    }
  }
  else{
    throw new TypeError('getNumberAtArray 함수의 첫 번째 인수는 배열 타입 이어야 합니다.')
  }
  
}







getNumberAtArray(nameList,2) // 안재명


















