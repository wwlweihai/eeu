测试账号 88888888 password

cordova build --release android

keytool -genkey -v -keystore hkee-release-key.keystore -alias cn.rocksw.eeu -keyalg RSA -keysize 2048 -validity 10000
秘钥 w123321w
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore hkee-release-key.keystore android-release-unsigned.apk cn.rocksw.eeu


keytool -genkey -v -keystore eeu-release-key.keystore -alias com.waysapp.eeu -keyalg RSA -keysize 2048 -validity 10000
秘钥 w123321w
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore eeu-release-key.keystore android-release-unsigned.apk com.waysapp.eeu



/Users/jyh/Desktop/dev/tools/android-sdk-macosx/build-tools/22.0.1/zipalign -v 4 android-release-unsigned.apk hkee.apk
