Задание:
Создать новое React приложение с двумя модальными окнами.

Технические требования:

Создать приложение с помощью create-react-app.
Создать на главной странице 2 кнопки с текстом Open first modal и Open second modal.
По клику на каждую из кнопок должно открываться соответствующее модальное окно.
Создать компонент Button который должен иметь следующие свойства, передаваемые из родительского компонента:

Цвет фона (свойство backgroundColor)
Текст (свойство text)
Функция при клике (свойство onClick)


Создать компонент Modal который должен иметь следующие свойства, передаваемые из родительского компонента:

Текст заголовка модального окна (свойство header)
Должен ли присутствовать крестик для закрытия окна справа вверху (boolean свойство closeButton, значения true/false)
Основной текст модального окна, который будет показан в его центральной части (свойство text)
Кнопки, которые находятся в нижней части модального окна, переданные в виде кода в формате JSX (свойство actions)


При открытом модальном окне оставшаяся часть страницы должна быть затемнена с помощью темного полупрозрачного фона.
Модальное окно должно закрываться при клике на затемненную область снаружи его контента.
Стилизировать кнопки и модальные окна с помощью SCSS
Кнопки должны быть разных цветов
Модальные окна должны содержать разный текст.
Дизайн модального окна дается в PSD файле.
Одно модальное окно сделать как в примере дизайна. Для второго нужно использовать другой текст и другие кнопки.
Все компоненты должны быть созданы в виде ES6 классов.


Необязательное задание продвинутой сложности

Вместо SCSS стилизировать компоненты с помощью JSS или Styled Components





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
