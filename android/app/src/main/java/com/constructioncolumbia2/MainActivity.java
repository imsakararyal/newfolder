package com.constructioncolumbia2;


import org.devio.rn.splashscreen.SplashScreen; 
//import com.cboy.rn.splashscreen.SplashScreen;

import android.os.Bundle;


import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */

protected void onCreate(Bundle savedInstanceState) {
SplashScreen.show(this); // here
super.onCreate(savedInstanceState);
}

    @Override
    protected String getMainComponentName() {
        return "constructioncolumbia2";
    }
}
