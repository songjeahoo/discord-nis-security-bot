async function fetchUserData() {
    const response = await fetch('/auth/discord/user'); // 사용자 정보 요청 API
    if (response.ok) {
        const userData = await response.json();
        // 사용자 정보를 화면에 표시합니다.
        document.getElementById('user-avatar').src = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`; // 프로필 사진 URL
        document.getElementById('user-name').innerText = userData.username; // 사용자 이름

        // 로그인 버튼 숨기기
        document.getElementById('login-button').style.display = 'none';
        document.getElementById('user-info').style.display = 'flex'; // 사용자 정보 표시
    } else {
        // 로그인하지 않았거나, 다른 오류 발생 시 로그인 버튼 표시
        document.getElementById('login-button').style.display = 'block';
        document.getElementById('user-info').style.display = 'none'; // 사용자 정보 숨기기
    }
}

// 페이지가 로드될 때 사용자 정보를 가져옵니다.
window.onload = function() {
    fetchUserData();
};

// 로그인 버튼 클릭 이벤트
document.getElementById('login-button').addEventListener('click', function() {
    // Discord 로그인 페이지로 이동
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=1297231459987226624&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=email+identify'; // 여기에 OAuth2 URL 입력
});
