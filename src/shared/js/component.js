
/**
 * 공통 UI 스크립트
 * - 헤더 고정
 * - GBN 메뉴 인터랙션
 * - 아코디언 메뉴
 * - 드롭다운 버튼
 * - 셀렉트 메뉴
 * - 탭
 * - 날짜 선택기
 * - 숫자 입력 필드
 */

document.addEventListener('DOMContentLoaded', function () {
const toggleLinks = document.querySelectorAll('.link_2th:not(.off)');

    toggleLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const submenu = this.nextElementSibling;
            const parentLi = this.closest('li');
            const isCollapsed = this.classList.contains('collapsed');

            // 1. 모든 메뉴 초기화
            toggleLinks.forEach(function (otherLink) {
                const otherLi = otherLink.closest('li');
                const otherSubmenu = otherLink.nextElementSibling;

                otherLink.classList.add('collapsed');
                otherLi.classList.remove('on');

                if (otherSubmenu && otherSubmenu.classList.contains('lm_3th')) {
                    otherSubmenu.classList.remove('show');
                }
            });

            // 2. 현재 메뉴에 무조건 .on 추가
            parentLi.classList.add('on');

            // 3. 3depth가 있고 닫혀 있었다면 열기
            if (submenu && submenu.classList.contains('lm_3th') && isCollapsed) {
                this.classList.remove('collapsed');
                submenu.classList.add('show');
            }
        });
    });

    // 서브메뉴 항목 클릭 시 active 클래스 설정
    const submenuLinks = document.querySelectorAll('.lm_3th a');

    submenuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // 모든 서브메뉴에서 active 제거
            submenuLinks.forEach(function (item) {
                item.classList.remove('active');
            });

            // 현재 클릭 항목에 active 추가
            this.classList.add('active');

            console.log('선택된 메뉴:', this.textContent.trim());
        });
    });

    // 초기 상태 - 전부 닫힘, collapsed 추가
    const allSubmenus = document.querySelectorAll('.lm_3th');
    const allToggleLinks = document.querySelectorAll('.link_2th:not(.off)');

    allSubmenus.forEach(function (submenu) {
        submenu.classList.remove('show');
    });

    allToggleLinks.forEach(function (link) {
        link.classList.add('collapsed');
        link.closest('li').classList.remove('on');
    });

    // 옵션: 첫 번째 메뉴 열고 싶을 경우
    // if (toggleLinks.length > 0 && toggleLinks[0].nextElementSibling) {
    //     toggleLinks[0].classList.remove('collapsed');
    //     toggleLinks[0].nextElementSibling.classList.add('show');
    //     toggleLinks[0].closest('li').classList.add('on');
    // }



  
  // ✅ 드롭다운 버튼
  const menuButtons = document.querySelectorAll('.menu_btn');
  menuButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      const isOpen = dropdown.classList.contains("show");

      document.querySelectorAll(".dropdown_menu").forEach(menu => menu.classList.remove("show"));
      document.querySelectorAll(".menu_btn").forEach(b => b.classList.remove("active"));

      if (!isOpen) {
        dropdown.classList.add("show");
        btn.classList.add("active");
      }
    });
  });

  document.addEventListener("click", function () {
    document.querySelectorAll(".dropdown_menu").forEach(menu => menu.classList.remove("show"));
    document.querySelectorAll(".menu_btn").forEach(b => b.classList.remove("active"));
  });





//   // ✅ 모든 .select_search에 대해 각각 처리
// document.querySelectorAll('.select_search').forEach(function (selectBox) {
//   const label = selectBox.querySelector('.select_search__label');
//   const options = selectBox.querySelectorAll('.select_search__item');

//   // 옵션 클릭 시: 텍스트 반영하고 닫기
//   options.forEach(function (option) {
//     option.addEventListener('click', function () {
//       label.innerHTML = option.textContent;
//       selectBox.classList.remove('active');
//     });
//   });

//   // 라벨 클릭 시: 셀렉트 박스 열기/닫기
//   label.addEventListener('click', function () {
//     if (selectBox.classList.contains('view_mode')) return;
//     selectBox.classList.toggle('active');
//   });
// });

