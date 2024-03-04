# Write Your First Smart Contract on aelf

* In this quest, you will experience what it's like writing smart contracts on aelf where you will get to leverage on specifically designed contract templates to simplify the overall development experience! Furthermore, you will get to write test cases to enforce and solidify the logic of your smart contract and finally deploy your smart contract on the aelf testnet!

#Commands for environment configurations
 ## Ensure .NET SDK 8.0.101  is installed

 ## verify installation
 `dotnet --version `

 ## Create Project using Template
 `
 mkdir first_contract_aelf && cd first_contract_aelf
`
## install  smart contract templates provided by aelf
`
dotnet new install AElf.ContractTemplates
`
## create a new smart contract project
`
dotnet new aelf -n MyCharacter

`
## test smart contract , head to test dir
`
dotnet test
`

## compile and build smart contract 
`
dotnet build
`