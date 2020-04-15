# Google Translate Server

![](https://img.shields.io/badge/build-passing-success) ![](https://img.shields.io/badge/language-nodejs-orange.svg) [![](https://img.shields.io/badge/docker-ready-orange)](https://hub.docker.com/r/johndope/google-translate-server) [![](https://img.shields.io/docker/pulls/johndope/google-translate-server.svg)](https://hub.docker.com/r/johndope/google-translate-server) ![](http://img.shields.io/badge/license-MIT-lightgrey)

A express.js server wrapper for [google-translate-cn-api
](https://www.npmjs.com/package/google-translate-cn-api)

Use Google Translate API **WITHOUT a Goole account**!

## Features

- **Updated**, use Google Translate Web API;
- **Open Source**, **FREE** forever;
- **Cross Language**, simple REST API, basic url request in any language;
- **Fast**, choose your local Google Translate domian (eg. https://translate.google.cn/);
- **Auto Correction**;
- **ZERO Config**, `docker` ready, start service in 1 minute.

## Example

### Request

```shell
curl http://localhost:30031/?text=I spea Dutch!&to=zh-cn
```

### Response

```json
{
  "text": "我说荷兰语！",
  "from": {
    "language": {
      "didYouMean": false,
      "iso": "en"
    },
    "text": {
      "autoCorrected": false,
      "value": "I speak Dutch!",
      "didYouMean": true
    }
  },
  "raw": ""
}
```

## Use docker `Recommended`

```shell
docker run -it --rm -p 30031:30031 -e "DOMAIN=cn" johndope/google-translate-server
```

## Run directly

### Install

```shell
npm i
```

### Usage

```shell
# start with default port 30031
npm start

# specify port
yarn start -- -p 30032

# specify domain
# eg: translate.google.cn
# default: translate.google.com
yarn start -- -d cn
```

## Use docker-compose

```shell
# start with default port 30031
docker-compose up

# specify port
PORT=30032 docker-compose up

# specify domain
DOMAIN=cn docker-compose up
```

## Client Example

### curl

```shell
curl http://localhost:30031/?text=hello&to=zh-cn
```

### python

```python
import requests
from urllib.parse import urlencode

print(requests.get('http://localhost:30031/?'+urlencode({
    'text': 'I spea Dutch!',  # this input will trigger auto-suggestion
    'from': 'en',  # leave blank to auto detect
    'to': 'zh-cn',
    # 'raw': 'true',  # response contains unparsed response
    # 'domain': 'cn'  # change google translate domain, overrides default domain
})).json())
```

More details about query parameters: [google-translate-api](https://www.npmjs.com/package/google-translate-api) and [google-translate-cn-api](https://www.npmjs.com/package/google-translate-cn-api).

It's worth mention that, with `google-translate-cn-api`, you can now specify something like `domain: 'cn'` in the parameter to use your local `Google Translate` domain. Mode details can be found [here](https://github.com/lqqyt2423/google-translate-cn-api/blob/HEAD/example.js#L29-L31).

## Credit

- [google-translate-api](https://github.com/matheuss/google-translate-api)
- [google-translate-cn-api](https://github.com/lqqyt2423/google-translate-cn-api)

## Repository

**Github:** [John-Theo/google-translate-server](https://github.com/John-Theo/google-translate-server)

**Docker Hub:** [johndope/google-translate-server](https://hub.docker.com/r/johndope/google-translate-server/)

## License

This application comes with **ABSOLUTELY NO WARRANTY**, to the extent permitted by applicable law.
