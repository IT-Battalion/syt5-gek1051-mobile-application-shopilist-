# Developing

First, follow the Quickstart section in the README to ensure you have all prerequisites installed correctly.

If you do not want to deploy the application to your phone, you can run `ionic cap build android` instead of the `run` command. But, one of the two is required, as they create the necessary files for the native project to compile.

Because we use Capacitor, the application is split into two parts:

- the frontend, build with web technologies
- the native component that is responsible for interacting with the operating system and instantiating the frontend, build with the Android SDK

The web part is located in `./shopilist/src` and can be edited with VSCode. The native component is located in `./shopilist/android` and is best edited with Android Studio.

## Frontend

Open the `shopilist` folder in VSCode and install the recommended plugins (they are listed in `./shopilist/.vscode/extensions.json`). Additionally, enable Volar Takeover Mode, as described in the [Vue Docs](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

To get a preview of how the UI looks, use the following command, which will start a live reload server.

```
ionic serve
```

Per default, the frontend will be accessible under `http://localhost:8100`. This address can be opened in the browser to check the UI. Note though, that any native functionality will not be available, so this is merely useful for testing changes to the Vue views. You can also launch this server on an external host (with the `--external` flag) to access it on your mobile phone instead, just make sure that both your phone and your computer are in the same network.

### Entrypoint

The main view can be found in `shopilist/src/views/HomePage.vue`. The router configuration resides in `shopilist/src/router/index.ts`.

## Native

To open Android Studio you can use `ionic cap open android`. You can start the application like you would start any other Android project, by using the run button in the IDE.

Everytime you make changes to the frontend code, you will have to copy the new bundle to the Android project. `ionic cap run` performs this step automatically, you can invoke it manually with `ionic cap copy`.

If you get any errors during the Gradle build process about missing files, something went out of sync or you forgot to run the setup commands as described at the beginning of this document. To fix this error, you just need to run `ionic cap sync android`.

### Entrypoint

Take a look at the `MainActivity.java` file. It extends from capacitors `BridgeActivity`, which handles all the WebView related setup automatically for us.

## Testing

Manual testing can be performed by running the application on a device:

```
ionic cap run android
```

### Android Virtual Device (AVD) support

To use an AVD, you need to use Android Studio for starting the application. Select the AVD from the Drop-Down and hit the run button, it will launch the AVD automatically. You just need to remember to run `ionic cap copy android` everytime you make some changes to the frontend.