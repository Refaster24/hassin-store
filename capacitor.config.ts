import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'e-commerce-1',
  webDir: 'out',
  server: {
    // cleartext:true,
    androidScheme: 'https'
  }
};

export default config;