import React from 'react'
import "@/styles/detail.scss";

function detail() {
  return (
    <>
    <div className='main-top'>
      <img src=''/>
      <span>서울 재즈 페스티벌</span>
      <p>전체 관람가</p>
      <p>2024.10.12</p>
      <p>-</p>
      <p>2024.10.13</p>
      <p>토요일</p>
      <p>~</p>
      <p>일요일</p>
      <p>6시간</p>      
    </div>

    {/* //공연정보 div */}
    <div className='info'>
    {/* 장르/캐스팅/가격을 각각 클래스로 묶어서 진행하려함  */}
      <div className='genre'>
        <p>장르</p>
        <p>대중 음악</p>
      </div>
      <div className='cast'>
        <p>캐스팅</p>
        <p>한석규, 신선미, 정재형, 김유진, 송영주, 고상지, 김윤아 등</p>
      </div>
      <div className='place'>
        <p>가격</p>
        <p>1일권 99,000원, 펫존 1일권 109,000원, 펫존 1일권 + MD 148,000원, 얼리버드 티켓 79,000원</p>
      </div>
    </div>
    <div className='poster'>
      <img src=''/>
    </div>
    <div className='map'>
      <p>장소</p>
      <p>서울 숲 공원(가족 마당)</p>
      <p>서울특별시 성동구 뚝섬로 273(성수동 1가)</p>
      <p>02-460-2905</p>
      <p>홈페이지 </p>

    </div>
    
    <div className='footer'>
      <p>이용 약관</p>
      <p>개인 정보 처리 방침</p>
      <p>서울더블유 주식회사</p>
    </div>

    <div className='button'>
      <button>예약하기</button>
    </div>
    </>
  )
}

export default detail