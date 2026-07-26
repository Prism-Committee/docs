---
id: errors-and-idempotency
title: Errors and Idempotency
sidebar_label: Errors and Idempotency
sidebar_position: 6
---

# Errors and Idempotency

Use the stable `error` field as the programmatic branch key. Human-readable `message` text is for display and troubleshooting.

Common groups include:

- Authentication: `auth_required`, `auth_invalid`, `invalid_credentials`, `forbidden`
- Parameters: `bad_request`, `method_not_allowed`, `invalid_quantity`
- Wallet: `insufficient_funds`, `exchange_disabled`, `vault_unavailable`
- Market: `listing_unavailable`, `buy_requires_*`, `auction_closed`, `bid_too_low`, `limitation_*`
- Delivery/refund: `claim_forbidden`, `refund_not_allowed`, `refund_expired`, `already_refunded`

Use stable `idempotencyKey` values for state-changing requests such as exchange, order creation, market purchases, fulfilling BUY orders, and bids.

When retrying after a timeout, reuse the same key. Do not generate a new key for every retry of the same user action. If the server reports an idempotency conflict, stop blind retries and refresh the current business state first.
