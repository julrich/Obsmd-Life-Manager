
## TODO
* [x] Where are `event-latest-teaser` and `event-list-teaser` components in section / Storyblok?
* [x] Downloads key duplicated in downloads component
* [ ] `prepareProject` should be repeatable / idempotent
* [ ] Change component previews to use light stage, not old DSA dark stage in preset screenshots
* [ ] Hunt + fix all `@ts-expect-error`
* [ ] Dark bg in component previews, mis-aligned / -sized component previews
* [ ] Update everything (project, Circle CI, Dockerfile, kamal, etc)
* [ ] Events
	* [ ] Event List Teaser not functional (nested components broken?)
		* [ ] Specifically, tags are not working right now
* [ ] new favicon, meta image, title, descriptions
* [ ] Hot reload for client js changes (e.g. changing `umami.client.js` necessitates stopping running dev server to first run `npm run bundle-static-assets`)
* [ ] Icon integration, sprite and plugin don't seem to work any more
* [ ] Change breadcrumb to have more semantic markup: https://developer.mozilla.org/en-US/docs/Web/CSS/How_to/Layout_cookbook/Breadcrumb_navigation#recipe

## First Checkout
- [ ] `import calculated from "@/token/calculated"` failing initially because of missing `npm run build` before `npm run init`, double check README.md if this is actually well documented
- [ ] Missing `c15t` dependency
- [ ] Missing `ts-expect-errors` in `ComponentProviders.tsx`, `SectionProvider.tsx`, breaking `npm run build`
- [ ] Update to newest `ds-agency-premium`-release
- [ ] `npm run init` / `prepareProject.js` create `global` and `global_reference` in `components.123456.json`, which gets overwritten by subsequent `npm run create-storyblok-config` calls, should be unified
- [ ] Small schema bugs after conversion + initialization:
	- [ ] `Components` group only includes `info-table`, `split-even` and `split-weighted`
	- [ ] Duplicated group for content components called `FirstComponents` (coming from Split Even)
	- [ ] Groups in components `section`, `split-even` and `split-weighted` set incorrectly, should all be: ["Components", "Global"]
	- [ ] `components` key in slider component missing, should be the exact same as for `section`
	- [ ] default `mode` for section should be set to `list`, not `default`
- [ ] Add `.circleci` stuff for hooks
- [ ] Check for `window.umami` actually existing in `umami.client.js`