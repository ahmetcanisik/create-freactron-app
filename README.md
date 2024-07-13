# create-freactron-app

react ve electron'u birlikte kullanarak bir uygulama geliştirebilirsiniz.

install with : [npm](#install-with-npm) or [yarn](#install-with-yarn)


> [!IMPORTANT]   
> If there is no build folder in your project and you are trying to start electron then you will get an error. If you want to fix it, the following commands will work:   
> ```bash   
> yarn build  
> ```    


<br /><br />

## Install with npm

indirmek için şu komutları terminalinize giriniz `(npm)`

```bash
npx create-freactron-app my-app
```

indirdikten sonra proje dizinine giriyoruz `(npm)`

```bash
cd my-app
```

dizine girdikten sonra şu komutlar ile proje bağımlılıklarını indirin `(npm)`

```bash
npm install
```

projeyi `npm` ile başlat

```bash
npm run dev
```


| aktif komutlar   | amacı                                               |
|------------------|-----------------------------------------------------|
| npm run start    | react'ı başlatır                                    |
| npm run dev      | electron uygulamasını ve react sunucusunu başlatır. |
| npm run electron | electron'u başlatır                                 |
| npm run build    | react'ı build eder                                  |
| npm run dist     | electron'u build eder                               |



<br /><br />


## Install with yarn

indirmek için şu komutları terminalinize giriniz `(yarn)`

```bash
yarn create freactron-app my-app
```

indirdikten sonra proje dizinine giriyoruz `(yarn)`

```bash
cd my-app
```

dizine girdikten sonra şu komutlar ile proje bağımlılıklarını indirin `(yarn)`

```bash
yarn install
```

projeyi `yarn` ile başlat

```bash
yarn dev
```


| aktif komutlar | amacı                                               |
|----------------|-----------------------------------------------------|
| yarn start     | react'ı başlatır                                    |
| yarn dev       | electron uygulamasını ve react sunucusunu başlatır. |
| yarn electron  | electron'u başlatır                                 |
| yarn build     | react'ı build eder                                  |
| yarn dist      | electron'u build eder                               |