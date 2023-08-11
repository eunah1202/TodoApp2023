import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useRef, useState } from 'react'; //useRef, useState라는 hook함수를 사용하겠다하고 밑에 써줘야해


function App() {
  // todos라는 배열을 list에다가 전달해->list컴포넌트에서 구조분해할당으로 받아서 -> item컴포넌트로 전달 
  // hook함수: useState / todos:state역할 / setTodos:setState역할
  const [todos, setTodos] = useState([
    // todos: 초기값으로 객체 3개가 들어가있는 배열 만들어준다
    {
      id: 1,
      text: '운동하기',
      checked: true,
    },
    {
      id: 2,
      text: '요리하기',
      checked: true,
    },
    {
      id: 3,
      text: '학원하기',
      checked: false, //false일경우 체크박스outline / true일경우 체크박스채워진형태 ; 삼항연산자 todolistItem에서 사용
    }
  ]);

  const nextId = useRef(4); // id가 4가 되야한다...
  console.log(nextId); //object로 들어가고 current값에 4가 들어옴 

  // 인서트에 내려보낼 함수하나 만들어(단방향(부모->자식)값전달만 가능하기때문)
  // -------useCallback함수는 배열인 todos가 바뀔때만 앞 실행문이 실행이 되도록 즉, 함수를 실행시키고 싶을때 // 이렇게쓰지않으면 매번 함수를 실행시킨다.
  const onInsert = useCallback((value)=>{
    // todo라는 객체 만들어줌 -> 여러개니까 배열로 만들어줌
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    };
    setTodos(todos.concat(todo)); //todos배열에서 todo라는 객체를 추가해준다; concat사용
    nextId.current += 1; //nextId값에 1씩 더해준다 or ++; 
  } ,[todos])

  // list에 먼저 내려보내주고 -> list에서 item으로 전달해야해
  // -------useCallback함수는 배열인 todos가 바뀔때만 앞 실행문이 실행이 되도록 즉, 함수를 실행시키고 싶을때 // 이렇게쓰지않으면 매번 함수를 실행시킨다.
  const onToggle = useCallback((id) =>{
    setTodos(todos.map(todo => todo.id === id? {...todo, checked: !todo.checked} : todo)) 
    //todos의 값을 바꾸는것 : setTodos
    //기존 todos의 값을 map(그대로똑같이가져와 배열로만들어줌)으로 가져와서 객체 하나하나 todo의 id값과 전달받은 id값이 같은지 비교
    //같니? true : 같지않다 false
    // ? {...todo, checked: !todo.checked} : checked의 속성을 기존todo.checked:속성값을 !:반대로바꿔라
    // 스프레드 연산자 ; ...todo ; 객체 앞에다가 ... 붙인것 ; todo객체의 id text등 기존의 속성들을 다 가져오라는얘기
    // 그중 checked속성값만 바꿔라 얘기
    //그리고 바뀐 값(true), 기존의값(false) setTodos에 저장 
  },[todos])

  // remove버튼 누르면 todos가 없어지게 끔 바꾸는것이기에 setTodos사용
  // -------useCallback함수는 배열인 todos가 바뀔때만 앞 실행문이 실행이 되도록 즉, 함수를 실행시키고 싶을때 // 이렇게쓰지않으면 매번 함수를 실행시킨다.

  const onRemove = useCallback((id) =>{
    //filter(조건에 맞는 배열만 가져와 배열로만들어줌)
    // 내가 누른것(id) 내가 누르지것과 같지 않은것(!==)만 남기게 해준다.
    setTodos(todos.filter(todo => todo.id !== id)) 
  },[todos])

  return (
    <TodoTemplate>
      {/* 크랍스형태로 onInsert,todos,onToggle함수 내보내준것 */}
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
    </TodoTemplate>
  );
}

export default App;

// 구성한 기본layout에 맞게 위치 잡아줘;

// 앱컴포넌트에서 함수 만들어줘서 인서트에서 내보내줌 props는 단방향으로 전달이 되기때문에 자식에서 부모가 전달이 안되
// 컴포넌트 인서트에서 받은 insert에서 밸류값넣어서 app에서 호출해준다