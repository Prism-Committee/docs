---
id: configuration
title: Configuration Details
sidebar_label: Configuration Details
sidebar_position: 3
---

# Configuration Details

`WebShopX-Payments` has two independent configuration files:
1. **`config.yml`**: Loaded by the Bukkit plugin, controlling payment channel toggles and API synchronous timeout durations.
2. **`backend/config.json`**: Loaded by the embedded payment backend, storing sensitive merchant credentials and proxy settings for third-party/official payment interfaces.

---

## 1. Plugin Configuration `config.yml`

The structure of `config.yml` (since the removal of the in-game map QR code feature in the current version) is as follows:

```yaml
# ==========================================
# WebShopX-Payments Core Configuration
# ==========================================

# Payment interface behavior control
payment:
  # The maximum synchronization wait time (seconds) for the plugin to receive payment creation responses from the embedded backend
  api-timeout-seconds: 15
  
  # In-game frontend toggles for each payment channel (controls whether these payment options are displayed in the main storefront)
  enable:
    wechat: true         # WeChat Pay
    alipay: true         # Alipay
    paypal: true         # PayPal (International)
    mercadopago: false   # MercadoPago (Latin America)
    stripe: false        # Stripe (Credit Cards, optional)
```

---

## 2. Backend `backend/config.json` Basic Infrastructure

The `config.json` file is stored under the `plugins/WebShopX-Payments/backend/` directory. This section introduces the global common parameters and the proxy configuration structure.

### (1) Global Common Parameters

```json
{
  "debug": false,
  "log_level": "INFO",
  "port": 62233,
  "proxy": {
    "enable": false,
    "type": "HTTP",
    "host": "127.0.0.1",
    "port": 7890,
    "username": "",
    "password": ""
  }
}
```

| Parameter Key | Type | Default Value | Description |
| --- | --- | --- | --- |
| `debug` | Boolean | `false` | Whether to enable debug mode (detailed logs of underlying network communications will be printed). |
| `log_level` | String | `"INFO"` | Controls the log output level for the backend. Valid values include: `INFO`, `DEBUG`, `WARN`, `ERROR` etc. |
| `port` | Integer | `62233` | Local port for the embedded backend. Must match the communication port configured on the Bukkit plugin side. If port conflicts occur, please restart the server after modification. |
| `proxy` | Object | (See below) | **Global Proxy Settings**. Used when the server has difficulty directly connecting to certain overseas or external payment gateways. |

---

### (2) General Proxy Structure `ProxySettings`

In restricted server network environments, you can configure proxy services to ensure smooth connectivity to external payment channels (e.g., PayPal interfaces or other blocked networks).

Supported fields for the `proxy` object are as follows:

```json
"proxy": {
  "enable": true,            // Whether to enable this proxy
  "type": "HTTP",            // Proxy type: supports "HTTP" or "SOCKS"
  "host": "127.0.0.1",       // IP address or domain of the proxy server
  "port": 7890,              // Proxy port
  "username": "my_user",     // Username for proxy authentication (leave empty "" if no authentication)
  "password": "my_password"  // Password for proxy authentication (leave empty "" if no authentication)
}
```

:::tip[Local Proxy Override Mechanism]
In addition to the **global proxy** defined at the root node, each individual payment channel configuration (e.g., `wechat_native.proxy`, `paypal.proxy`, etc.) also supports the exact same `proxy` object.
- If a local proxy is not configured, it will **inherit** the global proxy settings by default.
- If a local proxy is explicitly configured, it will **override** the global proxy and apply only to that specific payment channel.
:::
