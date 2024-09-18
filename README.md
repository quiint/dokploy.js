# dokploy.js

This SDK provides an easy-to-use interface for managing applications, authentication, databases, and more on your Dokploy platform.

Up to date with Dokploy v0.8.2.

## Installation

To install dokploy.js, run:

```bash
bun install dokploy.js
```

## Usage

To use:

```js
import Dokploy from 'dokploy.js'

const baseUrl = "http://dokploy-url.com/api"
const apiToken = "apiTokenHere-blahblahblah"
const dokploy = new Dokploy(baseUrl, apiToken)

    try {
        const response = await dokploy.user.all()
        console.log(response)

    } catch (error) {
        console.error('Error:', error.message)
    }
```

# License
Licensed under the MIT License.
