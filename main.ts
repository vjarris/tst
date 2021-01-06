import './test/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

import './test.ts'

(function bootstrap () {
  if (window.jasmineRef) {
    location.reload();

    return;
  }

  window.onload(new Event('test'));
  window.jasmineRef = jasmine.getEnv();
}());
