// Copyright (c) 2020 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.

export const enum types {
  NEW_TAB_STATS_UPDATED = '@@newtab/NEW_TAB_STATS_UPDATED',
  NEW_TAB_PRIVATE_TAB_DATA_UPDATED = '@@newtab/NEW_TAB_PRIVATE_TAB_DATA_UPDATED',
  NEW_TAB_PREFERENCES_UPDATED = '@@newtab/NEW_TAB_PREFERENCES_UPDATED',
  NEW_TAB_DISMISS_BRANDED_WALLPAPER_NOTIFICATION = '@@newtab/NEW_TAB_DISMISS_BRANDED_WALLPAPER_NOTIFICATION',
  NEW_TAB_SET_INITIAL_DATA = '@@newtab/NEW_TAB_SET_INITIAL_DATA',
  // Rewards Widget
  CREATE_WALLET = '@@newtab/CREATE_WALLET',
  DISMISS_NOTIFICATION = '@@newtab/DISMISS_NOTIFICATION',
  ON_ADS_ENABLED = '@@newtab/ON_ADS_ENABLED',
  ON_ADS_ESTIMATED_EARNINGS = '@@newtab/ON_ADS_ESTIMATED_EARNINGS',
  ON_ENABLED_MAIN = '@@newtab/ON_ENABLED_MAIN',
  ON_WALLET_INITIALIZED = '@@newtab/ON_WALLET_INITIALIZED',
  ON_BALANCE_REPORT = '@@newtab/ON_BALANCE_REPORT',
  ON_PROMOTIONS = '@@newtab/ON_PROMOTIONS',
  ON_PROMOTION_FINISH = '@@newtab/ON_PROMOTION_FINISH',
  ON_BALANCE = '@@newtab/ON_BALANCE',
  ON_WALLET_EXISTS = '@@newtab/ON_WALLET_EXISTS',
  SET_INITIAL_REWARDS_DATA = '@@newtab/SET_INITIAL_REWARDS_DATA',
  SET_PRE_INITIAL_REWARDS_DATA = '@@newtab/SET_PRE_INITIAL_REWARDS_DATA',
  ON_WIDGET_POSITION_CHANGED = '@@newtab/ON_WIDGET_POSITION_CHANGED',
  SET_CURRENT_STACK_WIDGET = '@@newtab/SET_CURRENT_STACK_WIDGET'
}

export type DismissBrandedWallpaperNotificationPayload = {
  isUserAction: boolean
}
