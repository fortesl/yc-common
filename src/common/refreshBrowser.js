'use strict';

export const windowRepaint = () => {
    const sel = window.document.getElementById('root');
    sel.style.display='none';
    window.setTimeout(() => {
        sel.offsetHeight; 
        sel.style.display='';
    }, 300);
};

export default function refreshBrowser() {
    window.scrollTo(0,0);
    window.location.reload();
}
