## Semitic Transliteration
Soon, I will add a better name for this. It's a single page React app that transliterates among several Semitic languages.

## Getting started
To start out, you’ll need to have Node and NPM installed. If you don’t already, just use 
  `brew install node`
in your Terminal.

Next, clone the repository by typing in 
  `git clone https://github.com/benuchadnezzar/subway-checker`

And finally, enter 
  `npm install`

In order to run your dev server you’ll use
  `npm start`

For your code to run, you’ll also need to get an API key from the MTA. That can be obtained from datamine.mta.info. Make sure you set key equal to your API key in app/utils/api.js.

## Testing
In order to run tests, use
  `npm test`

No tests have been added at this time. Stay tuned.

## Deploying
To deploy, simply run
  `npm run build`
and run on the platform of your choice.

## Configuration
All apps generated through `create-react-app` come with their configurations thoughtfully abstracted away from us, the developers. However, if you wish to change something about in the Webpack or package.json files (aside from simply installing more packages), run
  `npm run eject`
Just be warned that once you eject, this can't be undone.

## Contributing
Contributions are always welcome. Just fork the repository and use a feature branch. Looking forward to your pull requests!
