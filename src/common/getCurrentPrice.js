'use strict';

export default function getCurrentPrice (price, currency)  {
    return currency === 'CVE' ? price * 100 : price;
}