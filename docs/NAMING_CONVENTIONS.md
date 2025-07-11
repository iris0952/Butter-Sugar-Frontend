# 團隊開發 Code Style 公約（前端）

適用技術棧：Vue 3 + Vite + Pinia + UnoCSS + TypeScript（可選）

---

## 📁 資料夾與檔案命名

- 所有檔案與資料夾皆使用小駝峰 `kebabCase`
  - ✅ `userList.vue`
  - ❌ `User-List.vue`, `UserList.vue`
- 每個頁面一個資料夾，預設進入點為 `index.vue`
  - 範例：`src/pages/Home/index.vue`
- 元件放置在 `src/compinents/`，若是 page 專用可放在該 page 目錄下

---

## 🧱 元件命名

- Vue 組件使用 `psscalCase` 命名
  - ✅ `userList.vue`, `baseButton.vue`
- 共用元件請加上前綴，如 `Base`, `App`
  - ✅ `baseInput.vue`, `appHeader.vue`

---

## 🧑‍💻 命名規則

### 變數 / 方法

- 使用 `camelCase`
  - ✅ `userList`, `isLoading`, `fetchData()`
- 布林變數加上 `is`、`has`、`can`
  - ✅ `isOpen`, `hasPermission`

### Pinia Store

- store 檔名使用 `useXxxStore.ts`
- store key 名稱為 `xxxStore`
  - ✅ `useUserStore.ts` → `userStore`

### CSS / UnoCSS Class

- 慎用 `v-bind()` 動態 class，盡量結合條件式 class
- class 統一使用 `kebab-case`

---

## 🎨 格式規範

- 使用 Prettier 格式化：
  - 單引號 `'`
  - 無分號 `;`
  - 2 空白縮排
- 自動格式化設定加在：`.prettierrc`, `.eslintrc`, `.editorconfig`
- 禁用 console.log（必要除錯時請標註）

---

## 🚦 技術選型公約

- 狀態管理統一使用 `Pinia`
- API 請求統一封裝為 `useHttp()` 或自訂 hook，避免重複調用 axios
- CSS 框架使用 UnoCSS，可自由使用原子類或 shortcuts(初期不導入)
- Router 統一於 `/src/router/` 註冊，使用 route name 控制跳轉

### 🆚 對比：

### ❌ 不建議這樣寫：

```tsx
router.push('/about'); // 容易因路徑變動壞掉
```

### ✅ 建議這樣寫：

```tsx
router.push({ name: 'about' }); // 安全、可讀性高
```

- 好處是：
  - **路由 path 改了也不用改跳轉處**（只要 name 沒變）
  - **支援動態參數**也比較清楚可維護：
    ```tsx
    router.push({ name: 'user', params: { id: 123 } });
    ```

---

## ✅ 推薦開發工具設定

- 安裝並啟用以下 VSCode 插件：
  - ESLint
  - Prettier
  - Vue - Official
  - **Vue 3 Snippets (可選用)**
  - UnoCSS
  - **Code Spell Checker (錯字偵測)**
  - 啟用 `format on save`

---

## 📌 注意事項

- 若需額外撰寫複雜邏輯、框架擴充請主動提出與隊友討論
- 所有開發建議統一寫在此文件，**非緊急不要自行發明風格**

---

若有新規範或團隊討論結果，請提交 PR 更新此文件。
