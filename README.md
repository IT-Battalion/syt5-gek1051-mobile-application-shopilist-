# Shopilist

Shopping List implementation based on VueJS and Couchbase. The goal is to provide a collaborative Shopping List with offline first storage.

This project is developed as a part of the SYT labor, team members are Wimmer, Steindl and Hamacsek, the documentation can be found on [Overleaf](https://www.overleaf.com/read/pjtbhvfmkmyh).

## Quickstart

**Prerequisites**

- NodeJS installed on your system (for the `npm` command)
- a Java SDK installed on your system, we recommend JDK 17 from OpenJDK (to compile the Android component)
- Android SDK installed on your system (to build the Android component), the easiest way to achieve this is to install [Android Studio](https://developer.android.com/studio/) and follow the setup instructions
  - add the `ANDROID_SDK_ROOT` environment variable and adjust `PATH` to include the Android tools, see [here](https://ionicframework.com/docs/developing/android#configuring-command-line-tools) for detailed instructions
- an Android device with developer options enabled and debugging allowed (see [here](https://developer.android.com/studio/run/device#setting-up) for how to do that)
  - if you just want to test/preview the application, you can also use an Android Virtual Device created with Android Studio

**Setup**

- Install the Ionic CLI (see [here](https://ionicframework.com/docs/intro/cli) for more information)

  ```
  npm install -g @ionic/cli
  ```

- Clone the GitHub repository and change into the source directory

  ```
  git clone https://github.com/TGM-HIT/syt5-gek1051-mobile-application-shopilist shopilist && cd shopilist/shopilist
  ```

**Deploy application**

- Bundle the Web Assets (the frontend component)

  ```
  ionic capacitor copy android
  ```

- Start the Android application (make sure to plug your device in before running this command), this will install the application on your device

  ```
  ionic capacitor run android
  ```

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md).
