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
	- Confirm the default `Project output path` by just entering a return
	- Confirm using TypeScript with `Y` or use the default by again entering a return
	- Select `yarn` for the package manager to use
	- ![[Pasted image 20230207140052.png]]