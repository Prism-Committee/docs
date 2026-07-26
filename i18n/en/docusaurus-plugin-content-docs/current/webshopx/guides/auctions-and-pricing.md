---
id: auctions-and-pricing
title: Auctions, Dynamic Pricing, and Trading Rules
sidebar_label: Auctions and Dynamic Pricing
sidebar_position: 5
---

# Auctions, Dynamic Pricing, and Trading Rules

Three closely related player questions are covered together: how auctions settle, why prices move, and why a listing can be rejected.

## Trading modes

| Type | Core behavior |
| --- | --- |
| Direct sell | `SELL + DIRECT`, buy at the current price |
| Buy order | `BUY + DIRECT`, sellers fulfill demand |
| Auction | `SELL + AUCTION`, settlement follows the auction algorithm |
| Dynamic pricing | Some direct products/listings adjust price from market demand |

`BUY` listings do not use auctions or dynamic pricing.

## Auction modes

- **English** `ENGLISH_AUCTION_V1`: public increasing bids; highest valid bid wins.
- **Dutch** `DUTCH_AUCTION_V1`: price falls over time; the first buyer to accept wins.
- **Vickrey** `VICKREY_AUCTION_V1`: sealed bids; winner is the highest bidder with second-price-style settlement.
- **Candle** `CANDLE_AUCTION_V1`: public bidding with uncertain ending behavior to reduce last-second sniping.

Funds may be reserved while a bid is active and returned when the bidder is outbid or the auction fails.

## Dynamic pricing

Dynamic pricing is commonly used for selected official item products and `SELL + DIRECT` market listings. It is normally not used for buy orders, auctions, or non-item products such as commands and effects.

Player-facing intuition for common algorithms:

- linear demand: steady price movement;
- diminishing/log smoothing: movement becomes softer as demand grows;
- exponential/panic models: stronger protection against sudden demand spikes;
- threshold models: little movement before a threshold, stronger movement afterward;
- elasticity models: sensitivity is controlled by an elasticity parameter.

## Listing restrictions

Listings can be rejected because of item, side, trade-mode, currency, tag, or permission rules. When troubleshooting, first identify whether the action is a sell order, buy order, or auction, then retry with a common currency/tag/item before contacting an administrator.

Common errors include `auction_closed`, `bid_too_low`, `limitation_item_forbidden`, `limitation_side_not_allowed`, `limitation_trade_mode_not_allowed`, `limitation_currency_not_allowed`, and `invalid_tag`.

For exact protocol/error definitions, see [Reference](../reference/overview).
