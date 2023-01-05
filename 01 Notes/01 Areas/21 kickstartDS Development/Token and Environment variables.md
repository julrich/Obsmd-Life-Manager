# Types of token in use

## Chromatic

General project token, can be regenerated in each project with admin permission... also never expires. Is used to push test results from CI / CD.

## Circle CI

TBD, needs input by [[Lukas Mestel]]. Currently private token in his account.

## Github

Only needs the following scopes, as a Personal Access Token on Github:
![[Pasted image 20230105214034.png]]
Currently private token in [[Jonas Ulrich]]s account. Also saved in 1Password as ["Github Auto Release Personal Access Token"](https://start.1password.com/open/i?a=WRYEXKIGMJCTBNM4VHBLAIFLCE&h=ruhmesmeile.1password.com&i=2ux44fggm2elwxi4d6e2atxqxy&v=tevasol2hhnmrv5idpb2br7ini).

## npm

Currently only has an `automation` token `Circle CI Automation` in [[Jonas Ulrich]]s npm account, as a Personal Access Token:

![[Pasted image 20230105214635.png]]

Used in Circle CI to push new releases to `npm`.

## Contentful

Currently only used to get Glossary entries into our website. Never expires. Only the `Content Delivery API - access token` is used.

![[Pasted image 20230105222656.png]]

## InfluxDB

Used for CLI and component stats currently. CLI uses `kickstartDS CLI Telemetry PoC`, component stats uses the other three.

![[Pasted image 20230105223205.png]]
![[Pasted image 20230105223253.png]]
![[Pasted image 20230105223314.png]]
![[Pasted image 20230105223328.png]]
![[Pasted image 20230105223340.png]]

## Zendesk

Has a token for Orbit currently:
https://kickstartds.zendesk.com/admin/apps-integrations/apis/zendesk-api/settings

![[Pasted image 20230105224309.png]]

## Netlify

Used for deployment of kickstartDS website... not sure where `NETLIFY_AUTH_TOKEN` is from exactly.

## Sanity

Used for production builds of encore, tokens never expire:

![[Pasted image 20230105230104.png]]

# Circle CI

## Context: kickstartDS Env

Link: https://app.circleci.com/settings/organization/github/kickstartDS/contexts/75e6df85-822f-4b20-be4f-f7a7bd0d0db5

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=6080932e6ca776002127f0c5&view=configure / never expires
- `CHROMATIC_PROJECT_TOKEN_BASE`: https://www.chromatic.com/manage?appId=60832aa30a8f94002193547c&view=configure / never expires
- `CHROMATIC_PROJECT_TOKEN_BLOG`: https://www.chromatic.com/manage?appId=608332299164bb0021bc47c4&view=configure / never expires
- `CHROMATIC_PROJECT_TOKEN_FORM`: https://www.chromatic.com/manage?appId=60d382053a7c1f00494ae27f&view=configure / never expires
- `CIRCLE_CI_WEBSITE_BUILD_TOKEN`: https://app.circleci.com/settings/user/tokens / never expires (currently private token for [[Lukas Mestel]])
- `GH_TOKEN`: https://github.com/settings/tokens / 90 days valid
- `NPM_TOKEN`: https://www.npmjs.com/settings/julrich/tokens / never expires
- Current in use: ![[Pasted image 20230105213139.png]]

## Project: kickstartDS

Link: https://app.circleci.com/settings/project/github/kickstartDS/kickstartDS/environment-variables

### Token

No token.

### Environment

- `CACHE_VERSION` TBD, ask [[Lukas Mestel]]

## Project: content

Link: https://app.circleci.com/settings/project/github/kickstartDS/content/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=608332fa9164bb0021bc5f97&view=configure / never expires

## Project: kickstartDS-storybook

Link: https://app.circleci.com/settings/project/github/kickstartDS/kickstartDS-storybook/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=60dc476b80673e003b4258d6&view=configure / never expires

## Project: website

Link: https://app.circleci.com/settings/project/github/kickstartDS/website/environment-variables

### Token

- `CONTENTFUL_ACCESS_TOKEN`: https://app.contentful.com/spaces/6g9liq51xuol/api/keys / https://app.contentful.com/spaces/6g9liq51xuol/api/keys/6apgUDpOiAlQnoyz343Ak0 (uses `Content Delivery API - access token`) / never expires
- `GATSBY_INFLUX_TOKEN`: https://eu-central-1-1.aws.cloud2.influxdata.com/orgs/64a12d530a48adb2/load-data/tokens (uses `kickstartDS CLI Telemetry PoC`) / never expires
	- ![[Pasted image 20230105223253.png]]

### Environment

- `COOKIEPRO_DOMAIN_SCRIPT`
- `GATSBY_GA_MEASUREMENT_ID`
- `GATSBY_INFLUX_BUCKET`
- `GATSBY_INFLUX_ORG`
- `GATSBY_INFLUX_URL`
- `GOOGLE_GTAG_TRACKINGID`
- `GOOGLE_GTAG_UA`
- `HOTJAR_ID`
- `HOTJAR_SV`
- `WPGRAPHQL_URL`
- `WP_BASE_URL`
- `ZENDESK_KEY`

![[Pasted image 20230105220031.png]]

## Project: website-deployment

Link: https://app.circleci.com/settings/project/github/kickstartDS/website-deployment/environment-variables

### Token

- `NETLIFY_AUTH_TOKEN`: TBD

### Environment

- `NETLIFY_SITE_ID_LIVE`
- `NETLIFY_SITE_ID_STAGING`

## Project: encore

Link: https://app.circleci.com/settings/project/github/kickstartDS/encore/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=61bc751a722f9a003a3d5dc2&view=configure / never expires
- `CIRCLE_TOKEN`: https://app.circleci.com/settings/user/tokens / never expires (currently private token for [[Lukas Mestel]])
- `NETLIFY_AUTH_TOKEN`: TBD
- `SANITY_TOKEN`: https://www.sanity.io/organizations/oCCmIQBos/project/fb9udcri/api / never expires

### Environment

No environment variables.

## Project: sw-web-tokens

Link: https://app.circleci.com/settings/project/github/kickstartDS/sw-web-tokens/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=623af07f2fd2e8003a71bc96&view=configure / never expires

### Environment

No environment variables.

## Project: design-tokens-example

Link: https://app.circleci.com/settings/project/github/kickstartDS/design-tokens-example/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=624aac821f1036003a3d4d50&view=configure / never expires

### Environment

No environment variables.

## Project: doxie-component-library

Link: https://app.circleci.com/settings/project/github/kickstartDS/doxie-component-library/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=623d93d09b5b84003ab1e699&view=configure / never expires

### Environment

No environment variables.

## Project: awgc

Link: https://app.circleci.com/settings/project/github/kickstartDS/awgc/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=6149d42d5e1bb2003abf99de&view=configure / never expires

### Environment

No environment variables.

## Project: awgc-storybook

Link: https://app.circleci.com/settings/project/github/kickstartDS/awgc-storybook/environment-variables

### Token

- `CHROMATIC_PROJECT_TOKEN`: https://www.chromatic.com/manage?appId=60f00bf531643a003b253951&view=configure / never expires

### Environment

No environment variables.