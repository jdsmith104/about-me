# about-me
The repository for my personal projects

# Things I want to learn/revist
- Building a clean multiplatform UI
- Designing a web page for mobile and desktop
- Using cloud services
- CI/CD
- Writing maintainable code
- Web unit testing
- MVVM pattern

# Instructions
- Go to front-end directory `cd front-end\App`
- Run web app locally `ionic serve`

# Dependencies
- ESLint Airbnb


# How to setup ESLint for typescript using yarn (airbnb)
## Setup
- `yarn add eslint`
- `yarn add @typescript-eslint/eslint-plugin`
- `yarn add @typescript-eslint/parser`
- `yarn add eslint-config-airbnb`
- Create config file: `yarn create @eslint/config`

## Check file
- Then `yarn run <file>`
- There may be an added stage to install prettier
- `yarn prettier .`

## Setting up Heroku deployment
- Follow [this guide](https://stackoverflow.com/questions/39197334/automated-heroku-deploy-from-subfolder)

### Deploying to Heroku
- Go to front-end folder `cd front-end/App` 
- Deploy `git push heroku main` or `git push heroku <branch-name>:main`

## Sources:
- https://eslint.org/docs/user-guide/getting-started
- https://github.com/airbnb/javascript
