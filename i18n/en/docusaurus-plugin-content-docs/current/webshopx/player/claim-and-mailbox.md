---
id: claim-and-mailbox
title: Claim and Mailbox
sidebar_label: Claim and Mailbox
sidebar_position: 5
---

# Claim and Mailbox

When delivery cannot complete immediately, you will interact with two fallback paths: `claim` and `mailbox`.

## 1. When Is Manual Claim Needed?

Common cases:

- Auto-delivery fails
- Delivery status enters `WAIT_CLAIM`
- Market trade requires manual claim

## 2. Claim Commands

```text
/ws claim
/ws claim all
/ws claim ODR-...
/ws claim MKT-...
/ws claim CLM-...
/ws claim MCL-...
```

## 3. Token and ID Prefixes

| Prefix | Meaning |
| --- | --- |
| `ODR-` | Official order ID |
| `MKT-` | Market trade ID |
| `CLM-` | Official order claim token |
| `MCL-` | Market trade claim token |

## 4. Shared Claim Switch

Config: `allow-shared-claim-command`

- `true`: delegated claim is allowed
- `false`: only the owner can claim; delegated claim returns `claim_forbidden`

## 5. Mailbox Fallback

When inventory cannot receive items, the system stores them in the in-game mailbox instead of dropping them:

```text
/ws mailbox
/ws mailbox collect
```

## 6. Common Error Codes

| Error Code | Description |
| --- | --- |
| `claim_token_invalid` | Token invalid, expired, incomplete, or state changed |
| `claim_forbidden` | Delegated claim attempted while shared claim is disabled |

<details>
  <summary>If you still cannot claim, try these steps first</summary>

1. Try `/ws claim all` first.
2. Free some inventory slots and claim again.
3. If it still fails, ask the server owner to verify whether the order or trade state changed.

</details>
