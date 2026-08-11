# Day 01：响应式和待办事项基础

## 练习目标

独立完成一个待办事项列表，支持新增、移除、完成状态切换以及数量统计。

## 对应源码

- [ToDoList22.vue](../../src/components/ToDoList22.vue)
- [HomeView.vue](../../src/views/HomeView.vue)

## 已实现功能

### 新增待办

`inputContent` 通过 `v-model` 接收输入内容。点击“添加”按钮后，`addItem()` 创建 `TodoItem` 并加入 `todoItemList`。

```text
用户输入内容
    ↓ v-model
inputContent
    ↓ 点击添加
addItem()
    ↓ push
todoItemList
    ↓ Vue 响应式更新
页面显示新待办
```

### 移除待办

点击“移除”按钮后，`removeItem()` 使用 `pop()` 移除数组最后一项，并同步调整统计数量。

### 切换完成状态

用户点击复选框后，`isCompleted(item)` 在 `pending` 和 `completed` 之间切换状态，并更新完成数量。

### 显示统计数量

页面显示以下三个数量：

- 总数：`totalCount`
- 完成数：`completedCount`
- 未完成数：`totalCount - completedCount`

## 使用到的 Vue 语法

| 语法           | 当前用途                           |
| -------------- | ---------------------------------- |
| `ref`          | 保存输入内容、待办数组和统计数量   |
| `v-model`      | 将输入框与 `inputContent` 双向绑定 |
| `v-for`        | 遍历 `todoItemList` 并渲染列表项   |
| `v-bind:class` | 根据完成状态添加删除线样式         |
| `v-on:click`   | 处理新增和移除操作                 |
| `v-on:change`  | 处理复选框状态变化                 |

## 第一天的数据结构

```ts
interface TodoItem {
  id: string
  status: 'pending' | 'completed'
  content: string
}
```

## 第一天结束时的实现特点

- 所有状态和操作都集中在 `ToDoList22.vue` 中。
- 移除操作删除数组最后一项，不指定待办 ID。
- 统计数量由新增、移除和切换方法手动维护。
- 列表使用数组下标作为 `key`。

这些内容在 Day 02 中通过组件拆分、按 ID 删除和本地存储继续练习。
