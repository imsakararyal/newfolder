package com.constructioncolumbia2;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;

import com.microsoft.codepush.react.CodePush;
import com.RNFetchBlob.RNFetchBlobPackage;
import io.realm.react.RealmReactPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.avishayil.rnrestart.ReactNativeRestartPackage;
import org.wonday.pdf.RCTPdfView;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import com.rnfs.RNFSPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.agontuk.RNFusedLocation.RNFusedLocationPackage;


//import io.invertase.firebase.RNFirebasePackage;
//import io.invertase.firebase.messaging.RNFirebaseMessagingPackage; // <-- Add this line
//import io.invertase.firebase.notifications.RNFirebaseNotificationsPackage; // <-- Add this line
public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

        @Override
        protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
        }
    
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ReactNativePushNotificationPackage(),
         //  new RNFirebasePackage(),
          //  new RNFirebaseMessagingPackage(), // <-- Add this line
           // new RNFirebaseNotificationsPackage(),

            new CodePush(null, getApplicationContext(), BuildConfig.DEBUG),
            new RNFetchBlobPackage(),
            new RealmReactPackage(),
            new VectorIconsPackage(),
            new SvgPackage(),
            new SplashScreenReactPackage(),
            new ReactNativeRestartPackage(),
            new RCTPdfView(),
            new RNLanguagesPackage(),
            new RNFSPackage(),
           new RNFusedLocationPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

@Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
}
}
