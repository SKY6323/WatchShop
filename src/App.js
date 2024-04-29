import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import ProductAll from './pages/ProductAll';
import Navbar from './component/Navbar';
import { useAuthContext } from './hooks/useAuthContext';
import ProductDetail from './pages/ProductDetail';
import { Navigate } from  'react'
import { Signup } from './pages/Signup';

/* 
  1. 전체 상품 페이지/상세 페이지/로그인
  2. 전체 상품 페이지 모든 유저 사용 가능
  3. 상세 페이지 로그인 유저만 사용 가능
  4-1. 로그인 버튼 > 로그인 페이지
  4-2. 상세 페이지 클릭 시 로그인 여부 판단 후 로그인이 되어있지 않을 시 로그인 페이지 이동
  4-3. 로그아웃 버튼 > 로그아웃
  5. 상품 검색
*/

function App() {
  const {user} = useAuthContext();

  return (
    <div className="wrap">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/products/:id" element={ user ? <ProductDetail /> : <Navigate replace={true} to='/login' />} />

        {/* 로그인이 되어있다면 로그인 화면이나 회원가입 화면으로 이동X */}
        <Route path="/login"  element={ !user ? <Login /> : <Navigate replace={true} to='/' /> }/>
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
