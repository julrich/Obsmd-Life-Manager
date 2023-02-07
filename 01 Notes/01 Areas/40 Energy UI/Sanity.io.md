# Account creation

- https://www.sanity.io/login
- `Create an account`
  ![[Pasted image 20230131115002.png]]
- `Sign up with Sanity`
  ![[Pasted image 20230131115055.png]]
- `Create account`
  ![[Pasted image 20230131115122.png]]
- Fill out information as needed, and `Continue`: 
  ![[Pasted image 20230207135235.png]]
- This should lead to:
  ![[Pasted image 20230207135331.png]]
- Creating the actual project involves using the CLI: https://www.sanity.io/docs/create-a-sanity-project
- Create the project:
```
npm create sanity@latest -- --template clean --create-project "Sanity Project" --dataset production
```
- Answer the prompts as follows:
	- Confirm installing `create-npm` globally with `y`
	- Choose `Login type` `E-mail / password`
	- Open the URL pasted to your terminal in your browser
	- Login with the account created before
	  ![[Pasted image 20230207180336.png]]
	- Confirm creation and linkage of your access token:
	  ![[Pasted image 20230207180622.png]]
	- You should be greeted by this:
	  ![[Pasted image 20230207180711.png]]
	- Back at the terminal: Confirm the default `Project output path` by just entering a return
	- Confirm using TypeScript with `Y` or use the default by again entering a return
	- Select `yarn` for the package manager to use
	- This should result in roughly this output in your terminal:
	  ![[Pasted image 20230207181013.png]]
- ... and inside of your Sanity.io dashboard you should now see the newly created project:
  ![[Pasted image 20230207181109.png]]
- Open `Sanity Project`, go to the `Datasets` tab and click on `+ New dataset`
  ![[Pasted image 20230207195934.png]]
  - Create a `staging` dataset
    ![[Pasted image 20230207200030.png]]
- Add additional `CORS origins` and and a `Token` through the `API` tab
  ![[Pasted image 20230207200714.png]]
- Remove the pre-filled `CORS origin` for `http://localhost:3333`
  ![[Pasted image 20230207200812.png]]
- Add new `CORS origins` for `http://localhost:5009` (local, but integrated in Rails app), `https://journeyengine.staging.wlp.cloud` (staging), and `http://localhost:3000` (local, but frontend only), like this (allowing credentials!):
  ![[Pasted image 20230207201032.png]]
- Create a `Token` with `Editor` permissions with name `EDL`, like follows:
  ![[Pasted image 20230207201146.png]]
- Be sure to copy the token, as this will be the only time it will be shown. Losing this would mean having to generate a wholly new token
  ![[Pasted image 20230207201405.png]]
- This should leave you with this view for the `API` tab
  ![[Pasted image 20230207201500.png]]
- Invite additional editors / users as needed through the `Members` tab (when doing so, make sure to select `Administrator` / `administrator` as the role, as those don't count towards the limited 3 editor seats... with the only distinction being that editors can't view / change project and accounting settings)
  ![[Pasted image 20230207200207.png]]
