// 모바일 네비게이션 버튼 이벤트

function navBtn(){
    document.getElementById('navM').style.display = 'block';
    document.getElementById('navbtn').style.display = 'none';
    document.getElementById('navbtnC').style.display = 'block';
}

function navBtnC(){
    document.getElementById('navM').style.display = 'none';
    document.getElementById('navbtnC').style.display = 'none';
    document.getElementById('navbtn').style.display = 'block';
}