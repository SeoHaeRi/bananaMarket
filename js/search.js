// 뒤로 가기 버튼
const prevBtn = document.querySelector(".prev-btn");
prevBtn.addEventListener("click", () => {
  history.back();
});

// 검색 기능 구현
async function searchId() {
  const accountname = localStorage.getItem("accountname");
  const url = `http://146.56.183.55:5050/${accountname}`;
  const SEARCH_API = ENDPOINT + "/user/searchuser/?keyword=";
  const reqData = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: String,
      accountname: String,
    }),
  });
  const json = await reqData.json();
  console.log(json);
}
searchId();
// async function getUser(searchQuery) {
//   const response = fetch(`${SEARCH_API}${searchQuery}`, reqData);
//   return response;
// }

// function removeAllChilden(parentNode) {
//   while (parentNode.hasChildNodes()) {
//     parentNode.removeChild(parentNode.firstChild);
//   }
// }

// document.querySelector("form").addEventListener("keyup", (event) => {
//   const userList = document.querySelector("main .search-user-cont");
//   removeAllChilden(userList);

//   getUser(event.target.value)
//     .then((res) => res.json())
//     .then((datas) => {
//       if (datas[0]) {
//         const frag = document.createDocumentFragment("ul");
//         datas.forEach((user) => {
//           const li = document.createElement("li");
//           li.className = "user-search";
//           li.innerHTML = `
//           <a href="#none">
//             <img src=${user.image} alt="프로필 사진" class="avatar-img">
//             <p class="user-info">
//               <strong class="market-name">${user.username}</strong>
//               <span class="user-name">@ ${user.accountname}</span>
//             </p>
//           </a>
//         `;
//           frag.appendChild(li);
//         });
//         userList.appendChild(frag);
//       }
//     });
// });
