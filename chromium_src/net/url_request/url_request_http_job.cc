/* Copyright (c) 2020 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "net/url_request/url_request_http_job.h"

#include "base/bind.h"
#include "net/base/features.h"
#include "net/base/isolation_info.h"
#include "net/cookies/cookie_monster.h"
#include "net/url_request/url_request.h"

namespace {

bool ShouldUseEphemeralStorage(net::URLRequestHttpJob* http_job) {
  if (!base::FeatureList::IsEnabled(net::features::kBraveEphemeralStorage))
    return false;

  const net::IsolationInfo& isolation_info =
      http_job->request()->isolation_info();
  if (!isolation_info.top_frame_origin().has_value() ||
      !isolation_info.frame_origin().has_value())
    return false;
  if (*isolation_info.top_frame_origin() == *isolation_info.frame_origin())
    return false;

  return true;
}

}  // namespace

#define BRAVE_ADDCOOKIEHEADERANDSTART                                          \
  if (ShouldUseEphemeralStorage(this))                                         \
    static_cast<CookieMonster*>(cookie_store)                                  \
        ->GetEphemeralCookieListWithOptionsAsync(                              \
            request_->url(),                                                   \
            request()->isolation_info().top_frame_origin()->GetURL(), options, \
            base::BindOnce(&URLRequestHttpJob::SetCookieHeaderAndStart,        \
                           weak_factory_.GetWeakPtr(), options));              \
  else

#define BRAVE_SAVECOOKIESANDNOTIFYHEADERSCOMPLETE                              \
  if (ShouldUseEphemeralStorage(this))                                         \
    static_cast<CookieMonster*>(request_->context()->cookie_store())           \
        ->SetEphemeralCanonicalCookieAsync(                                    \
            std::move(cookie), request_->url(),                                \
            request()->isolation_info().top_frame_origin()->GetURL(), options, \
            base::BindOnce(&URLRequestHttpJob::OnSetCookieResult,              \
                           weak_factory_.GetWeakPtr(), options,                \
                           cookie_to_return, cookie_string));                  \
  else

#include "../../../../../net/url_request/url_request_http_job.cc"
