Задание
Создать страницу интернет-магазина.
Для этого необходимо дополнить проект, созданный в предыдущем домашнем задании homework1.

Технические требования:

Создать массив с коллекцией товаров интернет-магазина.

Один товар должен содержать в себе такие данные :

Название 

Цена 

Путь к картинке (url в интернете или путь к файлу в папке public)

Артикул (любые цифры)

Цвет


Всего товаров должно быть не менее 10. 
Тематика магазина - любая.
Положить массив в JSON файл, который будет храниться в папке public вашего проекта.

С помощью AJAX запроса получить данные из масива товаров, 
записать в локальное состояние (state) компонента главной страницы.

Вывести на страницу список товаров. 

Дизайн можно взять из приложенного PSD файла из секции LATEST ARRIVALS IN MUSICA либо любой свой. Дизайн может быть любой, но он должен быть.

При реализации карточки товара и список товаров обязательно должны находиться в разных компонентах.

При нажатии на кнопку Add to cart должно появляться модальное окно с подтверждением добавления товара в корзину (использоуйте соответствующий компонент из homework1.

Также на каждой карточке товара должна быть иконка звездочки, которая позволит добавить товар в избранное. Если товар избранный - звездочка должна быть закрашена любым цветом.

При добавлении товара в корзину или в избранное, сохранять соответствующее изменение в localStorage.

Проект можно стилизировать с помощью JSS или SCSS.

Все компоненты должны быть созданы в виде ES6 классов.

Свойства, которые передаются в компоненты, должны быть проверены с помощью propTypes.

Для всех свойств, которые не явзяются обзательными, необходимо указать defaultProps.

На данный момент в приложении должна быть только одна страница - главная страница со списком товаров.



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
