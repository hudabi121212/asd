const episodeList = document.getElementById("episode-list");
const playerBox = document.getElementById("player-box");
const animeButtons = document.querySelectorAll(".anime-btn"); // All 안붙이면 첫번째 버튼만 작동함 하나만 가져오는거니까 클래스에서 
const animeList = document.getElementById("anime-list");


const animeDate = {
            hyouka:{
                title: "빙과",
                episodes: [
                        {number:1, url:"https://www.youtube.com/embed/0XWaEBXQyPU"},
                        {number:2, url:"https://www.youtube.com/watch?v=0XWaEBXQyPU"},
                        {number:3, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},
                        {number:4, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},
                        {number:5, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},
                        {number:6, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"}
                ]                
            },

            lain: {
                title: "시리얼익스페리먼트",
                episodes: [
                        {number:1, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},
                        {number:2, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},
                        {number:3, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},
                        {number:4, url:"https://www.youtube.com/embed/dQw4w9WgXcQ"}

                        /*
                        {number:5, url:"https://www.youtube.com/watch?v=22-qDRYQqeA&list=PL30412D335B665FAE"},
                        {number:6, url:"https://www.youtube.com/watch?v=22-qDRYQqeA&list=PL30412D335B665FAE"},
                        {number:7, url:"https://www.youtube.com/watch?v=22-qDRYQqeA&list=PL30412D335B665FAE"},
                        {number:8, url:"https://www.youtube.com/watch?v=22-qDRYQqeA&list=PL30412D335B665FAE"}

                        */
                ]
            }
 };    // 이게 객체를 만든거임 animeDate는 

function toggleEpisodeList()
{
    if(episodeList.style.display === "block")
    {
        episodeList.style.display = "none";
    }

    else
    {
        episodeList.style.display = "block";
    }
}

function hideList()
{
    episodeList.style.display = "none";
}

function showList()
{
    episodeList.style.display = "block";
}

const body = document.body; // 이게 HTML에서 객체를 JS에 가져온거임 BODY를 즉 이런게 DOM인거임 
body.addEventListener("click",function()  //  이렇게 바디 클릭이벤트는 한번만 등록하면됌 
{
    hideList();
}
);



function moveList()
{
    body.addEventListener("click",function(){

            if(episodeList.style.display === "block")
            {
                episodeList.style.display = "none";
                console.log("안녕하시긔");
            }
    });
}

//animeButtons.addEventListener("click",toggleEpisodeList)



for(let i = 0 ; i < animeButtons.length; i++ )
{
    animeButtons[i].addEventListener("click" , function(event){

        event.stopPropagation(); // body로 이벤트 전파막기
        const key = this.dataset.anime; // JS가 자동으로 찾아주는거임 그래서 hyouka 버튼 누르면 hyouka로 인식되고 rain하면 rain으로인식됌
        console.log(key);
        const selectedAnime = animeDate[key]; // 참고로 const를쓰던 let을 쓰던같은데 다만 고정이냐 아니냐만 차이임 알잖아 c++ const랑 동일 
        console.log(selectedAnime);
        console.log(selectedAnime.episodes);
        console.log(selectedAnime.title);
        episodeList.innerHTML = "";  

        for(let j = 0; j < selectedAnime.episodes.length; j++)
        {
            const episodeBtn = document.createElement("button");    // 이미 메모리에 HTML객체로 버튼 만든거임
            const episode = selectedAnime.episodes[j];                 // 이건 알지? 객체 만든거임 episode라는 내가 누른버튼에 애니메의 에피소드객체들로
            episodeBtn.textContent = episode.number + "화";            // 요건 버튼안에 글자넣는거
            episodeList.appendChild(episodeBtn);
            episodeBtn.classList.add("episode-btn"); // 이거 연결해줘야됌 여기서 episodeBtn은 클래스도 ID도 아닌 변수니까 ㅇㅇ 이러면 이제 클래스가된거임


            episodeBtn.addEventListener("click", function(event) {
                event.stopPropagation(); // 요게 body클릭 이벤트 막는거임 


                console.log(episode.url);

                playerBox.style.display = "block";    
                playerBox.innerHTML = `
                <iframe 
                    width="560" 
                    height="315" 
                    src="${episode.url}" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
                `;
                //window.location.href = episode.url; // 이게 객체에있는 url 갖고온거임 
            });
        }
        
        showList();
       
        
      /*  body.addEventListener("click",function(){            // 이렇게 쓰면안됌 왜냐면 이렇게하면 저기 버튼클릭할때마다 이게 쌓이는거니까 

            if(episodeList.style.display === "block")
            {
                episodeList.style.display = "none";
                console.log("안녕하시긔");
            }
        });    


        if(episodeList.style.display === "block")
            {
                hideList();
            }
            
            else{
                showList();
            }
        */
    });
}


episodeList.addEventListener("click", function(event) {
    event.stopPropagation();
});

// animeButtons.addEventListener("click" , toggleEpisodeList); 이 명령어는 하나씩만가능함 버튼이 두개니까 각각 이벤트붙여야되서 반복문으로 써야함









