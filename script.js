// 1. 預設 12 種食材資料 (使用 Unsplash 免費高品質圖片連結)
const ingredients = [
    { id: 1, name: "白飯", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&auto=format&fit=crop&q=80" },
    { id: 2, name: "咖哩", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&auto=format&fit=crop&q=80" },
    { id: 3, name: "三文魚*3", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=200&auto=format&fit=crop&q=80" },
    { id: 4, name: "肉燥", image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=200&auto=format&fit=crop&q=80" },
    { id: 5, name: "雞胸肉", image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&auto=format&fit=crop&q=80" },
    { id: 6, name: "油", image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=200&auto=format&fit=crop&q=80" },
    { id: 7, name: "馬鈴薯", image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=200&auto=format&fit=crop&q=80" },
    { id: 8, name: "飛魚", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&auto=format&fit=crop&q=80" },
    { id: 9, name: "罐頭", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200&auto=format&fit=crop&q=80" },
    { id: 10, name: "草莓吐司", image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?w=200&auto=format&fit=crop&q=80" },
    { id: 11, name: "蛋", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&auto=format&fit=crop&q=80" },
    { id: 12, name: "修", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&auto=format&fit=crop&q=80" }
];

// 2. 預設食譜組合與對應的成果真實圖片
const recipes = {
    "1-2": { name: "咖哩飯", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&auto=format&fit=crop&q=80" },
    "3-6": { name: "九文魚", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&auto=format&fit=crop&q=80" },
    "1-4": { name: "肉燥飯", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80" },
    "5-6": { name: "雞塊", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=80" },
    "6-7": { name: "薯條", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=80" },
    "8-9": { name: "飛魚罐頭", image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=400&auto=format&fit=crop&q=80" },
    "7-12": { name: "炸薯修", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80" },
    "10-11": { name: "草莓吐司加蛋", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&auto=format&fit=crop&q=80" }
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
