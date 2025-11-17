document.addEventListener('DOMContentLoaded', () => {
  // ====== textarea 자동 높이 ======


  // ====== 공통 요소 선언 ======
  const chatMain = document.querySelector('.chat-main');
  const header = document.querySelector('.chatai-header');
  const shadow = document.querySelector('.chat-main__shadow');
  const scrollBtn = document.querySelector('.scroll-btn--bottom');

  if (!chatMain) return;

  // ====== 스크롤 상태 처리 함수 ======
  function handleScrollState() {
    const scrollTop = chatMain.scrollTop;
    const scrollBottom = chatMain.scrollHeight - scrollTop - chatMain.clientHeight;
    const threshold = 50;

    console.log('scrollTop:', scrollTop);
    console.log('scrollBottom:', scrollBottom);

    // 헤더 그림자 (필요 시)
    if (header) {
      header.classList.toggle('is-scrolled', scrollTop > 0);
    }

    // 버튼 + 하단 그림자
    if (scrollBtn && shadow) {
      if (scrollBottom > threshold) {
        console.log('✅ show-scroll-btn 조건 만족');
        chatMain.classList.add('show-scroll-btn');
      } else {
        console.log('❌ 조건 불충족, 제거');
        chatMain.classList.remove('show-scroll-btn');
      }
    }
  }

  // ====== 초기 상태에서도 실행
  handleScrollState();

  // ====== 스크롤 이벤트 연결
  chatMain.addEventListener('scroll', handleScrollState);

  // ====== ↓ 버튼 클릭 시 하단 이동
  if (scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      chatMain.scrollTo({
        top: chatMain.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  
});