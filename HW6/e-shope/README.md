###Задание /homework6/ :
Написать юнит тесты для приложения интернет-магазина.

Для этого необходимо дополнить проект, созданный в предыдущем домашнем задании [homework5](../homework5/readme.md).

#### Технические требования:
- Напишите несколько юнит-тестов для тестирования всех кнопок и модальных окон приложения.
- Для тестирования можно использовать библиотеки Jest или Enzyme.

__________________

####Задание /homework5/ :

Добавить возможность покупки товаров в корзине.

Для этого необходимо дополнить проект, созданный в предыдущем домашнем задании [homework4].

#### Технические требования:
Расширить функционал приложения, реализованного в ДЗ 1-4.
1. На странице корзины добавить несколько полей для получения от пользователя информации о нем о адресе доставки. В частности, форма как минимум должна включать следующие поля:
 - Имя пользователя
 - Фамилия пользователя
 - Возраст пользователя
 - Адрес доставки
 - Мобильный телефон
2. К полям добавить минимальные валидации (текст, число). Все поля должны быть обязательынми для заполнения.
3. Добавить кнопку `Checkout`, которая будет имитировать процесс покупки товаров в корзине.

Общая схема следующая:
 - Создаем и отображаем компонент с формой.
 - При заполнении полей формы, храним данные в redux.
 - При клике на `Checkout` выполняем валидации. Если что-то не так – не выполняем сабмит и выводим сообщение об ошибке. Если все ок – едем дальше.
 - При корректной информации в полях после нажатия на `Checkout` вызываем action, который в свою очередь очищает из localStorage данные о корзине. При этом в консоль должна быть выведена информация о приобретенных товарах, а также информация, которую пользователь заполнил в форме.

4. Для считывания данных, введенны в форму, а также для валидации обязательно необходимо использовать одну из библиотек - `redux-form` или `formik` + `yup`. 




Задание /homework4/ :

Подключить библиотеку Redux.

Для этого необходимо дополнить проект, созданный 
в предыдущем домашнем задании homework3.

Технические требования:

- Подключить библиотеки redux, react-redux и redux-thunk.

- После получения массива данных с помощью AJAX запроса, записать их в redux store.

- При выводе компонентов на страницу - данные брать с redux store.

- При открытии любых молальных окон - информация о том, открыто ли на данный момент модальное окно, должна храниться в redux store.

- Все action-ы должны быть выполнены в виде функций используя функционал redux-thunk.

- ..........................................


Задание /homework3/ :

Хуки и роутинг.

Для выполнения данного задания необходимо дополнить проект, созданный в предыдущем домашнем задании homework2.

Технические требования:

- Добавить в приложении две страницы - Корзина и Избранное.

>>На данных страницах для вывода информации можно использовать ту же карточку товара, 
которая используется на главной странице.

- У пользователя должна быть возможность удалить товар из корзины. 
Для этого рядом с карточкой товара должна быть иконка с крестиком. 

>>При удалении из корзины, перед самим удалением, для подтверждения действия 
модальное окно из домашнего задания homework1.

- У пользователя должна быть возможность удалить товар из избранного. 
Удаление из избранного происходит путем нажатия на иконку звездочки.

- В верхнем меню должны быть ссылки на все три страницы приложения.

- Переход между страницами должен осуществляться без перезагрузки страницы 
с использованием библиотеки react-router-dom.

- Переделать все классы на функциональные компоненты с использованием React hooks.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
