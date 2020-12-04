<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>아산병원</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
    
    <div id="wrap">

    <?php 
        session_start();
        if ( isset($_SESSION['userid']) ) { 
            $userid = $_SESSION['userid']; 
            $username = $_SESSION['name']; 
        } else { $userid = ''; }
    ?>
         <header id="header">
           <div class="row">
                <div id="lnb_menu" class="lnb_menu">
                    <img src="images/bg_header_lnb.png" alt="메뉴열기">
                </div>
                <div id="navWrap">
                    <nav id="lnb">
                        <div class="member">
                            <?php if(!$userid) { ?>
                                <div class="inBtn loginBtn"><a href="login_form.php">로그인</a></div>
                                <div class="inBtn joinBtn"><a href="join.html">회원가입</a></div>
                            <?php } else { ?>
                                <div class="inBtn"><?php echo $username ?>님 환영합니다.</div>
                                <div class="inBtn"><a href="logout.php">로그아웃</a></div>
                                <div class="inBtn"><a href="#none">정보수정</a></div>
                            <?php } ?>
                        </div>

                        <ul class="menuBox">
                            <li><a href="part1.html" class="part1">가정의학과</a></li>
                            <li><a href="#">메뉴2</a></li>
                            <li><a href="#">메뉴3</a></li>
                            <li><a href="#">메뉴4</a></li>
                            <li><a href="#">메뉴5</a></li>
                        </ul>
                        <div class="reserveBtn">
                            <a href="tel:1688-7575">예약및문의 1688-7575</a>
                        </div>
                        <div id="lnb_close" class="lnb_close">
                            <img src="images/bg_header_lnb_active.png" alt="메뉴닫기">
                        </div>
                    </nav>
                </div>
                <h1 class="logo">
                    <a href="index.php"><img src="images/img_header_logo.png" alt="서울아산병원"></a>
                </h1>
                <div class="search">
                    <a href="#"><img src="images/img_topSerch.png" alt="검색"></a>
                </div>
           </div>
        </header>

        <section id="container">
    <div id="content" class="loginContent">
        <div class="contTit">
            <div class="prev">
                <a href="index.php">
                    <img src="images/img_prev.png" alt="이전페이지">
                </a>
            </div>
            <h2>로그인</h2>
        </div>

        <div id="login_box">
            <form name="login_form" method="post" action="login.php">
                <fieldset>
                    <legend>로그인</legend>
                    <p>
                        <label for="idtext">아이디</label>
                        <input type="text" name="id" id="idtext">
                    </p>
                    <p>
                        <label for="pass">비밀번호</label>
                        <input type="password" name="pass" id="pass">
                    </p>
                </fieldset>
                <button type="button" onclick="login_check()">로그인</button>
            </form>
        </div>

    </div>
</section>

       <footer id="footer">
           <div class="quickMenu">
               <div class="row">
                   <a href="map.html">오시는길</a>
                   <a href="#">모바일진료카드</a>
                   <a href="#">진료/검사결과조회</a>
               </div>
           </div>
           <div class="csCenter">
               <div class="contact">
                   <a href="tel:1688-7575">1688-7575</a>
                   <a href="#" target="_blank"><img src="images/img_youtube.png" alt="유튜브"></a>
                   <a href="#" target="_blank"><img src="images/img_naverblog.png" alt="블로그"></a>
               </div>
               <div class="privacy">
                   <a href="#"><span>개인정보처리방침</span></a>
                   <a href="#"><span>PC버젼보기</span></a>
               </div>
               <p>
                   &copy; Asan Medical Center. All rights reserved.
               </p>
           </div>
       </footer> 

    </div>

    <div id="onlyMobile">
        이 사이트는 모바일에서만 보입니다.
    </div>

    <script src="js/asan.js"></script>
</body>
</html>