// 1. 預設 12 種食材資料 (使用 Unsplash 免費高品質圖片連結)
const ingredients = [
    { id: 1, name: "白飯", image: "https://ibw.bwnet.com.tw/image/pool/2018/09/ac3deb2b00f71c517aa141ed10ea4231_620.jpg" },
    { id: 2, name: "咖哩", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3kEpNIb0fkeJMeB3l8NVF6kwdMuqWzOtXwt4_RRC1Yw&s=10" },
    { id: 3, name: "三文魚*3", image: "https://static06.hket.com/res/v3/image/content/3650000/3650447/original_01_1024.jpg" },
    { id: 4, name: "肉燥", image: "https://imgproxy.icook.network/safe/rt:fit/w:1200/el:0/q:80/plain/http://tokyo-kitchen.icook.tw.s3.amazonaws.com/uploads/recipe/cover/481006/16ef8a600a458e77.jpg" },
    { id: 5, name: "雞胸肉", image: "https://cdn-general.cybassets.com/media/W1siZiIsIjc0MDUvcHJvZHVjdHMvMzcwNzA1NDIvMTcxMTIzNTg2Ml9kNjlhMmIyNWEyYWY2M2ZjZmFiZS5qcGVnIl0sWyJwIiwidGh1bWIiLCIyMDQ4eDIwNDgiXV0.jpeg?sha=13037daa5da5028d" },
    { id: 6, name: "油", image: "https://cs-a.ecimg.tw/items/DBAA2IA45445000/000001_1584170917.jpg" },
    { id: 7, name: "馬鈴薯", image: "https://www.hansient.com.tw/wp-content/uploads/Solathin%C2%AE-%E9%80%9F%E6%A8%82%E7%BA%96-%E9%A6%AC%E9%88%B4%E8%96%AF%E8%83%9C%E8%82%BD.jpg" },
    { id: 8, name: "飛魚", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpSaEigNhWJ3MEcy1FrxABjsY_j6f9fYyIYhTxKLBkUrsAquSnuh0O8cl&s=10://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&auto=format&fit=crop&q=80" },
    { id: 9, name: "罐頭", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsO2_OUrXC7N1buuM6dd-b_kEWR2X67FSNEA6cKcv0w&s=10" },
    { id: 10, name: "草莓吐司", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=200&auto=format&fit=crop&q=80" },
    { id: 11, name: "蛋", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=80" },
    { id: 12, name: "修", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrewAPhBASEzDwJXEIxgyAWegR8VLQtdxWMM9xgfOQQ&s" }
];

// 2. 預設食譜組合與對應的成果真實圖片
const recipes = {
    "1-2": { name: "咖哩飯", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=80" },
    "3-6": { name: "九文魚", image: "https://seafoodfriday.hk/wp-content/uploads/2020/10/norwegian-salmon-seafoodfriday.png" },
    "1-4": { name: "肉燥飯", image: "https://d3l76hx23vw40a.cloudfront.net/recipe/bk67-021.jpg" },
    "5-6": { name: "雞塊", image: "https://s7d1.scene7.com/is/image/mcdonalds/chicken-mcnuggets-10-pieces_832x822:1-3-product-tile-desktop?wid=829&hei=513&dpr=off" },
    "6-7": { name: "薯條", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8orcEjSdBJ7IF_F4BKamQRFaO7zdHx4g7i4D9o8x0pSQEd_OciS7k0Le&s=10" },
    "8-9": { name: "飛魚罐頭", image: "https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTpjMDY0ODZhNjJhNTViMDQ0OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyZWM2MWEwMzM2ODowMDA2NTk1ZTI2NDllMDVmEAIYASIJaW1hZ2UvcG5n" },
    "7-12": { name: "炸薯修", image: "https://lens.usercontent.google.com/banana?agsi=CmdnbG9iYWw6OjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAwZWI6MTo0YjFlYWJiMjVjNTMxOTMyOjAwMDA1NWNmZWM3MDAyNmQ6MDAwMDAyZWM2MWEwMzM2ODowMDA2NTk1ZTIyMjZhNWNmEAIYASIJaW1hZ2UvcG5n" },
    "10-11": { name: "草莓吐司加蛋", image: "https://news-images.tvbs.com.tw/legacy/img/upload/2020/04/20/20200420155158-1059cc92.jpg" }
};

// 預設預設的「創意組合/未知料理」圖片
const defaultDishImage = "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&auto=format&fit=crop&q=80";

// 儲存當前選中的食材 (最多 2 個)
let selectedIngredients = [];

// 初始化頁面
document.addEventListener("DOMContentLoaded", () => {
    renderMenu();
});

// 動態渲染左側 12 格菜單 (包含真實圖片)
function renderMenu() {
    const menuGrid = document.getElementById("menuGrid");
    menuGrid.innerHTML = "";

    ingredients.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.id = `ingredient-${item.id}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        div.onclick = () => toggleSelectIngredient(item);
        menuGrid.appendChild(div);
    });
}

// 點擊選擇/取消食材邏輯
function toggleSelectIngredient(item) {
    const index = selectedIngredients.findIndex(i => i.id === item.id);

    if (index > -1) {
        // 已選擇 -> 取消選擇
        selectedIngredients.splice(index, 1);
    } else {
        // 未選擇 -> 判斷是否已滿 2 個
        if (selectedIngredients.length < 2) {
            selectedIngredients.push(item);
        } else {
            alert("盤子只能放 2 種食材喔！");
            return;
        }
    }

    updatePlateUI();
    updateMenuGridUI();
}

// 更新左側菜單樣式 (高亮顯示選中的項目)
function updateMenuGridUI() {
    ingredients.forEach(item => {
        const el = document.getElementById(`ingredient-${item.id}`);
        const isSelected = selectedIngredients.some(i => i.id === item.id);
        if (isSelected) {
            el.classList.add("selected");
        } else {
            el.classList.remove("selected");
        }
    });
}

// 更新右側盤子區塊 UI (將選擇的食材圖片放置於盤中)
function updatePlateUI() {
    for (let i = 0; i < 2; i++) {
        const slotEl = document.getElementById(`slot${i}`);
        const ingredient = selectedIngredients[i];

        if (ingredient) {
            slotEl.innerHTML = `
                <img src="${ingredient.image}" alt="${ingredient.name}">
                <div class="ingredient-name">${ingredient.name}</div>
            `;
        } else {
            slotEl.innerHTML = `<span class="slot-placeholder">食材 ${i + 1}</span>`;
        }
    }
}

// 點擊「製作」按鈕邏輯
function cookDish() {
    if (selectedIngredients.length < 2) {
        alert("請先選擇 2 種食材放在盤子上再開始製作！");
        return;
    }

    // 取得選中食材的 ID 並排序 (例如 1 和 2 組合為 "1-2")
    const ids = selectedIngredients.map(i => i.id).sort((a, b) => a - b);
    const key = `${ids[0]}-${ids[1]}`;

    // 尋找對應食譜，若無設定則顯示預設創意料理
    const result = recipes[key] || {
        name: `創意組合：${selectedIngredients[0].name} + ${selectedIngredients[1].name}`,
        image: defaultDishImage
    };

    // 顯示結果 Modal
    const resultContainer = document.getElementById("resultDishContainer");
    resultContainer.innerHTML = `
        <img src="${result.image}" alt="${result.name}">
        <h3>${result.name}</h3>
    `;

    document.getElementById("resultModal").style.display = "flex";
}

// 關閉 Modal 並重置盤子
function closeModal() {
    document.getElementById("resultModal").style.display = "none";
    selectedIngredients = [];
    updatePlateUI();
    updateMenuGridUI();
}
