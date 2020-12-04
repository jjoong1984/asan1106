(function ($) {
  // 로고를 클릭하면 main.html의 #content를 load() 하시오.
  $("#wrap").on(
    "click",
    "#footer .quickMenu > .row > a:nth-child(1), .mainContent #step_area a, .contTit .prev a, .member .joinBtn a",
    function () {
      var url = this.href;
      $("#container > #content").remove();
      $("#container").load(url + " #content");
      return false;
    }
  );

  var usedata;
  $.ajax({
    type: "GET",
    url: "data/doctors.json",
    beforeSend: function (xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    },
    success: function (data) {
      usedata = data;
    },
    error: function (abc) {
      alert(abc.status + "오류발생");
    },
  })

  // var usedata1;
  // $.ajax({
  //   type: "GET",
  //   url: "data/doctors1.json",
  //   beforeSend: function (xhr) {
  //     if (xhr.overrideMimeType) {
  //       xhr.overrideMimeType("application/json");
  //     }
  //   },
  //   success: function (data) {
  //     usedata1 = data;
  //   },
  //   error: function (abc) {
  //     alert(abc.status + "오류발생");
  //   },
  // })


  $("body").on("click", ".medicalContent .mediList a, .menuBox a", function (e) {
    e.preventDefault();
    var url = this.href;
    var part = $(this).attr('class')
    $("#container > #content").remove();
    $("#container").load(url + " #content", function () {
      var newContent = "";
      for (var i in usedata[part]) {
        newContent += `<li><div class="img"><img src="${usedata[part][i].photo}" alt=""></div>`;
        newContent += `<div class="doctorInfo"><strong>${usedata[part][i].name}</strong>`;
        newContent += `<p>${usedata[part][i].depart}</p>`;
        newContent += `<div>${usedata[part][i].about}</div></div></li>`;
      }
      $("#content .part1DoctorList").html(`<ul>${newContent}</ul>`);
    });
  });

  // 헤더박스는 스크롤이벤트시 픽스드됨
  // $(window).scroll(function () {
  //   var sct = $(this).scrollTop();
  //   if (sct >= 90 && !$("#header").hasClass("on")) {
  //     $("#header").addClass("on");
  //   } else if (sct < 90 && $("#header").hasClass("on")) {
  //     $("#header").removeClass("on");
  //   }
  // });

  $("#lnb_menu").on("click", function () {
    $("#navWrap").addClass("on");
    $("#lnb").animate(
      {
        left: "0px",
      },
      500
    );
  });
  $("#lnb_close, .menuBox a").on("click", function () {
    $("#lnb").animate(
      {
        left: "-274px",
      },
      500,
      function () {
        $("#navWrap").removeClass("on");
      }
    );
  });

  // 섹션구역 맨위 한줄광고문구 위로 슬라이딩 시키기
  setInterval(kim, 3000)
  function kim(){
    $('.mainContent .main_noti a:first-child').animate({
      marginTop:'-50px'
    }, 500, function(){
      $(this).appendTo('.mainContent .main_noti').css({
        marginTop:'0px'
      })
    })
  }



})(jQuery);


function join_check() {

  if ( !document.member_form.id.value ) {
    alert('아이디를 입력하세요!')
    document.member_form.id.focus()
    return false
  }

  if ( !document.member_form.pass.value ) {
    alert('비밀번호를 입력하세요!')
    document.member_form.pass.focus()
    return false
  }

  if ( !document.member_form.passok.value ) {
    alert('비밀번호 확인을 입력하세요!')
    document.member_form.passok.focus()
    return false
  }

  if ( !document.member_form.name.value ) {
    alert('이름을 입력하세요!')
    document.member_form.name.focus()
    return false
  }

  if ( !document.member_form.tel.value ) {
    alert('전화번호를 입력하세요!')
    document.member_form.tel.focus()
    return false
  }

  if (document.member_form.pass.value !== document.member_form.passok.value ) {
    alert('비밀번호가 일치하지 않습니다.')
    document.member_form.pass.focus()
    return false
  }

  var eljoinform = document.getElementById('joinform')
  if ( !eljoinform.classList.contains('on') ) {
    alert('아이디 중복체크를 해주세요!!')
    return false
  } 

  document.member_form.submit()

}


function login_check() {

  if ( !document.login_form.id.value ) {
    alert('아이디를 입력하세요!')
    document.login_form.id.focus()
    return false
  }

  if ( !document.login_form.pass.value ) {
    alert('비밀번호를 입력하세요!')
    document.login_form.pass.focus()
    return false
  }

  document.login_form.submit()

}

function id_check() {
  // window.open("url", "창제목", "옵션값")
  window.open("id_check.php?id="+document.member_form.id.value, "", "width=350, height=200, left=300, top=300, scrollbars=no, resizable=yes")
}


