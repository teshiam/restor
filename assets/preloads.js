
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CAok8rlk.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.RiSaCe9K.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.DjlL6cco.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.BzFYygVH.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload-legacy.B5zhMyIU.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.C9balZYm.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument-legacy.CQvE8cPW.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer-legacy.CfvZjyQx.js","/cdn/shopifycloud/checkout-web/assets/c1/Title-legacy.BEuemQF_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion-legacy.CUoeFh6M.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation-legacy.Cr7h9-fV.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery-legacy.Cs24HynX.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes-legacy.BsSdL8X1.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation-legacy.XxOzF2SN.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom-legacy.aVdtEjhd.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc-legacy.Bu0O4K1x.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.D3H4jxaL.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.CGRZ9ztg.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.BJOItEma.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.OqxuRbBa.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks-legacy.O29sxL-l.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal-legacy.N8KxtoQJ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences-legacy.B0MpiDGe.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed-legacy.B63V5SMD.js","/cdn/shopifycloud/checkout-web/assets/c1/CalloutHeader-legacy.DuMpc1uZ.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer-legacy.mxMUUb84.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.u8VnDCWw.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox-legacy.DQGFMpjl.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound-legacy.DFXnhzXP.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.Dc1Sc4B8.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.c5A9YBXY.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel-legacy.DBFXAchJ.js","/cdn/shopifycloud/checkout-web/assets/c1/CompactChoiceList-legacy.GMQI10_G.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.BWXEm694.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase-legacy.B7EuEwWQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation-legacy.DmFMUdgB.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.DsFfF0T7.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel-legacy._eJkE0-v.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index-legacy.Bx2pk8N8.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.MWSsM3VJ.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.B22r61Zt.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.Dr6g1F6f.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod-legacy.DuD_x08h.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.DJIHjlRP.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks-legacy.kYXElVI9.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo-legacy.tl6BCssj.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.O693EHaU.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.CwIDcFEq.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.DdcwTR9X.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.DpdxV01E.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment-legacy.lax8JtdV.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField-legacy.CWT-cyc6.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.DC8HgFKZ.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary-legacy.Dx8Oo9Fj.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit-legacy.D0AQDMHW.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner-legacy.CUG7XxhH.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input-legacy.CtfM513p.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility-legacy.utCIxHnG.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants-legacy.CxiN0GmP.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector-legacy.B06uXRHV.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.DxCBwJbT.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.BM68zMrq.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions-legacy.C64EeHG1.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.XR0fs7lv.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.DhJoLx5h.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options-legacy.Cc2e2__D.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.B2oWcE9I.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.ll2fhaJj.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy._9xPXNLR.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea-legacy.DyVNMOZT.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.TdNimF10.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects-legacy.5ztwZWHA.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch-legacy.DWLH-Ipj.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot-legacy.BKwFov5D.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine-legacy.C0NdO2NP.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage-legacy.Dq_9o5s0.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension-legacy.HBDF-4xw.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions-legacy.CMTV0LlN.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode-legacy.B-xmJ4te.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates-legacy.DCA0mtXE.js","/cdn/shopifycloud/checkout-web/assets/c1/Extensions-ExtensionSkeletonTimer-legacy.Bds23dMr.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4-legacy.hxLzMo8h.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner-legacy.BGWd6Qxi.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.Daw0rTjR.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.DolRRxGc.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-legacy.lvCUB399.worker.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0014/6780/9852/files/logo_34cc5830-0c8c-42cc-9c0a-5a872592ac71_x320.svg?v=1689734724"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  