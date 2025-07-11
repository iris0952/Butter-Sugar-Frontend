# 解撰寫指引 README

### 📘 `README_註解撰寫指南.md`

> 🧠 本文件提供本團隊統一的註解撰寫風格，提升協作效率與程式可讀性。請團隊開發者務必依照以下原則進行註解。

---

## 📌 註解撰寫的核心原則

| 原則                                          | 說明                                  |
| --------------------------------------------- | ------------------------------------- |
| 🧠 **解釋「為什麼這樣做」而不是「做了什麼」** | 說明邏輯、目的、業務條件              |
| 🧱 **只在「需要思考的邏輯」上註解**           | 一般變數、標準語法不需解釋            |
| 💡 **使用標準註解標籤**                       | 如 `// TODO:`、`// HACK:`、`// NOTE:` |
| 📦 **API、Store、邏輯區塊都應加上說明**       | 讓新人能快速理解模組內容              |

---

## 🧩 註解類型與範例

### 1️⃣ 功能區塊註解

> 用來分隔檔案中的不同邏輯模組，幫助閱讀者快速定位

```tsx
// ---------- 場域相關 API ----------
```

---

### 2️⃣ 函式註解（說明功能與用途）

```tsx
// ✅ 取得場域清單，供下拉選單選擇使用
export const getAreaList = async () => {
  return axios.get('/api/area/areaList');
};
```

---

### 3️⃣ 業務邏輯註解（說明為何這樣寫）

```tsx
// 若使用者未登入，則強制跳回首頁
if (!authStore.isLogin) router.push('/');
```

---

### 4️⃣ 特殊處理註解（HACK / TODO / NOTE）

```tsx
// HACK: 後端尚未提供 status，先寫死為成功
res.status = 0;

// TODO: 等 UI 設計完成後補上 loading 動畫

// NOTE: 這邊使用 deep clone 是因為會改動原始物件
```

---

### 5️⃣ 型別註解（未使用 interface 時）

```tsx
// params: { areaId: string, isActive: boolean }
```

---

## 📌 團隊統一命名慣例（補充）

| 類別       | 命名範例                               |
| ---------- | -------------------------------------- |
| API 方法   | `getXxxList`, `createXxx`, `updateXxx` |
| Store 狀態 | `xxxList`, `selectedXxx`, `isLoading`  |
| 元件名稱   | `XxxCard.vue`, `XxxModal.vue`          |
| composable | `useXxx.ts` (ex: `useFormValidation`)  |

---

## ⛔ 不建議的註解寫法

```tsx
// 宣告一個變數
const a = 1;

// 執行一個 for 迴圈
for (let i = 0; i < 5; i++) { ... }
```

> ❌ 這類註解沒有意義，請省略

---

## 📎 建議工具設定（選用）

- ESLint 開啟 `no-warning-comments` → TODO/HACK/XXX 會自動提示
- Prettier 保持註解格式一致性
- 也可以自訂 VSCode snippet 加快撰寫註解標籤
