// 4位工作人員資料 (僅包含名字、職稱與簡單介紹)
const teamMembers = [
    {
        name: "恩恩",
        role: "行政總廚",
        desc: "除了吃飯睡覺 嗑cp，其他都不會"
    },
    {
        name: "王令",
        role: "副主廚",
        desc: "號稱台東珍妮佛，我家比芭比家還大"
    },
    {
        name: "小廢mymymy",
        role: "甜點師小鈺",
        desc: "甜點算啥？我只想吃飯睡覺玩手機"
    },
    {
        name: "草履蟲",
        role: "高大帥",
        desc: "愛好看動漫"
    }
];

// 頁面載入後自動動態渲染工作人員卡片
document.addEventListener("DOMContentLoaded", () => {
    renderTeamMembers();
});

function renderTeamMembers() {
    const teamGrid = document.getElementById("teamGrid");
    teamGrid.innerHTML = "";

    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "team-card";
        card.innerHTML = `
            <div class="team-name">${member.name}</div>
            <div class="team-role">${member.role}</div>
            <div class="team-desc">${member.desc}</div>
        `;
        teamGrid.appendChild(card);
    });
}