/* Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// tslint:disable:no-console

import webdriver = require('selenium-webdriver');

export default function() {
  try {
    return new webdriver.Builder()
      .forBrowser(process.env.SELENIUM_DRIVER || 'chrome')
      .build();
  } catch (e) {
    console.warn('Could not load driver, falling back to phantomjs');
    console.warn(e);
    return new webdriver.Builder()
      .forBrowser('phantomjs')
      .build();
  }
}
