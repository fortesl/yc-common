'use strict';

export default (price, currency) => (currency === 'CVE') ? price * 100 : price;