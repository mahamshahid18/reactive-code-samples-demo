# Getting Started with Emoji Responses API

This is just a  fun little project, a REST API that responds with emoji's based on the request.
If optional query parameters are set, the emoji being sent out might be different (depending on whether certain conditions are met in the input query parameters).


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).

The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)

> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`

* `npm --version`

![Version Check](https://apidocs.io/illustration/nodejs?workspaceFolder=EmojiResponsesAPI&step=versionCheck)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?workspaceFolder=EmojiResponsesAPI&step=resolveDependency1)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `lib` in to your `node_modules` folder.

## How to Use

The following section explains how to use the generated library in a new project.

### 1. Open Project Folder

Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?workspaceFolder=EmojiResponsesAPI&step=openProject)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js`.

![Create new file](https://apidocs.io/illustration/nodejs?workspaceFolder=EmojiResponsesAPI&step=createNewFile)

Now import the generated NodeJS library using the following lines of code:

```
const lib = require('lib');
```

Save changes.

Your `index.js` file should look like this now

![Save new file](https://apidocs.io/illustration/nodejs?workspaceFolder=EmojiResponsesAPI&step=saveNewFile)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?workspaceFolder=EmojiResponsesAPI&step=runProject)

## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run. Tests can be run in a number of ways:

### Method 1 - Run all tests

1. Navigate to the root directory of the SDK folder from command prompt. `(PathToSDK/EmojiResponsesAPI/)`

2. Type `mocha --recursive` to run all the tests.

### Method 2 - Run all tests

1. Navigate to the `PathToSDK/EmojiResponsesAPI/test/Controllers/` directory from command prompt.

2. Type `mocha *` to run all the tests.

### Method 3 - Run specific controller's tests

1. Navigate to the `PathToSDK/EmojiResponsesAPI/test/Controllers/` directory from command prompt.

2. Type `mocha EmojiResponsesAPI` to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?controllername=APIController&workspacefolder=EmojiResponsesAPI&step=runTests)

## Initializing

The API client can be initialized as following.

```js
const lib = require('lib');
const configuration = lib.Configuration;

```


## Authorizing your client

This API does not require authentication.


## API Reference

### List of APIs

* [APIController](#apicontroller)

### `APIController`

#### Overview

##### Get singleton instance

The singleton instance of the `APIController` class can be accessed from the API Client.

```
const lib = require('lib');
const controller = lib.APIController;
```

#### `getEmoji`

Chooses from 3 available emojis and sends one back based on inputs

```js
getEmoji(queryParameters)
```

##### Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `queryParameters` | `array` | Optional | Pass additional query parameters. |

##### Response Type

`string`

##### Example Usage

```js
let queryParameters = {'dialog1': 'May the force be with you!'};

const promise = controller.getEmoji(queryParameters);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'string'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```