// ✅ Date Picker
$( "#reign_start, #reign_end").datepicker();

//한글적용을 위해 추가
 $.datepicker.setDefaults({
        dateFormat: 'yymmdd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

  // ✅ 하위 탭 바인딩 함수
  function initInnerTabs(scope = document) {
    const innerTabWraps = scope.querySelectorAll('.inner_tab_wrap');

    innerTabWraps.forEach(innerTabWrap => {
      const innerTabItems = innerTabWrap.querySelectorAll('.inner_tab_list .inner_tab_item');
      const innerTabContents = innerTabWrap.querySelectorAll('.inner_tab_content');

      innerTabItems.forEach(tab => {
        tab.addEventListener('click', function () {
          innerTabItems.forEach(t => t.classList.remove('active'));
          innerTabContents.forEach(c => c.classList.remove('active'));
          this.classList.add('active');
          const target = innerTabWrap.querySelector('#' + this.dataset.tab);
          if (target) target.classList.add('active');
        });
      });
    });
  }

  // ✅ 상위 탭 기능 + 하위 탭 동시 초기화
  const tabWrap = document.querySelector('.tab_wrap');
  if (tabWrap) {
    const tabItems = tabWrap.querySelectorAll('.tab_list .tab_item');
    const tabContents = tabWrap.querySelectorAll('.tab_content');

    tabItems.forEach(tab => {
      tab.addEventListener('click', function () {
        tabItems.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        this.classList.add('active');

        const target = tabWrap.querySelector('#' + this.dataset.tab);
        if (target) {
          target.classList.add('active');
          initInnerTabs(target); // 해당 상위 탭 콘텐츠에 속한 하위 탭 바인딩
        }
      });
    });

    // 페이지 최초 로드 시 첫 번째 탭의 하위 탭 바인딩
    const firstActive = tabWrap.querySelector('.tab_content.active');
    if (firstActive) initInnerTabs(firstActive);
  }

  // ✅ 숫자 입력 필드
  document.querySelectorAll('.custom_number_wrap').forEach(function (wrap) {
    const input = wrap.querySelector('.custom_number_input');
    const btnMinus = wrap.querySelector('.btn_number.minus');
    const btnPlus = wrap.querySelector('.btn_number.plus');
    const min = parseFloat(input.getAttribute('min')) || 0;
    const max = parseFloat(input.getAttribute('max')) || 9999;
    const step = parseFloat(input.getAttribute('step')) || 1;

    btnMinus.addEventListener('click', function () {
      let val = parseFloat(input.value) || min;
      if (val > min) {
        let next = val - step;
        if (next < min) next = min;
        input.value = Number(next).toFixed(step % 1 === 0 ? 0 : 1);
      }
    });

    btnPlus.addEventListener('click', function () {
      let val = parseFloat(input.value) || min;
      if (val < max) {
        let next = val + step;
        if (next > max) next = max;
        input.value = Number(next).toFixed(step % 1 === 0 ? 0 : 1);
      }
    });

    input.addEventListener('input', function () {
      let val = parseFloat(input.value) || min;
      if (val < min) input.value = min;
      if (val > max) input.value = max;
    });
  });
});

// layer popup 스크립트
$(function () {
  // 모달 열기
  $('.js_open_layer').on('click', function () {
    const targetSelector = $(this).data('target');
    if (targetSelector) {
      $('.nsr_layer').css('display', 'block'); // 공통 오버레이 보여주기
      $(targetSelector).css('display', 'block'); // 해당 모달만 열기
    }
  });

  // 모달 닫기 (아이콘, 하단 닫기 버튼, 오버레이 클릭 시)
  $(document).on('click', '.layer_btn_delete, .btn--secondary.lg, .nsr_layer', function (e) {
    // 오버레이 클릭했는데 내부 요소 클릭이면 무시
    if ($(this).hasClass('nsr_layer') && !$(e.target).hasClass('nsr_layer')) return;

    $('.nsr_layer').css('display', 'none'); // 오버레이 숨기기
    $('.over_layer, .chatai_layer').css('display', 'none'); // 모든 모달 숨기기
  });

});
