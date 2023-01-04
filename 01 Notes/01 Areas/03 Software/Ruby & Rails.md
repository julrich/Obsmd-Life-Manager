# Known problems

- Found, and resolved, a local Arch problem with `ruby` < version `3.x` (e.g. `2.7.6`) and only OpenSSL 3 being available (older versions of `ruby` need version `1.x`)
	- Fixed by updating `ruby-build`, which now detects this on installation and automatically includes a fix (a local, second version of `openssl` just for building ruby)