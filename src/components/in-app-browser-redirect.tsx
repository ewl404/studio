'use client';

import { useEffect } from 'react';

/**
 * This component detects if the user is inside a webview (like Facebook or Instagram's in-app browser)
 * and attempts to redirect them to their default system browser for a better experience,
 * as in-app browsers can have limitations (e.g., with PWA installation or push notifications).
 */
export default function InAppBrowserRedirect() {
    useEffect(() => {
        // This code runs only on the client-side
        const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
        
        // Basic checks for Facebook and Instagram in-app browsers
        const isInstagram = userAgent.indexOf('Instagram') > -1;
        const isFacebook = userAgent.indexOf('FBAN') > -1 || userAgent.indexOf('FBAV') > -1;

        if (isInstagram || isFacebook) {
            // For Android, we can use an 'intent' URL to try and force open in Chrome.
            if (/android/i.test(userAgent)) {
                try {
                    const currentUrl = window.location.href;
                    // The intent URL structure
                    const intentUrl = `intent:${currentUrl.replace(/https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
                    // Attempt to redirect
                    window.location.href = intentUrl;
                } catch (e) {
                    // This might fail if Chrome is not installed or for other reasons.
                    // As a fallback, we can alert the user.
                    alert("Para a melhor experiência, por favor, abra este link no seu navegador Chrome.");
                }
            } else {
                // For iOS and other operating systems, there's no reliable way to force a redirect.
                // The safest approach is to inform the user.
                alert("Para a melhor experiência, copie este link e abra no seu navegador padrão (Safari).");
            }
        }
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts.

    return null; // This component does not render any visible UI.
}
