#!/bin/sh
set -e
npx babel chart.js --out-file old-js/chart.js
npx babel chartjs-plugin-annotation.min.js --out-file old-js/chartjs-plugin-annotation.min.js
