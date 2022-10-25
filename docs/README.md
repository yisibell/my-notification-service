# API

## 测试服务是否可访问

| 接口地址 | 请求方式 | 请求参数 | 返回数据 |
| :---: | :---: | :---: | :---: |
| `/notification/test` | **GET** | - | `string` |

## 推送消息

| 接口地址 | 请求方式 | 请求参数 | 返回数据 |
| :---: | :---: | :---: | :---: |
| `/notification/fire` | **POST** | 见 `FireReqParams` 定义 | - |

**FireReqParams**

```json
  {
    "title": "",
    "content": ""
  }
```