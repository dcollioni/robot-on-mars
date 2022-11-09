# Robot on Mars
See: [Test description](/test-description.md)

## How to run
1. Download and install [Node.js](https://nodejs.org/en/download/) (minimum required is v16)

1. Clone or download this repository

1. Install the dependencies:
    ```sh
    npm install
    ```

1. Run the app:
    ```sh
    npm start
    ```

1. Follow the intructions on screen to define the plateau dimension and the command input

    > The console output should look like the following:
    
    ```txt
    ✔ Please define the plateau dimension (e.g. 3x4) … 5x5
    ✔ Please enter the command input (e.g. FFRFLFRF) … FFRFLFLF
    1,4,West
    ```

## Unit tests
The unit tests can be run using:
```sh
npm test
```

Additionally, the code coverage can be extracted using:
```sh
npm test -- --coverage
```

---

[![Node.js CI](https://github.com/dcollioni/robot-on-mars/actions/workflows/node.js.yml/badge.svg)](https://github.com/dcollioni/robot-on-mars/actions/workflows/node.js.yml)
