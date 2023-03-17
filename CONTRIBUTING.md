# Developing

First, follow the Quickstart section in the README to ensure you have all prerequisites installed correctly.

Because we use Capacitor, the application is split into two parts:

- the frontend, build with web technologies
- the native component that is responsible for interacting with the operating system and instantiating the frontend, build with the Android SDK

The web part is located in `./shopilist/src` and can be edited with VSCode. The native component is located in `./shopilist/android` and is best edited with Android Studio.