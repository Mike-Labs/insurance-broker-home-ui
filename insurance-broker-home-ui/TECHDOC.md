# Technical decisions : what, why and how they were implemented.


## Created a PrivacyInfo.xcprivacy file
* Apple mandates that app developers now specify approved reasons for API usage to enhance user privacy."
* For the Filesystem capacitor plugin, the required dictionary key is NSPrivacyAccessedAPICategoryFileTimestamp and the recommended reason is C617.1.
> The file is in `/ios/App`  
> More info at [Ionic Docs - Plugins - Filesystem](https://ionicframework.com/docs/native/filesystem#apple-privacy-manifest-requirements)

## PWA elements for camera desktop supprt
* Some Capacitor plugins, such as Camera or Toast, have web-based UI available when not running natively. For example, calling Camera.getPhoto() will load a responsive photo-taking experience when running on the web.
> npm i @ionic/pwa-elements

And in main.ts
> import { defineCustomElements } from '@ionic/pwa-elements/loader';  
> defineCustomElements(window);
