import React, { useCallback, useState } from 'react'
import { MdAdd } from "react-icons/md"; //md:머터리얼 디자인 사용하겠다~ 얘기 {사용할 아이콘이름} -> 본문에 컴포넌트 처럼 사용하는것 ex<MdAdd />
import "../styles/TodoInsert.scss"
function TodoInsert({onInsert}) {
  // state를 만드는것 
  // insert에서 입력한 값을 value에다가 저장되게끔한다
  const [value,setValue] = useState(""); //이거 치면 위에 import 떠야해

  // input에서 뭔가를 입력하는 e가발생한것 ; setValue함수를 사용해 value값 바꿔준것 
  const onChange = useCallback((e) =>{
    console.log(e);
    setValue(e.target.value);
  // --------------빈배열이여도 매번 실행이 되고
  },[])

  const onSubmit =useCallback((e)=>{
    // App컴포넌트에서 보내준 함수 받아서 onSubmit버튼 누르면 list에 생길 수 있게 여기다가 작성해준것
    // 이 value값이 app컴포넌트에 전달된다.
    onInsert(value);
    setValue("");
    // onsubmit이벤트 발생되면 브라우저에서 새로고침을 발생됨 그거 방지하기위해 preventDefault써줌
    e.preventDefault();
    // -----------위setValue으로 value가 바뀔때마다 (onInsert가 실행되야함)실행해라하고 써줘야해 빈배열로 놔두면 X
  },[value])

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      {/* input에다가 뭔가 입력하면 내용이 바뀌는것 : onChange란 이벤트 발생되면 = {onChange란 함수에 저장해라} */}
      <input type="text" placeholder='할일을 입력하세요' onChange={onChange} value={value} />
      <button type="submit"> <MdAdd /> </button>
    </form>
  )
}

export default TodoInsert

// class형 컴포넌트에서 1)state와 setState로 써서 값지정, 변경해줬음 2)생명주기함수 componentDidMount() 사용가능 but 지금 사용X

// 함수형 컴포넌트 + 위 것들 대체(Hooks) 
// Hook함수에서 state, setState대신에 useState()를 사용한다 ; 하나의 상태값만 관리할 수 있다. 
// const [value,setValue] = useState(초기값 지정);

// ex)const [isLoading(state), setIsLoading(setState)] = useState(true);
// ex)const [movies(state), setMovies(setState)] = useState([]);