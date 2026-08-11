# Day 02：组件通信、生命周期和本地存储

## 当前状态

进行中。

待办事项已经拆分为表单、列表、列表项和统计组件，并加入 `useTodoStorage()`。当前还需要验证刷新后的统计数量是否与恢复的列表一致。

## 练习目标

- 使用 `props` 将数据从父组件传给子组件。
- 使用 `emit` 将用户操作从子组件传回父组件。
- 使用 `onMounted` 在组件挂载后读取本地待办。
- 使用 `watch` 在待办变化后写入本地存储。
- 将本地存储逻辑提取为组合式函数 `useTodoStorage()`。

## 对应源码

- [ToDoListParent2.vue](../../src/components/Split/ToDoListParent2.vue)
- [TodoForm2.vue](../../src/components/Split/TodoForm2.vue)
- [TodoList2.vue](../../src/components/Split/TodoList2.vue)
- [TodoListItem2.vue](../../src/components/Split/TodoListItem2.vue)
- [TodoStats2.vue](../../src/components/Split/TodoStats2.vue)
- [TodoItem2.ts](../../src/components/Split/TodoItem2.ts)
- [useTodoStorage.ts](../../src/components/Split/useTodoStorage.ts)

## 组件结构

```text
ToDoListParent2
├── TodoForm2
├── TodoList2
│   └── TodoListItem2
└── TodoStats2
```

## 组件职责

| 组件或文件            | 当前职责                                         |
| --------------------- | ------------------------------------------------ |
| `ToDoListParent2.vue` | 持有待办数组和统计数量，处理新增、勾选和删除操作 |
| `TodoForm2.vue`       | 接收用户输入并上报 `add-item` 事件               |
| `TodoList2.vue`       | 接收待办数组，循环渲染列表项，并转发列表项事件   |
| `TodoListItem2.vue`   | 显示单条待办，上报勾选和删除事件                 |
| `TodoStats2.vue`      | 接收总数和完成数并显示统计结果                   |
| `TodoItem2.ts`        | 定义多个组件共用的 `TodoItem` 类型               |
| `useTodoStorage.ts`   | 读取和保存 `localStorage` 中的待办数组           |

## Props 向下传递

父组件拥有 `todoItemList`，通过 `items` 传给 `TodoList2`。`TodoList2` 遍历数组，再将每一项的 `id`、`content` 和 `checked` 传给 `TodoListItem2`。

```text
ToDoListParent2.todoItemList
    ↓ :items="todoItemList"
TodoList2.items
    ↓ v-for="item in items"
TodoListItem2
    ├── :id="item.id"
    ├── :content="item.content"
    └── :checked="item.checked"
```

统计数据也由父组件向下传递：

```text
ToDoListParent2.totalCount1
    ↓ :totalCount1234
TodoStats2

ToDoListParent2.finishCount
    ↓ :finishCount
TodoStats2
```

## Emit 向上传递

子组件不直接修改父组件的待办数组。用户操作先由 `TodoListItem2` 发出事件，`TodoList2` 接收后继续向上转发，最终由 `ToDoListParent2` 修改数据。

```text
TodoListItem2
    ↓ emit
TodoList2
    ↓ emit 转发
ToDoListParent2
    ↓ 修改 todoItemList
Vue 响应式更新子组件
```

## 完整数据流

```text
ToDoListParent2 的 todoItemList
    ↓ props
TodoList2
    ↓ v-for
TodoListItem2
    ↓
页面显示复选框、待办内容和删除按钮
    ↓
用户点击复选框或删除按钮
    ↓ emit
TodoListItem2
    ↓ emit 转发
TodoList2
    ↓ 事件监听
ToDoListParent2
    ↓
根据 id 修改 todoItemList
    ↓ Vue 响应式更新
TodoList2 重新遍历
    ↓
TodoListItem2 和 TodoStats2 重新渲染
```

## 新增待办流程

`TodoForm2` 管理自己的输入框内容。点击添加按钮后，它只负责发出事件；真正创建并保存 `TodoItem` 的操作由父组件完成。

```text
用户在 TodoForm2 输入内容
    ↓ 点击添加
TodoForm2.addItem()
    ↓ emit('add-item', inputContent)
ToDoListParent2 监听 @add-item
    ↓ handleAddItem(value)
创建 TodoItem
    ↓ push
todoItemList
    ↓ props 自动更新
TodoList2 和 TodoStats2 重新渲染
```

## 切换完成状态流程

