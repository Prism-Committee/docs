---
id: relay-access
title: Relay Public Access
sidebar_label: Relay Public Access
sidebar_position: 3
---

# Relay Public Access

Relay gives WebShopX a public entry point without directly exposing the Minecraft server's web port. This page only covers the server-owner workflow; the Relay service itself is closed source.

## When to use Relay

- You do not have a fixed public IP or convenient port forwarding.
- You want a managed public entry point for WebShopX.
- You do not want to operate Nginx, certificates, and public forwarding yourself.

Relay is the third server mode alongside `internal` and `external`.

## Recommended authorization flow

1. Join the server with an account that has `webshop.admin`.
2. Run `/ws mode setup relay`.
3. Open the secure authorization link returned in game.
4. Sign in or register on the Relay page and authorize the current server.
5. Return to the game and wait for authorization to complete.
6. Run `/ws mode switch relay`.
7. Run `/ws home` and verify that the public page opens.

Do not share authorization links, access keys, or verification codes in tickets or public chat.

## Manual configuration

```yaml
webshop:
  server-mode: relay
  public-url: ""

relay:
  url: ""
  access-key: "your-access-key"
```

Restart the server after saving. Never commit the real `access-key` to Git or expose it in screenshots.

## Switch back to local mode

Use `/ws mode switch internal` or `/ws mode switch external`.

- `internal`: plugin serves both API and static web pages.
- `external`: plugin serves API only; web assets are hosted behind an external proxy or CDN.

## Troubleshooting

- **No authorization link**: run the setup command as an in-game administrator.
- **Authorization expired**: run `/ws mode setup relay` again.
- **Authorization succeeded but the page does not open**: confirm Relay mode is active and inspect connection logs.
- **Possible key leak**: revoke or replace the key immediately and re-authorize the server.
