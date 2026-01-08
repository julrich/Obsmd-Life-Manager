
## TODO
* [x] Where are `event-latest-teaser` and `event-list-teaser` components in section / Storyblok?
* [x] Downloads key duplicated in downloads component
* [ ] `prepareProject` should be repeatable / idempotent
* [ ] Change component previews to use light stage, not old DSA dark stage in preset screenshots
* [ ] Hunt + fix all `@ts-expect-error`
* [ ] Events
	* [ ] Event List Teaser not functional (nested components broken?)
		* [ ] Specifically, tags are not working right now

## First Checkout
- [ ] `import calculated from "@/token/calculated"` failing initially because of missing `npm run build` before `npm run init`, double check README.md if this is actually well documented
- [ ] Missing `c15t` dependency
- [ ] Missing `ts-expect-errors` in `ComponentProviders.tsx`, `SectionProvider.tsx`, breaking `npm run build`
- [ ] Update to newest `ds-agency-premium`-release
- [ ] `npm run init` / `prepareProject.js` create `global` and `global_reference` in `components.123456.json`, which gets overwritten by subsequent `npm run create-storyblok-config` calls, should be unified