```text
用户点击 TodoListItem2 的复选框
    ↓ @change
TodoListItem2.handleCheck(event)
    ↓ emit('checked-item', id, checked)
TodoList2.handleCheckbox(id, checked)
    ↓ emit('checked-item', id, checked)
ToDoListParent2.handleCheckBox(id, checked)
    ↓
根据 id 找到待办并修改 checked
    ↓
重新计算 finishCount
    ↓
TodoListItem2 样式和 TodoStats2 数量更新
```

## 删除待办流程

```text
用户点击 TodoListItem2 的删除按钮
    ↓ @click
TodoListItem2.handlerRemove(id)
    ↓ emit('removeItem', id)
TodoList2.handlerRemove(id)
    ↓ emit('removeItem', id)
ToDoListParent2.handleRemove(id)
    ↓
根据 id 过滤 todoItemList
    ↓
重新计算 totalCount1 和 finishCount
    ↓
TodoList2 和 TodoStats2 重新渲染
```

## 本地存储流程

### 页面挂载后读取

`useTodoStorage()` 在组件执行 `setup` 时注册 `onMounted`。调用它的 `ToDoListParent2` 挂载完成后，再从浏览器读取待办。

```text
ToDoListParent2 执行 setup
    ↓ 调用 useTodoStorage()
注册 onMounted 回调
    ↓
ToDoListParent2 完成挂载
    ↓
localStorage.getItem('todo-list')
    ↓
JSON.parse(storeTodos)
    ↓
赋值给 todoItemList.value
    ↓
列表重新渲染
```

对应代码：

```ts
onMounted(() => {
  const storeTodos = localStorage.getItem('todo-list')

  if (storeTodos) {
    todoItemList.value = JSON.parse(storeTodos) as TodoItem[]
  }
})
```

### 待办变化后保存

`watch` 明确监听 `todoItemList`。`deep: true` 让监听器能够发现数组内部的新增、删除和 `checked` 属性变化。

```text
todoItemList 发生变化
    ↓ watch
获得最新 items
    ↓ JSON.stringify(items)
转换成 JSON 字符串
    ↓ localStorage.setItem
保存到 todo-list
```

对应代码：

```ts
watch(
  todoItemList,
  (items) => {
    localStorage.setItem('todo-list', JSON.stringify(items))
  },
  { deep: true },
)
```

## `watch` 在当前功能中的作用

```ts
watch(source, callback, options)
```

| 参数       | 当前代码中的值       | 作用                         |
| ---------- | -------------------- | ---------------------------- |
| `source`   | `todoItemList`       | 指定要监听的响应式数据       |
| `callback` | `(items) => { ... }` | 数据变化后保存最新数组       |
| `options`  | `{ deep: true }`     | 监听数组内部和待办属性的变化 |

当前监听器没有配置 `immediate: true`，因此创建监听器时不会立即把初始空数组写入本地存储。

## `onMounted` 在当前功能中的作用

```ts
onMounted(() => {
  // 组件挂载完成后执行
})
```

这里传给 `onMounted` 的是一个回调函数。Vue 先保存这个函数，等组件挂载完成后再调用它。当前回调只读取一次本地待办，不会在后续数据变化时重复执行。

## 当前观察到的问题

### 刷新后统计数量可能不正确

`useTodoStorage()` 恢复的是 `todoItemList`，但 `ToDoListParent2` 中的 `totalCount1` 和 `finishCount` 仍以 0 初始化。刷新页面后列表可以恢复，统计组件可能继续显示 0，直到用户再次新增、勾选或删除待办。

判定方式：

1. 添加至少两条待办并勾选其中一条。
2. 确认页面显示总数 2、完成数 1。
3. 刷新页面。
4. 如果列表仍有两条，但统计显示总数 0、完成数 0，说明统计数量没有随本地数据恢复。

本问题只记录现象，本次文档整理不修改业务代码。

## 验证记录

| 验证项   | 操作位置        | 验证动作             | 完成判定               | 当前状态               |
| -------- | --------------- | -------------------- | ---------------------- | ---------------------- |
| 新增待办 | `TodoForm2`     | 输入内容并点击“添加” | `TodoList2` 显示新待办 | 待页面验证             |
| 切换状态 | `TodoListItem2` | 点击复选框           | 样式和完成数同步更新   | 待页面验证             |
| 删除待办 | `TodoListItem2` | 点击删除按钮         | 对应 ID 的待办消失     | 待页面验证             |
| 本地保存 | 浏览器页面      | 新增待办后刷新       | 列表数据仍然存在       | 待页面验证             |
| 统计恢复 | 浏览器页面      | 刷新已有待办的页面   | 总数和完成数与列表一致 | 当前可能不通过         |
| 项目构建 | 项目根目录      | 执行 `pnpm build`    | 命令退出码为 0         | 退出码 0（2026-08-11） |
