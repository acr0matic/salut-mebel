# Новый шаблон для salut-mebel.ru

Редизайн и верстка нового шаблона для сайта salut-mebel.ru на CMS Modx.  
Макет: https://figma.fun/40HWZF

  - Изменение структуры сайта
  - Новый современный дизайн и улучшеный UX
  - Удобная и приятная мобильная версия

# Нюансы!

  - Не поддерживается Internet Expolorer 11
  - Разметка размещена в php файлах
  - Для запуска нужен локальный сервер, я использовал OpenServer

### Установка

Требуется [Node.js](https://nodejs.org/) v4+  и [Yarn](https://yarnpkg.com/) для установки завимостей и запуска сборщика.

Установите все необходимые зависимости: 

```sh
$ yarn install 
```

Для старта режима разработки (запустится browserSync и автокомпиляция SCSS):

```sh
$ gulp serve
```

#### Подготовка к релизу

Для подготовки проекта к загрузки на хостинг или интеграции на CMS:

```sh
$ gulp build
$ gulp html
```

### Использованные технологии:

#### Технологии:
* [SCSS] - Препроцессор для CSS
* [PHP] - Язык программирования, использовался для разбивания разметки на фрагменты 
* [Yarn] - Менедежер пакетов, удобнее и быстрее чем NPM
* [Gulp] - Сборщик и автоматизатор рутины
* [Babel] - Транскомпилятор современного синтаксиса JavaScript 
* [PureJS] - Никакого JQuery, только чистый JavaScript

#### Библиотеки:
* [IMask] - Валидация форм, в данном случае - номера телефона
* [Swiper] - Многофункциональный и мощный слайдер
* [MicroModal] - Легковесная библиотека для создания модальный окон
* [Fslightbox] - Простой и удобный LightBox для просмотра фотографий
* [Handorgel] - Библиотека аккордеона 
