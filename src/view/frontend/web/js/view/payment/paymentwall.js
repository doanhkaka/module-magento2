define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'paymentwall',
                component: 'Paymentwall_Paymentwall/js/view/payment/method-renderer/paymentwall'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
