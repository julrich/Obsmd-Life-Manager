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
	- Confirm the default `Project output path` by just entering a return
	- Confirm using TypeScript with `Y` or use the default by again entering a return
	- Select `yarn` for the package manager to use
	- This should result in roughly this output in your terminal:
	  ![[Pasted image 20230207181013.png]]
- Inside of your Sanity.io dashboard you should now see the newly created project:
  ![[Pasted image 20230207181109.png]]


https://api.sanity.io/v1/auth/callback/sanity?code=0agpxNdMPyPlnc0T&state=vrsYZjr2QgMQ7sQfoiggPjuu