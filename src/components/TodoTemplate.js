// 함수형 컴포넌트로 전부 만들어 rfce
import React from 'react';
import '../styles/TodoTemplate.scss';
function TodoTemplate({children}) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
      {/* app.js에서 기본 레이아웃 잡았던 todoTemplate의 자식들을 {children}으로 받아서 써줄 수 있다 */}
    </div>
  )
}

export default TodoTemplate //껍데기 역할을 해줌